import { DrugEntry } from '../../types/formulary';

export const endocrine1Drugs: DrugEntry[] = [
  // ADRENAL HORMONES AND SYNTHETIC SUBSTITUENTS
  {
    id: 'end_001',
    genericName: 'Beclomethasone',
    therapeuticClass: 'Corticosteroid',
    categoryId: 'endocrine',
    indications: ['Asthma prophylaxis', 'Allergic rhinitis'],
    dosing: { adult: 'Inhalation: 200-400 mcg twice daily.', pediatric: 'Inhalation: 100-200 mcg twice daily.' },
    safety: { adr: ['Oral candidiasis (thrush)', 'Cough/hoarseness', '**Adrenal Suppression** (with high systemic doses)'], contraindications: ['Status asthmaticus', 'Acute asthma attack requiring intensive measures'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['100 mcg/dose inhaler', '200 mcg/dose inhaler'], dosageForms: ['Inhaler', 'Nasal spray'], priceNPR: '200mcg/dose: 300-450', brandNames: ['Beclate'] },
    notes: ['Rinse mouth after use to prevent oral thrush.'],
    searchTags: ['Steroid', 'Asthma']
  },
  {
    id: 'end_002',
    genericName: 'Betamethasone',
    therapeuticClass: 'Corticosteroid',
    categoryId: 'endocrine',
    indications: ['Severe allergic conditions', 'Inflammatory disorders', 'Fetal lung maturity (premature labor)'],
    dosing: { adult: 'PO: 0.5-5 mg daily. IM for fetal lung maturity: 12 mg, repeated once after 24 hrs.', pediatric: 'PO: 0.0175-0.25 mg/kg/day divided.' },
    safety: { adr: ['Weight gain', 'Hyperglycemia', '**Adrenal Suppression** (requires tapering after long-term use)'], contraindications: ['Systemic fungal infections'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['0.5mg tab', '4mg/ml injection', 'Topical creams'], dosageForms: ['Tablet', 'Injection', 'Cream'], priceNPR: '0.5mg tab: 2-5', brandNames: ['Betnesol'] },
    notes: ['Potent glucocorticoid. Do not stop abruptly if used long-term.'],
    searchTags: ['Steroid', 'Allergy']
  },
  {
    id: 'end_003',
    genericName: 'Cortisone acetate',
    therapeuticClass: 'Corticosteroid',
    categoryId: 'endocrine',
    indications: ['Adrenal Insufficiency', 'Inflammatory conditions'],
    dosing: { adult: 'PO: 25-300 mg/day divided.', pediatric: 'PO: 2.5-10 mg/kg/day divided.' },
    safety: { adr: ['Fluid retention', 'Hypertension', '**Adrenal Suppression**'], contraindications: ['Systemic fungal infections'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['25mg tab'], dosageForms: ['Tablet'], priceNPR: '25mg tab: 5-10', brandNames: ['Cortistab'] },
    notes: ['Must be converted to hydrocortisone in the liver to be active.'],
    searchTags: ['Steroid']
  },
  {
    id: 'end_004',
    genericName: 'Dexamethasone',
    therapeuticClass: 'Systemic Corticosteroid',
    categoryId: 'endocrine',
    indications: ['Cerebral Edema', 'Severe Allergic Reactions', 'COVID-19', 'Adrenal Insufficiency (diagnostic)'],
    dosing: { adult: 'PO/IV: 0.5-9 mg/day depending on condition. Cerebral edema: 10 mg IV loading, then 4 mg IM/IV Q6H.', pediatric: 'PO/IV: 0.08-0.3 mg/kg/day.' },
    safety: { adr: ['Hyperglycemia', 'Immunosuppression', '**Adrenal Suppression** (if used long-term)'], contraindications: ['Systemic fungal infections'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['0.5mg tablet', '4mg/ml injection'], dosageForms: ['Tablet', 'Injection'], priceNPR: 'Injection: 10-20', brandNames: ['Dexona'] },
    notes: ['High potency, no typical mineralocorticoid effects.'],
    searchTags: ['Steroid', 'Allergy', 'Weight gain']
  },
  {
    id: 'end_005',
    genericName: 'Fludrocortisone acetate',
    therapeuticClass: 'Mineralocorticosteroid',
    categoryId: 'endocrine',
    indications: ['Adrenal Insufficiency (Addison disease)', 'Salt-losing adrenogenital syndrome'],
    dosing: { adult: 'PO: 0.05-0.2 mg daily.', pediatric: 'PO: 0.05-0.1 mg daily.' },
    safety: { adr: ['Hypertension', 'Edema', 'Hypokalemia', '**Adrenal Suppression**'], contraindications: ['Systemic fungal infections'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['0.1mg tablet'], dosageForms: ['Tablet'], priceNPR: '0.1mg tab: 15-25', brandNames: ['Florinef'] },
    notes: ['Very potent mineralocorticoid; monitor electrolytes and BP.'],
    searchTags: ['Steroid']
  },
  {
    id: 'end_006',
    genericName: 'Hydrocortisone',
    therapeuticClass: 'Corticosteroid',
    categoryId: 'endocrine',
    indications: ['Adrenal Insufficiency', 'Status Asthmaticus', 'Anaphylaxis', 'Thyroid crisis'],
    dosing: { adult: 'PO: 20-30 mg/day (usually 20mg morning, 10mg evening). IV/IM: 100-500 mg depending on severity.', pediatric: 'PO: 8-10 mg/m2/day. IV: 1-5 mg/kg/dose.' },
    safety: { adr: ['Sodium retention', 'Hyperglycemia', '**Adrenal Suppression** (long term)'], contraindications: ['Systemic infections (unless specific intensive care required)'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['10mg, 20mg tab', '100mg vial'], dosageForms: ['Tablet', 'Injection', 'Cream'], priceNPR: '100mg vial: 30-50', brandNames: ['Hisone', 'Primacort'] },
    notes: ['Short-acting with equal glucocorticoid and mineralocorticoid activity.'],
    searchTags: ['Steroid', 'Allergy']
  },
  {
    id: 'end_007',
    genericName: 'Methyl prednisolone',
    therapeuticClass: 'Corticosteroid',
    categoryId: 'endocrine',
    indications: ['Severe Inflammation', 'Spinal cord injury (historical)', 'Multiple Sclerosis exacerbations'],
    dosing: { adult: 'PO: 4-48 mg/day. IV: 10-40 mg to 1000 mg/day (pulse therapy).', pediatric: 'IV: 1-2 mg/kg/day up to 30 mg/kg/day (pulse therapy).' },
    safety: { adr: ['Peptic ulceration', 'Osteoporosis', '**Adrenal Suppression**'], contraindications: ['Systemic fungal infections'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['4mg, 8mg, 16mg tab', '40mg, 125mg, 500mg, 1g inj'], dosageForms: ['Tablet', 'Injection'], priceNPR: '40mg inj: 50-80', brandNames: ['Medrol', 'Solu-Medrol'] },
    notes: ['Taper slowly after sustained use.'],
    searchTags: ['Steroid']
  },
  {
    id: 'end_008',
    genericName: 'Prednisolone',
    therapeuticClass: 'Systemic Corticosteroid',
    categoryId: 'endocrine',
    indications: ['Asthma Exacerbation', 'Rheumatoid Arthritis', 'Inflammatory Conditions', 'Adrenal Insufficiency'],
    dosing: { adult: 'PO: 5-60 mg/day depending on condition.', pediatric: 'PO: Asthma exacerbation: 1-2 mg/kg/day for 3-5 days.' },
    safety: { adr: ['Weight gain', '**Osteoporosis / Adrenal Suppression** (long-term)', 'Hyperglycemia'], contraindications: ['Systemic fungal infections'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['5mg, 10mg, 20mg tab', '15mg/5ml syrup'], dosageForms: ['Tablet', 'Syrup'], priceNPR: '5mg tab: 2-4', brandNames: ['Wysolone', 'Omnacortil'] },
    notes: ['Take with meals to prevent GI upset. Taper carefully if >2 weeks.'],
    searchTags: ['Steroid', 'Weight gain']
  },
  {
    id: 'end_009',
    genericName: 'Triamcinolone acetonide',
    therapeuticClass: 'Corticosteroid',
    categoryId: 'endocrine',
    indications: ['Allergic rhinitis', 'Dermatoses', 'Intra-articular inflammation'],
    dosing: { adult: 'Intra-articular: 2.5-40 mg per joint. Topically: Apply thin film 2-3 times/day.', pediatric: 'Topical use mostly in pediatrics; use lowest possible dose/duration.' },
    safety: { adr: ['Local skin thinning', 'Joint infection', '**Adrenal Suppression** (high dose)'], contraindications: ['Untreated skin/joint infections'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['10mg/ml, 40mg/ml inj', '0.1% paste/cream'], dosageForms: ['Injection', 'Topical', 'Dental paste'], priceNPR: '40mg inj: 80-120', brandNames: ['Kenacort', 'Ledercort'] },
    notes: ['Often used as depot injection intra-articularly. Avoid extensive topical use on face/thin skin.'],
    searchTags: ['Steroid']
  },

  // INSULIN ANALOGUES (Cold Chain Storage required for all)
  {
    id: 'end_010',
    genericName: 'Insulin aspart',
    therapeuticClass: 'Rapid-Acting Insulin',
    categoryId: 'endocrine',
    indications: ['Type 1 DM', 'Type 2 DM', 'GDM'],
    dosing: { adult: 'SC: 5-15 mins before meals. Typically 0.5-1 unit/kg/day total split basal/bolus.', pediatric: 'SC: Weight-based Insulin scales for pediatric Type 1 DM (approx 0.5-1 unit/kg/day).' },
    safety: { adr: ['**Hypoglycemia**', 'Lipodystrophy', 'Weight gain'], contraindications: ['During episodes of hypoglycemia'], pregnancyLactation: 'Category B. Insulin is preferred agent for GDM.' },
    pharmacy: { strengths: ['100 IU/ml pen/vial'], dosageForms: ['Injection', 'Prefilled Pen'], priceNPR: 'Pen: 800-1200', brandNames: ['Novolog', 'NovoRapid'] },
    notes: ['Storage: Cold Chain (2°C to 8°C). Rapid onset, intended to cover mealtime spikes.'],
    searchTags: ['Diabetes', 'Sugar', 'Hypoglycemia']
  },
  {
    id: 'end_011',
    genericName: 'Insulin glargine',
    therapeuticClass: 'Long-Acting Basal Insulin',
    categoryId: 'endocrine',
    indications: ['Type 1 DM', 'Type 2 DM', 'GDM'],
    dosing: { adult: 'SC: Administer OD at same time daily. Starting dose 10 units or 0.2 units/kg/day.', pediatric: 'SC: Usually 1/3 to 1/2 of total daily insulin requirement in Type 1 DM.' },
    safety: { adr: ['**Hypoglycemia**', 'Pain at injection site'], contraindications: ['During episodes of hypoglycemia'], pregnancyLactation: 'Category C (but widely used in pregnancy).' },
    pharmacy: { strengths: ['100 IU/ml pen/vial', '300 IU/ml pen'], dosageForms: ['Injection', 'Prefilled Pen'], priceNPR: 'Pen: 1000-1500', brandNames: ['Lantus', 'Basaglar', 'Toujeo'] },
    notes: ['Storage: Cold Chain (2°C to 8°C). Peakless profile. Do not mix with other insulins.'],
    searchTags: ['Diabetes', 'Sugar', 'Hypoglycemia']
  },
  {
    id: 'end_012',
    genericName: 'Insulin isophane (NPH)',
    therapeuticClass: 'Intermediate-Acting Insulin',
    categoryId: 'endocrine',
    indications: ['Type 1 DM', 'Type 2 DM', 'GDM'],
    dosing: { adult: 'SC: OD or BID. Usually given with regular insulin.', pediatric: 'SC: Split dosing for basal needs in pediatric Type 1 DM.' },
    safety: { adr: ['**Hypoglycemia**', 'Lipodystrophy'], contraindications: ['During episodes of hypoglycemia'], pregnancyLactation: 'Category B. Insulin is preferred agent for GDM.' },
    pharmacy: { strengths: ['40 IU/ml', '100 IU/ml'], dosageForms: ['Injection'], priceNPR: 'Vial: 250-400', brandNames: ['Humulin N', 'Insulatard'] },
    notes: ['Storage: Cold Chain (2°C to 8°C). Milky suspension; must roll (not shake) before use.'],
    searchTags: ['Diabetes', 'Sugar', 'Hypoglycemia']
  },
  {
    id: 'end_013',
    genericName: 'Insulin lispro',
    therapeuticClass: 'Rapid-Acting Insulin',
    categoryId: 'endocrine',
    indications: ['Type 1 DM', 'Type 2 DM', 'GDM'],
    dosing: { adult: 'SC: 15 mins before meals or immediately after. Total dose based on needs.', pediatric: 'SC: Specific mg/kg dosing scales for pediatric Type 1 DM.' },
    safety: { adr: ['**Hypoglycemia**', 'Lipodystrophy'], contraindications: ['Hypoglycemia'], pregnancyLactation: 'Category B. Insulin is preferred agent for GDM.' },
    pharmacy: { strengths: ['100 IU/ml pen/cartridge'], dosageForms: ['Injection', 'Prefilled Pen'], priceNPR: 'Pen: 800-1200', brandNames: ['Humalog'] },
    notes: ['Storage: Cold Chain (2°C to 8°C).'],
    searchTags: ['Diabetes', 'Sugar', 'Hypoglycemia']
  },
  {
    id: 'end_014',
    genericName: 'Insulin protamine zinc',
    therapeuticClass: 'Long-Acting Insulin',
    categoryId: 'endocrine',
    indications: ['Type 1 DM', 'Type 2 DM'],
    dosing: { adult: 'SC: OD, typically before breakfast or bedtime.', pediatric: 'SC: Rarely used today compared to glargine/detemir.' },
    safety: { adr: ['**Hypoglycemia**'], contraindications: ['During episodes of hypoglycemia'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['Available in specialized centers depending on supply'], dosageForms: ['Injection'], priceNPR: 'Vial: 200-400 (if available)', brandNames: ['PZI'] },
    notes: ['Storage: Cold Chain (2°C to 8°C). Action prolongs up to 36 hours.'],
    searchTags: ['Diabetes', 'Sugar', 'Hypoglycemia']
  },
  {
    id: 'end_015',
    genericName: 'Insulin soluble',
    therapeuticClass: 'Short-Acting Insulin',
    categoryId: 'endocrine',
    indications: ['Type 1 DM', 'Type 2 DM', 'DKA', 'Hyperkalemia', 'GDM'],
    dosing: { adult: 'SC: 30 mins before meals. IV: 0.1 units/kg/hr for DKA.', pediatric: 'SC/IV: Specific dosing per kg or sliding scale. DKA: 0.05-0.1 U/kg/hr IV.' },
    safety: { adr: ['**Hypoglycemia**', 'Weight gain'], contraindications: ['During episodes of hypoglycemia'], pregnancyLactation: 'Category B. Insulin is preferred agent for GDM.' },
    pharmacy: { strengths: ['40 IU/ml', '100 IU/ml'], dosageForms: ['Injection'], priceNPR: '40 IU Vial: 150-250', brandNames: ['Actrapid', 'Human Actrapid'] },
    notes: ['Storage: Cold Chain (2°C to 8°C). The only type of insulin given IV in emergencies.'],
    searchTags: ['Diabetes', 'Sugar', 'Hypoglycemia']
  },
  {
    id: 'end_016',
    genericName: 'Insulin zinc (semi-lente, lente, ultra-lente)',
    therapeuticClass: 'Intermediate to Long-Acting Insulin',
    categoryId: 'endocrine',
    indications: ['Type 1 DM', 'Type 2 DM'],
    dosing: { adult: 'SC: OD or BID depending on type.', pediatric: 'SC: Tailored to weight/BG profile.' },
    safety: { adr: ['**Hypoglycemia**'], contraindications: ['Hypoglycemia'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['40 IU/ml'], dosageForms: ['Injection'], priceNPR: 'Varies', brandNames: ['Lente'] },
    notes: ['Storage: Cold Chain (2°C to 8°C). Lente insulins are largely replaced by newer analogs.'],
    searchTags: ['Diabetes', 'Sugar', 'Hypoglycemia']
  }
];
