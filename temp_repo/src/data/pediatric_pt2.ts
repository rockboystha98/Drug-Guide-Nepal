import { Infection } from './types';

export const pediatricBatch2: Infection[] = [
  // --- GASTROINTESTINAL ---
  {
    id: 'ped-dysentery',
    section: 'pediatric',
    categoryId: 'gastrointestinal',
    name: 'Acute Bloody Diarrhea (Dysentery)',
    subType: 'Shigellosis Suspected',
    organisms: ['Shigella spp.', 'Campylobacter jejuni'],
    treatments: [
      { type: 'preferred', drug: 'Azithromycin', dose: '10-12 mg/kg', frequency: 'PO q24h', duration: '3-5 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Cefixime', dose: '8 mg/kg', frequency: 'PO q24h', duration: '5 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Ceftriaxone', dose: '50-100 mg/kg', frequency: 'IV q24h', duration: '2-5 days', aware: 'Watch' }
    ],
    comments: 'Ciprofloxacin/Ofloxacin have high resistance locally and should be used with caution based on sensitivity. Fluid and electrolyte replacement is corner-stone.'
  },
  {
    id: 'ped-typhoid',
    section: 'pediatric',
    categoryId: 'gastrointestinal',
    name: 'Enteric Fever (Typhoid)',
    subType: 'Uncomplicated',
    organisms: ['Salmonella Typhi', 'Salmonella Paratyphi'],
    treatments: [
      { type: 'preferred', drug: 'Cefixime', dose: '10 mg/kg', frequency: 'PO q12h', duration: '7-14 days', aware: 'Watch' },
      { type: 'alternative', drug: 'Azithromycin', dose: '20 mg/kg max 1000mg', frequency: 'PO q24h', duration: '5-7 days', aware: 'Watch' }
    ],
    comments: 'Avoid Fluoroquinolones as first line empiric due to prevalent resistance and TB crossover risks in Nepal.'
  },

  // --- URINARY TRACT ---
  {
    id: 'ped-uti-lower',
    section: 'pediatric',
    categoryId: 'urinary',
    name: 'Urinary Tract Infection',
    subType: 'Lower UTI / Cystitis (> 2 months old)',
    organisms: ['Escherichia coli', 'Klebsiella pneumoniae', 'Proteus spp.'],
    treatments: [
      { type: 'preferred', drug: 'Cefixime', dose: '8 mg/kg', frequency: 'PO single dose or divided q12h', duration: '3-5 days', aware: 'Watch' },
      { type: 'preferred', drug: 'Nitrofurantoin', dose: '1.25-1.75 mg/kg', frequency: 'PO q6h', duration: '5-7 days', aware: 'Access' },
      { type: 'alternative', drug: 'Cotrimoxazole', dose: '4 mg/kg of TMP', frequency: 'PO q12h', duration: '3-5 days', aware: 'Access' }
    ],
    comments: 'Confirm UTI and take sample for culture before starting. High rates of resistance to Ampicillin and Cotrimoxazole, adjust according to antibiogram.'
  },
  {
    id: 'ped-pyelonephritis',
    section: 'pediatric',
    categoryId: 'urinary',
    name: 'Acute Pyelonephritis',
    subType: 'Severe or suspected bacteremia',
    organisms: ['Escherichia coli'],
    treatments: [
      { type: 'preferred', drug: 'Ceftriaxone', dose: '75 mg/kg', frequency: 'IV q24h', duration: '10-14 days', aware: 'Watch' },
      { type: 'preferred', drug: 'Gentamicin (OR)', dose: '7.5 mg/kg', frequency: 'IV q24h', duration: '10-14 days', aware: 'Access' }
    ]
  },

  // --- BONE AND JOINT ---
  {
    id: 'ped-septic-arthritis',
    section: 'pediatric',
    categoryId: 'bone_joint', // Let's explicitly define this in the component filter if absent
    name: 'Septic Arthritis / Osteomyelitis',
    subType: 'Children > 3 months',
    organisms: ['Staphylococcus aureus', 'Kingella kingae', 'Group A Streptococcus'],
    treatments: [
      { type: 'preferred', drug: 'Cloxacillin', dose: '50 mg/kg', frequency: 'IV q6h', duration: '3-4 weeks', aware: 'Access' },
      { type: 'preferred', drug: 'Ceftriaxone (PLUS)', dose: '50-75 mg/kg', frequency: 'IV q24h', duration: '3-4 weeks', aware: 'Watch' },
      { type: 'alternative', condition: 'MRSA Suspected', drug: 'Vancomycin', dose: '15 mg/kg', frequency: 'IV q6h', duration: '3-4 weeks', aware: 'Watch' }
    ],
    comments: 'Requires surgical drainage / joint lavage. Switch to oral antibiotics (e.g., Cephalexin or Clindamycin) once clinically improved with decreasing CRP.'
  }
];
