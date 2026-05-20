import { DrugEntry } from '../../types/formulary';

export const ent4Drugs: DrugEntry[] = [
  // Throat / Oropharynx
  {
    id: 'ent_117',
    genericName: 'Povidone-Iodine (Gargle)',
    therapeuticClass: 'Antiseptic',
    categoryId: 'ent',
    indications: ['Sore throat', 'Oral hygiene', 'Post-tonsillectomy care'],
    dosing: { adult: 'Dilute with equal amount of warm water, gargle for 30 seconds QID for up to 14 days.', pediatric: 'Children > 6 yrs: Same as adult.' },
    safety: { adr: ['Iodine toxicity (if swallowed regularly)', 'Local mucous membrane irritation'], contraindications: ['Thyroid disorders', 'Iodine allergy'], pregnancyLactation: 'Category D (Regular use). Absolute short term is okay but generally avoid.' },
    administrationNote: 'Instruct patient NOT to swallow. Must be spit out.',
    pharmacy: { strengths: ['1%, 2% solution'], dosageForms: ['Gargle/Mouthwash'], priceNPR: 'Bottle: ~80-120', brandNames: ['Betadine Gargle'] },
    notes: ['Excellent broad-spectrum antimicrobial activity. Do not use in patients with Hyperthyroidism.'],
    searchTags: ['Sore throat', 'Gargle']
  },
  {
    id: 'ent_118',
    genericName: 'Nystatin (Oral Suspension)',
    therapeuticClass: 'Antifungal',
    categoryId: 'ent',
    indications: ['Oral Candidiasis (Thrush)'],
    dosing: { adult: '100,000 units/ml: 4-6 ml QID.', pediatric: 'Infants: 2 ml (1 ml each side of mouth) QID. Premature: 1 ml QID.' },
    safety: { adr: ['Nausea', 'Vomiting', 'Diarrhea (if swallowed in large amounts)'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    administrationNote: '**CRITICAL INSTRUCTION:** Counsel patient to "Swish and Swallow". Retain suspension in mouth as long as possible before swallowing.',
    pharmacy: { strengths: ['100,000 units/ml (30ml)'], dosageForms: ['Oral Suspension'], priceNPR: 'Suspension: ~100-150', brandNames: ['Mycostatin', 'Nystatin'] },
    notes: ['Drug of choice for infant oral thrush. Safe because it is not absorbed systemically from the GI tract.'],
    searchTags: ['Thrush', 'Mouth ulcer', 'White tongue']
  },
  {
    id: 'ent_119',
    genericName: 'Chlorhexidine (Mouthwash)',
    therapeuticClass: 'Antiseptic',
    categoryId: 'ent',
    indications: ['Gingivitis', 'Periodontitis', 'Oral ulcers', 'Oropharyngeal infection'],
    dosing: { adult: 'Rinse with 15 ml for 30 seconds BID after brushing teeth.', pediatric: 'Not typically recommended for young children unless directed by dentist.' },
    safety: { adr: ['Brown staining of teeth/tongue', 'Altered taste', 'Increased tartar formation'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category B.' },
    administrationNote: 'Do not eat, drink, or rinse mouth with water immediately after use. Wait 30 mins.',
    pharmacy: { strengths: ['0.2% mouthwash'], dosageForms: ['Mouthwash'], priceNPR: 'Bottle: ~90-150', brandNames: ['Hexidine', 'Clohex'] },
    notes: ['Warn patient about reversible brown staining of teeth if used for more than a few weeks.'],
    searchTags: ['Sore throat', 'Gums', 'Mouth ulcer']
  },
  {
    id: 'ent_120',
    genericName: 'Lidocaine (Viscous / Spray)',
    therapeuticClass: 'Local Anesthetic',
    categoryId: 'ent',
    indications: ['Severe sore throat', 'Oral mucositis', 'Post-tonsillectomy pain', 'Gag reflex suppression for endoscopies'],
    dosing: { adult: 'Viscous: 15 ml swish/spit every 3 hours (Max 8 doses/day). Spray: 1-2 sprays PRN.', pediatric: 'Children > 3 yrs: Max 4 mg/kg/dose.' },
    safety: { adr: ['Reduced gag reflex (aspiration risk)', 'Systemic toxicity if swallowed excessively (seizures, arrhythmias)'], contraindications: ['Hypersensitivity to amide anesthetics'], pregnancyLactation: 'Category B.' },
    administrationNote: 'Patient must not eat or drink for 60 minutes after use to prevent aspiration due to numbed gag reflex.',
    pharmacy: { strengths: ['2% viscous solution', '10% spray'], dosageForms: ['Viscous Liquid', 'Spray'], priceNPR: 'Spray/Gel: ~150-250', brandNames: ['Xylocaine', 'Lignox'] },
    notes: ['Use with caution in pediatric patients due to the risk of systemic toxicity and swallowing difficulties.'],
    searchTags: ['Sore throat', 'Pain', 'Mouth ulcer', 'Endoscopy']
  }
];
