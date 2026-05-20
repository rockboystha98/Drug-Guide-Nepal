import { Infection } from './types';

export const adultBatch4: Infection[] = [
  // --- GI ---
  {
    id: 'enteric-fever',
    section: 'adult',
    categoryId: 'gastrointestinal',
    name: 'Enteric fever (Typhoid)',
    subType: 'Uncomplicated',
    organisms: ['Salmonella Typhi', 'Salmonella Paratyphi'],
    treatments: [
      { type: 'preferred', drug: 'Cefixime', dose: '20 mg/kg/day', frequency: 'PO divided q12h', duration: '7-14 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Azithromycin', dose: '1g stat on D1 followed by 500mg', frequency: 'PO q24h', duration: 'total 5-7 days', aware: 'Watch' },
    ],
    comments: 'Send Blood Culture/Standard sample. Resistant to Chloramphenicol, Amoxicillin and Trimethoprim-sulfamethoxazole reported.'
  },
  {
    id: 'enteric-fever-severe',
    section: 'adult',
    categoryId: 'gastrointestinal',
    name: 'Enteric fever (Typhoid)',
    subType: 'Severe infection or suspected resistant organism',
    organisms: ['Salmonella Typhi', 'Salmonella Paratyphi'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '60-80 mg/kg/day', frequency: 'IV q24h', duration: '7-14 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Ciprofloxacin', dose: '20-30 mg/kg/day (max 1.2g/day)', frequency: 'IV in 2 divided doses', duration: '7-10 days', aware: 'Watch' },
    ],
    comments: 'Fluoroquinolones need to be used with caution due to rapid development of resistance.'
  },
  {
    id: 'diverticulitis',
    section: 'adult',
    categoryId: 'surgical', // Note: mapped to surgical in guidelines
    name: 'Diverticulitis',
    subType: 'Moderate (Not undergoing a source control procedure)',
    organisms: ['Gram-negative bacteria', 'Anaerobes'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '2 gm', frequency: 'IV q24h', duration: 'Clinical response', aware: 'Watch' },
      { type: 'preferred', drug: 'Metronidazole (PLUS)', dose: '500 mg', frequency: 'IV q8h', duration: 'Clinical response', aware: 'Access' },
      { type: 'alternative', drug: 'Piperacillin-tazobactam', dose: '4.5 gm', frequency: 'IV q6-8h', duration: 'Clinical response', aware: 'Watch' },
    ]
  },
  {
    id: 'cholecystitis',
    section: 'adult',
    categoryId: 'gastrointestinal',
    name: 'Biliary tract infections',
    subType: 'Cholecystitis, Cholangitis',
    organisms: ['Enterobacteriaceae', 'Anaerobes'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '2 gm', frequency: 'IV q24h', duration: '7-10 days', aware: 'Watch' },
      { type: 'preferred', drug: 'Metronidazole (PLUS*)', dose: '500 mg', frequency: 'IV q8h', duration: '7-10 days', aware: 'Access' },
      { type: 'alternative', drug: 'Piperacillin-tazobactam', dose: '4.5 gm', frequency: 'IV q6-8h', duration: '7-10 days', aware: 'Watch' }
    ],
    comments: '*If biliary enteric anastomosis present. Surgical or endoscopic intervention for biliary obstruction.'
  },

  // --- SURGICAL INFECTIONS ---
  {
    id: 'appendicitis-acute',
    section: 'adult',
    categoryId: 'surgical',
    name: 'Appendicitis',
    subType: 'Acute appendicitis without perforation',
    organisms: ['Enterobacteriaceae', 'Enterococci', 'Bacteroides'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '1 gm', frequency: 'IV q12h', duration: '5-7 days', aware: 'Watch' },
      { type: 'preferred', drug: 'Amoxicillin-clavulanate (OR)', dose: '1.2 gm', frequency: 'IV q8h', duration: '5-7 days', aware: 'Access' },
      { type: 'alternative', drug: 'Ampicillin-sulbactam', dose: '1.5 gm', frequency: 'IV q6-8h', duration: '5-7 days', aware: 'Access' },
    ],
    comments: 'Acute appendicitis without evidence of perforation, abscess, or local peritonitis; undergoing emergency appendectomy, treatment should be discontinued within 24 hours.'
  },
  {
    id: 'breast-abscess',
    section: 'adult',
    categoryId: 'surgical',
    name: 'Breast abscess/Mastitis',
    organisms: ['Staphylococcus aureus'],
    treatments: [
      { type: 'preferred', drug: 'Flucloxacillin', dose: '500 mg', frequency: 'IV q6h', duration: '10-14 days', aware: 'Access' },
      { type: 'preferred', drug: 'Cloxacillin (OR)', dose: '500 mg', frequency: 'IV q6h', duration: '10-14 days', aware: 'Access' },
      { type: 'alternative', drug: 'Amoxicillin-clavulanate', dose: '625 mg', frequency: 'PO q8h', duration: '10-14 days', aware: 'Access' },
      { type: 'alternative', condition: 'Penicillin allergy', drug: 'Clindamycin', dose: '600 mg', frequency: 'IV/PO q8h', duration: '10-14 days', aware: 'Access' }
    ],
    comments: 'Aspiration/Drainage is required for abscess. Consider sending breast milk for C&S if not responding after 48h of initial antibiotic therapy.'
  },
  
  // --- OBSTETRIC & GYNAECO ---
  {
    id: 'septic-abortion',
    section: 'adult',
    categoryId: 'obstetric',
    name: 'Septic Abortion',
    organisms: ['Prevotella bivia', 'Streptococcus spp.', 'Enterobacteriaceae', 'Chlamydia trachomatis'],
    treatments: [
      { type: 'preferred', drug: 'Ampicillin', dose: '2g stat then 1g', frequency: 'IV q4-6h', duration: '10-14 days', aware: 'Access' },
      { type: 'preferred', drug: 'Gentamicin (PLUS)', dose: '5 mg/kg', frequency: 'IV q24h', duration: '10-14 days', aware: 'Access' },
      { type: 'preferred', drug: 'Metronidazole (PLUS)', dose: '500 mg', frequency: 'IV q8h', duration: '10-14 days', aware: 'Access' },
      { type: 'alternative', drug: 'Ampicillin-sulbactam (PLUS Doxycycline)', dose: '3gm (Amp-sulb)', frequency: 'IV q6h', duration: '10-14 days', aware: 'Access' }
    ],
    comments: 'Intravenous antibiotics are administered until the patient has improved and afebrile for 48 hours, then typically followed by oral antibiotics to complete course.'
  },
  {
    id: 'pid-outpatient',
    section: 'adult',
    categoryId: 'obstetric',
    name: 'Pelvic Inflammatory Disease (PID)',
    subType: 'Outpatient regimen (Mild-moderate)',
    organisms: ['Neisseria gonorrhoeae', 'Chlamydia trachomatis', 'Bacteroides spp.', 'Streptococcus agalactiae'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '500 mg', frequency: 'IM single dose', duration: 'stat', aware: 'Watch' },
      { type: 'preferred', drug: 'Metronidazole (PLUS)', dose: '400 mg', frequency: 'PO q8h', duration: '14 days', aware: 'Access' },
      { type: 'preferred', drug: 'Doxycycline (PLUS)', dose: '100 mg', frequency: 'PO q12h', duration: '14 days', aware: 'Access' },
    ]
  },

  // --- PROPHYLAXIS (SURGICAL / NON) ---
  {
    id: 'surg-prophy-cardiac',
    section: 'adult',
    categoryId: 'prophylaxis',
    name: 'Surgical Prophylaxis - Cardiac Surgery',
    organisms: ['Staphylococcus epidermidis', 'Staphylococcus aureus', 'Corynebacterium spp.', 'Enteric Gram-negative bacilli'],
    treatments: [
      { type: 'preferred', drug: 'Cefazolin', dose: '30 mg/kg (max 2g)', frequency: 'IV single dose', duration: 'stat', aware: 'Access' },
      { type: 'alternative', condition: 'Beta-lactam Allergy', drug: 'Clindamycin', dose: '10 mg/kg (max 900mg)', frequency: 'IV single dose', duration: 'stat', aware: 'Access' },
      { type: 'alternative', condition: 'If known to have MRSA/MRSE colonization', drug: 'Vancomycin', dose: '15 mg/kg', frequency: 'IV single dose', duration: 'stat', aware: 'Watch' },
    ],
    comments: 'Administer within 60 minutes before surgical incision (Vancomycin 120 minutes). Re-dosing Cefazolin interval is 4 hours from initiation.'
  }
];
