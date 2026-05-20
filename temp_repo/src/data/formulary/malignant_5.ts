import { DrugEntry } from '../../types/formulary';

export const malignant5Drugs: DrugEntry[] = [
  {
    id: 'mal_036',
    genericName: 'Hydroxyurea',
    therapeuticClass: 'Antimetabolite',
    categoryId: 'oncology',
    indications: ['Chronic myeloid leukemia (CML)', 'Sickle cell anemia', 'Polycythemia vera'],
    dosing: { adult: 'PO: 15-30 mg/kg/day continuous or 80 mg/kg every 3 days.', pediatric: 'PO: Sickle cell: 15-20 mg/kg/day.' },
    safety: { adr: ['**Myelosuppression**', 'Macrocytosis', 'Leg ulcers'], contraindications: ['Severe myelosuppression'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required.',
    pharmacy: { strengths: ['500mg cap'], dosageForms: ['Capsule'], priceNPR: '500mg cap: ~20-30', brandNames: ['Hydrea', 'Cytodrox'] },
    notes: ['Used non-curedatively for rapid white cell reduction or sickle cell crisis prevention. Monitor CBC.'],
    searchTags: ['Cancer', 'Chemo', 'Sickle cell']
  },
  {
    id: 'mal_037',
    genericName: 'Irinotecan',
    therapeuticClass: 'Topoisomerase I Inhibitor',
    categoryId: 'oncology',
    indications: ['Colorectal cancer (often with 5-FU/Leucovorin)'],
    dosing: { adult: 'IV: 125-350 mg/m² depending on regimen (weekly vs 3-weekly).', pediatric: 'Rarely used.' },
    safety: { adr: ['**Severe Diarrhea** (early and late phases)', '**Myelosuppression**', 'Cholinergic syndrome'], contraindications: ['Inflammatory bowel disease', 'Severe hyperbilirubinemia'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required.',
    pharmacy: { strengths: ['40mg/2ml, 100mg/5ml vials'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Camptosar', 'Irinotel'] },
    notes: ['Early diarrhea/cholinergic symptoms reversed with atropine. Late diarrhea requires aggressive loperamide therapy.'],
    searchTags: ['Cancer', 'Chemo', 'Colon']
  },
  {
    id: 'mal_038',
    genericName: 'Interferon beta',
    therapeuticClass: 'Immunomodulator',
    categoryId: 'oncology',
    indications: ['Multiple Sclerosis (Relapsing-Remitting)'],
    dosing: { adult: 'SC/IM: Variable depending on product (e.g., Beta-1a vs Beta-1b).', pediatric: 'Not routinely used.' },
    safety: { adr: ['Flu-like symptoms', 'Depression/Suicidal ideation', 'Liver injury'], contraindications: ['Severe depression', 'Untreated epilepsy'], pregnancyLactation: 'Category C.' },
    handlingNote: 'Standard handling.',
    pharmacy: { strengths: ['Varies (e.g., 30mcg, 44mcg)'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Avonex', 'Rebif'] },
    notes: ['Pre-medicate with paracetamol to reduce flu-like symptoms.'],
    searchTags: ['MS', 'Sclerosis', 'Immunity']
  },
  {
    id: 'mal_039',
    genericName: 'Interferon gamma-1b',
    therapeuticClass: 'Immunomodulator',
    categoryId: 'oncology',
    indications: ['Chronic Granulomatous Disease', 'Severe malignant osteopetrosis'],
    dosing: { adult: 'SC: 50 mcg/m² 3 times weekly.', pediatric: 'SC: 50 mcg/m² (<0.5m² use 1.5 mcg/kg).' },
    safety: { adr: ['Fever', 'Chills', 'Myalgia', 'Neutropenia'], contraindications: ['Known hypersensitivity'], pregnancyLactation: 'Category C.' },
    handlingNote: 'Standard handling.',
    pharmacy: { strengths: ['100mcg vial'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Actimmune'] },
    notes: ['Rarely used outside highly specialized immunology centers.'],
    searchTags: ['Immunity', 'Granulomatous']
  },
  {
    id: 'mal_040',
    genericName: 'Lomustine',
    therapeuticClass: 'Nitrosourea Alkylating Agent',
    categoryId: 'oncology',
    indications: ['Brain tumors (crosses blood-brain barrier)', 'Hodgkin lymphoma'],
    dosing: { adult: 'PO: 130 mg/m² as a single dose every 6 weeks.', pediatric: 'PO: 130 mg/m² every 6 weeks.' },
    safety: { adr: ['**Delayed Myelosuppression** (nadir at 4-6 weeks)', 'Pulmonary toxicity', 'Nausea/vomiting'], contraindications: ['Severe bone marrow depression'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required.',
    pharmacy: { strengths: ['10mg, 40mg cap'], dosageForms: ['Capsule'], priceNPR: 'Varies', brandNames: ['Lomustin', 'Gleostine'] },
    notes: ['DO NOT dispense more than a single dose at a time due to risks of fatal overdose. Extremely delayed platelet nadir.'],
    searchTags: ['Cancer', 'Chemo', 'Brain tumor']
  },
  {
    id: 'mal_041',
    genericName: 'Mercaptopurine (6-MP)',
    therapeuticClass: 'Antimetabolite',
    categoryId: 'oncology',
    indications: ['Acute Lymphoblastic Leukemia (ALL) maintenance', 'Inflammatory bowel disease'],
    dosing: { adult: 'PO: ALL: 1.5-2.5 mg/kg/day.', pediatric: 'PO: ALL: 75 mg/m²/day.' },
    safety: { adr: ['**Myelosuppression**', 'Hepatotoxicity', 'Immunosuppression'], contraindications: ['Prior resistance to 6-MP or thioguanine'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required.',
    pharmacy: { strengths: ['50mg tab'], dosageForms: ['Tablet'], priceNPR: '50mg tab: ~15', brandNames: ['Purinethol', 'Captomer'] },
    notes: ['**Dose must be drastically reduced (by 75%) if given with allopurinol** due to blocked metabolism.'],
    searchTags: ['Cancer', 'Chemo', 'Leukemia']
  },
  {
    id: 'mal_042',
    genericName: 'Mitoxantrone',
    therapeuticClass: 'Anthracycline derivative (Anthracenedione)',
    categoryId: 'oncology',
    indications: ['Prostate cancer', 'Acute non-lymphocytic leukemia', 'Multiple Sclerosis (severe)'],
    dosing: { adult: 'IV: 12-14 mg/m² every 3 weeks.', pediatric: 'Rarely used.' },
    safety: { adr: ['**Cardiotoxicity**', '**Myelosuppression**', 'Blue-green urine/sclera'], contraindications: ['Baseline neutrophil < 1500/mm³', 'Severe hepatic dysfunction'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required.',
    pharmacy: { strengths: ['20mg/10ml vial'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Novantrone'] },
    notes: ['Strict tracking of cumulative lifetime dose required to prevent heart failure.'],
    searchTags: ['Cancer', 'Chemo', 'MS']
  },
  {
    id: 'mal_043',
    genericName: 'Oxaliplatin',
    therapeuticClass: 'Platinum-based Alkylating Agent',
    categoryId: 'oncology',
    indications: ['Colorectal cancer (FOLFOX regimen)'],
    dosing: { adult: 'IV: 85-130 mg/m² depending on regimen.', pediatric: 'Not routinely used.' },
    safety: { adr: ['**Peripheral Neuropathy** (cold-aggravated)', '**Myelosuppression**', 'Hypersensitivity'], contraindications: ['Severe renal impairment (CrCl <30)'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required. Do not mix with normal saline (requires Dextrose 5%).',
    pharmacy: { strengths: ['50mg, 100mg vials'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Eloxatin', 'Oxal'] },
    notes: ['Instruct patients to avoid cold temperatures and cold drinks for several days after infusion to prevent acute neuropathy.'],
    searchTags: ['Cancer', 'Chemo', 'Colon']
  }
];
