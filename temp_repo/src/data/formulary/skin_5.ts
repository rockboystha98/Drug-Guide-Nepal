import { DrugEntry } from '../../types/formulary';

export const skin5Drugs: DrugEntry[] = [
  // Antiperspirants & Others
  {
    id: 'skn_042',
    genericName: 'Aluminium Chloride Hexahydrate',
    vehicleType: 'Solution / Roll-on',
    therapeuticClass: 'Antiperspirant',
    categoryId: 'skin',
    indications: ['Hyperhidrosis (excessive sweating) of axillae, palms, soles'],
    dosing: { adult: 'Apply to absolutely dry skin at night before bed. Wash off in morning. Use nightly until controlled, then 1-2 times weekly.', pediatric: 'Avoid use in young children.' },
    safety: { adr: ['Severe stinging/irritation if applied to damp skin', 'Erythema'], contraindications: ['Broken/irritated skin', 'Post-shaving application'], pregnancyLactation: 'Category C.' },
    administrationNote: '**CRITICAL INSTRUCTION**: Skin MUST be completely dry before application to prevent formation of irritating hydrochloric acid. Do not shave axillae for 24 hours prior to use.',
    pharmacy: { strengths: ['20% Solution/Roll-on'], dosageForms: ['Solution', 'Roll-on'], priceNPR: 'Bottle: ~300-500', brandNames: ['Aldry', 'Sweatnil'] },
    notes: ['First-line effective therapy for clinical hyperhidrosis.'],
    searchTags: ['Sweating', 'Hyperhidrosis', 'Underarm']
  },
  {
    id: 'skn_043',
    genericName: 'Minoxidil (Topical)',
    vehicleType: 'Solution / Foam',
    therapeuticClass: 'Vasodilator / Hair Growth Stimulant',
    categoryId: 'skin',
    indications: ['Androgenetic Alopecia (Male/Female pattern hair loss)'],
    dosing: { adult: 'Apply 1 ml to affected scalp twice daily. Do not wash hair for 4 hours.', pediatric: 'Not recommended.' },
    safety: { adr: ['Scalp irritation', 'Unwanted facial hair growth (if drips)', 'Contact dermatitis (often to the propylene glycol vehicle)'], contraindications: ['Unknown causes of hair loss', 'Sudden/patchy hair loss'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Must be used indefinitely; cessation leads to loss of new hair within months. Initial "shedding" phase is common in the first 2-6 weeks.',
    pharmacy: { strengths: ['2%, 5%, 10% Solution'], dosageForms: ['Solution'], priceNPR: 'Bottle: ~500-1000', brandNames: ['Mintop', 'Tugain'] },
    notes: ['2% generally used for females, 5% for males (though 5% once daily is used off-label for females).'],
    searchTags: ['Hair loss', 'Baldness', 'Alopecia']
  },
  {
    id: 'skn_044',
    genericName: 'Imiquimod',
    vehicleType: 'Cream',
    therapeuticClass: 'Immune Response Modifier',
    categoryId: 'skin',
    indications: ['Anogenital warts', 'Superficial basal cell carcinoma (sBCC)', 'Actinic keratoses'],
    dosing: { adult: 'Warts: Apply 3 times weekly at bedtime, leave for 6-10 hours, wash off. Max 16 weeks.', pediatric: 'Children > 12 yrs (Warts): Same as adult.' },
    safety: { adr: ['Severe local inflammatory reactions (erythema, erosion, ulceration, pain)', 'Flu-like systemic symptoms'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Instruct patient that marked inflammation, redness, and crusting is expected AND means the drug is working. Wash off thoroughly in the morning.',
    pharmacy: { strengths: ['5% Cream (single-use sachets)'], dosageForms: ['Cream (Sachets)'], priceNPR: 'Sachet: ~100-200', brandNames: ['Imiquad', 'Aldara'] },
    notes: ['Works by stimulating the local immune system to attack the virus/tumor cells.'],
    searchTags: ['Wart', 'Genital warts', 'Skin cancer']
  },
  {
    id: 'skn_045',
    genericName: 'Hydroquinone',
    vehicleType: 'Cream',
    therapeuticClass: 'Depigmenting Agent',
    categoryId: 'skin',
    indications: ['Melasma', 'Post-inflammatory hyperpigmentation'],
    dosing: { adult: 'Apply a thin layer to affected areas twice daily for short courses (e.g., 3-6 months).', pediatric: 'Not recommended < 12 yrs.' },
    safety: { adr: ['Mild irritation', 'Erythema', 'Ochronosis (blue-black darkening of skin) with prolonged, high-concentration use'], contraindications: ['Pregnancy', 'Sunburn/depilatory use'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Must be used with strict, broad-spectrum sun protection. Do NOT use continuously for years due to the risk of paradoxical darkening (ochronosis).',
    pharmacy: { strengths: ['2%, 4% Cream'], dosageForms: ['Cream'], priceNPR: 'Tube: ~150-300', brandNames: ['Melalite', 'Eukroma'] },
    notes: ['Often combined with Tretinoin and a mild Corticosteroid (Kligman’s formula) for melasma.'],
    searchTags: ['Pigmentation', 'Melasma', 'Dark spots', 'Bleaching']
  },
  {
    id: 'skn_046',
    genericName: 'Fluorouracil (5-FU Topical)',
    vehicleType: 'Cream',
    therapeuticClass: 'Topical Antimetabolite',
    categoryId: 'skin',
    indications: ['Actinic Keratoses', 'Superficial Basal Cell Carcinoma'],
    dosing: { adult: 'Apply 1-2 times daily for 2-4 weeks.', pediatric: 'Not applicable.' },
    safety: { adr: ['Intense local severe burning', 'Erythema', 'Ulceration (Expected therapeutic response)', 'Photosensitivity'], contraindications: ['Pregnancy', 'Dihydropyrimidine dehydrogenase (DPD) deficiency'], pregnancyLactation: 'Category X (Contraindicated).' },
    administrationNote: 'Warn patient that the treated skin will look significantly worse (red, blistered, crusted) before it heals. Avoid sun exposure.',
    pharmacy: { strengths: ['5% Cream'], dosageForms: ['Cream'], priceNPR: 'Tube: ~300-500', brandNames: ['Efudix', 'Flonida'] },
    notes: ['Destroys precancerous, sun-damaged skin cells.'],
    searchTags: ['Sun damage', 'Pre-cancer', 'Actinic']
  },
  {
    id: 'skn_047',
    genericName: 'Eflornithine',
    vehicleType: 'Cream',
    therapeuticClass: 'Ornithine Decarboxylase Inhibitor',
    categoryId: 'skin',
    indications: ['Facial Hirsutism (in women)'],
    dosing: { adult: 'Apply a thin layer to affected areas of face/under chin twice daily.', pediatric: 'Not recommended < 12 yrs.' },
    safety: { adr: ['Acne', 'Pseudofolliculitis', 'Stinging'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Does not remove hair, but slows hair growth. Must be used concurrently with other hair removal methods (shaving/plucking). Hair growth returns to pretreatment levels 8 weeks after stopping.',
    pharmacy: { strengths: ['13.9% Cream'], dosageForms: ['Cream'], priceNPR: 'Tube: ~800-1200', brandNames: ['Elyn', 'Vaniqa'] },
    notes: ['Expensive but effective for controlling unwanted female facial hair (e.g., in PCOS).'],
    searchTags: ['Hair growth', 'Facial hair', 'Hirsutism']
  },
  {
    id: 'skn_048',
    genericName: 'Calamine',
    vehicleType: 'Lotion',
    therapeuticClass: 'Astringent / Antipruritic',
    categoryId: 'skin',
    indications: ['Pruritus (itching)', 'Insect bites', 'Miliaria (Heat rash)', 'Chickenpox'],
    dosing: { adult: 'Apply freely to affected area as needed.', pediatric: 'Same as adult.' },
    safety: { adr: ['Skin dryness (due to zinc oxide component)'], contraindications: ['Do not apply to oozing or severely broken skin'], pregnancyLactation: 'Category A.' },
    administrationNote: 'Shake well before use.',
    pharmacy: { strengths: ['Calamine ~8% + Zinc Oxide ~8%'], dosageForms: ['Lotion'], priceNPR: 'Bottle: ~50-100', brandNames: ['Lacto Calamine', 'Caladryl (with Diphenhydramine)'] },
    notes: ['Safe, soothing compound. Note that combinations with diphenhydramine (Caladryl) can cause contact sensitization over time.'],
    searchTags: ['Itching', 'Rash', 'Chickenpox', 'Insect bite', 'Heat rash']
  }
];
