import { DrugEntry } from '../../types/formulary';

export const ent3Drugs: DrugEntry[] = [
  // Nasal Steroids
  {
    id: 'ent_113',
    genericName: 'Fluticasone (Nasal)',
    therapeuticClass: 'Nasal Corticosteroid',
    categoryId: 'ent',
    indications: ['Allergic Rhinitis', 'Nasal Polyps'],
    dosing: { adult: '2 sprays in each nostril once daily. Taper to 1 spray when controlled.', pediatric: 'Children 4-11 yrs: 1 spray in each nostril once daily.' },
    safety: { adr: ['Epistaxis (Nosebleeds)', 'Nasal irritation', 'Headache'], contraindications: ['Recent nasal surgery/trauma (wait until healed)'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Aim the nozzle away from the nasal septum to prevent epistaxis and septal perforation. Can take days to reach full effect.',
    pharmacy: { strengths: ['50mcg/spray'], dosageForms: ['Nasal Spray'], priceNPR: 'Spray: ~250-400', brandNames: ['Flomist', 'Fluticone'] },
    notes: ['First-line therapy for moderate-to-severe allergic rhinitis.'],
    searchTags: ['Sneezing', 'Allergy', 'Blocked nose']
  },
  {
    id: 'ent_114',
    genericName: 'Budesonide (Nasal)',
    therapeuticClass: 'Nasal Corticosteroid',
    categoryId: 'ent',
    indications: ['Allergic Rhinitis', 'Nasal Polyps'],
    dosing: { adult: '1-2 sprays in each nostril once daily (or 1 spray BID).', pediatric: 'Children > 6 yrs: 1 spray in each nostril once daily.' },
    safety: { adr: ['Epistaxis', 'Cough', 'Nasal irritation'], contraindications: ['Recent nasal septal ulcers/surgery'], pregnancyLactation: 'Category B.' },
    administrationNote: 'Aim away from the septum.',
    pharmacy: { strengths: ['32mcg/spray', '64mcg/spray'], dosageForms: ['Nasal Spray'], priceNPR: 'Spray: ~200-350', brandNames: ['Budecort Nasal', 'Rhinocort'] },
    notes: ['Preferred nasal steroid in pregnancy (Category B).'],
    searchTags: ['Sneezing', 'Allergy', 'Blocked nose']
  },
  {
    id: 'ent_115',
    genericName: 'Mometasone (Nasal)',
    therapeuticClass: 'Nasal Corticosteroid',
    categoryId: 'ent',
    indications: ['Allergic Rhinitis', 'Nasal Polyps (adults)'],
    dosing: { adult: '2 sprays in each nostril once daily.', pediatric: 'Children 2-11 yrs: 1 spray in each nostril once daily.' },
    safety: { adr: ['Epistaxis', 'Pharyngitis', 'Headache'], contraindications: ['Unhealed nasal wounds'], pregnancyLactation: 'Category C.' },
    administrationNote: 'Shake well before using. Aim away from the septum.',
    pharmacy: { strengths: ['50mcg/spray'], dosageForms: ['Nasal Spray'], priceNPR: 'Spray: ~250-350', brandNames: ['Nasonex', 'Metaspray'] },
    notes: ['Very low systemic bioavailability, making it very safe for long-term use.'],
    searchTags: ['Sneezing', 'Allergy', 'Blocked nose']
  },
  // Nasal Anti-infectives
  {
    id: 'ent_116',
    genericName: 'Mupirocin (Nasal)',
    therapeuticClass: 'Topical Antibiotic',
    categoryId: 'ent',
    indications: ['MRSA nasal carriage eradication'],
    dosing: { adult: 'Apply 1/2 of ointment from a single-use tube into each nostril BID for 5 days.', pediatric: 'Same as adult.' },
    safety: { adr: ['Rhinitis', 'Taste perversion', 'Pharyngitis'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category B.' },
    administrationNote: 'After applying, massage the sides of the nose together to spread the ointment throughout the nares.',
    pharmacy: { strengths: ['2% Nasal Ointment'], dosageForms: ['Nasal Ointment'], priceNPR: 'Tube: ~150-200', brandNames: ['Bactroban Nasal', 'Mupinase'] },
    notes: ['Used strictly for MRSA decolonization protocols, usually prior to high-risk surgeries.'],
    searchTags: ['MRSA', 'Staph', 'Infection']
  }
];
