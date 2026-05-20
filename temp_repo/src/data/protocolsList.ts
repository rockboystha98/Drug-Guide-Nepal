import { Protocol } from '../types/protocols';
import SepsisDashboard from '../components/SepsisDashboard';
import NtpDashboard from '../components/NtpDashboard';

export const protocolList: Protocol[] = [
  {
    id: 'prot-sepsis:2026',
    title: 'Sepsis Protocol (2026)',
    category: 'Emergency & Critical Care',
    tags: ['Sepsis', 'Shock', 'Resuscitation', 'Empiric Antibiotics', 'ICU'],
    description: 'Diagnosis, fluid resuscitation, and condition-specific empiric antibiotic algorithms for septic patients.',
    component: SepsisDashboard
  },
  {
    id: 'prot-ntp',
    title: 'National Tuberculosis Program',
    category: 'Infectious Diseases',
    tags: ['TB', 'Tuberculosis', 'NTP', 'NTB', 'Mycobacterium'],
    description: 'Weight-band dosing regimens and Calculator for adult and pediatric TB treatment.',
    component: NtpDashboard
  },
  {
    id: 'prot-acs',
    title: 'Acute Coronary Syndrome (ACS) Protocol',
    category: 'Cardiology',
    tags: ['Heart Attack', 'STEMI', 'NSTEMI', 'Chest Pain', 'ECG', 'HEAR Score'],
    description: 'Pathway for typical & atypical chest pain, STEMI vs NSTEMI evaluation.',
    startNodeId: 'acs-start',
    nodes: {
      'acs-start': {
        id: 'acs-start',
        title: 'Initial Assessment',
        type: 'action',
        content: '**Patients with typical chest pain:**\nSudden onset of central chest pain or heaviness radiating to shoulder, jaw, or neck which is increased by exertion.\n\n**Initial Action:**\n- [Aspirin](#drug-Aspirin) 300 mg PO (if not suspecting aortic dissection / hypertensive emergency)\n- Get ECG within 10 mins of arrival',
        options: [
          { label: 'ECG shows STEMI', nextId: 'acs-stemi' },
          { label: 'ECG Normal', nextId: 'acs-normal' },
          { label: 'ECG shows Non-specific ST changes', nextId: 'acs-nst' }
        ]
      },
      'acs-stemi': {
        id: 'acs-stemi',
        title: 'STEMI Management',
        type: 'action',
        content: '**Immediate Meds:**\n- [Atorvastatin](#drug-Atorvastatin) 40 mg PO stat\n- [Clopidogrel](#drug-Clopidogrel) 300 mg PO stat\n- If no contraindication: [Nitroglycerin](#drug-Nitroglycerin) sublingual spray 2 puff\n\n**Action:**\n- Activate Cardiac Team & Continuous cardiac monitoring.\n- Plan for PCI vs Thrombolysis.',
        options: [
          { label: 'Plan for PCI at our center (Patient agrees)', nextId: 'acs-pci-agree' },
          { label: 'Plan for PCI (Patient disagrees) or Send to other center', nextId: 'acs-thrombolysis' }
        ]
      },
      'acs-pci-agree': {
        id: 'acs-pci-agree',
        title: 'Prepare for PCI',
        type: 'endpoint',
        content: '- Send Troponin I, CK-MB, CBC, RFT, PT/INR, APTT, Serology (Quick)\n- Inj Heparin 5000 units IV stat (check contraindications: active bleeding, platelets <50k)\n- Shift to Cath Lab.\n\n**Timeline:**\n- 0 mins: Patient Arrival\n- 10 mins: ECG\n- 15 mins: Inform Supervisor\n- 30 mins: Send Inv and Shift to Cath lab\n- 90 mins: PCI'
      },
      'acs-thrombolysis': {
        id: 'acs-thrombolysis',
        title: 'Thrombolysis Pathway',
        type: 'decision',
        content: 'Check for Contraindications to Thrombolysis.',
        options: [
          { label: 'Contraindications present', nextId: 'acs-pci-counsel' },
          { label: 'No contraindications', nextId: 'acs-thrombolyze-action' }
        ]
      },
      'acs-thrombolyze-action': {
        id: 'acs-thrombolyze-action',
        title: 'Thrombolysis',
        type: 'endpoint',
        content: 'Perform Thrombolysis within **30 minutes** of arrival.'
      },
      'acs-pci-counsel': {
        id: 'acs-pci-counsel',
        title: 'Counsel for PCI',
        type: 'endpoint',
        content: 'Counsel patient and relatives for PCI / Transfer to Cardiac center.'
      },
      'acs-normal': {
        id: 'acs-normal',
        title: 'Normal ECG',
        type: 'decision',
        content: 'Assess for Ongoing Chest Pain or High HEAR Score (>3).',
        options: [
          { label: 'Ongoing Chest pain OR HEAR Score > 3', nextId: 'acs-troponin-check' },
          { label: 'No ongoing pain AND HEAR score <= 3', nextId: 'acs-alternate' }
        ]
      },
      'acs-troponin-check': {
        id: 'acs-troponin-check',
        title: 'Serial Evaluation',
        type: 'decision',
        content: '- Send Troponin I in 6 and 12 hours of symptoms.\n- ECG hourly for 3 hours, then as needed.',
        options: [
          { label: 'Positive ECG or Troponin I on serial evaluation', nextId: 'acs-nstem-management' },
          { label: 'No positive changes', nextId: 'acs-normal-reassess' }
        ]
      },
      'acs-normal-reassess': {
        id: 'acs-normal-reassess',
        title: 'Reassess',
        type: 'decision',
        content: 'Reassess Ongoing Chest pain or HEAR Score > 3.',
        options: [
          { label: 'Yes, ongoing pain or High score', nextId: 'acs-ccu-admit' },
          { label: 'No', nextId: 'acs-alternate' }
        ]
      },
      'acs-alternate': {
        id: 'acs-alternate',
        title: 'Alternate Diagnosis',
        type: 'endpoint',
        content: 'Look for an alternate diagnosis (e.g. MSK pain, GERD, anxiety, PE, etc.). Proceed accordingly.'
      },
      'acs-nst': {
        id: 'acs-nst',
        title: 'Non-Specific ST Changes',
        type: 'action',
        content: '- Send Troponin I and CK-MB.\n- Prescribe Analgesics / PPI as supportive.',
        options: [
          { label: 'Troponin I turns Positive', nextId: 'acs-nstem-management' },
          { label: 'Troponin I negative', nextId: 'acs-troponin-check' }
        ]
      },
      'acs-nstem-management': {
        id: 'acs-nstem-management',
        title: 'NSTEMI Management',
        type: 'decision',
        content: '**Stat Meds:**\n- [Clopidogrel](#drug-Clopidogrel) 300 mg PO stat\n- [Atorvastatin](#drug-Atorvastatin) 40 mg PO stat\n\nAssess for Refractory angina, hemodynamic, or electrical instability.',
        options: [
          { label: 'Instability or Refractory Angina present', nextId: 'acs-send-pci' },
          { label: 'Stable', nextId: 'acs-ccu-admit' }
        ]
      },
      'acs-ccu-admit': {
        id: 'acs-ccu-admit',
        title: 'Admit to CCU',
        type: 'endpoint',
        content: 'Consult Cardio team. Admit patient to CCU for monitoring and further work-up.'
      },
      'acs-send-pci': {
        id: 'acs-send-pci',
        title: 'Send for PCI',
        type: 'endpoint',
        content: 'Send patient for early Invasive strategy (PCI).'
      }
    }
  },
  {
    id: 'prot-hyperkalemia',
    title: 'Hyperkalaemia Protocol',
    category: 'Emergency & Critical Care',
    tags: ['Potassium', 'Renal', 'ECG', 'Arrhythmia', 'Metabolic', 'K+'],
    description: 'Management of dangerous potassium levels and ECG changes.',
    startNodeId: 'hk-start',
    nodes: {
      'hk-start': {
        id: 'hk-start',
        title: 'Initial Assessment',
        type: 'decision',
        content: '**History consistent with hyperkalaemia?**\n- History of DM, CHF, or CKD\n- Signs of renal failure or elevated creatinine\n- Patient on meds known to cause hyperkalaemia\n\n*(If No -> Repeat K Testing. If > 5.5, proceed. If less, no treatment)*',
        options: [
          { label: 'Yes, consistent history', nextId: 'hk-ecg' },
          { label: 'Incidental K > 5.5 mEq/L', nextId: 'hk-ecg' }
        ]
      },
      'hk-ecg': {
        id: 'hk-ecg',
        title: 'Check ECG',
        type: 'decision',
        content: '**New ECG changes?**\n- Arrhythmia (Bradycardia, non sinus tachycardia, junctional rhythm)\n- Prolong intervals (PR or QRS)\n- Diminished P wave amplitude, ST/T changes (elevation, depression, peaked T)',
        options: [
          { label: 'Yes, ECG changes present', nextId: 'hk-calcium' },
          { label: 'No ECG changes', nextId: 'hk-treatment' }
        ]
      },
      'hk-calcium': {
        id: 'hk-calcium',
        title: 'Administer Calcium',
        type: 'action',
        content: '**Action:**\nAdminister Calcium (e.g. [Calcium gluconate](#drug-Calcium%20gluconate) 10 ml 10% / 1gm).\n\n- Repeat ECG in 5 minutes.\n- If ECG changes persist, repeat [Calcium gluconate](#drug-Calcium%20gluconate) x2.',
        options: [
          { label: 'Proceed to Specific Potassium Lowering', nextId: 'hk-treatment' }
        ]
      },
      'hk-treatment': {
        id: 'hk-treatment',
        title: 'Treatment Options based on K+ Level',
        type: 'action',
        content: '**Based on Potassium Level (mEq/L):**\n\n**K < 6:**\n- Consider [Insulin (Regular)](#drug-Insulin)/Dextrose ± [Salbutamol (Albuterol)](#drug-Salbutamol) nebulizer ± [Furosemide](#drug-Furosemide)/Fluids *(Note: Do not give fluid if CHF)*\n\n**K 6 - 6.5:**\n- [Insulin (Regular)](#drug-Insulin)/Dextrose ± [Salbutamol (Albuterol)](#drug-Salbutamol) nebulizer ± [Furosemide](#drug-Furosemide)/Fluids. Consider URGENT hemodialysis.\n\n**K > 6.5:**\n- [Insulin (Regular)](#drug-Insulin)/Dextrose ± [Salbutamol (Albuterol)](#drug-Salbutamol) nebulizer ± [Furosemide](#drug-Furosemide)/Fluids. Consider IMMEDIATE hemodialysis.\n\n**Doses:**\n- `Insulin/Dextrose`: 10 units [Insulin (Regular)](#drug-Insulin) (5 units if CKD) + 50 ml 50% DEXTROSE.\n- `Salbutamol`: 10 mg (5 ml) neb over 15 mins.\n- `Furosemide`: 20-80 mg IV.',
        options: [
          { label: 'Reassess after 2-4 hours', nextId: 'hk-reassess' }
        ]
      },
      'hk-reassess': {
        id: 'hk-reassess',
        title: 'Reassessment',
        type: 'decision',
        content: 'Check Potassium level after 2-4 hours of initial treatment.',
        options: [
          { label: 'K > 6 mEq/L', nextId: 'hk-emergent-hemo' },
          { label: 'K <= 6 mEq/L', nextId: 'hk-disposition' }
        ]
      },
      'hk-emergent-hemo': {
        id: 'hk-emergent-hemo',
        title: 'Emergent Hemodialysis',
        type: 'endpoint',
        content: 'Consult Nephrology for Emergent Hemodialysis.'
      },
      'hk-disposition': {
        id: 'hk-disposition',
        title: 'Disposition',
        type: 'endpoint',
        content: '**Admit:** HK with unstable vitals or new-onset HK.\n\n**Consider discharge:** Chronic HK with stable vitals, K eliminated with diuretics, risk-benefit discussed.'
      }
    }
  },
  {
    id: 'prot-stroke',
    title: 'Acute Stroke Protocol',
    category: 'Neurology',
    tags: ['Stroke', 'CVA', 'Ischemic', 'Hemorrhagic', 'Thrombolysis', 'EVT', 'Tenecteplase'],
    description: 'Comprehensive pathway for identifying, imaging, and managing acute stroke candidates based on 2026 AHA/ASA Guidelines.',
    startNodeId: 'stroke-start',
    nodes: {
      'stroke-start': {
        id: 'stroke-start',
        title: 'Stroke Symptoms & Mimics',
        type: 'decision',
        content: '**Traditional Symptoms:** Sudden numbness/weakness of face/arm/leg (unilateral), Sudden aphasia, Sudden dysarthria, Sudden visual deficit, Sudden dizziness/ataxia, Sudden severe headache.\n\n**Assessment:** Use NIHSS to measure clinical deficits. Determine if deficits are clearly disabling.\n\n**Exclude Mimics:** Seizure, Syncope, Meningitis, Brain Neoplasm, Subdural hematoma, SAH, Hypoglycemia, Wernicke’s, Bell’s Palsy.\n*Note: Measure blood glucose. Treat if <60 mg/dL. Reassess.*',
        options: [
          { label: 'Minor / Non-Disabling Deficits (or TIA)', nextId: 'stroke-minor' },
          { label: 'Disabling Deficits (Suspicion of AIS)', nextId: 'stroke-workup' }
        ]
      },
      'stroke-minor': {
        id: 'stroke-minor',
        title: 'Minor Non-Disabling AIS or High-Risk TIA',
        type: 'action',
        content: '**Patients with minor (NIHSS \u2264 5) noncardioembolic AIS or high-risk TIA (ABCD2 \u2265 4):**\n\n- **IVT is NOT recommended** for mild non-disabling stroke deficits.\n- **Treatment:** Early Dual Antiplatelet Therapy (DAPT) with [Aspirin](#drug-Aspirin) and [Clopidogrel](#drug-Clopidogrel) or Ticagrelor should be initiated early (within 24 hours) and continued for 21-30 days, followed by single antiplatelet therapy.\n- Example: Clopidogrel 300 mg load then 75 mg/d + Aspirin 75-100 mg/d.',
        options: [
          { label: 'Proceed to Standard Care', nextId: 'stroke-conservative' }
        ]
      },
      'stroke-workup': {
        id: 'stroke-workup',
        title: 'Workup & Imaging',
        type: 'decision',
        content: '**Workup:**\n- **Emergent Brain Imaging:** NCCT (or MRI) is recommended to assess ischemic burden and exclude hemorrhage.\n- **Vascular Imaging:** CTA or MRA (Do not delay for creatinine in suspected LVO).\n- **Labs:** CBC, PT (INR), APTT, Troponin, Creatinine (do not delay thrombolysis for labs if no suspicion of coagulopathy).\n\n**Time from Last Known Well (LKW):**',
        options: [
          { label: '< 4.5 hours', nextId: 'stroke-ivt-eval-early' },
          { label: '4.5 - 24 hours (or Wake-up)', nextId: 'stroke-ivt-eval-late' },
          { label: '> 24 hours', nextId: 'stroke-conservative' }
        ]
      },
      'stroke-ivt-eval-early': {
        id: 'stroke-ivt-eval-early',
        title: 'IVT Evaluation (< 4.5 hours)',
        type: 'decision',
        content: '**Evaluate for Intravenous Thrombolysis (IVT):**\n- BP must be < 185/110 mmHg before treatment (lower cautiously if needed).\n- Exclude absolute contraindications: prior ICH, established large infarct on imaging (e.g. extensive hypodensity), severe coagulopathy, recent major surgery/trauma, etc.\n\n*Note: Unknown burden of cerebral microbleeds (CMB) should NOT delay IVT.*',
        options: [
          { label: 'Eligible for IVT', nextId: 'stroke-ivt-admin' },
          { label: 'Contraindicated for IVT', nextId: 'stroke-evt-eval' }
        ]
      },
      'stroke-ivt-admin': {
        id: 'stroke-ivt-admin',
        title: 'Administer IVT',
        type: 'action',
        content: '**Administer IV Thrombolytic:**\n\n- **[Tenecteplase](#drug-Tenecteplase):** 0.25 mg/kg (max 25 mg) IV bolus. *(Preferred option in 2026 guidelines)*\n**OR**\n- **[Alteplase](#drug-Alteplase):** 0.9 mg/kg (max 90 mg) over 60 min, with 10% as initial bolus.\n\n*Do NOT delay IVT to wait for EVT or to observe clinical response.* Ensure BP maintained < 180/105 mmHg for 24h post-treatment.',
        options: [
          { label: 'Evaluate for EVT', nextId: 'stroke-evt-eval' }
        ]
      },
      'stroke-ivt-eval-late': {
        id: 'stroke-ivt-eval-late',
        title: 'Extended Window IVT Assessment (4.5 - 24 h)',
        type: 'decision',
        content: 'For patients with symptom onset 4.5 - 24 hours or unknown onset (wake-up stroke):\n\n- Advanced Imaging is required: CTP or MR DWI-PWI to detect salvageable penumbra.\n- For wake-up stroke or onset < 4.5h from recognition, an MRI with DWI-FLAIR mismatch can determine IVT eligibility.\n- Alternatively, if IVT ineligible, they may still be EVT candidates.',
        options: [
          { label: 'Matches Extended IVT Criteria', nextId: 'stroke-ivt-admin' },
          { label: 'Does Not Match IVT Criteria', nextId: 'stroke-evt-eval' }
        ]
      },
      'stroke-evt-eval': {
        id: 'stroke-evt-eval',
        title: 'Endovascular Thrombectomy (EVT) Evaluation',
        type: 'decision',
        content: '**Identify Large Vessel Occlusion (LVO)** of the anterior circulation (ICA, M1) or basilar artery.\n\n- **0-6 hours:** EVT recommended for ICA/M1 LVO, NIHSS \u2265 6, pre-stroke mRS 0-1, and ASPECTS 3 to 10 (even large core infarcts).\n- **6-24 hours:** EVT recommended for ICA/M1 LVO with salvageable tissue (CTP/MRI mismatch) or ASPECTS \u2265 3.\n- **Posterior Circulation:** EVT recommended for basilar artery occlusion within 24 hours (NIHSS \u2265 10).',
        options: [
          { label: 'Eligible for EVT', nextId: 'stroke-evt-admin' },
          { label: 'Not Eligible for EVT', nextId: 'stroke-conservative' }
        ]
      },
      'stroke-evt-admin': {
        id: 'stroke-evt-admin',
        title: 'Perform EVT',
        type: 'action',
        content: '**Endovascular Thrombectomy:**\n- Transfer to a Thrombectomy-Capable/Comprehensive Stroke Center if not already there.\n- Target reperfusion to extended TICI 2b/2c/3.\n- Maintain BP \u2264 180/105 mmHg during and for 24 hours after EVT. *(Intensive BP lowering <140 mmHg is harmful after successful reperfusion).*',
        options: [
          { label: 'Proceed to Standard Care', nextId: 'stroke-conservative' }
        ]
      },
      'stroke-conservative': {
        id: 'stroke-conservative',
        title: 'General Supportive Care',
        type: 'endpoint',
        content: 'Admit to an organized **Stroke Unit**.\n\n**Supportive Measures:**\n- **Airway/O2:** Maintain SpO2 > 94%. Routine supplemental oxygen in non-hypoxic patients is NOT recommended.\n- **Glucose:** Treat persistent hyperglycemia to achieve 140-180 mg/dL (intensive control to 80-130 mg/dL is NOT recommended).\n- **BP Control:** In patients not receiving reperfusion therapies, routine lowering of BP (if < 220/120 mmHg) in the first 48-72h is not effective to prevent death or dependency.\n- **Dysphagia:** Bedside swallow screen before oral intake. Consider Pharyngeal Electrical Stimulation (PES) if dysphagia present.\n- **DVT Prophylaxis:** Intermittent pneumatic compression (IPC). Elastic stockings are harmful.\n- **Depression:** Screen for post-stroke depression.\n- **Antiplatelet:** [Aspirin](#drug-Aspirin) 160-300 mg PO/NG within 48h (if IVT given, delay aspirin for 24h).'
      }
    }
  }
];
