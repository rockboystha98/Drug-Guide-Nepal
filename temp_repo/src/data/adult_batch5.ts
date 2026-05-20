import { Infection } from './types';

export const adultBatch5: Infection[] = [
  // --- SKIN & SOFT TISSUE (cont) ---
  {
    id: 'cellulitis-mild',
    section: 'adult',
    categoryId: 'skin',
    name: 'Cellulitis',
    subType: 'Mild / Uncomplicated',
    organisms: ['Staphylococcus aureus', 'Streptococcus pyogenes'],
    treatments: [
      { type: 'preferred', drug: 'Cephalexin', dose: '500 mg', frequency: 'PO q6h', duration: '5-10 days', aware: 'Access' },
      { type: 'alternative', drug: 'Amoxicillin-clavulanate', dose: '625 mg', frequency: 'PO q8h', duration: '5-10 days', aware: 'Access' },
    ],
    comments: 'If purulent, empiric coverage for MRSA is generally not recommended.'
  },
  {
    id: 'cellulitis-severe',
    section: 'adult',
    categoryId: 'skin',
    name: 'Cellulitis ',
    subType: 'Severe / Immunocompromised / Suspecting necrotizing fasciitis',
    organisms: ['Staphylococcus aureus', 'Streptococcus pyogenes', 'Gram negative bacilli'],
    treatments: [
      { type: 'preferred', drug: 'Ampicillin-sulbactam', dose: '3 gm', frequency: 'IV q6-8h', duration: 'eval', aware: 'Access' },
      { type: 'preferred', drug: 'Clindamycin (PLUS*)', dose: '600 mg', frequency: 'IV q6h', duration: 'eval', aware: 'Access' },
      { type: 'alternative', drug: 'Piperacillin-tazobactam', dose: '4.5 gm', frequency: 'IV q6-8h', duration: 'eval', aware: 'Watch' }
    ],
    comments: '*Clindamycin only necessary if risk of group A streptococcus/presence of gas crepitus. Gram negative coverage may be necessary in immunocompromised patients, perioral/perirectal, or crepitant cellulitis.'
  },

  // --- TROPICAL & OTHER ---
  {
    id: 'scrub-typhus',
    section: 'adult',
    categoryId: 'tropical',
    name: 'Scrub Typhus',
    organisms: ['Orientia tsutsugamushi'],
    treatments: [
      { type: 'preferred', drug: 'Doxycycline', dose: '100 mg', frequency: 'PO/IV q12h', duration: '7 days', aware: 'Access' },
      { type: 'alternative', drug: 'Azithromycin', dose: '500 mg', frequency: 'PO/IV q24h', duration: '5 days', aware: 'Watch' },
      { type: 'alternative', condition: 'Pregnant', drug: 'Azithromycin', dose: '500 mg', frequency: 'PO/IV q24h', duration: '5 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Chloramphenicol', dose: '500 mg', frequency: 'PO/IV q6h', duration: '7 days', aware: 'Access' }
    ],
    comments: 'Doxycycline is preferred. Due to reports of Doxycycline resistance from SE Asia, Azithromycin or Chloramphenicol can be used. Avoid Doxycycline and Chloramphenicol in pregnant patients.'
  },
  {
    id: 'brucellosis-non-focal',
    section: 'adult',
    categoryId: 'tropical',
    name: 'Brucellosis',
    subType: 'Non focal disease',
    organisms: ['Brucella melitensis', 'Brucella abortus'],
    treatments: [
      { type: 'preferred', drug: 'Doxycycline', dose: '100 mg', frequency: 'PO q12h', duration: '6 weeks', aware: 'Access' },
      { type: 'preferred', drug: 'Gentamicin (PLUS)', dose: '5 mg/kg', frequency: 'IV q24h', duration: '7 days', aware: 'Access' },
      { type: 'alternative', drug: 'Doxycycline (PLUS Rifampicin)', dose: '100mg (Doxy) + 600-900mg (Rif)', frequency: 'PO divided q12h', duration: '6 weeks', aware: 'Watch' },
    ],
    comments: 'Ciprofloxacin/Ofloxacin plus rifampin for 6 weeks is an alternative but has higher relapse rate.'
  },

  // --- IMMUNOCOMPROMISED & HIV ---
  {
    id: 'febrile-neutropenia-high',
    section: 'adult',
    categoryId: 'immunocompromised',
    name: 'Febrile Neutropenia',
    subType: 'High Risk (Inpatient)',
    organisms: ['Pseudomonas aeruginosa', 'Enterobacteriaceae', 'Staphylococcus spp.', 'Streptococcus spp.'],
    treatments: [
      { type: 'preferred', drug: 'Piperacillin-tazobactam', dose: '4.5 gm', frequency: 'IV q6-8h', duration: 'Until ANC > 500', aware: 'Watch' },
      { type: 'alternative', drug: 'Cefepime', dose: '2 gm', frequency: 'IV q8h', duration: 'Until ANC > 500', aware: 'Watch' },
      { type: 'alternative', drug: 'Meropenem', dose: '1 gm', frequency: 'IV q8h', duration: 'Until ANC > 500', aware: 'Watch' },
    ],
    comments: 'Add Vancomycin (15 mg/kg IV q12h) if: hemodynamic instability/sepsis, pneumonia, positive blood culture for Gram-positive bacteria, or suspected catheter-related infection.'
  },
  {
    id: 'hiv-pcp',
    section: 'adult',
    categoryId: 'hiv',
    name: 'Pneumocystis jirovecii pneumonia (PCP)',
    subType: 'Treatment (Mild to Moderate)',
    organisms: ['Pneumocystis jirovecii'],
    treatments: [
      { type: 'preferred', drug: 'Trimethoprim-sulfamethoxazole (TMP-SMX)', dose: '15-20mg/kg/day based on TMP', frequency: 'IV/PO in 3-4 divided doses', duration: '21 days', aware: 'Access' },
      { type: 'alternative', drug: 'Clindamycin (PLUS Primaquine)', dose: '600mg (Clinda) + 30mg (Prima)', frequency: 'IV/PO q8h', duration: '21 days', aware: 'Access' },
    ],
    comments: 'Patients with severe disease (PO2 < 70mmHg on room air or A-a gradient > 35) should receive Corticosteroids (e.g. Prednisolone) as soon as possible, ideally before specific PCP therapy.'
  },
  {
    id: 'hiv-toxo',
    section: 'adult',
    categoryId: 'hiv',
    name: 'Toxoplasma gondii Encephalitis',
    subType: 'Acute Treatment',
    organisms: ['Toxoplasma gondii'],
    treatments: [
      { type: 'preferred', drug: 'Trimethoprim-sulfamethoxazole (TMP-SMX)', dose: '4-5 mg/kg of TMP component', frequency: 'IV/PO q12h', duration: 'at least 6 weeks', aware: 'Access' }
    ],
    comments: 'Longer duration may be necessary if extensive disease or incomplete response at 6 weeks. Secondary prophylaxis required until CD4 > 200 for > 6 months in response to ART.'
  }
];
