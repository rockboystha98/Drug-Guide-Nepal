import { Infection } from './types';

export const adultBatch6: Infection[] = [
  // --- CHEMOPROPHYLAXIS (Non-Surgical) ---
  {
    id: 'adult-prophylaxis-meningococcal',
    section: 'adult',
    categoryId: 'prophylaxis',
    name: 'Meningococcal Infection',
    subType: 'Post-exposure Prophylaxis (Close Contacts)',
    organisms: ['Neisseria meningitidis'],
    treatments: [
      { type: 'preferred', drug: 'Rifampicin', dose: '600 mg', frequency: 'PO q12h', duration: '2 days', aware: 'Watch' },
      { type: 'preferred', drug: 'Ciprofloxacin (OR)', dose: '500 mg', frequency: 'PO single dose', duration: 'stat', aware: 'Watch' },
      { type: 'preferred', drug: 'Ceftriaxone (OR)', dose: '250 mg', frequency: 'IM single dose', duration: 'stat', aware: 'Watch' }
    ],
    comments: 'Administer as soon as possible, ideally within 24 hours of identifying the index case. Avoid Ciprofloxacin in pregnancy.'
  },
  {
    id: 'hiv-pep',
    section: 'adult',
    categoryId: 'prophylaxis',
    name: 'Post-Exposure Prophylaxis (PEP) for HIV',
    organisms: ['HIV'],
    treatments: [
      { type: 'preferred', drug: 'Tenofovir + Lamivudine (TDF/3TC)', dose: '300mg/300mg', frequency: 'PO q24h', duration: '28 days', aware: 'Unknown' },
      { type: 'preferred', drug: 'Dolutegravir (PLUS)', dose: '50 mg', frequency: 'PO q24h', duration: '28 days', aware: 'Unknown' },
      { type: 'alternative', drug: 'Efavirenz (In place of DTG)', dose: '600 mg', frequency: 'PO q24h', duration: '28 days', aware: 'Unknown' }
    ],
    comments: 'Must be started as early as possible, within 72 hours of exposure.'
  },

  // --- OBSTETRIC & GYNAECO (cont) ---
  {
    id: 'c-section-prophylaxis',
    section: 'adult',
    categoryId: 'obstetric',
    name: 'Caesarean Section',
    subType: 'Surgical Prophylaxis',
    organisms: ['Skin flora', 'Enteric Gram-negative bacilli', 'Anaerobes'],
    treatments: [
      { type: 'preferred', drug: 'Cefazolin', dose: '2 g', frequency: 'IV single dose', duration: 'stat', aware: 'Access' },
      { type: 'alternative', condition: 'Beta-lactam allergy', drug: 'Clindamycin', dose: '900 mg', frequency: 'IV single dose', duration: 'stat', aware: 'Access' },
      { type: 'alternative', condition: 'Beta-lactam allergy', drug: 'Gentamicin (PLUS)', dose: '5 mg/kg', frequency: 'IV single dose', duration: 'stat', aware: 'Access' }
    ],
    comments: 'Administer within 60 minutes before skin incision.'
  }
];
