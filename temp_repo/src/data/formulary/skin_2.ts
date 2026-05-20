import { DrugEntry } from '../../types/formulary';

export const skin2Drugs: DrugEntry[] = [
  // Parasitic Skin Infections
  {
    id: 'skn_017',
    genericName: 'Permethrin',
    vehicleType: 'Cream / Lotion / Soap',
    therapeuticClass: 'Topical Scabicide / Pediculicide',
    categoryId: 'skin',
    indications: ['Scabies', 'Pediculosis (Lice)'],
    dosing: { adult: 'Scabies: Apply 5% cream to entire body from neck down, wash off after 8-14 hours. Repeat in 1 week if needed.', pediatric: 'Scabies (> 2 months): Same as adult. Can apply to scalp/face in infants.' },
    safety: { adr: ['Transient burning', 'Stinging', 'Pruritus (may persist for weeks after successful treatment)'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category B. Drug of choice for scabies in pregnancy.' },
    administrationNote: '**CRITICAL INSTRUCTION**: Apply from neck down to the toes. Leave for 8-12 hours. ALL family members/close contacts MUST be treated simultaneously, even if asymptomatic. Wash all clothes/bedding in hot water.',
    pharmacy: { strengths: ['5% Cream', '1% Lotion (Lice)'], dosageForms: ['Cream', 'Lotion'], priceNPR: 'Cream/Lotion: ~70-130', brandNames: ['Scabper', 'Permite'] },
    notes: ['Treating all close contacts at the same time is essential to prevent re-infestation.'],
    searchTags: ['Scabies', 'Itching', 'Lice']
  },
  {
    id: 'skn_018',
    genericName: 'Ivermectin',
    vehicleType: 'Tablet / Cream',
    therapeuticClass: 'Anthelmintic / Scabicide',
    categoryId: 'skin',
    indications: ['Crusted (Norwegian) scabies', 'Refractory scabies', 'Rosacea (Cream)'],
    dosing: { adult: 'PO: 200 mcg/kg as a single dose. Often repeated in 1-2 weeks for scabies.', pediatric: 'PO (Children > 15 kg): 200 mcg/kg single dose.' },
    safety: { adr: ['Mazzotti reaction (fever, rash, lymphadenopathy in mass treatment)', 'Pruritus'], contraindications: ['Pregnancy', 'Children < 15 kg', 'Breastfeeding'], pregnancyLactation: 'Category C (Avoid in pregnancy).' },
    administrationNote: 'Take with water on an empty stomach. Often used in conjunction with topical permethrin for severe scabies outbreaks.',
    pharmacy: { strengths: ['3mg, 6mg, 12mg Tablet', '1% Cream'], dosageForms: ['Tablet', 'Cream'], priceNPR: 'Tablet (12mg): ~30-50', brandNames: ['Ivecop', 'Bandymectin'] },
    notes: ['Highly effective systemic treatment for scabies in endemic communities or institutional settings.'],
    searchTags: ['Scabies', 'Itching', 'Parasite']
  },
  {
    id: 'skn_019',
    genericName: 'Benzyl Benzoate',
    vehicleType: 'Lotion / Emulsion',
    therapeuticClass: 'Topical Scabicide',
    categoryId: 'skin',
    indications: ['Scabies', 'Pediculosis'],
    dosing: { adult: 'Apply 25% emulsion to entire body from neck down. Leave for 24 hours, wash, and repeat for 2-3 consecutive nights.', pediatric: 'Dilute to 12.5% for children, 6.25% for infants.' },
    safety: { adr: ['Intense burning/stinging (especially on excoriated skin)', 'Contact dermatitis'], contraindications: ['Application to inflamed/broken skin'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Apply from neck down. Must be diluted for pediatric use. Treat all family members simultaneously.',
    pharmacy: { strengths: ['25% Lotion/Emulsion (100ml)'], dosageForms: ['Lotion'], priceNPR: 'Bottle: ~50-90', brandNames: ['Ascabiol'] },
    notes: ['An older, cheaper alternative to Permethrin, but causes much more skin irritation and burning.'],
    searchTags: ['Scabies', 'Itching']
  },
  // Viral Skin Infections
  {
    id: 'skn_020',
    genericName: 'Acyclovir (Topical)',
    vehicleType: 'Cream / Ointment',
    therapeuticClass: 'Antiviral',
    categoryId: 'skin',
    indications: ['Herpes simplex virus (HSV) infections of skin and mucous membranes', 'Genital herpes', 'Cold sores'],
    dosing: { adult: 'Apply 5 times daily at 4-hour intervals for 5-10 days.', pediatric: 'Same as adult.' },
    safety: { adr: ['Transient burning', 'Mild pain', 'Erythema/dryness'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category B.' },
    administrationNote: 'Initiate therapy as early as possible following onset of signs/symptoms (prodrome). Apply using a finger cot or rubber glove to prevent transmission.',
    pharmacy: { strengths: ['5% Cream/Ointment'], dosageForms: ['Cream', 'Ointment'], priceNPR: 'Tube: ~80-150', brandNames: ['Acivir', 'Zovirax'] },
    notes: ['Topical therapy is generally less effective than oral acyclovir and is typically reserved for mild localized (cold sore) outbreaks.'],
    searchTags: ['Herpes', 'Cold sore', 'Blisters']
  },
  // Inflammatory CORTICOSTEROIDS
  {
    id: 'skn_021',
    genericName: 'Hydrocortisone',
    vehicleType: 'Cream / Ointment',
    therapeuticClass: 'Topical Corticosteroid (Mild)',
    categoryId: 'skin',
    indications: ['Mild Eczema', 'Contact Dermatitis', 'Intertrigo', 'Diaper dermatitis (sparingly)'],
    dosing: { adult: 'Apply sparingly 1-2 times daily.', pediatric: 'Apply sparingly 1-2 times daily for max 7 days.' },
    safety: { adr: ['Skin atrophy (rare with mild)', 'Striae'], contraindications: ['Untreated bacterial/fungal skin infections'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Use the "Finger Tip Unit" (FTU) concept to measure quantity. Safe for use on the face and flexures for short durations.',
    pharmacy: { strengths: ['1% Cream/Ointment'], dosageForms: ['Cream', 'Ointment'], priceNPR: 'Tube: ~40-70', brandNames: ['Locoid', 'Cort'] },
    notes: ['**CRITICAL ALERT: "Fungal Incognito" - Do not use steroids on undiagnosed fungal rashes (ringworm), it will mask symptoms and exacerbate the infection.**'],
    searchTags: ['Eczema', 'Rash', 'Itching', 'Allergy']
  },
  {
    id: 'skn_022',
    genericName: 'Clobetasone Butyrate',
    vehicleType: 'Cream / Ointment',
    therapeuticClass: 'Topical Corticosteroid (Moderate)',
    categoryId: 'skin',
    indications: ['Moderate Eczema', 'Dermatitis'],
    dosing: { adult: 'Apply sparingly twice daily until improvement occurs.', pediatric: 'Same as adult (avoid long term).' },
    safety: { adr: ['Mild skin thinning with prolonged use'], contraindications: ['Untreated infections', 'Rosacea'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Use FTU measurement. Do not confuse with Clobetasol Propionate (which is Very Potent).',
    pharmacy: { strengths: ['0.05% Cream'], dosageForms: ['Cream'], priceNPR: 'Tube: ~60-100', brandNames: ['Eumosone', 'Clobenate'] },
    notes: ['A safe, moderate-strength steroid suitable for body/limbs but use with caution on the face.'],
    searchTags: ['Eczema', 'Rash', 'Itching']
  },
  {
    id: 'skn_023',
    genericName: 'Mometasone furoate',
    vehicleType: 'Cream / Ointment / Lotion',
    therapeuticClass: 'Topical Corticosteroid (Potent)',
    categoryId: 'skin',
    indications: ['Psoriasis', 'Severe Atopic Dermatitis', 'Lichen planus'],
    dosing: { adult: 'Apply sparingly ONCE daily.', pediatric: 'Children > 2 yrs: Apply sparingly once daily for max 3 weeks.' },
    safety: { adr: ['Skin atrophy', 'Hypopigmentation', 'Striae'], contraindications: ['Acne rosacea', 'Perioral dermatitis', 'Untreated infections'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Has advantage of once-daily dosing. Use FTU measurement.',
    pharmacy: { strengths: ['0.1% Cream/Ointment/Lotion'], dosageForms: ['Cream', 'Ointment', 'Lotion'], priceNPR: 'Tube: ~100-180', brandNames: ['Elocon', 'Momate'] },
    notes: ['Potent steroid. Limit consecutive use to a few weeks to prevent **Steroid-induced Skin Atrophy**.'],
    searchTags: ['Psoriasis', 'Eczema', 'Severe itching']
  },
  {
    id: 'skn_024',
    genericName: 'Fluticasone (Topical)',
    vehicleType: 'Cream / Ointment',
    therapeuticClass: 'Topical Corticosteroid (Potent)',
    categoryId: 'skin',
    indications: ['Moderate to severe eczema', 'Psoriasis'],
    dosing: { adult: 'Apply sparingly 1-2 times daily.', pediatric: 'Children > 3 mos: Apply sparingly 1-2 times daily for max 2 weeks.' },
    safety: { adr: ['Skin atrophy', 'Striae'], contraindications: ['Rosacea', 'Skin infections'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Use FTU measurement.',
    pharmacy: { strengths: ['0.05% Cream', '0.005% Ointment'], dosageForms: ['Cream', 'Ointment'], priceNPR: 'Tube: ~120-200', brandNames: ['Cutivate', 'Flutivate'] },
    notes: ['Potent steroid. Do not apply to the face.'],
    searchTags: ['Eczema', 'Psoriasis', 'Rash']
  },
  {
    id: 'skn_025',
    genericName: 'Hydrocortisone with Fusidic Acid',
    vehicleType: 'Cream',
    therapeuticClass: 'Mild Corticosteroid + Antibiotic',
    categoryId: 'skin',
    indications: ['Infected eczema', 'Contact dermatitis with secondary infection'],
    dosing: { adult: 'Apply thinly 3 times daily for max 7-14 days.', pediatric: 'Same as adult.' },
    safety: { adr: ['Skin irritation', 'Atrophy (rare with mild steroid)'], contraindications: ['Primary bacterial/viral/fungal infections without inflammation'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Do not use for more than 2 weeks to prevent bacterial resistance to fusidic acid.',
    pharmacy: { strengths: ['1% Hydrocortisone + 2% Fusidic acid'], dosageForms: ['Cream'], priceNPR: 'Tube: ~150-250', brandNames: ['Fucidin H'] },
    notes: ['Excellent "Combination" option for acutely infected, weepy eczema.'],
    searchTags: ['Infected eczema', 'Allergy', 'Rash']
  }
];
