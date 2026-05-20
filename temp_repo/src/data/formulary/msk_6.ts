import { DrugEntry } from '../../types/formulary';

export const msk6Drugs: DrugEntry[] = [
  {
    id: 'msk_041',
    genericName: 'Aspirin (Analgesic)',
    therapeuticClass: 'Non-selective NSAID',
    categoryId: 'msk',
    indications: ['Mild to moderate pain', 'Fever', 'Rheumatic fever'],
    dosing: { adult: 'PO: 300-600 mg every 4-6 hours. Post-meal.', pediatric: 'PO: Avoid in children <16 years (Reye’s syndrome risk).' },
    safety: { adr: ['**GI Bleeding / Peptic ulcers**', 'Tinnitus (in overdose)'], contraindications: ['Children <16 yrs for viral fevers', 'Active PUD', 'Asthma with nasal polyps'], pregnancyLactation: 'Category D (in 3rd trimester).' },
    pharmacy: { strengths: ['300mg, 500mg tab'], dosageForms: ['Tablet'], priceNPR: '300mg tab: ~1', brandNames: ['Disprin', 'Micropirin'] },
    notes: ['**CRITICAL ALERT: Avoid "NSAID Stacking".** Take post-meal. Reye’s syndrome risk in pediatrics makes ibuprofen or paracetamol preferred.'],
    searchTags: ['Pain', 'Fever', 'Joint pain']
  },
  {
    id: 'msk_042',
    genericName: 'Chlorzoxazone',
    therapeuticClass: 'Centrally Acting Muscle Relaxant',
    categoryId: 'msk',
    indications: ['Muscle spasms associated with acute musculoskeletal conditions'],
    dosing: { adult: 'PO: 250-500 mg TID or QID.', pediatric: 'Not routinely recommended.' },
    safety: { adr: ['Drowsiness', 'Hepatotoxicity (rare but serious)', 'Urine discoloration'], contraindications: ['Hepatic impairment'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['250mg tab (often combo with diclofenac/paracetamol)'], dosageForms: ['Tablet'], priceNPR: 'Combo tab: ~5-10', brandNames: ['Parafon DSC', 'Myospaz'] },
    notes: ['Usually found in combination tablets with NSAIDs in the Nepalese market (e.g., Diclofenac + Paracetamol + Chlorzoxazone).'],
    searchTags: ['Spasm', 'Muscle catch', 'Back pain']
  },
  {
    id: 'msk_043',
    genericName: 'Eperisone',
    therapeuticClass: 'Centrally Acting Muscle Relaxant',
    categoryId: 'msk',
    indications: ['Spasticity', 'Musculoskeletal spasms (e.g., cervical spondylosis)'],
    dosing: { adult: 'PO: 50 mg TID after meals.', pediatric: 'Not recommended.' },
    safety: { adr: ['Stomach ache', 'Nausea', 'Drowsiness (less than other relaxants)'], contraindications: ['Severe hepatic/renal impairment'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['50mg tab'], dosageForms: ['Tablet'], priceNPR: '50mg tab: ~10', brandNames: ['Myonal', 'Eperis'] },
    notes: ['Considered to have relatively lower sedative effects compared to tizanidine or baclofen.'],
    searchTags: ['Spasm', 'Neck pain', 'Stiffness']
  }
];
