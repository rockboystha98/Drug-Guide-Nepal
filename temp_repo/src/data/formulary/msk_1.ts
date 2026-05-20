import { DrugEntry } from '../../types/formulary';

export const msk1Drugs: DrugEntry[] = [
  // DRUGS USED IN GOUT
  {
    id: 'msk_001',
    genericName: 'Allopurinol',
    therapeuticClass: 'Xanthine Oxidase Inhibitor',
    categoryId: 'msk',
    indications: ['Chronic Gout', 'Hyperuricemia', 'Tumor Lysis Syndrome prophylaxis'],
    dosing: { adult: 'PO: 100-300 mg daily. Max 900 mg/day (take after meals).', pediatric: 'PO: 10 mg/kg/day (mainly for oncology indications).' },
    safety: { adr: ['Skin rash (Stevens-Johnson syndrome risk)', 'Hepatotoxicity', 'GI upset'], contraindications: ['Acute gout flare', 'Severe renal impairment without dose adjustment'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['100mg tab', '300mg tab'], dosageForms: ['Tablet'], priceNPR: '100mg tab: ~2-5', brandNames: ['Zyloric', 'Zyloprim'] },
    notes: ['**Senior Pearl: Do not start during an acute attack of gout (can worsen flare).** Maintain high fuid intake.'],
    searchTags: ['Gout', 'Uric acid', 'Joint pain']
  },
  {
    id: 'msk_002',
    genericName: 'Colchicine',
    therapeuticClass: 'Anti-gout Agent',
    categoryId: 'msk',
    indications: ['Acute Gout flares', 'Familial Mediterranean Fever'],
    dosing: { adult: 'PO: Acute flare: 1 mg initially, followed by 0.5 mg 1 hour later. Prophylaxis: 0.5 mg OD-BID.', pediatric: 'Specific rheumatology protocols only.' },
    safety: { adr: ['Severe diarrhea', 'Nausea/Vomiting', 'Bone marrow suppression (rare)'], contraindications: ['Severe renal impairment', 'Severe hepatic impairment'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['0.5mg tab'], dosageForms: ['Tablet'], priceNPR: '0.5mg tab: ~5-10', brandNames: ['Goutnil', 'Colchic'] },
    notes: ['Should be initiated within 12-24 hours of flare onset for best efficacy. Avoid grapefruit juice.'],
    searchTags: ['Gout', 'Joint pain', 'Swelling']
  },
  {
    id: 'msk_003',
    genericName: 'Febuxostat',
    therapeuticClass: 'Xanthine Oxidase Inhibitor',
    categoryId: 'msk',
    indications: ['Chronic Gout', 'Hyperuricemia'],
    dosing: { adult: 'PO: 40-80 mg daily.', pediatric: 'Not established.' },
    safety: { adr: ['Liver function abnormalities', 'Nausea', 'Cardiovascular risk potentially higher than allopurinol'], contraindications: ['Concurrent use with azathioprine or mercaptopurine', 'Acute gout flare'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['40mg tab', '80mg tab'], dosageForms: ['Tablet'], priceNPR: '40mg tab: ~10-20', brandNames: ['Febutaz', 'Feburic'] },
    notes: ['**Senior Pearl: Do not start during an acute attack of gout.** Does not require renal dose adjustment as strictly as allopurinol.'],
    searchTags: ['Gout', 'Uric acid', 'Joint pain']
  },
  {
    id: 'msk_004',
    genericName: 'Probenecid',
    therapeuticClass: 'Uricosuric Agent',
    categoryId: 'msk',
    indications: ['Chronic Gout', 'Adjunct to penicillin therapy to prolong blood levels'],
    dosing: { adult: 'PO: 250 mg BID for 1 week, then 500 mg BID.', pediatric: 'PO: Not recommended for gout in children.' },
    safety: { adr: ['GI upset', 'Kidney stones (uric acid)', 'Rash'], contraindications: ['Acute gout flare', 'Uric acid kidney stones', 'Blood dyscrasias'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['500mg tab'], dosageForms: ['Tablet'], priceNPR: '500mg tab: ~15-25', brandNames: ['Proben'] },
    notes: ['Maintain high fluid intake to prevent uric acid crystallization in kidneys. Inefective if eGFR <30.'],
    searchTags: ['Gout', 'Uric acid']
  },

  // DMARDs
  {
    id: 'msk_005',
    genericName: 'Hydroxychloroquine sulfate (HCQS)',
    therapeuticClass: 'DMARD / Antimalarial',
    categoryId: 'msk',
    indications: ['Rheumatoid Arthritis (RA)', 'Systemic Lupus Erythematosus (SLE)', 'Malaria (rarely used now)'],
    dosing: { adult: 'PO: 200-400 mg daily. Take with food.', pediatric: 'PO: Up to 6.5 mg/kg/day (ideal body weight).' },
    safety: { adr: ['**Retinopathy / Maculopathy** (irreversible vision loss risk)', 'GI upset', 'QT prolongation'], contraindications: ['Pre-existing maculopathy of the eye'], pregnancyLactation: 'Category C. Usually continued in pregnancy for SLE/RA control as flares are riskier.' },
    pharmacy: { strengths: ['200mg tab', '400mg tab'], dosageForms: ['Tablet'], priceNPR: '200mg tab: ~5-15', brandNames: ['HCQS', 'ZyQ'] },
    notes: ['Annual ophthalmology screening required for retinal toxicity.'],
    searchTags: ['Joint pain', 'Autoimmune', 'RA', 'Lupus']
  },
  {
    id: 'msk_006',
    genericName: 'Sulfasalazine',
    therapeuticClass: 'DMARD',
    categoryId: 'msk',
    indications: ['Rheumatoid Arthritis', 'Inflammatory Bowel Disease (IBD)', 'Ankylosing Spondylitis'],
    dosing: { adult: 'PO: 500 mg daily, increasing to 1-2 g BID after meals.', pediatric: 'PO: JIA: 30-50 mg/kg/day divided.' },
    safety: { adr: ['Oligospermia (reversible)', 'Bone marrow suppression', 'Rash/SJS', 'Orange-yellow urine'], contraindications: ['Sulfa allergy', 'Porphyria'], pregnancyLactation: 'Category B (D near term).' },
    pharmacy: { strengths: ['500mg tab'], dosageForms: ['Tablet'], priceNPR: '500mg tab: ~5-10', brandNames: ['Saaz', 'Salazopyrin'] },
    notes: ['Supplement with folic acid. May cause orange/yellow discoloration of urine and skin.'],
    searchTags: ['Joint pain', 'Arthritis', 'IBD']
  },
  {
    id: 'msk_007',
    genericName: 'Leflunomide',
    therapeuticClass: 'DMARD (Pyrimidine synthesis inhibitor)',
    categoryId: 'msk',
    indications: ['Rheumatoid Arthritis', 'Psoriatic Arthritis'],
    dosing: { adult: 'PO: 100 mg daily for 3 days (loading), then 10-20 mg daily.', pediatric: 'Rarely used.' },
    safety: { adr: ['**Hepatotoxicity**', '**Teratogenicity**', 'Diarrhea', 'Alopecia'], contraindications: ['Pregnancy (highly teratogenic)', 'Severe hepatic impairment'], pregnancyLactation: 'Category X.' },
    pharmacy: { strengths: ['10mg tab', '20mg tab'], dosageForms: ['Tablet'], priceNPR: '20mg tab: ~30-50', brandNames: ['Lefra', 'Rumalef'] },
    notes: ['Very long half-life. Washout procedure (cholestyramine) required if pregnancy is desired.'],
    searchTags: ['Joint pain', 'Arthritis']
  },
  {
    id: 'msk_008',
    genericName: 'Adalimumab',
    therapeuticClass: 'Biologic DMARD (Anti-TNF alpha)',
    categoryId: 'msk',
    indications: ['Rheumatoid Arthritis', 'Ankylosing Spondylitis', 'Crohn’s disease'],
    dosing: { adult: 'SC: 40 mg every other week.', pediatric: 'SC: Body weight dependent for JIA.' },
    safety: { adr: ['Increased risk of infections (TB reactivation)', 'Injection site reactions', 'Heart failure exacerbation'], contraindications: ['Active tuberculosis', 'Severe heart failure', 'Active severe infections'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['40mg PFS'], dosageForms: ['Prefilled Syringe'], priceNPR: '40mg PFS: High cost (thousands)', brandNames: ['Humira', 'Exemptia'] },
    notes: ['Requires TB screening (Mantoux/IGRA) before initiation. Keep refrigerated.'],
    searchTags: ['Joint pain', 'Autoimmune', 'Biologic']
  }
];
