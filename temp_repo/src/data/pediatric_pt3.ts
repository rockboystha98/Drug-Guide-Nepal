import { Infection } from './types';

export const pediatricBatch3: Infection[] = [
  // --- SKIN & SOFT TISSUE ---
  {
    id: 'ped-impetigo',
    section: 'pediatric',
    categoryId: 'skin',
    name: 'Impetigo',
    subType: 'Widespread or bullous',
    organisms: ['Staphylococcus aureus', 'Streptococcus pyogenes'],
    treatments: [
      { type: 'preferred', drug: 'Cephalexin', dose: '12.5-25 mg/kg', frequency: 'PO q12h', duration: '5 days', aware: 'Access' },
      { type: 'preferred', drug: 'Cloxacillin', dose: '12.5-25 mg/kg', frequency: 'PO q6h', duration: '5 days', aware: 'Access' },
      { type: 'alternative', condition: 'Topical limited lesions', drug: 'Mupirocin 2%', dose: 'Apply topically', frequency: 'q8h', duration: '5 days', aware: 'Unknown' }
    ]
  },

  // --- NEONATAL EXTENSIONS ---
  {
    id: 'neo-omphalitis',
    section: 'neonatal',
    categoryId: 'skin',
    name: 'Omphalitis',
    subType: 'Erythema extending to abdominal wall / systemic signs',
    organisms: ['Staphylococcus aureus', 'Streptococcus pyogenes', 'Escherichia coli'],
    treatments: [
      { type: 'preferred', drug: 'Cloxacillin', dose: '50 mg/kg', frequency: 'IV q12h', duration: '7-10 days', aware: 'Access' },
      { type: 'preferred', drug: 'Gentamicin (PLUS)', dose: '5 mg/kg', frequency: 'IV q24h', duration: '7-10 days', aware: 'Access' }
    ],
    comments: 'Observe for signs of necrotizing fasciitis which may require adding Metronidazole and surgical debridement.'
  },
  
  // --- TROPICAL ---
  {
    id: 'ped-scrub-typhus',
    section: 'pediatric',
    categoryId: 'tropical',
    name: 'Scrub Typhus',
    subType: 'Pediatric formulation',
    organisms: ['Orientia tsutsugamushi'],
    treatments: [
      { type: 'preferred', drug: 'Azithromycin', dose: '10 mg/kg', frequency: 'PO q24h', duration: '5 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Chloramphenicol', dose: '12.5-25 mg/kg', frequency: 'IV/PO q6h', duration: '7 days', aware: 'Access' },
      { type: 'alternative', condition: 'Severe, unresponsive disease', drug: 'Doxycycline', dose: '2.2 mg/kg', frequency: 'PO/IV q12h', duration: '7 days', aware: 'Access' }
    ],
    comments: 'Doxycycline is traditionally avoided in <8 years old due to tooth discoloration, however, short courses (<21 days) are now considered safe by the AAP if severity warrants.'
  },

  // --- IMMUNOCOMPROMISED ---
  {
    id: 'ped-febrile-neutropenia',
    section: 'pediatric',
    categoryId: 'immunocompromised',
    name: 'Febrile Neutropenia',
    subType: 'High risk (e.g. underlying malignancy)',
    organisms: ['Pseudomonas aeruginosa', 'Gram-negative bacilli', 'CoNS', 'Staphylococcus aureus'],
    treatments: [
      { type: 'preferred', drug: 'Piperacillin-tazobactam', dose: '80 mg/kg (Piperacillin block)', frequency: 'IV q6h', duration: 'Eval', aware: 'Watch' },
      { type: 'alternative', drug: 'Cefepime', dose: '50 mg/kg', frequency: 'IV q8h', duration: 'Eval', aware: 'Watch' }
    ],
    comments: 'If clinically unstable, catheter-related infection suspected, or MRSA prevalent, add Vancomycin 15 mg/kg IV q6h.'
  }
];
