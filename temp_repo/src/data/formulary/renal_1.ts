import { DrugEntry } from '../../types/formulary';

export const renal1Drugs: DrugEntry[] = [
  // 5.1 Diuretics
  {
    id: 'ren_001',
    genericName: 'Furosemide',
    therapeuticClass: 'Loop Diuretic',
    categoryId: 'renal',
    indications: ['Edema', 'Heart Failure', 'Renal Impairment', 'Hypertension'],
    dosing: {
      adult: 'PO: 20-80 mg/day. IV: 20-40 mg slow IV.',
      pediatric: 'PO/IV: 1-2 mg/kg/dose.'
    },
    renalAdjustment: 'May require larger doses in severe chronic kidney disease.',
    safety: {
      adr: ['Hypokalemia', 'Hyponatremia', 'Dehydration', 'Ototoxicity (rapid IV)'],
      contraindications: ['Anuria', 'Severe hypokalemia'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['40mg tablet', '20mg/2ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '40mg tab: 2-4, Inj: 10-15',
      brandNames: ['Lasix', 'Frusid']
    },
    searchTags: ['Kidney', 'Edema', 'Diuretic'],
    notes: ['Monitor electrolytes carefully. Supplement potassium if necessary.']
  },
  {
    id: 'ren_002',
    genericName: 'Torsemide',
    therapeuticClass: 'Loop Diuretic',
    categoryId: 'renal',
    indications: ['Edema (Heart Failure, Hepatic Cirrhosis, Renal Disease)'],
    dosing: {
      adult: 'PO/IV: 10-20 mg once daily. Max: 200 mg/day.',
      pediatric: 'Not established.'
    },
    renalAdjustment: 'Generally no dose adjustment needed, but effect diminishes as GFR declines.',
    safety: {
      adr: ['Hypokalemia', 'Excessive urination', 'Headache'],
      contraindications: ['Anuria', 'Hepatic coma'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['10mg, 20mg tablet', '10mg/ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '10mg tab: 10-15',
      brandNames: ['Dytor', 'Torsid']
    },
    searchTags: ['Kidney', 'Edema', 'Diuretic'],
    notes: ['Longer half-life than furosemide, better oral bioavailability.']
  },
  {
    id: 'ren_003',
    genericName: 'Hydrochlorothiazide',
    therapeuticClass: 'Thiazide Diuretic',
    categoryId: 'renal',
    indications: ['Hypertension', 'Edema'],
    dosing: {
      adult: 'PO: 12.5-50 mg once daily.',
      pediatric: 'PO: 1-2 mg/kg/day in 1-2 divided doses.'
    },
    renalAdjustment: 'If GFR < 30ml/min, usually ineffective. Use loop diuretics instead.',
    safety: {
      adr: ['Hypokalemia', 'Hyperuricemia', 'Hyperglycemia'],
      contraindications: ['Anuria', 'Severe sulfonamide hypersensitivity'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['12.5mg, 25mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '12.5mg tab: 2-5',
      brandNames: ['Aquazide']
    },
    searchTags: ['Kidney', 'Hypertension', 'Diuretic'],
    notes: ['Often used in combination with ACE inhibitors or ARBs for synergism.']
  },
  {
    id: 'ren_004',
    genericName: 'Chlorthalidone',
    therapeuticClass: 'Thiazide-like Diuretic',
    categoryId: 'renal',
    indications: ['Hypertension', 'Edema associated with heart failure'],
    dosing: {
      adult: 'PO: 12.5-25 mg once daily. Max: 100 mg/day.',
      pediatric: 'PO: 2 mg/kg/day (Max: 200 mg/day).'
    },
    renalAdjustment: 'If GFR < 30ml/min, efficacy decreases. May need loop diuretic.',
    safety: {
      adr: ['Hypokalemia', 'Hyponatremia', 'Hyperuricemia'],
      contraindications: ['Anuria'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['12.5mg, 25mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '12.5mg tab: 5-8',
      brandNames: ['CTD', 'Thalitone']
    },
    searchTags: ['Kidney', 'Hypertension', 'Diuretic'],
    notes: ['Longer duration of action compared to hydrochlorothiazide. Preferred by many guidelines for HTN.']
  },
  {
    id: 'ren_005',
    genericName: 'Indapamide',
    therapeuticClass: 'Thiazide-like Diuretic',
    categoryId: 'renal',
    indications: ['Hypertension', 'Edema'],
    dosing: {
      adult: 'PO: 1.25-2.5 mg once daily.',
      pediatric: 'Not established.'
    },
    renalAdjustment: 'Contraindicated in severe renal failure (GFR < 30ml/min).',
    safety: {
      adr: ['Hypokalemia', 'Orthostatic hypotension'],
      contraindications: ['Anuria', 'Hepatic encephalopathy'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['1.5mg SR tablet', '2.5mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '1.5mg SR tab: 5-10',
      brandNames: ['Natrilix SR', 'Indamac']
    },
    searchTags: ['Kidney', 'Hypertension'],
    notes: ['Metabolically neutral (less effect on glucose and lipids compared to classic thiazides).']
  },
  {
    id: 'ren_006',
    genericName: 'Metolazone',
    therapeuticClass: 'Thiazide-like Diuretic',
    categoryId: 'renal',
    indications: ['Edema (often used synergistically with loop diuretics)', 'Hypertension'],
    dosing: {
      adult: 'PO: 2.5-10 mg once daily (or intermittently).',
      pediatric: 'PO: 0.2-0.4 mg/kg/day.'
    },
    renalAdjustment: 'Remains effective even if GFR < 30ml/min (unlike other thiazides).',
    safety: {
      adr: ['Severe hypokalemia', 'Dehydration', 'Hyponatremia'],
      contraindications: ['Anuria', 'Hepatic coma'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['2.5mg, 5mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '2.5mg tab: 8-15',
      brandNames: ['Metoz', 'Zytanix']
    },
    searchTags: ['Kidney', 'Refractory Edema', 'Diuretic'],
    notes: ['Combine carefully with loop diuretics (sequential nephron blockade) to prevent massive fluid and electrolyte loss.']
  },
  {
    id: 'ren_007',
    genericName: 'Spironolactone',
    therapeuticClass: 'Potassium-Sparing Diuretic / Aldosterone Antagonist',
    categoryId: 'renal',
    indications: ['Edema (Cirrhosis, Heart Failure)', 'Primary Hyperaldosteronism', 'Hypertension'],
    dosing: {
      adult: 'PO: 25-100 mg/day (Heart Failure: 25 mg OD).',
      pediatric: 'PO: 1-3.3 mg/kg/day.'
    },
    renalAdjustment: 'If GFR < 30ml/min, avoid or strictly limit dose due to **hyperkalemia** risk.',
    safety: {
      adr: ['**Hyperkalemia**', 'Gastric bleeding', 'Gynecomastia'],
      contraindications: ['Hyperkalemia (> 5.0 mEq/L)', 'Severe renal impairment'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mg, 50mg, 100mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '25mg tab: 4-6',
      brandNames: ['Aldactone']
    },
    searchTags: ['Kidney', 'Edema', 'Cirrhosis', 'Diuretic'],
    notes: ['Monitor potassium closely. Avoid taking salt substitutes containing potassium.']
  },
  {
    id: 'ren_008',
    genericName: 'Eplerenone',
    therapeuticClass: 'Potassium-Sparing Diuretic / Aldosterone Antagonist',
    categoryId: 'renal',
    indications: ['Heart Failure (Post-MI)', 'Hypertension'],
    dosing: {
      adult: 'PO: 25-50 mg once daily.',
      pediatric: 'Not established.'
    },
    renalAdjustment: 'If GFR < 30ml/min, contraindicated in hypertension. Very cautious use in heart failure (if used at all).',
    safety: {
      adr: ['**Hyperkalemia**', 'Dizziness'],
      contraindications: ['Hyperkalemia', 'Severe renal impairment'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['25mg, 50mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '25mg tab: 15-25',
      brandNames: ['Eptus', 'Planep']
    },
    searchTags: ['Heart Failure', 'Kidney'],
    notes: ['More selective for aldosterone receptors than spironolactone (less incidence of gynecomastia).']
  },
  {
    id: 'ren_009',
    genericName: 'Amiloride Hydrochloride',
    therapeuticClass: 'Potassium-Sparing Diuretic',
    categoryId: 'renal',
    indications: ['Edema (adjunct to thiazide or loop diuretic to conserve potassium)', 'Hypertension'],
    dosing: {
      adult: 'PO: 5-10 mg daily (usually in combination with other diuretics).',
      pediatric: 'Not established.'
    },
    renalAdjustment: 'If GFR 10-50 ml/min, reduce dose by 50%. Avoid if GFR < 10ml/min.',
    safety: {
      adr: ['**Hyperkalemia**', 'Nausea/Vomiting'],
      contraindications: ['Hyperkalemia', 'Anuria'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['Typically available as combination (e.g. Amiloride + Hydrochlorothiazide)'],
      dosageForms: ['Tablet'],
      priceNPR: 'Varies',
      brandNames: ['Biduret (Combo)']
    },
    searchTags: ['Kidney', 'Diuretic'],
    notes: ['Acts on distal tubule independent of aldosterone.']
  },
  {
    id: 'ren_010',
    genericName: 'Triamterene',
    therapeuticClass: 'Potassium-Sparing Diuretic',
    categoryId: 'renal',
    indications: ['Protect against potassium loss with other diuretics'],
    dosing: {
      adult: 'Usually given as combination. Triamterene component: 50-100 mg daily.',
      pediatric: 'Not established.'
    },
    renalAdjustment: 'Avoid in severe renal impairment.',
    safety: {
      adr: ['**Hyperkalemia**', 'Renal stones (triamterene stones)'],
      contraindications: ['Severe renal disease', 'Hyperkalemia'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['Usually combination (Triamterene + HCTZ)'],
      dosageForms: ['Capsule/Tablet'],
      priceNPR: 'Varies',
      brandNames: ['Ditide (Combo)']
    },
    searchTags: ['Kidney', 'Diuretic'],
    notes: ['Risk of nephrolithiasis. Less commonly used than spironolactone/amiloride.']
  },
  {
    id: 'ren_011',
    genericName: 'Acetazolamide',
    therapeuticClass: 'Carbonic Anhydrase Inhibitor',
    categoryId: 'renal',
    indications: ['Glaucoma', 'Acute Mountain Sickness', 'Metabolic Alkalosis', 'Edema'],
    dosing: {
      adult: 'PO: 250-1000 mg/day. Mountain Sickness: 125-250 mg BD.',
      pediatric: 'Glaucoma PO/IV: 8-30 mg/kg/day in divided doses.'
    },
    renalAdjustment: 'If GFR < 30ml/min, increase dosing interval significantly or avoid.',
    safety: {
      adr: ['Metabolic acidosis', 'Paresthesias', 'Hypokalemia', 'Stevens-Johnson syndrome (sulfa allergy)'],
      contraindications: ['Severe hepatic/renal disease', 'Sulfa allergy'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['250mg tablet', '500mg vial'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '250mg tab: 4-6',
      brandNames: ['Diamox']
    },
    searchTags: ['Kidney', 'Diuretic', 'Trek', 'Altitude'],
    notes: ['A weak diuretic, mostly used for other indications like AMS and glaucoma.']
  },
  {
    id: 'ren_012',
    genericName: 'Mannitol',
    therapeuticClass: 'Osmotic Diuretic',
    categoryId: 'renal',
    indications: ['Cerebral Edema / Elevated Intracranial Pressure (ICP)', 'Oliguric phase of Acute Kidney Injury (preventive - rarely used now)'],
    dosing: {
      adult: 'IV: 0.5-1 g/kg over 30-60 mins for ICP reduction.',
      pediatric: 'IV: 0.25-1 g/kg/dose.'
    },
    renalAdjustment: 'Contraindicated in established anuria due to acute renal failure.',
    safety: {
      adr: ['Fluid overload (initially)', 'Dehydration and hypernatremia (subsequently)', 'Rebound ICP increase'],
      contraindications: ['Anuria', 'Active intracranial bleeding (except during craniotomy)', 'Severe heart failure'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['20% solution (100ml, 350ml bag)'],
      dosageForms: ['Infusion'],
      priceNPR: '100ml bag: 80-150',
      brandNames: ['Mannitol 20%']
    },
    searchTags: ['Edema', 'Head injury', 'Brain', 'Diuretic'],
    notes: ['May crystallize at low room temperatures. Must use an inline filter.']
  }
];
