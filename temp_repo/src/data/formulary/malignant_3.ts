import { DrugEntry } from '../../types/formulary';

export const malignant3Drugs: DrugEntry[] = [
  // HORMONE ANTAGONISTS
  {
    id: 'mal_020',
    genericName: 'Tamoxifen',
    therapeuticClass: 'Selective Estrogen Receptor Modulator (SERM)',
    categoryId: 'oncology',
    indications: ['ER-positive Breast Cancer (treatment and prophylaxis)'],
    dosing: { adult: 'PO: 20 mg daily for 5-10 years.', pediatric: 'Not recommended.' },
    safety: { adr: ['Hot flashes', '**Endometrial cancer risk**', '**Thromboembolism (DVT/PE)**', 'Vaginal bleeding'], contraindications: ['History of DVT/PE', 'Pregnancy'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['10mg tab', '20mg tab'], dosageForms: ['Tablet'], priceNPR: '20mg tab: ~10-20', brandNames: ['Nolvadex', 'Tamoxen'] },
    notes: ['Agonist effect on endometrium; requires reporting of any abnormal vaginal bleeding.'],
    searchTags: ['Cancer', 'Hormonal', 'Breast cancer']
  },
  {
    id: 'mal_021',
    genericName: 'Letrozole',
    therapeuticClass: 'Aromatase Inhibitor',
    categoryId: 'oncology',
    indications: ['ER-positive Breast Cancer (postmenopausal)', 'Ovulation induction (off-label)'],
    dosing: { adult: 'PO: 2.5 mg daily.', pediatric: 'Not recommended.' },
    safety: { adr: ['Hot flashes', 'Bone/joint pain', '**Osteoporosis / Bone fractures**', 'Fatigue'], contraindications: ['Premenopausal status (unless combined with ovarian suppression)', 'Pregnancy'], pregnancyLactation: 'Category X.' },
    pharmacy: { strengths: ['2.5mg tab'], dosageForms: ['Tablet'], priceNPR: '2.5mg tab: ~30-50', brandNames: ['Femara', 'Letroz'] },
    notes: ['Decreases bone mineral density; consider concurrent calcium/vitamin D.'],
    searchTags: ['Cancer', 'Hormonal', 'Breast cancer', 'Fertility']
  },
  {
    id: 'mal_022',
    genericName: 'Anastrozole',
    therapeuticClass: 'Aromatase Inhibitor',
    categoryId: 'oncology',
    indications: ['ER-positive Breast Cancer (postmenopausal)'],
    dosing: { adult: 'PO: 1 mg daily.', pediatric: 'Not recommended.' },
    safety: { adr: ['Hot flashes', 'Arthralgia/myalgia', '**Decreased bone mineral density**'], contraindications: ['Premenopausal women', 'Pregnancy'], pregnancyLactation: 'Category X.' },
    pharmacy: { strengths: ['1mg tab'], dosageForms: ['Tablet'], priceNPR: '1mg tab: ~30-50', brandNames: ['Arimidex', 'Armotraz'] },
    notes: ['Assess baseline bone mineral density before starting.'],
    searchTags: ['Cancer', 'Hormonal', 'Breast cancer']
  },
  {
    id: 'mal_023',
    genericName: 'Flutamide',
    therapeuticClass: 'Antiandrogen',
    categoryId: 'oncology',
    indications: ['Prostate Cancer (metastatic)'],
    dosing: { adult: 'PO: 250 mg TID (often combined with LHRH agonist).', pediatric: 'Not recommended.' },
    safety: { adr: ['**Hepatotoxicity**', 'Gynecomastia', 'Hot flashes', 'Diarrhea'], contraindications: ['Severe hepatic impairment'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['250mg tab'], dosageForms: ['Tablet'], priceNPR: '250mg tab: ~50-80', brandNames: ['Flutide'] },
    notes: ['Monitor LFTs regularly. Can cause severe liver injury.'],
    searchTags: ['Cancer', 'Hormonal', 'Prostate cancer']
  },

  // IMMUNOSUPPRESSANTS
  {
    id: 'mal_024',
    genericName: 'Azathioprine',
    therapeuticClass: 'Immunosuppressant',
    categoryId: 'oncology',
    indications: ['Renal transplant rejection prophylaxis', 'Rheumatoid arthritis', 'SLE', 'IBD'],
    dosing: { adult: 'PO/IV: 1-3 mg/kg/day depending on indication.', pediatric: 'PO: 1-3 mg/kg/day.' },
    safety: { adr: ['**Bone marrow suppression**', 'Hepatotoxicity', 'Increased susceptibility to infection', 'Malignancy risk (lymphoma)'], contraindications: ['Pregnancy (relative)', 'Active infection'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['50mg tab'], dosageForms: ['Tablet'], priceNPR: '50mg tab: ~15-25', brandNames: ['Imuran', 'Azoran'] },
    notes: ['Must check TPMT levels if possible prior to initiating. Monitor CBC.'],
    searchTags: ['Transplant', 'Immunity', 'Autoimmune']
  },
  {
    id: 'mal_025',
    genericName: 'Cyclosporine',
    therapeuticClass: 'Calcineurin Inhibitor',
    categoryId: 'oncology',
    indications: ['Organ transplant rejection prophylaxis', 'Severe psoriasis', 'Nephrotic syndrome'],
    dosing: { adult: 'PO: 3-5 mg/kg/day divided BID (highly dependent on trough goals).', pediatric: 'PO: Often higher mg/kg requirement than adults.' },
    safety: { adr: ['**Nephrotoxicity**', 'Hypertension', 'Gingival hyperplasia', 'Hirsutism', 'Neurotoxicity'], contraindications: ['Abnormal renal function', 'Uncontrolled hypertension'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['25mg cap', '50mg cap', '100mg cap', 'Oral solution'], dosageForms: ['Capsule', 'Liquid'], priceNPR: '50mg cap: ~50-80', brandNames: ['Sandimmun Neoral', 'Imusporin'] },
    notes: ['Narrow therapeutic index; requires therapeutic drug monitoring (blood levels). Avoid grapefruit juice.'],
    searchTags: ['Transplant', 'Immunity', 'Kidney']
  },
  {
    id: 'mal_026',
    genericName: 'Mycophenolate Mofetil',
    therapeuticClass: 'Immunosuppressant',
    categoryId: 'oncology',
    indications: ['Organ transplant rejection prophylaxis', 'Lupus nephritis'],
    dosing: { adult: 'PO/IV: 1 g BID.', pediatric: 'PO: 600 mg/m2 BID.' },
    safety: { adr: ['**Severe Teratogenicity**', 'Diarrhea', 'Leukopenia', 'Infections'], contraindications: ['Pregnancy (highly teratogenic)'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['250mg cap', '500mg tab'], dosageForms: ['Capsule', 'Tablet'], priceNPR: '500mg tab: ~60-100', brandNames: ['CellCept', 'Mycept'] },
    notes: ['Strict contraception required. Do not open or crush capsules.'],
    searchTags: ['Transplant', 'Immunity', 'Lupus']
  },
  {
    id: 'mal_027',
    genericName: 'Methotrexate (Low-Dose / Autoimmune)',
    therapeuticClass: 'Immunosuppressant / DMARD',
    categoryId: 'oncology',
    indications: ['Rheumatoid Arthritis', 'Psoriasis', 'Crohn’s Disease'],
    dosing: { adult: 'PO/SC: **7.5 to 25 mg ONCE WEEKLY.**', pediatric: 'PO/SC: Juvenile Idiopathic Arthritis: 10-15 mg/m2 **ONCE WEEKLY**.' },
    safety: { adr: ['**FATAL MEDICATION ERROR RISK (Daily dosing is fatal)**', 'Hepatotoxicity', 'Myelosuppression', 'Pneumonitis'], contraindications: ['Pregnancy', 'Severe liver disease', 'Active infection'], pregnancyLactation: 'Category X.' },
    pharmacy: { strengths: ['2.5mg tab', '7.5mg tab', '10mg tab'], dosageForms: ['Tablet'], priceNPR: '7.5mg tab: ~10-15', brandNames: ['Folitrax', 'Mext'] },
    notes: ['**CRITICAL ALERT: DOSE IS STRICTLY ONCE A WEEK. DAILY DOSING IS FATAL.** Folic acid supplementation required on non-methotrexate days.'],
    searchTags: ['Joint pain', 'Psoriasis', 'Arthritis', 'Immunity']
  }
];
