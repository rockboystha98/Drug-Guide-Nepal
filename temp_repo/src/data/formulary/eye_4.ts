import { DrugEntry } from '../../types/formulary';

export const eye4Drugs: DrugEntry[] = [
  // Mydriatics & Cycloplegics
  {
    id: 'eye_127',
    genericName: 'Atropine (Ophthalmic)',
    therapeuticClass: 'Anticholinergic (Mydriatic/Cycloplegic)',
    categoryId: 'eye',
    indications: ['Uveitis', 'Refraction in children', 'Amblyopia penalization'],
    dosing: { adult: 'Uveitis: 1 drop 1-2 times daily.', pediatric: 'Refraction: 1 drop of 1% OD for 3 days prior, or 1% ointment BID for 3 days.' },
    safety: { adr: ['**Systemic Toxicity** (Tachycardia, flushing, fever, dry mouth)', 'Photophobia', 'Prolonged blurred vision (up to 14 days)'], contraindications: ['Narrow-angle glaucoma'], pregnancyLactation: 'Category C.' },
    administrationNote: '**CRITICAL: Apply firm pressure to the lacrimal sac for 2-3 mins after instillation in children to prevent potentially fatal systemic absorption.**',
    pharmacy: { strengths: ['1% drops', '1% ointment'], dosageForms: ['Eye Drops', 'Eye Ointment'], priceNPR: 'Drops: ~40-70', brandNames: ['Atropine', 'Belladonna'] },
    notes: ['Warn patient about driving/machinery operation as vision will be blurred for days.'],
    searchTags: ['Dilate', 'Uveitis', 'Refraction']
  },
  {
    id: 'eye_128',
    genericName: 'Cyclopentolate',
    therapeuticClass: 'Anticholinergic (Mydriatic/Cycloplegic)',
    categoryId: 'eye',
    indications: ['Cycloplegic refraction', 'Mydriasis for fundoscopy'],
    dosing: { adult: '1 drop of 1% solution, repeated after 10 mins if necessary.', pediatric: 'Children > 1 yr: 1 drop of 1% solution. Infants: 0.5%.' },
    safety: { adr: ['CNS disturbances in children (hallucinations, ataxia)', 'Photophobia'], contraindications: ['Narrow-angle glaucoma'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Maximal cycloplegia in 25-75 mins. Recovery takes 24 hours.',
    pharmacy: { strengths: ['1% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~60-90', brandNames: ['Cyclopent', 'Cyclogyl'] },
    notes: ['Preferred over atropine for routine refraction due to shorter duration of action.'],
    searchTags: ['Dilate', 'Refraction', 'Fundoscopy']
  },
  {
    id: 'eye_129',
    genericName: 'Tropicamide',
    therapeuticClass: 'Anticholinergic (Mydriatic)',
    categoryId: 'eye',
    indications: ['Diagnostic mydriasis (Fundoscopy)', 'Short-acting cycloplegia'],
    dosing: { adult: '1 drop of 0.5% or 1%, repeated in 5 mins.', pediatric: 'Same as adult.' },
    safety: { adr: ['Transient stinging', 'Increased IOP in susceptible eyes'], contraindications: ['Narrow-angle glaucoma'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Mydriasis lasts about 6 hours. Warn about sunlight sensitivity (provide shades).',
    pharmacy: { strengths: ['0.5%, 1% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~50-80', brandNames: ['Tropicacyl', 'Mydriacyl'] },
    notes: ['Drug of choice for routine fundoscopic examination due to very fast onset and short duration.'],
    searchTags: ['Dilate', 'Fundoscopy']
  },
  {
    id: 'eye_130',
    genericName: 'Phenylephrine (Ophthalmic)',
    therapeuticClass: 'Sympathomimetic (Mydriatic)',
    categoryId: 'eye',
    indications: ['Mydriasis without cycloplegia', 'Uveitis (to break synechiae)'],
    dosing: { adult: '1 drop of 2.5% or 10%.', pediatric: 'Use 2.5% only. 10% is contraindicated in infants.' },
    safety: { adr: ['Systemic hypertension', 'Tachycardia', 'Rebound miosis'], contraindications: ['Narrow-angle glaucoma', '10% contraindicated in cardiac disease/infants'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Do not use the 10% solution routinely, reserve for tough synechiae.',
    pharmacy: { strengths: ['2.5%, 10% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~80-120', brandNames: ['Phenyleph', 'Afrin'] },
    notes: ['Dilates the pupil but does NOT paralyze accommodation (no cycloplegia).'],
    searchTags: ['Dilate', 'Mydriasis']
  },
  // Miscellaneous & Artificial Tears
  {
    id: 'eye_131',
    genericName: 'Hypromellose (Artificial Tears)',
    therapeuticClass: 'Ocular Lubricant',
    categoryId: 'eye',
    indications: ['Dry eye syndrome', 'Tear deficiency'],
    dosing: { adult: '1-2 drops applied PRN (as needed).', pediatric: 'Same as adult.' },
    safety: { adr: ['Transient blurred vision immediately after use'], contraindications: ['None'], pregnancyLactation: 'Category A.' },
    administrationNote: 'Can be used as often as needed.',
    pharmacy: { strengths: ['0.3% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~40-70', brandNames: ['Tear Naturale', 'Lubric'] },
    notes: ['Cheap and effective for mild dry eye.'],
    searchTags: ['Dry eye', 'Tears', 'Lubricant']
  },
  {
    id: 'eye_132',
    genericName: 'Carboxymethylcellulose (CMC)',
    therapeuticClass: 'Ocular Lubricant',
    categoryId: 'eye',
    indications: ['Moderate to severe dry eye syndrome'],
    dosing: { adult: '1-2 drops PRN.', pediatric: 'Same as adult.' },
    safety: { adr: ['Crusting on eyelids', 'Transient blurry vision'], contraindications: ['None'], pregnancyLactation: 'Category A.' },
    administrationNote: 'Preservative-free vials available for post-Lasik or frequent users.',
    pharmacy: { strengths: ['0.5%, 1% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~150-250', brandNames: ['Refresh Tears', 'EcoTears'] },
    notes: ['Longer lasting lubrication than hypromellose.'],
    searchTags: ['Dry eye', 'Tears', 'Lubricant']
  },
  {
    id: 'eye_133',
    genericName: 'Sodium Hyaluronate',
    therapeuticClass: 'Ocular Lubricant / Viscoelastic',
    categoryId: 'eye',
    indications: ['Severe dry eye', 'Surgical aid in cataract extraction'],
    dosing: { adult: 'Dry eye: 1 drop PRN.', pediatric: 'Same as adult.' },
    safety: { adr: ['Rarely any; highly biocompatible'], contraindications: ['None'], pregnancyLactation: 'Category A.' },
    administrationNote: 'Often preservative-free.',
    pharmacy: { strengths: ['0.1%, 0.18%, 0.4% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~250-400', brandNames: ['Hylo-Comod', 'HyluTears'] },
    notes: ['Excellent water-retention properties, ideal for pronounced keratitis sicca.'],
    searchTags: ['Dry eye', 'Tears', 'Lubricant', 'Severe dry eye']
  },
  {
    id: 'eye_134',
    genericName: 'Cyclosporine (Ophthalmic)',
    therapeuticClass: 'Immunosuppressant / Dry Eye Agent',
    categoryId: 'eye',
    indications: ['Chronic dry eye syndrome with inflammation'],
    dosing: { adult: '1 drop BID (every 12 hours).', pediatric: 'Not established under 16 yrs.' },
    safety: { adr: ['Ocular burning upon instillation', 'Hyperemia'], contraindications: ['Active eye infections'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Invert vial a few times before use to create uniform emulsion.',
    pharmacy: { strengths: ['0.05% emulsion (single-use vials)'], dosageForms: ['Eye Drops'], priceNPR: 'Vial: high cost', brandNames: ['Restasis', 'Cyclomune'] },
    notes: ['Takes up to 3-6 months to show full therapeutic effect in increasing tear production.'],
    searchTags: ['Dry eye', 'Tears', 'Inflammation']
  },
  {
    id: 'eye_135',
    genericName: 'Fluorescein sodium',
    therapeuticClass: 'Diagnostic Dye',
    categoryId: 'eye',
    indications: ['Detection of corneal abrasions/ulcers', 'Applanation tonometry', 'Fundus angiography'],
    dosing: { adult: 'Topical: Touch strip to lower conjunctival fornix. IV: Used for angiography.', pediatric: 'Same as adult.' },
    safety: { adr: ['IV: Nausea, anaphylaxis. Topical: minimal.'], contraindications: ['Pregnancy (avoid IV angiography)'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Moisten paper strip with saline or local anesthetic before touching the eye.',
    pharmacy: { strengths: ['1mg strips', '10% IV vial'], dosageForms: ['Paper Strip', 'Injection'], priceNPR: 'Strips: ~20-50', brandNames: ['Fluoro-Strip'] },
    notes: ['Defects will pool the dye and fluoresce brilliant green under a Cobalt Blue light.'],
    searchTags: ['Abrasions', 'Dye', 'Corneal ulcer']
  },
  {
    id: 'eye_136',
    genericName: 'Proparacaine / Tetracaine',
    therapeuticClass: 'Local Ocular Anesthetic',
    categoryId: 'eye',
    indications: ['Corneal minor surgery', 'Tonometry', 'Foreign body removal'],
    dosing: { adult: '1-2 drops prior to procedure.', pediatric: 'Same as adult.' },
    safety: { adr: ['**Corneal melting/opacification if abused**', 'Transient stinging'], contraindications: ['**NEVER prescribed for home use**'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Action starts in 30 seconds, lasts 15-20 minutes.',
    pharmacy: { strengths: ['0.5% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~100', brandNames: ['Paracain', 'Tetracaine'] },
    notes: ['**CRITICAL SAFETY: Never dispense to patients for pain relief. Repeated use causes irreversible corneal destruction.**'],
    searchTags: ['Anesthetic', 'Numb eye', 'Foreign body']
  }
];
