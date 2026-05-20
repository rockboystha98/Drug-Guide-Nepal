import React, { useState } from 'react';
import { ArrowLeft, Activity, Pill, AlertTriangle, Stethoscope, HeartPulse, Scale, ShieldAlert, Thermometer, Syringe } from 'lucide-react';
import MermaidDiagram from './MermaidDiagram';

interface Props {
  onBack: () => void;
  onDrugClick?: (drugName: string) => void;
}

export default function HypertensionDashboard({ onBack, onDrugClick }: Props) {
  const [activeTab, setActiveTab] = useState<'algorithm' | 'resistant' | 'severe' | 'oral-drugs' | 'iv-drugs' | 'secondary'>('algorithm');

  const handleDrugClick = (drugName: string) => {
    onDrugClick?.(drugName);
  };

  const tabs = [
    { id: 'algorithm', label: 'Treatment Algorithm', icon: <Activity className="w-4 h-4" /> },
    { id: 'resistant', label: 'Resistant HTN', icon: <ShieldAlert className="w-4 h-4" /> },
    { id: 'severe', label: 'Severe HTN & Emergencies', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'oral-drugs', label: 'Oral Medications', icon: <Pill className="w-4 h-4" /> },
    { id: 'iv-drugs', label: 'IV Medications', icon: <Syringe className="w-4 h-4" /> },
    { id: 'secondary', label: 'Secondary Causes', icon: <Stethoscope className="w-4 h-4" /> }
  ] as const;

  return (
    <div className="max-w-7xl mx-auto pb-20">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AHA/ACC 2025 Hypertension Guidelines</h1>
          <p className="text-gray-500 mt-1">Comprehensive algorithms, thresholds, and pharmacotherapy</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl border border-gray-200 shadow-sm">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id 
                ? 'bg-[#005A9C] text-white shadow-md' 
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {activeTab === 'algorithm' && <TreatmentAlgorithm />}
        {activeTab === 'resistant' && <ResistantHypertension />}
        {activeTab === 'severe' && <SevereHypertension />}
        {activeTab === 'oral-drugs' && <OralMedications onDrugClick={handleDrugClick} />}
        {activeTab === 'iv-drugs' && <IVMedications onDrugClick={handleDrugClick} />}
        {activeTab === 'secondary' && <SecondaryCauses />}
      </div>
    </div>
  );
}

import InteractiveProtocolViewer from './InteractiveProtocolViewer';
import { Protocol } from '../types/protocols';

const htnProtocol: Protocol = {
  id: 'htn-algorithm',
  title: 'BP Thresholds and Recommendations for Treatment',
  category: 'Hypertension',
  tags: [],
  description: '',
  startNodeId: 'start',
  nodes: {
    'start': {
      id: 'start',
      title: 'Determine BP Threshold',
      type: 'decision',
      content: 'Select the patient\'s BP category. Note: Adults with SBP and DBP in 2 different categories should be designated to the higher BP category.',
      options: [
        { label: 'Normal BP (<120 / <80 mm Hg)', nextId: 'normal' },
        { label: 'Elevated BP (120-129 / <80 mm Hg)', nextId: 'elevated' },
        { label: 'Stage 1 HTN (130-139 / 80-89 mm Hg)', nextId: 'stage1' },
        { label: 'Stage 2 HTN (\u2265140 / \u226590 mm Hg)', nextId: 'stage2' }
      ]
    },
    'normal': {
      id: 'normal',
      title: 'Normal BP Management',
      type: 'endpoint',
      content: '**Recommendation:**\n- Promote optimal lifestyle habits.\n- Reassess in 1 year.'
    },
    'elevated': {
      id: 'elevated',
      title: 'Elevated BP Management',
      type: 'endpoint',
      content: '**Recommendation:**\n- Nonpharmacologic therapy (Lifestyle changes).\n- Reassess in 3-6 months.'
    },
    'stage1': {
      id: 'stage1',
      title: 'Stage 1 HTN Risk Assessment',
      type: 'decision',
      content: 'Does the patient have Clinical CVD, Diabetes Mellitus, CKD, or a 10-year PREVENT ASCVD risk \u2265 7.5%?',
      options: [
        { label: 'No (Low risk)', nextId: 'stage1-no-risk' },
        { label: 'Yes (High risk)', nextId: 'stage1-risk' }
      ]
    },
    'stage1-no-risk': {
      id: 'stage1-no-risk',
      title: 'Stage 1 HTN (Low Risk) Management',
      type: 'action',
      content: '**Initial Therapy:**\n- Nonpharmacologic therapy (Lifestyle changes).',
      options: [
        { label: 'Reassess in 3-6 months', nextId: 'stage1-reassess' }
      ]
    },
    'stage1-reassess': {
      id: 'stage1-reassess',
      title: 'Reassessment after 3-6 months',
      type: 'decision',
      content: 'Has the BP goal (<130/80 mm Hg) been met based on lifestyle changes alone?',
      options: [
        { label: 'Yes (Goal met)', nextId: 'stage1-met' },
        { label: 'No (Still \u2265130/80)', nextId: 'stage1-not-met' }
      ]
    },
    'stage1-met': {
      id: 'stage1-met',
      title: 'Continue Lifestyle Therapy',
      type: 'endpoint',
      content: '**Recommendation:**\n- Continue nonpharmacologic therapy.\n- Reassess in 3-6 months.'
    },
    'stage1-not-met': {
      id: 'stage1-not-met',
      title: 'Initiate BP-Lowering Medication',
      type: 'action',
      content: '**Recommendation:**\n- Initiate BP-lowering medication (e.g., ACEi, ARB, CCB, or Thiazide) in addition to nonpharmacologic therapy.',
      options: [
        { label: 'Reassess in 1 month', nextId: 'med-reassess' }
      ]
    },
    'stage1-risk': {
      id: 'stage1-risk',
      title: 'Stage 1 HTN (High Risk) Management',
      type: 'action',
      content: '**Initial Therapy:**\n- Initiate BP-lowering medication (e.g., ACEi, ARB, CCB, or Thiazide).\n- Continue nonpharmacologic therapy.',
      options: [
        { label: 'Reassess in 1 month', nextId: 'med-reassess' }
      ]
    },
    'stage2': {
      id: 'stage2',
      title: 'Stage 2 HTN Management',
      type: 'action',
      content: '**Initial Therapy:**\n- Initiate BP-lowering medication (Consider starting with 2 agents of different classes).\n- Continue nonpharmacologic therapy.',
      options: [
        { label: 'Reassess in 1 month', nextId: 'med-reassess' }
      ]
    },
    'med-reassess': {
      id: 'med-reassess',
      title: 'Medication Efficacy Reassessment',
      type: 'decision',
      content: 'After 1 month of medication, has the BP goal (<130/80 mm Hg) been met?',
      options: [
        { label: 'Yes (Goal met)', nextId: 'med-goal-met' },
        { label: 'No (Goal not met)', nextId: 'med-goal-not-met' }
      ]
    },
    'med-goal-met': {
      id: 'med-goal-met',
      title: 'Goal Met on Medication',
      type: 'endpoint',
      content: '**Recommendation:**\n- Optimize adherence and continue current therapy.\n- Reassess in 3-6 months.'
    },
    'med-goal-not-met': {
      id: 'med-goal-not-met',
      title: 'Intensify Therapy',
      type: 'action',
      content: '**Recommendation:**\n- Assess and optimize medication adherence.\n- Consider intensification of therapy (titrate dose or add another agent from a different class).',
      options: [
        { label: 'Reassess in 1 month', nextId: 'med-reassess' }
      ]
    }
  }
};

function TreatmentAlgorithm() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">BP Thresholds and Recommendations for Treatment</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-gray-700">Normal BP</h3>
            <p className="text-2xl font-bold text-green-600">&lt;120 / &lt;80</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-gray-700">Elevated BP</h3>
            <p className="text-2xl font-bold text-yellow-600">120-129 / &lt;80</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-gray-700">Stage 1 HTN</h3>
            <p className="text-2xl font-bold text-orange-600">130-139 / 80-89</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-gray-700">Stage 2 HTN</h3>
            <p className="text-2xl font-bold text-red-600">&ge;140 / &ge;90</p>
          </div>
        </div>
        <div className="-mx-6 px-6">
          <InteractiveProtocolViewer protocol={htnProtocol} onClose={() => {}} hideHeader={true} />
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 text-blue-900 rounded-lg border border-blue-100 space-y-2 text-sm">
          <p><strong>Note:</strong> Adults with SBP and DBP in 2 different categories should be designated to the higher BP category.</p>
          <p><strong>General Goal:</strong> SBP &lt; 130 mm Hg and DBP &lt; 80 mm Hg for all adults (encouraged &lt;120 mm Hg if tolerated).</p>
          <p><strong>Risk Assessment:</strong> Uses the PREVENT risk calculator (Predicting Risk of CVD EVENTs).</p>
        </div>
      </div>
    </div>
  );
}

const resistantHtnProtocol: Protocol = {
  id: 'resistant-htn',
  title: 'Resistant Hypertension Evaluation',
  category: 'Hypertension',
  tags: [],
  description: '',
  startNodeId: 'confirm',
  nodes: {
    'confirm': {
      id: 'confirm',
      title: 'Confirm Treatment Resistance',
      type: 'action',
      content: 'Office BP \u2265130/80 on \u22653 antihypertensives\nOR\nBP <130/80 on \u22654 antihypertensives.',
      options: [
        { label: 'Next: Exclude Pseudoresistance', nextId: 'exclude' }
      ]
    },
    'exclude': {
      id: 'exclude',
      title: 'Exclude Pseudoresistance',
      type: 'action',
      content: '- Ensure accurate BP measurement.\n- Assess medication nonadherence.\n- Exclude white-coat effect via OOBP (Out-of-office BP).',
      options: [
        { label: 'Next: Lifestyle Factors', nextId: 'lifestyle' }
      ]
    },
    'lifestyle': {
      id: 'lifestyle',
      title: 'Identify & Reverse Lifestyle Factors',
      type: 'action',
      content: 'Identify and reverse contributing lifestyle factors (e.g., obesity, physical inactivity, excessive alcohol, high sodium intake).',
      options: [
        { label: 'Next: Interfering Substances', nextId: 'substances' }
      ]
    },
    'substances': {
      id: 'substances',
      title: 'Discontinue Interfering Substances',
      type: 'action',
      content: 'Discontinue or minimize interfering substances (e.g., NSAIDs, sympathomimetics, amphetamines, oral contraceptives).',
      options: [
        { label: 'Next: Screen Secondary Causes', nextId: 'secondary' }
      ]
    },
    'secondary': {
      id: 'secondary',
      title: 'Screen for Secondary Causes of HTN',
      type: 'action',
      content: 'Screen for secondary causes like Obstructive Sleep Apnea, Primary Aldosteronism, CKD, or Renal Artery Stenosis.',
      options: [
        { label: 'Next: Pharmacological Treatment', nextId: 'pharm' }
      ]
    },
    'pharm': {
      id: 'pharm',
      title: 'Pharmacological Treatment',
      type: 'action',
      content: '- Maximize diuretic therapy (e.g., chlorthalidone/indapamide).\n- Add spironolactone or eplerenone.\n- Use loop diuretics if CKD stage 4+.\n- Add agents with different MOAs (Beta-blockers, central alpha-agonists, vasodilators).',
      options: [
        { label: 'Next: Specialist Referral?', nextId: 'referral' }
      ]
    },
    'referral': {
      id: 'referral',
      title: 'Refer to Specialist',
      type: 'endpoint',
      content: '**Refer to specialist if:**\n- Known or suspected secondary cause.\n- BP remains uncontrolled >6 months despite maximum medical therapy.'
    }
  }
};

function ResistantHypertension() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Resistant Hypertension: Diagnosis, Evaluation & Treatment</h2>
        <div className="-mx-6 px-6">
          <InteractiveProtocolViewer protocol={resistantHtnProtocol} onClose={() => {}} hideHeader={true} />
        </div>
        
        <div className="mt-8">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Interfering Substances (Table 11)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Agent</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Possible Management Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-medium">NSAIDs; acetaminophen</td>
                  <td className="px-4 py-3">Avoid systemic NSAIDs. Limit acetaminophen &lt;4 g/d.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Decongestants (phenylephrine, pseudoephedrine)</td>
                  <td className="px-4 py-3">Use shortest duration possible, avoid in severe/uncontrolled HTN.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Amphetamines / Stimulants</td>
                  <td className="px-4 py-3">Discontinue/decrease dose. Consider behavioral therapy.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Systemic Corticosteroids</td>
                  <td className="px-4 py-3">Avoid/limit use. Consider alternative modes of administration.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Oral Contraceptives</td>
                  <td className="px-4 py-3">Use low dose (20-30 mcg ethinyl estradiol) or progestin only. Avoid in uncontrolled HTN.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Antidepressants (MAOIs, SNRIs, TCAs)</td>
                  <td className="px-4 py-3">Consider alternative agents (e.g., SSRIs).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const severeHtnProtocol: Protocol = {
  id: 'severe-htn',
  title: 'Severe Hypertension & Hypertensive Emergency',
  category: 'Hypertension',
  tags: [],
  description: '',
  startNodeId: 'start',
  nodes: {
    'start': {
      id: 'start',
      title: 'SBP >180 mm Hg OR DBP >120 mm Hg',
      type: 'decision',
      content: 'Is there evidence of new or worsening target organ damage (e.g., encephalopathy, acute heart failure, ACS, aortic dissection)?',
      options: [
        { label: 'Yes (Hypertensive Emergency)', nextId: 'emergency' },
        { label: 'No (Severe Hypertension without TOD)', nextId: 'severe' }
      ]
    },
    'emergency': {
      id: 'emergency',
      title: 'Hypertensive Emergency',
      type: 'action',
      content: 'Admit to Intensive Care Unit (ICU).\n\nDoes the patient have Aortic Dissection or Pheochromocytoma crisis?',
      options: [
        { label: 'Yes', nextId: 'emergency-special' },
        { label: 'No', nextId: 'emergency-standard' }
      ]
    },
    'emergency-special': {
      id: 'emergency-special',
      title: 'Specific Emergency Targets',
      type: 'endpoint',
      content: '**Aortic Dissection:**\nReduce SBP <120 mm Hg in the first hour.\n\n**Pheochromocytoma crisis:**\nReduce SBP <140 mm Hg in the first hour.'
    },
    'emergency-standard': {
      id: 'emergency-standard',
      title: 'Standard Emergency BP Targets',
      type: 'endpoint',
      content: '- Reduce SBP by a maximum of 25% in the 1st hour.\n- Then to <160/100-110 mm Hg over the next 2-6 hours.\n- Then to normal over the following 24-48 hours.'
    },
    'severe': {
      id: 'severe',
      title: 'Severe Hypertension',
      type: 'decision',
      content: 'Where is the patient presenting?',
      options: [
        { label: 'Identified in ED', nextId: 'ed' },
        { label: 'Identified in Outpatient Clinic', nextId: 'outpatient' }
      ]
    },
    'ed': {
      id: 'ed',
      title: 'Management in ED',
      type: 'action',
      content: '**Warning:** Avoid parenteral BP-lowering therapy or intensified oral therapy in the acute setting without target organ damage.',
      options: [
        { label: 'Next: Disposition', nextId: 'disposition' }
      ]
    },
    'outpatient': {
      id: 'outpatient',
      title: 'Management in Clinic',
      type: 'action',
      content: 'No need to refer to the ED. Reinstitute and intensify medical therapy.',
      options: [
        { label: 'Next: Disposition', nextId: 'disposition' }
      ]
    },
    'disposition': {
      id: 'disposition',
      title: 'Disposition and Follow-up',
      type: 'endpoint',
      content: 'Ensure close follow-up in the outpatient setting within 4 weeks.'
    }
  }
};

function SevereHypertension() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Diagnosis and Treatment of Severe HTN & Emergency</h2>
        <p className="text-gray-600 mb-4 max-w-3xl">
          <strong>Hypertensive emergency:</strong> Defined as BP &gt;180/120 mm Hg WITH evidence of new/worsening target organ damage (e.g., encephalopathy, acute heart failure, ACS, aortic dissection).
        </p>
        <div className="-mx-6 px-6">
          <InteractiveProtocolViewer protocol={severeHtnProtocol} onClose={() => {}} hideHeader={true} />
        </div>
        
        <div className="mt-4 p-4 border border-red-200 bg-red-50 rounded-lg text-red-900 text-sm">
          <strong>Key Warning (COR 3: Harm):</strong> For adults with severe hypertension (&gt;180/120 mm Hg) hospitalized for noncardiac conditions <em>without</em> evidence of acute target organ damage, intermittent use of additional IV or oral antihypertensive medications are <strong>not recommended</strong> to acutely reduce BP.
        </div>
      </div>
    </div>
  );
}

function OralMedications({ onDrugClick }: { onDrugClick: (drug: string) => void }) {
  const Button = ({ d }: { d: string }) => (
    <button onClick={() => onDrugClick(d)} className="text-blue-600 hover:underline font-medium">
      {d}
    </button>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">FDA-Approved Oral Drugs (Table 13 & 14)</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="font-bold text-lg text-green-700 mb-3 border-b pb-2">First-Line Agents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900">Thiazide-type Diuretics</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                <li><Button d="Chlorthalidone" /> (12.5 - 25 mg OD) - Longer half-life and more potent than HCTZ.</li>
                <li><Button d="Hydrochlorothiazide" /> (25 - 50 mg OD)</li>
                <li><Button d="Indapamide" /> (1.25 - 2.5 mg OD)</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">Monitor for hyponatremia, hypokalemia, increased uric acid.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">CCB - Dihydropyridines</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                <li><Button d="Amlodipine" /> (2.5 - 10 mg OD)</li>
                <li><Button d="Nifedipine" /> ER (30 - 90 mg OD)</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">Associated with dose-related lower extremity edema.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">ACE Inhibitors</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                <li><Button d="Enalapril" /> (5 - 40 mg OD/BD)</li>
                <li><Button d="Lisinopril" /> (10 - 40 mg OD)</li>
                <li><Button d="Ramipril" /> (2.5 - 20 mg OD/BD)</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">Do not combine with ARBs. Avoid in pregnancy.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">ARBs</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                <li><Button d="Losartan" /> (50 - 100 mg OD/BD)</li>
                <li><Button d="Telmisartan" /> (20 - 80 mg OD)</li>
                <li><Button d="Valsartan" /> (80 - 320 mg OD)</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">Do not combine with ACEi. Avoid in pregnancy.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg text-blue-700 mb-3 border-b pb-2">Single-Pill Combinations (SPCs)</h3>
          <p className="text-sm text-gray-600 mb-4">Starting with SPCs improves adherence and outcomes compared to single agents titrated sequentially.</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li><strong>ACEi/ARB + Thiazide:</strong> Lisinopril+HCTZ, Losartan+HCTZ, Telmisartan+HCTZ</li>
            <li><strong>ACEi/ARB + CCB:</strong> Amlodipine+Benazepril, Amlodipine+Valsartan, Amlodipine+Telmisartan</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg text-orange-700 mb-3 border-b pb-2">Alternative Agents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <h4 className="font-bold">Aldosterone Antagonists</h4>
              <p>Eplerenone, Spironolactone. Preferred agents in primary aldosteronism and resistant HTN.</p>
            </div>
            <div>
              <h4 className="font-bold">Beta-Blockers</h4>
              <p>Metoprolol, Bisoprolol, Carvedilol. Not first-line unless CHD or HF compelling indications.</p>
            </div>
            <div>
              <h4 className="font-bold">Alpha-1 Blockers</h4>
              <p>Doxazosin, Prazosin. Associated with orthostatic hypotension, may be considered if BPH present.</p>
            </div>
            <div>
              <h4 className="font-bold">Direct Vasodilators</h4>
              <p>Hydralazine, Minoxidil. Used with a diuretic and beta-blocker due to fluid retention and reflex tachycardia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IVMedications({ onDrugClick }: { onDrugClick: (drug: string) => void }) {
  const Button = ({ d }: { d: string }) => (
    <button onClick={() => onDrugClick(d)} className="text-blue-600 hover:underline font-medium">
      {d}
    </button>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 overflow-x-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-6">IV Antihypertensive Drugs & Indications (Table 26 & 27)</h2>
      
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left font-bold text-gray-700">Drug</th>
            <th className="px-4 py-3 text-left font-bold text-gray-700">Dose Range</th>
            <th className="px-4 py-3 text-left font-bold text-gray-700">Comments / Contraindications</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr className="bg-blue-50">
            <td colSpan={3} className="px-4 py-2 font-bold text-blue-900 border-b">CCB - Dihydropyridines</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium"><Button d="Nicardipine" /></td>
            <td className="px-4 py-3">5 mg/h, increasing by 2.5 q5m to max 15 mg/h</td>
            <td className="px-4 py-3">Contraindicated in advanced aortic stenosis. No negative inotropic effects.</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium"><Button d="Clevidipine" /></td>
            <td className="px-4 py-3">1-2 mg/h, doubling q90s until target. Max 21 mg/h</td>
            <td className="px-4 py-3">Contraindicated in soy/egg allergy or defective lipid metabolism.</td>
          </tr>
          <tr className="bg-blue-50">
            <td colSpan={3} className="px-4 py-2 font-bold text-blue-900 border-b border-t">Vasodilators</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">Sodium Nitroprusside</td>
            <td className="px-4 py-3">0.3-0.5 mcg/kg/min. Max 10 mcg/kg/min</td>
            <td className="px-4 py-3">Intra-arterial BP monitoring recommended. Cyanide toxicity risk (esp. liver/renal dysfunction).</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium"><Button d="Nitroglycerin" /></td>
            <td className="px-4 py-3">5 mcg/min, increasing q3-5m to max 200 mcg/min</td>
            <td className="px-4 py-3">Use only for ACS or acute pulmonary edema. Avoid if volume depleted.</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium"><Button d="Hydralazine" /></td>
            <td className="px-4 py-3">10 mg IV (max 20mg initial). Repeat q4-6h</td>
            <td className="px-4 py-3">Unpredictable response and prolonged duration. Less desirable for acute strict targets.</td>
          </tr>
          <tr className="bg-blue-50">
            <td colSpan={3} className="px-4 py-2 font-bold text-blue-900 border-b border-t">Adrenergic Blockers</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium"><Button d="Labetalol" /></td>
            <td className="px-4 py-3">10-20 mg IV bolus. Or 0.4-1.0 mg/kg/h IV infusion</td>
            <td className="px-4 py-3">Combined alpha-/beta-blocker. Avoid in reactive airway disease, bradycardia, decompensated HF.</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium"><Button d="Esmolol" /></td>
            <td className="px-4 py-3">500-1000 mcg/kg/min loading, then 50 mcg/kg/min</td>
            <td className="px-4 py-3">Beta-1 selective. Contraindicated in concurrent beta-blocker use, bradycardia.</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">Phentolamine</td>
            <td className="px-4 py-3">5 mg IV bolus. Max 50 mg/24h</td>
            <td className="px-4 py-3">Alpha-receptor antagonist. Used for catecholamine excess (Pheochromocytoma, cocaine).</td>
          </tr>
        </tbody>
      </table>

      <h3 className="font-bold text-gray-900 mt-8 mb-4">Preferred Agents by Comorbidity (Table 27)</h3>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
        <li><strong>Acute Aortic Dissection:</strong> Esmolol, Labetalol (Beta blockade MUST precede vasodilator to prevent reflex tachycardia).</li>
        <li><strong>Acute Pulmonary Edema:</strong> Clevidipine, Nitroglycerin, Nitroprusside. (Beta blockers contraindicated).</li>
        <li><strong>ACS:</strong> Esmolol, Labetalol, Nicardipine, Nitroglycerin.</li>
        <li><strong>Eclampsia/Preeclampsia:</strong> Hydralazine, Labetalol, Nicardipine, Nifedipine. (ACEi/ARBs/Renin inhibitors contraindicated).</li>
      </ul>
    </div>
  );
}

function SecondaryCauses() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 overflow-x-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Secondary Causes of Hypertension (Table 10)</h2>
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left font-bold text-gray-700">Cause</th>
            <th className="px-4 py-3 text-left font-bold text-gray-700">Prevalence</th>
            <th className="px-4 py-3 text-left font-bold text-gray-700">Indications for Testing</th>
            <th className="px-4 py-3 text-left font-bold text-gray-700">Screening Tests</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr>
            <td className="px-4 py-3 font-medium text-gray-900">Obstructive Sleep Apnea (OSA)</td>
            <td className="px-4 py-3">25%-50%</td>
            <td className="px-4 py-3">Snoring, gasping during sleep, daytime sleepiness, resistant HTN. Physical: Obesity, large neck.</td>
            <td className="px-4 py-3">STOP-Bang Questionnaire, overnight oximetry. Referral for polysomnography.</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium text-gray-900">Chronic Kidney Disease (CKD)</td>
            <td className="px-4 py-3">14%</td>
            <td className="px-4 py-3">Hematuria, nocturia, elevated creatinine. Abnormal mass/palpable kidneys.</td>
            <td className="px-4 py-3">Electrolytes, BUN/Cr, urinalysis, urine microalbumin, renal ultrasound.</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium text-gray-900">Primary Aldosteronism</td>
            <td className="px-4 py-3">5%-25%</td>
            <td className="px-4 py-3">Resistant HTN, hypokalemia (spontaneous or diuretic induced), incidentally discovered adrenal mass.</td>
            <td className="px-4 py-3">Plasma aldosterone/renin activity ratio.</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium text-gray-900">Renovascular Hypertension</td>
            <td className="px-4 py-3">0.1%-5%</td>
            <td className="px-4 py-3">Resistant HTN, abrupt onset, flash pulmonary edema. Abdominal systolic-diastolic bruit.</td>
            <td className="px-4 py-3">Renal duplex Doppler ultrasound, MR angiography, CT arteriography.</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium text-gray-900">Pheochromocytoma / Paraganglioma</td>
            <td className="px-4 py-3">&lt;0.6%</td>
            <td className="px-4 py-3">Paroxysmal HTN, "spells" (headache, sweating, palpitations), neurofibromatosis stigmata.</td>
            <td className="px-4 py-3">24h urinary fractionated metanephrines or plasma metanephrines. CT/MRI abdomen.</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium text-gray-900">Cushing Syndrome</td>
            <td className="px-4 py-3">&lt;0.1%</td>
            <td className="px-4 py-3">Rapid weight gain (central), moon face, violaceous striae, proximal muscle weakness.</td>
            <td className="px-4 py-3">Overnight 1-mg dexamethasone suppression test or 24h urinary free cortisol.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
