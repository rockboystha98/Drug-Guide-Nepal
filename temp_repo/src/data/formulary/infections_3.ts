import { DrugEntry } from '../../types/formulary';

export const infections3Drugs: DrugEntry[] = [
  // ANTIFUNGALS
  {
    id: 'inf_148',
    genericName: 'Amphotericin B',
    therapeuticClass: 'Polyene Antifungal',
    categoryId: 'infections',
    indications: ['Severe systemic fungal infections', 'Cryptococcal meningitis', 'Kala-Azar (Leishmaniasis)'],
    dosing: { adult: 'IV: Conventional: 0.5-1 mg/kg/day. Liposomal: 3-5 mg/kg/day.', pediatric: 'IV: Similar to adult based on mg/kg.' },
    safety: { adr: ['Nephrotoxicity', 'Severe hypokalemia', 'Infusion reactions (fever/chills)'], contraindications: ['Severe renal impairment (use liposomal)'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['50mg vial'], dosageForms: ['Injection'], priceNPR: 'Liposomal 50mg: 6000-8000', brandNames: ['Amphotret', 'Fungisome'] },
    notes: ['Require aggressive pre-hydration and pre-medication (hydrocortisone/paracetamol/anti-histamines).'],
    searchTags: ['Infection']
  },
  {
    id: 'inf_149',
    genericName: 'Clotrimazole',
    therapeuticClass: 'Azole Antifungal (Topical)',
    categoryId: 'infections',
    indications: ['Vulvovaginal candidiasis', 'Dermatophytosis (Tinea)'],
    dosing: { adult: 'Topical: Apply BID. Vaginal: 500 mg stat or 100 mg for 6 days.', pediatric: 'Topical: Apply BID.' },
    safety: { adr: ['Local burning/irritation'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['1% cream', '100mg/500mg vaginal pessary'], dosageForms: ['Cream', 'Pessary', 'Powder'], priceNPR: 'Cream: 50-80', brandNames: ['Candid'] },
    notes: ['Used for superficial infections only.'],
    searchTags: ['Infection', 'Fungal']
  },
  {
    id: 'inf_150',
    genericName: 'Fluconazole',
    therapeuticClass: 'Triazole Antifungal',
    categoryId: 'infections',
    indications: ['Candidiasis', 'Cryptococcal meningitis'],
    dosing: { adult: 'PO: vaginal candidiasis 150 mg single dose. Systemic: 400-800 mg/day.', pediatric: 'PO/IV: 6-12 mg/kg/day.' },
    safety: { adr: ['Hepatotoxicity', 'QT prolongation', 'GI upset'], contraindications: ['Coadministration with QT prolonging drugs'], pregnancyLactation: 'Category D (in high/continuous doses).' },
    pharmacy: { strengths: ['150mg, 400mg cap', '2mg/ml IV'], dosageForms: ['Capsule', 'Tablet', 'IV'], priceNPR: '150mg cap: 15-25', brandNames: ['Fluca', 'Zocon'] },
    notes: ['Excellent CSF penetration. Potent CYP inhibitor.'],
    searchTags: ['Infection', 'Fungal']
  },
  {
    id: 'inf_151',
    genericName: 'Griseofulvin',
    therapeuticClass: 'Antifungal',
    categoryId: 'infections',
    indications: ['Tinea capitis', 'Dermatophyte infections'],
    dosing: { adult: 'PO: 500 mg - 1g daily.', pediatric: 'PO: 10-20 mg/kg/day.' },
    safety: { adr: ['Headache', 'GI upset', 'Hepatotoxicity'], contraindications: ['Pregnancy', 'Severe liver disease', 'Porphyria'], pregnancyLactation: 'Category X.' },
    pharmacy: { strengths: ['250mg, 500mg tab'], dosageForms: ['Tablet'], priceNPR: '250mg tab: 15-20', brandNames: ['GrisOD', 'Grisovin'] },
    notes: ['Must be taken with a fatty meal. Requires long duration of therapy (weeks to months).'],
    searchTags: ['Infection', 'Fungal']
  },
  {
    id: 'inf_152',
    genericName: 'Itraconazole',
    therapeuticClass: 'Triazole Antifungal',
    categoryId: 'infections',
    indications: ['Aspergillosis', 'Histoplasmosis', 'Severe dermatophytosis'],
    dosing: { adult: 'PO: 100-200 mg BID.', pediatric: 'PO: 3-5 mg/kg/day.' },
    safety: { adr: ['Heart failure (negative inotropic effect)', 'Hepatotoxicity'], contraindications: ['Ventricular dysfunction/heart failure', 'Pregnancy'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['100mg, 200mg cap'], dosageForms: ['Capsule'], priceNPR: '100mg cap: 25-40', brandNames: ['Itramac', 'Canditral'] },
    notes: ['Requires an acidic gastric environment for absorption (take with food/cola).'],
    searchTags: ['Infection', 'Fungal']
  },
  {
    id: 'inf_153',
    genericName: 'Ketoconazole',
    therapeuticClass: 'Imidazole Antifungal',
    categoryId: 'infections',
    indications: ['Dermatophytosis', 'Cushing syndrome (off-label to reduce cortisol)'],
    dosing: { adult: 'PO: 200-400 mg daily. Topical: apply BID.', pediatric: 'PO: 3.3 to 6.6 mg/kg/day.' },
    safety: { adr: ['Severe hepatotoxicity', 'Adrenal insufficiency', 'Gynecomastia'], contraindications: ['Hepatic disease'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['200mg tab', '2% Shampoo/Cream'], dosageForms: ['Tablet', 'Topical'], priceNPR: 'Shampoo: 150-250', brandNames: ['Nizoral', 'Keto'] },
    notes: ['Oral use is highly restricted due to fatal hepatotoxicity. Primarily used topically now.'],
    searchTags: ['Infection', 'Fungal']
  },
  {
    id: 'inf_154',
    genericName: 'Nystatin',
    therapeuticClass: 'Polyene Antifungal',
    categoryId: 'infections',
    indications: ['Oral and intestinal candidiasis'],
    dosing: { adult: 'PO (Oral thrush): 400,000-600,000 units QID (swish and swallow).', pediatric: 'PO: Infant: 200,000 units QID.' },
    safety: { adr: ['Nausea', 'Vomiting (when swallowed)'], contraindications: ['Systemic infections (not absorbed)'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['100,000 U/ml drop', '500,000 U tab'], dosageForms: ['Suspension', 'Tablet', 'Pessary'], priceNPR: 'Drops: 80-120', brandNames: ['Mycostatin'] },
    notes: ['No significant systemic absorption. Safe for local GI/oral use.'],
    searchTags: ['Infection', 'Fungal']
  },

  // ANTIHELMINTHICS
  {
    id: 'inf_155',
    genericName: 'Albendazole',
    therapeuticClass: 'Antihelminthic',
    categoryId: 'infections',
    indications: ['Intestinal nematodes', 'Neurocysticercosis', 'Hydatid disease', 'Worm'],
    dosing: { adult: 'PO: 400 mg single dose. Systemic: 15 mg/kg/day divided BID.', pediatric: 'PO: >2 yrs: 400 mg. 1-2 yrs: 200 mg single dose.' },
    safety: { adr: ['GI upset', 'Transaminitis', 'Bone marrow suppression (long term)'], contraindications: ['Pregnancy (1st trimester)'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['400mg tab', '200mg/5ml syr'], dosageForms: ['Tablet', 'Suspension'], priceNPR: '400mg tab: 15-20', brandNames: ['Zentel', 'Bandy'] },
    notes: ['Take with fatty food for systemic infections.'],
    searchTags: ['Infection', 'Worm']
  },
  {
    id: 'inf_156',
    genericName: 'Mebendazole',
    therapeuticClass: 'Antihelminthic',
    categoryId: 'infections',
    indications: ['Pinworm', 'Roundworm', 'Hookworm', 'Worm'],
    dosing: { adult: 'PO: 100 mg BID for 3 days or 500 mg single dose.', pediatric: 'PO: Same as adult (>1 year).' },
    safety: { adr: ['Abdominal pain', 'Diarrhea'], contraindications: ['Pregnancy'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['100mg, 500mg tab'], dosageForms: ['Tablet'], priceNPR: '500mg tab: 10-15', brandNames: ['Mebex'] },
    notes: ['Poorly absorbed predictably; acts mostly locally in the gut.'],
    searchTags: ['Infection', 'Worm']
  },
  {
    id: 'inf_157',
    genericName: 'Miltefosine',
    therapeuticClass: 'Antileishmanial',
    categoryId: 'infections',
    indications: ['Visceral Leishmaniasis (Kala-Azar)'],
    dosing: { adult: 'PO: 50 mg BID or TID for 28 days (based on weight).', pediatric: 'PO: 2.5 mg/kg/day for 28 days.' },
    safety: { adr: ['Severe GI upset', 'Hepatotoxicity', 'Nephrotoxicity'], contraindications: ['Pregnancy (highly teratogenic)'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['10mg, 50mg cap'], dosageForms: ['Capsule'], priceNPR: 'Often via national programs', brandNames: ['Impavido'] },
    notes: ['Directly observed therapy (DOT) recommended.'],
    searchTags: ['Infection']
  },
  {
    id: 'inf_158',
    genericName: 'Niclosamide',
    therapeuticClass: 'Antihelminthic',
    categoryId: 'infections',
    indications: ['Tapeworm (Taenia saginata, Diphyllobothrium)', 'Worm'],
    dosing: { adult: 'PO: 2g single dose (chewed).', pediatric: 'PO: 50 mg/kg single dose.' },
    safety: { adr: ['GI upset'], contraindications: ['Not for extraintestinal tapeworms'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['500mg chewable tab'], dosageForms: ['Tablet'], priceNPR: '500mg tab: 5-10', brandNames: ['Yomesan'] },
    notes: ['Must be chewed thoroughly and swallowed.'],
    searchTags: ['Infection', 'Worm']
  },
  {
    id: 'inf_159',
    genericName: 'Praziquantel',
    therapeuticClass: 'Antihelminthic',
    categoryId: 'infections',
    indications: ['Schistosomiasis', 'Liver flukes', 'Neurocysticercosis', 'Worm'],
    dosing: { adult: 'PO: 20-25 mg/kg TID for 1 day or longer depending on species.', pediatric: 'PO: Same as adult.' },
    safety: { adr: ['Dizziness', 'Headache', 'Abdominal pain'], contraindications: ['Ocular cysticercosis (can cause irreversible eye damage)'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['600mg tab'], dosageForms: ['Tablet'], priceNPR: '600mg tab: 80-120', brandNames: ['Biltricide', 'Distocide'] },
    notes: ['In neurocysticercosis, co-administer with steroids to prevent acute inflammatory response to dying worms.'],
    searchTags: ['Infection', 'Worm']
  },
  {
    id: 'inf_160',
    genericName: 'Pyrantel pamoate',
    therapeuticClass: 'Antihelminthic',
    categoryId: 'infections',
    indications: ['Ascariasis', 'Enterobiasis (Pinworm)'],
    dosing: { adult: 'PO: 11 mg/kg (max 1g) single dose. Repeat in 2 weeks for pinworm.', pediatric: 'PO: 11 mg/kg single dose.' },
    safety: { adr: ['GI upset', 'Dizziness'], contraindications: ['Liver disease'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['250mg tab', '50mg/ml suspension'], dosageForms: ['Tablet', 'Suspension'], priceNPR: '250mg tab: 15-20', brandNames: ['Nemocid'] },
    notes: ['Paralyzes worms (depolarizing neuromuscular blocker).'],
    searchTags: ['Infection', 'Worm']
  },

  // ANTILEPROTIC AND ANTIMALARIAL
  {
    id: 'inf_161',
    genericName: 'Clofazimine',
    therapeuticClass: 'Antileprotic',
    categoryId: 'infections',
    indications: ['Leprosy (MDT)'],
    dosing: { adult: 'PO: 50 mg daily + 300 mg once a month.', pediatric: 'PO: Weight based MDT blister packs.' },
    safety: { adr: ['Skin discoloration (red/black)', 'Ichthyosis', 'Severe GI symptoms'], contraindications: ['Pregnancy (caution)'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['50mg, 100mg cap'], dosageForms: ['Capsule'], priceNPR: 'Free via national programs', brandNames: ['Hanprine'] },
    notes: ['Skin discoloration is reversible but may take months/years to fade.'],
    searchTags: ['Infection', 'Leprosy']
  },
  {
    id: 'inf_162',
    genericName: 'Dapsone',
    therapeuticClass: 'Antileprotic / Sulfone',
    categoryId: 'infections',
    indications: ['Leprosy', 'Dermatitis herpetiformis', 'PCP prophylaxis'],
    dosing: { adult: 'PO: 100 mg daily.', pediatric: 'PO: 1-2 mg/kg/day.' },
    safety: { adr: ['Hemolytic anemia (especially G6PD deficiency)', 'Methemoglobinemia', 'Dapsone syndrome'], contraindications: ['Severe anemia', 'G6PD deficiency'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['25mg, 100mg tab'], dosageForms: ['Tablet'], priceNPR: '100mg tab: 2-5', brandNames: ['Dapsone'] },
    notes: ['Check G6PD status before initiating if possible.'],
    searchTags: ['Infection', 'Leprosy']
  },
  {
    id: 'inf_163',
    genericName: 'Artemether + Lumefantrine',
    therapeuticClass: 'Antimalarial (ACT)',
    categoryId: 'infections',
    indications: ['Uncomplicated P. falciparum malaria', 'Fever'],
    dosing: { adult: 'PO: 4 tablets (20/120mg each) initially, then 4 tabs at 8, 24, 36, 48, and 60 hours.', pediatric: 'PO: Weight-based dosing (e.g. 1 tab per dose for 5-14kg).' },
    safety: { adr: ['QT prolongation', 'Dizziness', 'GI upset'], contraindications: ['Severe/complicated malaria (requires IV)', '1st trimester pregnancy (relative)'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['20mg/120mg, 40mg/240mg', '80mg/480mg tab'], dosageForms: ['Tablet'], priceNPR: 'Blister pack: 150-250', brandNames: ['Lumerax', 'Coartem'] },
    notes: ['Take with high-fat meal to maximize absorption. National first-line for Falciparum.'],
    searchTags: ['Infection', 'Malaria', 'Fever']
  },
  {
    id: 'inf_164',
    genericName: 'Artesunate',
    therapeuticClass: 'Antimalarial',
    categoryId: 'infections',
    indications: ['Severe/Complicated Malaria'],
    dosing: { adult: 'IV/IM: 2.4 mg/kg at 0, 12, and 24 hours, then daily.', pediatric: 'IV/IM: >20kg: 2.4 mg/kg. <20kg: 3.0 mg/kg.' },
    safety: { adr: ['Delayed hemolytic anemia', 'Bradycardia'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['60mg, 120mg vial'], dosageForms: ['Injection'], priceNPR: '60mg vial: 200-300', brandNames: ['Falcigo'] },
    notes: ['Must be followed by a full course of oral ACT once patient can swallow.'],
    searchTags: ['Infection', 'Malaria', 'Fever', 'Sepsis'],
    sepsisPriority: true
  },
  {
    id: 'inf_165',
    genericName: 'Chloroquine',
    therapeuticClass: 'Antimalarial',
    categoryId: 'infections',
    indications: ['P. vivax malaria', 'Rheumatoid arthritis (off-label)'],
    dosing: { adult: 'PO: 1g (600mg base) stat, then 500mg (300mg base) at 6, 24, and 48 hours.', pediatric: 'PO: 10 mg base/kg stat, then 5 mg/kg at 6, 24, and 48 hours.' },
    safety: { adr: ['Pruritus', 'Retinopathy (long-term)', 'QT prolongation', 'Hypotension (if given IV rapidly)'], contraindications: ['Retinal/visual field changes', 'Psoriasis'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['250mg (150mg base) tab'], dosageForms: ['Tablet'], priceNPR: '250mg tab: 2-4', brandNames: ['Lariago'] },
    notes: ['Must be followed by primaquine to eradicate P. vivax hypnozoites in the liver.'],
    searchTags: ['Infection', 'Malaria', 'Fever']
  }
];
