import React, { useState, useEffect } from 'react';
import { AlertTriangle, Activity, Droplets, Syringe, Info, CheckCircle2, ChevronDown, ChevronUp, Clock, Play, Square, RotateCcw } from 'lucide-react';

const GuidelineRec = ({ title, strength, rationale }: { title: string, strength: string, rationale: string | React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-red-200 rounded mb-2 bg-white shadow-sm overflow-hidden">
      <div className="flex justify-between items-center p-3 cursor-pointer hover:bg-red-50/50 transition-colors" onClick={() => setOpen(!open)}>
        <div className="flex items-start gap-2">
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex-none mt-0.5 ${strength === 'Strong' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
            {strength}
          </span>
          <span className="text-sm font-medium text-gray-800">{title}</span>
        </div>
        <div className="text-red-400 pl-2">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>
      {open && (
        <div className="p-3 bg-red-50/30 text-xs text-gray-700 border-t border-red-100 leading-relaxed">
          <div className="font-bold text-red-800 mb-1 flex items-center gap-1">
            <Info size={12} /> Rationale:
          </div>
          {rationale}
        </div>
      )}
    </div>
  );
};

export default function SepsisDashboard({
  isPediatric,
  patientWeight,
  setPatientWeight
}: {
  isPediatric: boolean;
  patientWeight: number;
  setPatientWeight: (w: number) => void;
}) {
  const targetWeight = patientWeight || 70;

  // Bundles Checklist
  const [lactateDrawn, setLactateDrawn] = useState(false);
  const [culturesDrawn, setCulturesDrawn] = useState(false);
  const [abxGiven, setAbxGiven] = useState(false);
  const [fluidsGiven, setFluidsGiven] = useState(false);
  const [vasoStarted, setVasoStarted] = useState(false);

  // Lactate Tracker
  const [initialLactate, setInitialLactate] = useState<number | ''>('');
  const [repeatLactate, setRepeatLactate] = useState<number | ''>('');

  // Sepsis Source
  const [suspectedSource, setSuspectedSource] = useState('unknown');
  const [riskMRSA, setRiskMRSA] = useState(false);
  const [riskMDR, setRiskMDR] = useState(false);
  const [riskFungal, setRiskFungal] = useState(false);

  // Hour 1 Timer Component State
  const [timerActive, setTimerActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeRemaining]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    if (timeRemaining > 1800) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (timeRemaining > 600) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-rose-600 bg-rose-50 border-rose-200 animate-pulse';
  };

  const calculateClearance = () => {
    if (initialLactate === '' || repeatLactate === '') return null;
    const initial = Number(initialLactate);
    const repeat = Number(repeatLactate);
    if (initial <= 0) return 0;
    return (((initial - repeat) / initial) * 100).toFixed(1);
  };

  const clearance = calculateClearance();

  const getEmpiricRecommendation = () => {
    const regimens: { name: string, adultDose: string, pedsDose: string }[] = [];

    if (suspectedSource === 'lung') {
      regimens.push(
        { name: "Ceftriaxone + Azithromycin (Community Acquired)", 
          adultDose: "Ceftriaxone 2g IV Q24H + Azithromycin 500mg IV Q24H", 
          pedsDose: "Ceftriaxone 50-100 mg/kg/day + Azithromycin 10 mg/kg/day" },
        { name: "Cefepime (Hospital Acquired / Pseudomonas risk)",
          adultDose: "Cefepime 2g IV Q8H (Consider prolonged infusion)",
          pedsDose: "Cefepime 50 mg/kg IV Q8H (Max 2g)" }
      );
    } else if (suspectedSource === 'gut') {
      regimens.push(
        { name: "Piperacillin-Tazobactam",
          adultDose: "Pip-Tazo 4.5g IV Q6H (Extended infusion preferred)",
          pedsDose: "Pip-Tazo 100 mg/kg IV Q8H (Max 4g pip)" },
        { name: "Ceftriaxone + Metronidazole (Alternative)",
          adultDose: "Ceftriaxone 2g IV Q24H + Metronidazole 500mg IV Q8H",
          pedsDose: "Ceftriaxone 50-100 mg/kg/day + Metronidazole 10 mg/kg IV Q8H" }
      );
    } else if (suspectedSource === 'skin') {
      regimens.push(
        { name: "Cefazolin (Non-necrotizing)",
          adultDose: "Cefazolin 2g IV Q8H",
          pedsDose: "Cefazolin 50 mg/kg IV Q8H" },
        { name: "Piperacillin-Tazobactam (Risk of Necrotizing / Polymicrobial)",
          adultDose: "Pip-Tazo 4.5g IV Q6H",
          pedsDose: "Pip-Tazo 100 mg/kg IV Q8H" }
      );
    } else {
      regimens.push(
        { name: "Piperacillin-Tazobactam (Unknown Source)",
          adultDose: "Pip-Tazo 4.5g IV Q6H (Extended infusion preferred)",
          pedsDose: "Pip-Tazo 100 mg/kg IV Q8H" },
        { name: "Cefepime (Unknown Source Alternative)",
          adultDose: "Cefepime 2g IV Q8H",
          pedsDose: "Cefepime 50 mg/kg IV Q8H" }
      );
    }

    const additions: { name: string, adultDose: string, pedsDose: string }[] = [];
    if (riskMRSA) additions.push({
       name: "Vancomycin (MRSA Coverage)",
       adultDose: "15-20 mg/kg IV Q8-12H (Target AUC/MIC 400-600)",
       pedsDose: "15 mg/kg IV Q6H (Target trough 10-15)"
    });
    if (riskMDR) additions.push({
       name: "Amikacin (Double Gram-Negative / MDR)",
       adultDose: "15-20 mg/kg IV Q24H",
       pedsDose: "15-20 mg/kg IV Q24H"
    });
    if (riskFungal) additions.push({
       name: "Micafungin (High-risk candidemia)",
       adultDose: "100mg IV Q24H",
       pedsDose: "2 mg/kg IV Q24H"
    });

    return { regimens, additions };
  };

  const empiric = getEmpiricRecommendation();

  return (
    <div className="w-full max-w-5xl mx-auto pb-16">
      
      {/* Header Banner */}
      <div className="bg-red-600 text-white rounded-xl p-4 md:p-6 mb-6 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white text-red-600 p-2 rounded-full animate-pulse">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Sepsis Emergency Mode</h2>
            <p className="text-red-100 text-sm font-medium">First 24-Hours Acute Resuscitation Protocol</p>
          </div>
        </div>
        <div className="bg-black/20 px-3 py-1.5 rounded flex items-center gap-2 border border-white/20">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span className="text-xs font-bold tracking-widest text-emerald-50">AD-FREE ZONE</span>
        </div>
      </div>

      {isPediatric && (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded shadow-sm text-sm text-amber-900 font-medium">
          <AlertTriangle className="inline w-4 h-4 mr-2 text-amber-600 relative -top-0.5" />
          Pediatric Sepsis Focus: Ensure careful 10-20 mL/kg fluid boluses and monitor for signs of Cold Shock (Epinephrine preferred) vs. Warm Shock (Norepinephrine preferred).
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Hour-1 Bundle & Therapy */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Sepsis Hour-1 Timer */}
          <section className="bg-white border shadow-sm rounded-xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-3">
                <div className={`p-3 rounded-full ${timerActive ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-500'}`}>
                   <Clock className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-bold text-gray-900 text-lg">Anti-Microbial 1-Hour Target</h3>
                   <p className="text-xs text-gray-500 font-medium">Time-to-antibiotics protocol</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className={`px-4 py-2 border rounded font-sans text-2xl font-black ${timerActive || timeRemaining < 3600 ? getTimerColor() : 'text-gray-400 bg-gray-50 border-gray-200'}`}>
                   {formatTime(timeRemaining)}
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                   {!timerActive && timeRemaining === 3600 ? (
                      <button onClick={() => setTimerActive(true)} className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm font-bold shadow-sm transition-colors">
                        <Play className="w-4 h-4" /> Start
                      </button>
                   ) : (
                      <>
                        <button onClick={() => setTimerActive(!timerActive)} className={`flex items-center justify-center w-10 h-10 rounded text-white shadow-sm transition-colors ${timerActive ? 'bg-amber-500 hover:bg-amber-600' : 'bg-emerald-500 hover:bg-emerald-600'}`}>
                          {timerActive ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                        </button>
                        <button onClick={() => { setTimerActive(false); setTimeRemaining(3600); }} className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded transition-colors" title="Reset Timer">
                          <RotateCcw className="w-4 h-4" />
                        </button>
                      </>
                   )}
                </div>
             </div>
          </section>

          <section className="bg-white border-2 border-red-100 rounded-xl p-4 md:p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
            <h3 className="text-xl font-bold flex items-center gap-2 text-red-900 mb-4 ml-2">
              <CheckCircle2 className="text-red-500" /> The Hour-1 Bundle
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200">
                <input type="checkbox" checked={lactateDrawn} onChange={(e) => setLactateDrawn(e.target.checked)} className="mt-1 w-5 h-5 text-red-600 rounded focus:ring-red-500" />
                <div className="flex-1">
                  <GuidelineRec 
                    title="1. Measure lactate level" 
                    strength="Weak" 
                    rationale="Suggest measuring blood lactate to guide resuscitation. Elevated lactate (or intermediate elevation >2 mmol/L) is a marker of tissue hypoxia and cellular dysfunction." 
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200">
                <input type="checkbox" checked={culturesDrawn} onChange={(e) => setCulturesDrawn(e.target.checked)} className="mt-1 w-5 h-5 text-red-600 rounded focus:ring-red-500" />
                <div className="flex-1">
                  <GuidelineRec 
                    title="2. Obtain blood cultures before administering antibiotics" 
                    strength="Strong" 
                    rationale="Collecting blood cultures as soon as possible limits delays and prevents false-negatives, but should not delay antibiotic administration in the presence of shock." 
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200">
                <input type="checkbox" checked={abxGiven} onChange={(e) => setAbxGiven(e.target.checked)} className="mt-1 w-5 h-5 text-red-600 rounded focus:ring-red-500" />
                <div className="flex-1">
                  <GuidelineRec 
                    title="3. Administer broad-spectrum antibiotics" 
                    strength="Strong" 
                    rationale={
                      <div>
                        <strong>Shock present:</strong> Immediately, ideally within 1 hour.<br/>
                        <strong>Shock absent (Definite/Probable sepsis):</strong> Immediately, ideally within 1 hour.<br/>
                        <strong>Shock absent (Possible sepsis):</strong> Rapid assessment within 3 hours, administer if concern persists.
                      </div>
                    }
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200">
                <input type="checkbox" checked={fluidsGiven} onChange={(e) => setFluidsGiven(e.target.checked)} className="mt-1 w-5 h-5 text-red-600 rounded focus:ring-red-500" />
                <div className="flex-1">
                  <GuidelineRec 
                    title={`4. Begin fluid resuscitation (${isPediatric ? '10-20' : '30'} mL/kg)`} 
                    strength="Weak" 
                    rationale="Suggest administering at least 30mL/kg of IV crystalloid in the first 3hr for adults. Balanced crystalloids are suggested over 0.9% saline." 
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200">
                <input type="checkbox" checked={vasoStarted} onChange={(e) => setVasoStarted(e.target.checked)} className="mt-1 w-5 h-5 text-red-600 rounded focus:ring-red-500" />
                <div className="flex-1">
                  <GuidelineRec 
                    title="5. Apply vasopressors if hypotensive during/after fluids" 
                    strength="Weak" 
                    rationale="Suggest initial IV crystalloid fluid bolus resuscitation followed by vasopressor support if hypotension persists. Peripheral access is acceptable initially." 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Empiric Therapy Selection */}
          <section className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
            <h3 className="text-lg font-bold flex items-center gap-2 text-gray-800 mb-4 border-b border-gray-100 pb-2">
              <Syringe className="text-[#1A73E8]" /> Empiric Therapy Selection
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                 <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Suspected Source</label>
                 <select value={suspectedSource} onChange={e => setSuspectedSource(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-blue-400">
                    <option value="unknown">Unknown Source</option>
                    <option value="lung">Lung / Pneumonia</option>
                    <option value="gut">Intra-abdominal / Gut</option>
                    <option value="skin">Skin / Soft Tissue</option>
                 </select>
              </div>
              <div className="space-y-2 pt-1 md:pt-5">
                 <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" checked={riskMRSA} onChange={e => setRiskMRSA(e.target.checked)} className="w-4 h-4 text-[#1A73E8] rounded" />
                    High risk for MRSA
                 </label>
                 <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" checked={riskMDR} onChange={e => setRiskMDR(e.target.checked)} className="w-4 h-4 text-[#1A73E8] rounded" />
                    High risk for MDR Organisms
                 </label>
                 <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" checked={riskFungal} onChange={e => setRiskFungal(e.target.checked)} className="w-4 h-4 text-[#1A73E8] rounded" />
                    High risk for Fungal Infection
                 </label>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex flex-col gap-3">
               <h4 className="text-xs font-bold text-blue-800 uppercase border-b border-blue-200 pb-1 mb-1">Recommended Regimens</h4>
               {empiric.regimens.map((reg, idx) => (
                  <div key={idx}>
                     <p className="text-sm font-bold text-gray-900">{reg.name}</p>
                     <p className="text-xs text-blue-800 font-sans mt-0.5">{isPediatric ? reg.pedsDose : reg.adultDose}</p>
                  </div>
               ))}
               
               {empiric.additions.length > 0 && (
                 <>
                   <div className="border-t border-blue-200 mt-1 mb-1"></div>
                   <h4 className="text-xs font-bold text-rose-800 uppercase">Targeted Additions</h4>
                   {empiric.additions.map((add, idx) => (
                      <div key={idx}>
                         <p className="text-sm font-bold text-rose-900">+ {add.name}</p>
                         <p className="text-xs text-rose-800 font-sans mt-0.5">{isPediatric ? add.pedsDose : add.adultDose}</p>
                      </div>
                   ))}
                 </>
               )}
            </div>
            
            <div className="mt-4">
               <GuidelineRec 
                title="Anaerobic vs Fungal Coverage Info" 
                strength="Weak" 
                rationale="Suggest AGAINST routine empiric fungal therapy unless high absolute risk. Suggest AGAINST routine anaerobic coverage unless specific risk factors (intra-abdominal, deep tissue) exist." 
               />
            </div>
          </section>

        </div>

        {/* Right Column: Monitors */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Fluid Monitor */}
          <section className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-bold flex items-center gap-2 text-gray-800 mb-3 border-b border-gray-100 pb-2">
              <Droplets className="text-cyan-500" /> Fluid Monitor
            </h3>
            
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-4 text-center">
              <p className="text-[10px] uppercase font-bold text-cyan-800 tracking-wider mb-2">Initial Bolus Volume Target</p>
              <div className="text-4xl font-black text-cyan-900 font-sans mb-3">
                {isPediatric ? `${targetWeight * 10} - ${targetWeight * 20}` : targetWeight * 30} <span className="text-lg">mL</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                 <span className="text-xs text-cyan-700 font-bold uppercase">Weight:</span>
                 <div className="flex items-center bg-white border border-cyan-200 rounded px-2 overflow-hidden shadow-sm">
                    <input 
                      type="number" 
                      value={targetWeight} 
                      onChange={(e) => setPatientWeight(Number(e.target.value) || 0)} 
                      className="w-12 h-6 text-sm font-sans font-bold text-center text-cyan-900 bg-transparent focus:outline-none" 
                    />
                    <span className="text-[10px] text-cyan-600 font-bold ml-1">kg</span>
                 </div>
              </div>
              <p className="text-[10px] text-cyan-600 mt-2 tracking-wide font-bold">Push rapidly within first 3 hours</p>
            </div>

            <GuidelineRec 
              title="Dynamic Fluid Responsiveness" 
              strength="Weak" 
              rationale="Suggest using dynamic measures (Passive Leg Raise (PLR), Stroke Volume Variation, Pulse Pressure Variation) to guide further fluid resuscitation over physical examination alone."
            />
          </section>

          {/* Vasopressor Titration */}
          <section className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-start mb-3 border-b border-gray-100 pb-2">
               <h3 className="text-lg font-bold flex items-center gap-2 text-gray-800">
                 <Activity className="text-violet-500" /> Vasopressor Titration
               </h3>
            </div>

            <div className="bg-violet-50 border border-violet-200 p-3 rounded mb-3 text-xs text-violet-900 leading-relaxed font-medium">
               <strong className="text-violet-950 uppercase tracking-widest text-[10px]">When to Start:</strong><br/>
               If unstable (mottled, severely hypotensive), start <strong>concurrently</strong> with fluid bolus. Otherwise, start if MAP &lt; 65 mmHg persists <strong>after</strong> initial fluids.
            </div>
            
            <div className="space-y-2">
              <div className="bg-gray-50 border border-gray-200 rounded p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm text-gray-900">1. Norepinephrine</span>
                  <span className="text-[10px] bg-[#1A73E8] text-white px-1.5 py-0.5 rounded font-bold uppercase">1st Line</span>
                </div>
                <p className="text-xs text-gray-600">Start: 0.05 - 0.1 mcg/kg/min<br/>Titrate to MAP 65 mmHg</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm text-gray-900">2. Vasopressin</span>
                  <span className="text-[10px] bg-violet-600 text-white px-1.5 py-0.5 rounded font-bold uppercase">Add-on</span>
                </div>
                <p className="text-xs text-gray-600">Add when Norepi {'>'} 0.25 - 0.5 mcg/kg/min<br/>Start: 0.03 units/min (not weight-based)</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm text-gray-900">3. Epinephrine</span>
                  <span className="text-[10px] bg-rose-600 text-white px-1.5 py-0.5 rounded font-bold uppercase">Add-on / Peds</span>
                </div>
                <p className="text-xs text-gray-600">Add if MAP inadequate on above 2 agents, or in pediatric cold shock.</p>
              </div>
            </div>
          </section>

          {/* Lactate Tracker */}
          <section className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-bold flex items-center gap-2 text-gray-800 mb-3 border-b border-gray-100 pb-2">
              <Activity className="text-orange-500" /> Lactate Tracker
            </h3>
            
            <div className="flex gap-4 mb-3">
               <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Initial (mmol/L)</label>
                  <input type="number" step="0.1" value={initialLactate} onChange={(e) => setInitialLactate(e.target.value === '' ? '' : Number(e.target.value))} className="w-full bg-gray-50 border border-gray-300 rounded p-1.5 text-sm font-sans focus:outline-none focus:border-orange-400" />
               </div>
               <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Repeat (mmol/L)</label>
                  <input type="number" step="0.1" value={repeatLactate} onChange={(e) => setRepeatLactate(e.target.value === '' ? '' : Number(e.target.value))} className="w-full bg-gray-50 border border-gray-300 rounded p-1.5 text-sm font-sans focus:outline-none focus:border-orange-400" />
               </div>
            </div>

            {clearance !== null && initialLactate !== '' && repeatLactate !== '' && (
              <div className={`p-3 rounded-lg text-sm font-bold border ${Number(clearance) >= 10 ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
                 Clearance: {clearance}% 
                 <p className="text-[10px] font-normal mt-1 opacity-80">
                   {Number(clearance) >= 10 ? 'Adequate clearance (>10%)' : 'Inadequate clearance (<10%). Reassess perfusion and fluid status.'}
                 </p>
              </div>
            )}
          </section>

        </div>
      </div>

      {/* Full Sepsis 2026 Guidelines Expandable Section */}
      <div className="mt-8 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <GuidelineRec 
          title="Comprehensive Step-by-Step Protocol (SSC 2026 Guidelines)" 
          strength="Read Details" 
          rationale={
            <div className="space-y-4 pt-2">
              <div>
                <h4 className="font-bold text-red-800 border-b border-red-100 pb-1 mb-1">1. Screening & Initial Resuscitation</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Sepsis is an emergency. Resuscitation should begin immediately upon recognition.</li>
                  <li>Initial fluid: Administer at least <strong>30 mL/kg</strong> (Adults) or limited bolus <strong>10-20 mL/kg</strong> (Pediatrics) of IV crystalloids within the first 3 hours.</li>
                  <li><strong>Balanced crystalloids</strong> (e.g. Lactated Ringer's) are suggested over 0.9% normal saline.</li>
                  <li>Guide further fluids with dynamic measures (Passive Leg Raise, Stroke Volume Variation) instead of static markers alone.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-red-800 border-b border-red-100 pb-1 mb-1">2. Infection & Source Control</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Identify and achieve surgical or procedural <strong>source control</strong> as rapidly as possible (ideally &lt; 6-12 hours).</li>
                  <li>Obtain blood cultures before antibiotics if it won't delay administration.</li>
                  <li>Administer broad-spectrum antibiotics within 1 hour for shock, or within 3 hours for possible sepsis without shock.</li>
                  <li>Use <strong>Prolonged Infusion</strong> dosing for beta-lactams to maximize time above MIC.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-red-800 border-b border-red-100 pb-1 mb-1">3. Hemodynamic Support</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Initial target Mean Arterial Pressure (MAP) is <strong>65 mmHg</strong>.</li>
                  <li>Target lower MAP (60-65 mmHg) for patients older than 65 years.</li>
                  <li><strong>Norepinephrine</strong> is the first-line vasopressor. Start peripherally to avoid delays if central access is not immediately available.</li>
                  <li>Add <strong>Vasopressin</strong> when norepinephrine doses escalate (e.g., &gt; 0.25 mcg/kg/min). Add <strong>Epinephrine</strong> as third-line.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-red-800 border-b border-red-100 pb-1 mb-1">4. Ventilation & Respiratory Support</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Target conservative Oxygen (SpO2 90-95%) based on patient tolerance.</li>
                  <li>Use High Flow Nasal Cannula (HFNC) over traditional NIPPV where possible.</li>
                  <li>Use Low Tidal Volume (6-8 mL/kg IBW) even if ARDS criteria are not fully met yet.</li>
                  <li>Suggest awake prone positioning for non-intubated acute hypoxemic respiratory failure.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-red-800 border-b border-red-100 pb-1 mb-1">5. Adjunctive Therapies</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>IV Corticosteroids</strong> (Hydrocortisone 200mg/day) are suggested if shock is refractory to vasopressors.</li>
                  <li><strong>Strongly Suggest AGAINST:</strong> High-dose Vitamin C, Blood Purification/Polymyxin B, IVIG, or Routine Probiotics.</li>
                  <li>Maintain strict glycemic control (target &le; 180 mg/dL).</li>
                  <li>Use Pharmacologic VTE prophylaxis (LMWH preferred) and standard stress ulcer prophylaxis.</li>
                </ul>
              </div>
            </div>
          }
        />
      </div>

    </div>
  );
}
