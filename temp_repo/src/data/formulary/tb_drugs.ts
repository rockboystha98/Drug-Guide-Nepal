import { DrugEntry } from '../../types/formulary';

export const tbDrugs: DrugEntry[] = [
  {
    id: 'isoniazid',
    genericName: 'Isoniazid (H)',
    therapeuticClass: 'Antimycobacterial',
    categoryId: 'infections',
    indications: ['Tuberculosis (DS-TB)', 'Tuberculosis Preventive Treatment (TPT)'],
    dosing: {
      adult: '5 mg/kg (4-6 mg/kg) daily, Max 300 mg',
      pediatric: '10 mg/kg (7-15 mg/kg) daily'
    },
    safety: {
      adr: ['Peripheral neuropathy (use Pyridoxine)', 'Hepatitis (monitor LFTs)'],
      contraindications: ['Severe liver disease', 'Previous severe hypersensitivity'],
      pregnancyLactation: 'Category C / Safe in lactation (monitor infant)'
    },
    pharmacy: {
      strengths: ['100 mg', '300 mg'],
      dosageForms: ['Tablet'],
      brandNames: []
    },
    awareCategory: 'Access'
  },
  {
    id: 'rifampicin',
    genericName: 'Rifampicin (R)',
    therapeuticClass: 'Antimycobacterial',
    categoryId: 'infections',
    indications: ['Tuberculosis (DS-TB)'],
    dosing: {
      adult: '10 mg/kg (8-12 mg/kg) daily, Max 600 mg',
      pediatric: '15 mg/kg (10-20 mg/kg) daily'
    },
    safety: {
      adr: ['Red/orange secretions', 'Hepatotoxicity', 'Drug interactions (CYP450 inducer)'],
      contraindications: ['Concomitant use of saquinavir/ritonavir', 'Hypersensitivity'],
      pregnancyLactation: 'Category C / Safe in lactation'
    },
    pharmacy: {
      strengths: ['150 mg', '300 mg'],
      dosageForms: ['Capsule'],
      brandNames: []
    },
    awareCategory: 'Access'
  },
  {
    id: 'pyrazinamide',
    genericName: 'Pyrazinamide (Z)',
    therapeuticClass: 'Antimycobacterial',
    categoryId: 'infections',
    indications: ['Tuberculosis (DS-TB)'],
    dosing: {
      adult: '25 mg/kg (20-30 mg/kg) daily',
      pediatric: '35 mg/kg (30-40 mg/kg) daily'
    },
    safety: {
      adr: ['Hepatotoxicity', 'Hyperuricemia (gout flare)', 'Arthralgia'],
      contraindications: ['Severe liver disease', 'Acute gout'],
      pregnancyLactation: 'Safety not fully established / Generally used in standard regimens'
    },
    pharmacy: {
      strengths: ['400 mg', '500 mg'],
      dosageForms: ['Tablet'],
      brandNames: []
    },
    awareCategory: 'Access'
  },
  {
    id: 'ethambutol',
    genericName: 'Ethambutol (E)',
    therapeuticClass: 'Antimycobacterial',
    categoryId: 'infections',
    indications: ['Tuberculosis (DS-TB)'],
    dosing: {
      adult: '15 mg/kg (15-20 mg/kg) daily',
      pediatric: '20 mg/kg (15-25 mg/kg) daily'
    },
    safety: {
      adr: ['Optic neuritis (Vision/Color changes)'],
      contraindications: ['Pre-existing optic neuritis', 'Unable to report visual symptoms'],
      pregnancyLactation: 'Category C / Safe in lactation'
    },
    pharmacy: {
      strengths: ['100 mg', '400 mg'],
      dosageForms: ['Tablet'],
      brandNames: []
    },
    awareCategory: 'Access'
  },
  {
    id: 'rifapentine',
    genericName: 'Rifapentine (P)',
    therapeuticClass: 'Antimycobacterial',
    categoryId: 'infections',
    indications: ['Tuberculosis Preventive Treatment (TPT)'],
    dosing: {
      adult: 'Used in 3HP (weekly). Dosage varies by weight.',
      pediatric: 'Used in 3HP (weekly). Dosage varies by weight/age brackets.'
    },
    safety: {
      adr: ['Flu-like syndrome', 'Hepatotoxicity', 'Hypersensitivity'],
      contraindications: ['Porphyria', 'Hypersensitivity to rifamycins'],
      pregnancyLactation: 'Not recommended'
    },
    pharmacy: {
      strengths: ['150 mg'],
      dosageForms: ['Tablet'],
      brandNames: []
    },
    awareCategory: 'Watch'
  },
  {
    id: 'bedaquiline',
    genericName: 'Bedaquiline (Bdq)',
    therapeuticClass: 'Antitubercular',
    categoryId: 'infections',
    indications: ['Multi-drug resistant tuberculosis (MDR-TB)', 'Tuberculosis DR-TB'],
    dosing: {
      adult: '400mg daily (2wks) then 200mg 3x/wk (or 100mg daily)',
      pediatric: '20 mg (pediatric)'
    },
    safety: {
      adr: ['QT prolongation (Requires regular ECG)', 'Hepatotoxicity'],
      contraindications: ['Severe hypersensitivity'],
      pregnancyLactation: 'Use only if benefit outweighs risk'
    },
    pharmacy: {
      strengths: ['20 mg', '100 mg'],
      dosageForms: ['Tablet'],
      brandNames: []
    },
    awareCategory: 'Reserve'
  },
  {
    id: 'linezolid-tb',
    genericName: 'Linezolid (Lzd)',
    therapeuticClass: 'Oxazolidinone Antibiotic',
    categoryId: 'infections',
    indications: ['Multi-drug resistant tuberculosis (MDR-TB)', 'Tuberculosis DR-TB'],
    dosing: {
      adult: '600 mg daily',
      pediatric: '10-15 mg/kg daily'
    },
    safety: {
      adr: ['Myelosuppression (weekly CBC/month)', 'Peripheral & Optic neuropathy'],
      contraindications: ['Uncontrolled hypertension', 'Concomitant SSRI/MAOI use'],
      pregnancyLactation: 'Category C'
    },
    pharmacy: {
      strengths: ['600 mg'],
      dosageForms: ['Tablet'],
      brandNames: []
    },
    awareCategory: 'Reserve'
  },
  {
    id: 'moxifloxacin-tb',
    genericName: 'Moxifloxacin (Mfx)',
    therapeuticClass: 'Fluoroquinolone Antibiotic',
    categoryId: 'infections',
    indications: ['Multi-drug resistant tuberculosis (MDR-TB)', 'Tuberculosis DR-TB'],
    dosing: {
      adult: '400 mg daily',
      pediatric: '10-15 mg/kg daily'
    },
    safety: {
      adr: ['QT prolongation', 'Tendonitis', 'CNS effects'],
      contraindications: ['Pre-existing QT prolongation'],
      pregnancyLactation: 'Avoid in pregnancy'
    },
    pharmacy: {
      strengths: ['400 mg'],
      dosageForms: ['Tablet'],
      brandNames: []
    },
    awareCategory: 'Watch'
  },
  {
    id: 'pretomanid',
    genericName: 'Pretomanid (Pa)',
    therapeuticClass: 'Antitubercular',
    categoryId: 'infections',
    indications: ['Multi-drug resistant tuberculosis (MDR-TB)', 'Tuberculosis DR-TB'],
    dosing: {
      adult: '200 mg daily',
      pediatric: 'Safety and efficacy not established'
    },
    safety: {
      adr: ['Hepatotoxicity', 'Peripheral neuropathy'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Use only if benefit outweighs risk'
    },
    pharmacy: {
      strengths: ['200 mg'],
      dosageForms: ['Tablet'],
      brandNames: []
    },
    awareCategory: 'Reserve'
  },
  {
    id: 'levofloxacin-tb',
    genericName: 'Levofloxacin (Lfx)',
    therapeuticClass: 'Fluoroquinolone Antibiotic',
    categoryId: 'infections',
    indications: ['Multi-drug resistant tuberculosis (MDR-TB)', 'Tuberculosis DR-TB'],
    dosing: {
      adult: '750-1000 mg daily',
      pediatric: '15-20 mg/kg daily'
    },
    safety: {
      adr: ['QT prolongation', 'Tendonitis', 'Peripheral Neuropathy'],
      contraindications: ['Hypersensitivity to fluoroquinolones'],
      pregnancyLactation: 'Avoid in pregnancy'
    },
    pharmacy: {
      strengths: ['250 mg', '500 mg'],
      dosageForms: ['Tablet'],
      brandNames: []
    },
    awareCategory: 'Watch'
  },
  {
    id: 'clofazimine',
    genericName: 'Clofazimine (Cfz)',
    therapeuticClass: 'Antimycobacterial',
    categoryId: 'infections',
    indications: ['Multi-drug resistant tuberculosis (MDR-TB)', 'Leprosy', 'Tuberculosis DR-TB'],
    dosing: {
      adult: '100 mg daily',
      pediatric: 'Varies by weight'
    },
    safety: {
      adr: ['Skin/body fluid discoloration', 'QT prolongation', 'GI distress'],
      contraindications: ['Severe hypersensitivity'],
      pregnancyLactation: 'Category C'
    },
    pharmacy: {
      strengths: ['50 mg', '100 mg'],
      dosageForms: ['Capsule'],
      brandNames: []
    },
    awareCategory: 'Watch'
  },
  {
    id: 'cycloserine',
    genericName: 'Cycloserine (Cs)',
    therapeuticClass: 'Antimycobacterial',
    categoryId: 'infections',
    indications: ['Multi-drug resistant tuberculosis (MDR-TB)', 'Tuberculosis DR-TB'],
    dosing: {
      adult: '500 - 750 mg daily',
      pediatric: '10-20 mg/kg daily'
    },
    safety: {
      adr: ['Psychiatric symptoms (depression, psychosis)', 'Seizures (use Pyridoxine prophylaxis)'],
      contraindications: ['Epilepsy', 'Depression/Psychosis', 'Severe renal impairment'],
      pregnancyLactation: 'Category C'
    },
    pharmacy: {
      strengths: ['250 mg'],
      dosageForms: ['Capsule'],
      brandNames: []
    },
    awareCategory: 'Watch'
  }
];
