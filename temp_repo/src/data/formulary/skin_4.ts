import { DrugEntry } from '../../types/formulary';

export const skin4Drugs: DrugEntry[] = [
  // Vitamin D Analogues
  {
    id: 'skn_035',
    genericName: 'Calcipotriol (Calcipotriene)',
    vehicleType: 'Ointment / Scalp Solution',
    therapeuticClass: 'Vitamin D3 Analogue',
    categoryId: 'skin',
    indications: ['Plaque Psoriasis (mild to moderate)', 'Scalp Psoriasis'],
    dosing: { adult: 'Apply to affected areas twice daily. Max weekly dose: 100g.', pediatric: 'Children > 6 yrs: Dose depends on age/weight. Seek specialist advice.' },
    safety: { adr: ['Skin irritation', 'Erythema', 'Hypercalcemia (rare, if max dose exceeded)'], contraindications: ['Hypercalcemia', 'Severe liver/kidney disease', 'Facial application'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Wash hands after use. Often combined with potent steroids (e.g., Betamethasone) for enhanced efficacy.',
    pharmacy: { strengths: ['0.005% Ointment'], dosageForms: ['Ointment', 'Solution'], priceNPR: 'Tube: ~200-300', brandNames: ['Sorvate', 'Daivonex'] },
    notes: ['Do not use simultaneously with salicylic acid as it inactivates calcipotriol.'],
    searchTags: ['Psoriasis']
  },
  // Acne Specifics
  {
    id: 'skn_036',
    genericName: 'Clindamycin (Topical)',
    vehicleType: 'Gel / Solution',
    therapeuticClass: 'Topical Lincosamide Antibiotic',
    categoryId: 'skin',
    indications: ['Acne Vulgaris (inflammatory)'],
    dosing: { adult: 'Apply a thin film twice daily.', pediatric: 'Children > 12 yrs: Same as adult.' },
    safety: { adr: ['Dryness', 'Erythema', 'Peeling', 'Pseudomembranous colitis (rare systemic absorption)'], contraindications: ['History of regional enteritis/ulcerative colitis'], pregnancyLactation: 'Category B.' },
    administrationNote: 'Clean and dry face before application. To prevent bacterial resistance, DO NOT use as monotherapy; always combine with Benzoyl Peroxide or a Retinoid.',
    pharmacy: { strengths: ['1% Gel/Solution'], dosageForms: ['Gel', 'Solution'], priceNPR: 'Tube: ~90-150', brandNames: ['Clindac A', 'Erytop'] },
    notes: ['Resistance is a major issue if used alone for acne.'],
    searchTags: ['Acne', 'Pimples']
  },
  {
    id: 'skn_037',
    genericName: 'Benzoyl Peroxide with Clindamycin',
    vehicleType: 'Gel',
    therapeuticClass: 'Topical Antibiotic + Keratolytic Combo',
    categoryId: 'skin',
    indications: ['Acne Vulgaris (mild to moderate inflammatory)'],
    dosing: { adult: 'Apply a pea-sized amount to the face once daily at bedtime.', pediatric: 'Children > 12 yrs: Same as adult.' },
    safety: { adr: ['Dry skin', 'Erythema', 'Peeling', 'Bleaching of hair/clothing'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Will bleach towels, pillowcases, and clothing. Apply at night.',
    pharmacy: { strengths: ['Clindamycin 1% + Benzoyl Peroxide 2.5% or 5%'], dosageForms: ['Gel'], priceNPR: 'Tube: ~200-350', brandNames: ['Clindoxyl', 'Faceclin'] },
    notes: ['BP prevents P. acnes from developing resistance to Clindamycin. Highly effective combo.'],
    searchTags: ['Acne', 'Pimples', 'Inflammatory acne']
  },
  {
    id: 'skn_038',
    genericName: 'Azelaic Acid',
    vehicleType: 'Cream / Gel',
    therapeuticClass: 'Dicarboxylic Acid (Antimicrobial/Comedolytic)',
    categoryId: 'skin',
    indications: ['Acne Vulgaris', 'Rosacea', 'Post-inflammatory hyperpigmentation'],
    dosing: { adult: 'Apply twice daily.', pediatric: 'Children > 12 yrs: Same as adult.' },
    safety: { adr: ['Stinging', 'Burning', 'Pruritus', 'Hypopigmentation'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category B.' },
    administrationNote: 'Safe to use in pregnancy (Category B). May take 4-8 weeks to see clinical improvement.',
    pharmacy: { strengths: ['10%, 15%, 20% Cream/Gel'], dosageForms: ['Cream', 'Gel'], priceNPR: 'Tube: ~250-400', brandNames: ['Aziderm', 'Ezanic'] },
    notes: ['Excellent choice for pregnant patients with acne or for treating post-acne dark marks (hyperpigmentation).'],
    searchTags: ['Acne', 'Rosacea', 'Dark spots', 'Pigmentation']
  },
  // Miscellaneous / Cleansers
  {
    id: 'skn_039',
    genericName: 'Salicylic Acid',
    vehicleType: 'Ointment / Lotion / Soap',
    therapeuticClass: 'Keratolytic',
    categoryId: 'skin',
    indications: ['Acne', 'Psoriasis (scale removal)', 'Warts', 'Corns and calluses'],
    dosing: { adult: 'Acne: 1-2% washes/lotions daily. Warts/Corns: 12-40% applied locally.', pediatric: 'Use with caution. Absorption can cause toxicity (salicylism) in young children.' },
    safety: { adr: ['Local irritation', 'Peeling', 'Salicylism (if applied over large areas)'], contraindications: ['Children < 2 yrs', 'Diabetics (for foot warts/corns)'], pregnancyLactation: 'Category C.' },
    administrationNote: 'For warts/corns, protect surrounding skin. Soak area in warm water before application.',
    pharmacy: { strengths: ['1-40% various preparations'], dosageForms: ['Ointment', 'Solution', 'Soap'], priceNPR: 'Varialbe (~100-300)', brandNames: ['Salicylix', 'Duofilm'] },
    notes: ['A classic peeling agent. Enhances penetration of other drugs (like topical steroids) when combined.'],
    searchTags: ['Wart', 'Corn', 'Acne', 'Scaling']
  },
  {
    id: 'skn_040',
    genericName: 'Potassium Permanganate',
    vehicleType: 'Crystals / Solution',
    therapeuticClass: 'Astringent / Antiseptic',
    categoryId: 'skin',
    indications: ['Weeping/oozing eczema', 'Foul-smelling foot infections', 'Acute dermatoses'],
    dosing: { adult: 'Dilute to 1:10,000 (pale pink color). Use as a wet compress or foot soak for 10-15 minutes, 1-2 times daily.', pediatric: 'Same as adult.' },
    safety: { adr: ['Brown staining of skin/nails', 'Chemical burns if crystals un-dissolved or solution too concentrated'], contraindications: ['Dry skin conditions'], pregnancyLactation: 'Category C.' },
    administrationNote: 'MUST be heavily diluted until it is pale pink. Dark purple solutions cause severe burns.',
    pharmacy: { strengths: ['Pure crystals or 1:10,000 solution'], dosageForms: ['Crystals'], priceNPR: 'Bottle: ~50-80', brandNames: ['KMnO4'] },
    notes: ['Excellent cheap drying agent for severely weeping, infected eczema. Will stain everything.'],
    searchTags: ['Oozing', 'Infection', 'Soak']
  },
  {
    id: 'skn_041',
    genericName: 'Selenium Sulphide',
    vehicleType: 'Lotion / Shampoo',
    therapeuticClass: 'Antifungal / Antiseborrheic',
    categoryId: 'skin',
    indications: ['Tinea versicolor', 'Dandruff', 'Seborrheic dermatitis'],
    dosing: { adult: 'Tinea versicolor: Apply to body, leave 10 mins, rinse. Daily for 7 days. Dandruff: Twice weekly.', pediatric: 'Children > 5 yrs: Same as adult.' },
    safety: { adr: ['Skin irritation', 'Hair discoloration/loss', 'Increased scalp oiliness'], contraindications: ['Acute inflammation', 'Open wounds'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Rinse thoroughly from hair, especially highlighted/dyed hair, as it can discolor it.',
    pharmacy: { strengths: ['2.5% Lotion/Shampoo'], dosageForms: ['Shampoo', 'Lotion'], priceNPR: 'Bottle: ~150-250', brandNames: ['Selsun'] },
    notes: ['Smells strongly of sulfur. A highly effective older treatment for Tinea Versicolor.'],
    searchTags: ['Dandruff', 'Fungal', 'White spots']
  }
];
