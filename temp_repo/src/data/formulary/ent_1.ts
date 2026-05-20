import { DrugEntry } from '../../types/formulary';

export const ent1Drugs: DrugEntry[] = [
  {
    id: 'ent_101',
    genericName: 'Chloramphenicol (Otic)',
    therapeuticClass: 'Otic Antibiotic',
    categoryId: 'ent',
    indications: ['Otitis Externa', 'Ear infection'],
    dosing: { adult: 'Apply 2-3 drops into the affected ear(s) 2-3 times daily.', pediatric: 'Same as adult.' },
    safety: { adr: ['Transient stinging', 'Sensitization'], contraindications: ['Perforated tympanic membrane (theoretical risk)'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Warm ear drops to body temperature before use. Avoid touching the dropper tip to the ear.',
    pharmacy: { strengths: ['5% drops'], dosageForms: ['Ear Drops'], priceNPR: 'Drops: ~30-50', brandNames: ['Chloromycetin Otic', 'Andrec Ear'] },
    notes: ['Good broad-spectrum coverage for outer ear infections.'],
    searchTags: ['Ear pain', 'Ear infection']
  },
  {
    id: 'ent_102',
    genericName: 'Gentamicin (Otic)',
    therapeuticClass: 'Otic Antibiotic',
    categoryId: 'ent',
    indications: ['Otitis Externa', 'Pseudomonal ear infection'],
    dosing: { adult: 'Apply 2-3 drops into the affected ear(s) 3-4 times daily.', pediatric: 'Same as adult.' },
    safety: { adr: ['Ear burning', 'Irritation'], contraindications: ['**Perforated Eardrum (Tympanic Membrane)**'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Warm ear drops to body temperature before use.',
    pharmacy: { strengths: ['0.3% drops'], dosageForms: ['Ear Drops'], priceNPR: 'Drops: ~40-60', brandNames: ['Garamycin Otic', 'Genticyn'] },
    notes: ['**CRITICAL SAFETY: Gentamicin ear drops are contraindicated if the eardrum is perforated due to severe Ototoxicity (loss of hearing).**'],
    searchTags: ['Ear pain', 'Ear infection']
  },
  {
    id: 'ent_103',
    genericName: 'Ciprofloxacin (Otic)',
    therapeuticClass: 'Otic Antibiotic',
    categoryId: 'ent',
    indications: ['Otitis Externa', 'Otitis Media with tympanostomy tubes'],
    dosing: { adult: 'Apply 3-4 drops into the affected ear(s) twice daily for 7 days.', pediatric: 'Children > 1 year: Same as adult.' },
    safety: { adr: ['Ear discomfort', 'Pruritus'], contraindications: ['Hypersensitivity to quinolones'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Warm ear drops to body temperature before use. Avoid touching the dropper tip to the ear.',
    pharmacy: { strengths: ['0.3% drops'], dosageForms: ['Ear Drops'], priceNPR: 'Drops: ~50-80', brandNames: ['Ciplox', 'Zoxan'] },
    notes: ['Safe to use even if the eardrum is perforated (unlike aminoglycosides). Often combined with dexamethasone.'],
    searchTags: ['Ear pain', 'Ear discharge']
  },
  {
    id: 'ent_104',
    genericName: 'Neomycin + Polymyxin B + Hydrocortisone (Otic)',
    therapeuticClass: 'Otic Antibiotic / Corticosteroid',
    categoryId: 'ent',
    indications: ['Otitis Externa with severe inflammation'],
    dosing: { adult: 'Apply 3-4 drops into the affected ear(s) 3-4 times daily for max 10 days.', pediatric: 'Same as adult.' },
    safety: { adr: ['Neomycin allergy (redness, swelling)', 'Ototoxicity if TM perforated'], contraindications: ['**Perforated Eardrum**', 'Viral/Fungal ear infections'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Warm ear drops to body temperature before use.',
    pharmacy: { strengths: ['Combo drops (10ml)'], dosageForms: ['Ear Drops'], priceNPR: 'Drops: ~60-100', brandNames: ['Neosporin-H', 'Otosporin'] },
    notes: ['**CRITICAL SAFETY: Contraindicated in perforated eardrums due to Neomycin ototoxicity.** Stop if skin allergy worsens.'],
    searchTags: ['Ear pain', 'Swimmers ear']
  },
  {
    id: 'ent_105',
    genericName: 'Dexamethasone (Otic)',
    therapeuticClass: 'Otic Corticosteroid',
    categoryId: 'ent',
    indications: ['Ear canal inflammation', 'Eczema of the external ear'],
    dosing: { adult: 'Apply 2-3 drops into the affected ear(s) 3-4 times daily.', pediatric: 'Same as adult.' },
    safety: { adr: ['Secondary infection', 'Local irritation'], contraindications: ['Tympanic membrane perforation'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Usually given in combination with an antibiotic. Warm ear drops to body temperature.',
    pharmacy: { strengths: ['0.1% drops'], dosageForms: ['Ear Drops'], priceNPR: 'Drops: ~40-70', brandNames: ['Decadron Ear'] },
    notes: ['Reduces swelling to allow topical antibiotics to penetrate.'],
    searchTags: ['Itchy ear', 'Ear inflammation']
  },
  {
    id: 'ent_106',
    genericName: 'Betamethasone (Otic)',
    therapeuticClass: 'Otic Corticosteroid',
    categoryId: 'ent',
    indications: ['Allergic otitis externa', 'Severe pruritus of the ear'],
    dosing: { adult: 'Apply 2-3 drops 2-3 times daily.', pediatric: 'Same as adult.' },
    safety: { adr: ['Atrophy of ear canal skin with prolonged use'], contraindications: ['Active untreated ear infection'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Do not use for more than 7-10 days without re-evaluating.',
    pharmacy: { strengths: ['0.1% drops'], dosageForms: ['Ear Drops'], priceNPR: 'Drops: ~50-80', brandNames: ['Betnesol Ear'] },
    notes: ['Highly potent, excellent for intensely itchy ears where infection has been ruled out.'],
    searchTags: ['Itchy ear', 'Severe ear itch']
  }
];
