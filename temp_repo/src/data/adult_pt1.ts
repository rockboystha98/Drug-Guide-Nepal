import { Infection } from './types';

export const adultRespCardioCns: Infection[] = [
  // --- RESPIRATORY ---
  {
    id: 'cap-low',
    section: 'adult',
    categoryId: 'respiratory',
    name: 'Community Acquired Pneumonia (CAP)',
    subType: 'Low severity (CURB-65 score 0-1)',
    organisms: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Mycoplasma pneumoniae'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin', dose: '500 mg', frequency: 'PO q8h', duration: '5-7 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy or atypical suspected', drug: 'Doxycycline', dose: '200mg day 1, then 100mg', frequency: 'PO q24h', duration: 'total 5 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Clarithromycin', dose: '500 mg', frequency: 'PO q12h', duration: '5 days', aware: 'Watch' },
      { type: 'alternative', condition: 'Pregnant', drug: 'Erythromycin', dose: '500 mg', frequency: 'PO q6h', duration: '5 days', aware: 'Watch' },
    ],
    comments: 'CURB-65 is a clinical prediction rule that has been validated for grading severity and predicting mortality in CAP. One point each for Confusion, BUN > 7 mmol/l, RR >= 30, BP <= 90/60, Age >= 65.'
  },
  {
    id: 'cap-mod',
    section: 'adult',
    categoryId: 'respiratory',
    name: 'Community Acquired Pneumonia (CAP)',
    subType: 'Moderate severity (CURB-65 score 2)',
    organisms: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Chlamydia pneumoniae'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin', dose: '500 mg', frequency: 'PO q8h', duration: '5-7 days', aware: 'Access' },
      { type: 'preferred', drug: 'Clarithromycin (PLUS)', dose: '500 mg', frequency: 'PO q12h', duration: '5 days', aware: 'Watch' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Doxycycline', dose: '200mg day 1, then 100mg', frequency: 'PO q24h', duration: 'total 5 days', aware: 'Access' },
    ],
  },
  {
    id: 'cap-high',
    section: 'adult',
    categoryId: 'respiratory',
    name: 'Community Acquired Pneumonia (CAP)',
    subType: 'High severity (CURB-65 score 3-5)',
    organisms: ['Streptococcus pneumoniae', 'Staphylococcus aureus', 'Legionella spp.'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin-clavulanate', dose: '1.2 gm', frequency: 'IV q8h', duration: '5-7 days', aware: 'Access' },
      { type: 'preferred', drug: 'Clarithromycin (PLUS)', dose: '500 mg', frequency: 'PO/IV q12h', duration: '5 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Levofloxacin', dose: '500-750 mg', frequency: 'PO/IV q24h', duration: '5 days', aware: 'Watch' },
    ],
  },
  {
    id: 'viral-covid-19',
    section: 'adult',
    categoryId: 'respiratory',
    name: 'Viral Pneumonia - COVID-19',
    organisms: ['SARS-CoV-2'],
    treatments: [
      { type: 'preferred', drug: 'Remdesivir', dose: '200mg IV once then 100mg IV', frequency: 'once a day', duration: '4-10 days', aware: 'Unknown' },
    ],
    comments: 'For symptomatic patients with hypoxemia in early viremic phase.'
  },
  {
    id: 'hap-vap-early',
    section: 'adult',
    categoryId: 'respiratory',
    name: 'Hospital Acquired Pneumonia (HAP/VAP)',
    subType: 'Early Onset AND No associated risk for MDR',
    organisms: [],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin-clavulanate', dose: '1.2 gm', frequency: 'IV q8h', duration: '5-7 days', aware: 'Access' },
      { type: 'alternative', drug: 'Ceftriaxone', dose: '2 gm', frequency: 'IV q24h', duration: '5-7 days', aware: 'Watch' },
    ],
    comments: 'Risk factors for MDR organisms: Prior IV antibiotic use within 90 days, > 5 days hospitalization in ICU, Previous colonization with MDR. If MRSA is common nosocomial pathogen (>10-20%), empirically cover for MRSA in VAP.'
  },
  {
    id: 'hap-vap-late',
    section: 'adult',
    categoryId: 'respiratory',
    name: 'Hospital Acquired Pneumonia (HAP/VAP)',
    subType: 'Late Onset (5 days or more of admission/intubation)',
    organisms: [],
    treatments: [
      { type: 'preferred', drug: 'Piperacillin-tazobactam', dose: '4.5 gm', frequency: 'IV q6-8h', duration: '7 days', aware: 'Watch' },
      { type: 'preferred', drug: 'Cefepime (OR)', dose: '2 gm', frequency: 'IV q8h', duration: '7 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Imipenem-cilastatin', dose: '500 mg', frequency: 'IV q6h', duration: '7 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Meropenem (OR)', dose: '1 gm', frequency: 'IV q8h', duration: '7 days', aware: 'Watch' },
    ],
  },
  {
    id: 'aspiration-pneumonia',
    section: 'adult',
    categoryId: 'respiratory',
    name: 'Aspiration Pneumonia',
    organisms: ['Streptococcus pneumoniae', 'Staphylococcus aureus', 'Haemophilus influenzae', 'Pseudomonas aeruginosa'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin-clavulanate', dose: '1.2 gm', frequency: 'IV q8h', duration: '7-10 days', aware: 'Access' },
      { type: 'alternative', drug: 'Ceftriaxone', dose: '2 gm', frequency: 'IV q24h', duration: '7-10 days', aware: 'Watch' },
      { type: 'alternative', condition: 'Poor dental hygiene', drug: 'Metronidazole (PLUS)', dose: '500 mg', frequency: 'IV q8h', duration: '7-10 days', aware: 'Access' },
    ],
    comments: 'Antibiotics are not indicated for chemical pneumonitis.'
  },
  {
    id: 'copd-outpatient',
    section: 'adult',
    categoryId: 'respiratory',
    name: 'Infective Exacerbation Of COPD',
    subType: 'Outpatient',
    organisms: ['Streptococcus pneumoniae'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin-clavulanate', dose: '625 mg', frequency: 'PO q8h', duration: '5-7 days', aware: 'Access' },
      { type: 'alternative', drug: 'Doxycycline', dose: '100 mg', frequency: 'PO q12h', duration: '5-7 days', aware: 'Access' },
      { type: 'alternative', drug: 'Cefuroxime', dose: '500 mg', frequency: 'PO q12h', duration: '5-7 days', aware: 'Watch' },
    ],
  },
  {
    id: 'copd-inpatient',
    section: 'adult',
    categoryId: 'respiratory',
    name: 'Infective Exacerbation Of COPD',
    subType: 'Inpatient (Suspect Pseudomonas if frequent/severe/mechanical ventilation)',
    organisms: ['Streptococcus pneumoniae', 'Pseudomonas aeruginosa'],
    treatments: [
      { type: 'preferred', drug: 'Piperacillin-tazobactam', dose: '4.5 gm', frequency: 'IV q6-8h', duration: '3-5 days', aware: 'Watch' },
      { type: 'preferred', drug: 'Azithromycin (PLUS)', dose: '500 mg', frequency: 'IV/PO', duration: '3-5 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Ceftazidime', dose: '2 gm', frequency: 'IV q8h', duration: '3-5 days', aware: 'Watch' },
    ],
  },
  {
    id: 'lung-abscess',
    section: 'adult',
    categoryId: 'respiratory',
    name: 'Lung Abscess And Empyema',
    organisms: ['Staphylococcus aureus', 'Streptococcus pneumoniae'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin-clavulanate', dose: '1.2 gm', frequency: 'IV q6-8h', duration: '2-4 weeks', aware: 'Access' },
      { type: 'alternative', drug: 'Ceftriaxone', dose: '2 gm', frequency: 'IV q24h', duration: '2-6 weeks', aware: 'Watch' },
      { type: 'alternative', drug: 'Metronidazole (PLUS)', dose: '500 mg', frequency: 'IV q8h', duration: '2-6 weeks', aware: 'Access' },
    ],
    comments: 'In empyema drain the collection wherever feasible. Duration of treatment: After drainage 2-4 weeks, Undrained 4-6 weeks. Cloxacillin 2gm IV for S. aureus.'
  },
  {
    id: 'tb-respiratory-adult',
    section: 'adult',
    categoryId: 'respiratory',
    name: 'Tuberculosis (Adult)',
    subType: 'National TB Program (NTP) Guidelines',
    organisms: ['Mycobacterium tuberculosis'],
    treatments: [
      { type: 'preferred', condition: 'DS-TB', drug: 'ACCESS NTP DASHBOARD', dose: 'Weight-Based', frequency: 'Daily FDCs', duration: '6 Months (2HRZE/4HR)', aware: 'Unknown' },
      { type: 'preferred', condition: 'MDR/RR-TB', drug: 'ACCESS NTP DASHBOARD', dose: 'Weight-Based', frequency: 'Daily (BPaLM)', duration: '6 Months', aware: 'Unknown' }
    ],
    comments: 'Please utilize the dedicated "National TB Program" portal tab in the navigation menu for complete diagnostic algorithms, fixed-dose combination calculators, DR-TB regimens, preventative therapy (TPT), and ADR management strategies strictly following 2024 NTP guidelines.'
  },

  // --- CARDIOVASCULAR ---
  {
    id: 'rheumatic-fever-primary',
    section: 'adult',
    categoryId: 'cardiovascular',
    name: 'Acute Rheumatic Fever',
    subType: 'Primary Prophylaxis (Group A Strep)',
    organisms: ['Group A Streptococcus'],
    treatments: [
      { type: 'preferred', drug: 'Benzathine penicillin G', dose: '1.2 MU', frequency: 'IM single dose', duration: 'stat', aware: 'Access' },
      { type: 'preferred', drug: 'Phenoxymethylpenicillin', dose: '500 mg', frequency: 'PO q12h', duration: '10 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin hypersensitivity', drug: 'Cephalexin', dose: '1 gm', frequency: 'PO q12h', duration: '10 days', aware: 'Access' },
    ],
    comments: 'All patients with ARF should receive antibiotic to treat precipitating Group A Streptococcus infection. Intramuscular penicillin is preferred due to better adherence.'
  },
  {
    id: 'infective-endocarditis-empiric',
    section: 'adult',
    categoryId: 'cardiovascular',
    name: 'Infective Endocarditis',
    subType: 'Empirical Treatment for native valve / late prosthetic valve (>1 year post surgery)',
    organisms: ['Streptococcus spp.', 'Staphylococcus aureus', 'Enterococcus spp.'],
    treatments: [
      { type: 'preferred', drug: 'Ampicillin', dose: '12 gm/day', frequency: 'IV in 4-6 doses', duration: 'Determine post-C&S', aware: 'Access' },
      { type: 'preferred', drug: 'Gentamicin (PLUS)', dose: '3 mg/kg', frequency: 'IV q24h', duration: 'Determine post-C&S', aware: 'Access' },
      { type: 'preferred', drug: '(Flu)Cloxacillin (PLUS)', dose: '12 gm/day', frequency: 'IV in 4-6 doses', duration: 'Determine post-C&S', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Vancomycin', dose: '30-60 mg/kg/day', frequency: 'IV in 2-3 doses', duration: 'Determine post-C&S', aware: 'Watch' },
    ],
    comments: 'Cloxacillin added for suspected S. aureus infection (e.g. IVDU, prosthesis). Duration and regimen decided after confirmation of organism.'
  },

  // --- CNS ---
  {
    id: 'meningitis-acute',
    section: 'adult',
    categoryId: 'cns',
    name: 'Meningitis (Acute)',
    subType: 'Empirical treatment',
    organisms: ['Streptococcus pneumoniae', 'Neisseria meningitidis', 'Haemophilus influenzae', 'Gram-negative rods'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '2 gm', frequency: 'IV q12h', duration: '10-14 days', aware: 'Watch' },
      { type: 'preferred', drug: 'Ampicillin (PLUS for Listeria)', dose: '2 gm', frequency: 'IV q4h', duration: '10-14 days', aware: 'Access' },
      { type: 'alternative', condition: 'Immunocompromised', drug: 'Meropenem', dose: '2 gm', frequency: 'IV q8h', duration: '10-14 days', aware: 'Watch' },
    ],
    comments: 'Dexamethasone 0.4mg/kg/dose 15 to 20 minutes before or at the same time as first dose of antibiotics. Consider empirical coverage with Ampicillin for Listeriosis in people >60 years of age, alcoholic, immunosuppressed, and pregnant.'
  },
  {
    id: 'tb-meningitis',
    section: 'adult',
    categoryId: 'cns',
    name: 'Meningitis (Chronic)',
    subType: 'Tuberculous meningitis',
    organisms: ['Mycobacterium tuberculosis'],
    treatments: [
      { type: 'preferred', drug: '2HRZE + (7-10)HRE', dose: 'DOTS Standard', frequency: 'Daily', duration: '12 months', aware: 'Unknown' },
    ],
    comments: 'Isoniazid(H), Rifampicin(R), Ethambutol(E), Pyrazinamide(Z). Add dexamethasone 0.3-0.4mg/kg/day for 2 weeks, then taper gradually and stop by 8 weeks.'
  },
  {
    id: 'viral-encephalitis',
    section: 'adult',
    categoryId: 'cns',
    name: 'Viral Encephalitis',
    organisms: ['Herpes simplex', 'Varicella zoster'],
    treatments: [
      { type: 'preferred', drug: 'Acyclovir', dose: '10 mg/kg', frequency: 'IV q8h', duration: '14-21 days', aware: 'Unknown' },
    ],
    comments: 'Dosing based on ideal body weight and not measured weight in obese.'
  }
];
