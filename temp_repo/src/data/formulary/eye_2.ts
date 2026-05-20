import { DrugEntry } from '../../types/formulary';

export const eye2Drugs: DrugEntry[] = [
  // Corticosteroids & Anti-inflammatory
  {
    id: 'eye_110',
    genericName: 'Dexamethasone (Ophthalmic)',
    therapeuticClass: 'Ophthalmic Corticosteroid',
    categoryId: 'eye',
    indications: ['Severe ocular inflammation', 'Post-operative inflammation', 'Allergic conjunctivitis'],
    dosing: { adult: '1-2 drops Q1-2H initially, tapering to QID or less.', pediatric: 'Specialist use only.' },
    safety: { adr: ['**Elevated Intraocular Pressure (Glaucoma)**', 'Cataract formation (posterior subcapsular)', 'Delayed wound healing'], contraindications: ['Viral (Herpes Simplex), Fungal, or Mycobacterial eye infections', 'Undiagnosed red eye'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Do not discontinue abruptly. Space drops by 5 mins.',
    pharmacy: { strengths: ['0.1% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~40-70', brandNames: ['Decadron', 'Dexona eye'] },
    notes: ['**CRITICAL SAFETY: Steroid-induced Glaucoma warning. Do not use steroids without ophthalmologist supervision.**'],
    searchTags: ['Red eye', 'Inflammation', 'Post-op']
  },
  {
    id: 'eye_111',
    genericName: 'Fluorometholone',
    therapeuticClass: 'Ophthalmic Corticosteroid',
    categoryId: 'eye',
    indications: ['Ocular inflammation', 'Allergic conjunctivitis'],
    dosing: { adult: '1-2 drops 2-4 times daily.', pediatric: 'Children > 2 yrs: Same as adult.' },
    safety: { adr: ['**Elevated Intraocular Pressure** (though less risk than Dexa/Pred)'], contraindications: ['Viral, Fungal eye infections'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Shake suspension vigorously before use.',
    pharmacy: { strengths: ['0.1% drops'], dosageForms: ['Eye Drops (Suspension)'], priceNPR: 'Drops: ~80-120', brandNames: ['FML', 'Fluro'] },
    notes: ['**CRITICAL SAFETY: Steroid-induced Glaucoma warning. Do not use without ophthalmologist supervision.** Has lower propensity to increase IOP than Dexamethasone.'],
    searchTags: ['Red eye', 'Inflammation', 'Allergy']
  },
  {
    id: 'eye_112',
    genericName: 'Diclofenac (Ophthalmic)',
    therapeuticClass: 'NSAID',
    categoryId: 'eye',
    indications: ['Post-operative inflammation (Cataract, Refractive surgery)', 'Seasonal allergic conjunctivitis'],
    dosing: { adult: '1 drop 4 times daily starting 24h post-op for 2-4 weeks.', pediatric: 'Not routinely recommended under 3 yrs.' },
    safety: { adr: ['Transient burning', 'Corneal melting (rare but severe if overused)'], contraindications: ['Hypersensitivity to NSAIDs'], pregnancyLactation: 'Category C.' },
    administrationNote: 'May delay wound healing.',
    pharmacy: { strengths: ['0.1% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~60-100', brandNames: ['Voveran Eye', 'Diclac'] },
    notes: ['Used often after cataract surgery. Does not raise IOP like steroids.'],
    searchTags: ['Cataract surgery', 'Pain', 'Inflammation', 'Red eye']
  },
  {
    id: 'eye_113',
    genericName: 'Flurbiprofen (Ophthalmic)',
    therapeuticClass: 'NSAID',
    categoryId: 'eye',
    indications: ['Inhibition of intraoperative miosis (during cataract surgery)'],
    dosing: { adult: '1 drop every 30 mins beginning 2 hours before surgery (Total 4 drops).', pediatric: 'Not established.' },
    safety: { adr: ['Transient burning', 'Increased bleeding tendency of ocular tissues'], contraindications: ['NSAID hypersensitivity', 'Dendritic keratitis'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Given pre-operatively.',
    pharmacy: { strengths: ['0.03% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~50-80', brandNames: ['Flur', 'Ocuflur'] },
    notes: ['Used specifically to keep the pupil dilated during surgery.'],
    searchTags: ['Cataract surgery', 'Miosis']
  },
  {
    id: 'eye_114',
    genericName: 'Ketorolac (Ophthalmic)',
    therapeuticClass: 'NSAID',
    categoryId: 'eye',
    indications: ['Post-operative ocular inflammation/pain', 'Allergic conjunctivitis'],
    dosing: { adult: '1 drop QID.', pediatric: 'Children > 3 yrs: 1 drop QID.' },
    safety: { adr: ['Corneal toxicity/melting (rare)', 'Burning'], contraindications: ['NSAID hypersensitivity'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Do not use while wearing contact lenses.',
    pharmacy: { strengths: ['0.5%, 0.4% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~80-150', brandNames: ['Acular', 'Ketoford'] },
    notes: ['Effective for itch in allergic conjunctivitis and pain post-refractive surgery.'],
    searchTags: ['Pain', 'Itchy eye', 'Red eye']
  },
  {
    id: 'eye_115',
    genericName: 'Betamethasone (Ophthalmic)',
    therapeuticClass: 'Ophthalmic Corticosteroid',
    categoryId: 'eye',
    indications: ['Ocular inflammation'],
    dosing: { adult: '1-2 drops Q1-2H initially.', pediatric: 'Specialist use only.' },
    safety: { adr: ['Elevated IOP', 'Cataract'], contraindications: ['Viral/Fungal eye infections'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Limit use to short durations.',
    pharmacy: { strengths: ['0.1% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~40-70', brandNames: ['Betnesol Eye'] },
    notes: ['**CRITICAL SAFETY: Steroid-induced Glaucoma warning.**'],
    searchTags: ['Red eye', 'Inflammation']
  },
  // Antihistamine/Mast cell stabilizers
  {
    id: 'eye_116',
    genericName: 'Ketotifen (Ophthalmic)',
    therapeuticClass: 'Antihistamine / Mast Cell Stabilizer',
    categoryId: 'eye',
    indications: ['Allergic conjunctivitis', 'Itchy eyes'],
    dosing: { adult: '1 drop in affected eye(s) twice daily (every 8-12 hours).', pediatric: 'Children > 3 yrs: Same as adult.' },
    safety: { adr: ['Mild stinging', 'Dry eyes'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Remove contact lenses before use; wait 10 mins before reinserting.',
    pharmacy: { strengths: ['0.025% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~90-140', brandNames: ['Zaditen', 'Ketotif'] },
    notes: ['Dual action makes it highly effective for seasonal allergies.'],
    searchTags: ['Itchy eye', 'Pink eye', 'Allergy']
  },
  {
    id: 'eye_117',
    genericName: 'Olopatadine',
    therapeuticClass: 'Antihistamine / Mast Cell Stabilizer',
    categoryId: 'eye',
    indications: ['Allergic conjunctivitis'],
    dosing: { adult: '0.1%: 1 drop BID. 0.2%: 1 drop daily.', pediatric: 'Children > 3 yrs: Same as adult.' },
    safety: { adr: ['Headache', 'Asthenia', 'Blurred vision', 'Dry eye'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Wait at least 5 mins before instilling other eye drops.',
    pharmacy: { strengths: ['0.1%, 0.2% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~150-250', brandNames: ['Patanol', 'Pataday', 'Olopat'] },
    notes: ['0.2% strength offers convenient once-daily dosing.'],
    searchTags: ['Itchy eye', 'Allergy', 'Red eye']
  },
  {
    id: 'eye_118',
    genericName: 'Sodium cromoglycate (Ophthalmic)',
    therapeuticClass: 'Mast Cell Stabilizer',
    categoryId: 'eye',
    indications: ['Vernal keratoconjunctivitis', 'Allergic conjunctivitis prophylaxis'],
    dosing: { adult: '1-2 drops 4 times daily.', pediatric: 'Children > 4 yrs: Same as adult.' },
    safety: { adr: ['Transient stinging'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category B.' },
    administrationNote: 'May take several days to weeks to see full effect.',
    pharmacy: { strengths: ['2%, 4% drops'], dosageForms: ['Eye Drops'], priceNPR: 'Drops: ~50-80', brandNames: ['Cromal', 'Fivocrom'] },
    notes: ['Pure mast cell stabilizer, better for prevention than acute relief of itch.'],
    searchTags: ['Allergy', 'Prevention', 'Itchy eye']
  }
];
