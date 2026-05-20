import { DrugEntry } from '../../types/formulary';

export const infections4Drugs: DrugEntry[] = [
  // ANTIMALARIALS (continued)
  {
    id: 'inf_166',
    genericName: 'Primaquine',
    therapeuticClass: 'Antimalarial',
    categoryId: 'infections',
    indications: ['P. vivax and P. ovale malaria (Radical Cure)', 'PCP Pneumonia (+Clindamycin)'],
    dosing: { adult: 'PO: 15-30 mg base daily for 14 days.', pediatric: 'PO: 0.25-0.5 mg base/kg/day for 14 days.' },
    safety: { adr: ['Hemolytic anemia (G6PD deficiency)', 'Abdominal cramps', 'Methemoglobinemia'], contraindications: ['Severe G6PD deficiency', 'Pregnancy'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['7.5mg, 15mg tab'], dosageForms: ['Tablet'], priceNPR: '15mg tab: 5-8', brandNames: ['Malirid', 'Primac'] },
    notes: ['G6PD testing mandatory before starting. Used to eradicate liver hypnozoites.'],
    searchTags: ['Infection', 'Malaria']
  },
  {
    id: 'inf_167',
    genericName: 'Quinine',
    therapeuticClass: 'Antimalarial',
    categoryId: 'infections',
    indications: ['Severe falciparum malaria (if artesunate unavailable)', 'Nocturnal leg cramps (off-label, discouraged)'],
    dosing: { adult: 'IV: 20 mg/kg loading over 4 hours, then 10 mg/kg Q8H.', pediatric: 'IV: Same as adult.' },
    safety: { adr: ['Cinchonism (tinnitus, headache, visual changes)', 'Hypoglycemia (severe)', 'QT prolongation'], contraindications: ['Optic neuritis', 'History of Blackwater fever'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['300mg tab', '300mg/ml inj'], dosageForms: ['Tablet', 'Injection'], priceNPR: '300mg tab: 8-12', brandNames: ['Quinine Sulphate', 'Rez Q'] },
    notes: ['Must monitor blood glucose closely (causes profound hyperinsulinemic hypoglycemia).'],
    searchTags: ['Infection', 'Malaria', 'Fever']
  },

  // ANTI-TUBERCULAR
  {
    id: 'inf_168',
    genericName: 'Bedaquiline',
    therapeuticClass: 'Anti-Tubercular (Diarylquinoline)',
    categoryId: 'infections',
    indications: ['Multidrug-Resistant Tuberculosis (MDR-TB)', 'TB'],
    dosing: { adult: 'PO: 400 mg daily for 2 weeks, then 200 mg three times per week for 22 weeks.', pediatric: 'PO: Dosing varies by weight primarily for adolescents/older children under specialized programmatic logic.' },
    safety: { adr: ['QT prolongation', 'Hepatotoxicity', 'Arthralgia'], contraindications: ['Hypersensitivity', 'Baseline QT > 500ms'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['100mg tab'], dosageForms: ['Tablet'], priceNPR: 'Restricted under NTP', brandNames: ['Sirturo'] },
    notes: ['Must be given under strict DOT. Monitor ECG frequently.'],
    searchTags: ['Infection', 'TB']
  },
  {
    id: 'inf_169',
    genericName: 'Cycloserine',
    therapeuticClass: 'Anti-Tubercular (Second Line)',
    categoryId: 'infections',
    indications: ['MDR-TB', 'TB'],
    dosing: { adult: 'PO: 250-500 mg BID.', pediatric: 'PO: 10-20 mg/kg/day.' },
    safety: { adr: ['Psychosis', 'Seizures', 'Depression/Suicidal ideation', 'Peripheral neuropathy'], contraindications: ['History of epilepsy', 'Severe depression or psychosis'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['250mg cap'], dosageForms: ['Capsule'], priceNPR: 'Restricted under NTP', brandNames: ['Cyclorin'] },
    notes: ['Administer Pyridoxine (Vitamin B6) 50mg for every 250mg of cycloserine to prevent neurotoxicity.'],
    searchTags: ['Infection', 'TB']
  },
  {
    id: 'inf_170',
    genericName: 'Ethionamide',
    therapeuticClass: 'Anti-Tubercular (Second Line)',
    categoryId: 'infections',
    indications: ['MDR-TB', 'TB'],
    dosing: { adult: 'PO: 15-20 mg/kg/day (up to 1g/day).', pediatric: 'PO: 15-20 mg/kg/day.' },
    safety: { adr: ['Severe GI upset', 'Hepatotoxicity', 'Hypothyroidism', 'Metallic taste'], contraindications: ['Severe liver impairment'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['250mg tab'], dosageForms: ['Tablet'], priceNPR: 'Restricted under NTP', brandNames: ['Ethide'] },
    notes: ['High rate of GI intolerance. Check thyroid function periodically.'],
    searchTags: ['Infection', 'TB']
  },
  {
    id: 'inf_171',
    genericName: 'Streptomycin',
    therapeuticClass: 'Aminoglycoside / First-line Anti-TB (Historical)',
    categoryId: 'infections',
    indications: ['Tuberculosis (severe/resistant cases)', 'Brucellosis', 'TB'],
    dosing: { adult: 'IM: 15 mg/kg OD.', pediatric: 'IM: 20-40 mg/kg OD.' },
    safety: { adr: ['Vestibular ototoxicity (dizziness/vertigo)', 'Nephrotoxicity', 'Pain at injection site'], contraindications: ['Pregnancy (causes fetal deafness)', 'Myasthenia gravis'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['0.75g, 1g vial'], dosageForms: ['Injection'], priceNPR: '1g vial: 15-25', brandNames: ['Ambistryn-S'] },
    notes: ['Generally replaced by oral regimens unless resistance dictates its need in TB. Given IM.'],
    searchTags: ['Infection', 'TB']
  },

  // ANTI-VIRALS (HEPATITIS / HERPES / INFLUENZA)
  {
    id: 'inf_172',
    genericName: 'Entecavir',
    therapeuticClass: 'Nucleoside Analog Anti-Viral',
    categoryId: 'infections',
    indications: ['Chronic Hepatitis B'],
    dosing: { adult: 'PO: 0.5 mg daily. If lamivudine-refractory: 1 mg daily.', pediatric: 'PO: (>2 yrs) Weight-based.' },
    safety: { adr: ['Lactic acidosis', 'Severe hepatomegaly with steatosis', 'Headache'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['0.5mg, 1mg tab'], dosageForms: ['Tablet'], priceNPR: '0.5mg tab: 25-40', brandNames: ['Entavir', 'Baraclude'] },
    notes: ['Must be taken on an empty stomach (2 hours before/after a meal).'],
    searchTags: ['Infection', 'Hepatitis']
  },
  {
    id: 'inf_173',
    genericName: 'Sofosbuvir',
    therapeuticClass: 'HCV NS5B Polymerase Inhibitor',
    categoryId: 'infections',
    indications: ['Chronic Hepatitis C'],
    dosing: { adult: 'PO: 400 mg daily (typically with Velpatasvir/Daclatasvir/Ribavirin based on genotype).', pediatric: 'PO: Not widely standard in typical apps, refer to specialized hep guidelines.' },
    safety: { adr: ['Fatigue', 'Headache', 'Severe bradycardia if coadministered with amiodarone'], contraindications: ['Use with strong CYP inducers (e.g., rifampin, St. John’s wort)'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['400mg tab'], dosageForms: ['Tablet'], priceNPR: '400mg tab: 800-1500', brandNames: ['MyHep', 'SoviHep'] },
    notes: ['Do not use with amiodarone due to fatal symptomatic bradycardia.'],
    searchTags: ['Infection', 'Hepatitis']
  },
  {
    id: 'inf_174',
    genericName: 'Acyclovir',
    therapeuticClass: 'Anti-herpes Virus Agent',
    categoryId: 'infections',
    indications: ['Herpes Simplex Virus (HSV)', 'Varicella Zoster Virus (VZV)', 'Herpes encephalitis'],
    dosing: { adult: 'PO for HSV: 400 mg TID or 200 mg 5 times a day. IV (Encephalitis): 10 mg/kg Q8H.', pediatric: 'IV: 10-15 mg/kg Q8H.' },
    safety: { adr: ['Crystalline nephropathy (IV)', 'Nausea', 'Headache'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['200mg, 400mg, 800mg tab', '500mg IV', '5% Cream'], dosageForms: ['Tablet', 'Injection', 'Cream'], priceNPR: '400mg tab: 15-20', brandNames: ['Zovirax', 'Acivir'] },
    notes: ['Adequate hydration is critical during IV infusion to prevent crystalline nephrotoxicity.'],
    searchTags: ['Infection', 'Herpes', 'Meningitis']
  },
  {
    id: 'inf_175',
    genericName: 'Oseltamivir',
    therapeuticClass: 'Neuraminidase Inhibitor',
    categoryId: 'infections',
    indications: ['Influenza A and B (Treatment and Prophylaxis)'],
    dosing: { adult: 'PO: 75 mg BID for 5 days.', pediatric: 'PO: Weight based (e.g. >40kg: 75 mg BID).' },
    safety: { adr: ['Nausea/Vomiting', 'Neuropsychiatric events (rare)'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['75mg cap', '12mg/ml syr'], dosageForms: ['Capsule', 'Suspension'], priceNPR: '75mg cap: 60-100', brandNames: ['Tamiflu', 'Fluvir'] },
    notes: ['Most effective when started within 48 hours of symptom onset.'],
    searchTags: ['Infection', 'Influenza', 'Fever']
  },

  // ANTI-RETROVIRALS (ARVs)
  {
    id: 'inf_176',
    genericName: 'Tenofovir disoproxil fumarate (TDF)',
    therapeuticClass: 'Nucleotide Reverse Transcriptase Inhibitor (NRTI)',
    categoryId: 'infections',
    indications: ['HIV-1 Infection', 'Chronic Hepatitis B'],
    dosing: { adult: 'PO: 300 mg OD.', pediatric: 'PO: (>35kg) 300 mg OD.' },
    safety: { adr: ['Nephrotoxicity', 'Decreased bone mineral density', 'Lactic acidosis'], contraindications: ['Severe renal impairment without dose adjustment'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['300mg tab'], dosageForms: ['Tablet'], priceNPR: 'Usually free via ART centers', brandNames: ['Tenvir', 'Ricovir'] },
    notes: ['Often combined with Lamivudine and Efavirenz or Dolutegravir.'],
    searchTags: ['Infection', 'HIV']
  },
  {
    id: 'inf_177',
    genericName: 'Lamivudine (3TC)',
    therapeuticClass: 'NRTI',
    categoryId: 'infections',
    indications: ['HIV-1 Infection', 'Chronic Hepatitis B'],
    dosing: { adult: 'PO: 300 mg OD or 150 mg BID. (HBV dose is 100mg OD).', pediatric: 'PO: 4 mg/kg BID.' },
    safety: { adr: ['Headache', 'Nausea', 'Lactic acidosis (rare but severe)'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['100mg, 150mg, 300mg tab'], dosageForms: ['Tablet'], priceNPR: 'Usually free via ART centers', brandNames: ['Lamivir', 'Heptavir'] },
    notes: ['Exceptionally well tolerated compared to older NRTIs.'],
    searchTags: ['Infection', 'HIV']
  },
  {
    id: 'inf_178',
    genericName: 'Efavirenz (EFV)',
    therapeuticClass: 'Non-Nucleoside Reverse Transcriptase Inhibitor (NNRTI)',
    categoryId: 'infections',
    indications: ['HIV-1 Infection'],
    dosing: { adult: 'PO: 600 mg OD (at bedtime on an empty stomach).', pediatric: 'PO: Weight based.' },
    safety: { adr: ['Vivid dreams/Nightmares', 'Dizziness', 'Rash', 'Hepatotoxicity'], contraindications: ['First trimester pregnancy (historical concern, now considered safer, but still caution)'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['200mg, 600mg tab'], dosageForms: ['Tablet'], priceNPR: 'Free via ART centers', brandNames: ['Efavir'] },
    notes: ['Taking safely on an empty stomach at bedtime minimizes central nervous system side effects.'],
    searchTags: ['Infection', 'HIV']
  },
  {
    id: 'inf_179',
    genericName: 'Lopinavir + Ritonavir (LPV/r)',
    therapeuticClass: 'Protease Inhibitor + Booster',
    categoryId: 'infections',
    indications: ['HIV-1 Infection (Second-line)'],
    dosing: { adult: 'PO: 400/100 mg BID.', pediatric: 'PO: Weight based.' },
    safety: { adr: ['Severe diarrhea', 'Hyperlipidemia', 'Hyperglycemia', 'Hepatotoxicity'], contraindications: ['Use with strong CYP3A4 substrates (e.g. Amiodarone, Simvastatin)'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['200/50mg tab', 'Oral solution'], dosageForms: ['Tablet', 'Syrup'], priceNPR: 'Free via ART centers', brandNames: ['Kaletra', 'Lopimune'] },
    notes: ['Ritonavir is used solely as a pharmacokinetic booster to inhibit CYP3A4 and increase Lopinavir levels.'],
    searchTags: ['Infection', 'HIV']
  },
  {
    id: 'inf_180',
    genericName: 'Zidovudine (AZT)',
    therapeuticClass: 'NRTI',
    categoryId: 'infections',
    indications: ['HIV-1 Infection', 'PMTCT (Prevention of Mother To Child Transmission)'],
    dosing: { adult: 'PO: 300 mg BID.', pediatric: 'PO: Weight based.' },
    safety: { adr: ['Megaloblastic anemia', 'Neutropenia', 'Myopathy', 'Lactic acidosis'], contraindications: ['Severe anemia (Hb < 7.5) or neutropenia'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['300mg tab', 'Syrup'], dosageForms: ['Tablet', 'Syrup', 'IV'], priceNPR: 'Free via ART centers', brandNames: ['Retrovir', 'Zidovir'] },
    notes: ['Oldest ARV. Used actively during labor to prevent transmission to the newborn, though largely replaced by TDF in standard regimens due to toxicity.'],
    searchTags: ['Infection', 'HIV']
  }
];
