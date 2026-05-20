import { DrugEntry } from '../../types/formulary';

export const infections5Drugs: DrugEntry[] = [
  {
    id: 'tigecycline',
    genericName: 'Tigecycline',
    therapeuticClass: 'Glycylcycline (Tetracycline derivative)',
    categoryId: 'infections',
    indications: ['Complicated skin and skin structure infections', 'Complicated intra-abdominal infections', 'Community-acquired bacterial pneumonia'],
    dosing: {
      adult: 'Initial dose 100 mg IV, followed by 50 mg every 12 hours.',
      pediatric: 'Not recommended (<18 y/o) due to mortality risk. If no alternative (8-11 yrs): 1.2 mg/kg IV Q12H (Max 50mg); (12-17 yrs): 50 mg IV Q12H.'
    },
    safety: {
      adr: ['Nausea, vomiting, diarrhea', 'Pancreatitis', 'Tooth discoloration (under 8 years)'],
      contraindications: ['Known hypersensitivity'],
      pregnancyLactation: 'Category D / Fetal harm'
    },
    pharmacy: {
      strengths: ['50 mg'],
      dosageForms: ['Injection'],
      brandNames: ['Tygacil']
    },
    awareCategory: 'Reserve'
  },
  {
    id: 'colistimethate',
    genericName: 'Colistimethate Sodium (Colistin)',
    therapeuticClass: 'Polypeptide Antibiotic',
    categoryId: 'infections',
    indications: ['Severe Gram-negative infections (e.g., Pseudomonas aeruginosa)'],
    dosing: {
      adult: '2.5 to 5 mg/kg per day of colistin base in 2 to 4 divided doses.',
      pediatric: '2.5 to 5 mg/kg per day of colistin base in 2 to 4 divided doses.'
    },
    safety: {
      adr: ['Nephrotoxicity', 'Neurotoxicity (paresthesia, muscle weakness, apnea)'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C'
    },
    pharmacy: {
      strengths: ['150 mg colistin base'],
      dosageForms: ['Injection'],
      brandNames: ['Coly-Mycin M']
    },
    awareCategory: 'Reserve'
  },
  {
    id: 'meropenem',
    genericName: 'Meropenem',
    therapeuticClass: 'Carbapenem Antibiotic',
    categoryId: 'infections',
    indications: ['Severe pneumonia', 'Intra-abdominal infections', 'Meningitis', 'Febrile neutropenia', 'Skin structure infections'],
    dosing: {
      adult: '500 mg to 1 g IV every 8 hours. Meningitis: 2 g every 8 hours. Febrile neutropenia: 1 g every 8 hours.',
      pediatric: 'Children >3 months: 10-20 mg/kg IV every 8 hours. Meningitis: 40 mg/kg every 8 hours.'
    },
    safety: {
      adr: ['Diarrhea, rash, nausea', 'Seizures (rare)', 'Transaminase elevation'],
      contraindications: ['Hypersensitivity to carbapenems'],
      pregnancyLactation: 'Avoid unless benefit justifies the risk'
    },
    pharmacy: {
      strengths: ['500 mg', '1 g'],
      dosageForms: ['Injection'],
      brandNames: ['Meronem']
    },
    awareCategory: 'Watch'
  },
  {
    id: 'teicoplanin',
    genericName: 'Teicoplanin',
    therapeuticClass: 'Glycopeptide Antibiotic',
    categoryId: 'infections',
    indications: ['Serious Gram-positive infections (e.g., MRSA)', 'CAPD related peritonitis', 'Surgical prophylaxis'],
    dosing: {
      adult: 'Loading: 400 mg IV Q12H x 3 doses. Maintenance: 400 mg IV/IM once daily. (>85 kg or severe: 6 mg/kg).',
      pediatric: '>2 mo: Loading 10 mg/kg Q12H x 3 doses. Maintenance: 6-10 mg/kg once daily. <2 mo: Loading 16 mg/kg once, then 8 mg/kg daily.'
    },
    safety: {
      adr: ['Erythema, injection site pain', 'Red man syndrome (rarely)', 'Ototoxicity and nephrotoxicity'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Avoid unless benefit justifies possible risks'
    },
    pharmacy: {
      strengths: ['200 mg', '400 mg'],
      dosageForms: ['Injection'],
      brandNames: ['Targocid']
    },
    awareCategory: 'Reserve'
  }
];
