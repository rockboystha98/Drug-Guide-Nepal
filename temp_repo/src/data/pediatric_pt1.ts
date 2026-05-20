import { Infection } from './types';

export const pediatricBatch1: Infection[] = [
  // --- CARDIOVASCULAR ---
  {
    id: 'ped-rheumatic-fever',
    section: 'pediatric',
    categoryId: 'cardiovascular',
    name: 'Acute Rheumatic Fever',
    subType: 'Treatment of Group A Streptococcal Pharyngitis',
    organisms: ['Group A Streptococcus'],
    treatments: [
      { type: 'preferred', drug: 'Benzathine penicillin G', dose: '600,000 U (<27kg) or 1.2 MU (>27kg)', frequency: 'IM single dose', duration: 'stat', aware: 'Access' },
      { type: 'alternative', drug: 'Phenoxymethylpenicillin', dose: '250mg (<27kg) or 500mg (>27kg)', frequency: 'PO q12h', duration: '10 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Cephalexin', dose: '12.5-25 mg/kg', frequency: 'PO q12h', duration: '10 days', aware: 'Access' }
    ]
  },
  {
    id: 'tb-respiratory-pediatric',
    section: 'pediatric',
    categoryId: 'respiratory',
    name: 'Tuberculosis (Pediatric)',
    subType: 'National TB Program (NTP) Guidelines',
    organisms: ['Mycobacterium tuberculosis'],
    treatments: [
      { type: 'preferred', condition: 'DS-TB', drug: 'ACCESS NTP DASHBOARD', dose: 'Weight-Based Bands', frequency: 'Daily FDCs', duration: '6 Months (2HRZ(E)/4HR)', aware: 'Unknown' },
      { type: 'preferred', condition: 'TB Meningitis/Osteoarticular', drug: 'ACCESS NTP DASHBOARD', dose: 'Weight-Based Bands', frequency: 'Daily FDCs', duration: '12 Months (2HRZE/10HRE)', aware: 'Unknown' }
    ],
    comments: 'Please utilize the dedicated "National TB Program" portal tab in the navigation menu for complete diagnostic algorithms, pediatric fixed-dose combination calculators, TB Preventive Therapy (TPT) for contacts <5y and adolescent/pediatric MDR regimens.'
  },

  // --- CNS ---
  {
    id: 'ped-meningitis',
    section: 'pediatric',
    categoryId: 'cns',
    name: 'Bacterial Meningitis',
    subType: 'Children > 1 month to 5 years',
    organisms: ['Streptococcus pneumoniae', 'Neisseria meningitidis', 'Haemophilus influenzae type B'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '100 mg/kg', frequency: 'IV q24h', duration: '10-14 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Cefotaxime', dose: '50 mg/kg', frequency: 'IV q6h', duration: '10-14 days', aware: 'Watch' },
    ],
    comments: 'Consider adding Vancomycin 15 mg/kg IV q6h if highly penicillin-resistant S. pneumoniae is suspected locally. Steroids (Dexamethasone) should be given prior to or with the first dose of antibiotics.'
  },

  // --- ENT ---
  {
    id: 'ped-aom',
    section: 'pediatric',
    categoryId: 'ent',
    name: 'Acute Otitis Media (AOM)',
    subType: 'Uncomplicated',
    organisms: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Moraxella catarrhalis'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin', dose: '40-45 mg/kg', frequency: 'PO divided q12h', duration: '5 days', aware: 'Access' },
      { type: 'alternative', condition: 'Severe or unresponsive after 48-72h', drug: 'Amoxicillin-clavulanate', dose: '45 mg/kg of Amox component', frequency: 'PO divided q12h', duration: '5-7 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Cefuroxime axetil', dose: '15 mg/kg', frequency: 'PO q12h', duration: '5 days', aware: 'Watch' }
    ],
    comments: 'AOM often resolves spontaneously. Consider watchful waiting for 48-72 hours in older children with mild symptoms. High risk children (<2 yr, bilateral, severe) should be treated empirically.'
  },

  // --- OCULAR ---
  {
    id: 'ped-ophthalmia',
    section: 'neonatal',
    categoryId: 'ocular',
    name: 'Ophthalmia Neonatorum',
    subType: 'Gonococcal',
    organisms: ['Neisseria gonorrhoeae'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '50 mg/kg (max 125mg)', frequency: 'IM or IV single dose', duration: 'stat', aware: 'Watch' }
    ],
    comments: 'Must also cover for Chlamydia if mother was not tested. Evaluate for disseminated systemic infection.'
  },
  {
    id: 'ped-ophthalmia-chlamydia',
    section: 'neonatal',
    categoryId: 'ocular',
    name: 'Ophthalmia Neonatorum',
    subType: 'Chlamydial',
    organisms: ['Chlamydia trachomatis'],
    treatments: [
      { type: 'preferred', drug: 'Erythromycin', dose: '12.5 mg/kg', frequency: 'PO q6h', duration: '14 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Azithromycin', dose: '20 mg/kg', frequency: 'PO q24h', duration: '3 days', aware: 'Watch' }
    ],
    comments: 'Topical therapy is inadequate for Chlamydia as it may cause concurrent nasopharyngeal infection or pneumonia.'
  }
];
