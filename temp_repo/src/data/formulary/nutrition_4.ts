import { DrugEntry } from '../../types/formulary';

export const nutritionBlood4Drugs: DrugEntry[] = [
  // FIBRINOLYTIC DRUGS
  {
    id: 'nut_027',
    genericName: 'Tenecteplase',
    therapeuticClass: 'Fibrinolytic (Thrombolytic)',
    categoryId: 'blood',
    indications: ['Acute STEMI (when primary PCI is not available in time)'],
    dosing: { adult: 'IV: Single bolus weight-based over 10 secs (e.g., 30 mg for <60kg, 40mg for 70-80kg, max 50mg for ≥90kg).', pediatric: 'Not recommended.' },
    safety: { adr: ['**Intracranial Hemorrhage** (fatal risk)', 'Major bleeding', 'Arrhythmias with reperfusion'], contraindications: ['Prior hemorrhagic stroke', 'Ischemic stroke < 6 months', 'Active internal bleeding', 'Aortic dissection'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['30mg, 40mg, 50mg vials'], dosageForms: ['Injection'], priceNPR: 'Vial: 35000-45000+', brandNames: ['Elaxim', 'TNKase'] },
    notes: ['Given as a single IV bolus. Fibrin-specific, preferred over streptokinase for ease of administration and safety profile.'],
    searchTags: ['Clot buster', 'Heart attack', 'STEMI']
  },
  {
    id: 'nut_028',
    genericName: 'Streptokinase',
    therapeuticClass: 'Fibrinolytic (Thrombolytic)',
    categoryId: 'blood',
    indications: ['Acute STEMI', 'Massive PE', 'Acute DVT (historical/rare)'],
    dosing: { adult: 'IV: STEMI: 1.5 million IU infused over 60 mins.', pediatric: 'Not routinely used.' },
    safety: { adr: ['**Allergic reactions / Anaphylaxis**', 'Hypotension during infusion', 'Major bleeding'], contraindications: ['Previous use of streptokinase within 6 months to 1 year', 'Recent surgery/trauma', 'Stroke history'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['1.5 Million IU vial'], dosageForms: ['Injection'], priceNPR: '1.5M IU vial: ~2000-4000', brandNames: ['STP', 'Karnokinase'] },
    notes: ['Highly antigenic; antibodies neutralize it after first use, requiring alternative lytics if a second MI occurs within a year.'],
    searchTags: ['Clot buster', 'Heart attack']
  },

  // ANTIFIBRINOLYTIC DRUGS & ANTIDOTES
  {
    id: 'nut_029',
    genericName: 'Tranexamic acid',
    therapeuticClass: 'Antifibrinolytic',
    categoryId: 'blood',
    indications: ['Trauma with massive hemorrhage (CRASH-2 trial)', 'Postpartum hemorrhage (WOMAN trial)', 'Menorrhagia', 'Tooth extraction in hemophilia'],
    dosing: { adult: 'IV: Trauma/PPH: 1 g IV bolus over 10 mins, then 1 g infusion over 8 hours. PO: 500 mg TID-QID.', pediatric: 'IV: Trauma: 15 mg/kg bolus.' },
    safety: { adr: ['Thromboembolism', 'Seizures (with high IV doses)', 'GI discomfort (PO)'], contraindications: ['Active intravascular clotting', 'Subarachnoid hemorrhage'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['500mg tab', '500mg/5ml ampoule'], dosageForms: ['Tablet', 'Injection'], priceNPR: 'Ampoule: 80-120', brandNames: ['Trenaxa', 'Pause'] },
    notes: ['Must be given within 3 hours of injury/delivery to be effective in hemorrhage protocols.'],
    searchTags: ['Bleeding', 'Blood']
  },
  {
    id: 'nut_030',
    genericName: 'Ethamsylate',
    therapeuticClass: 'Hemostatic',
    categoryId: 'blood',
    indications: ['Capillary bleeding', 'Menorrhagia', 'Surgical prophylaxis'],
    dosing: { adult: 'PO: 500 mg TID/QID. IV/IM: 250-500 mg QID.', pediatric: 'IV/IM: 12.5 mg/kg.' },
    safety: { adr: ['Headache', 'Rash', 'Nausea'], contraindications: ['Porphyria', 'Hypersensitivity'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['250mg, 500mg tab', '250mg/2ml ampoule'], dosageForms: ['Tablet', 'Injection'], priceNPR: '500mg tab: ~10', brandNames: ['Sylate', 'Dicynene'] },
    notes: ['Improves platelet adhesiveness and capillary endothelium resistance.'],
    searchTags: ['Bleeding']
  },
  {
    id: 'nut_031',
    genericName: 'Phytomenadione (Vitamin K1)',
    therapeuticClass: 'Vitamin / Antidote',
    categoryId: 'blood',
    indications: ['Warfarin reversal', 'Vitamin K Deficiency Bleeding (VKDB) prophylaxis in newborns'],
    dosing: { adult: 'IV/PO: Warfarin reversal depends on INR and degree of bleeding (usually 1-10 mg).', pediatric: 'IM: Newborn prophylaxis: 1 mg IM once at birth (0.5 mg if preterm).' },
    safety: { adr: ['Anaphylaxis (with rapid IV administration)', 'Flushing'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['10mg/ml ampoule', '1mg/0.5ml amp (pedi)'], dosageForms: ['Injection'], priceNPR: '10mg amp: ~20-50', brandNames: ['Kenadion'] },
    notes: ['Give IV doses slowly to prevent anaphylaxis. Promotes hepatic synthesis of factors II, VII, IX, X.'],
    searchTags: ['Antidote', 'Bleeding', 'Warfarin']
  },
  {
    id: 'nut_032',
    genericName: 'Protamine sulfate',
    therapeuticClass: 'Antidote (Heparin antagonist)',
    categoryId: 'blood',
    indications: ['Reversal of Unfractionated Heparin toxicity'],
    dosing: { adult: 'IV: 1 mg for every 100 units of heparin given in the last 2-3 hours. Max 50 mg per dose.', pediatric: 'IV: Based on heparin received.' },
    safety: { adr: ['Severe hypotension', 'Bradycardia', 'Anaphylaxis (especially if diabetic on NPH insulin)'], contraindications: ['Known hypersensitivity'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['50mg/5ml ampoule'], dosageForms: ['Injection'], priceNPR: 'Ampoule: ~200-300', brandNames: ['Prohance', 'Protamine'] },
    notes: ['MUST be administered very slowly IV (over 10 mins). Only partially reverses LMWH.'],
    searchTags: ['Antidote', 'Bleeding', 'Heparin']
  },

  // PLASMA FRACTIONS & SUBSTITUTES
  {
    id: 'nut_033',
    genericName: 'Human albumin',
    therapeuticClass: 'Plasma volume expander',
    categoryId: 'blood',
    indications: ['Hypovolemic shock', 'Ascites with large volume paracentesis', 'Hypoalbuminemia', 'Burns'],
    dosing: { adult: 'IV: 20% Albumin: 50-100 ml depending on deficit. Paracentesis: 8g for every liter of ascitic fluid removed (>5L).', pediatric: 'IV: 0.5-1 g/kg/dose.' },
    safety: { adr: ['Fluid overload / Pulmonary edema', 'Hypersensitivity'], contraindications: ['Severe anemia', 'Heart failure'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['20% 50ml, 100ml'], dosageForms: ['IV Infusion'], priceNPR: '20% 100ml: ~4000-6000', brandNames: ['AlbuDac', 'Human Albumin'] },
    notes: ['High-cost colloid. Strict indications required for cost-effective use.'],
    searchTags: ['Plasma', 'Volume', 'Ascites']
  },
  {
    id: 'nut_034',
    genericName: 'Polygeline',
    therapeuticClass: 'Plasma substitute (Colloid)',
    categoryId: 'blood',
    indications: ['Hypovolemic shock (hemorrhage, sepsis, trauma)'],
    dosing: { adult: 'IV: 500-1000 ml depending on severity.', pediatric: 'IV: 10-20 ml/kg bolus.' },
    safety: { adr: ['Anaphylactoid reactions / Histamine release', 'Urticaria'], contraindications: ['Severe heart failure', 'Renal failure with oliguria'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['500ml'], dosageForms: ['IV Infusion'], priceNPR: '500ml bot: ~400-600', brandNames: ['Haemaccel'] },
    notes: ['Use has decreased due to anaphylaxis risk and preference for crystalloids/albumin.'],
    searchTags: ['Volume', 'Shock', 'Plasma']
  }
];
