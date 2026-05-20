import { DrugEntry } from '../../types/formulary';

export const renal4Drugs: DrugEntry[] = [
  // Solutions correcting fluid and electrolyte disturbances
  {
    id: 'ren_029',
    genericName: 'Albumin',
    therapeuticClass: 'Volume Expander / Blood Product Derivative',
    categoryId: 'renal',
    indications: ['Hypovolemic Shock', 'Hypoalbuminemia', 'Cirrhosis with large volume paracentesis', 'Nephrotic Syndrome (with loop diuretics)'],
    dosing: {
      adult: 'IV: Varies by indication. Usually 25 g (100ml of 25% or 500ml of 5%). Max rate: 1-2 ml/min (25%).',
      pediatric: 'IV: 0.5-1 g/kg/dose.'
    },
    renalAdjustment: 'Use with caution in CKD to avoid fluid overload.',
    safety: {
      adr: ['Fluid overload / Pulmonary edema', 'Hypersensitivity reactions', 'Fever/Chills'],
      contraindications: ['Severe anemia', 'Heart failure'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['20% solution (100 ml bottle)'],
      dosageForms: ['Infusion'],
      priceNPR: '100ml bottle: 4000-6000',
      brandNames: ['Human Albumin']
    },
    searchTags: ['Shock', 'Edema', 'Kidney', 'Cirrhosis'],
    notes: ['Hyperoncotic (20-25%) albumin pulls fluid from interstitium into intravascular space. Check volume status frequently.']
  },
  {
    id: 'ren_030',
    genericName: 'Glucose (Dextrose)',
    therapeuticClass: 'IV Fluid / Caloric Agent',
    categoryId: 'renal',
    indications: ['Hypoglycemia', 'Hyperkalemia (with Insulin)', 'Vehicle for IV medications'],
    dosing: {
      adult: 'Hypoglycemia: 25-50 ml of 50% Dextrose (12.5-25 g) IV push. Fluid maintenance varies.',
      pediatric: 'Hypoglycemia: 2-4 ml/kg of 25% Dextrose, or 5-10 ml/kg of 10% Dextrose.'
    },
    renalAdjustment: 'No specific adjustment.',
    safety: {
      adr: ['Hyperglycemia', 'Phlebitis (hypertonic solutions >10%)', 'Osmotic diuresis'],
      contraindications: ['Delirium tremens with dehydration', 'CrP in stroke/head injury (unless hypoglycemic)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['5% (500ml), 10% (500ml), 25% (100ml ampoule), 50% (50ml ampoule)'],
      dosageForms: ['Infusion', 'Injection'],
      priceNPR: '500ml bag: 30-50',
      brandNames: ['D5W', 'Dextrose 25%']
    },
    searchTags: ['DKA', 'Low sugar'],
    notes: ['Do not administer 50% Dextrose directly into small peripheral veins without dilution if possible to avoid severe phlebitis.']
  },
  {
    id: 'ren_031',
    genericName: 'Sodium Chloride',
    therapeuticClass: 'IV Fluid / Isotonic Crystalloid',
    categoryId: 'renal',
    indications: ['Extracellular volume expansion', 'Hyponatremia', 'Fluid resuscitation'],
    dosing: {
      adult: 'Bolus: 500-1000 ml IV rapidly. Maintenance varies.',
      pediatric: 'Bolus: 10-20 ml/kg IV rapidly.'
    },
    renalAdjustment: 'Caution in severe renal impairment (risk of fluid overload and hyperchloremic acidosis).',
    safety: {
      adr: ['Hyperchloremic metabolic acidosis (with large volumes)', 'Fluid overload', 'Hypernatremia'],
      contraindications: ['Heart failure, pulmonary edema'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['0.9% (Normal Saline, 500ml), 3% (Hypertonic Saline, 100ml)'],
      dosageForms: ['Infusion'],
      priceNPR: '500ml bag: 30-50',
      brandNames: ['NS', 'Normal Saline']
    },
    searchTags: ['Fluid', 'Resuscitation', 'Dehydration'],
    notes: ['0.9% NS is actually slightly hyperchloremic compared to plasma, large volumes can cause non-anion gap metabolic acidosis.']
  },
  {
    id: 'ren_032',
    genericName: 'Ringer\'s Lactate',
    therapeuticClass: 'IV Fluid / Balanced Crystalloid',
    categoryId: 'renal',
    indications: ['Fluid resuscitation', 'Burns', 'Surgical fluid replacement'],
    dosing: {
      adult: 'Bolus: 500-1000 ml IV rapidly.',
      pediatric: 'Bolus: 10-20 ml/kg IV rapidly.'
    },
    renalAdjustment: 'Caution in significant renal failure due to potassium content (4 mEq/L).',
    safety: {
      adr: ['Fluid overload'],
      contraindications: ['Concurrent administration of blood (contains calcium, can cause clotting)', 'Severe hyperkalemia'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['500ml bag'],
      dosageForms: ['Infusion'],
      priceNPR: '500ml bag: 40-60',
      brandNames: ['RL']
    },
    searchTags: ['Fluid', 'Resuscitation', 'Burns', 'Dengue'],
    notes: ['Preferred over NS for large volume resuscitation to avoid hyperchloremic acidosis. Lactate is metabolized into bicarbonate in the liver.']
  },

  // 5.6 Renal Failure Management
  {
    id: 'ren_033',
    genericName: 'Erythropoietin (Epoetin Alfa)',
    therapeuticClass: 'Erythropoiesis-Stimulating Agent (ESA)',
    categoryId: 'renal',
    indications: ['Anemia associated with Chronic Kidney Disease (CKD)'],
    dosing: {
      adult: 'SC/IV: 50-100 units/kg 3 times weekly. Target Hb 10-11.5 g/dL.',
      pediatric: 'SC/IV: 50 units/kg 3 times weekly.'
    },
    renalAdjustment: 'Used specifically for patients with failing kidneys.',
    safety: {
      adr: ['**Hypertension**', 'Thrombotic events (stroke, MI) if Hb > 11.5 g/dL', 'Seizures'],
      contraindications: ['Uncontrolled hypertension', 'Pure red cell aplasia after prior ESA treatment'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['4000 IU/ml pre-filled syringe (PFS)'],
      dosageForms: ['Injection'],
      priceNPR: 'PFS: 800-1500',
      brandNames: ['Eprex', 'Epofer', 'Wepox']
    },
    searchTags: ['CKD', 'Kidney', 'Anemia', 'Dialysis'],
    notes: ['Must ensure adequate iron stores (ferritin > 100 ng/mL, TSAT > 20%) before and during treatment.']
  },
  {
    id: 'ren_034',
    genericName: 'Calcium Acetate',
    therapeuticClass: 'Phosphate Binder',
    categoryId: 'renal',
    indications: ['Hyperphosphatemia in Chronic Kidney Disease (CKD)', 'Renal Osteodystrophy'],
    dosing: {
      adult: 'PO: 2-4 tablets (1334-2668 mg) with each meal. Adjust based on serum phosphorus.',
      pediatric: 'Not established.'
    },
    renalAdjustment: 'Given specifically for CKD.',
    safety: {
      adr: ['Hypercalcemia', 'Nausea/Vomiting', 'Constipation'],
      contraindications: ['Hypercalcemia'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['667mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '667mg tab: 5-10',
      brandNames: ['Phoscut', 'Cal-Acetate']
    },
    searchTags: ['Kidney', 'CKD', 'Dialysis', 'Bone'],
    notes: ['MUST be taken with meals to bind dietary phosphate. Prevents secondary hyperparathyroidism.']
  },
  {
    id: 'ren_035',
    genericName: 'Calcitriol',
    therapeuticClass: 'Active Vitamin D3 Analog',
    categoryId: 'renal',
    indications: ['Secondary Hyperparathyroidism in CKD', 'Hypocalcemia in dialysis patients'],
    dosing: {
      adult: 'PO: 0.25 mcg daily or every other day initially.',
      pediatric: 'PO: 0.01-0.05 mcg/kg/day.'
    },
    renalAdjustment: 'Active form of Vitamin D (kidneys do not need to convert it).',
    safety: {
      adr: ['Hypercalcemia', 'Hyperphosphatemia (increases gut phosphate absorption)'],
      contraindications: ['Hypercalcemia', 'Vitamin D toxicity'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['0.25mcg capsule'],
      dosageForms: ['Capsule'],
      priceNPR: '0.25mcg cap: 10-15',
      brandNames: ['Rocaltrol', 'D3-Active']
    },
    searchTags: ['Kidney', 'CKD', 'Dialysis', 'Bone'],
    notes: ['Monitor Calcium x Phosphorus product. If very high (>55), risk of metastatic calcification (calciphylaxis).']
  },

  // Erectile Dysfunction
  {
    id: 'ren_036',
    genericName: 'Sildenafil',
    therapeuticClass: 'Phosphodiesterase-5 (PDE-5) Inhibitor',
    categoryId: 'renal',
    indications: ['Erectile Dysfunction (ED)', 'Pulmonary Arterial Hypertension (PAH)'],
    dosing: {
      adult: 'ED: PO 50 mg approximately 1 hour before sexual activity (max 100 mg). PAH: 20 mg TID.',
      pediatric: 'PAH ONLY.'
    },
    renalAdjustment: 'CrCl < 30 ml/min: consider starting at 25 mg.',
    safety: {
      adr: ['**Severe hypotension if taken with Nitrates**', 'Headache', 'Flushing', 'Cyanopsia (blue vision)', 'Priapism'],
      contraindications: ['**Concurrent use of Nitrates (e.g. Isosorbide, Nitroglycerin) in any form**'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['25mg, 50mg, 100mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 20-40',
      brandNames: ['Viagra', 'Manforce', 'Penegra']
    },
    searchTags: ['ED', 'Impotence', 'Pulmonary Hypertension'],
    notes: ['ABSOLUTE contraindication with nitrates. Can cause fatal blood pressure drop.']
  },
  {
    id: 'ren_037',
    genericName: 'Tadalafil',
    therapeuticClass: 'Phosphodiesterase-5 (PDE-5) Inhibitor',
    categoryId: 'renal',
    indications: ['Erectile Dysfunction (ED)', 'Benign Prostatic Hyperplasia (BPH)'],
    dosing: {
      adult: 'ED (PRN): 10 mg before sexual activity. ED/BPH (Daily): 5 mg OD.',
      pediatric: 'Not indicated.'
    },
    renalAdjustment: 'CrCl 30-50 ml/min: max 10 mg PRN. CrCl < 30 ml/min: max 5 mg PRN (avoid daily use).',
    safety: {
      adr: ['Headache', 'Dyspepsia', 'Back pain / Myalgia (more common than with sildenafil)'],
      contraindications: ['Concurrent use of Nitrates'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['5mg, 10mg, 20mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '10mg tab: 30-50',
      brandNames: ['Megalis', 'Tadacip']
    },
    searchTags: ['ED', 'Impotence', 'BPH', 'Prostate'],
    notes: ['"Weekend pill": Long half-life (17.5 hours), duration of action up to 36 hours. Daily 5mg dose is approved for BPH.']
  }
];
