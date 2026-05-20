import { DrugEntry } from '../../types/formulary';

export const endocrine3Drugs: DrugEntry[] = [
  // TREATMENT OF HYPOGLYCAEMIA
  {
    id: 'end_028',
    genericName: 'Glucagon',
    therapeuticClass: 'Glycogenolytic Agent',
    categoryId: 'endocrine',
    indications: ['Severe Hypoglycemia', 'Beta-blocker overdose'],
    dosing: { adult: 'SC/IM/IV: 1 mg. May repeat in 15 mins if no response.', pediatric: 'SC/IM/IV: <20 kg: 0.5 mg. >20 kg: 1 mg.' },
    safety: { adr: ['Nausea', 'Vomiting', 'Tachycardia'], contraindications: ['Pheochromocytoma', 'Insulinoma'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['1mg vial'], dosageForms: ['Injection'], priceNPR: '1mg vial: 500-1000', brandNames: ['GlucaGen'] },
    notes: ['Will not work if hepatic glycogen stores are depleted (e.g., starvation, chronic alcohol use). Give IV dextrose if available.'],
    searchTags: ['Hypoglycemia', 'Sugar']
  },

  // THYROID HORMONES
  {
    id: 'end_029',
    genericName: 'Levothyroxine',
    therapeuticClass: 'Thyroid Hormone',
    categoryId: 'endocrine',
    indications: ['Hypothyroidism', 'Myxedema Coma'],
    dosing: { adult: 'PO: 50-100 mcg OD initially, adjusting every 4-6 weeks based on TSH. Myxedema coma: 300-500 mcg IV loading.', pediatric: 'PO: Highly age-dependent. Congenital: 10-15 mcg/kg/day initially.' },
    safety: { adr: ['Palpitations', 'Weight loss', 'Tremor', 'Insomnia (overdose symptoms)'], contraindications: ['Untreated thyrotoxicosis', 'Uncorrected adrenal insufficiency'], pregnancyLactation: 'Category A. Safe and essential. Dose often needs to increase by 30-50% during pregnancy.' },
    pharmacy: { strengths: ['25mcg', '50mcg', '100mcg', '150mcg'], dosageForms: ['Tablet'], priceNPR: '50mcg tab: 1-3', brandNames: ['Eltroxin', 'Thyrox'] },
    notes: ['Take on an empty stomach 30-60 mins before breakfast. Do not take simultaneously with iron or calcium.'],
    searchTags: ['Thyroid', 'Weight loss']
  },

  // ANTI-THYROID DRUGS
  {
    id: 'end_030',
    genericName: 'Carbimazole',
    therapeuticClass: 'Antithyroid Agent (Thioamide)',
    categoryId: 'endocrine',
    indications: ['Hyperthyroidism', 'Thyrotoxicosis'],
    dosing: { adult: 'PO: 15-40 mg/day divided initially, titrate to 5-15 mg/day as maintenance.', pediatric: 'PO: 0.5 mg/kg/day divided.' },
    safety: { adr: ['Agranulocytosis (rare but severe)', 'Rash', 'Hepatotoxicity'], contraindications: ['Severe hepatic impairment'], pregnancyLactation: 'Category D. Propylthiouracil is preferred in the 1st trimester.' },
    pharmacy: { strengths: ['5mg tab', '10mg tab', '20mg tab'], dosageForms: ['Tablet'], priceNPR: '5mg tab: 3-5', brandNames: ['Neo-Mercazole'] },
    notes: ['Warn patient to immediately report fever or sore throat due to risk of agranulocytosis.'],
    searchTags: ['Thyroid']
  },
  {
    id: 'end_031',
    genericName: 'Iodine',
    therapeuticClass: 'Antithyroid Agent',
    categoryId: 'endocrine',
    indications: ['Preoperative preparation for thyroidectomy', 'Thyrotoxic crisis'],
    dosing: { adult: 'PO: Dose varies depending on preparation (e.g. 1-2 drops of Lugol’s solution TID for 10-14 days pre-op).', pediatric: 'PO: Dependent on age/indication.' },
    safety: { adr: ['Hypersensitivity', 'Metallic taste', 'GI upset'], contraindications: ['Iodine allergy'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['Various'], dosageForms: ['Solution'], priceNPR: 'Varies', brandNames: ['Generic'] },
    notes: ['Reduces thyroid gland vascularity and fragility before surgery.'],
    searchTags: ['Thyroid']
  },
  {
    id: 'end_032',
    genericName: 'Lugol’s iodine',
    therapeuticClass: 'Aqueous Iodine Oral Solution',
    categoryId: 'endocrine',
    indications: ['Thyrotoxic crisis', 'Preoperative thyroidectomy preparation'],
    dosing: { adult: 'PO: 5-7 drops TID for 10 days pre-operatively. Thyrotoxic crisis: 10 drops TID.', pediatric: 'PO: Consult specific protocols.' },
    safety: { adr: ['Iodism (metallic taste, burning mouth, hypersalivation)'], contraindications: ['Iodine hypersensitivity', 'Long term use'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['5% iodine and 10% KI solution'], dosageForms: ['Oral liquid'], priceNPR: '100ml: ~200-300', brandNames: ['Lugol’s Solution'] },
    notes: ['Must be diluted in water or juice. Give 1 hour after starting antithyroid drug in thyroid storm.'],
    searchTags: ['Thyroid']
  },
  {
    id: 'end_033',
    genericName: 'Propranolol',
    therapeuticClass: 'Non-selective Beta Blocker',
    categoryId: 'endocrine',
    indications: ['Thyrotoxicosis (symptomatic relief)', 'Portal hypertension', 'Tremor', 'Migraine prophylaxis'],
    dosing: { adult: 'PO (Thyrotoxicosis): 10-40 mg TID/QID to control heart rate.', pediatric: 'PO: 0.5-2 mg/kg/day.' },
    safety: { adr: ['Bradycardia', 'Bronchospasm', 'Fatigue', 'Masks hypoglycemia symptoms'], contraindications: ['Asthma/COPD', 'Heart block', 'Severe bradycardia'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['10mg tab', '40mg tab'], dosageForms: ['Tablet'], priceNPR: '40mg tab: 2-4', brandNames: ['Inderal', 'Ciplar'] },
    notes: ['Crucial adjunct in hyperthyroidism to control sympathetic symptoms quickly.'],
    searchTags: ['Thyroid', 'Hypoglycemia']
  },
  {
    id: 'end_034',
    genericName: 'Propylthiouracil',
    therapeuticClass: 'Antithyroid Agent (Thioamide)',
    categoryId: 'endocrine',
    indications: ['Hyperthyroidism', 'Thyroid storm', '1st trimester of pregnancy'],
    dosing: { adult: 'PO: 100-150 mg TID initially. Maintenance: 50 mg BID/TID.', pediatric: 'PO: 5-7 mg/kg/day divided.' },
    safety: { adr: ['Severe Hepatotoxicity (Black Box Warning)', 'Agranulocytosis', 'Rash'], contraindications: ['Routine use replaced largely by carbimazole due to liver failure risk.'], pregnancyLactation: 'Category D. (Preferred agent ONLY during 1st trimester over carbimazole due to lower teratogenic risk).' },
    pharmacy: { strengths: ['50mg tab'], dosageForms: ['Tablet'], priceNPR: '50mg tab: 15-20', brandNames: ['PTU'] },
    notes: ['Inhibits peripheral conversion of T4 to T3, making it preferred in thyroid storm.'],
    searchTags: ['Thyroid']
  },

  // SOMATOSTATIN ANALOGUE / GROWTH HORMONES
  {
    id: 'end_035',
    genericName: 'Octreotide',
    therapeuticClass: 'Somatostatin Analogue',
    categoryId: 'endocrine',
    indications: ['Acromegaly', 'Carcinoid tumors', 'Variceal bleeding (off-label)'],
    dosing: { adult: 'SC/IV: 50-100 mcg TID. Depot form: 20-30 mg IM every 4 weeks.', pediatric: 'SC/IV: 1-10 mcg/kg/day for specific indications.' },
    safety: { adr: ['Gallstones (cholelithiasis)', 'Hypo/Hyperglycemia', 'GI upset'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['50mcg/ml ampoule', '100mcg/ml ampoule', 'Long-acting depot'], dosageForms: ['Injection'], priceNPR: '100mcg amp: 200-400', brandNames: ['Sandostatin', 'Octride'] },
    notes: ['Storage: Cold Chain (2°C to 8°C). Reduces splanchnic blood flow in variceal bleeds.'],
    searchTags: ['Hypoglycemia']
  },
  {
    id: 'end_036',
    genericName: 'Somatotropin',
    therapeuticClass: 'Recombinant Growth Hormone',
    categoryId: 'endocrine',
    indications: ['Growth hormone deficiency in children/adults', 'Turner syndrome'],
    dosing: { adult: 'SC: 0.15-0.3 mg/day depending on indication.', pediatric: 'SC: 0.16-0.24 mg/kg/week divided daily.' },
    safety: { adr: ['Edema', 'Arthralgia', 'Insulin resistance/Hyperglycemia'], contraindications: ['Closed epiphyses', 'Active malignancy', 'Severe illness/ICU'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['Varies (e.g. 5mg vial)'], dosageForms: ['Subcutaneous Injection'], priceNPR: 'High cost (~2000-5000+ per vial depending on strength/brand)', brandNames: ['Genotropin', 'Norditropin'] },
    notes: ['Storage: Cold Chain (2°C to 8°C). Administer in the evening to mimic physiologic secretion.'],
    searchTags: ['Weight gain']
  },

  // DRUGS USED IN OSTEOPOROSIS
  {
    id: 'end_037',
    genericName: 'Calcitonin',
    therapeuticClass: 'Calcium regulator',
    categoryId: 'endocrine',
    indications: ['Postmenopausal osteoporosis', 'Hypercalcemia', 'Paget’s disease'],
    dosing: { adult: 'IM/SC: 100 IU daily or every other day. Intranasal: 200 IU (1 spray) daily.', pediatric: 'Not routinely recommended.' },
    safety: { adr: ['Flushing', 'Nausea', 'Rhinitis (nasal spray)'], contraindications: ['Allergy to salmon calcitonin'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['200 IU/dose nasal spray', '100 IU/ml amp'], dosageForms: ['Nasal spray', 'Injection'], priceNPR: 'Nasal spray: 1000-1500', brandNames: ['Miacalcic', 'Calcispray'] },
    notes: ['Storage: Cold Chain (2°C to 8°C) until opened.'],
    searchTags: ['Steroid']
  },
  {
    id: 'end_038',
    genericName: 'Teriparatide',
    therapeuticClass: 'Parathyroid Hormone Analog',
    categoryId: 'endocrine',
    indications: ['Severe osteoporosis with high fracture risk'],
    dosing: { adult: 'SC: 20 mcg OD for a maximum of 2 years.', pediatric: 'Contraindicated (risk of osteosarcoma in growing bones).' },
    safety: { adr: ['Hypercalcemia', 'Dizziness', 'Leg cramps'], contraindications: ['Paget’s disease', 'Prior radiation therapy to skeleton', 'Bone metastases'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['250 mcg/ml prefilled pen', '600 mcg/2.4 ml'], dosageForms: ['Injection Pen'], priceNPR: 'Pen (1 month supply): 10,000-15,000+', brandNames: ['Forteo', 'Bonmax PTH'] },
    notes: ['Storage: Cold Chain (2°C to 8°C). Promotes actual bone formation (anabolic) rather than just preventing resorption.'],
    searchTags: ['Steroid']
  },

  // ANTI-OBESITY DRUG
  {
    id: 'end_039',
    genericName: 'Orlistat',
    therapeuticClass: 'Lipase Inhibitor',
    categoryId: 'endocrine',
    indications: ['Obesity / Weight Management'],
    dosing: { adult: 'PO: 120 mg TID with each main meal containing fat.', pediatric: 'PO: >12 yrs: 120 mg TID.' },
    safety: { adr: ['Oily spotting', 'Flatus with discharge', 'Fecal urgency/incontinence', 'Fat-soluble vitamin deficiency'], contraindications: ['Chronic malabsorption syndrome', 'Cholestasis'], pregnancyLactation: 'Category X.' },
    pharmacy: { strengths: ['60mg cap', '120mg cap'], dosageForms: ['Capsule'], priceNPR: '120mg cap: 30-50', brandNames: ['Xenical', 'Vyfat'] },
    notes: ['Must supplement vitamins A, D, E, K at least 2 hours before or after dose. If a meal is missed or contains no fat, skip the dose.'],
    searchTags: ['Weight loss']
  }
];
