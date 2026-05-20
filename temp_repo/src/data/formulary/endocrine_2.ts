import { DrugEntry } from '../../types/formulary';

export const endocrine2Drugs: DrugEntry[] = [
  // ORAL ANTI-DIABETIC DRUGS
  
  // α-glucosidase inhibitors
  {
    id: 'end_017',
    genericName: 'Acarbose',
    therapeuticClass: 'alpha-Glucosidase Inhibitor',
    categoryId: 'endocrine',
    indications: ['Type 2 DM'],
    dosing: { adult: 'PO: 25 mg TID with the first bite of each main meal. Max 100 mg TID.', pediatric: 'Not recommended.' },
    safety: { adr: ['Flatulence', 'Diarrhea', 'Abdominal pain'], contraindications: ['Inflammatory bowel disease', 'Intestinal obstruction', 'Hepatic cirrhosis'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['25mg tab', '50mg tab'], dosageForms: ['Tablet'], priceNPR: '25mg tab: 5-8', brandNames: ['Glucobay', 'Acar'] },
    notes: ['Must be taken with the first bite of a meal. Treats post-prandial hyperglycemia.'],
    searchTags: ['Diabetes', 'Sugar']
  },

  // Biguanides
  {
    id: 'end_018',
    genericName: 'Metformin',
    therapeuticClass: 'Biguanide',
    categoryId: 'endocrine',
    indications: ['Type 2 DM', 'PCOS (off-label)', 'GDM (off-label in some practices)'],
    dosing: { adult: 'PO: 500 mg OD or BID with meals. Max 2000-2500 mg/day.', pediatric: 'PO: >10 yrs: 500 mg OD, titrate up to 2000 mg/day.' },
    safety: { adr: ['GI upset', 'Vitamin B12 deficiency', '**Lactic Acidosis** (rare but severe)'], contraindications: ['Severe renal impairment (eGFR <30)', 'Metabolic acidosis', 'Hypoxia/Sepsis'], pregnancyLactation: 'Category B (Insulin preferred for GDM).' },
    pharmacy: { strengths: ['500mg tab', '850mg tab', '1000mg tab', '500mg ER', '1000mg ER'], dosageForms: ['Tablet', 'Extended Release (ER) Tablet'], priceNPR: '500mg tab: 2-4', brandNames: ['Glycomet', 'Metmac'] },
    notes: ['First-line therapy for T2DM. Weight neutral or slight weight loss. Hold prior to IV contrast.'],
    searchTags: ['Diabetes', 'Sugar', 'Weight loss']
  },

  // Dipeptidyl peptidase-4 inhibitors
  {
    id: 'end_019',
    genericName: 'Sitagliptin',
    therapeuticClass: 'DPP-4 Inhibitor',
    categoryId: 'endocrine',
    indications: ['Type 2 DM'],
    dosing: { adult: 'PO: 100 mg OD.', pediatric: 'Not recommended.' },
    safety: { adr: ['Nasopharyngitis', 'Headache', 'Pancreatitis (rare)', 'Joint pain'], contraindications: ['History of hypersensitivity or anaphylaxis'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['50mg tab', '100mg tab', '50mg/500mg (combo with Metformin)', '50mg/1000mg (combo)'], dosageForms: ['Tablet'], priceNPR: '50mg tab: 15-25 (Combinations: 20-35)', brandNames: ['Januvia', 'Janumet (combo)', 'Istamet (combo)'] },
    notes: ['Renal dose adjustment required. Low risk of hypoglycemia.'],
    searchTags: ['Diabetes', 'Sugar']
  },

  // Glucagon like peptide-1 agonists
  {
    id: 'end_020',
    genericName: 'Liraglutide',
    therapeuticClass: 'GLP-1 Receptor Agonist',
    categoryId: 'endocrine',
    indications: ['Type 2 DM', 'Obesity / Weight Management'],
    dosing: { adult: 'SC: 0.6 mg daily for 1 week, then 1.2 mg daily. Max 1.8 mg for DM (3.0 mg for weight loss).', pediatric: 'SC: >10 yrs for T2DM.' },
    safety: { adr: ['Nausea', 'Vomiting', 'Diarrhea', 'Pancreatitis'], contraindications: ['Personal or family history of medullary thyroid carcinoma or MEN 2'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['6mg/ml preset pen'], dosageForms: ['Subcutaneous Injection Pen'], priceNPR: 'Pen: Very high (e.g. 5000-10000+ depending on import)', brandNames: ['Victoza', 'Saxenda'] },
    notes: ['Storage: Cold Chain (2°C to 8°C). Promotes significant weight loss. Cardioprotective.'],
    searchTags: ['Diabetes', 'Sugar', 'Weight loss']
  },

  // Meglitinide/Phenylalanine analogues
  {
    id: 'end_021',
    genericName: 'Repaglinide',
    therapeuticClass: 'Meglitinide',
    categoryId: 'endocrine',
    indications: ['Type 2 DM'],
    dosing: { adult: 'PO: 0.5-4 mg taken 15-30 mins prior to meals. Max 16 mg/day.', pediatric: 'Not recommended.' },
    safety: { adr: ['**Hypoglycemia**', 'Weight gain'], contraindications: ['Coadministration with gemfibrozil', 'Type 1 DM', 'DKA'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['0.5mg tab', '1mg tab', '2mg tab'], dosageForms: ['Tablet'], priceNPR: '0.5mg tab: 5-10', brandNames: ['Novonorm', 'Eurepa'] },
    notes: ['Skip dose if skipping a meal to prevent hypoglycemia.'],
    searchTags: ['Diabetes', 'Sugar', 'Hypoglycemia', 'Weight gain']
  },

  // Sulfonylureas
  {
    id: 'end_022',
    genericName: 'Chlorpropamide',
    therapeuticClass: 'First Generation Sulfonylurea',
    categoryId: 'endocrine',
    indications: ['Type 2 DM (Historical/Rarely used)'],
    dosing: { adult: 'PO: 100-250 mg OD.', pediatric: 'Not recommended.' },
    safety: { adr: ['**Hypoglycemia** (prolonged)', 'Disulfiram-like reaction with alcohol', 'SIADH'], contraindications: ['Renal/hepatic impairment', 'Elderly'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['250mg tab'], dosageForms: ['Tablet'], priceNPR: 'Rarely available', brandNames: ['Diabinese'] },
    notes: ['Very long half-life leads to dangerous prolonged hypoglycemia. Avoid in elderly.'],
    searchTags: ['Diabetes', 'Sugar', 'Hypoglycemia']
  },
  {
    id: 'end_023',
    genericName: 'Glibenclamide',
    therapeuticClass: 'Second Generation Sulfonylurea',
    categoryId: 'endocrine',
    indications: ['Type 2 DM'],
    dosing: { adult: 'PO: 2.5-5 mg OD with breakfast. Max 15 mg/day.', pediatric: 'Not recommended.' },
    safety: { adr: ['**Hypoglycemia**', 'Weight gain'], contraindications: ['Renal impairment', 'Hepatic impairment', 'Type 1 DM'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['2.5mg tab', '5mg tab'], dosageForms: ['Tablet'], priceNPR: '5mg tab: 1-3', brandNames: ['Daonil', 'Euglucon'] },
    notes: ['Also known as Glyburide. High risk of hypoglycemia; avoid in the elderly.'],
    searchTags: ['Diabetes', 'Sugar', 'Hypoglycemia', 'Weight gain']
  },
  {
    id: 'end_024',
    genericName: 'Gliclazide',
    therapeuticClass: 'Second Generation Sulfonylurea',
    categoryId: 'endocrine',
    indications: ['Type 2 DM'],
    dosing: { adult: 'PO: 40-80 mg daily. Max 320 mg/day (divided). Modified release (MR): 30-120 mg OD.', pediatric: 'Not recommended.' },
    safety: { adr: ['**Hypoglycemia**', 'Weight gain'], contraindications: ['Severe renal/hepatic failure', 'Type 1 DM'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['80mg tab', '30mg MR', '60mg MR'], dosageForms: ['Tablet', 'Modified Release Tablet'], priceNPR: '80mg tab: 2-5', brandNames: ['Diamicron', 'Reclimet (combo)'] },
    notes: ['Lower risk of hypoglycemia compared to glibenclamide. Safe option among sulfonylureas for elderly.'],
    searchTags: ['Diabetes', 'Sugar', 'Hypoglycemia', 'Weight gain']
  },
  {
    id: 'end_025',
    genericName: 'Glipizide',
    therapeuticClass: 'Second Generation Sulfonylurea',
    categoryId: 'endocrine',
    indications: ['Type 2 DM'],
    dosing: { adult: 'PO: 5 mg OD 30 mins before breakfast. Max 40 mg/day.', pediatric: 'Not recommended.' },
    safety: { adr: ['**Hypoglycemia**', 'Weight gain'], contraindications: ['Type 1 DM', 'Severe hepatic impairment'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['5mg tab', '10mg tab'], dosageForms: ['Tablet'], priceNPR: '5mg tab: 2-4', brandNames: ['Glynase'] },
    notes: ['Short-acting, which reduces risk of late hypoglycemia.'],
    searchTags: ['Diabetes', 'Sugar', 'Hypoglycemia', 'Weight gain']
  },

  // Thiazolidinediones
  {
    id: 'end_026',
    genericName: 'Pioglitazone',
    therapeuticClass: 'Thiazolidinedione',
    categoryId: 'endocrine',
    indications: ['Type 2 DM'],
    dosing: { adult: 'PO: 15-30 mg OD. Max 45 mg/day.', pediatric: 'Not recommended.' },
    safety: { adr: ['Weight gain', 'Edema', 'Heart failure exacerbation', 'Bone fractures'], contraindications: ['NYHA Class III or IV heart failure', 'Active bladder cancer'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['15mg tab', '30mg tab'], dosageForms: ['Tablet'], priceNPR: '15mg tab: 5-8', brandNames: ['Pioz', 'Piomed'] },
    notes: ['Takes weeks to months to see full glycemic benefit.'],
    searchTags: ['Diabetes', 'Sugar', 'Weight gain']
  },
  {
    id: 'end_027',
    genericName: 'Rosiglitazone',
    therapeuticClass: 'Thiazolidinedione',
    categoryId: 'endocrine',
    indications: ['Type 2 DM'],
    dosing: { adult: 'PO: 4 mg OD or divided BID. Max 8 mg/day.', pediatric: 'Not recommended.' },
    safety: { adr: ['Edema', 'Weight gain', 'Increased cardiovascular risk (MI)', 'Heart failure exacerbation'], contraindications: ['NYHA Class III or IV heart failure'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['2mg tab', '4mg tab'], dosageForms: ['Tablet'], priceNPR: '4mg tab: 5-10', brandNames: ['Avandia (Often restricted)'] },
    notes: ['Highly restricted in many regions due to cardiovascular risk profile.'],
    searchTags: ['Diabetes', 'Sugar', 'Weight gain']
  }
];
