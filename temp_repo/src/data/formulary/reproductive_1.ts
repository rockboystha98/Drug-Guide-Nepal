import { DrugEntry } from '../../types/formulary';

export const reproductive1Drugs: DrugEntry[] = [
  // 12.1 Androgens
  {
    id: 'rep_001',
    genericName: 'Testosterone',
    therapeuticClass: 'Androgen',
    categoryId: 'reproductive',
    indications: ['Male hypogonadism', 'Delayed puberty in males', 'Breast cancer (palliative in females)'],
    dosing: {
      adult: 'IM (Enanthate/Cypionate): 50-400 mg every 2-4 weeks. Transdermal/Gel varies.',
      pediatric: 'Delayed puberty: 50-200 mg IM every 2-4 weeks for a limited duration.'
    },
    safety: {
      adr: ['Acne', 'Gynecomastia', 'Edema', 'Virilization in women', 'Prostatic hypertrophy/cancer acceleration'],
      contraindications: ['Prostate cancer', 'Male breast cancer', 'Pregnancy'],
      pregnancyLactation: 'Category X. Highly teratogenic (virilization of female fetus).'
    },
    pharmacy: {
      strengths: ['100mg/ml, 250mg/ml ampoule'],
      dosageForms: ['Injection', 'Gel', 'Capsule (Undecanoate)'],
      priceNPR: '250mg Ampoule: 250-400',
      brandNames: ['Sustanon', 'Testoviron', 'Aquaviron']
    },
    searchTags: ['Hormone', 'Hypogonadism'],
    notes: ['Monitor hematocrit, lipid profile, and PSA. High potential for misuse.']
  },
  {
    id: 'rep_002',
    genericName: 'Mesterolone',
    therapeuticClass: 'Androgen',
    categoryId: 'reproductive',
    indications: ['Androgen deficiency', 'Male infertility (oligospermia)'],
    dosing: {
      adult: 'PO: 25-50 mg 1-3 times daily.',
      pediatric: 'Not indicated in prepubertal patients.'
    },
    safety: {
      adr: ['Frequent/persistent erections', 'Edema', 'Acne'],
      contraindications: ['Prostate cancer', 'Liver tumors'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['25mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '25mg tab: 20-30',
      brandNames: ['Proviron']
    },
    searchTags: ['Infertility', 'Hormone'],
    notes: ['Does not suppress physiological testosterone production at normal doses.']
  },
  {
    id: 'rep_003',
    genericName: 'Methyltestosterone',
    therapeuticClass: 'Androgen',
    categoryId: 'reproductive',
    indications: ['Male hypogonadism', 'Breast cancer (palliation)'],
    dosing: {
      adult: 'PO: 10-50 mg/day (hypogonadism) or 50-200 mg/day (breast cancer).',
      pediatric: 'Not generally recommended due to premature epiphyseal closure.'
    },
    safety: {
      adr: ['Hepatotoxicity (cholestatic jaundice, peliosis hepatis)', 'Edema', 'Virilization'],
      contraindications: ['Prostate cancer', 'Pregnancy', 'Severe hepatic/renal disease'],
      pregnancyLactation: 'Category X.',
      hepaticAdjustment: 'Contraindicated in severe hepatic impairment.'
    },
    pharmacy: {
      strengths: ['10mg, 25mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: 'Varies',
      brandNames: ['Nu-Man']
    },
    searchTags: ['Hormone'],
    notes: ['High risk of hepatotoxicity compared to other androgens. Use is declining.']
  },
  // 12.2 Anabolic Steroids
  {
    id: 'rep_004',
    genericName: 'Nandrolone',
    therapeuticClass: 'Anabolic Steroid',
    categoryId: 'reproductive',
    indications: ['Osteoporosis (postmenopausal)', 'Anemia of renal failure (historical use)', 'Catabolic states'],
    dosing: {
      adult: 'IM (Decanoate): 25-50 mg every 3-4 weeks (women); 50-100 mg every 3-4 weeks (men).',
      pediatric: 'Not recommended.'
    },
    safety: {
      adr: ['Virilization', 'Edema', 'Dyslipidemia', 'Liver dysfunction'],
      contraindications: ['Prostate/Breast cancer in males', 'Pregnancy', 'Nephrosis'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['25mg/ml, 50mg/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: '50mg Ampoule: 150-250',
      brandNames: ['Deca-Durabolin']
    },
    searchTags: ['Bone', 'Muscle wasting'],
    notes: ['Higher anabolic-to-androgenic ratio than testosterone, but virilization still occurs.']
  },
  {
    id: 'rep_005',
    genericName: 'Oxymetholone',
    therapeuticClass: 'Anabolic Steroid',
    categoryId: 'reproductive',
    indications: ['Anemias caused by deficient red cell production'],
    dosing: {
      adult: 'PO: 1-5 mg/kg/day.',
      pediatric: 'PO: 1-5 mg/kg/day.'
    },
    safety: {
      adr: ['Hepatotoxicity (peliosis hepatis, liver cell tumors)', 'Virilization', 'Edema'],
      contraindications: ['Severe hepatic dysfunction', 'Pregnancy', 'Prostate cancer'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['50mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: 'Varies',
      brandNames: ['Adroyd', 'Anadrol']
    },
    searchTags: ['Anemia'],
    notes: ['Monitor liver function strictly. Rarely used now due to rHuEPO availability.']
  },
  {
    id: 'rep_006',
    genericName: 'Stanozolol',
    therapeuticClass: 'Anabolic Steroid',
    categoryId: 'reproductive',
    indications: ['Hereditary Angioedema'],
    dosing: {
      adult: 'PO: 2 mg 3 times daily initially.',
      pediatric: 'Only under specialist guidance.'
    },
    safety: {
      adr: ['Hepatotoxicity', 'Virilization', 'Changes in lipid profile'],
      contraindications: ['Pregnancy', 'Breast/Prostate cancer in men'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['2mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: 'Varies',
      brandNames: ['Menabol']
    },
    searchTags: ['Angioedema'],
    notes: ['Not routinely available; specialized use.']
  },
  // 12.3 Antiandrogens / 12.4
  {
    id: 'rep_007',
    genericName: 'Bicalutamide',
    therapeuticClass: 'Antiandrogen (Non-steroidal)',
    categoryId: 'reproductive',
    indications: ['Advanced Prostate Cancer (with LHRH analog)', 'Transgender hormone therapy (off-label)'],
    dosing: {
      adult: 'PO: 50 mg once daily.',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Gynecomastia', 'Breast pain', 'Hot flashes', 'Hepatotoxicity'],
      contraindications: ['Females', 'Children', 'Hypersensitivity'],
      pregnancyLactation: 'Category X (Contraindicated in women).'
    },
    pharmacy: {
      strengths: ['50mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 50-80',
      brandNames: ['Calutide', 'Bicalut']
    },
    searchTags: ['Prostate cancer'],
    notes: ['Must monitor liver function tests (LFTs) regularly.']
  },
  {
    id: 'rep_008',
    genericName: 'Danazol',
    therapeuticClass: 'Anti-estrogenic Androgen',
    categoryId: 'reproductive',
    indications: ['Endometriosis', 'Fibrocystic breast disease', 'Hereditary angioedema'],
    dosing: {
      adult: 'PO: 200-800 mg/day in 2 divided doses for 3-6 months.',
      pediatric: 'Not recommended.'
    },
    safety: {
      adr: ['Weight gain', 'Acne', 'Hirsutism', 'Deepening of voice', 'Hepatotoxicity'],
      contraindications: ['Pregnancy', 'Severe hepatic/renal impairment', 'Undiagnosed genital bleeding'],
      pregnancyLactation: 'Category X (Highly teratogenic - causes virilization of female fetus).'
    },
    pharmacy: {
      strengths: ['100mg, 200mg capsule'],
      dosageForms: ['Capsule'],
      priceNPR: '200mg cap: 30-50',
      brandNames: ['Danogen', 'Ladogar']
    },
    searchTags: ['Endometriosis', 'Periods', 'Irregular cycles'],
    notes: ['Use reliable non-hormonal contraception during therapy.']
  }
];
