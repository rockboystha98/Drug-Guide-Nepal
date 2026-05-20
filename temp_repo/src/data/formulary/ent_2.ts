import { DrugEntry } from '../../types/formulary';

export const ent2Drugs: DrugEntry[] = [
  // Wax Softeners
  {
    id: 'ent_107',
    genericName: 'Hydrogen Peroxide (Otic)',
    therapeuticClass: 'Cerumenolytic (Wax Softener)',
    categoryId: 'ent',
    indications: ['Impacted Ear Wax'],
    dosing: { adult: 'Apply 3-4 drops (often diluted 1:1 with warm water) into the ear BID for 3-4 days.', pediatric: 'Same as adult.' },
    safety: { adr: ['Bubbling sensation', 'Mild irritation'], contraindications: ['Perforated Eardrum'], pregnancyLactation: 'Category A.' },
    administrationNote: 'Warm ear drops to body temperature before use. Will hear a crackling/bubbling sound as it works.',
    pharmacy: { strengths: ['3% solution'], dosageForms: ['Ear Drops'], priceNPR: 'Drops: ~30-50', brandNames: ['H2O2'] },
    notes: ['Excellent to loosen hard wax before syringing. Do not use if eardrum is ruptured.'],
    searchTags: ['Wax', 'Blocked ear']
  },
  {
    id: 'ent_108',
    genericName: 'Sodium Bicarbonate (Otic)',
    therapeuticClass: 'Cerumenolytic (Wax Softener)',
    categoryId: 'ent',
    indications: ['Impacted Ear Wax'],
    dosing: { adult: 'Apply 3-4 drops into the ear BID for 3-5 days prior to syringing.', pediatric: 'Same as adult.' },
    safety: { adr: ['Ear dryness'], contraindications: ['Perforated Eardrum'], pregnancyLactation: 'Category A.' },
    administrationNote: 'Warm ear drops to body temperature before use.',
    pharmacy: { strengths: ['5% drops'], dosageForms: ['Ear Drops'], priceNPR: 'Drops: ~20-40', brandNames: ['Soliwax', 'Bicarb'] },
    notes: ['Gentle, effective wax softener. Usually needs syringing afterwards.'],
    searchTags: ['Wax', 'Blocked ear']
  },
  {
    id: 'ent_109',
    genericName: 'Paradichlorobenzene + Benzocaine + Chlorbutol',
    therapeuticClass: 'Cerumenolytic (Wax Softener)',
    categoryId: 'ent',
    indications: ['Impacted Ear Wax', 'Ear ache'],
    dosing: { adult: '2-3 drops in affected ear BID-TID for 3-5 days prior to syringing.', pediatric: 'Same as adult.' },
    safety: { adr: ['Local irritation', 'Burning sensation'], contraindications: ['Perforated Eardrum', 'Otitis Media'], pregnancyLactation: 'Safe locally.' },
    administrationNote: 'Warm ear drops to body temperature before use.',
    pharmacy: { strengths: ['Ear Drop solution (10ml)'], dosageForms: ['Ear Drops'], priceNPR: 'Drops: ~60-90', brandNames: ['Clearwax', 'Otorex'] },
    notes: ['Never use in a discharging ear or if eardrum perforation is suspected.'],
    searchTags: ['Wax', 'Ear ache']
  },
  // Nasal Decongestants
  {
    id: 'ent_110',
    genericName: 'Xylometazoline',
    therapeuticClass: 'Topical Nasal Decongestant',
    categoryId: 'ent',
    indications: ['Nasal Congestion', 'Allergic Rhinitis', 'Sinusitis'],
    dosing: { adult: '0.1% drops/spray: 1-2 sprays/drops in each nostril TID PRN for MAX 5 days.', pediatric: 'Children 2-12 yrs: 0.05% drops: 1-2 drops BID for MAX 5 days. CI in < 2 yrs.' },
    safety: { adr: ['**Rhinitis Medicamentosa (Rebound congestion)**', 'Nasal burning', 'Stinging'], contraindications: ['Use > 5-7 days', 'Trans-sphenoidal hypophysectomy'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Prime the spray pump before first use. Avoid touching the dropper tip to the nose.',
    pharmacy: { strengths: ['0.05% (Pediatric)', '0.1% (Adult)'], dosageForms: ['Nasal Drops', 'Nasal Spray'], priceNPR: 'Spray: ~50-80', brandNames: ['Otrivin', 'Xylomist'] },
    notes: ['**CRITICAL SAFETY: Instruct patient strictly to not use for more than 3-5 days to prevent Rhinitis Medicamentosa (rebound congestion).**'],
    searchTags: ['Blocked nose', 'Congestion', 'Cold']
  },
  {
    id: 'ent_111',
    genericName: 'Oxymetazoline',
    therapeuticClass: 'Topical Nasal Decongestant',
    categoryId: 'ent',
    indications: ['Nasal Congestion', 'Allergic Rhinitis'],
    dosing: { adult: '0.05% spray: 2-3 sprays in each nostril BID for MAX 3-5 days.', pediatric: 'Children > 6 yrs: Same as adult.' },
    safety: { adr: ['**Rhinitis Medicamentosa**', 'Sneezing', 'Dryness'], contraindications: ['Use > 5 days'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Longer acting than Xylometazoline (12 hours vs 8 hours). Avoid touching tip to nose.',
    pharmacy: { strengths: ['0.025%', '0.05%'], dosageForms: ['Nasal Spray'], priceNPR: 'Spray: ~60-90', brandNames: ['Nasivion', 'Oxyspray'] },
    notes: ['**CRITICAL SAFETY: Maximum use of 3-5 days to prevent rebound congestion.**'],
    searchTags: ['Blocked nose', 'Congestion']
  },
  {
    id: 'ent_112',
    genericName: 'Pseudoephedrine',
    therapeuticClass: 'Systemic Decongestant',
    categoryId: 'ent',
    indications: ['Nasal Congestion', 'Eustachian tube congestion'],
    dosing: { adult: 'PO: 60 mg every 4-6 hours (max 240 mg/day).', pediatric: 'PO (Children 6-12 yrs): 30 mg every 4-6 hours.' },
    safety: { adr: ['**Hypertension**', 'Tachycardia', 'Insomnia', 'Anxiety'], contraindications: ['**Hypertensive patients**', 'Severe CAD', 'Within 14 days of MAOI therapy'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Do not take at bedtime to avoid insomnia.',
    pharmacy: { strengths: ['60mg tab', '30mg/5ml syrup'], dosageForms: ['Tablet', 'Syrup'], priceNPR: 'Tablet: ~5-10', brandNames: ['Sudafed', 'Sinarest (Combo)'] },
    notes: ['**CRITICAL SAFETY: Always check blood pressure before recommending; contraindicated in moderate-to-severe hypertension.** Often abused as a precursor for methamphetamine.'],
    searchTags: ['Blocked nose', 'Cold', 'Sinus']
  }
];
