import { DrugEntry } from '../../types/formulary';

export const msk3Drugs: DrugEntry[] = [
  // OSTEOARTHRITIS & OSTEOPOROSIS
  {
    id: 'msk_018',
    genericName: 'Diacerein',
    therapeuticClass: 'Anthraquinone derivative',
    categoryId: 'msk',
    indications: ['Osteoarthritis'],
    dosing: { adult: 'PO: 50 mg BID after meals (often started at 50 mg OD for the first 2-4 weeks).', pediatric: 'Not recommended.' },
    safety: { adr: ['Severe diarrhea', 'Hepatotoxicity', 'Discoloration of urine (dark yellow/red)'], contraindications: ['Severe hepatic impairment', 'History of severe diarrhea'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['50mg cap'], dosageForms: ['Capsule'], priceNPR: '50mg cap: ~15-20', brandNames: ['Dycerin', 'Ostocerin'] },
    notes: ['Slow-acting symptom-modifying drug (takes weeks to show effect). Should be discontinued if severe diarrhea occurs.'],
    searchTags: ['Joint pain', 'Knee pain', 'Arthritis']
  },
  {
    id: 'msk_019',
    genericName: 'Alendronate',
    therapeuticClass: 'Bisphosphonate',
    categoryId: 'msk',
    indications: ['Postmenopausal osteoporosis', 'Glucocorticoid-induced osteoporosis', 'Paget’s disease'],
    dosing: { adult: 'PO: Osteoporosis: 70 mg once weekly (or 10 mg OD).', pediatric: 'Not recommended.' },
    safety: { adr: ['**Esophagitis / Esophageal Ulcer**', 'Atypical femur fractures (long-term use)', 'Osteonecrosis of the jaw'], contraindications: ['Inability to stand/sit upright for 30 minutes', 'Esophageal stricture', 'Hypocalcemia'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['10mg, 70mg tab'], dosageForms: ['Tablet'], priceNPR: '70mg tab: ~30-50', brandNames: ['Osteofos', 'Alendros'] },
    notes: ['**Patient instruction is crucial:** Take on an empty stomach with a full glass of plain water upon waking. Must remain upright (sitting/standing) and eat nothing else for 30 minutes.'],
    searchTags: ['Bone loss', 'Osteoporosis']
  },
  {
    id: 'msk_020',
    genericName: 'Zoledronic acid',
    therapeuticClass: 'Bisphosphonate',
    categoryId: 'msk',
    indications: ['Postmenopausal osteoporosis', 'Hypercalcemia of malignancy', 'Multiple myeloma'],
    dosing: { adult: 'IV: Osteoporosis: 5 mg infused once a year. Malignancy: 4 mg every 3-4 weeks.', pediatric: 'Specific pediatric oncology protocols only.' },
    safety: { adr: ['Acute phase reaction (flu-like symptoms post-infusion)', '**Renal toxicity**', 'Osteonecrosis of the jaw'], contraindications: ['Severe renal impairment (CrCl <35 ml/min)', 'Hypocalcemia'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['4mg, 5mg vial'], dosageForms: ['IV Infusion'], priceNPR: '5mg vial: ~2000-4000', brandNames: ['Zometa', 'Zoldonat'] },
    notes: ['Ensure adequate hydration before infusion. Often given with oral paracetamol to prevent post-infusion fever/myalgia.'],
    searchTags: ['Bone loss', 'Osteoporosis', 'Bone mets']
  },
  {
    id: 'msk_021',
    genericName: 'Ibandronate',
    therapeuticClass: 'Bisphosphonate',
    categoryId: 'msk',
    indications: ['Postmenopausal osteoporosis'],
    dosing: { adult: 'PO: 150 mg once a month. IV: 3 mg every 3 months.', pediatric: 'Not recommended.' },
    safety: { adr: ['Esophagitis (PO)', 'Dyspepsia', 'Osteonecrosis of the jaw'], contraindications: ['Inability to stand/sit upright for 60 minutes (PO)', 'Esophageal abnormalities'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['150mg tab', '3mg/3ml injection'], dosageForms: ['Tablet', 'Injection'], priceNPR: '150mg tab: ~150-250', brandNames: ['Bandrone', 'Idrofos'] },
    notes: ['Oral formulation requires fasting and remaining upright for 60 minutes.'],
    searchTags: ['Bone loss', 'Osteoporosis']
  },
  {
    id: 'msk_022',
    genericName: 'Risedronate',
    therapeuticClass: 'Bisphosphonate',
    categoryId: 'msk',
    indications: ['Postmenopausal osteoporosis', 'Glucocorticoid-induced osteoporosis', 'Paget’s disease'],
    dosing: { adult: 'PO: 35 mg once weekly.', pediatric: 'Not recommended.' },
    safety: { adr: ['Esophagitis', 'GI upset', 'Osteonecrosis of the jaw'], contraindications: ['Inability to stand/sit upright for 30 minutes', 'Hypocalcemia'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['35mg tab'], dosageForms: ['Tablet'], priceNPR: '35mg tab: ~60-100', brandNames: ['Risofos', 'Gemfos'] },
    notes: ['Same strict administration instructions as alendronate (fasting, upright for 30 minutes).'],
    searchTags: ['Bone loss', 'Osteoporosis']
  },
  // Adding Denosumab from target list
  {
    id: 'msk_023',
    genericName: 'Denosumab',
    therapeuticClass: 'RANKL Inhibitor (Monoclonal Antibody)',
    categoryId: 'msk',
    indications: ['Postmenopausal osteoporosis (high risk of fracture)', 'Bone metastases from solid tumors'],
    dosing: { adult: 'SC: Osteoporosis: 60 mg every 6 months. Oncology: 120 mg every 4 weeks.', pediatric: 'Not recommended.' },
    safety: { adr: ['**Severe Hypocalcemia**', 'Osteonecrosis of the jaw', 'Atypical femur fractures'], contraindications: ['Pre-existing hypocalcemia'], pregnancyLactation: 'Category X.' },
    pharmacy: { strengths: ['60mg/ml PFS', '120mg/1.7ml vial'], dosageForms: ['Injection'], priceNPR: '60mg PFS: ~15000-25000+', brandNames: ['Prolia', 'Xgeva'] },
    notes: ['Not cleared by kidneys, safer option in CKD compared to bisphosphonates (but hypocalcemia risk is higher). Rebound fracture risk if discontinued.'],
    searchTags: ['Bone loss', 'Osteoporosis']
  }
];
