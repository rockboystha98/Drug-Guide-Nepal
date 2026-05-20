import { DrugEntry } from '../../types/formulary';

export const skin3Drugs: DrugEntry[] = [
  // Inflammatory CORTICOSTEROIDS (Very Potent & Others)
  {
    id: 'skn_026',
    genericName: 'Clobetasol Propionate',
    vehicleType: 'Cream / Ointment / Lotion',
    therapeuticClass: 'Topical Corticosteroid (Very Potent)',
    categoryId: 'skin',
    indications: ['Severe Psoriasis', 'Severe Eczema (unresponsive to less potent steroids)', 'Lichen Sclerosus'],
    dosing: { adult: 'Apply sparingly OD/BID for max 2-4 weeks. Total dose should not exceed 50g per week.', pediatric: 'Avoid if possible. Use only under strict specialist supervision for very short durations.' },
    safety: { adr: ['**Severe skin atrophy**', 'Striae', 'Systemic absorption (Adrenal suppression)', 'Steroid acne'], contraindications: ['Use on face, groin, axillae', 'Skin infections', 'Infants < 1 year'], pregnancyLactation: 'Category C.' },
    administrationNote: '**CRITICAL SAFETY INSTRUCTION: NEVER apply over the face**, as it will cause irreversible skin thinning, severe rebound rosacea, and steroid-induced acne.',
    pharmacy: { strengths: ['0.05% Cream/Ointment/Lotion', '0.05% Scalp Solution'], dosageForms: ['Cream', 'Ointment', 'Lotion', 'Solution'], priceNPR: 'Tube/Bottle: ~50-100', brandNames: ['Tenovate', 'Lobate', 'Clobet'] },
    notes: ['Frequently abused for skin lightening in Nepal; must strongly counsel against this off-label "Triple Action" misuse.'],
    searchTags: ['Psoriasis', 'Severe eczema', 'Lichen']
  },
  {
    id: 'skn_027',
    genericName: 'Triamcinolone (Topical / Intralesional)',
    vehicleType: 'Cream / Ointment / Injection',
    therapeuticClass: 'Topical Corticosteroid (Potent)',
    categoryId: 'skin',
    indications: ['Keloids (Intralesional)', 'Severe eczema', 'Alopecia areata'],
    dosing: { adult: 'Topical: Apply sparingly 2-3 times daily. Intralesional: 10-40 mg/ml injected directly into keloid/scar.', pediatric: 'Topical: Use lowest effective dose.' },
    safety: { adr: ['Hypopigmentation at injection site', 'Skin atrophy'], contraindications: ['Systemic fungal infections', 'Use on face (topical)'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Intralesional injections must be done by trained personnel to prevent deep dermal necrosis.',
    pharmacy: { strengths: ['0.1% Cream/Ointment', '10mg/ml, 40mg/ml Injection vial'], dosageForms: ['Cream', 'Ointment', 'Injection'], priceNPR: 'Vial: ~100-200', brandNames: ['Kenacort', 'Ledercort'] },
    notes: ['A go-to steroid for intralesional injections for thick hypertrophic scars or keloids.'],
    searchTags: ['Keloid', 'Scar', 'Psoriasis']
  },
  // Immunosuppressants
  {
    id: 'skn_028',
    genericName: 'Tacrolimus (Topical)',
    vehicleType: 'Ointment',
    therapeuticClass: 'Topical Calcineurin Inhibitor',
    categoryId: 'skin',
    indications: ['Atopic Dermatitis (Moderate to Severe)', 'Vitiligo (off-label)'],
    dosing: { adult: 'Apply 0.1% ointment to affected area twice daily.', pediatric: 'Children 2-15 yrs: Apply 0.03% ointment twice daily. Not recommended < 2 yrs.' },
    safety: { adr: ['Transient skin burning/stinging (very common initially)', 'Increased susceptibility to local skin infections (HSV)'], contraindications: ['Hypersensitivity', 'Immunocompromised patients'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Provides steroid-sparing action. Warn patient about burning sensation for the first few days of application.',
    pharmacy: { strengths: ['0.03% (pediatric)', '0.1% (adult)'], dosageForms: ['Ointment'], priceNPR: 'Tube: ~300-600', brandNames: ['Tacroz', 'Tacvido'] },
    notes: ['Excellent for facial and flexural eczema where steroids cannot be used long-term due to atrophy risk.'],
    searchTags: ['Eczema', 'Vitiligo', 'Steroid-free']
  },
  // Retinoids (Acne & Psoriasis)
  {
    id: 'skn_029',
    genericName: 'Isotretinoin (Oral)',
    vehicleType: 'Capsule',
    therapeuticClass: 'Oral Retinoid',
    categoryId: 'skin',
    indications: ['Severe nodulocystic acne', 'Acne unresponsive to conventional therapy'],
    dosing: { adult: 'PO: 0.5-1 mg/kg/day in 1-2 divided doses for 15-20 weeks (Cumulative target dose 120-150 mg/kg).', pediatric: 'PO (Adolescents > 12 yrs): Same weight-based dosing.' },
    safety: { adr: ['Severe dry skin/lips (cheilitis)', 'Epistaxis', 'Hepatotoxicity', 'Dyslipidemia', 'Depression/Suicidal ideation'], contraindications: ['**PREGNANCY (absolute)**', 'Hepatic impairment', 'Hyperlipidemia', 'Tetracycline concomitant use (risk of Benign Intracranial Hypertension)'], pregnancyLactation: '**Category X (Highest Tier Teratogen - iPLEDGE equivalent protocols required).**' },
    administrationNote: '**CRITICAL SAFETY INSTRUCTION: Absolute contraindication in pregnancy.** Requires 2 forms of highly effective contraception starting 1 month before, during, and 1 month after therapy. Must take with high-fat meals.',
    pharmacy: { strengths: ['10mg, 20mg Softgel Capsule'], dosageForms: ['Softgel Capsule'], priceNPR: '20mg cap (10s): ~150-250', brandNames: ['Sotret', 'Tretiva', 'Isotret'] },
    notes: ['Baseline and routine monitoring of LFTs and Lipid profiles required. Check for signs of depression.'],
    searchTags: ['Acne', 'Pimples', 'Nodular acne', 'Cystic acne']
  },
  {
    id: 'skn_030',
    genericName: 'Adapalene',
    vehicleType: 'Gel',
    therapeuticClass: 'Topical Retinoid',
    categoryId: 'skin',
    indications: ['Acne Vulgaris (mild to moderate comedonal acne)'],
    dosing: { adult: 'Apply a thin layer to entire affected area once daily at bedtime after washing.', pediatric: 'Children > 12 yrs: Same as adult.' },
    safety: { adr: ['Erythema', 'Scaling', 'Dryness', 'Pruritus', 'Photosensitivity'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C (Avoid in pregnancy to be safe).' },
    administrationNote: 'Must be applied at night. Use sun protection during the day. Expect an initial "purging" or worsening of acne in the first 2-4 weeks.',
    pharmacy: { strengths: ['0.1% Gel'], dosageForms: ['Gel'], priceNPR: 'Tube: ~150-250', brandNames: ['Adaferin', 'Deriva'] },
    notes: ['Better tolerated and less irritating compared to tretinoin.'],
    searchTags: ['Acne', 'Pimples', 'Comedones', 'Blackheads']
  },
  {
    id: 'skn_031',
    genericName: 'Adapalene with Benzoyl Peroxide',
    vehicleType: 'Gel',
    therapeuticClass: 'Topical Retinoid + Antimicrobial Keratolytic',
    categoryId: 'skin',
    indications: ['Acne Vulgaris (moderate inflammatory acne)'],
    dosing: { adult: 'Apply a pea-sized amount to the entire face once daily at bedtime.', pediatric: 'Children > 9 yrs: Same as adult.' },
    safety: { adr: ['Peeling', 'Dryness', 'Burning', 'Bleaching of hair/clothes (from BP)'], contraindications: ['Hypersensitivity', 'Use with other peeling agents'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Warn patient that Benzoyl Peroxide WILL bleach towels, pillowcases, and clothing. Apply at night.',
    pharmacy: { strengths: ['Adapalene 0.1% + Benzoyl Peroxide 2.5%'], dosageForms: ['Gel'], priceNPR: 'Tube: ~250-400', brandNames: ['Epiduo', 'Deriva-BPO'] },
    notes: ['Highly effective synergistic combination that targets both comedones and P. acnes bacteria.'],
    searchTags: ['Acne', 'Pimples', 'Inflammatory acne']
  },
  {
    id: 'skn_032',
    genericName: 'Acitretin',
    vehicleType: 'Capsule',
    therapeuticClass: 'Oral Retinoid',
    categoryId: 'skin',
    indications: ['Severe Psoriasis', 'Disorders of keratinization'],
    dosing: { adult: 'PO: 25-50 mg daily as a single dose with main meal.', pediatric: 'PO: Strict specialist use only.' },
    safety: { adr: ['Cheilitis', 'Alopecia', 'Hepatotoxicity', 'Hyperlipidemia', 'Bony exostoses (long term)'], contraindications: ['**PREGNANCY**', 'Severely impaired liver/kidney function'], pregnancyLactation: '**Category X.**' },
    administrationNote: '**CRITICAL SAFETY:** Teratogenic risk persists for up to 3 YEARS after stopping the drug. Pregnancy must be strictly avoided during and for 3 years post-treatment.',
    pharmacy: { strengths: ['10mg, 25mg Capsule'], dosageForms: ['Capsule'], priceNPR: '25mg cap (10s): ~400-600', brandNames: ['Aceret'] },
    notes: ['Alcohol MUST be avoided during and for 2 months after therapy as it converts to etretinate (which has an even longer half-life).'],
    searchTags: ['Psoriasis']
  },
  // Psoriasis / Tar
  {
    id: 'skn_033',
    genericName: 'Coal Tar',
    vehicleType: 'Ointment / Solution / Shampoo',
    therapeuticClass: 'Keratolytic / Antimitotic',
    categoryId: 'skin',
    indications: ['Psoriasis', 'Seborrheic dermatitis', 'Dandruff'],
    dosing: { adult: 'Apply 1-4 times daily (Ointment). Shampoo: use 2-3 times/week.', pediatric: 'Use lower concentrations with caution.' },
    safety: { adr: ['Skin irritation', 'Folliculitis', 'Photosensitivity', 'Messy/staining'], contraindications: ['Acute, inflamed, or broken skin lesions'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Will stain clothing and skin. Strong characteristic odor. Use sun protection.',
    pharmacy: { strengths: ['1-5% Ointment/Shampoo'], dosageForms: ['Ointment', 'Shampoo'], priceNPR: 'Tube/Bottle: ~100-200', brandNames: ['Ionax-T', 'Taralic'] },
    notes: ['Often combined with Salicylic acid. Cheap and effective but poor cosmetic acceptability.'],
    searchTags: ['Psoriasis', 'Dandruff', 'Thick skin']
  },
  {
    id: 'skn_034',
    genericName: 'Dithranol (Anthralin)',
    vehicleType: 'Ointment / Paste',
    therapeuticClass: 'Antimitotic agent',
    categoryId: 'skin',
    indications: ['Chronic plaque psoriasis'],
    dosing: { adult: 'Apply to plaques (keep off normal skin). Start with 0.1%, leave for 10-30 mins (short contact therapy), wash off. Increase strength gradually.', pediatric: 'Not recommended.' },
    safety: { adr: ['Severe irritation of normal skin', 'Purple/brown staining of skin, hair, clothes'], contraindications: ['Acute or pustular psoriasis', 'Face/flexure application'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Short contact therapy minimizes burning. Wash hands thoroughly. Apply zinc oxide to surrounding normal skin to protect it.',
    pharmacy: { strengths: ['0.1% to 2% Ointment'], dosageForms: ['Ointment', 'Paste'], priceNPR: 'Tube: ~150-250', brandNames: ['Dithrocream', 'Psorin'] },
    notes: ['Highly effective but very irritating. Often largely replaced by topical steroids/Vitamin D analogs due to poor compliance from staining.'],
    searchTags: ['Psoriasis']
  }
];
