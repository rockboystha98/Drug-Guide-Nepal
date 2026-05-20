import { Protocol } from '../types/protocols';

export const protocolList6: Protocol[] = [
  {
    id: 'prot-acs-2025',
    title: 'Acute Coronary Syndromes (2025 ACC/AHA)',
    category: 'Cardiology',
    tags: ['ACS', 'STEMI', 'NSTEMI', 'Unstable Angina', 'Chest Pain', 'Myocardial Infarction'],
    description: 'Comprehensive pathway for identifying, risk-stratifying, and managing Acute Coronary Syndromes based on the 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline.',
    startNodeId: 'acs-start',
    nodes: {
      'acs-start': {
        id: 'acs-start',
        title: 'Initial Evaluation (Prehospital / Emergency Dept)',
        type: 'decision',
        content: '**Target:** Obtain and interpret a 12-lead ECG within 10 minutes of First Medical Contact (FMC).\n\nIf initial ECG is nondiagnostic but clinical suspicion remains high, perform serial ECGs.\nObtain high-sensitivity cardiac troponin (hs-cTn) as soon as possible.\n\n**Does the ECG show ST-segment elevation (or assumed equivalent)?**',
        options: [
          { label: 'Yes (STEMI)', nextId: 'stemi-pathway' },
          { label: 'No (NSTE-ACS or ruling out)', nextId: 'nsteacs-pathway' }
        ]
      },
      'stemi-pathway': {
        id: 'stemi-pathway',
        title: 'STEMI Pathway',
        type: 'decision',
        content: '**STEMI Protocol Activated:**\n- Provide O2 only if SpO2 < 90%.\n- Give Aspirin 162-325 mg (chewed) + P2Y12 inhibitor.\n- System goal is FMC-to-device time \u226490 minutes.\n\n**Can Primary PCI (PPCI) be performed within 120 minutes of FMC?** (and symptom onset < 12 hrs)',
        options: [
          { label: 'Yes (Timely PPCI available)', nextId: 'stemi-ppci' },
          { label: 'No (Transfer \u2265120 mins)', nextId: 'stemi-lytic' }
        ]
      },
      'stemi-ppci': {
        id: 'stemi-ppci',
        title: 'Primary PCI (PPCI) for STEMI',
        type: 'action',
        content: '**Action:** Proceed to Cardiac Cath Lab for PPCI.\n\n- **Vascular Access:** Radial approach is preferred to reduce bleeding and mortality.\n- **Adjunctive Therapies:** Parenteral anticoagulation (UFH or Bivalirudin) required during PCI. Intracoronary imaging (IVUS/OCT) is recommended for complex lesions.\n- **Routine Aspiration Thrombectomy:** NOT recommended.\n- **Multivessel Disease (MVD):** If stable, PCI of significant non-infarct arteries is recommended to reduce MACE. If cardiogenic shock is present, do NOT routinely perform PCI on non-infarct arteries.',
        options: [
          { label: 'Continue to Post-PCI Care', nextId: 'acs-post-care' }
        ]
      },
      'stemi-lytic': {
        id: 'stemi-lytic',
        title: 'Fibrinolytic Therapy',
        type: 'action',
        content: '**Action:** Administer fibrinolytic therapy (if no contraindications).\n- Fibrin-specific agents like Tenecteplase (TNK) or Alteplase (tPA) are preferred.\n- Concurrent antithrombotic: Aspirin + Clopidogrel.\n- Parenteral anticoagulation (Enoxaparin preferred or UFH) should be continued for up to 8 days or until revascularization.\n\nFollowing lytic administration -> **Immediate transfer to a PCI-capable center is recommended.** (Pharmacoinvasive strategy, or rescue PCI if failed reperfusion).',
        options: [
          { label: 'Continue to Post-Care', nextId: 'acs-post-care' }
        ]
      },
      'nsteacs-pathway': {
        id: 'nsteacs-pathway',
        title: 'NSTE-ACS Risk Stratification',
        type: 'decision',
        content: '**NSTE-ACS Evaluation:**\n- Provide Aspirin 162-325 mg (chewed).\n- Determine timing for Invasive Strategy based on clinical risk.\n\n**Select patient risk profile:**',
        options: [
          { label: 'Unstable / Very High Risk', nextId: 'nsteacs-unstable' },
          { label: 'High Risk (GRACE >140, dynamic ST \u0394s, + hs-cTn)', nextId: 'nsteacs-high' },
          { label: 'Intermediate Risk (GRACE 109-140, stable/down Tn)', nextId: 'nsteacs-inter' },
          { label: 'Low Risk (GRACE <109, TIMI <2, - hs-cTn)', nextId: 'nsteacs-low' }
        ]
      },
      'nsteacs-unstable': {
        id: 'nsteacs-unstable',
        title: 'Unstable / Very High Risk NSTE-ACS',
        type: 'action',
        content: '**Immediate Invasive Strategy (< 2 hrs):**\n\nFeatures: Cardiogenic shock, refractory angina, hemodynamic or electrical instability (VT/VF), signs or symptoms of HF. \n- Admit to Cardiac Intensive Care Unit (CICU).\n- Proceed emergently to angiography/PCI.\n- Multivessel PCI or CABG decisions are guided by disease complexity and stability.',
        options: [
          { label: 'Continue to Post-Care', nextId: 'acs-post-care' }
        ]
      },
      'nsteacs-high': {
        id: 'nsteacs-high',
        title: 'High Risk NSTE-ACS',
        type: 'action',
        content: '**Early Invasive Strategy (< 24 hrs):**\n\nFeatures: GRACE >140, dynamic ST-segment changes, serial hs-cTn rise/fall.\n- Administer P2Y12 inhibitor (Ticagrelor or Clopidogrel) periprocedurally (Routine pretreatment if angio >24h might be considered).\n- Parenteral anticoagulation: UFH, Enoxaparin, or Fondaparinux (if delayed invasive strategy).\n- Proceed to angiography within 24 hours.',
        options: [
          { label: 'Continue to Post-Care', nextId: 'acs-post-care' }
        ]
      },
      'nsteacs-inter': {
        id: 'nsteacs-inter',
        title: 'Intermediate Risk NSTE-ACS',
        type: 'action',
        content: '**Routine Invasive Strategy (before hospital discharge, typically < 72 hrs):**\n\n- Continue medical management.\n- Administer DAPT.\n- Parenteral anticoagulation.\n- Perform angiography before hospital discharge.',
        options: [
          { label: 'Continue to Post-Care', nextId: 'acs-post-care' }
        ]
      },
      'nsteacs-low': {
        id: 'nsteacs-low',
        title: 'Low Risk NSTE-ACS',
        type: 'action',
        content: '**Routine or Selective Invasive Approach:**\n\n- Patient may undergo early non-invasive testing (Stress test or Coronary CTA) or selected invasive approach.\n- Treat conservatively initially.',
        options: [
          { label: 'Continue to Post-Care', nextId: 'acs-post-care' }
        ]
      },
      'acs-post-care': {
        id: 'acs-post-care',
        title: 'Post-ACS Management & Secondary Prevention',
        type: 'info',
        content: '**Discharge & Long-Term Management:**\n\n- **DAPT:** Defaults to 12 months. May use bleeding reduction strategies (1-3 mos DAPT then monotherapy, especially if using Ticagrelor).\n- **High-Intensity Statin:** e.g., Atorvastatin 40-80 mg. Goal LDL-C < 55 mg/dL. Add Ezetimibe / PCSK9i if goals not met.\n- **Beta Blockers:** Initiate <24h if no contraindications.\n- **ACEi/ARB & MRA:** Recommended for LVEF \u226440%, HTN, DM, or Anterior STEMI.\n- **SGLT2 / GLP-1:** SGLT2i useful for HF/DM. GLP-1 RA for weight/CVD reduction.\n- **Colchicine:** Low-dose (0.5 mg daily) may be reasonable to reduce MACE.\n- **Cardiac Rehab:** Immediate referral is Class I.',
        options: [
          { label: 'End Protocol', nextId: 'end' }
        ]
      },
      'end': {
        id: 'end',
        title: 'End of Protocol',
        type: 'endpoint',
        content: 'Patient successfully managed following the 2025 ACC/AHA ACS guidelines.'
      }
    }
  }
];
