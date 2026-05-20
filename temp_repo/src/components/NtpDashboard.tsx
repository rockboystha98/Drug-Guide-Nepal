import React, { useState } from 'react';
import { Activity, AlertTriangle, CheckSquare, Weight, Calculator, Search } from 'lucide-react';

export default function NtpDashboard() {
  const [activeTab, setActiveTab] = useState<'algorithm' | 'ds-tb' | 'dr-tb' | 'tpt' | 'eptb' | 'adrs' | 'drugs'>('algorithm');

  return (
    <div className="max-w-5xl mx-auto w-full space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-emerald-800">National Tuberculosis Program (NTP)</h2>
        <p className="text-gray-500 text-sm mt-1">Based on the Clinical Handbook of TB Management Protocols 2024</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {(['algorithm', 'ds-tb', 'dr-tb', 'tpt', 'eptb', 'adrs', 'drugs'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-transparent'} border`}
          >
            {tab === 'algorithm' && 'Diagnostic Algorithm'}
            {tab === 'ds-tb' && 'DS-TB & Weight Bands'}
            {tab === 'dr-tb' && 'DR-TB (BPaLM/BPaL)'}
            {tab === 'tpt' && 'Preventive Treatment (TPT)'}
            {tab === 'eptb' && 'Extra-pulmonary (EPTB)'}
            {tab === 'adrs' && 'ADRs & Safety'}
            {tab === 'drugs' && 'Drugs Index'}
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
        {activeTab === 'algorithm' && <DiagnosticAlgorithm />}
        {activeTab === 'ds-tb' && <DsTbCalculator />}
        {activeTab === 'dr-tb' && <DrTbRegimens />}
        {activeTab === 'tpt' && <TptProtocols />}
        {activeTab === 'eptb' && <EptbProtocols />}
        {activeTab === 'adrs' && <AdrsGuide />}
        {activeTab === 'drugs' && <NtpDrugsIndex />}
      </div>
    </div>
  );
}

function DiagnosticAlgorithm() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Algorithm for New Presumptive TB Patients</h3>
      <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
        <p className="font-medium text-emerald-800 mb-2">Primary Test: Xpert MTB/RIF / Ultra (mWRD)</p>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-2">
          <li><strong>MTB Detected, Rifampicin Resistance NOT Detected:</strong> Diagnosis of DS-TB confirmed. Treat with first-line regimen (2HRZE/4HR).</li>
          <li><strong>MTB Detected, Rifampicin Resistance Detected (RR):</strong> Refer to DR-TB Treatment Center for second-line TB treatment (e.g. BPaLM).</li>
          <li><strong>MTB Detected, Rifampicin Indeterminate:</strong> Start first-line regimen and SEND NEW SPUTUM to repeat the test. If RR confirmed, refer.</li>
          <li><strong>MTB Trace Detected:</strong> Start first-line treatment if PLHIV, children, EPTB, or adults w/out prior TB history in past 5 years. Otherwise, evaluate clinically.</li>
        </ul>
      </div>
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-4">
        <h4 className="font-bold text-amber-800 text-sm">Decision Tree for Previously Treated (Retreatment)</h4>
        <p className="text-xs text-amber-700 mt-1">If MTB is detected on a retreatment patient, perform culture and LPA (Line Probe Assay). Treat based on resistance profile.</p>
      </div>
    </div>
  );
}

function DsTbCalculator() {
  const [weight, setWeight] = useState<number>(50);
  const [ageGroup, setAgeGroup] = useState<'adult' | 'pediatric'>('adult');

  const getAdultDose = (w: number) => {
    if (w < 30) return "Use pediatric dosing.";
    if (w >= 30 && w <= 39) return "2 Tablets (HRZE 75/150/400/275) / 2 Tablets HR";
    if (w >= 40 && w <= 54) return "3 Tablets (HRZE 75/150/400/275) / 3 Tablets HR";
    if (w >= 55 && w <= 70) return "4 Tablets (HRZE 75/150/400/275) / 4 Tablets HR";
    return "5 Tablets (HRZE 75/150/400/275) / 5 Tablets HR";
  };

  const getPedsDose = (w: number) => {
    if (w < 4) return "Refer to specialist dosing.";
    if (w >= 4 && w <= 7.9) return "1 Tablet (HRZ 50/75/150) + E 100mg / 1 Tablet HR 50/75";
    if (w >= 8 && w <= 11.9) return "2 Tablets (HRZ 50/75/150) + E 100mg (2 tabs) / 2 Tablets HR 50/75";
    if (w >= 12 && w <= 15.9) return "3 Tablets (HRZ 50/75/150) + E 100mg (3 tabs) / 3 Tablets HR 50/75";
    if (w >= 16 && w <= 24.9) return "4 Tablets (HRZ 50/75/150) + E 100mg (4 tabs) / 4 Tablets HR 50/75";
    return "25kg+: Use Adult Dosages";
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-gray-800">DS-TB Fixed-Dose Combination (FDC) Calculator</h3>
      <p className="text-sm text-gray-600">The 2024 TB handbook uses weight bands for exact tablet counts ( Intensive: 2HRZE / Continuation: 4HR ).</p>
      
      <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center">
        <select value={ageGroup} onChange={e => setAgeGroup(e.target.value as 'adult' | 'pediatric')} className="p-2 border rounded font-medium">
          <option value="adult">Adult</option>
          <option value="pediatric">Pediatric</option>
        </select>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Weight (kg):</span>
          <input type="number" value={weight} onChange={e => setWeight(Number(e.target.value) || 0)} className="w-20 p-2 border rounded font-sans font-bold" />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
        <h4 className="text-sm text-blue-800 font-bold uppercase tracking-wider mb-2">Required FDC Tablets</h4>
        <p className="text-2xl font-sans font-bold text-blue-900">
          {ageGroup === 'adult' ? getAdultDose(weight) : getPedsDose(weight)}
        </p>
        <p className="text-xs text-blue-700 mt-2">Dosing is for Reference Purpsoses Only. Regimen sourced from NTP.</p>
      </div>
    </div>
  );
}

function DrTbRegimens() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">DR-TB Regimens (2024 Updates)</h3>
      <p className="text-sm text-gray-600">The BPaLM / BPaL regimens are the standardized shorter oral regimens for MDR/RR TB.</p>

      <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
        <h4 className="font-bold text-emerald-900">BPaLM Regimen (6 Months)</h4>
        <p className="text-xs font-semibold text-emerald-800 mb-3">6 Bdq-Pa-Lzd-Mfx | Initial choice for all eligible MDR/RR-TB (Adults/Adolescents ≥14y)</p>
        
        <table className="w-full text-sm text-left border-collapse bg-white rounded overflow-hidden">
          <thead className="bg-emerald-100 text-emerald-800">
            <tr>
              <th className="p-2 border-b">Drug</th>
              <th className="p-2 border-b">Formulation</th>
              <th className="p-2 border-b">Daily Dose</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="p-2 font-bold">Bedaquiline (Bdq)</td><td className="p-2">100 mg tab</td><td className="p-2">200 mg daily for 8 weeks; then 100 mg daily (18 weeks)</td></tr>
            <tr className="border-b"><td className="p-2 font-bold">Pretomanid (Pa)</td><td className="p-2">200 mg tab</td><td className="p-2">200 mg once daily</td></tr>
            <tr className="border-b"><td className="p-2 font-bold">Linezolid (Lzd)</td><td className="p-2">600 mg tab</td><td className="p-2">600 mg once daily</td></tr>
            <tr className="border-b"><td className="p-2 font-bold">Moxifloxacin (Mfx)</td><td className="p-2">400 mg tab</td><td className="p-2">400 mg once daily</td></tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-600 mt-2"><strong>BPaL Regimen:</strong> Omits Moxifloxacin if fluoroquinolone resistance is documented.</p>
      </div>
    </div>
  );
}

function TptProtocols() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">TB Preventive Treatment (TPT)</h3>
      <div className="prose prose-sm max-w-none text-gray-700">
        <ul>
          <li><strong>Target Groups:</strong> People Living with HIV (PLHIV), Household contacts of Pulmonary Bacteriologically Confirmed (PBC) patients.</li>
          <li><strong>Regimens:</strong>
            <ul>
              <li><strong>6H (Isoniazid for 6 months):</strong> Commonly used for PLHIV.</li>
              <li><strong>3HP (Isoniazid + Rifapentine):</strong> 12 once-weekly doses. The preferred regimen for contacts aged 5 years or more.</li>
              <li><strong>3HR (Isoniazid + Rifampicin):</strong> 3-month daily regimen for children &lt; 5 years.</li>
            </ul>
          </li>
        </ul>
        <div className="bg-blue-50 border border-blue-200 p-3 rounded text-blue-800 text-xs mt-4">
          <strong>Note:</strong> TPT is not provided to contacts of DR TB. Ensure active TB is ruled out before initiating TPT.
        </div>
      </div>
    </div>
  );
}

function EptbProtocols() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Extra-pulmonary TB (EPTB)</h3>
      <table className="w-full text-sm text-left border-collapse bg-white rounded overflow-hidden shadow-sm border border-gray-200">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="p-3 border-b">Site</th>
              <th className="p-3 border-b">Treatment Phase</th>
              <th className="p-3 border-b">Remarks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr><td className="p-3 font-bold">TB Adenitis</td><td className="p-3">2 HRZE / 4 HR</td><td className="p-3">Consider BCG disease if axillary node on same side.</td></tr>
            <tr><td className="p-3 font-bold">Miliary TB</td><td className="p-3">2 HRZE / 7-10 HRE</td><td className="p-3">Inpatient management initially.</td></tr>
            <tr><td className="p-3 font-bold">TB Meningitis</td><td className="p-3">2 HRZE / 7-10 HRE</td><td className="p-3">Steroids used (Dexamethasone/Prednisolone tapered 6-8wks). Ethionamide can be added.</td></tr>
            <tr><td className="p-3 font-bold">TB Pericarditis</td><td className="p-3">2 HRZE / 7-10 HRE</td><td className="p-3">Steroid tapered over 8 weeks.</td></tr>
            <tr><td className="p-3 font-bold">Bone and Joints</td><td className="p-3">2 HRZE / 7-10 HRE</td><td className="p-3">Joint tap for Xpert.</td></tr>
          </tbody>
        </table>
    </div>
  );
}

function AdrsGuide() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Adverse Drug Reactions (ADR)</h3>
      <p className="text-sm text-gray-600">Quick-reference for side-effects of first-line TB medicines.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-red-200 bg-red-50 p-4 rounded-xl">
          <h4 className="font-bold text-red-800 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Major (Stop Drug)</h4>
          <ul className="text-xs text-red-900 mt-2 space-y-1 list-disc pl-4">
            <li><strong>Jaundice/Hepatitis:</strong> All drugs (mostly HRZ). Stop anti-TB drugs, measure LFTs.</li>
            <li><strong>Difficulty with Vision:</strong> Ethambutol. Stop ethambutol, refer.</li>
            <li><strong>Shock, purpura, ARF:</strong> Rifampicin. Stop rifampicin, refer.</li>
          </ul>
        </div>
        <div className="border border-amber-200 bg-amber-50 p-4 rounded-xl">
          <h4 className="font-bold text-amber-800 flex items-center gap-2"><Activity className="w-4 h-4"/> Minor (Manage)</h4>
          <ul className="text-xs text-amber-900 mt-2 space-y-1 list-disc pl-4">
            <li><strong>Joint Pain:</strong> Pyrazinamide. Give Aspirin/Indomethacin.</li>
            <li><strong>Burning/Tingling in Feet:</strong> Isoniazid. Give Pyridoxine 100mg daily.</li>
            <li><strong>Orange/Red Urine:</strong> Rifampicin. Reassurance.</li>
            <li><strong>Anorexia/Nausea:</strong> Pyrazinamide, Rifampicin. Take drugs with food/juice.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function NtpDrugsIndex() {
  const tbDrugs = [
    {
      group: "First-Line TB Drugs (DS-TB & TPT)",
      drugs: [
        { name: "Isoniazid (H)", formulation: "100 mg, 300 mg tablets", dosage: "Child: 10 mg/kg (7-15) daily. Adult: 5 mg/kg (4-6) daily, Max 300 mg", adr: "Peripheral neuropathy (use Pyridoxine), Hepatitis", category: "Access" },
        { name: "Rifampicin (R)", formulation: "150 mg, 300 mg capsules", dosage: "Child: 15 mg/kg (10-20) daily. Adult: 10 mg/kg (8-12) daily, Max 600 mg", adr: "Red/orange secretions, Hepatotoxicity, Drug interactions (CYP450 inducer)", category: "Access" },
        { name: "Pyrazinamide (Z)", formulation: "400 mg tablets", dosage: "Child: 35 mg/kg (30-40) daily. Adult: 25 mg/kg (20-30) daily", adr: "Hepatotoxicity, Hyperuricemia, Arthralgia", category: "Access" },
        { name: "Ethambutol (E)", formulation: "100 mg, 400 mg tablets", dosage: "Child: 20 mg/kg (15-25) daily. Adult: 15 mg/kg (15-20) daily", adr: "Optic neuritis (Vision/Color changes)", category: "Access" },
        { name: "Rifapentine (P)", formulation: "150 mg tablets", dosage: "Used in 3HP (weekly). Dosage varies by weight/age brackets", adr: "Flu-like syndrome, Hepatotoxicity", category: "Watch" }
      ]
    },
    {
      group: "Second-Line TB Drugs (DR-TB / BPaLM)",
      drugs: [
        { name: "Bedaquiline (Bdq)", formulation: "20 mg (pediatric), 100 mg tablets", dosage: "Group A. Adult: 400mg daily (2wks) then 200mg 3x/wk (or 100mg daily)", adr: "QT prolongation (Requires regular ECG), Hepatotoxicity", category: "Reserve" },
        { name: "Linezolid (Lzd)", formulation: "600 mg tablets", dosage: "Group A. Adult: 600 mg daily", adr: "Myelosuppression (weekly CBC/month), Peripheral & Optic neuropathy", category: "Reserve" },
        { name: "Moxifloxacin (Mfx)", formulation: "400 mg tablets", dosage: "Group A (Fluoroquinolone). Adult: 400 mg daily", adr: "QT prolongation, Tendonitis, CNS effects", category: "Watch" },
        { name: "Pretomanid (Pa)", formulation: "200 mg tablets", dosage: "Shorter regimen only. Adult: 200 mg daily", adr: "Hepatotoxicity, Peripheral neuropathy", category: "Reserve" },
        { name: "Levofloxacin (Lfx)", formulation: "250 mg, 500 mg tablets", dosage: "Group A (Alternative to Mfx). Adult: 750-1000 mg daily", adr: "QT prolongation, Tendonitis, Peripheral Neuropathy", category: "Watch" },
        { name: "Clofazimine (Cfz)", formulation: "50 mg, 100 mg capsules", dosage: "Group B. Adult: 100 mg daily", adr: "Skin discoloration, QT prolongation, GI distress", category: "Watch" },
        { name: "Cycloserine (Cs)", formulation: "250 mg capsules", dosage: "Group B. Adult: 500 - 750 mg daily", adr: "Psychiatric symptoms, Seizures (use Pyridoxine)", category: "Watch" }
      ]
    }
  ];

  const getAwareColor = (aware: string) => {
    if (aware === 'Access') return 'bg-green-100 text-green-800 border-green-200';
    if (aware === 'Watch') return 'bg-amber-100 text-amber-800 border-amber-200';
    if (aware === 'Reserve') return 'bg-red-100 text-red-800 border-red-200';
    return 'bg-gray-100 text-gray-600 border-gray-200';
  };

  return (
    <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
      <h3 className="text-lg font-bold text-gray-800">Tuberculosis Drug Index</h3>
      <p className="text-sm text-gray-600">Complete tabulated list of drugs used in the NTP diagnostic & treatment protocols.</p>
      
      {tbDrugs.map((group, idx) => (
        <div key={idx} className="mb-6 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
          <div className="bg-emerald-50 px-4 py-3 border-b border-gray-200">
            <h4 className="font-bold text-emerald-900">{group.group}</h4>
            <p className="text-xs text-emerald-700 font-medium">Standard baseline formulations and recommendations</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="p-3 border-b border-gray-200 font-bold whitespace-nowrap">Drug Name</th>
                  <th className="p-3 border-b border-gray-200 font-bold">Formulation</th>
                  <th className="p-3 border-b border-gray-200 font-bold w-1/3">Standard Dosage Guidelines</th>
                  <th className="p-3 border-b border-gray-200 font-bold w-1/3">Key ADRs & Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800">
                {group.drugs.map((drug, dIdx) => (
                  <tr key={dIdx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-3 align-top border-r border-gray-100 border-dashed">
                      <div className="font-bold">{drug.name}</div>
                      <div className={`mt-1.5 inline-block text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border ${getAwareColor(drug.category)}`}>
                        {drug.category}
                      </div>
                    </td>
                    <td className="p-3 align-top border-r border-gray-100 border-dashed">
                      {drug.formulation}
                    </td>
                    <td className="p-3 align-top border-r border-gray-100 border-dashed">
                      <span className="text-sm leading-relaxed text-gray-700">{drug.dosage}</span>
                    </td>
                    <td className="p-3 align-top">
                      <span className="text-xs text-red-700 bg-red-50 border border-red-100 px-2 py-1.5 rounded inline-block">
                        <strong>Watch for: </strong>{drug.adr}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
