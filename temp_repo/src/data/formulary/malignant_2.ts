import { DrugEntry } from '../../types/formulary';

export const malignant2Drugs: DrugEntry[] = [
  // VINCA ALKALOIDS & OTHER PLANT DERIVATIVES
  {
    id: 'mal_012',
    genericName: 'Vincristine',
    therapeuticClass: 'Vinca Alkaloid',
    categoryId: 'oncology',
    indications: ['ALL', 'Hodgkin/Non-Hodgkin lymphoma', 'Neuroblastoma', 'Wilms tumor'],
    dosing: { adult: 'IV: 1.4 mg/m2 (Max cap: 2 mg) per week.', pediatric: 'IV: 1.5-2 mg/m2 (Max cap: 2 mg) per week.' },
    safety: { adr: ['**Peripheral Neuropathy**', 'Constipation / Paralytic ileus', 'Vesicant (extravasation)'], contraindications: ['Charcot-Marie-Tooth syndrome', '**INTRAMUSCULAR OR INTRATHECAL ADMINISTRATION IS FATAL**'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['1mg vial', '2mg vial'], dosageForms: ['Injection'], priceNPR: '1mg vial: ~300-500', brandNames: ['Oncovin', 'Cytocristin'] },
    notes: ['**Cytotoxic Handling Required**. FATAL IF GIVEN INTRATHECALLY. Strictly for IV use.'],
    searchTags: ['Cancer', 'Chemo', 'Leukemia']
  },
  {
    id: 'mal_013',
    genericName: 'Vinblastine',
    therapeuticClass: 'Vinca Alkaloid',
    categoryId: 'oncology',
    indications: ['Hodgkin lymphoma', 'Testicular cancer', 'Breast cancer'],
    dosing: { adult: 'IV: 6 mg/m2 weekly.', pediatric: 'IV: 6 mg/m2 weekly.' },
    safety: { adr: ['**Severe Bone Marrow Suppression**', 'Vesicant', 'Bronchospasm'], contraindications: ['Bacterial infection', '**INTRATHECAL USE IS FATAL**'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['10mg vial'], dosageForms: ['Injection'], priceNPR: '10mg vial: ~400-600', brandNames: ['Velban'] },
    notes: ['**Cytotoxic Handling Required**. Fatal if given intrathecally. More myelosuppressive than vincristine.'],
    searchTags: ['Cancer', 'Chemo']
  },
  {
    id: 'mal_014',
    genericName: 'Paclitaxel',
    therapeuticClass: 'Taxane',
    categoryId: 'oncology',
    indications: ['Ovarian cancer', 'Breast cancer', 'Lung cancer', 'Kaposi sarcoma'],
    dosing: { adult: 'IV: 175 mg/m2 over 3 hours every 3 weeks.', pediatric: 'Per protocol.' },
    safety: { adr: ['**Hypersensitivity reactions**', 'Peripheral neuropathy', '**Myelosuppression**', 'Alopecia'], contraindications: ['Baseline neutropenia (<1500)'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['30mg vial', '100mg vial', '260mg vial'], dosageForms: ['Injection'], priceNPR: '100mg vial: ~2000-4000', brandNames: ['Taxol', 'Intaxel'] },
    notes: ['**Cytotoxic Handling Required**. Premedication with corticosteroids, diphenhydramine, and H2 blockers required.'],
    searchTags: ['Cancer', 'Chemo']
  },

  // PLATINUM COMPOUNDS & OTHER EXAMPLES
  {
    id: 'mal_015',
    genericName: 'Cisplatin',
    therapeuticClass: 'Platinum-based Antineoplastic',
    categoryId: 'oncology',
    indications: ['Testicular cancer', 'Ovarian cancer', 'Bladder cancer', 'Head and neck cancers'],
    dosing: { adult: 'IV: 50-100 mg/m2 every 3-4 weeks.', pediatric: 'IV: Per protocol.' },
    safety: { adr: ['**Severe Nephrotoxicity**', '**Severe Nausea/Vomiting**', 'Ototoxicity', 'Neurotoxicity'], contraindications: ['Pre-existing renal impairment', 'Hearing impairment'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['10mg vial', '50mg vial'], dosageForms: ['Injection'], priceNPR: '50mg vial: ~500-1000', brandNames: ['Platinol', 'Cisplat'] },
    notes: ['**Cytotoxic Handling Required**. Requires aggressive pre- and post-hydration to protect kidneys.'],
    searchTags: ['Cancer', 'Chemo', 'Kidney toxicity']
  },
  {
    id: 'mal_016',
    genericName: 'Carboplatin',
    therapeuticClass: 'Platinum-based Antineoplastic',
    categoryId: 'oncology',
    indications: ['Ovarian cancer', 'Lung cancer'],
    dosing: { adult: 'IV: Dosed by the Calvert Formula (Target AUC).', pediatric: 'IV: Per protocol.' },
    safety: { adr: ['**Myelosuppression** (especially thrombocytopenia)', 'Nausea/Vomiting (less severe than cisplatin)'], contraindications: ['Severe bleeding', 'Severe myelosuppression'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['150mg vial', '450mg vial'], dosageForms: ['Injection'], priceNPR: '450mg vial: ~1500-2500', brandNames: ['Paraplatin', 'Carboplatin'] },
    notes: ['**Cytotoxic Handling Required**. Less nephrotoxic and emetogenic than cisplatin but more myelosuppressive.'],
    searchTags: ['Cancer', 'Chemo']
  },

  // TARGETED THERAPIES
  {
    id: 'mal_017',
    genericName: 'Imatinib',
    therapeuticClass: 'Tyrosine Kinase Inhibitor',
    categoryId: 'oncology',
    indications: ['CML (Philadelphia chromosome positive)', 'GIST (Gastrointestinal stromal tumors)'],
    dosing: { adult: 'PO: 400-800 mg daily.', pediatric: 'PO: 260-340 mg/m2/day.' },
    safety: { adr: ['**Fluid retention / Edema**', 'Hepatotoxicity', 'Myelosuppression', 'GI upset'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['100mg tab', '400mg tab'], dosageForms: ['Tablet'], priceNPR: '400mg tab: ~300-500', brandNames: ['Gleevec', 'Imatib'] },
    notes: ['Take with food and a large glass of water to minimize GI irritation.'],
    searchTags: ['Cancer', 'Targeted', 'Leukemia']
  },
  {
    id: 'mal_018',
    genericName: 'Rituximab',
    therapeuticClass: 'Monoclonal Antibody (Anti-CD20)',
    categoryId: 'oncology',
    indications: ['Non-Hodgkin Lymphoma', 'CLL', 'Rheumatoid Arthritis (refractory)'],
    dosing: { adult: 'IV: 375 mg/m2 weekly for 4-8 weeks.', pediatric: 'IV: Per protocol.' },
    safety: { adr: ['**Fatal Infusion Reactions**', 'Tumor lysis syndrome', 'Severe mucocutaneous reactions', 'Hepatitis B reactivation'], contraindications: ['Active severe infections'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['100mg/10ml vial', '500mg/50ml vial'], dosageForms: ['Injection'], priceNPR: '500mg vial: ~15000-25000+', brandNames: ['MabThera', 'Ristova'] },
    notes: ['Premedicate with paracetamol and antihistamine. Screen for Hep B before initiating.'],
    searchTags: ['Cancer', 'Targeted', 'Lymphoma', 'Autoimmune']
  },
  {
    id: 'mal_019',
    genericName: 'Trastuzumab',
    therapeuticClass: 'Monoclonal Antibody (Anti-HER2)',
    categoryId: 'oncology',
    indications: ['HER2-positive Breast Cancer', 'HER2-positive Gastric Cancer'],
    dosing: { adult: 'IV: Loading dose 4-8 mg/kg, then maintenance 2-6 mg/kg every 1-3 weeks.', pediatric: 'Not applicable.' },
    safety: { adr: ['**Cardiotoxicity** (decreased LVEF, heart failure)', 'Infusion reactions', 'Pulmonary toxicity'], contraindications: ['Existing severe heart failure (unless risk/benefit evaluated)'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['150mg vial', '440mg vial'], dosageForms: ['Injection'], priceNPR: '440mg vial: ~40000-60000+', brandNames: ['Herceptin', 'Biceltis'] },
    notes: ['Requires HER2 overexpression confirmation. Regular echocardiograms mandatory.'],
    searchTags: ['Cancer', 'Targeted', 'Breast cancer']
  }
];
