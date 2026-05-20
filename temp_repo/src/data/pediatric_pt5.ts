import { Infection } from './types';

export const pediatricBatch5: Infection[] = [
  // --- RESPIRATORY TRACT INFECTIONS (Pediatric Expansion) ---
  {
    id: 'ped-pharyngitis',
    section: 'pediatric',
    categoryId: 'respiratory',
    name: 'Pharyngitis / Tonsillitis',
    subType: 'Group A Streptococcus (GAS)',
    organisms: ['Streptococcus pyogenes (Group A)'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin', dose: '50 mg/kg', frequency: 'PO q24h or divided q12h', duration: '10 days', aware: 'Access' },
      { type: 'preferred', drug: 'Phenoxymethylpenicillin', dose: '125-250 mg', frequency: 'PO q12h', duration: '10 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Cephalexin', dose: '20 mg/kg', frequency: 'PO q12h', duration: '10 days', aware: 'Access' },
      { type: 'alternative', condition: 'Severe Penicillin allergy', drug: 'Azithromycin', dose: '12 mg/kg', frequency: 'PO q24h', duration: '5 days', aware: 'Watch' }
    ],
    comments: 'Most cases of pharyngitis are viral and do not require antibiotics. Test for GAS (culture or rapid antigen test) if available before prescribing.'
  },
  {
    id: 'ped-croup',
    section: 'pediatric',
    categoryId: 'respiratory',
    name: 'Croup (Laryngotracheobronchitis)',
    organisms: ['Parainfluenza virus', 'RSV', 'Rhinovirus'],
    treatments: [
      { type: 'preferred', drug: 'Dexamethasone', dose: '0.15 - 0.6 mg/kg', frequency: 'PO/IM/IV single dose', duration: 'stat', aware: 'Unknown' }
    ],
    comments: 'Antibiotics are NOT indicated. For severe respiratory distress, use nebulized epinephrine.'
  },
  {
    id: 'ped-pertussis',
    section: 'pediatric',
    categoryId: 'respiratory',
    name: 'Pertussis (Whooping Cough)',
    organisms: ['Bordetella pertussis'],
    treatments: [
      { type: 'preferred', drug: 'Azithromycin', dose: '10 mg/kg', frequency: 'PO q24h (day 1), then 5 mg/kg', duration: '5 days', aware: 'Watch' },
      { type: 'preferred', condition: '< 1 month old', drug: 'Azithromycin', dose: '10 mg/kg', frequency: 'PO q24h', duration: '5 days', aware: 'Watch' },
      { type: 'alternative', condition: '> 2 months old', drug: 'Cotrimoxazole', dose: '4 mg/kg (TMP component)', frequency: 'PO q12h', duration: '14 days', aware: 'Access' }
    ]
  },

  // --- CARDIOVASCULAR ---
  {
    id: 'ped-endocarditis-empiric',
    section: 'pediatric',
    categoryId: 'cardiovascular',
    name: 'Infective Endocarditis',
    subType: 'Empiric Therapy (Neonates & Children)',
    organisms: ['Staphylococcus aureus', 'Viridans group streptococci', 'Enterococcus spp.'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '100 mg/kg', frequency: 'IV q24h (in 1 or 2 doses)', duration: 'Await cultures', aware: 'Watch' },
      { type: 'preferred', drug: 'Cloxacillin (PLUS)', dose: '200 mg/kg', frequency: 'IV divided q6h', duration: 'Await cultures', aware: 'Access' },
      { type: 'alternative', condition: 'MRSA suspected / critically ill', drug: 'Vancomycin', dose: '40 mg/kg', frequency: 'IV divided q6h', duration: 'Await cultures', aware: 'Watch' },
      { type: 'alternative', condition: 'MRSA suspected / critically ill', drug: 'Gentamicin (PLUS)', dose: '7.5 mg/kg', frequency: 'IV q24h', duration: 'Await cultures', aware: 'Access' }
    ]
  },

  // --- CNS INFECTIONS ---
  {
    id: 'ped-brain-abscess',
    section: 'pediatric',
    categoryId: 'cns',
    name: 'Brain Abscess',
    organisms: ['Streptococcus spp.', 'Staphylococcus aureus', 'Anaerobes'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '100 mg/kg', frequency: 'IV q24h', duration: '4-6 weeks', aware: 'Watch' },
      { type: 'preferred', drug: 'Metronidazole (PLUS)', dose: '30 mg/kg', frequency: 'IV divided q8h', duration: '4-6 weeks', aware: 'Access' },
      { type: 'preferred', condition: 'S. aureus suspect', drug: 'Cloxacillin (PLUS)', dose: '100-200 mg/kg', frequency: 'IV divided q6h', duration: '4-6 weeks', aware: 'Access' }
    ],
    comments: 'Surgical aspiration or excision is usually necessary for identification of the organisms and resolution of the abscess.'
  },

  // --- OCULAR ---
  {
    id: 'ped-peri-orbital-cellulitis',
    section: 'pediatric',
    categoryId: 'ocular',
    name: 'Preseptal (Periorbital) Cellulitis',
    organisms: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Streptococcus pyogenes'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin-clavulanate', dose: '45 mg/kg (Amox component)', frequency: 'PO divided q12h', duration: '7-10 days', aware: 'Access' },
      { type: 'alternative', drug: 'Cephalexin', dose: '50 mg/kg', frequency: 'PO divided q6-8h', duration: '7-10 days', aware: 'Access' },
      { type: 'alternative', condition: 'MRSA Suspected', drug: 'Cotrimoxazole', dose: '4-6 mg/kg (TMP)', frequency: 'PO divided q12h', duration: '7-10 days', aware: 'Access' }
    ]
  },
  {
    id: 'ped-orbital-cellulitis',
    section: 'pediatric',
    categoryId: 'ocular',
    name: 'Orbital Cellulitis',
    organisms: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Streptococcus pyogenes', 'Haemophilus influenzae'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '50-100 mg/kg', frequency: 'IV q24h', duration: '10-14 days', aware: 'Watch' },
      { type: 'preferred', drug: 'Cloxacillin (PLUS)', dose: '150-200 mg/kg', frequency: 'IV divided q6h', duration: '10-14 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Vancomycin (PLUS Ceftriaxone)', dose: '40 mg/kg', frequency: 'IV divided q6h', duration: '10-14 days', aware: 'Watch' }
    ],
    comments: 'Surgical intervention may be necessary for subperiosteal or orbital abscess. Immediate admission and IV antibiotics required.'
  },

  // --- OTORHINOLARYNGOLOGICAL ---
  {
    id: 'ped-acute-sinusitis',
    section: 'pediatric',
    categoryId: 'ent',
    name: 'Acute Bacterial Rhinosinusitis',
    organisms: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Moraxella catarrhalis'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin-clavulanate', dose: '45 mg/kg/day', frequency: 'PO divided q12h', duration: '10-14 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Cefdinir', dose: '8 mg/kg/day', frequency: 'PO q24h or divided q12h', duration: '10-14 days', aware: 'Watch' }
    ],
    comments: 'Reserve antibiotics for severe onset, worsening course, or persistent symptoms (>10 days without improvement).'
  },

  // --- GASTROINTESTINAL ---
  {
    id: 'ped-cholera',
    section: 'pediatric',
    categoryId: 'gastrointestinal',
    name: 'Cholera',
    subType: 'Severe dehydration',
    organisms: ['Vibrio cholerae'],
    treatments: [
      { type: 'preferred', drug: 'Azithromycin', dose: '20 mg/kg', frequency: 'PO single dose', duration: '1 day', aware: 'Watch' },
      { type: 'alternative', drug: 'Ciprofloxacin', dose: '15 mg/kg', frequency: 'PO single dose', duration: '1 day', aware: 'Watch' }
    ],
    comments: 'Aggressive fluid replacement (Oral Rehydration Solution or IV Ringer\'s Lactate) is the primary treatment. Antibiotics reduce duration and volume of diarrhea.'
  },

  // --- SURGICAL INFECTIONS IN CHILDREN ---
  {
    id: 'ped-bite-wounds',
    section: 'pediatric',
    categoryId: 'surgical',
    name: 'Animal/Human Bite Wounds',
    organisms: ['Pasteurella multocida', 'Staphylococcus aureus', 'Eikenella spp.', 'Anaerobes'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin-clavulanate', dose: '45 mg/kg', frequency: 'PO divided q12h', duration: '5-7 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Cotrimoxazole (PLUS) Clindamycin', dose: 'Standard weight-based', frequency: 'PO', duration: '5-7 days', aware: 'Access' }
    ],
    comments: 'Ensure tetanus and rabies prophylaxis is up-to-date.'
  },

  // --- URINARY TRACT INFECTIONS ---
  {
    id: 'ped-uti-uncomplicated',
    section: 'pediatric',
    categoryId: 'urinary',
    name: 'Uncomplicated Cystitis',
    subType: 'Children > 2 months',
    organisms: ['Escherichia coli', 'Klebsiella spp.', 'Proteus mirabilis'],
    treatments: [
      { type: 'preferred', drug: 'Nitrofurantoin', dose: '5-7 mg/kg/day', frequency: 'PO divided q6h', duration: '3-5 days', aware: 'Access' },
      { type: 'preferred', drug: 'Cephalexin', dose: '50 mg/kg/day', frequency: 'PO divided q8h', duration: '3-5 days', aware: 'Access' },
      { type: 'alternative', drug: 'Cefixime', dose: '8 mg/kg/day', frequency: 'PO q24h', duration: '3-5 days', aware: 'Watch' }
    ],
    comments: 'Avoid Nitrofurantoin if pyelonephritis or renal clearance issues are suspected. Ensure adequate hydration.'
  },

  // --- NEONATAL EXTENSIONS ---
  {
    id: 'neo-congenital-syphilis',
    section: 'neonatal',
    categoryId: 'neonatal',
    name: 'Congenital Syphilis',
    subType: 'Confirmed or highly probable',
    organisms: ['Treponema pallidum'],
    treatments: [
      { type: 'preferred', drug: 'Aqueous crystalline penicillin G', dose: '150,000 units/kg/day', frequency: 'IV 50,000 U/kg/dose q12h (first 7 days), then q8h', duration: '10 days', aware: 'Access' },
      { type: 'alternative', drug: 'Procaine penicillin G', dose: '50,000 units/kg/day', frequency: 'IM once daily', duration: '10 days', aware: 'Access' }
    ]
  },

  // --- CHEMOPROPHYLAXIS: NON-SURGICAL ---
  {
    id: 'ped-rf-prophylaxis',
    section: 'pediatric',
    categoryId: 'prophylaxis',
    name: 'Secondary Prophylaxis for Rheumatic Fever',
    organisms: ['Group A Streptococcus'],
    treatments: [
      { type: 'preferred', drug: 'Benzathine penicillin G', dose: '600,000 U (<27kg) or 1.2 MU (>27kg)', frequency: 'IM every 3-4 weeks', duration: 'Long-term (years)', aware: 'Access' },
      { type: 'alternative', drug: 'Phenoxymethylpenicillin', dose: '250 mg', frequency: 'PO q12h', duration: 'Long-term (years)', aware: 'Access' }
    ],
    comments: 'Duration depends on presence of carditis and residual heart disease (range: 5 years to life).'
  },

  // --- SKIN AND SOFT TISSUE INFECTIONS ---
  {
    id: 'ped-cellulitis',
    section: 'pediatric',
    categoryId: 'skin',
    name: 'Cellulitis & Erysipelas',
    organisms: ['Streptococcus pyogenes', 'Staphylococcus aureus'],
    treatments: [
      { type: 'preferred', drug: 'Cephalexin', dose: '25-50 mg/kg', frequency: 'PO divided q6-8h', duration: '5-7 days', aware: 'Access' },
      { type: 'preferred', drug: 'Cloxacillin', dose: '50 mg/kg', frequency: 'PO/IV divided q6h', duration: '5-7 days', aware: 'Access' },
      { type: 'alternative', condition: 'MRSA suspected', drug: 'Cotrimoxazole', dose: '4-6 mg/kg (TMP)', frequency: 'PO divided q12h', duration: '5-7 days', aware: 'Access' }
    ]
  },

  // --- TROPICAL AND OTHER INFECTIONS ---
  {
    id: 'ped-malaria-uncomplicated',
    section: 'pediatric',
    categoryId: 'tropical',
    name: 'Malaria',
    subType: 'Uncomplicated Plasmodium falciparum / P. vivax',
    organisms: ['Plasmodium falciparum', 'Plasmodium vivax'],
    treatments: [
      { type: 'preferred', drug: 'Artemether-Lumefantrine (AL)', dose: 'Weight band based', frequency: 'PO twice daily', duration: '3 days', aware: 'Unknown' },
      { type: 'preferred', condition: 'Radical cure for P. vivax', drug: 'Primaquine', dose: '0.25-0.5 mg/kg', frequency: 'PO once daily', duration: '14 days', aware: 'Unknown' }
    ],
    comments: 'G6PD testing required before primaquine use if available. Adhere to national malaria treatment guidelines.'
  },

  // --- IMMUNOCOMPROMISED PATIENTS ---
  {
    id: 'ped-asplenia-prophylaxis',
    section: 'pediatric',
    categoryId: 'immunocompromised',
    name: 'Asplenia / Hyposplenism Prophylaxis',
    organisms: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Neisseria meningitidis'],
    treatments: [
      { type: 'preferred', condition: 'Children < 5 years', drug: 'Penicillin V', dose: '125 mg', frequency: 'PO q12h', duration: 'Daily until age 5', aware: 'Access' },
      { type: 'preferred', condition: 'Children > 5 years', drug: 'Penicillin V', dose: '250 mg', frequency: 'PO q12h', duration: 'At least 1 year post-splenectomy', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Erythromycin', dose: 'See weight charts', frequency: 'PO once daily', duration: 'Ongoing', aware: 'Watch' }
    ],
    comments: 'Vaccinations for encapsulated organisms are the primary preventative strategy. Prophylactic antibiotics are adjunctive.'
  }
];
