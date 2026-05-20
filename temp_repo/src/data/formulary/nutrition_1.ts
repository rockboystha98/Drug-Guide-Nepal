import { DrugEntry } from '../../types/formulary';

export const nutritionBlood1Drugs: DrugEntry[] = [
  // HEMATINICS & IRON PREPARATIONS
  {
    id: 'nut_001',
    genericName: 'Ferrous sulfate',
    therapeuticClass: 'Iron preparation',
    categoryId: 'blood',
    indications: ['Iron deficiency anemia', 'Prophylaxis in pregnancy'],
    dosing: { adult: 'PO: 200 mg (65 mg elemental iron) 1-3 times daily.', pediatric: 'PO: Treatment: 3-6 mg/kg/day elemental iron divided BID/TID.' },
    safety: { adr: ['Constipation', 'Black stools', 'Nausea / Epigastric pain'], contraindications: ['Hemochromatosis', 'Hemosiderosis', 'Hemolytic anemia'], pregnancyLactation: 'Category A. Routine supplement in pregnancy.' },
    pharmacy: { strengths: ['200mg tab', 'Drops/Syrup'], dosageForms: ['Tablet', 'Syrup', 'Drops'], priceNPR: '200mg tab: 1-2', brandNames: ['Fersolate', 'Irofol'] },
    notes: ['Better absorbed on an empty stomach but can be taken with food to reduce GI upset. Vitamin C enhances absorption.'],
    searchTags: ['Anemia', 'Weakness', 'Blood']
  },
  {
    id: 'nut_002',
    genericName: 'Ferrous fumarate',
    therapeuticClass: 'Iron preparation',
    categoryId: 'blood',
    indications: ['Iron deficiency anemia', 'Prophylaxis in pregnancy'],
    dosing: { adult: 'PO: 200-300 mg (65-100 mg elemental iron) 1-2 times daily.', pediatric: 'PO: Treatment: 3-6 mg/kg/day elemental iron divided BID/TID.' },
    safety: { adr: ['Constipation', 'Dark stools', 'GI upset'], contraindications: ['Iron overload syndromes'], pregnancyLactation: 'Category A.' },
    pharmacy: { strengths: ['Varies (e.g., 200mg, often in combo with FA)'], dosageForms: ['Tablet', 'Capsule'], priceNPR: 'Combo tab: ~2-5', brandNames: ['Livogen (with folic acid)'] },
    notes: ['Often combined with Folic Acid for maternal care. Contains approximately 33% elemental iron.'],
    searchTags: ['Anemia', 'Weakness', 'Blood']
  },
  {
    id: 'nut_003',
    genericName: 'Iron sucrose',
    therapeuticClass: 'Parenteral Iron',
    categoryId: 'blood',
    indications: ['Iron deficiency anemia intolerant/unresponsive to oral therapy', 'CKD patients on hemodialysis'],
    dosing: { adult: 'IV: 100-200 mg per dose, calculation based on body weight and target Hb.', pediatric: 'IV: Safety and efficacy not fully established; use per specialized protocols.' },
    safety: { adr: ['Hypotension', 'Anaphylactoid reactions (rare but serious)', 'Injection site reactions'], contraindications: ['Evidence of iron overload', 'Non-iron deficiency anemia'], pregnancyLactation: 'Category B. Preferable over iron dextran due to lower anaphylaxis risk.' },
    pharmacy: { strengths: ['20mg/ml (5ml ampoule)'], dosageForms: ['Injection'], priceNPR: '100mg amp: 200-300', brandNames: ['Orofer S', 'Venofer'] },
    notes: ['Dilute in max 100ml Normal Saline (NS) and infuse over 15-30 mins. Do not mix with other medications. Test dose usually not required but observe closely.'],
    searchTags: ['Anemia', 'Blood', 'Drip']
  },
  {
    id: 'nut_004',
    genericName: 'Folic acid (Vitamin B9)',
    therapeuticClass: 'Vitamin / Hematinic',
    categoryId: 'blood',
    indications: ['Megaloblastic anemia due to folate deficiency', 'Prevention of neural tube defects in pregnancy'],
    dosing: { adult: 'PO: Treatment: 5 mg daily for 4 months. Prophylaxis (pregnancy): 0.4-5 mg daily depending on risk.', pediatric: 'PO: 0.5-5 mg depending on age and indication.' },
    safety: { adr: ['Rarely allergic reactions'], contraindications: ['Undiagnosed megaloblastic anemia (may mask B12 deficiency neurological damage)'], pregnancyLactation: 'Category A. Essential for neural tube development.' },
    pharmacy: { strengths: ['5mg tab', '1mg tab'], dosageForms: ['Tablet'], priceNPR: '5mg tab: ~1', brandNames: ['Folvite', 'Folirubin'] },
    notes: ['Always rule out Vitamin B12 deficiency before treating megaloblastic anemia with large doses of folate alone.'],
    searchTags: ['Anemia', 'Pregnancy', 'Vitamin']
  },
  {
    id: 'nut_005',
    genericName: 'Cyanocobalamin / Hydroxocobalamin (Vitamin B12)',
    therapeuticClass: 'Vitamin / Hematinic',
    categoryId: 'blood',
    indications: ['Pernicious anemia', 'Vitamin B12 deficiency', 'Neuropathies'],
    dosing: { adult: 'IM: 1000 mcg 3 times a week for 2 weeks, then 1000 mcg every 1-3 months.', pediatric: 'IM: 100 mcg (or per specific weight protocols) given similarly.' },
    safety: { adr: ['Hypokalemia (due to rapid erythropoiesis)', 'Itching/rash'], contraindications: ['Hypersensitivity', 'Leber’s disease'], pregnancyLactation: 'Category A (C if high doses).' },
    pharmacy: { strengths: ['500mcg, 1000mcg, 1500mcg ampoules'], dosageForms: ['Injection', 'Tablet'], priceNPR: 'Ampoule: 15-30', brandNames: ['Optisulin', 'Neurobion', 'Methycobal (Mecobalamin)'] },
    notes: ['Oral formulation often used for mild deficiency/maintenance. Injection preferred for pernicious anemia or severe neuropathy.'],
    searchTags: ['Anemia', 'Weakness', 'Nerve']
  },
  {
    id: 'nut_006',
    genericName: 'Epoetin alfa',
    therapeuticClass: 'Erythropoiesis-stimulating agent (ESA)',
    categoryId: 'blood',
    indications: ['Anemia associated with CKD', 'Chemotherapy-induced anemia'],
    dosing: { adult: 'SC/IV: CKD: 50-100 units/kg 3 times/week. Adjust based on Hb levels.', pediatric: 'SC/IV: 50 units/kg 3 times/week.' },
    safety: { adr: ['Hypertension', 'Thromboembolism', 'Headache'], contraindications: ['Uncontrolled hypertension', 'Pure red cell aplasia after ESA treatment'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['2000, 4000, 10000 IU prefilled syringes'], dosageForms: ['Injection'], priceNPR: '4000 IU PFS: 1500-2500', brandNames: ['Epofit', 'Erypro'] },
    notes: ['Requires adequate iron stores to be effective. Target Hb usually 10-11 g/dL; avoid >11 g/dL due to cardiovascular risk. Storage: 2-8°C.'],
    searchTags: ['Anemia', 'Blood', 'Kidney']
  },

  // VITAMINS & MINERALS
  {
    id: 'nut_007',
    genericName: 'Vitamin A (Retinol)',
    therapeuticClass: 'Fat-Soluble Vitamin',
    categoryId: 'blood',
    indications: ['Vitamin A deficiency (Xerophthalmia, Night blindness)', 'Measles adjunct therapy'],
    dosing: { adult: 'PO: 10,000-25,000 IU daily. Deficiency: 100,000 IU IM daily for 3 days, then 50,000 IU daily.', pediatric: 'National Schedule (Megadose): <6 mo: 50,000 IU; 6-12 mo: 100,000 IU; >1 yr: 200,000 IU. Repeat after 6 months.' },
    safety: { adr: ['Hepatotoxicity (excessive doses)', 'Teratogenicity', 'Increased intracranial pressure (pseudotumor cerebri) in infants'], contraindications: ['Hypervitaminosis A', 'High doses in pregnancy'], pregnancyLactation: 'High doses (megadoses) are Category X.' },
    pharmacy: { strengths: ['100k IU, 200k IU capsules'], dosageForms: ['Capsule', 'Drops'], priceNPR: 'Subsidized in national programs', brandNames: ['Aquasol A'] },
    notes: ['Aligns with Nepal MoHP Vitamin A supplementation schedule for children (Baisakh and Kartik campaigns).'],
    searchTags: ['Eye', 'Measles', 'Vitamin']
  },
  {
    id: 'nut_008',
    genericName: 'Vitamin D3 (Cholecalciferol) / Calcitriol',
    therapeuticClass: 'Fat-Soluble Vitamin',
    categoryId: 'blood',
    indications: ['Rickets/Osteomalacia', 'Vitamin D deficiency', 'Hypocalcemia in CKD (Calcitriol)'],
    dosing: { adult: 'PO: Deficiency: 60,000 IU weekly for 8 weeks, then maintenance. Calcitriol (CKD): 0.25 mcg daily.', pediatric: 'PO: Rickets: 60,000 IU weekly for 4-8 weeks or Stoss therapy.' },
    safety: { adr: ['Hypercalcemia', 'Hypercalciuria', 'Renal stones'], contraindications: ['Hypercalcemia', 'Vitamin D toxicity'], pregnancyLactation: 'Category C (High Doses: D).' },
    pharmacy: { strengths: ['60,000 IU cap/granules', '0.25mcg cap (Calcitriol)'], dosageForms: ['Capsule', 'Sachet', 'Drops'], priceNPR: '60k UI cap: 30-50', brandNames: ['Depura', 'D3 Must', 'Rocaltrol'] },
    notes: ['Calcitriol is the active form, strictly used when renal hydroxylation is impaired.'],
    searchTags: ['Bone', 'Weakness', 'Vitamin']
  },
  {
    id: 'nut_009',
    genericName: 'Vitamin C (Ascorbic Acid)',
    therapeuticClass: 'Water-Soluble Vitamin',
    categoryId: 'blood',
    indications: ['Scurvy', 'Urine acidification', 'Adjunct to iron therapy'],
    dosing: { adult: 'PO: 500-1000 mg daily.', pediatric: 'PO: Scurvy: 100-300 mg daily.' },
    safety: { adr: ['Diarrhea', 'Oxalate kidney stones (in very high doses)'], contraindications: [], pregnancyLactation: 'Category A (High doses C).' },
    pharmacy: { strengths: ['500mg chewable tab', 'Injection'], dosageForms: ['Chewable Tablet', 'Injection'], priceNPR: '500mg tab: ~2-5', brandNames: ['Celin', 'Limcee'] },
    notes: ['Improves absorption of oral iron.'],
    searchTags: ['Vitamin', 'Immunity']
  },
  {
    id: 'nut_010',
    genericName: 'Calcium (as Carbonate / Citrate)',
    therapeuticClass: 'Mineral Supplement',
    categoryId: 'blood',
    indications: ['Hypocalcemia', 'Osteoporosis prevention', 'Phosphate binder (CKD)'],
    dosing: { adult: 'PO: 500-1500 mg elemental calcium daily (divided doses).', pediatric: 'PO: Age-dependent requirements.' },
    safety: { adr: ['Constipation', 'Kidney stones (calcium oxalate/phosphate)', 'GI upset'], contraindications: ['Hypercalcemia', 'Hypercalciuria'], pregnancyLactation: 'Category C (Generally safe and recommended).' },
    pharmacy: { strengths: ['500mg elemental calcium (1250mg Calcium Carbonate) tab'], dosageForms: ['Tablet', 'Syrup'], priceNPR: '500mg tab: ~5-10', brandNames: ['Shelcal', 'Calcirol'] },
    notes: ['Calcium Carbonate requires an acidic stomach (take with food). Calcium Citrate can be taken on an empty stomach and is preferred in elderly/achondroplasia.'],
    searchTags: ['Bone', 'Nutrition', 'Pregnancy']
  }
];
