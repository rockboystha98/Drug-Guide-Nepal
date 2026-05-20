import { DrugEntry } from '../../types/formulary';

export const malignant6Drugs: DrugEntry[] = [
  {
    id: 'mal_044',
    genericName: 'Pemetrexed',
    therapeuticClass: 'Antimetabolite (Folate Analog)',
    categoryId: 'oncology',
    indications: ['Non-small cell lung cancer (NSCLC)', 'Pleural mesothelioma'],
    dosing: { adult: 'IV: 500 mg/m² every 3 weeks.', pediatric: 'Not routinely used.' },
    safety: { adr: ['**Myelosuppression**', 'Skin rash', 'Fatigue'], contraindications: ['Severe renal impairment (CrCl < 45)'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required.',
    pharmacy: { strengths: ['100mg, 500mg vials'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Alimta', 'Pemex'] },
    notes: ['Must be supplemented with Folic Acid and Vitamin B12 to reduce severe toxicity. Premedicate with dexamethasone for rash.'],
    searchTags: ['Cancer', 'Chemo', 'Lung cancer']
  },
  {
    id: 'mal_045',
    genericName: 'Procarbazine',
    therapeuticClass: 'Alkylating Agent',
    categoryId: 'oncology',
    indications: ['Hodgkin lymphoma (MOPP protocol)', 'Brain tumors'],
    dosing: { adult: 'PO: 100 mg/m² daily for up to 14 days of a 28-day cycle.', pediatric: 'PO: 50 mg/m² daily.' },
    safety: { adr: ['**Myelosuppression**', 'Secondary leukemias', 'Disulfiram-like reaction with alcohol'], contraindications: ['Severe hepatic/renal impairment'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required.',
    pharmacy: { strengths: ['50mg cap'], dosageForms: ['Capsule'], priceNPR: 'Varies', brandNames: ['Natulan', 'Hodgkin'] },
    notes: ['Acts as an MAO inhibitor; avoid tyramine-rich foods to prevent hypertensive crisis.'],
    searchTags: ['Cancer', 'Chemo', 'Lymphoma']
  },
  {
    id: 'mal_046',
    genericName: 'Tacrolimus',
    therapeuticClass: 'Calcineurin Inhibitor / Immunosuppressant',
    categoryId: 'oncology',
    indications: ['Organ transplant rejection prophylaxis', 'Severe atopic dermatitis (Topical)'],
    dosing: { adult: 'PO: 0.1-0.2 mg/kg/day divided BID. Target trough levels require monitoring.', pediatric: 'PO: 0.15-0.2 mg/kg/day divided BID.' },
    safety: { adr: ['Nephrotoxicity', 'Neurotoxicity (tremors)', 'Hyperglycemia'], contraindications: ['Concurrent use with cyclosporine'], pregnancyLactation: 'Category C.' },
    handlingNote: 'Handle with care (immunosuppressant).',
    pharmacy: { strengths: ['0.5mg, 1mg cap', '0.03%, 0.1% ointment'], dosageForms: ['Capsule', 'Ointment'], priceNPR: '1mg cap: ~30-50', brandNames: ['Prograf', 'Tacrograf'] },
    notes: ['Therapeutic drug monitoring required. Avoid grapefruit juice.'],
    searchTags: ['Transplant', 'Immunity']
  },
  {
    id: 'mal_047',
    genericName: 'Temozolomide',
    therapeuticClass: 'Alkylating Agent',
    categoryId: 'oncology',
    indications: ['Glioblastoma multiforme', 'Anaplastic astrocytoma'],
    dosing: { adult: 'PO: 75 mg/m² daily for 42 days with radiotherapy, then 150-200 mg/m² for 5 days of 28-day cycle.', pediatric: 'PO: Used in specific brain tumors.' },
    safety: { adr: ['**Myelosuppression**', 'Severe nausea and vomiting', 'Opportunistic infections (PCP)'], contraindications: ['Severe myelosuppression', 'Hypersensitivity to dacarbazine'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required. Do not open capsules.',
    pharmacy: { strengths: ['20mg, 100mg, 250mg cap'], dosageForms: ['Capsule'], priceNPR: '250mg cap: high cost', brandNames: ['Temodal', 'Gliotem'] },
    notes: ['PCP prophylaxis (e.g., cotrimoxazole) usually required during concurrent radiotherapy phase.'],
    searchTags: ['Cancer', 'Chemo', 'Brain tumor']
  },
  {
    id: 'mal_048',
    genericName: 'Topotecan',
    therapeuticClass: 'Topoisomerase I Inhibitor',
    categoryId: 'oncology',
    indications: ['Ovarian cancer', 'Cervical cancer', 'Small cell lung cancer'],
    dosing: { adult: 'IV: 1.5 mg/m² daily for 5 days of a 21-day cycle.', pediatric: 'Not routinely established.' },
    safety: { adr: ['**Severe Myelosuppression** (Neutropenia)', 'Diarrhea', 'Alopecia'], contraindications: ['Severe bone marrow depression'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required.',
    pharmacy: { strengths: ['2.5mg, 4mg vials'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Hycamtin', 'Topotel'] },
    notes: ['Dose reduce in renal impairment.'],
    searchTags: ['Cancer', 'Chemo', 'Ovarian']
  },
  {
    id: 'mal_049',
    genericName: 'Tretinoin (Oral / ATRA)',
    therapeuticClass: 'Retinoid / Antineoplastic',
    categoryId: 'oncology',
    indications: ['Acute Promyelocytic Leukemia (APL) remission induction'],
    dosing: { adult: 'PO: 45 mg/m²/day divided in two doses with food.', pediatric: 'PO: 45 mg/m²/day.' },
    safety: { adr: ['APL differentiation syndrome', 'Pseudomotor cerebri', 'Hyperlipidemia'], contraindications: ['Pregnancy (highly teratogenic)'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic/Teratogen Handling Required.',
    pharmacy: { strengths: ['10mg cap'], dosageForms: ['Capsule'], priceNPR: 'Varies', brandNames: ['Vesanoid', 'Tretiva'] },
    notes: ['APL differentiation syndrome requires immediate high-dose dexamethasone treatment.'],
    searchTags: ['Leukemia', 'Cancer', 'Chemo']
  },
  {
    id: 'mal_050',
    genericName: 'Vinorelbine',
    therapeuticClass: 'Vinca Alkaloid',
    categoryId: 'oncology',
    indications: ['Non-small cell lung cancer', 'Breast cancer'],
    dosing: { adult: 'IV: 25-30 mg/m² weekly.', pediatric: 'Not established.' },
    safety: { adr: ['**Myelosuppression**', 'Neurotoxicity', 'Extravasation necrosis'], contraindications: ['Severe neutropenia'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required. Highly vesicant.',
    pharmacy: { strengths: ['10mg, 50mg vials'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Navelbine', 'Neocristin'] },
    notes: ['Fatal if given intrathecally. Strict IV use only.'],
    searchTags: ['Cancer', 'Chemo', 'Lung cancer']
  },
  {
    id: 'mal_051',
    genericName: 'Bevacizumab',
    therapeuticClass: 'Targeted Therapy (Anti-VEGF Monoclonal Antibody)',
    categoryId: 'oncology',
    indications: ['Metastatic colorectal cancer', 'Glioblastoma', 'Non-squamous NSCLC'],
    dosing: { adult: 'IV: 5-15 mg/kg every 2-3 weeks.', pediatric: 'Not routinely used.' },
    safety: { adr: ['**GI Perforation**', 'Severe Hemorrhage', 'Hypertension'], contraindications: ['Recent hemoptysis', 'Recent surgery (delays wound healing)'], pregnancyLactation: 'Category C.' },
    handlingNote: 'Standard biologic handling.',
    pharmacy: { strengths: ['100mg, 400mg vials'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Avastin', 'Bryxta'] },
    notes: ['Interrupt therapy 28 days before elective surgery due to impaired wound healing.'],
    searchTags: ['Cancer', 'Targeted', 'Colon']
  }
];
