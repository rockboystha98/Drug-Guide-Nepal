import { DrugEntry } from '../../types/formulary';

export const renal2Drugs: DrugEntry[] = [
  // 5.2 Anti-diuretic Drugs
  {
    id: 'ren_013',
    genericName: 'Desmopressin',
    therapeuticClass: 'Vasopressin Analog / Anti-diuretic',
    categoryId: 'renal',
    indications: ['Central Diabetes Insipidus', 'Nocturnal Enuresis', 'Hemophilia A / von Willebrand disease (to boost Factor VIII)'],
    dosing: {
      adult: 'DI PO: 0.1-0.2 mg TID. IN: 10-40 mcg daily.',
      pediatric: 'Enuresis PO: 0.2 mg at bedtime. DI IN: 5-20 mcg daily.'
    },
    renalAdjustment: 'Contraindicated if CrCl < 50 ml/min.',
    safety: {
      adr: ['Water intoxication', 'Severe Hyponatremia', 'Headache'],
      contraindications: ['Primary nocturnal enuresis in patients with impaired renal function', 'Hyponatremia'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['0.1mg tablet', '0.01% nasal spray'],
      dosageForms: ['Tablet', 'Nasal Spray'],
      priceNPR: 'Spray: 1000-1500',
      brandNames: ['Minirin']
    },
    searchTags: ['Kidney', 'Bed wetting', 'Urine'],
    notes: ['Counsel patients to strictly limit fluid intake from 1 hour before dose until 8 hours after to prevent hyponatremia.']
  },
  {
    id: 'ren_014',
    genericName: 'Vasopressin',
    therapeuticClass: 'Antidiuretic Hormone Analog / Vasopressor',
    categoryId: 'renal',
    indications: ['Vasodilatory Shock (Septic Shock)', 'Diabetes Insipidus', 'Gastrointestinal Hemorrhage'],
    dosing: {
      adult: 'Septic Shock IV Infusion: 0.01 - 0.04 units/min. DI: 5-10 units IM/SC BID/TID.',
      pediatric: 'Shock: 0.0003-0.002 units/kg/min.'
    },
    renalAdjustment: 'No specific dosage adjustment needed for renal impairment.',
    safety: {
      adr: ['Ischemic tissue necrosis', 'Myocardial ischemia', 'Hyponatremia'],
      contraindications: ['Chronic nephritis with nitrogen retention'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['20 units/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 800-1200',
      brandNames: ['Copressin']
    },
    searchTags: ['Shock', 'Kidney', 'Sepsis'],
    notes: ['Used as an adjunct to Noradrenaline in refractory septic shock to raise MAP or decrease noradrenaline dose.']
  },
  
  // 5.3 Urinary Antiseptics
  {
    id: 'ren_015',
    genericName: 'Nitrofurantoin',
    therapeuticClass: 'Urinary Antiseptic / Antibacterial',
    categoryId: 'renal',
    indications: ['Uncomplicated UTI (Cystitis)', 'UTI Prophylaxis'],
    dosing: {
      adult: 'PO: 100 mg BD for 5-7 days.',
      pediatric: 'PO: 5-7 mg/kg/day in 4 divided doses.'
    },
    renalAdjustment: 'Contraindicated if GFR < 30ml/min (sub-therapeutic concentration in urine and systemic toxicity).',
    safety: {
      adr: ['Pulmonary toxicity (fibrosis on chronic use)', 'Peripheral neuropathy', 'Brown discoloration of urine'],
      contraindications: ['Severe renal impairment', 'Pregnancy at term (38-42 wks)'],
      pregnancyLactation: 'Category B (Avoid at term due to infant hemolytic anemia risk).'
    },
    pharmacy: {
      strengths: ['100mg SR tablet', '50mg, 100mg capsule'],
      dosageForms: ['Tablet', 'Capsule'],
      priceNPR: '100mg tab: 10-15',
      brandNames: ['Niftas', 'Martifur', 'Nitrobest']
    },
    searchTags: ['UTI', 'Kidney', 'Urine burn', 'Burning micturition'],
    notes: ['Take with food to increase absorption and decrease GI upset. Not for pyelonephritis.']
  },

  // 5.5 Solutions correcting fluid and electrolyte disturbances
  {
    id: 'ren_016',
    genericName: 'Potassium Chloride',
    therapeuticClass: 'Electrolyte Supplement',
    categoryId: 'renal',
    indications: ['Hypokalemia treatment and prevention'],
    dosing: {
      adult: 'PO: 20-40 mEq/day. IV: Never push; infuse max 10 mEq/hr via peripheral line.',
      pediatric: 'IV: 0.5-1 mEq/kg/dose.'
    },
    renalAdjustment: 'Reduce dose in renal impairment. Avoid if severe risk of hyperkalemia.',
    safety: {
      adr: ['**Cardiac Arrest (if given rapid IV push)**', 'Phlebitis', 'GI ulceration (oral solid forms)'],
      contraindications: ['Hyperkalemia', 'Severe renal impairment'],
      pregnancyLactation: 'Category C.'
    },
    concentrationAlert: 'NEVER GIVE Potassium Chloride as an IV PUSH! Always dilute and infuse slowly.',
    pharmacy: {
      strengths: ['15% ampoule (2 mEq/ml)', 'Syrup (20 mEq/15ml)'],
      dosageForms: ['Injection', 'Syrup'],
      priceNPR: 'Ampoule: 15-25',
      brandNames: ['Potklor']
    },
    searchTags: ['Electrolyte'],
    notes: ['Must be properly diluted before IV administration. High risk medication.']
  },
  {
    id: 'ren_017',
    genericName: 'Sodium Bicarbonate',
    therapeuticClass: 'Alkalinizing Agent',
    categoryId: 'renal',
    indications: ['Metabolic acidocis (Severe CKD/AKI)', 'Hyperkalemia', 'Tricyclic Antidepressant (TCA) Overdose'],
    dosing: {
      adult: 'Cardiac Arrest: 1 mEq/kg IV push. CKD oral: 1-2 g/day to maintain serum bicarb > 22 mEq/L.',
      pediatric: 'Cardiac Arrest: 1 mEq/kg IV push.'
    },
    renalAdjustment: 'Often required chronically in CKD as renal ammoniagenesis fails.',
    safety: {
      adr: ['Hypernatremia', 'Hypokalemia', 'Fluid overload', 'Tissue necrosis (extravasation)'],
      contraindications: ['Metabolic alkalosis', 'Hypocalcemia'],
      pregnancyLactation: 'Category C.'
    },
    concentrationAlert: 'Commonly 7.5% solution (1 mEq/ml in 10ml ampoules) or 8.4%.',
    pharmacy: {
      strengths: ['7.5% or 8.4% Ampoule', '500mg tablet'],
      dosageForms: ['Injection', 'Tablet'],
      priceNPR: 'Ampoule: 25-45, Tablet: 2-5',
      brandNames: ['Sodibic', 'Nodosis']
    },
    searchTags: ['Acidosis', 'Kidney', 'DKA', 'CKD'],
    notes: ['Incompatible with calcium salts in same IV line (precipitates).']
  },
  {
    id: 'ren_018',
    genericName: 'Disodium Hydrogen Citrate',
    therapeuticClass: 'Urinary Alkalinizer',
    categoryId: 'renal',
    indications: ['Acidosis in CKD', 'Gout / Uric Acid stones (to alkalinize urine)', 'Relief of burning micturition in mild UTI'],
    dosing: {
      adult: 'PO: 15-30 ml diluted in water 2-3 times daily.',
      pediatric: 'PO: 5-15 ml diluted in water.'
    },
    renalAdjustment: 'Use with caution if GFR < 30ml/min due to sodium load.',
    safety: {
      adr: ['GI distress', 'Laxative effect', 'Hyperosmolar state'],
      contraindications: ['Metabolic alkalosis', 'Severe sodium restriction'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1.37g/5ml syrup'],
      dosageForms: ['Syrup'],
      priceNPR: 'Bottle: 80-120',
      brandNames: ['Citralka', 'Alkasol']
    },
    searchTags: ['Urine burn', 'Stone', 'Burning micturition'],
    notes: ['Must be diluted with a full glass of water. Should be taken after meals.']
  }
];
