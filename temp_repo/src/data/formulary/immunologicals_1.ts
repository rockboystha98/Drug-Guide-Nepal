import { DrugEntry } from '../../types/formulary';

export const immunologicals1Drugs: DrugEntry[] = [
  // NIS Vaccines
  {
    id: 'imm_001',
    genericName: 'BCG Vaccine',
    therapeuticClass: 'Live Attenuated Vaccine',
    categoryId: 'immunologicals',
    indications: ['Tuberculosis Prophylaxis (Routine immunization)'],
    dosing: {
      adult: 'Not routine.',
      pediatric: '0.05 ml Intradermal (ID) at birth or as early as possible.'
    },
    route: 'Intradermal (ID) on the right upper arm.',
    safety: {
      adr: ['Local ulceration/scarring', 'Suppurative lymphadenitis'],
      contraindications: ['Immunocompromised individuals', 'HIV infected symptomatic', 'Pregnancy'],
      pregnancyLactation: 'Contraindicated (Live vaccine).'
    },
    pharmacy: {
      strengths: ['Multidose vial (reconstitute with normal saline)'],
      dosageForms: ['Injection'],
      priceNPR: 'Government Supply / Free',
      brandNames: ['BCG']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Do NOT freeze. Discard within 4-6 hours after reconstitution.'],
    searchTags: ['Vaccine', 'Childhood shots', 'BCG', 'Tuberculosis']
  },
  {
    id: 'imm_002',
    genericName: 'Rotavirus Vaccine',
    therapeuticClass: 'Live Attenuated Vaccine',
    categoryId: 'immunologicals',
    indications: ['Rotavirus Gastroenteritis Prophylaxis (Routine immunization)'],
    dosing: {
      adult: 'Not indicated.',
      pediatric: 'Orally at 6 weeks and 10 weeks of age (Schedule depends on the specific brand - typically 2 or 3 doses).'
    },
    route: 'Oral',
    safety: {
      adr: ['Mild diarrhea', 'Irritability', 'Intussusception (rare but serious)'],
      contraindications: ['History of Intussusception', 'Severe Combined Immunodeficiency (SCID)'],
      pregnancyLactation: 'Not applicable.'
    },
    pharmacy: {
      strengths: ['Oral applicator'],
      dosageForms: ['Oral Suspension'],
      priceNPR: 'Government Supply / Free',
      brandNames: ['Rotarix', 'RotaTeq']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C.'],
    searchTags: ['Vaccine', 'Childhood shots', 'Rotavirus', 'Diarrhea']
  },
  {
    id: 'imm_003',
    genericName: 'Oral Polio Vaccine (bOPV)',
    therapeuticClass: 'Live Attenuated Vaccine',
    categoryId: 'immunologicals',
    indications: ['Poliomyelitis Prophylaxis (Routine immunization / Outbreak control)'],
    dosing: {
      adult: 'Usually not routine unless traveling to endemic areas.',
      pediatric: '2 drops Orally at 6, 10, and 14 weeks.'
    },
    route: 'Oral',
    safety: {
      adr: ['Vaccine-associated paralytic poliomyelitis (VAPP) - extremely rare'],
      contraindications: ['Severe immunodeficiency'],
      pregnancyLactation: 'Contraindicated unless high risk of exposure.'
    },
    pharmacy: {
      strengths: ['Multidose dropper vial'],
      dosageForms: ['Oral Drops'],
      priceNPR: 'Government Supply / Free',
      brandNames: ['bOPV']
    },
    notes: ['**COLD CHAIN**: Must be kept frozen (-20°C) for long-term, or 2°C to 8°C for short-term.'],
    searchTags: ['Vaccine', 'Childhood shots', 'Polio']
  },
  {
    id: 'imm_004',
    genericName: 'Fractional Inactivated Poliovirus Vaccine (fIPV)',
    therapeuticClass: 'Inactivated Vaccine',
    categoryId: 'immunologicals',
    indications: ['Poliomyelitis Prophylaxis (Routine immunization)'],
    dosing: {
      adult: 'Routine not required.',
      pediatric: '0.1 ml Intradermal (ID) at 6 and 14 weeks.'
    },
    route: 'Intradermal (ID) on the right upper arm.',
    safety: {
      adr: ['Local erythema', 'Pain at injection site'],
      contraindications: ['Severe allergic reaction to previous dose'],
      pregnancyLactation: 'Safe if required.'
    },
    pharmacy: {
      strengths: ['Multidose vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Government Supply / Free',
      brandNames: ['IPV']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Do NOT freeze.'],
    searchTags: ['Vaccine', 'Childhood shots', 'Polio']
  },
  {
    id: 'imm_005',
    genericName: 'Pneumococcal Conjugate Vaccine (PCV)',
    therapeuticClass: 'Conjugated Polysaccharide Vaccine',
    categoryId: 'immunologicals',
    indications: ['Streptococcus pneumoniae Prophylaxis (Routine immunization)'],
    dosing: {
      adult: 'Specific high-risk groups (PCV13 followed by PPSV23).',
      pediatric: '0.5 ml IM at 6 weeks, 10 weeks, and 9 months.'
    },
    route: 'Intramuscular (IM) in anterolateral mid-thigh.',
    safety: {
      adr: ['Fever', 'Irritability', 'Injection site pain/swelling'],
      contraindications: ['Severe allergy to vaccine component or diphtheria toxoid'],
      pregnancyLactation: 'Pregnancy data limited; usually avoided unless high risk.'
    },
    pharmacy: {
      strengths: ['0.5ml dose'],
      dosageForms: ['Injection'],
      priceNPR: 'Government Supply / Free',
      brandNames: ['Prevenar 13', 'Synflorix']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Do NOT freeze.'],
    searchTags: ['Vaccine', 'Childhood shots', 'Pneumonia']
  },
  {
    id: 'imm_006',
    genericName: 'DPT-HepB-Hib (Pentavalent Vaccine)',
    therapeuticClass: 'Combined Vaccine (Toxoid/Killed/Recombinant)',
    categoryId: 'immunologicals',
    indications: ['Diphtheria, Pertussis, Tetanus, Hepatitis B, and Hemophilus influenzae type B Prophylaxis (Routine immunization)'],
    dosing: {
      adult: 'Not indicated.',
      pediatric: '0.5 ml IM at 6, 10, and 14 weeks of age.'
    },
    route: 'Intramuscular (IM) in anterolateral mid-thigh.',
    safety: {
      adr: ['Fever (common)', 'Local pain/swelling', 'Irritability'],
      contraindications: ['Encephalopathy within 7 days of previous dose'],
      pregnancyLactation: 'Not applicable.'
    },
    pharmacy: {
      strengths: ['0.5ml per dose vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Government Supply / Free',
      brandNames: ['Pentavalent']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Do NOT freeze.'],
    searchTags: ['Vaccine', 'Childhood shots', 'DPT', 'Tetanus']
  },
  {
    id: 'imm_007',
    genericName: 'Measles-Rubella (MR) Vaccine',
    therapeuticClass: 'Live Attenuated Vaccine',
    categoryId: 'immunologicals',
    indications: ['Measles and Rubella Prophylaxis (Routine immunization)'],
    dosing: {
      adult: 'Not routine.',
      pediatric: '0.5 ml Subcutaneous (SC) at 9 months and 15 months.'
    },
    route: 'Subcutaneous (SC) on the right upper arm.',
    safety: {
      adr: ['Mild fever', 'Transient rash', 'Joint pain'],
      contraindications: ['**Anaphylaxis to neomycin/gelatin**', 'Severe immunosuppression', 'Pregnancy'],
      pregnancyLactation: 'Contraindicated (Live vaccine). Avoid pregnancy for 1 month post-vaccination.'
    },
    pharmacy: {
      strengths: ['Multidose vial (reconstitute with diluent)'],
      dosageForms: ['Injection'],
      priceNPR: 'Government Supply / Free',
      brandNames: ['MR Vaccine']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Discard within 4-6 hours of reconstitution.'],
    searchTags: ['Vaccine', 'Childhood shots', 'Measles', 'Rubella']
  },
  {
    id: 'imm_008',
    genericName: 'Japanese Encephalitis (JE) Vaccine',
    therapeuticClass: 'Live Attenuated (SA 14-14-2)',
    categoryId: 'immunologicals',
    indications: ['Japanese Encephalitis Prophylaxis (Routine immunization)'],
    dosing: {
      adult: 'Campaign settings: single dose 0.5 ml SC.',
      pediatric: '0.5 ml Subcutaneous (SC) at 12 months.'
    },
    route: 'Subcutaneous (SC) on the left upper arm.',
    safety: {
      adr: ['Local pain', 'Fever', 'Headache', 'Myalgia'],
      contraindications: ['Immunosuppression', 'Pregnancy'],
      pregnancyLactation: 'Pregnancy: Avoid (Live vaccine). Lactation: Caution.'
    },
    pharmacy: {
      strengths: ['Lyophilized vial with diluent'],
      dosageForms: ['Injection'],
      priceNPR: 'Government Supply / Free',
      brandNames: ['JEEV']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Discard within 1 hour after reconstitution (very short stability).'],
    searchTags: ['Vaccine', 'Childhood shots', 'JE']
  },
  {
    id: 'imm_009',
    genericName: 'Tetanus-diphtheria (Td) Vaccine',
    therapeuticClass: 'Toxoid',
    categoryId: 'immunologicals',
    indications: ['Tetanus and Diphtheria Prophylaxis (Routine immunization, pregnant women, trauma)'] ,
    dosing: {
      adult: '0.5 ml IM. Pregnant women: 2 doses, 1 month apart (if unimmunized). Post-exposure: 1 dose 0.5 ml IM.',
      pediatric: '0.5 ml IM at 15 years as booster (as per some schedules/campaigns) or trauma.'
    },
    route: 'Intramuscular (IM) in deltoid.',
    safety: {
      adr: ['Local pain/erythema', 'Fever', 'Arthus-type reaction (if given too frequently)'],
      contraindications: ['Severe allergic reaction to previous dose'],
      pregnancyLactation: 'Safe and Recommended during pregnancy to prevent maternal/neonatal tetanus.'
    },
    pharmacy: {
      strengths: ['0.5ml dose vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Government Supply / Free',
      brandNames: ['Td Vaccine', 'Dual Antigen']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Do NOT freeze. Replaced TT (Tetanus Toxoid) in most national schedules to maintain diphtheria immunity.'],
    searchTags: ['Vaccine', 'Childhood shots', 'Tetanus', 'Post-exposure']
  }
];
