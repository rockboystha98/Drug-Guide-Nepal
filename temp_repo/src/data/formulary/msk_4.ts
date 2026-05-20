import { DrugEntry } from '../../types/formulary';

export const msk4Drugs: DrugEntry[] = [
  // SKELETAL MUSCLE RELAXANTS
  {
    id: 'msk_024',
    genericName: 'Baclofen',
    therapeuticClass: 'Centrally Acting Muscle Relaxant',
    categoryId: 'msk',
    indications: ['Spasticity (e.g., Multiple Sclerosis, Spinal cord lesions)', 'Muscle spasms'],
    dosing: { adult: 'PO: 5 mg TID, gradually increased every 3 days. Max 80 mg/day.', pediatric: 'PO: >10 yrs: Max 60 mg/day.' },
    safety: { adr: ['Drowsiness / Sedation', 'Muscle weakness', 'Hypotension'], contraindications: ['Active peptic ulcer'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['10mg, 20mg tab'], dosageForms: ['Tablet'], priceNPR: '10mg tab: ~5-10', brandNames: ['Liofen', 'Riclofen'] },
    notes: ['Do not withdraw abruptly (risk of severe spasticity/seizures).'],
    searchTags: ['Spasm', 'Muscle catch', 'Stiffness']
  },
  {
    id: 'msk_025',
    genericName: 'Tizanidine',
    therapeuticClass: 'Centrally Acting Muscle Relaxant (Alpha-2 Agonist)',
    categoryId: 'msk',
    indications: ['Spasticity', 'Muscle spasms associated with musculoskeletal conditions'],
    dosing: { adult: 'PO: 2 mg initially (once daily or TID), titrate up to 24 mg/day.', pediatric: 'Not recommended.' },
    safety: { adr: ['Sedation', 'Dry mouth', 'Hypotension', 'Hepatotoxicity'], contraindications: ['Severe hepatic impairment', 'Coadministration with fluvoxamine/ciprofloxacin'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['2mg, 4mg tab'], dosageForms: ['Tablet'], priceNPR: '2mg tab: ~3-5', brandNames: ['Tizan', 'Sirdalud'] },
    notes: ['Monitor LFTs. Frequently prescribed with NSAIDs for acute back spasms.'],
    searchTags: ['Spasm', 'Muscle catch', 'Back pain']
  },
  {
    id: 'msk_026',
    genericName: 'Midazolam (Muscle Relaxant / Sedative)',
    therapeuticClass: 'Benzodiazepine',
    categoryId: 'msk',
    indications: ['Status epilepticus', 'Procedural sedation', 'Refractory muscle spasms (e.g., Tetanus)'],
    dosing: { adult: 'IV/IM: Highly variable based on indication.', pediatric: 'Variable based on indication.' },
    safety: { adr: ['Respiratory depression', 'Hypotension', 'Sedation'], contraindications: ['Acute narrow-angle glaucoma', 'Shock'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['1mg/ml, 5mg/ml ampoules'], dosageForms: ['Injection'], priceNPR: '1mg/ml amp: ~15-25', brandNames: ['Mezolam', 'Fulsed'] },
    notes: ['In MSK contexts, usually reserved for severe hospital-managed spasms like tetanus, not for outpatient back pain.'],
    searchTags: ['Spasm', 'Tetanus', 'Sedation']
  },

  // TOPICAL PREPARATIONS
  {
    id: 'msk_027',
    genericName: 'Diclofenac (Topical)',
    therapeuticClass: 'Topical NSAID',
    categoryId: 'msk',
    indications: ['Localized musculoskeletal pain', 'Sprains/Strains', 'Mild osteoarthritis'],
    dosing: { adult: 'Topical: Apply gently to affected area 3-4 times a day.', pediatric: 'Topical: Use sparingly in older children.' },
    safety: { adr: ['Local skin irritation', 'Contact dermatitis'], contraindications: ['Application to broken skin/wounds'], pregnancyLactation: 'Category C (D in 3rd trimester - low systemic absorption but caution advised).' },
    pharmacy: { strengths: ['1% Gel (Often combined with Methyl Salicylate/Menthol)'], dosageForms: ['Topical Gel'], priceNPR: '30g tube: ~80-150', brandNames: ['Volini', 'Relaxyl', 'Voveran Emulgel'] },
    notes: ['Good alternative to systemic NSAIDs for localized pain to minimize GI/renal risks.'],
    searchTags: ['Pain', 'Joint pain', 'Sprain', 'Ointment']
  }
];
