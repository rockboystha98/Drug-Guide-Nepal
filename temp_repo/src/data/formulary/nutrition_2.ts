import { DrugEntry } from '../../types/formulary';

export const nutritionBlood2Drugs: DrugEntry[] = [
  // FLUIDS & ELECTROLYTES
  {
    id: 'nut_011',
    genericName: 'Oral Rehydration Salts (ORS)',
    therapeuticClass: 'Fluid & Electrolyte Replenisher',
    categoryId: 'blood',
    indications: ['Dehydration due to diarrhea or vomiting'],
    dosing: { adult: 'PO: 200-400 ml after every loose motion or as much as tolerated.', pediatric: 'PO: WHO Plan A (Prevention): <2 yrs: 50-100ml/stool; 2-10 yrs: 100-200ml/stool. WHO Plan B (Mild/Mod Dehydration): 75 ml/kg over 4 hours.' },
    safety: { adr: ['Mild vomiting (if given too fast)'], contraindications: ['Severe dehydration requiring IV', 'Intestinal obstruction', 'Severe vomiting'], pregnancyLactation: 'Category A.' },
    pharmacy: { strengths: ['Sachet (Low Osmolarity WHO formula)'], dosageForms: ['Powder Sachet'], priceNPR: 'Sachet: ~15-20', brandNames: ['Nava Jeevan', 'Electrobion'] },
    notes: ['Reconstitute 1 sachet in exactly 1 Liter of clean drinking water. Use within 24 hours. WHO Reduced Osmolarity: 245 mOsm/L (Na 75, K 20, Cl 65).'],
    searchTags: ['Dehydration', 'Diarrhea', 'Water']
  },
  {
    id: 'nut_012',
    genericName: 'Normal Saline (0.9% NaCl)',
    therapeuticClass: 'Intravenous Fluid (Crystalloid)',
    categoryId: 'blood',
    indications: ['Fluid expansion', 'Hypovolemia', 'Hyponatremia', 'Vehicle for drug diluent'],
    dosing: { adult: 'IV: Fluid resuscitation usually starts with 500-1000 ml bolus.', pediatric: 'IV: Hypovolemic shock: 20 ml/kg bolus. Maintenance: Holliday-Segar formula (4-2-1 rule).' },
    safety: { adr: ['**Fluid Overload (Heart failure/Renal failure)**', 'Hyperchloremic metabolic acidosis'], contraindications: ['Hypernatremia', 'Heart failure without hypovolemia'], pregnancyLactation: 'Category A.' },
    pharmacy: { strengths: ['500ml', '1000ml (0.9% w/v)'], dosageForms: ['IV Infusion'], priceNPR: '500ml bot: ~40-60', brandNames: ['NS'] },
    notes: ['**Composition:** Na+ 154 mEq/L, Cl- 154 mOsm/L. Osmolarity: 308 mOsm/L.'],
    searchTags: ['Saline', 'Drip', 'Dehydration', 'Water']
  },
  {
    id: 'nut_013',
    genericName: 'Ringer’s Lactate (RL)',
    therapeuticClass: 'Intravenous Fluid (Crystalloid)',
    categoryId: 'blood',
    indications: ['Hypovolemic shock', 'Trauma/Burns', 'Diarrheal dehydration (WHO Plan C)'],
    dosing: { adult: 'IV: 500-1000 ml fast over hour/s depending on shock.', pediatric: 'IV: WHO Plan C: Infants <1yr: 30ml/kg in 1hr, then 70ml/kg in 5hrs. Children: 30ml/kg in 30min, then 70ml/kg in 2.5hrs.' },
    safety: { adr: ['**Fluid Overload**', 'Lactic acidosis (in severe liver failure)'], contraindications: ['Severe liver failure (cannot metabolize lactate)', 'Hyperkalemia'], pregnancyLactation: 'Category A.' },
    pharmacy: { strengths: ['500ml', '1000ml'], dosageForms: ['IV Infusion'], priceNPR: '500ml bot: ~45-70', brandNames: ['RL', 'Hartmann’s Solution'] },
    notes: ['**Composition:** Na+ 130, K+ 4, Ca++ 3, Cl- 109, Lactate 28 mEq/L. Most physiologic crystalloid. Avoid in patients receiving Ceftriaxone (calcium precipitation risk, esp. neonates).'],
    searchTags: ['Drip', 'Dehydration', 'Trauma', 'Saline']
  },
  {
    id: 'nut_014',
    genericName: 'DNS (Dextrose Normal Saline)',
    therapeuticClass: 'Intravenous Fluid',
    categoryId: 'blood',
    indications: ['Maintenance fluid', 'Hypovolemia with hypoglycemia'],
    dosing: { adult: 'IV: As per maintenance requirements (typically 1-3 L/day).', pediatric: 'IV: Maintenance calculated by Holliday-Segar (4-2-1 rule) but Iso-osmolar fluids now preferred.' },
    safety: { adr: ['Fluid overload', 'Hyperglycemia'], contraindications: ['Hyperglycemia (avoid in severe DKA until glucose <250)'], pregnancyLactation: 'Category A.' },
    pharmacy: { strengths: ['500ml (5% Dextrose + 0.9% NaCl)'], dosageForms: ['IV Infusion'], priceNPR: '500ml bot: ~40-60', brandNames: ['DNS'] },
    notes: ['**Composition:** 50g Dextrose + Na 154, Cl 154 mEq/L per Liter.'],
    searchTags: ['Drip', 'Dehydration', 'Sugar']
  },
  {
    id: 'nut_015',
    genericName: 'Dextrose (5%, 10%, 25%, 50%)',
    therapeuticClass: 'Intravenous Fluid / Carbohydrate Replenisher',
    categoryId: 'blood',
    indications: ['Hypoglycemia', 'Vehicle for drug infusion (e.g., Amiodarone)'],
    dosing: { adult: 'IV: Acute hypoglycemia: 25-50 ml of 50% Dextrose bolus.', pediatric: 'IV: Acute hypoglycemia: 2-4 ml/kg of 10% Dextrose (D10W) bolus.' },
    safety: { adr: ['Hyperglycemia', 'Phlebitis (hypertonic solutions like 25% or 50%)', 'Osmotic diuresis'], contraindications: ['Hyperglycemia', 'Delirium tremens with dehydration'], pregnancyLactation: 'Category A.' },
    pharmacy: { strengths: ['5% 500ml', '10% 500ml', '25% 100ml/amp', '50% 25ml/amp'], dosageForms: ['IV Infusion', 'Ampoule'], priceNPR: '5% 500ml bot: ~40', brandNames: ['D5', 'D10', 'D25'] },
    notes: ['**Composition:** Provides calories (D5: 50g/L = 170 kcal/L). 5% is isotonic in bag but becomes hypotonic in body as glucose is metabolized.'],
    searchTags: ['Drip', 'Hypoglycemia', 'Sugar']
  },
  {
    id: 'nut_016',
    genericName: 'Potassium Chloride (KCl)',
    therapeuticClass: 'Electrolyte Supplement',
    categoryId: 'blood',
    indications: ['Hypokalemia treatment and prophylaxis (e.g., on diuretics)'],
    dosing: { adult: 'IV: **Must be diluted**. Infusion rate max 10-20 mEq/hr. Max concentration usually 40 mEq/L in peripheral line.', pediatric: 'IV: Maintenance: 2-3 mEq/kg/day. Intermittent infusion max 0.5-1 mEq/kg/dose.' },
    safety: { adr: ['**FATAL CARDIAC ARREST IF GIVEN IV PUSH**', 'Phlebitis/Pain at infusion site (dilute adequately)', 'Hyperkalemia'], contraindications: ['Hyperkalemia', 'Oliguria/Renal failure'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['15% solution (10ml ampoule = 20 mEq)'], dosageForms: ['Injection Ampoule'], priceNPR: 'Ampoule: 20-30', brandNames: ['Potklor'] },
    notes: ['**CRITICAL ALERT: NEVER GIVE AS UNDILUTED IV BOLUS. FATAL.** Must be diluted in IV fluid like NS and infused slowly.'],
    searchTags: ['Potassium', 'Electrolyte']
  },
  {
    id: 'nut_017',
    genericName: 'Calcium Gluconate',
    therapeuticClass: 'Electrolyte Supplement / Antidote',
    categoryId: 'blood',
    indications: ['Hypocalcemia tetany', 'Cardioprotection in hyperkalemia', 'Magnesium toxicity', 'Hydrofluoric acid burns'],
    dosing: { adult: 'IV: Hyperkalemia: 10 ml of 10% solution over 2-5 mins.', pediatric: 'IV: 0.5-1 ml/kg of 10% solution over 5-10 mins.' },
    safety: { adr: ['Bradycardia/Arrhythmias (if given too fast)', 'Tissue necrosis (extravasation)'], contraindications: ['Hypercalcemia', 'Digitalis toxicity (relative)'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['10% solution (10ml ampoule)'], dosageForms: ['Injection Ampoule'], priceNPR: 'Ampoule: 20-40', brandNames: ['CalGlu'] },
    notes: ['10ml ampoule contains approx 1g (93mg elemental calcium). Pre-treatment for hyperkalemia cardiac changes.'],
    searchTags: ['Calcium', 'Heart', 'Antidote']
  }
];
