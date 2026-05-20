import { Infection } from './types';

export const pediatricBatch4: Infection[] = [
  // --- SURGICAL INFECTIONS (Pediatric) ---
  {
    id: 'ped-appendicitis',
    section: 'pediatric',
    categoryId: 'surgical',
    name: 'Appendicitis',
    subType: 'Acute Uncomplicated (Pre-operative)',
    organisms: ['Escherichia coli', 'Bacteroides', 'Streptococcus spp.'],
    treatments: [
      { type: 'preferred', drug: 'Ampicillin', dose: '50 mg/kg', frequency: 'IV q6h', duration: 'Discontinue 24h post-op', aware: 'Access' },
      { type: 'preferred', drug: 'Gentamicin (PLUS)', dose: '7.5 mg/kg', frequency: 'IV q24h', duration: 'Discontinue 24h post-op', aware: 'Access' },
      { type: 'preferred', drug: 'Metronidazole (PLUS)', dose: '7.5 mg/kg', frequency: 'IV q8h', duration: 'Discontinue 24h post-op', aware: 'Access' },
      { type: 'alternative', drug: 'Ceftriaxone', dose: '50-75 mg/kg', frequency: 'IV q24h', duration: 'Discontinue 24h post-op', aware: 'Watch' },
      { type: 'alternative', drug: 'Metronidazole (PLUS)', dose: '7.5 mg/kg', frequency: 'IV q8h', duration: 'Discontinue 24h post-op', aware: 'Access' }
    ]
  },

  // --- CHEMOPROPHYLAXIS ---
  {
    id: 'ped-prophylaxis-meningococcal',
    section: 'pediatric',
    categoryId: 'prophylaxis',
    name: 'Meningococcal Infection',
    subType: 'Post-exposure Prophylaxis',
    organisms: ['Neisseria meningitidis'],
    treatments: [
      { type: 'preferred', condition: '< 1 month', drug: 'Rifampicin', dose: '5 mg/kg', frequency: 'PO q12h', duration: '2 days', aware: 'Watch' },
      { type: 'preferred', condition: '> 1 month', drug: 'Rifampicin', dose: '10 mg/kg (max 600mg)', frequency: 'PO q12h', duration: '2 days', aware: 'Watch' },
      { type: 'alternative', condition: '< 15 years', drug: 'Ceftriaxone', dose: '125 mg', frequency: 'IM single dose', duration: 'stat', aware: 'Watch' }
    ]
  }
];
