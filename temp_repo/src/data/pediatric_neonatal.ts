import { Infection } from './types';

export const pediatricNeonatal: Infection[] = [
  // --- PEDIATRIC RESPIRATORY ---
  {
    id: 'ped-pneumonia-fast',
    section: 'pediatric',
    categoryId: 'respiratory',
    name: 'Pneumonia with fast breathing',
    subType: 'Children aged 2-59 months, no chest indrawing or general danger signs',
    organisms: ['Streptococcus pneumoniae'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin', dose: '40 mg/kg', frequency: 'PO q12h', duration: '5 days', aware: 'Access' }
    ],
    comments: 'Home care advice as per integrated management of childhood illness guideline.'
  },
  {
    id: 'ped-pneumonia-severe',
    section: 'pediatric',
    categoryId: 'respiratory',
    name: 'Severe Pneumonia',
    subType: 'Children 2-59 months with chest indrawing / general danger signs',
    organisms: ['Streptococcus pneumoniae'],
    treatments: [
      { type: 'preferred', drug: 'Ampicillin', dose: '50 mg/kg', frequency: 'IV q6h', duration: 'at least 5 days', aware: 'Access' },
      { type: 'preferred', drug: 'Gentamicin (PLUS)', dose: '7.5 mg/kg', frequency: 'IM/IV q24h', duration: 'at least 5 days', aware: 'Access' },
      { type: 'alternative', drug: 'Ceftriaxone', dose: '100 mg/kg stat then 50 mg/kg', frequency: 'IV q24h', duration: 'at least 5 days', aware: 'Watch' }
    ],
    comments: 'Not able to drink, persistent vomiting, convulsion, lethargic/unconscious, stridor in a calm child, severe malnutrition. First dose antibiotic, then refer/admit for injectable antibiotics.'
  },

  // --- NEONATAL INFECTIONS ---
  {
    id: 'neo-meningitis',
    section: 'neonatal',
    categoryId: 'cns',
    name: 'Neonatal Meningitis',
    subType: 'Empirical therapy',
    organisms: ['GBS', 'Escherichia coli', 'Listeria spp.', 'Other GNR'],
    treatments: [
      { type: 'preferred', condition: '< 1 week of age', drug: 'Ampicillin', dose: '200-300 mg/kg/day', frequency: 'IV in 3 divided doses', duration: '14-21 days', aware: 'Access' },
      { type: 'preferred', condition: '> 1 week of age', drug: 'Ampicillin', dose: '300 mg/kg/day', frequency: 'IV in 4 divided doses', duration: '14-21 days', aware: 'Access' },
      { type: 'alternative', condition: '< 1 week of age', drug: 'Cefotaxime', dose: '50 mg/kg/dose', frequency: 'IV q12h', duration: '14-21 days', aware: 'Watch' },
      { type: 'alternative', condition: '> 1 week of age', drug: 'Cefotaxime', dose: '50 mg/kg/dose', frequency: 'IV q8h', duration: '14-21 days', aware: 'Watch' }
    ]
  },
  {
    id: 'neo-sepsis-early',
    section: 'neonatal',
    categoryId: 'skin', // Re-using general 
    name: 'Early onset sepsis',
    subType: '<48 hrs',
    organisms: ['Group B Streptococcus (GBS)', 'Listeria spp.', 'Escherichia coli', 'Haemophilus influenzae', 'Klebsiella spp.'],
    treatments: [
      { type: 'preferred', condition: '< 1 week of age', drug: 'Ampicillin', dose: '200-300 mg/kg/day', frequency: 'IV in 3 divided doses', duration: 'Evaluate at 48h', aware: 'Access' },
      { type: 'preferred', condition: '> 1 week of age', drug: 'Ampicillin', dose: '200-300 mg/kg/day', frequency: 'IV in 4 divided doses', duration: 'Evaluate at 48h', aware: 'Access' },
      { type: 'preferred', condition: 'All', drug: 'Gentamicin (PLUS)', dose: '5 mg/kg', frequency: 'IV q24-q48h based on age/CGA', duration: 'Evaluate at 48h', aware: 'Access' }
    ],
    comments: 'If negative blood culture, initial clinical suspicion not strong and reassuring baby\'s condition with low CRP, consider stopping antibiotics at 48 hours. Consider antibiotics for more than 5-7 days if baby not fully recovered.'
  },
  {
    id: 'neo-sepsis-late',
    section: 'neonatal',
    categoryId: 'skin',
    name: 'Late onset sepsis',
    subType: '>48 hours',
    organisms: ['MSSA/MRSA', 'CoNS', 'Gram-negative rods'],
    treatments: [
      { type: 'preferred', drug: '(Flu)cloxacillin', dose: '50 mg/kg', frequency: 'IV q12h (<1wk) or q8h (>1wk)', duration: '7-14 days', aware: 'Access' },
      { type: 'preferred', drug: 'Gentamicin (PLUS)', dose: '5 mg/kg', frequency: 'IV q48h/q36h/q24h based on CGA', duration: '7-14 days', aware: 'Access' },
      { type: 'alternative', drug: 'Piperacillin-tazobactam', dose: '80-100 mg/kg', frequency: 'IV q8h-q6h', duration: '7-14 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Cefotaxime (OR)', dose: '50 mg/kg', frequency: 'IV q12h or q8h', duration: '7-14 days', aware: 'Watch' }
    ],
    comments: 'Piperacillin-tazobactam is a good second line option in pneumonia and intraabdominal sepsis.'
  }
];
