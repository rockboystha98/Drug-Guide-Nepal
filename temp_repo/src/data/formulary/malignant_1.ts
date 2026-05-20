import { DrugEntry } from '../../types/formulary';

export const malignant1Drugs: DrugEntry[] = [
  // ALKYLATING AGENTS
  {
    id: 'mal_001',
    genericName: 'Cyclophosphamide',
    therapeuticClass: 'Alkylating agent',
    categoryId: 'oncology',
    indications: ['Leukemias', 'Lymphomas', 'Solid tumors', 'Severe rheumatoid arthritis / autoimmune disorders'],
    dosing: { adult: 'Dependent on protocol. Autoimmune: 1-2 mg/kg/day PO.', pediatric: 'Dependent on protocol (usually per m2).' },
    safety: { adr: ['**Bone marrow suppression**', '**Hemorrhagic cystitis** (ensure high fluid intake)', 'Alopecia'], contraindications: ['Severe bone marrow depression', 'Pregnancy'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['50mg tab', '200mg vial', '500mg vial', '1g vial'], dosageForms: ['Tablet', 'Injection'], priceNPR: '500mg vial: ~200-400', brandNames: ['Endoxan', 'Cycloxan'] },
    notes: ['**Cytotoxic Handling Required**. Maintain high fluid intake to prevent hemorrhagic cystitis. Monitor CBC.'],
    searchTags: ['Cancer', 'Chemo', 'Immunosuppressant']
  },
  {
    id: 'mal_002',
    genericName: 'Chlorambucil',
    therapeuticClass: 'Alkylating agent',
    categoryId: 'oncology',
    indications: ['Chronic lymphocytic leukemia (CLL)', 'Hodgkin lymphoma', 'Non-Hodgkin lymphoma'],
    dosing: { adult: 'PO: 0.1-0.2 mg/kg/day for 3-6 weeks as per protocol.', pediatric: 'Specific protocols only.' },
    safety: { adr: ['**Bone marrow suppression**', 'Hepatotoxicity', 'Seizures (high doses)'], contraindications: ['Pregnancy'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['2mg tab', '5mg tab'], dosageForms: ['Tablet'], priceNPR: '2mg tab: ~15-20', brandNames: ['Leukeran'] },
    notes: ['**Cytotoxic Handling Required**. Monitor CBC closely.'],
    searchTags: ['Cancer', 'Chemo', 'Leukemia']
  },
  {
    id: 'mal_003',
    genericName: 'Ifosfamide',
    therapeuticClass: 'Alkylating agent',
    categoryId: 'oncology',
    indications: ['Testicular cancer', 'Cervical cancer', 'Sarcomas'],
    dosing: { adult: 'IV: 1.2 g/m2/day for 5 consecutive days (with Mesna).', pediatric: 'Per pediatric oncology protocols.' },
    safety: { adr: ['**Hemorrhagic cystitis** (Mesna is mandatory)', '**Myelosuppression**', 'Neurotoxicity'], contraindications: ['Severe bone marrow depression'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['1g vial'], dosageForms: ['Injection'], priceNPR: '1g vial: ~1500', brandNames: ['Holoxan', 'Ifoxan'] },
    notes: ['**Cytotoxic Handling Required**. Must be given with Mesna and adequate hydration.'],
    searchTags: ['Cancer', 'Chemo']
  },
  {
    id: 'mal_004',
    genericName: 'Melphalan',
    therapeuticClass: 'Alkylating agent',
    categoryId: 'oncology',
    indications: ['Multiple myeloma', 'Ovarian carcinoma'],
    dosing: { adult: 'PO/IV: Dosing strictly per protocol (e.g. 0.15 mg/kg/day PO for 7 days).', pediatric: 'Avoid unless in specific protocols.' },
    safety: { adr: ['**Bone marrow suppression**', 'Nausea/vomiting', 'Hypersensitivity'], contraindications: ['Severe bone marrow depression', 'Pregnancy'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['2mg tab', '5mg tab', '50mg vial'], dosageForms: ['Tablet', 'Injection'], priceNPR: '2mg tab: ~30', brandNames: ['Alkeran'] },
    notes: ['**Cytotoxic Handling Required**.'],
    searchTags: ['Cancer', 'Chemo', 'Myeloma']
  },

  // ANTIMETABOLITES
  {
    id: 'mal_005',
    genericName: 'Methotrexate (Oncology)',
    therapeuticClass: 'Antimetabolite',
    categoryId: 'oncology',
    indications: ['ALL', 'Choriocarcinoma', 'Breast cancer', 'Osteosarcoma'],
    dosing: { adult: 'IV/IM/PO: Highly variable. High continuous dosing requires Calcium Leucovorin rescue.', pediatric: 'Body surface area based protocols.' },
    safety: { adr: ['**Severe Myelosuppression**', '**Hepatotoxicity**', 'Mucositis'], contraindications: ['Pregnancy'], pregnancyLactation: 'Category X.' },
    pharmacy: { strengths: ['2.5mg tab', '50mg vial', '500mg vial'], dosageForms: ['Tablet', 'Injection'], priceNPR: '50mg vial: ~150', brandNames: ['Folitrax', 'Trex'], handlingNote: 'Cytotoxic Handling Required' },
    notes: ['**Cytotoxic Handling Required**. Look for Methotrexate (Low-Dose) entry for rheumatology guidelines.'],
    searchTags: ['Cancer', 'Chemo']
  },
  {
    id: 'mal_006',
    genericName: 'Fluorouracil (5-FU)',
    therapeuticClass: 'Antimetabolite',
    categoryId: 'oncology',
    indications: ['Colorectal cancer', 'Breast cancer', 'Gastric cancer', 'Pancreatic cancer'],
    dosing: { adult: 'IV: 400-600 mg/m2 depending on the regimen (e.g. FOLFOX/FOLFIRI).', pediatric: 'Rarely used.' },
    safety: { adr: ['**Myelosuppression**', 'Severe diarrhea', 'Hand-foot syndrome', 'Cardiotoxicity'], contraindications: ['Poor nutritional state', 'Depressed bone marrow'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['250mg vial', '500mg vial'], dosageForms: ['Injection'], priceNPR: '500mg vial: ~100-200', brandNames: ['Fluracil', 'Five Fluro'] },
    notes: ['**Cytotoxic Handling Required**.'],
    searchTags: ['Cancer', 'Chemo', 'GI Cancer']
  },
  {
    id: 'mal_007',
    genericName: 'Cytarabine (Ara-C)',
    therapeuticClass: 'Antimetabolite',
    categoryId: 'oncology',
    indications: ['Acute myeloid leukemia (AML)', 'ALL', 'CML'],
    dosing: { adult: 'IV/SC: Standard dose 100-200 mg/m2/day. High dose: up to 3 g/m2.', pediatric: 'Per pediatric leukemia protocols.' },
    safety: { adr: ['**Profound Myelosuppression**', 'Cerebellar toxicity (high dose)', 'Chemical conjunctivitis'], contraindications: ['Pregnancy'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['100mg vial', '500mg vial', '1000mg vial'], dosageForms: ['Injection'], priceNPR: '1g vial: ~1000-1500', brandNames: ['Cytosar'] },
    notes: ['**Cytotoxic Handling Required**. Corticosteroid eye drops required during high-dose therapy to prevent conjunctivitis.'],
    searchTags: ['Cancer', 'Chemo', 'Leukemia']
  },
  {
    id: 'mal_008',
    genericName: 'Capecitabine',
    therapeuticClass: 'Antimetabolite',
    categoryId: 'oncology',
    indications: ['Colorectal cancer', 'Breast cancer', 'Gastric cancer'],
    dosing: { adult: 'PO: 1250 mg/m2 BID for 14 days followed by 7 days rest.', pediatric: 'Not recommended.' },
    safety: { adr: ['**Hand-foot syndrome**', 'Diarrhea', 'Myelosuppression'], contraindications: ['Severe renal impairment', 'DPD deficiency'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['500mg tab'], dosageForms: ['Tablet'], priceNPR: '500mg tab: ~70-100', brandNames: ['Xeloda', 'Capegard'] },
    notes: ['**Cytotoxic Handling Required**. Take within 30 minutes after a meal. Oral prodrug of 5-FU.'],
    searchTags: ['Cancer', 'Chemo']
  },

  // CYTOTOXIC ANTIBIOTICS
  {
    id: 'mal_009',
    genericName: 'Doxorubicin',
    therapeuticClass: 'Cytotoxic antibiotic (Anthracycline)',
    categoryId: 'oncology',
    indications: ['Breast cancer', 'Lymphomas', 'Sarcomas', 'Leukemias'],
    dosing: { adult: 'IV: 60-75 mg/m2 every 21 days. Lifetime max dose 450-550 mg/m2.', pediatric: 'Body surface area protocols.' },
    safety: { adr: ['**Irreversible Cardiotoxicity**', 'Severe vesicant (tissue necrosis on extravasation)', 'Bone marrow suppression', 'Red urine'], contraindications: ['Pre-existing heart disease', 'Pregnancy'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['10mg vial', '50mg vial'], dosageForms: ['Injection'], priceNPR: '50mg vial: ~800-1200', brandNames: ['Adriamycin', 'Doxoruba'] },
    notes: ['**Cytotoxic Handling Required**. Will turn urine red. Base baseline ECHO required.'],
    searchTags: ['Cancer', 'Chemo', 'Red devil']
  },
  {
    id: 'mal_010',
    genericName: 'Bleomycin',
    therapeuticClass: 'Cytotoxic antibiotic',
    categoryId: 'oncology',
    indications: ['Testicular cancer', 'Hodgkin lymphoma', 'Squamous cell carcinomas'],
    dosing: { adult: 'IM/IV/SC: 10-20 units/m2 weekly or twice weekly.', pediatric: 'Per protocol.' },
    safety: { adr: ['**Pulmonary Fibrosis**', 'Hypersensitivity/Anaphylaxis', 'Skin site reactions'], contraindications: ['Severe pulmonary disease'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['15 unit vial'], dosageForms: ['Injection'], priceNPR: '15 unit vial: ~1500-2000', brandNames: ['Bleocin'] },
    notes: ['**Cytotoxic Handling Required**. Minimal myelosuppression. Maximum lifetime dose ~400 units due to pulmonary toxicity.'],
    searchTags: ['Cancer', 'Chemo']
  },
  {
    id: 'mal_011',
    genericName: 'Mitomycin',
    therapeuticClass: 'Cytotoxic antibiotic',
    categoryId: 'oncology',
    indications: ['Gastric cancer', 'Pancreatic cancer', 'Breast cancer', 'Bladder cancer (intravesical)'],
    dosing: { adult: 'IV: 10-20 mg/m2 every 6-8 weeks.', pediatric: 'Not routinely used.' },
    safety: { adr: ['**Delayed/Cumulative Myelosuppression** (can occur weeks after dose)', 'Hemolytic uremic syndrome'], contraindications: ['Thrombocytopenia', 'Coagulation disorders'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['2mg vial', '10mg vial'], dosageForms: ['Injection'], priceNPR: '10mg vial: ~1000-1500', brandNames: ['Mutamycin'] },
    notes: ['**Cytotoxic Handling Required**. Severe vesicant.'],
    searchTags: ['Cancer', 'Chemo']
  }
];
