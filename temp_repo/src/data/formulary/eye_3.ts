import { DrugEntry } from '../../types/formulary';

export const eye3Drugs: DrugEntry[] = [
  // Anti-glaucoma drugs
  {
    id: 'eye_119',
    genericName: 'Latanoprost',
    therapeuticClass: 'Prostaglandin Analog',
    categoryId: 'eye',
    indications: ['Open-angle Glaucoma', 'Ocular Hypertension'],
    dosing: { adult: '1 drop in affected eye(s) once daily in the evening.', pediatric: 'Not established.' },
    safety: { adr: ['Increased brown pigmentation of iris', 'Eyelash growth/thickening', 'Conjunctival hyperemia (red eye)', 'Punctate keratitis'], contraindications: ['Active intraocular inflammation (uveitis)'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Instill in the evening for optimal IOP lowering effect.',
    pharmacy: { strengths: ['0.005% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~300-450', brandNames: ['Xalatan', 'Latoprost'] },
    notes: ['First-line for Glaucoma. Warn patients about permanent eyelash and iris color changes.'],
    searchTags: ['Glaucoma', 'Eye pressure', 'Ocular hypertension']
  },
  {
    id: 'eye_120',
    genericName: 'Acetazolamide',
    therapeuticClass: 'Carbonic Anhydrase Inhibitor (Systemic)',
    categoryId: 'eye',
    indications: ['Acute angle-closure glaucoma', 'Pre-operative reduction of IOP'],
    dosing: { adult: 'PO: 250-1000 mg/day in divided doses. IV: 500 mg stat in acute attack.', pediatric: 'PO: 8-30 mg/kg/day in divided doses.' },
    safety: { adr: ['Paresthesia (tingling in extremities)', 'Hypokalemia', 'Metabolic acidosis', 'Kidney stones'], contraindications: ['**Sulfa Allergy**', 'Severe renal/hepatic impairment', 'Hyponatremia/Hypokalemia'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Do not crush sustained-release capsules.',
    pharmacy: { strengths: ['250mg tablet', '500mg vial'], dosageForms: ['Tablet', 'Injection'], priceNPR: 'Tablet: ~10', brandNames: ['Diamox', 'Iopar'] },
    notes: ['**CROSS-REACTIVITY WARNING:** Contains a sulfonamide group; avoid in patients with severe sulfa allergy. Potassium supplements often required for chronic use.'],
    searchTags: ['Glaucoma', 'Eye pressure', 'Acute glaucoma']
  },
  {
    id: 'eye_121',
    genericName: 'Dorzolamide',
    therapeuticClass: 'Carbonic Anhydrase Inhibitor (Topical)',
    categoryId: 'eye',
    indications: ['Open-angle Glaucoma', 'Ocular Hypertension'],
    dosing: { adult: '1 drop TID (or BID if combined with Timolol).', pediatric: 'Not established.' },
    safety: { adr: ['Bitter taste in mouth', 'Stinging/burning', 'Superficial punctate keratitis'], contraindications: ['**Sulfa Allergy**', 'Severe renal impairment'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Often combined with Timolol in a single bottle.',
    pharmacy: { strengths: ['2% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~200-300', brandNames: ['Trusopt', 'Dorzox'] },
    notes: ['Can cause sulfa-like allergic reactions even topically.'],
    searchTags: ['Glaucoma', 'Eye pressure']
  },
  {
    id: 'eye_122',
    genericName: 'Brimonidine',
    therapeuticClass: 'Alpha-2 Adrenergic Agonist',
    categoryId: 'eye',
    indications: ['Open-angle Glaucoma', 'Ocular Hypertension'],
    dosing: { adult: '1 drop TID (or BID).', pediatric: 'CI in neonates/infants (< 2 yrs) due to severe CNS depression.' },
    safety: { adr: ['Dry mouth', 'Ocular hyperemia', 'Fatigue/Drowsiness'], contraindications: ['Neonates/infants', 'Patients receiving MAO inhibitors'], pregnancyLactation: 'Category B.' },
    administrationNote: 'Wait 15 mins before inserting soft contact lenses.',
    pharmacy: { strengths: ['0.15%, 0.2% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~150-250', brandNames: ['Alphagan', 'Brimocom'] },
    notes: ['Crosses blood-brain barrier; can cause severe apnea and lethargy in very young children.'],
    searchTags: ['Glaucoma', 'Eye pressure']
  },
  {
    id: 'eye_123',
    genericName: 'Pilocarpine',
    therapeuticClass: 'Direct-Acting Cholinergic (Miotic)',
    categoryId: 'eye',
    indications: ['Acute angle-closure glaucoma', 'Induction of miosis'],
    dosing: { adult: 'Acute attack: 1 drop of 2% or 4% every 5 mins for 3-6 doses, then every 1-3 hours.', pediatric: 'Specialist use only.' },
    safety: { adr: ['Ciliary spasm (brow ache)', 'Induced myopia', 'Retinal detachment (rare)', 'Dim vision (especially at night)'], contraindications: ['Acute iritis/uveitis', 'Secondary glaucoma due to inflammation'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Warn patient about diminished night vision.',
    pharmacy: { strengths: ['2%, 4% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~50-90', brandNames: ['Pilocar'] },
    notes: ['Pulling the iris away from the trabecular meshwork mechanically opens the angle.'],
    searchTags: ['Glaucoma', 'Eye pressure', 'Acute glaucoma', 'Miosis']
  },
  {
    id: 'eye_124',
    genericName: 'Bimatoprost',
    therapeuticClass: 'Prostaglandin Analogue',
    categoryId: 'eye',
    indications: ['Open-angle glaucoma', 'Hypotrichosis of eyelashes'],
    dosing: { adult: '1 drop in affected eye(s) once daily in the evening.', pediatric: 'Not established.' },
    safety: { adr: ['Conjunctival hyperemia', 'Iris pigmentation', 'Eyelash growth'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Do not exceed once daily dosing, it may paradoxically reduce the IOP-lowering effect.',
    pharmacy: { strengths: ['0.01%, 0.03% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~400-600', brandNames: ['Lumigan', 'Bimat'] },
    notes: ['Strongest hyperemic effect among prostaglandin analogues.'],
    searchTags: ['Glaucoma', 'Eye pressure']
  },
  {
    id: 'eye_125',
    genericName: 'Travoprost',
    therapeuticClass: 'Prostaglandin Analogue',
    categoryId: 'eye',
    indications: ['Open-angle glaucoma', 'Ocular hypertension'],
    dosing: { adult: '1 drop once daily in the evening.', pediatric: 'Not established.' },
    safety: { adr: ['Hyperemia', 'Iris pigmentation'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Remove contact lenses prior to application.',
    pharmacy: { strengths: ['0.004% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~300-500', brandNames: ['Travatan', 'Tovaxo'] },
    notes: ['Effective alternative if latanoprost is not tolerated.'],
    searchTags: ['Glaucoma', 'Eye pressure']
  },
  {
    id: 'eye_126',
    genericName: 'Mannitol',
    therapeuticClass: 'Osmotic Diuretic',
    categoryId: 'eye',
    indications: ['Acute severe reduction of Intraocular Pressure or Intracranial Pressure'],
    dosing: { adult: 'IV: 1.5-2 g/kg as a 20% solution given over 30-60 mins.', pediatric: 'IV: 1-2 g/kg given over 30-60 mins.' },
    safety: { adr: ['Fluid overload initially, then profound dehydration', 'Electrolyte imbalances'], contraindications: ['Severe dehydration', 'Active intracranial bleeding', 'Severe pulmonary edema'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Warm vial if crystals form. Administer through a line with an in-line filter.',
    pharmacy: { strengths: ['20% infusion'], dosageForms: ['IV Infusion'], priceNPR: 'Vial: ~150-250', brandNames: ['Mannitol'] },
    notes: ['Used purely in hospital settings for immediate crisis management.'],
    searchTags: ['Glaucoma', 'Acute glaucoma', 'Eye pressure']
  }
];
