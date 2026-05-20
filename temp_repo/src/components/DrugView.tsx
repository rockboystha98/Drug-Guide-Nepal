import React, { useState, useMemo } from 'react';
import { DrugEntry } from '../types/formulary';
import { Pill, Activity, ShieldAlert, DollarSign, Info, FileText } from 'lucide-react';
import { infections } from '../data/guidelines';
import { renalAdjustments, noRenalAdjustmentDrugs, RenalRule } from '../data/renal_adjustments';

// Helper component to parse plain text dosing into a structured table
const DosingTable = ({ text, isEmergency, color }: { text: string, isEmergency: boolean, color: string }) => {
  const rows = useMemo(() => {
    if (!text) return [];
    const lines = text.split('\n').filter(l => l.trim().length > 0);
    const parsedRows: { indication: string, dosage: string }[] = [];
    
    lines.forEach(line => {
      // Split by ". " only if the next part looks like an indication (starts with a capital lette, has no periods, followed by a colon)
      const parts = line.split(/\.\s+(?=[A-Z0-9][^.]{1,40}:)/g);
      
      parts.forEach(part => {
        let cleanPart = part.trim();
        if (cleanPart.endsWith('.')) {
          cleanPart = cleanPart.slice(0, -1);
        }
        
        const colonIndex = cleanPart.indexOf(':');
        if (colonIndex !== -1 && colonIndex < 45) { // Ensure it's reasonably an indication
          const indication = cleanPart.slice(0, colonIndex).trim();
          const dosage = cleanPart.slice(colonIndex + 1).trim();
          
          // Check if "indication" is actually just "Max" or "Note" and fold it into previous if it makes sense, 
          // but it's safe to just treat as new row for table.
          parsedRows.push({ indication, dosage });
        } else {
          // If no colon, or colon is too far (meaning the whole sentence is a rule rather than Indication: dose)
          if (parsedRows.length > 0) {
             parsedRows[parsedRows.length - 1].dosage += '. ' + cleanPart;
          } else {
             parsedRows.push({ indication: 'General / Standard', dosage: cleanPart });
          }
        }
      });
    });
    return parsedRows;
  }, [text]);

  const themeClasses: Record<string, { text: string, th: string, bgEven: string, border: string }> = {
    blue: { text: 'text-blue-950', th: 'text-blue-800', bgEven: 'bg-blue-50/50', border: 'border-blue-200' },
    red: { text: 'text-red-950', th: 'text-red-800', bgEven: 'bg-red-50/50', border: 'border-red-200' },
    indigo: { text: 'text-indigo-950', th: 'text-indigo-800', bgEven: 'bg-indigo-50/50', border: 'border-indigo-200' },
    purple: { text: 'text-purple-950', th: 'text-purple-800', bgEven: 'bg-purple-50/50', border: 'border-purple-200' },
    gray: { text: 'text-gray-900', th: 'text-gray-500', bgEven: 'bg-white', border: 'border-gray-200' }
  };

  const theme = isEmergency ? themeClasses['gray'] : (themeClasses[color] || themeClasses['gray']);
  
  if (rows.length === 0) return null;
  if (rows.length === 1 && rows[0].indication === 'General / Standard') {
      return (
         <div className={`p-4 pt-1 text-sm font-medium ${theme.text} whitespace-pre-wrap`}>
            {rows[0].dosage}
         </div>
      );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className={`border-b ${theme.border}`}>
            <th className={`px-4 py-2 font-bold uppercase text-[10px] tracking-wider ${theme.th}`}>Indication / Route</th>
            <th className={`px-4 py-2 font-bold uppercase text-[10px] tracking-wider ${theme.th}`}>Dosage & Instructions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100/50">
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? theme.bgEven : 'bg-transparent'}>
              <td className={`px-4 py-3 font-semibold align-top ${theme.text} max-w-[140px] md:max-w-[180px]`}>{row.indication}</td>
              <td className={`px-4 py-3 font-medium align-top ${theme.text}`}>{row.dosage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface DrugViewProps {
  drug: DrugEntry;
  isPediatric: boolean;
  patientWeight: number;
  crcl: number;
  onClose?: () => void;
}

export default function DrugView({ drug, isPediatric, patientWeight, crcl, onClose }: DrugViewProps) {
  const [activeTab, setActiveTab] = useState<'dosing' | 'safety' | 'pharmacy'>('dosing');
  
  const isEmergency = drug.categoryId === 'anesthesia';
  const headerGradient = isEmergency ? 'from-red-700 to-red-900' : 'from-[#005A9C] to-blue-800';
  const classBadgeColor = isEmergency ? 'bg-red-950/50 text-red-100' : 'bg-blue-900/50 text-blue-100';
  const activeTabColor = isEmergency ? 'text-red-700 border-red-700' : 'text-[#005A9C] border-[#005A9C]';

  const getRenalAdjustment = (drugName: string): RenalRule | null => {
    if (crcl <= 0) return null;
    for (const config of renalAdjustments) {
      if (config.matchNames.some(name => drugName.toLowerCase().includes(name.toLowerCase()))) {
        const rule = config.rules.find(r => crcl <= r.maxCrCl && crcl >= (r.minCrCl || 0));
        if (rule) return rule;
      }
    }
    return null;
  };

  const currentRenalRule = useMemo(() => getRenalAdjustment(drug.genericName), [drug.genericName, crcl]);
  
  // Find specific disease protocols for this drug
  const diseaseProtocols = useMemo(() => {
    const protocols = [];
    for (const inf of infections) {
      if (inf.section !== (isPediatric ? 'pediatric' : 'adult')) continue;
      
      const treatmentMatch = inf.treatments.filter(t => t.drug.toLowerCase().includes(drug.genericName.toLowerCase()));
      if (treatmentMatch.length > 0) {
        protocols.push({
          disease: inf.name,
          subType: inf.subType,
          organisms: inf.organisms,
          treatments: treatmentMatch
        });
      }
    }
    return protocols;
  }, [drug.genericName, isPediatric]);

  return (
    <div className={`bg-white max-w-4xl mx-auto w-full rounded-xl shadow-sm border overflow-hidden relative shrink-0 ${isEmergency ? 'border-red-300 shadow-red-100' : 'border-gray-200'}`}>
      
      {/* Header */}
      <div className={`bg-gradient-to-r ${headerGradient} p-6 text-white relative`}>
        {onClose && (
           <button onClick={onClose} className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
           </button>
        )}
        <div className="flex items-center gap-2 mb-2">
          <span className={`${classBadgeColor} text-xs font-bold px-2 py-1 rounded tracking-widest uppercase`}>
            {drug.therapeuticClass}
          </span>
          {isEmergency && (
            <span className="bg-white text-red-700 text-xs font-black px-2 py-1 rounded tracking-widest uppercase flex items-center gap-1 shadow-sm">
               <Activity size={14} /> CRASH CART
            </span>
          )}
        </div>
        <h2 className="text-3xl font-black">{drug.genericName}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {drug.indications.map((ind, i) => (
            <span key={i} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
              {ind}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100 bg-gray-50">
        <button
          onClick={() => setActiveTab('dosing')}
          className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'dosing' ? `bg-white border-b-2 ${activeTabColor}` : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Activity size={16} /> Dosing & Indications
        </button>
        <button
          onClick={() => setActiveTab('safety')}
          className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'safety' ? 'text-rose-600 bg-white border-b-2 border-rose-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
        >
          <ShieldAlert size={16} /> Safety & ADR
        </button>
        <button
          onClick={() => setActiveTab('pharmacy')}
          className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'pharmacy' ? 'text-emerald-600 bg-white border-b-2 border-emerald-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Pill size={16} /> Price & Supply
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        
        {/* TAB: DOSING */}
        {activeTab === 'dosing' && (
          <div className="space-y-6">
            
            {drug.concentrationAlert && (
              <div className="bg-rose-50 border-l-4 border-rose-600 p-4 rounded-r-xl">
                 <h4 className="flex items-center gap-2 font-black text-rose-800 uppercase tracking-widest text-xs mb-1">
                   <ShieldAlert size={16} /> Concentration Alert
                 </h4>
                 <p className="text-rose-900 font-bold text-sm">{drug.concentrationAlert}</p>
              </div>
            )}

            {currentRenalRule && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-xl shadow-sm">
                <h4 className="font-bold tracking-tight text-red-800 flex items-center gap-2 mb-2">
                   <Activity size={16} /> Cockcroft-Gault Overrides Triggered (CrCl: {crcl} mL/min)
                </h4>
                {currentRenalRule.dose && <p className="text-sm font-medium text-red-900"><strong className="uppercase">Adjusted Dose:</strong> {currentRenalRule.dose}</p>}
                {currentRenalRule.freq && <p className="text-sm font-medium text-red-900"><strong className="uppercase">Adjusted Frequency:</strong> {currentRenalRule.freq}</p>}
                {currentRenalRule.warning && <p className="text-sm mt-1 text-red-700 italic">{currentRenalRule.warning}</p>}
              </div>
            )}



            <div className="w-full">
              <h3 className="font-bold text-gray-800 mb-2 border-b pb-1">General Standard Dosing</h3>
              {!isPediatric ? (
                <div className={`rounded-xl border overflow-hidden ${isEmergency ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'}`}>
                  <h3 className={`text-xs font-black uppercase tracking-wider p-3 pb-2 ${isEmergency ? 'text-gray-700' : 'text-blue-800'}`}>
                    Adult Dosage 
                  </h3>
                  <DosingTable text={drug.dosing.adult} isEmergency={isEmergency} color="blue" />
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {drug.dosing.pediatric && (
                    <div className={`rounded-xl border overflow-hidden ${isEmergency ? 'bg-red-50 border-red-200' : 'bg-indigo-50 border-indigo-200'}`}>
                      <h3 className={`text-xs font-black uppercase tracking-wider p-3 pb-2 flex items-center justify-between ${isEmergency ? 'text-red-800' : 'text-indigo-800'}`}>
                        <span>Pediatric Dosage</span>
                      </h3>
                      <DosingTable text={drug.dosing.pediatric} isEmergency={isEmergency} color={isEmergency ? "red" : "indigo"} />
                    </div>
                  )}
                  {drug.dosing.neonatal && (
                    <div className={`rounded-xl border overflow-hidden bg-purple-50 border-purple-200`}>
                      <h3 className="text-xs font-black text-purple-800 uppercase tracking-wider p-3 pb-2 flex items-center justify-between">
                        <span>Neonatal Dosage</span>
                      </h3>
                      <DosingTable text={drug.dosing.neonatal} isEmergency={false} color="purple" />
                    </div>
                  )}
                  {!drug.dosing.pediatric && !drug.dosing.neonatal && (
                     <div className="p-4 rounded-xl border bg-gray-50 border-gray-200 text-gray-600 text-sm font-medium">
                        Consult Pediatric Specialist - Dose not established in guidelines.
                     </div>
                  )}
                </div>
              )}
            </div>
            
            {drug.notes && drug.notes.length > 0 && (
              <div>
                <h4 className="font-bold text-gray-800 mb-2 border-b pb-1">Clinical Notes & Prescribing Rules</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {drug.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* TAB: SAFETY */}
        {activeTab === 'safety' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-rose-800 mb-2 border-b border-rose-100 pb-1">Contraindications</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {drug.safety.contraindications.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-800 mb-2 border-b border-amber-100 pb-1">Adverse Drug Reactions (ADR)</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {drug.safety.adr.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-6">
              <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                 <Info size={16} className="text-[#005A9C]" /> Organ & Pregnancy Adjustments
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Pregnancy/Lactation:</strong> {drug.safety.pregnancyLactation}</p>
                {(drug.renalAdjustment || drug.safety.renalAdjustment) && <p><strong>Renal:</strong> {drug.renalAdjustment || drug.safety.renalAdjustment}</p>}
                {drug.safety.hepaticAdjustment && <p><strong>Hepatic:</strong> {drug.safety.hepaticAdjustment}</p>}
              </div>
            </div>
          </div>
        )}

        {/* TAB: PHARMACY */}
        {activeTab === 'pharmacy' && (
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-emerald-800 mb-3 border-b border-emerald-100 pb-1">Bharatpur Formulary 2081 Data</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <span className="text-xs font-bold text-gray-500 uppercase">Available Strengths</span>
                  <div className="mt-1 text-gray-900 font-medium">
                     {drug.pharmacy.strengths.join(', ')}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <span className="text-xs font-bold text-gray-500 uppercase">Dosage Forms</span>
                  <div className="mt-1 text-gray-900 font-medium">
                     {drug.pharmacy.dosageForms.join(', ')}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
               <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded p-4 flex flex-col md:flex-row items-center justify-between gap-2">
                 <div className="flex items-center gap-2 text-emerald-800 font-bold">
                   <DollarSign size={20} /> Base Price (Approx)
                 </div>
                 <div className="text-xl md:text-2xl font-black text-emerald-900">
                   {drug.pharmacy.priceNPR ? `NPR ${drug.pharmacy.priceNPR}` : 'NPR: Variable/Local'}
                 </div>
               </div>
               
               {drug.pharmacy.brandNames && drug.pharmacy.brandNames.length > 0 && (
                 <div className="flex-1 border border-gray-200 rounded p-4">
                    <span className="text-xs font-bold text-gray-500 uppercase block mb-1">Common Brands</span>
                    <p className="text-sm font-medium text-gray-800">{drug.pharmacy.brandNames.join(', ')}</p>
                 </div>
               )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
