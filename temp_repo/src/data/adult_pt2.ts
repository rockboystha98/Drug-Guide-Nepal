import { Infection } from './types';

export const adultGiUtiSkin: Infection[] = [
  // --- GI ---
  {
    id: 'peptic-ulcer',
    section: 'adult',
    categoryId: 'gastrointestinal',
    name: 'Peptic ulcer disease',
    subType: 'Helicobacter pylori',
    organisms: ['Helicobacter pylori'],
    treatments: [
      { type: 'preferred', drug: 'Clarithromycin', dose: '500 mg', frequency: 'PO q12h', duration: '14 days', aware: 'Watch' },
      { type: 'preferred', drug: 'Amoxicillin (PLUS)', dose: '1 gm', frequency: 'PO q12h', duration: '14 days', aware: 'Access' },
      { type: 'alternative', drug: 'Metronidazole', dose: '200 mg', frequency: 'PO q6h', duration: '14 days', aware: 'Access' },
      { type: 'alternative', drug: 'Tetracycline (PLUS)', dose: '500 mg', frequency: 'PO q6h', duration: '14 days', aware: 'Access' },
    ],
    comments: 'Triple regimen or Quadruple therapy. PLUS omeprazole/pantoprazole. Metronidazole is not preferred as first line in triple regimen as its resistance is common in Nepal.'
  },
  {
    id: 'cholera-adult',
    section: 'adult',
    categoryId: 'gastrointestinal',
    name: 'Cholera',
    organisms: ['Vibrio cholerae'],
    treatments: [
      { type: 'preferred', drug: 'Doxycycline', dose: '300 mg', frequency: 'PO stat', duration: 'stat', aware: 'Access' },
      { type: 'alternative', drug: 'Azithromycin', dose: '1 gm', frequency: 'PO stat', duration: 'stat', aware: 'Watch' },
      { type: 'alternative', drug: 'Ciprofloxacin', dose: '500 mg', frequency: 'PO q12h', duration: '3 days', aware: 'Watch' },
    ],
    comments: 'Oral or IV rehydration is the cornerstone of treatment.'
  },
  {
    id: 'amoebic-dysentery',
    section: 'adult',
    categoryId: 'gastrointestinal',
    name: 'Amoebic dysentery',
    organisms: ['Entamoeba histolytica'],
    treatments: [
      { type: 'preferred', drug: 'Metronidazole', dose: '400 mg', frequency: 'PO q8h', duration: '7-10 days', aware: 'Access' },
      { type: 'alternative', drug: 'Tinidazole', dose: '2 g', frequency: 'PO q24h', duration: '3 days', aware: 'Access' },
    ],
    comments: 'Add Diloxanide furoate 500mg q8h for 10 days'
  },
  {
    id: 'c-diff',
    section: 'adult',
    categoryId: 'gastrointestinal',
    name: 'Clostridioides difficile Diarrhea',
    organisms: ['Clostridioides difficile'],
    treatments: [
      { type: 'preferred', drug: 'Metronidazole', dose: '400 mg', frequency: 'PO q8h', duration: '10 days', aware: 'Access' },
      { type: 'alternative', condition: 'For severe disease', drug: 'Vancomycin', dose: '250 mg', frequency: 'PO q6h', duration: '10 days', aware: 'Watch' }
    ]
  },
  {
    id: 'liver-abscess-pyogenic',
    section: 'adult',
    categoryId: 'gastrointestinal',
    name: 'Liver abscess (Pyogenic)',
    organisms: ['Klebsiella spp.', 'Escherichia coli', 'Polymicrobial'],
    treatments: [
      { type: 'preferred', drug: 'Ampicillin', dose: '2 gm', frequency: 'IV q4h', duration: '2-4 wks', aware: 'Access' },
      { type: 'preferred', drug: 'Gentamicin (PLUS)', dose: '5 mg/kg', frequency: 'IV q24h', duration: '2-4 wks', aware: 'Access' },
      { type: 'preferred', drug: 'Metronidazole (PLUS)', dose: '500 mg', frequency: 'IV q8h', duration: '2-4 wks', aware: 'Access' },
      { type: 'alternative', drug: 'Ceftriaxone', dose: '2 gm', frequency: 'IV q24h', duration: '2-4 wks', aware: 'Watch' }
    ],
    comments: 'Consider drainage of abscess if impending rupture or large abscess or no response to medical treatment.'
  },

  // --- URINARY TRACT ---
  {
    id: 'uti-uncomplicated',
    section: 'adult',
    categoryId: 'urinary',
    name: 'Acute Uncomplicated Cystitis',
    subType: 'Non-pregnant, pre-menopausal women',
    organisms: ['Escherichia coli', 'Staphylococcus saphrophyticus', 'Klebsiella pneumoniae'],
    treatments: [
      { type: 'preferred', drug: 'Nitrofurantoin', dose: '100 mg', frequency: 'PO q12h', duration: '7 days', aware: 'Access' },
      { type: 'preferred', drug: 'Cotrimoxazole', dose: '960 mg', frequency: 'PO q12h', duration: '3-5 days', aware: 'Access' },
      { type: 'alternative', drug: 'Cefuroxime', dose: '250 mg', frequency: 'PO q12h', duration: '3-5 days', aware: 'Watch' },
    ],
    comments: 'Avoid Nitrofurantoin if GFR < 60ml/min.'
  },
  {
    id: 'uti-pyelonephritis',
    section: 'adult',
    categoryId: 'urinary',
    name: 'Acute Uncomplicated Pyelonephritis',
    organisms: ['Escherichia coli', 'Staphylococcus saprophyticus', 'Klebsiella pneumoniae', 'Proteus mirabilis'],
    treatments: [
      { type: 'preferred', drug: 'Amikacin', dose: '1 gm', frequency: 'IM/IV q24h', duration: '14 days', aware: 'Access' },
      { type: 'preferred', drug: 'Gentamicin (OR)', dose: '7 mg/kg/day', frequency: 'IM/IV q24h', duration: '14 days', aware: 'Access' },
      { type: 'alternative', drug: 'Piperacillin-tazobactam', dose: '4.5 gm', frequency: 'IV q6h', duration: '14 days', aware: 'Watch' }
    ],
    comments: 'Obtain urine culture before starting treatment. Perform ultrasound of the upper urinary tract to exclude obstructive pyelonephritis.'
  },
  {
    id: 'chronic-prostatitis',
    section: 'adult',
    categoryId: 'urinary',
    name: 'Chronic Bacterial Prostatitis',
    subType: 'NIH Type II',
    organisms: ['Enterobacteriaceae'],
    treatments: [
      { type: 'preferred', drug: 'Trimethoprim-sulfamethoxazole', dose: '160/800mg', frequency: 'PO q12h', duration: '4-6 weeks', aware: 'Access' },
      { type: 'alternative', drug: 'Ciprofloxacin', dose: '500 mg', frequency: 'PO q12h', duration: '4-6 weeks', aware: 'Watch' }
    ],
    comments: 'Relapsing UTI with repeated isolation of same organism from urine is the hallmark. Reassess after 2 weeks of antimicrobial therapy.'
  },

  // --- SKIN & SOFT TISSUE ---
  {
    id: 'impetigo',
    section: 'adult',
    categoryId: 'skin',
    name: 'Localised Impetigo',
    organisms: ['Staphylococcus aureus', 'Streptococcus pyogenes'],
    treatments: [
      { type: 'preferred', drug: 'Cloxacillin', dose: '500-1000 mg', frequency: 'PO q6h', duration: '5-7 days', aware: 'Access' },
      { type: 'preferred', drug: 'Cephalexin (OR)', dose: '250-500 mg', frequency: 'PO q6h', duration: '5-7 days', aware: 'Access' },
      { type: 'alternative', condition: 'Outpatient use only', drug: 'Fusidic acid 2%', dose: 'Topical', frequency: 'q8-12h', duration: '5 days', aware: 'Unknown' },
    ]
  },
  {
    id: 'necrotizing-fasciitis',
    section: 'adult',
    categoryId: 'skin',
    name: 'Necrotizing Fasciitis',
    subType: 'Type 1 Polymicrobial infection',
    organisms: ['Staphylococcus aureus', 'Gram negative organism', 'Clostridium spp.'],
    treatments: [
      { type: 'preferred', drug: 'Ampicillin-sulbactam', dose: '3 gm', frequency: 'IV q6-8h', duration: 'Source Control', aware: 'Access' },
      { type: 'preferred', drug: 'Clindamycin (PLUS)', dose: '600-900 mg', frequency: 'IV q8h', duration: 'Source Control', aware: 'Access' },
      { type: 'alternative', drug: 'Piperacillin-tazobactam', dose: '4.5 gm', frequency: 'IV q6-8h', duration: 'Source Control', aware: 'Watch' }
    ],
    comments: 'Source Control. Clindamycin only necessary if risk of group A streptococcus/presence of gas crepitus.'
  },
  {
    id: 'animal-bite',
    section: 'adult',
    categoryId: 'skin',
    name: 'Animal bite',
    organisms: ['Pasteurella multocida', 'Staphylococcus aureus', 'Streptococcus'],
    treatments: [
      { type: 'preferred', drug: 'Amoxicillin-clavulanate', dose: '625 mg', frequency: 'PO q8h', duration: '3-5 days', aware: 'Access' },
      { type: 'alternative', drug: 'Doxycycline', dose: '100 mg', frequency: 'PO q12h', duration: '3-5 days', aware: 'Access' },
      { type: 'alternative', drug: 'Clindamycin (PLUS)', dose: '300 mg', frequency: 'PO q6h', duration: '3-5 days', aware: 'Access' }
    ],
    comments: 'Prophylactic duration: 3-5 days. If wound is infected: 10 days or longer is recommended. Note: Vaccination against rabies and/or TT as required.'
  }
];
