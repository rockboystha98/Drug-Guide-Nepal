import { DrugEntry } from '../../types/formulary';

export const nutritionBlood3Drugs: DrugEntry[] = [
  // ANTICOAGULANTS
  {
    id: 'nut_018',
    genericName: 'Heparin (Unfractionated)',
    therapeuticClass: 'Anticoagulant',
    categoryId: 'blood',
    indications: ['DVT / PE', 'Acute Coronary Syndrome (ACS)', 'Atrial Fibrillation', 'Cardiopulmonary bypass'],
    dosing: { adult: 'IV/SC: DVT/PE target aPTT 1.5-2.5x control. Bolus 80 units/kg followed by 18 units/kg/hr. Prophylaxis: 5000 units SC BID/TID.', pediatric: 'IV: Bolus 50-100 units/kg, then infusion 20 units/kg/hr (<1 yr: 28 units/kg/hr).' },
    safety: { adr: ['**Bleeding/Hemorrhage**', 'Heparin-Induced Thrombocytopenia (HIT)', 'Osteoporosis (long term)'], contraindications: ['Active heavy bleeding', 'History of HIT', 'Severe thrombocytopenia'], pregnancyLactation: 'Category C (Does not cross placenta, preferred in pregnancy if indicated).' },
    pharmacy: { strengths: ['1000 IU/ml', '5000 IU/ml (5ml vial)'], dosageForms: ['Injection'], priceNPR: '25,000 IU vial: 150-300', brandNames: ['Heparin'] },
    notes: ['Monitor aPTT regularly. Antidote: Protamine Sulfate.'],
    searchTags: ['Blood thinner', 'Clot', 'Heart attack']
  },
  {
    id: 'nut_019',
    genericName: 'Enoxaparin',
    therapeuticClass: 'Low Molecular Weight Heparin (LMWH)',
    categoryId: 'blood',
    indications: ['DVT / PE (treatment and prophylaxis)', 'ACS (STEMI/NSTEMI)', 'Bridging therapy'],
    dosing: { adult: 'SC: Treatment: 1 mg/kg BID or 1.5 mg/kg OD. Prophylaxis: 40 mg SC OD.', pediatric: 'SC: Treatment: 1 mg/kg BID. Prophylaxis: 0.5 mg/kg BID.' },
    safety: { adr: ['**Bleeding**', 'Thrombocytopenia (lower risk of HIT than UFH)'], contraindications: ['Active major bleeding', 'History of HIT', 'Spinal/epidural anesthesia (risk of hematoma)'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['40mg/0.4ml', '60mg/0.6ml prefilled syringe'], dosageForms: ['Injection'], priceNPR: '40mg PFS: ~300-450', brandNames: ['Clexane', 'Lonopin'] },
    notes: ['Does not usually require aPTT monitoring. Renally dose adjusted (reduce in eGFR <30).'],
    searchTags: ['Blood thinner', 'Clot']
  },
  {
    id: 'nut_020',
    genericName: 'Warfarin',
    therapeuticClass: 'Vitamin K Antagonist',
    categoryId: 'blood',
    indications: ['DVT / PE / AFib stroke prevention', 'Prosthetic heart valves'],
    dosing: { adult: 'PO: 2-5 mg initially. Titrate to target INR (usually 2-3, or 2.5-3.5 for mechanical mitral valves).', pediatric: 'PO: 0.1-0.2 mg/kg/day, titrated to INR.' },
    safety: { adr: ['**Hemorrhage**', 'Tissue necrosis (Warfarin skin necrosis)', 'Teratogenicity'], contraindications: ['Pregnancy (highly teratogenic - crosses placenta)', 'Bleeding tendencies'], pregnancyLactation: 'Category X.' },
    pharmacy: { strengths: ['1mg, 2mg, 3mg, 5mg tab'], dosageForms: ['Tablet'], priceNPR: '5mg tab: 2-5', brandNames: ['Warf', 'Uniwarfin'] },
    notes: ['Requires frequent INR monitoring. High risk of drug-drug and drug-food interactions (consistent vitamin K intake required). Antidote: Vitamin K1.'],
    searchTags: ['Blood thinner', 'Heart valve']
  },
  {
    id: 'nut_021',
    genericName: 'Rivaroxaban',
    therapeuticClass: 'Direct Oral Anticoagulant (DOAC)',
    categoryId: 'blood',
    indications: ['Non-valvular Atrial Fibrillation', 'DVT/PE treatment and prophylaxis'],
    dosing: { adult: 'PO: AFib: 20 mg OD with evening meal. DVT/PE Treatment: 15 mg BID for 21 days, then 20 mg OD.', pediatric: 'Approval growing for specific indications, dependent on weight regimens.' },
    safety: { adr: ['**Bleeding**', 'GI upset'], contraindications: ['Active bleeding', 'Mechanical heart valves', 'Severe renal/hepatic impairment'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['10mg, 15mg, 20mg tab'], dosageForms: ['Tablet'], priceNPR: '15mg tab: ~30-50', brandNames: ['Xarelto', 'Roxar'] },
    notes: ['Does not require INR monitoring. Take 15/20mg tablets with food to ensure absorption.'],
    searchTags: ['Blood thinner', 'NOAC', 'DOAC']
  },
  {
    id: 'nut_022',
    genericName: 'Apixaban',
    therapeuticClass: 'Direct Oral Anticoagulant (DOAC)',
    categoryId: 'blood',
    indications: ['Non-valvular Atrial Fibrillation', 'DVT/PE treatment and prophylaxis'],
    dosing: { adult: 'PO: AFib: 5 mg BID. (Reduce to 2.5 mg BID if 2 of: Age ≥80, Weight ≤60kg, Creatinine ≥1.5). DVT/PE: 10 mg BID for 7 days, then 5 mg BID.', pediatric: 'Not routinely recommended.' },
    safety: { adr: ['**Bleeding** (lower GI bleeding risk than rivaroxaban)'], contraindications: ['Active bleeding', 'Severe hepatic impairment', 'Mechanical valves'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['2.5mg, 5mg tab'], dosageForms: ['Tablet'], priceNPR: '5mg tab: ~40-60', brandNames: ['Eliquis', 'Apixamac'] },
    notes: ['Generally the preferred DOAC in mild-mod renal failure. No INR monitoring.'],
    searchTags: ['Blood thinner', 'NOAC', 'DOAC']
  },
  {
    id: 'nut_023',
    genericName: 'Dabigatran',
    therapeuticClass: 'Direct Thrombin Inhibitor',
    categoryId: 'blood',
    indications: ['Non-valvular Atrial Fibrillation', 'DVT/PE treatment'],
    dosing: { adult: 'PO: 150 mg BID (reduce to 110 mg BID in specific risks like age or renal impairment).', pediatric: 'Not routinely used.' },
    safety: { adr: ['Bleeding', 'Dyspepsia/GI discomfort (very common)'], contraindications: ['Active bleeding', 'Mechanical valves', 'Severe renal impairment'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['75mg, 110mg, 150mg cap'], dosageForms: ['Capsule'], priceNPR: '110mg cap: ~50-80', brandNames: ['Pradaxa', 'Dabi'] },
    notes: ['Capsules must not be opened or chewed. Reversal agent: Idarucizumab.'],
    searchTags: ['Blood thinner', 'NOAC', 'DOAC']
  },

  // ANTIPLATELET DRUGS
  {
    id: 'nut_024',
    genericName: 'Aspirin (Antiplatelet)',
    therapeuticClass: 'Antiplatelet (COX inhibitor)',
    categoryId: 'blood',
    indications: ['ACS (STEMI/NSTEMI/Unstable Angina)', 'Secondary prevention of MI / Stroke / TIA'],
    dosing: { adult: 'PO: Acute ACS: 300 mg chewed. Maintenance: 75-150 mg OD.', pediatric: 'PO: Kawasaki disease: High dose then 3-5 mg/kg/day.' },
    safety: { adr: ['**GI Bleeding / Peptic ulcers**', 'Bronchospasm in asthmatics', 'Allergy'], contraindications: ['Active peptic ulcer', 'Bleeding disorders', 'Asthma with nasal polyps'], pregnancyLactation: 'Category D (Low-dose may be used for pre-eclampsia prevention).' },
    pharmacy: { strengths: ['75mg, 150mg enteric coated tab', '300mg soluble tab'], dosageForms: ['Tablet'], priceNPR: '75mg tab: ~1', brandNames: ['Ecosprin', 'Disprin'] },
    notes: ['Chewable/soluble aspirin preferred in acute MI for faster absorption.'],
    searchTags: ['Heart attack', 'Stroke', 'Blood thinner']
  },
  {
    id: 'nut_025',
    genericName: 'Clopidogrel',
    therapeuticClass: 'Antiplatelet (P2Y12 inhibitor)',
    categoryId: 'blood',
    indications: ['ACS', 'Post-stent (PCI) placement (DAPT with aspirin)', 'Stroke / PAD'],
    dosing: { adult: 'PO: ACS Loading: 300-600 mg. Maintenance: 75 mg OD.', pediatric: 'Specific cardiology indications only; 0.2-1 mg/kg/day.' },
    safety: { adr: ['**Bleeding**', 'TTP (rare)'], contraindications: ['Active pathological bleeding'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['75mg tab'], dosageForms: ['Tablet'], priceNPR: '75mg tab: 5-10', brandNames: ['Clavix', 'Deplatt'] },
    notes: ['Prodrug requiring activation by CYP2C19 (caution with omeprazole).'],
    searchTags: ['Heart attack', 'Stent', 'Blood thinner']
  },
  {
    id: 'nut_026',
    genericName: 'Prasugrel',
    therapeuticClass: 'Antiplatelet (P2Y12 inhibitor)',
    categoryId: 'blood',
    indications: ['ACS in patients undergoing PCI'],
    dosing: { adult: 'PO: Loading: 60 mg. Maintenance: 10 mg OD (5 mg if <60kg or >75yrs).', pediatric: 'Not recommended.' },
    safety: { adr: ['**High risk of major bleeding**'], contraindications: ['History of TIA/Stroke (Absolutely contraindicated)', 'Active bleeding'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['5mg, 10mg tab'], dosageForms: ['Tablet'], priceNPR: '10mg tab: 15-25', brandNames: ['Effient', 'Prasita'] },
    notes: ['More potent than clopidogrel with higher bleeding risk.'],
    searchTags: ['Stent', 'Heart attack']
  }
];
