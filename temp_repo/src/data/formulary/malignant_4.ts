import { DrugEntry } from '../../types/formulary';

export const malignant4Drugs: DrugEntry[] = [
  // ADDITIONAL CYTOTOXICS
  {
    id: 'mal_028',
    genericName: 'Actinomycin D (Dactinomycin)',
    therapeuticClass: 'Cytotoxic Antibiotic',
    categoryId: 'oncology',
    indications: ['Wilms tumor', 'Ewing sarcoma', 'Choriocarcinoma'],
    dosing: { adult: 'IV: Dosage based on BSA or body weight per strict protocol.', pediatric: 'IV: Based on BSA. Extreme caution required.' },
    safety: { adr: ['**Extravasation necrosis**', '**Myelosuppression**', 'Nausea/Vomiting'], contraindications: ['Concurrent chickenpox or herpes zoster infection'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required. Use PPE and biological safety cabinet.',
    pharmacy: { strengths: ['0.5mg vial'], dosageForms: ['Injection'], priceNPR: 'Varies', brandNames: ['Cosmegen'] },
    notes: ['Highly vesicant. Monitor CBC closely.'],
    searchTags: ['Cancer', 'Chemo']
  },
  {
    id: 'mal_029',
    genericName: 'Arsenic trioxide',
    therapeuticClass: 'Antineoplastic Agent',
    categoryId: 'oncology',
    indications: ['Acute Promyelocytic Leukemia (APL)'],
    dosing: { adult: 'IV: 0.15 mg/kg/day until bone marrow remission.', pediatric: 'IV: 0.15 mg/kg/day.' },
    safety: { adr: ['QT prolongation', 'APL differentiation syndrome', 'Liver function abnormalities'], contraindications: ['Hypersensitivity to arsenic'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required.',
    pharmacy: { strengths: ['10mg/10ml ampoule'], dosageForms: ['Injection'], priceNPR: 'Varies', brandNames: ['Arsenox'] },
    notes: ['Monitor ECG for QT prolongation. Close monitoring of electrolytes (K+, Mg++) required.'],
    searchTags: ['Leukemia', 'Chemo']
  },
  {
    id: 'mal_030',
    genericName: 'Calcium folinate (Calcium Leucovorin)',
    therapeuticClass: 'Chemo-protectant / Folate Analog',
    categoryId: 'oncology',
    indications: ['Methotrexate rescue therapy', 'Enhanced effect of 5-Fluorouracil'],
    dosing: { adult: 'PO/IV/IM: Dose depends on methotrexate levels and strict protocols.', pediatric: 'PO/IV/IM: Per protocol.' },
    safety: { adr: ['Allergic reactions', 'Thrombocytosis'], contraindications: ['Pernicious anemia and other megaloblastic anemias secondary to vitamin B12 deficiency'], pregnancyLactation: 'Category C.' },
    handlingNote: 'Standard handling (Not inherently cytotoxic, but used with cytotoxics).',
    pharmacy: { strengths: ['15mg tab', '50mg vial'], dosageForms: ['Tablet', 'Injection'], priceNPR: 'Varies', brandNames: ['Leucovorin', 'Recovorin'] },
    notes: ['Must perfectly time administration in MTX rescue protocols.'],
    searchTags: ['Chemo', 'Rescue', 'Antidote']
  },
  {
    id: 'mal_031',
    genericName: 'Daunorubicin',
    therapeuticClass: 'Anthracycline Cytotoxic Antibiotic',
    categoryId: 'oncology',
    indications: ['Acute myeloid leukemia (AML)', 'Acute lymphoblastic leukemia (ALL)'],
    dosing: { adult: 'IV: 45-60 mg/m² daily for 3 days per protocol.', pediatric: 'IV: 25 mg/m² once weekly.' },
    safety: { adr: ['**Cardiotoxicity / Heart failure**', '**Myelosuppression**', 'Red urine'], contraindications: ['Severe heart disease', 'Prior cumulative dose maximum met'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required. Highly vesicant.',
    pharmacy: { strengths: ['20mg vial'], dosageForms: ['Injection'], priceNPR: 'Varies', brandNames: ['Daunotec'] },
    notes: ['Lifetime cumulative dose must be strictly tracked to prevent irreversible heart failure.'],
    searchTags: ['Cancer', 'Chemo', 'Leukemia']
  },
  {
    id: 'mal_032',
    genericName: 'Docetaxel',
    therapeuticClass: 'Taxane / Antimitotic Agent',
    categoryId: 'oncology',
    indications: ['Breast cancer', 'Non-small cell lung cancer', 'Prostate cancer'],
    dosing: { adult: 'IV: 60-100 mg/m² every 3 weeks.', pediatric: 'Not routinely used.' },
    safety: { adr: ['**Myelosuppression**', 'Fluid retention', 'Hypersensitivity reactions', 'Peripheral neuropathy'], contraindications: ['Baseline neutrophil count < 1500/mm³', 'Severe hepatic impairment'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required.',
    pharmacy: { strengths: ['20mg, 80mg, 120mg vials'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Taxotere', 'Docetere'] },
    notes: ['Premedicate with oral corticosteroids (e.g., dexamethasone) to reduce fluid retention and hypersensitivity.'],
    searchTags: ['Cancer', 'Chemo', 'Breast cancer']
  },
  {
    id: 'mal_033',
    genericName: 'Epirubicin',
    therapeuticClass: 'Anthracycline Cytotoxic Antibiotic',
    categoryId: 'oncology',
    indications: ['Breast cancer', 'Gastric cancer'],
    dosing: { adult: 'IV: 60-90 mg/m² every 3-4 weeks.', pediatric: 'Rarely used.' },
    safety: { adr: ['**Cardiotoxicity**', '**Myelosuppression**', 'Alopecia', 'Nausea/Vomiting'], contraindications: ['Severe heart failure', 'Recent MI', 'Maximum lifetime cumulative dose reached'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required. Vesicant.',
    pharmacy: { strengths: ['10mg, 50mg vials'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Farmorubicin', 'Epirub'] },
    notes: ['Lower cardiotoxicity risk compared to Doxorubicin, but cumulative lifetime dose must still be tracked.'],
    searchTags: ['Cancer', 'Chemo', 'Breast cancer']
  },
  {
    id: 'mal_034',
    genericName: 'Etoposide',
    therapeuticClass: 'Podophyllotoxin derivative',
    categoryId: 'oncology',
    indications: ['Testicular cancer', 'Small cell lung cancer'],
    dosing: { adult: 'IV: 50-100 mg/m²/day for 5 days. PO: Twice the IV dose.', pediatric: 'IV: per protocol.' },
    safety: { adr: ['**Myelosuppression**', 'Hypotension (if infused too rapidly)', 'Secondary leukemia'], contraindications: ['Severe hepatic impairment'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required.',
    pharmacy: { strengths: ['100mg vial', '50mg cap'], dosageForms: ['Injection', 'Capsule'], priceNPR: 'Varies', brandNames: ['Vepesid', 'Etopos'] },
    notes: ['Administer via slow IV infusion to prevent severe hypotension.'],
    searchTags: ['Cancer', 'Chemo']
  },
  {
    id: 'mal_035',
    genericName: 'Fludarabine',
    therapeuticClass: 'Antimetabolite',
    categoryId: 'oncology',
    indications: ['Chronic lymphocytic leukemia (CLL)'],
    dosing: { adult: 'IV: 25 mg/m² daily for 5 days every 28 days.', pediatric: 'Not established.' },
    safety: { adr: ['**Severe immunosuppression / Myelosuppression**', 'Autoimmune hemolytic anemia', 'Neurotoxicity'], contraindications: ['Severe renal impairment (CrCl <30)'], pregnancyLactation: 'Category D.' },
    handlingNote: 'Cytotoxic Handling Required.',
    pharmacy: { strengths: ['50mg vial', '10mg tab'], dosageForms: ['Injection', 'Tablet'], priceNPR: 'High cost', brandNames: ['Fludara', 'Fludabin'] },
    notes: ['Requires infection prophylaxis due to profound T-cell depletion.'],
    searchTags: ['Cancer', 'Chemo', 'Leukemia']
  }
];
