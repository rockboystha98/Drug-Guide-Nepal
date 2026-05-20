import { DrugEntry } from '../../types/formulary';

export const immunologicals2Drugs: DrugEntry[] = [
  // Other Essential Vaccines
  {
    id: 'imm_010',
    genericName: 'Anti-Rabies Vaccine (ARV) - Cell Culture',
    therapeuticClass: 'Inactivated Vaccine',
    categoryId: 'immunologicals',
    indications: ['Rabies Post-Exposure Prophylaxis (PEP)', 'Pre-Exposure Prophylaxis'],
    dosing: {
      adult: 'Intradermal (ID) Updated WHO/National Schedule: 0.1 ml at 2 sites (deltoids) on days 0, 3, 7, and 28. IM Schedule: 1.0 ml on days 0, 3, 7, 14, 28.',
      pediatric: 'Same as adult (dose is independent of body weight).'
    },
    route: 'Intradermal (ID) or Intramuscular (IM) in deltoid (never gluteal).',
    safety: {
      adr: ['Local pain', 'Erythema', 'Mild fever'],
      contraindications: ['**None for Post-Exposure Prophylaxis (Rabies is 100% fatal)**'],
      pregnancyLactation: 'Safe and ESSENTIAL if exposed.'
    },
    pharmacy: {
      strengths: ['1ml (IM) or 0.1ml (ID) formulations'],
      dosageForms: ['Injection'],
      priceNPR: 'Free at Government Centers',
      brandNames: ['Abhayrab', 'Rabipur']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Thoroughly wash ANY animal bite wound with soap and water for 15 minutes BEFORE any medical intervention.'],
    searchTags: ['Vaccine', 'Dog bite', 'Rabies', 'Post-exposure']
  },
  {
    id: 'imm_011',
    genericName: 'Hepatitis B Vaccine (Adult)',
    therapeuticClass: 'Recombinant Vaccine',
    categoryId: 'immunologicals',
    indications: ['Hepatitis B Prophylaxis (High risk groups, Healthcare workers)'],
    dosing: {
      adult: '1 ml IM at 0, 1, and 6 months.',
      pediatric: 'Covered by Pentavalent normally. Catch up: 0.5 ml IM (0, 1, 6 months).'
    },
    route: 'Intramuscular (IM) in deltoid.',
    safety: {
      adr: ['Injection site soreness', 'Fever', 'Fatigue'],
      contraindications: ['Severe yeast allergy (used in recombinant process)'],
      pregnancyLactation: 'Category C (Avoid unless high risk).'
    },
    pharmacy: {
      strengths: ['1ml (20mcg) adult dose'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: ~150-300',
      brandNames: ['GeneVac-B', 'Engerix-B']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Do NOT freeze.'],
    searchTags: ['Vaccine', 'Hepatitis', 'Needlestick']
  },
  {
    id: 'imm_012',
    genericName: 'Typhoid Conjugate Vaccine (TCV)',
    therapeuticClass: 'Conjugate Vaccine',
    categoryId: 'immunologicals',
    indications: ['Typhoid Fever Prophylaxis (Routine in campaigns/endemic areas)'],
    dosing: {
      adult: '0.5 ml IM single dose (booster policies vary).',
      pediatric: '0.5 ml IM single dose (from 6 months of age).'
    },
    route: 'Intramuscular (IM) or Subcutaneous (SC).',
    safety: {
      adr: ['Pain at injection site', 'Fever', 'Headache'],
      contraindications: ['Severe allergic reaction to previous dose'],
      pregnancyLactation: 'Pregnancy: Caution. Lactation: Unknown.'
    },
    pharmacy: {
      strengths: ['0.5ml dose'],
      dosageForms: ['Injection'],
      priceNPR: 'Government Supply (campaigns) / Private: ~1500-2000',
      brandNames: ['Typbar TCV']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. TCV provides longer-lasting immunity than older polysaccharide vaccines and can be given to infants.'],
    searchTags: ['Vaccine', 'Typhoid', 'Childhood shots']
  },
  {
    id: 'imm_013',
    genericName: 'Influenza Vaccine (Seasonal)',
    therapeuticClass: 'Inactivated split-virion / Subunit vaccine',
    categoryId: 'immunologicals',
    indications: ['Seasonal Influenza Prophylaxis (High risk, elderly, healthcare workers)'],
    dosing: {
      adult: '0.5 ml IM annually.',
      pediatric: '0.5 ml IM annually (from 6 months age). First-time vaccinees <9 years require 2 doses 4 weeks apart.'
    },
    route: 'Intramuscular (IM) in deltoid.',
    safety: {
      adr: ['Local pain', 'Myalgia', 'Low-grade fever', 'Guillain-Barré syndrome (extremely rare)'],
      contraindications: ['Severe egg allergy (for egg-based vaccines, though changing guidelines may allow)'],
      pregnancyLactation: 'Safe and Highly Recommended in pregnancy.'
    },
    pharmacy: {
      strengths: ['0.5ml pre-filled syringe'],
      dosageForms: ['Injection'],
      priceNPR: 'Syringe: ~1000-1500',
      brandNames: ['Vaxigrip', 'Influvac']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Do NOT freeze. Strains updated annually based on WHO recommendations.'],
    searchTags: ['Vaccine', 'Flu', 'Winter']
  },
  {
    id: 'imm_014',
    genericName: 'Human Papillomavirus (HPV) Vaccine',
    therapeuticClass: 'Recombinant Vaccine',
    categoryId: 'immunologicals',
    indications: ['Cervical Cancer Prophylaxis', 'Genital Warts Prophylaxis'],
    dosing: {
      adult: 'Not routine (catch-up up to 26 years). 3 doses: 0, 1-2, 6 months.',
      pediatric: 'Girls 9-14 years: 2 doses (0, 6-12 months).'
    },
    route: 'Intramuscular (IM) in deltoid.',
    safety: {
      adr: ['Injection site pain (very common)', 'Syncope (fainting) post-vaccination (observe for 15 mins)'],
      contraindications: ['Severe yeast allergy'],
      pregnancyLactation: 'Contraindicated in pregnancy.'
    },
    pharmacy: {
      strengths: ['0.5ml single dose vial/syringe'],
      dosageForms: ['Injection'],
      priceNPR: 'Government Supply (campaigns) / Private: ~3500-5000',
      brandNames: ['Gardasil', 'Cervarix']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Do NOT freeze.'],
    searchTags: ['Vaccine', 'Childhood shots', 'Cancer']
  },
  {
    id: 'imm_015',
    genericName: 'Cholera Vaccine',
    therapeuticClass: 'Inactivated Oral Vaccine',
    categoryId: 'immunologicals',
    indications: ['Cholera outbreaks', 'Travel to highly endemic areas'],
    dosing: {
      adult: 'Orally. 2 doses given 14 days apart.',
      pediatric: 'Children 1-5 yrs: 3 doses (14 days apart).'
    },
    route: 'Oral (mixed with buffer solution).',
    safety: {
      adr: ['Mild abdominal pain', 'Diarrhea', 'Nausea'],
      contraindications: ['Hypersensitivity', 'Acute GI illness (delay administration)'],
      pregnancyLactation: 'Generally safe; risk of cholera outweighs theoretical risk of vaccine.'
    },
    pharmacy: {
      strengths: ['Oral formulation dose'],
      dosageForms: ['Oral Suspension'],
      priceNPR: 'Government Supply (Outbreaks)',
      brandNames: ['Shanchol', 'Euvichol']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Food and drink must be avoided 1 hour before and after ingestion (for buffer-dependent brands).'],
    searchTags: ['Vaccine', 'Cholera', 'Diarrhea']
  }
];
