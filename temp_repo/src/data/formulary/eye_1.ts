import { DrugEntry } from '../../types/formulary';

export const eye1Drugs: DrugEntry[] = [
  // Anti-infective: Antibacterials
  {
    id: 'eye_101',
    genericName: 'Chloramphenicol (Ophthalmic)',
    therapeuticClass: 'Broad-spectrum Antibiotic',
    categoryId: 'eye',
    indications: ['Bacterial Conjunctivitis', 'Corneal ulcer', 'Pink eye', 'Red eye'],
    dosing: { adult: '1 drop Q2H for active infection, then QID. Ointment: At night or TID-QID.', pediatric: 'Same as adult.' },
    safety: { adr: ['Stinging', 'Rare: bone marrow aplasia (theoretical from eye drops)'], contraindications: ['Personal or family history of blood dyscrasias'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Apply ointment at bedtime to provide overnight cover and avoid daytime blurred vision.',
    pharmacy: { strengths: ['0.5% drops', '1% ointment'], dosageForms: ['Eye Drops', 'Eye Ointment'], priceNPR: 'Drops: ~30-50', brandNames: ['Andrec', 'Chloromycetin'] },
    notes: ['Classic treatment for superficial eye infections.'],
    searchTags: ['Red eye', 'Pink eye', 'Infection', 'Conjunctivitis']
  },
  {
    id: 'eye_102',
    genericName: 'Gentamicin (Ophthalmic)',
    therapeuticClass: 'Aminoglycoside Antibiotic',
    categoryId: 'eye',
    indications: ['Bacterial Conjunctivitis', 'Blepharitis', 'Corneal ulcer'],
    dosing: { adult: '1-2 drops up to 6 times daily. Ointment 2-3 times daily.', pediatric: 'Same as adult.' },
    safety: { adr: ['Keratoconjunctivitis', 'Local irritation'], contraindications: ['Hypersensitivity to aminoglycosides'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Drop frequency can be increased to every hour in severe infections.',
    pharmacy: { strengths: ['0.3% drops', '0.3% ointment'], dosageForms: ['Eye Drops', 'Eye Ointment'], priceNPR: 'Drops: ~40-60', brandNames: ['Garamycin', 'Genticyn'] },
    notes: ['Can delay corneal healing if used prolonged.'],
    searchTags: ['Red eye', 'Infection', 'Conjunctivitis']
  },
  {
    id: 'eye_103',
    genericName: 'Tobramycin (Ophthalmic)',
    therapeuticClass: 'Aminoglycoside Antibiotic',
    categoryId: 'eye',
    indications: ['Bacterial Conjunctivitis', 'Corneal ulcer'],
    dosing: { adult: '1-2 drops Q4H. Severe: 2 drops Q1H until improvement.', pediatric: 'Same as adult.' },
    safety: { adr: ['Local toxicity', 'Hypersensitivity'], contraindications: ['Hypersensitivity to aminoglycosides'], pregnancyLactation: 'Category B.' },
    administrationNote: 'Apply pressure to the lacrimal sac for 2 minutes post instillation.',
    pharmacy: { strengths: ['0.3% drops', '0.3% ointment'], dosageForms: ['Eye Drops', 'Eye Ointment'], priceNPR: 'Drops: ~60-90', brandNames: ['Toba', 'Tobacin'] },
    notes: ['Better activity against Pseudomonas than gentamicin.'],
    searchTags: ['Red eye', 'Infection']
  },
  {
    id: 'eye_104',
    genericName: 'Moxifloxacin (Ophthalmic)',
    therapeuticClass: 'Fluoroquinolone Antibiotic',
    categoryId: 'eye',
    indications: ['Bacterial Conjunctivitis', 'Corneal ulcer', 'Post-op prophylaxis'],
    dosing: { adult: '1 drop TID for 7 days.', pediatric: 'Children > 1 year: 1 drop TID for 7 days.' },
    safety: { adr: ['Transient visual disturbances', 'Eye pain', 'Tearing'], contraindications: ['Viral/Fungal eye infections'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Space from other eye drops by at least 5 minutes.',
    pharmacy: { strengths: ['0.5% drops (5ml)'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~150-250', brandNames: ['Moxicip', 'Vigamox', 'Mahaflox'] },
    notes: ['Preservative-free formulations available. Broadest spectrum fluoroquinolone.'],
    searchTags: ['Red eye', 'Pink eye', 'Corneal ulcer']
  },
  {
    id: 'eye_105',
    genericName: 'Erythromycin (Ophthalmic)',
    therapeuticClass: 'Macrolide Antibiotic',
    categoryId: 'eye',
    indications: ['Neonatal conjunctivitis prophylaxis', 'Blepharoconjunctivitis'],
    dosing: { adult: 'Apply 1cm ribbon of ointment up to 6 times daily.', pediatric: 'Neonatal prophylaxis: 1cm ribbon into each conjunctival sac once.' },
    safety: { adr: ['Minor ocular irritation'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category B.' },
    administrationNote: 'Apply ointment at bedtime for blepharitis.',
    pharmacy: { strengths: ['0.5% ointment'], dosageForms: ['Eye Ointment'], priceNPR: 'Ointment: ~50-80', brandNames: ['Ilotycin'] },
    notes: ['Very safe, often used in neonates to prevent Chlamydia/Gonorrhea ophthalmia neonatorum.'],
    searchTags: ['Baby', 'Neonatal eye', 'Red eye']
  },
  {
    id: 'eye_106',
    genericName: 'Neomycin + Polymyxin B (Ophthalmic)',
    therapeuticClass: 'Combination Antibiotic',
    categoryId: 'eye',
    indications: ['Bacterial conjunctivitis', 'Blepharitis'],
    dosing: { adult: '1-2 drops up to 6 times daily.', pediatric: 'Same as adult.' },
    safety: { adr: ['High rate of allergic contact dermatitis (due to Neomycin)'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Monitor for increasing redness/swelling as it could be Neomycin allergy, not infection worsening.',
    pharmacy: { strengths: ['Drops/Ointment combinations'], dosageForms: ['Eye Drops', 'Eye Ointment'], priceNPR: 'Varies', brandNames: ['Neosporin ophthalmic'] },
    notes: ['Often combined with steroids (e.g., Dexamethasone). Beware of allergy.'],
    searchTags: ['Red eye', 'Pink eye', 'Infection']
  },
  {
    id: 'eye_107',
    genericName: 'Ofloxacin (Ophthalmic)',
    therapeuticClass: 'Fluoroquinolone Antibiotic',
    categoryId: 'eye',
    indications: ['Corneal ulcers', 'Bacterial conjunctivitis'],
    dosing: { adult: 'Conjunctivitis: 1-2 drops Q2-4H for 2 days, then QID for 5 days. Ulcer: Intense regimen.', pediatric: 'Children > 1 yr: Same as adult.' },
    safety: { adr: ['Transient burning', 'Photophobia'], contraindications: ['Viral/Fungal eye infections'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Do not touch eye or lashes with dropper tip.',
    pharmacy: { strengths: ['0.3% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~50-80', brandNames: ['Oflox', 'Zenflox'] },
    notes: ['Alternative to Ciprofloxacin.'],
    searchTags: ['Red eye', 'Conjunctivitis']
  },
  {
    id: 'eye_108',
    genericName: 'Acyclovir (Ophthalmic)',
    therapeuticClass: 'Antiviral',
    categoryId: 'eye',
    indications: ['Herpes simplex keratitis'],
    dosing: { adult: '1cm ribbon of ointment 5 times daily (Q4H) until 3 days after healing.', pediatric: 'Same as adult.' },
    safety: { adr: ['Transient stinging', 'Superficial punctate keratopathy (SPK)'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category B.' },
    administrationNote: 'Apply into the lower conjunctival sac. May cause temporary blurred vision.',
    pharmacy: { strengths: ['3% eye ointment (3g tube)'], dosageForms: ['Eye Ointment'], priceNPR: 'Tube: ~100-150', brandNames: ['Acivir Eye', 'Zovirax'] },
    notes: ['Essential for dendritic ulcers. **NEVER use steroids in active herpes simplex keratitis.**'],
    searchTags: ['Herpes', 'Red eye', 'Corneal ulcer', 'Viral']
  },
  {
    id: 'eye_109',
    genericName: 'Natamycin (Ophthalmic)',
    therapeuticClass: 'Antifungal',
    categoryId: 'eye',
    indications: ['Fungal keratitis (especially Aspergillus/Fusarium)'],
    dosing: { adult: 'Fungal keratitis: 1 drop Q1-2H for first 3-4 days, then taper to 1 drop 6-8 times daily.', pediatric: 'Same as adult.' },
    safety: { adr: ['Conjunctival chemosis', 'Hyperemia'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Shake the suspension well before each use.',
    pharmacy: { strengths: ['5% eye drops suspension (15ml)'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~300-400', brandNames: ['Natamet', 'Natadrops'] },
    notes: ['First-line therapy for filamentous fungal ulcers (common after agricultural trauma).'],
    searchTags: ['Fungal ulcer', 'Agricultural injury', 'Corneal ulcer']
  }
];
