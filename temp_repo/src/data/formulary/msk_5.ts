import { DrugEntry } from '../../types/formulary';

export const msk5Drugs: DrugEntry[] = [
  // ADDITIONAL GOUT & DMARDS
  {
    id: 'msk_028',
    genericName: 'Sulfinpyrazone',
    therapeuticClass: 'Uricosuric Agent',
    categoryId: 'msk',
    indications: ['Chronic Gout'],
    dosing: { adult: 'PO: 100-200 mg BID with meals.', pediatric: 'Not recommended.' },
    safety: { adr: ['GI upset', 'Uric acid stones'], contraindications: ['Active PUD', 'Acute gout flare'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['100mg tab'], dosageForms: ['Tablet'], priceNPR: 'Varies', brandNames: ['Generic'] },
    notes: ['Infrequently used due to better alternatives.'],
    searchTags: ['Gout', 'Uric acid']
  },
  {
    id: 'msk_029',
    genericName: 'Abatacept',
    therapeuticClass: 'Biologic DMARD (T-cell co-stimulation modulator)',
    categoryId: 'msk',
    indications: ['Rheumatoid arthritis', 'Juvenile Idiopathic Arthritis (JIA)'],
    dosing: { adult: 'IV/SC: Weight-based dosing.', pediatric: 'IV/SC: Weight-based dosing for JIA.' },
    safety: { adr: ['Increased risk of infections', 'Headache', 'Nausea'], contraindications: ['Active severe infections'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['125mg PFS', '250mg vial'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Orencia'] },
    notes: ['Screen for latent TB before use.'],
    searchTags: ['RA', 'Joint pain', 'Autoimmune']
  },
  {
    id: 'msk_030',
    genericName: 'Anakinra',
    therapeuticClass: 'Biologic DMARD (IL-1 receptor antagonist)',
    categoryId: 'msk',
    indications: ['Rheumatoid arthritis', 'Neonatal-onset multisystem inflammatory disease'],
    dosing: { adult: 'SC: 100 mg daily.', pediatric: 'SC: Variable.' },
    safety: { adr: ['Injection site reactions', 'Increased risk of serious infections'], contraindications: ['Active severe infection'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['100mg PFS'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Kineret'] },
    notes: ['Do not combine with TNF blockers due to high infection risk.'],
    searchTags: ['RA', 'Joint pain']
  },
  {
    id: 'msk_031',
    genericName: 'Etanercept',
    therapeuticClass: 'Biologic DMARD (TNF blocker)',
    categoryId: 'msk',
    indications: ['Rheumatoid arthritis', 'Ankylosing spondylitis', 'Plaque psoriasis'],
    dosing: { adult: 'SC: 50 mg once weekly.', pediatric: 'SC: 0.8 mg/kg weekly (max 50mg) for JIA.' },
    safety: { adr: ['Injection site reactions', 'Serious infections (TB)'], contraindications: ['Active infections', 'Sepsis'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['25mg, 50mg PFS'], dosageForms: ['Injection'], priceNPR: 'High cost (~8000-15000+)', brandNames: ['Enbrel', 'Intacept'] },
    notes: ['Screen for TB and Hepatitis B before initiation.'],
    searchTags: ['RA', 'Psoriasis', 'Joint pain']
  },
  {
    id: 'msk_032',
    genericName: 'Infliximab',
    therapeuticClass: 'Biologic DMARD (Anti-TNF monoclonal antibody)',
    categoryId: 'msk',
    indications: ['Rheumatoid arthritis', 'Crohn’s disease', 'Ankylosing spondylitis'],
    dosing: { adult: 'IV: 3-5 mg/kg at 0, 2, 6 weeks, then every 8 weeks.', pediatric: 'IV: Used for Crohn’s/UC.' },
    safety: { adr: ['Infusion reactions', 'Serious infections', 'Heart failure'], contraindications: ['Moderate/Severe heart failure', 'Active infections'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['100mg vial'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Remicade'] },
    notes: ['Administered usually with methotrexate for RA to prevent antibody formation.'],
    searchTags: ['RA', 'IBD', 'Joint pain']
  },
  {
    id: 'msk_033',
    genericName: 'Penicillamine',
    therapeuticClass: 'DMARD / Chelating agent',
    categoryId: 'msk',
    indications: ['Rheumatoid arthritis (historical)', 'Wilson’s disease'],
    dosing: { adult: 'PO: RA: 125-250 mg/day initially. Wilson\'s: 750-1500 mg/day.', pediatric: 'PO: Wilson\'s: 20 mg/kg/day.' },
    safety: { adr: ['Bone marrow suppression', 'Proteinuria', 'Lupus-like syndrome'], contraindications: ['Pregnancy (except for Wilson\'s)', 'History of penicillamine-induced aplastic anemia'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['250mg cap'], dosageForms: ['Capsule'], priceNPR: '250mg cap: ~20-30', brandNames: ['Cilamin'] },
    notes: ['Mostly replaced by newer DMARDs for RA. Critical for Wilson\'s disease.'],
    searchTags: ['Rheumatoid', 'Joint pain']
  },
  {
    id: 'msk_034',
    genericName: 'Tocilizumab',
    therapeuticClass: 'Biologic DMARD (IL-6 receptor antagonist)',
    categoryId: 'msk',
    indications: ['Rheumatoid arthritis', 'Cytokine release syndrome'],
    dosing: { adult: 'IV: 4-8 mg/kg every 4 weeks. SC: 162 mg every week or alternating.', pediatric: 'IV: JIA weight-based.' },
    safety: { adr: ['Elevated liver enzymes', 'Increased infections', 'GI perforations'], contraindications: ['Active infections'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['80mg, 200mg, 400mg vials'], dosageForms: ['Injection'], priceNPR: 'High cost', brandNames: ['Actemra'] },
    notes: ['Monitor LFTs and lipid panels.'],
    searchTags: ['RA', 'Joint pain']
  },
  {
    id: 'msk_035',
    genericName: 'Tofacitinib',
    therapeuticClass: 'Targeted synthetic DMARD (JAK inhibitor)',
    categoryId: 'msk',
    indications: ['Rheumatoid arthritis', 'Ulcerative colitis'],
    dosing: { adult: 'PO: 5 mg BID.', pediatric: 'Not routinely recommended.' },
    safety: { adr: ['Increased cholesterol', 'Infections (Herpes zoster)', 'Thrombosis risk'], contraindications: ['Severe hepatic impairment', 'Active severe infection'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['5mg tab'], dosageForms: ['Tablet'], priceNPR: '5mg tab: ~30-50', brandNames: ['Xeljanz', 'Tofajak'] },
    notes: ['Screen for TB before starting. Avoid live vaccines.'],
    searchTags: ['RA', 'Joint pain']
  },

  // ADDITIONAL NSAIDS & BONE DRUGS
  {
    id: 'msk_036',
    genericName: 'Flurbiprofen',
    therapeuticClass: 'Non-selective NSAID',
    categoryId: 'msk',
    indications: ['Rheumatoid arthritis', 'Osteoarthritis', 'Eye drops for intraoperative miosis'],
    dosing: { adult: 'PO: 50-100 mg BID/TID. Post-meal.', pediatric: 'Not commonly used PO.' },
    safety: { adr: ['GI bleeding', 'Renal impairment'], contraindications: ['Active PUD'], pregnancyLactation: 'Category C (D in 3rd trimester).' },
    pharmacy: { strengths: ['100mg tab', 'Eye drops'], dosageForms: ['Tablet', 'Eye drops'], priceNPR: 'Tablet: ~5', brandNames: ['Flur', 'Ocufen'] },
    notes: ['**CRITICAL ALERT: Avoid "NSAID Stacking".** Take post-meal.'],
    searchTags: ['Joint pain', 'Swelling']
  },
  {
    id: 'msk_037',
    genericName: 'Paracetamol (Acetaminophen)',
    therapeuticClass: 'Analgesic / Antipyretic',
    categoryId: 'msk',
    indications: ['Mild to moderate pain', 'Fever', 'Osteoarthritis (first-line)'],
    dosing: { adult: 'PO: 500-1000 mg every 4-6 hours. Max 4000 mg/day.', pediatric: 'PO: 10-15 mg/kg/dose every 4-6 hours.' },
    safety: { adr: ['Hepatotoxicity (in overdose)'], contraindications: ['Severe hepatic impairment'], pregnancyLactation: 'Category B. Safest analgesic in pregnancy.' },
    pharmacy: { strengths: ['500mg, 650mg tab', '125mg/5ml, 250mg/5ml syrup'], dosageForms: ['Tablet', 'Syrup', 'Injection'], priceNPR: '500mg tab: ~1', brandNames: ['Napa', 'Calpol', 'Dolo'] },
    notes: ['Does not possess anti-inflammatory properties, but often grouped with NSAIDs for mild pain.'],
    searchTags: ['Pain', 'Fever', 'Back pain']
  },
  {
    id: 'msk_038',
    genericName: 'Etidronate',
    therapeuticClass: 'Bisphosphonate',
    categoryId: 'msk',
    indications: ['Paget’s disease', 'Heterotopic ossification'],
    dosing: { adult: 'PO: 5-20 mg/kg/day depending on indication.', pediatric: 'Not recommended.' },
    safety: { adr: ['GI upset', 'Bone pain'], contraindications: ['Osteomalacia'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['200mg tab'], dosageForms: ['Tablet'], priceNPR: 'Varies', brandNames: ['Didronel'] },
    notes: ['Older generation bisphosphonate, rarely used for osteoporosis now.'],
    searchTags: ['Bone loss']
  },
  {
    id: 'msk_039',
    genericName: 'Pamidronate',
    therapeuticClass: 'Bisphosphonate',
    categoryId: 'msk',
    indications: ['Hypercalcemia of malignancy', 'Paget’s disease', 'Bone metastases'],
    dosing: { adult: 'IV: 60-90 mg infusion over several hours.', pediatric: 'Specialized use only.' },
    safety: { adr: ['Fever', 'Electrolyte imbalances', 'Osteonecrosis of the jaw'], contraindications: ['Pregnancy'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['30mg, 90mg vials'], dosageForms: ['Injection'], priceNPR: '90mg vial: ~2000+', brandNames: ['Aredia', 'Pamidro'] },
    notes: ['Ensure adequate hydration before infusion. Given strictly via slow IV infusion.'],
    searchTags: ['Bone pain', 'Calcium']
  },
  {
    id: 'msk_040',
    genericName: 'Dexmedetomidine',
    therapeuticClass: 'Alpha-2 Adrenergic Agonist / Sedative',
    categoryId: 'msk',
    indications: ['ICU sedation', 'Procedural sedation'],
    dosing: { adult: 'IV: Loading 1 mcg/kg over 10 mins, then 0.2-0.7 mcg/kg/hr.', pediatric: 'IV: Per specific intensive care protocols.' },
    safety: { adr: ['Bradycardia', 'Hypotension'], contraindications: ['Advanced heart block'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['100mcg/ml ampoule'], dosageForms: ['Injection'], priceNPR: 'Ampoule: ~500-1000', brandNames: ['Precedex', 'Dexem'] },
    notes: ['Not a standard muscle relaxant for MSK issues; used for sedation in ICU settings with some mild relaxant properties.'],
    searchTags: ['Sedation']
  }
];
