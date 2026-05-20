import { DrugEntry } from '../../types/formulary';

export const eye5Drugs: DrugEntry[] = [
  {
    id: 'eye_001',
    genericName: 'Timolol',
    therapeuticClass: 'Non-selective Beta-blocker',
    categoryId: 'eye',
    indications: ['Glaucoma', 'Ocular Hypertension', 'Red eye'],
    dosing: {
      adult: '1 drop of 0.25% or 0.5% solution in affected eye(s) BID. May reduce to OD if controlled.',
      pediatric: 'Use with caution. Similar to adult, usually 0.25% starting.'
    },
    safety: {
      adr: ['Ocular irritation', 'Dry eyes', 'Systemic absorption: Bradycardia, Bronchospasm'],
      contraindications: ['Asthma/COPD', 'Sinus bradycardia', 'Heart block'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['0.25% eye drops', '0.5% eye drops (5ml)'],
      dosageForms: ['Eye Drops'],
      priceNPR: 'Drops: 70-120',
      brandNames: ['Iotim', 'Glucomol']
    },
    notes: ['Apply nasolacrimal occlusion (press inner corner of eye) for 2 mins after instillation to reduce systemic absorption.']
  },
  {
    id: 'eye_002',
    genericName: 'Ciprofloxacin (Ophthalmic)',
    therapeuticClass: 'Fluoroquinolone Antibiotic',
    categoryId: 'eye',
    indications: ['Bacterial Conjunctivitis', 'Corneal Ulcers', 'Red eye'],
    dosing: {
      adult: 'Conjunctivitis: 1-2 drops Q2H while awake for 2 days, then Q4H for 5 days.',
      pediatric: 'Children > 1 yr: Same as adult.'
    },
    safety: {
      adr: ['Local burning/discomfort', 'White crystalline precipitates (in corneal ulcers)'],
      contraindications: ['Viral/Fungal eye infections'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['0.3% w/v Eye Drops (5ml/10ml)'],
      dosageForms: ['Eye Drops', 'Eye Ointment'],
      priceNPR: 'Drops: 30-50',
      brandNames: ['Ciplox Eye', 'Zoxan']
    },
    notes: ['Do not touch dropper tip to any surface, including the eye.'],
    searchTags: ['Infection', 'Red eye']
  },
  {
    id: 'eye_003',
    genericName: 'Prednisolone (Ophthalmic)',
    therapeuticClass: 'Ophthalmic Corticosteroid',
    categoryId: 'eye',
    indications: ['Severe ocular inflammation', 'Uveitis', 'Post-op inflammation'],
    dosing: {
      adult: '1-2 drops Q1H initially, tapering to QID as inflammation subsides.',
      pediatric: 'Specialist use only.'
    },
    safety: {
      adr: ['Elevated Intraocular Pressure (IOP)', 'Cataract formation', 'Secondary eye infections'],
      contraindications: ['Herpes simplex keratitis', 'Viral/Fungal eye infections'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1% Eye Drops (5ml)'],
      dosageForms: ['Eye Drops'],
      priceNPR: 'Drops: 80-130',
      brandNames: ['Pred Forte']
    },
    notes: ['CRITICAL SAFETY: Use of steroid eye drops without specialist supervision can lead to irreversible Glaucoma, Cataracts, and Corneal perforation. Shake well before use.'],
    searchTags: ['Inflammation', 'Red eye']
  }
];
