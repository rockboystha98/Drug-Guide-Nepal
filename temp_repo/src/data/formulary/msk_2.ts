import { DrugEntry } from '../../types/formulary';

export const msk2Drugs: DrugEntry[] = [
  // NON-SELECTIVE NSAIDs
  {
    id: 'msk_009',
    genericName: 'Diclofenac',
    therapeuticClass: 'Non-selective NSAID',
    categoryId: 'msk',
    indications: ['Rheumatoid arthritis', 'Osteoarthritis', 'Acute pain / Sprain', 'Renal colic'],
    dosing: { adult: 'PO: 50 mg BID/TID. IM: 75 mg deep IM (gluteal). Gel: Apply TID-QID.', pediatric: 'PO: Not recommended <1 year. >1 year: 1-3 mg/kg/day divided.' },
    safety: { adr: ['**Peptic Ulcer Disease (PUD) / GI Bleeding**', '**Renal Impairment**', 'Cardiovascular risk'], contraindications: ['Active peptic ulcer', 'History of GI bleeding', 'Severe heart failure', 'Last trimester of pregnancy'], pregnancyLactation: 'Category C (Category D in 3rd trimester - premature closure of ductus arteriosus).' },
    pharmacy: { strengths: ['50mg tab', '100mg SR tab', '75mg/3ml amp', '1% Gel'], dosageForms: ['Tablet', 'Injection', 'Topical Gel'], priceNPR: '50mg tab: ~1-3. Inj: ~10', brandNames: ['Voveran', 'Reactin'] },
    notes: ['**CRITICAL ALERT: Avoid "NSAID Stacking" (do not use with another systemic NSAID).** Take PO doses post-meal. **IM injection must be deep gluteal.**'],
    searchTags: ['Pain', 'Joint pain', 'Back pain', 'Swelling', 'Muscle catch']
  },
  {
    id: 'msk_010',
    genericName: 'Ibuprofen',
    therapeuticClass: 'Non-selective NSAID',
    categoryId: 'msk',
    indications: ['Fever', 'Mild to moderate pain', 'Juvenile Idiopathic Arthritis (JIA)'],
    dosing: { adult: 'PO: 200-400 mg every 4-6 hours (max 3200 mg/day). Post-meal.', pediatric: 'PO: Pain/Fever: 5-10 mg/kg/dose every 6-8 hours (max 40 mg/kg/day). JIA: 30-40 mg/kg/day divided.' },
    safety: { adr: ['GI upset', '**Peptic Ulcer Disease**', '**Renal Impairment**'], contraindications: ['Active PUD', 'History of hypersensitivity to aspirin/NSAIDs'], pregnancyLactation: 'Category C (Category D in 3rd trimester).' },
    pharmacy: { strengths: ['200mg, 400mg tab', '100mg/5ml suspension'], dosageForms: ['Tablet', 'Syrup'], priceNPR: '400mg tab: ~2', brandNames: ['Brufen', 'Ibugesic'] },
    notes: ['**CRITICAL ALERT: Avoid "NSAID Stacking".** Take post-meal. High-precision mg/kg dosing crucial for pediatrics.'],
    searchTags: ['Fever', 'Pain', 'Joint pain', 'Back pain']
  },
  {
    id: 'msk_011',
    genericName: 'Naproxen',
    therapeuticClass: 'Non-selective NSAID',
    categoryId: 'msk',
    indications: ['Acute gout', 'Osteoarthritis', 'Dysmenorrhea', 'Migraine'],
    dosing: { adult: 'PO: 250-500 mg BID. Post-meal.', pediatric: 'PO: JIA (>2 years): 10-15 mg/kg/day divided BID.' },
    safety: { adr: ['GI bleeding', '**Peptic Ulcer Disease**', 'Renal impairment'], contraindications: ['Active PUD', 'Asthma triggered by NSAIDs'], pregnancyLactation: 'Category C (Category D in 3rd trimester).' },
    pharmacy: { strengths: ['250mg, 500mg tab'], dosageForms: ['Tablet'], priceNPR: '250mg tab: ~3-5', brandNames: ['Naprosyn', 'Xenap'] },
    notes: ['**CRITICAL ALERT: Avoid "NSAID Stacking".** Lower cardiovascular risk profile compared to other non-selective NSAIDs.'],
    searchTags: ['Joint pain', 'Swelling', 'Gout', 'Migraine']
  },
  {
    id: 'msk_012',
    genericName: 'Aceclofenac',
    therapeuticClass: 'Non-selective NSAID',
    categoryId: 'msk',
    indications: ['Osteoarthritis', 'Rheumatoid arthritis', 'Ankylosing spondylitis'],
    dosing: { adult: 'PO: 100 mg BID. Post-meal.', pediatric: 'Not recommended.' },
    safety: { adr: ['GI bleeding', 'Dyspepsia', 'Renal impairment'], contraindications: ['Active PUD', 'Heart failure (NYHA II-IV)'], pregnancyLactation: 'Category C (Category D in 3rd trimester).' },
    pharmacy: { strengths: ['100mg tab', '200mg SR tab'], dosageForms: ['Tablet'], priceNPR: '100mg tab: ~2-4', brandNames: ['Zerodol', 'Hifenac'] },
    notes: ['**CRITICAL ALERT: Avoid "NSAID Stacking".** Take post-meal. Closely related to diclofenac.'],
    searchTags: ['Pain', 'Joint pain', 'Back pain', 'Swelling']
  },
  {
    id: 'msk_013',
    genericName: 'Indomethacin',
    therapeuticClass: 'Non-selective NSAID',
    categoryId: 'msk',
    indications: ['Acute Gout', 'Ankylosing spondylitis', 'Closure of patent ductus arteriosus (PDA) in neonates'],
    dosing: { adult: 'PO: Gout: 50 mg TID until pain tolerable, then taper. Post-meal.', pediatric: 'Neonatal IV for PDA only. General pain not recommended.' },
    safety: { adr: ['Severe GI irritation/ulcers', 'Headache / CNS effects', 'Renal impairment'], contraindications: ['Active PUD', 'Psychiatric disorders (can exacerbate)'], pregnancyLactation: 'Category C (Category D in 3rd trimester).' },
    pharmacy: { strengths: ['25mg cap', '75mg SR cap'], dosageForms: ['Capsule'], priceNPR: '25mg cap: ~2-5', brandNames: ['Indocap', 'Inmecin'] },
    notes: ['**CRITICAL ALERT: Avoid "NSAID Stacking".** Very potent, short-term use preferred for gout attacks.'],
    searchTags: ['Gout', 'Joint pain', 'Ankylosing spondylitis']
  },
  {
    id: 'msk_014',
    genericName: 'Piroxicam',
    therapeuticClass: 'Non-selective NSAID',
    categoryId: 'msk',
    indications: ['Rheumatoid arthritis', 'Osteoarthritis'],
    dosing: { adult: 'PO: 20 mg OD. Post-meal.', pediatric: 'Not recommended.' },
    safety: { adr: ['High risk of GI ulceration/bleeding', 'Skin rash'], contraindications: ['Active PUD', 'History of GI bleeding'], pregnancyLactation: 'Category C (Category D in 3rd trimester).' },
    pharmacy: { strengths: ['10mg cap', '20mg cap'], dosageForms: ['Capsule'], priceNPR: '20mg cap: ~2-4', brandNames: ['Dolonex', 'Pirox'] },
    notes: ['**CRITICAL ALERT: Avoid "NSAID Stacking".** Long half-life allows once-daily dosing.'],
    searchTags: ['Joint pain', 'Arthritis']
  },
  {
    id: 'msk_015',
    genericName: 'Mefenamic acid',
    therapeuticClass: 'Non-selective NSAID',
    categoryId: 'msk',
    indications: ['Dysmenorrhea', 'Dental pain', 'Mild to moderate body ache'],
    dosing: { adult: 'PO: 500 mg initially, then 250 mg every 6 hours PRN. Post-meal.', pediatric: 'PO: >6 months: 25 mg/kg/day divided in 3-4 doses.' },
    safety: { adr: ['Diarrhea (can be severe)', 'GI upset', 'Renal impairment'], contraindications: ['Inflammatory bowel disease', 'Active PUD'], pregnancyLactation: 'Category C (Category D in 3rd trimester).' },
    pharmacy: { strengths: ['250mg cap', '500mg tab', '100mg/5ml susp'], dosageForms: ['Tablet', 'Capsule', 'Syrup'], priceNPR: '500mg tab: ~3-5', brandNames: ['Meftal', 'Ponstan'] },
    notes: ['**CRITICAL ALERT: Avoid "NSAID Stacking".** Take post-meal. Widely used for menstrual cramps.'],
    searchTags: ['Pain', 'Period pain', 'Muscle catch']
  },

  // SELECTIVE COX-2 INHIBITORS
  {
    id: 'msk_016',
    genericName: 'Etoricoxib',
    therapeuticClass: 'Selective COX-2 Inhibitor',
    categoryId: 'msk',
    indications: ['Acute gout', 'Osteoarthritis', 'Ankylosing spondylitis', 'Rheumatoid arthritis'],
    dosing: { adult: 'PO: OA: 60 mg OD. RA/AS: 90 mg OD. Acute Gout: 120 mg OD (max 8 days).', pediatric: 'Not recommended <16 years.' },
    safety: { adr: ['Hypertension', 'Cardiovascular thrombotic events', 'Fluid retention'], contraindications: ['Ischemic heart disease', 'History of stroke/TIA', 'Uncontrolled hypertension'], pregnancyLactation: 'Category X (per some guidelines, definitely avoid in 3rd trimester).' },
    pharmacy: { strengths: ['60mg, 90mg, 120mg tab'], dosageForms: ['Tablet'], priceNPR: '90mg tab: ~10-15', brandNames: ['Nucoxia', 'Ezact'] },
    notes: ['**CRITICAL ALERT: Avoid "NSAID Stacking".** Less GI toxicity but potentially higher CV risk. Do not use in patients with heart disease.'],
    searchTags: ['Joint pain', 'Gout', 'Back pain', 'Swelling']
  },
  {
    id: 'msk_017',
    genericName: 'Celecoxib',
    therapeuticClass: 'Selective COX-2 Inhibitor',
    categoryId: 'msk',
    indications: ['Osteoarthritis', 'Rheumatoid arthritis', 'Ankylosing spondylitis'],
    dosing: { adult: 'PO: 100-200 mg BID.', pediatric: 'PO: >2 yrs (JIA): 50-100 mg BID (weight based).' },
    safety: { adr: ['Cardiovascular events', 'GI upset', 'Sulfa allergy cross-reactivity'], contraindications: ['Sulfa allergy', 'Ischemic heart disease', 'CABG surgery (peri-operative)'], pregnancyLactation: 'Category C (Avoid in 3rd trimester).' },
    pharmacy: { strengths: ['100mg, 200mg cap'], dosageForms: ['Capsule'], priceNPR: '200mg cap: ~10-15', brandNames: ['Celact', 'Cobix'] },
    notes: ['**CRITICAL ALERT: Avoid "NSAID Stacking".** Better GI profile than non-selective NSAIDs.'],
    searchTags: ['Joint pain', 'Arthritis']
  }
];
