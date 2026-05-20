import { Infection } from './types';

export const adultBatch3: Infection[] = [
  // --- CNS ---
  {
    id: 'brain-abscess-oral',
    section: 'adult',
    categoryId: 'cns',
    name: 'Brain Abscess/Subdural Empyema',
    subType: 'Suspected arising from an oral or sinus source',
    organisms: ['Streptococci', 'Staphylococci', 'Gram-negative bacilli', 'Anaerobes'],
    treatments: [
      { type: 'preferred', drug: 'Ampicillin (OR) Ceftriaxone', dose: '2 g', frequency: 'IV q4-6h (Amp) / q12h (Cef)', duration: '4-8 weeks', aware: 'Access' },
      { type: 'preferred', drug: 'Metronidazole (PLUS)', dose: '500 mg', frequency: 'IV q8h', duration: '4-8 weeks', aware: 'Access' },
    ],
    comments: 'Duration - 4-8 weeks (IV 2 weeks minimum). Add Cloxacillin if suspected hematogenous spread, post-neurosurgery or post-penetrating injury. In post-neurosurgery/trauma consider cover for Pseudomonas.'
  },
  {
    id: 'spinal-epidural-abscess',
    section: 'adult',
    categoryId: 'cns',
    name: 'Spinal Epidural Abscess',
    organisms: ['Streptococci', 'Staphylococci', 'Gram-negative bacilli'],
    treatments: [
      { type: 'preferred', drug: 'Cloxacillin', dose: '2 gm', frequency: 'IV q4h', duration: '2-6 weeks', aware: 'Access' },
      { type: 'preferred', drug: 'Gentamicin (PLUS)', dose: '4-7 mg/kg/day', frequency: 'IV in 3 divided doses', duration: '2-6 weeks', aware: 'Access' },
      { type: 'alternative', condition: 'MRSA suspected', drug: 'Vancomycin', dose: '25-30mg/kg loading, then 15mg/kg', frequency: 'IV q8-12h', duration: '2-6 weeks', aware: 'Watch' }
    ]
  },
  
  // --- ORAL / DENTAL ---
  {
    id: 'dental-abscess-severe',
    section: 'adult',
    categoryId: 'dental',
    name: 'Localised Dentoalveolar Abscess',
    subType: 'Deep Infection/Medically Compromised',
    organisms: [],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin', dose: '500 mg', frequency: 'PO q8h', duration: '5 days', aware: 'Access' },
      { type: 'preferred', drug: 'Metronidazole (PLUS)', dose: '400 mg', frequency: 'PO q8h', duration: '5 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Cephalexin', dose: '500 mg', frequency: 'PO q12h', duration: '5 days', aware: 'Access' }
    ],
    comments: 'For superficial abscess - systemic antibiotic use not recommended unless medically compromised. Local treatment with saline irrigation and symptom relief.'
  },
  {
    id: 'periodontitis',
    section: 'adult',
    categoryId: 'dental',
    name: 'Chronic Periodontitis',
    organisms: ['Aggregatibacter', 'Porphyromonas', 'Prevotella'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin', dose: '500 mg', frequency: 'PO q8h', duration: '5 days', aware: 'Access' },
      { type: 'preferred', drug: 'Metronidazole (PLUS)', dose: '400 mg', frequency: 'PO q8h', duration: '5 days', aware: 'Access' },
      { type: 'alternative', drug: 'Clindamycin', dose: '300 mg', frequency: 'PO q6h', duration: '5 days', aware: 'Access' }
    ],
    comments: 'Systemic antibiotic use generally not recommended. 1st line treatment is Mechanical plaque control. Consider antibiotics if unresponsive.'
  },

  // --- OCULAR ---
  {
    id: 'bacterial-conjunctivitis',
    section: 'adult',
    categoryId: 'ocular',
    name: 'Bacterial Conjunctivitis',
    organisms: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Haemophilus influenzae'],
    treatments: [
      { type: 'preferred', drug: 'Chloramphenicol 0.5% eye drop', dose: '1 drop', frequency: 'q6h', duration: '5-7 days', aware: 'Access' },
      { type: 'alternative', drug: 'Moxifloxacin 0.5% eye drop', dose: '1 drop', frequency: 'q6h', duration: '5-7 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Ciprofloxacin 0.3% eye drop', dose: '1 drop', frequency: 'q6h', duration: '5-7 days', aware: 'Watch' },
    ]
  },
  {
    id: 'gonococcal-conjunctivitis',
    section: 'adult',
    categoryId: 'ocular',
    name: 'Gonococcal Conjunctivitis',
    organisms: ['Neisseria gonorrhoeae'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '1 g', frequency: 'IM stat', duration: '1 dose', aware: 'Watch' }
    ],
    comments: 'Copious irrigation with topical saline drops or artificial tears every 30-60 minutes. Topical antibiotics may be considered as ancillary therapy.'
  },

  // --- ENT ---
  {
    id: 'tonsillitis',
    section: 'adult',
    categoryId: 'ent',
    name: 'Tonsillitis/Pharyngitis',
    organisms: ['Group A Streptococcus'],
    treatments: [
      { type: 'preferred', drug: 'Phenoxymethylpenicillin (Penicillin V)', dose: '500 mg', frequency: 'PO q12h', duration: '5-10 days', aware: 'Access' },
      { type: 'alternative', drug: 'Amoxicillin', dose: '500 mg', frequency: 'PO q8h', duration: '5-10 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Cephalexin', dose: '500 mg', frequency: 'PO q12h', duration: '10 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy (severe)', drug: 'Azithromycin', dose: '500 mg', frequency: 'PO q24h', duration: '3-5 days', aware: 'Watch' },
    ],
    comments: 'Antibiotics should be prescribed in suspected (Modified Centor Score >= 3). Viral origin is most common.'
  },
  {
    id: 'acute-epiglottitis',
    section: 'adult',
    categoryId: 'ent',
    name: 'Acute Epiglottitis',
    organisms: ['Haemophilus influenzae type B', 'Streptococcus pneumoniae', 'Viruses'],
    treatments: [
      { type: 'preferred', drug: 'Ampicillin-sulbactam', dose: '3 gm', frequency: 'IV q6h', duration: '7-14 days', aware: 'Access' },
      { type: 'preferred', drug: 'Ceftriaxone (OR)', dose: '2 gm', frequency: 'IV q24h', duration: '7-14 days', aware: 'Watch' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Clindamycin (PLUS) Ciprofloxacin', dose: '600-900mg (Clinda) + 400mg (Cipro)', frequency: 'IV q8h (Clinda), IV q12h (Cipro)', duration: '7-14 days', aware: 'Watch' },
    ],
    comments: 'Urgent hospitalization. May present with life-threatening upper airway obstruction. Consider adding Vancomycin for patients with moderate to severe sepsis or MRSA colonised.'
  }
];
