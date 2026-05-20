import { DrugEntry } from '../../types/formulary';

export const giDrugs: DrugEntry[] = [
  {
    id: 'gi_001',
    genericName: 'Omeprazole',
    therapeuticClass: 'Proton Pump Inhibitor (PPI)',
    categoryId: 'gi',
    indications: ['Peptic Ulcer Disease (PUD)', 'GERD', 'Zollinger-Ellison Syndrome', 'H. Pylori Eradication'],
    dosing: {
      adult: 'PO: 20-40 mg OD before meal. IV: 40 mg OD; Bleeding ulcer: 80 mg IV bolus then 8mg/hr for 72hr.',
      pediatric: 'PO (Children >10kg): 1-2 mg/kg/day (typically 10-20 mg).'
    },
    safety: {
      adr: ['Headache', 'Diarrhea', 'Increased risk of C. diff infection', 'Hypomagnesemia (long term)'],
      contraindications: ['Co-administration with clopidogrel (relative)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['20mg capsule', '40mg vial'],
      dosageForms: ['Capsule/Tablet', 'Injection'],
      priceNPR: 'Cap: 3-6, Vial: 40-70',
      brandNames: ['Omez', 'Ocid']
    },
    notes: ['Take 30 minutes before breakfast for maximum efficacy.']
  },
  {
    id: 'gi_002',
    genericName: 'Pantoprazole',
    therapeuticClass: 'Proton Pump Inhibitor (PPI)',
    categoryId: 'gi',
    indications: ['Peptic Ulcer Disease (PUD)', 'GERD', 'Stress ulcer prophylaxis'],
    dosing: {
      adult: 'PO: 40 mg OD before meal. IV: 40 mg OD.',
      pediatric: 'Depends on weight, typically avoided in very young children unless specialist directed.'
    },
    safety: {
      adr: ['Headache', 'GI disturbances', 'C. diff risk'],
      contraindications: ['Standard PPI hypersensitivity'],
      pregnancyLactation: 'Category B. Slightly safer profile than omeprazole during pregnancy but refer to local guidelines'
    },
    pharmacy: {
      strengths: ['40mg tablet', '40mg vial'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Tablet: 5-8, Vial: 50-80',
      brandNames: ['Pansec', 'Pantop']
    },
    notes: ['Does not interfere with clopidogrel metabolism as significantly as omeprazole.']
  },
  {
    id: 'gi_002_b',
    genericName: 'Vonoprazan',
    therapeuticClass: 'Potassium-Competitive Acid Blocker (P-CAB)',
    categoryId: 'gi',
    indications: ['Erosive esophagitis (healing and maintenance)', 'H. pylori eradication'],
    dosing: {
      adult: 'Healing of Erosive Esophagitis: 20 mg once daily for 8 weeks.\nMaintenance of Healed Erosive Esophagitis: 10 mg once daily for up to 6 months.\nH. pylori Infection: 20 mg twice daily (in triple or dual therapy regimens).',
      pediatric: 'Safety and effectiveness not established.'
    },
    safety: {
      adr: ['Gastritis', 'Diarrhea', 'Abdominal distension/pain', 'Nausea', 'Dyspepsia', 'Dysgeusia (in H.pylori tx)'],
      contraindications: ['Known hypersensitivity', 'Concomitant use with rilpivirine-containing products'],
      pregnancyLactation: 'No adequate data in pregnant women. Breastfeeding not recommended during treatment.'
    },
    pharmacy: {
      strengths: ['10 mg', '20 mg'],
      dosageForms: ['Tablet'],
      priceNPR: 'Varies',
      brandNames: ['Voquezna']
    },
    notes: ['Can be taken with or without food. May cause false positive in CgA levels.', 'Risk of C. diff diarrhea, bone fractures, hypomagnesemia, and fundic gland polyps with long-term use.']
  },
  {
    id: 'gi_003',
    genericName: 'Famotidine',
    therapeuticClass: 'H2 Receptor Antagonist',
    categoryId: 'gi',
    indications: ['Peptic Ulcer Disease (PUD)', 'GERD', 'Heartburn', 'Acidity'],
    dosing: {
      adult: 'PO: 20-40 mg OD at bedtime, or 20 mg BID. IV: 20 mg Q12H.',
      pediatric: 'PO/IV: 0.5 mg/kg/day divided Q12H (Max 40 mg/day).'
    },
    safety: {
      adr: ['Headache', 'Dizziness', 'Constipation / Diarrhea'],
      contraindications: ['Hypersensitivity to H2RAs'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['20mg tablet', '40mg tablet', '20mg/2ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Tablet: 2-4, Inject: 15-20',
      brandNames: ['Famocid', 'Famtac']
    },
    notes: ['Requires dose adjustment in renal impairment (CrCl < 50 mL/min).']
  },
  {
    id: 'gi_004',
    genericName: 'Aluminium Hydroxide + Magnesium Hydroxide',
    therapeuticClass: 'Antacid',
    categoryId: 'gi',
    indications: ['Dyspepsia', 'GERD', 'Heartburn', 'Acidity', 'Stomach Pain'],
    dosing: {
      adult: 'PO: 10-20 ml QID (after meals and at bedtime) or PRN.',
      pediatric: 'PO (>12 yrs): Same as adult; (6-12 yrs): 5-10 ml QID/PRN.'
    },
    safety: {
      adr: ['Constipation (from Aluminum)', 'Diarrhea (from Magnesium)'],
      contraindications: ['Severe renal impairment (risk of hypermagnesemia/aluminum toxicity)'],
      pregnancyLactation: 'Category B. Safe in moderate amounts.'
    },
    pharmacy: {
      strengths: ['Suspension (e.g., AlH 250mg + MgH 250mg per 5ml)'],
      dosageForms: ['Suspension / Syrup'],
      priceNPR: '170ml bottle: 70-100',
      brandNames: ['Digene', 'Gelusil']
    },
    notes: ['Can interfere with absorption of other drugs. Separate dosing by 2 hours.']
  },
  {
    id: 'gi_005',
    genericName: 'Ondansetron',
    therapeuticClass: '5-HT3 Receptor Antagonist (Antiemetic)',
    categoryId: 'gi',
    indications: ['Chemotherapy-induced nausea/vomiting (CINV)', 'Post-operative nausea/vomiting (PONV)', 'Severe gastroenteritis', 'Vomiting', 'Nausea'],
    dosing: {
      adult: 'PO/IV: 4-8 mg Q8H PRN.',
      pediatric: 'PO/IV: 0.15 mg/kg/dose (max 8mg) Q8H PRN.'
    },
    safety: {
      adr: ['Headache', 'Constipation', 'QT prolongation'],
      contraindications: ['Co-administration with apomorphine', 'Congenital long QT syndrome'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['4mg tablet', '2mg/ml (2ml) ampoule', '2mg/5ml syrup'],
      dosageForms: ['Tablet', 'Injection', 'Syrup'],
      priceNPR: 'Tablet: 4-6, Ampoule: 15-25',
      brandNames: ['Emeset', 'Zofran']
    },
    notes: ['Monitor ECG if giving in high doses or to patients with multiple QT-prolonging risks.']
  },
  {
    id: 'gi_006',
    genericName: 'Drotaverine',
    therapeuticClass: 'Antispasmodic',
    categoryId: 'gi',
    indications: ['Gastrointestinal spasm', 'Biliary spasm', 'Renal colic', 'Dysmenorrhea', 'Stomach Pain'],
    dosing: {
      adult: 'PO: 40-80 mg TID. IM/IV: 40-80 mg (slow IV) TID.',
      pediatric: 'PO (1-6 yrs): 20 mg TID. (6-12 yrs): 40 mg TID.'
    },
    safety: {
      adr: ['Nausea', 'Dizziness', 'Headache'],
      contraindications: ['Severe hepatic/renal impairment', 'Severe heart failure'],
      pregnancyLactation: 'Category B. Avoid during labor (risk of postpartum hemorrhage).'
    },
    pharmacy: {
      strengths: ['40mg tablet', '80mg tablet', '40mg/2ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Tablet: 5-8',
      brandNames: ['Drotin']
    },
    notes: ['No anticholinergic side effects compared to Hyoscine.']
  },
  {
    id: 'gi_007',
    genericName: 'Hyoscine Butylbromide',
    therapeuticClass: 'Antispasmodic (Anticholinergic)',
    categoryId: 'gi',
    indications: ['Gastrointestinal spasm', 'Biliary spasm', 'Renal colic'],
    dosing: {
      adult: 'PO: 10-20 mg TID or QID. IV/IM: 20 mg, may repeat after 30 mins.',
      pediatric: 'PO (6-12 yrs): 10 mg TID.'
    },
    safety: {
      adr: ['Dry mouth', 'Tachycardia', 'Urinary retention', 'Blurred vision'],
      contraindications: ['Glaucoma (narrow angle)', 'Myasthenia gravis', 'Megacolon'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg tablet', '20mg/ml ampoule'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Tablet: 4-6, Ampoule: 15-25',
      brandNames: ['Buscopan', 'Hyocimax']
    },
    notes: ['Fewer central side effects compared to atropine.']
  },
  {
    id: 'gi_008',
    genericName: 'Mebeverine hydrochloride',
    therapeuticClass: 'Antispasmodic',
    categoryId: 'gi',
    indications: ['Irritable Bowel Syndrome (IBS)', 'GI Spasm'],
    dosing: {
      adult: 'PO: 135 mg TID (20 mins before meals) or 200 mg SR BID.',
      pediatric: 'Not generally recommended for pediatric use.'
    },
    safety: {
      adr: ['Very few systemic side effects', 'Rarely rash'],
      contraindications: ['Paralytic ileus'],
      pregnancyLactation: 'Not recommended due to lack of data.'
    },
    pharmacy: {
      strengths: ['135mg tablet', '200mg SR capsule'],
      dosageForms: ['Tablet', 'Capsule'],
      priceNPR: 'Tablet: 8-15',
      brandNames: ['Colospa', 'Mebiz']
    },
    notes: ['Direct effect on GI smooth muscle.']
  },
  {
    id: 'gi_009',
    genericName: 'Atropine sulphate',
    therapeuticClass: 'Antimuscarinic / Antispasmodic',
    categoryId: 'gi',
    indications: ['Severe GI spasm (rarely used for this now)', 'Organophosphate poisoning (antidote)', 'Bradycardia'],
    dosing: {
      adult: 'PO: 0.4-0.6 mg every 4-6H (historical for GI). IV for bradycardia: 0.5-1 mg.',
      pediatric: 'IV (Bradycardia): 0.02 mg/kg.'
    },
    safety: {
      adr: ['Dry mouth', 'Tachycardia', 'Urinary retention', 'Confusion'],
      contraindications: ['Glaucoma', 'Pyloric stenosis', 'Prostatic hypertrophy'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['0.6mg/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 5-10',
      brandNames: ['Tropine']
    },
    notes: ['Largely superseded by other antispasmodics for GI conditions due to systemic side effects.']
  },
  {
    id: 'gi_010',
    genericName: 'Esomeprazole',
    therapeuticClass: 'Proton Pump Inhibitor (PPI)',
    categoryId: 'gi',
    indications: ['GERD', 'Peptic Ulcer Disease (PUD)', 'H. pylori eradication', 'Gastritis', 'Acidity'],
    dosing: {
      adult: 'PO/IV: 20-40 mg OD.',
      pediatric: 'PO (Children 1-11 yrs, >10 kg): 10-20 mg OD.'
    },
    safety: {
      adr: ['Headache', 'Diarrhea', 'Abdominal pain'],
      contraindications: ['Standard PPI hypersensitivity'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['20mg tablet/capsule', '40mg tablet/capsule', '40mg vial'],
      dosageForms: ['Tablet/Capsule', 'Injection'],
      priceNPR: 'Tablet: 8-12, Vial: 60-100',
      brandNames: ['Nexpro', 'Sompraz']
    },
    notes: ['S-enantiomer of omeprazole.']
  },
  {
    id: 'gi_011',
    genericName: 'Lansoprazole',
    therapeuticClass: 'Proton Pump Inhibitor (PPI)',
    categoryId: 'gi',
    indications: ['GERD', 'Gastric/Duodenal Ulcers', 'Acidity'],
    dosing: {
      adult: 'PO: 15-30 mg OD before meal.',
      pediatric: 'PO (Children >10kg): 15 mg OD. (>30kg): 30 mg OD.'
    },
    safety: {
      adr: ['Headache', 'Diarrhea'],
      contraindications: ['Standard PPI hypersensitivity'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['15mg', '30mg capsule'],
      dosageForms: ['Capsule'],
      priceNPR: 'Capsule: 5-10',
      brandNames: ['Lanzol', 'Lan']
    },
    notes: ['Often preferred in feeding tubes as rapid dissolution formulations or capsule contents can be mixed in acidic juice.']
  },
  {
    id: 'gi_012',
    genericName: 'Rabeprazole',
    therapeuticClass: 'Proton Pump Inhibitor (PPI)',
    categoryId: 'gi',
    indications: ['GERD', 'Peptic Ulcer Disease (PUD)', 'Acidity'],
    dosing: {
      adult: 'PO: 20 mg OD before meal.',
      pediatric: 'PO (Children >12 yrs): 20 mg OD.'
    },
    safety: {
      adr: ['Headache', 'Diarrhea'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['20mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: 'Tablet: 6-10',
      brandNames: ['Razo', 'Rabicip']
    },
    notes: []
  },
  {
    id: 'gi_013',
    genericName: 'Ranitidine',
    therapeuticClass: 'H2 Receptor Antagonist',
    categoryId: 'gi',
    indications: ['GERD', 'Peptic Ulcer Disease', 'Gastritis', 'Acidity'],
    dosing: {
      adult: 'PO: 150 mg BID or 300 mg at bedtime. IV: 50 mg Q8H.',
      pediatric: 'PO: 2-4 mg/kg BID. IV: 1-2 mg/kg Q6-8H.'
    },
    safety: {
      adr: ['Headache', 'Dizziness', 'GI disturbances'],
      contraindications: ['Hypersensitivity', 'Should be avoided when safer alternatives (famotidine) exist due to NDMA impurities in legacy stocks.'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['150mg tablet', '50mg/2ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Tablet: 2-4, Inject: 5-10',
      brandNames: ['Rantac', 'Aciloc']
    },
    notes: ['Widely recalled globally due to NDMA impurity. Check local regulations. Famotidine or PPIs are safer preferred alternatives.']
  },
  {
    id: 'gi_014',
    genericName: 'Sucralfate',
    therapeuticClass: 'Mucosal Protective Agent',
    categoryId: 'gi',
    indications: ['Duodenal ulcer', 'Stress ulcer prophylaxis', 'Gastritis'],
    dosing: {
      adult: 'PO: 1 g QID (1 hour before meals and at bedtime).',
      pediatric: 'Not well established. 40-80 mg/kg/day divided QID.'
    },
    safety: {
      adr: ['Constipation (most common)'],
      contraindications: ['Chronic renal failure (can accumulate aluminum)'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['1g/10ml suspension', '1g tablet'],
      dosageForms: ['Suspension', 'Tablet'],
      priceNPR: 'Suspension: 150-250',
      brandNames: ['Sucrafil', 'Sucral']
    },
    notes: ['Requires an acidic environment to work. Avoid taking with antacids, PPIs, or H2RAs (space out by at least 2 hours).']
  },
  {
    id: 'gi_015',
    genericName: 'Domperidone',
    therapeuticClass: 'Peripheral D2 Receptor Antagonist',
    categoryId: 'gi',
    indications: ['Nausea', 'Vomiting', 'Dyspepsia', 'Gastroparesis'],
    dosing: {
      adult: 'PO: 10 mg TID (15-30 min before meals). Max 30 mg/day.',
      pediatric: 'Avoid in children < 12 yrs or < 35 kg. If necessary: 0.25 mg/kg TID.'
    },
    safety: {
      adr: ['QT prolongation', 'Galactorrhea/Gynecomastia'],
      contraindications: ['Cardiac arrhythmias', 'Prolonged QT interval', 'GI hemorrhage'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg tablet', '1mg/ml suspension/drops'],
      dosageForms: ['Tablet', 'Suspension'],
      priceNPR: '10mg tab: 2-4',
      brandNames: ['Domstal', 'Motilium']
    },
    notes: ['Does not readily cross the blood-brain barrier; very rare EPS compared to metoclopramide.']
  },
  {
    id: 'gi_016',
    genericName: 'Metoclopramide',
    therapeuticClass: 'D2 Receptor Antagonist / Prokinetic',
    categoryId: 'gi',
    indications: ['Nausea', 'Vomiting', 'Gastroparesis'],
    dosing: {
      adult: 'PO/IV: 10 mg TID (usually max 5 days).',
      pediatric: 'PO/IV: 0.1 - 0.15 mg/kg up to TID. Use with extreme caution.'
    },
    safety: {
      adr: ['Extrapyramidal symptoms (EPS - acute dystonia)', 'Drowsiness'],
      contraindications: ['GI obstruction/perforation', 'Pheochromocytoma', 'Epilepsy'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['10mg tablet', '10mg/2ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Tablet: 2-4, Inject: 10-15',
      brandNames: ['Perinorm', 'Reglan']
    },
    notes: ['High risk of oculogyric crisis/dystonia in young adults and children.']
  },
  {
    id: 'gi_017',
    genericName: 'Prochlorperazine',
    therapeuticClass: 'Phenothiazine Antiemetic',
    categoryId: 'gi',
    indications: ['Severe Nausea/Vomiting', 'Vertigo', 'Migraine adjunct'],
    dosing: {
      adult: 'PO: 5-10 mg BID/TID. IM: 12.5 mg.',
      pediatric: 'PO/IM (> 10 kg): 0.4 mg/kg/day divided.'
    },
    safety: {
      adr: ['Sedation', 'Extrapyramidal symptoms (EPS)', 'Hypotension'],
      contraindications: ['Severe CNS depression', 'Coma', 'Children < 2 years or < 9kg'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['5mg', '25mg tablet', '12.5mg/ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Tablet: 2-5, Inject: 10-20',
      brandNames: ['Stemetil']
    },
    notes: ['Do not give IV (severe hypotension risk). Deep IM only.']
  },
  {
    id: 'gi_018',
    genericName: 'Promethazine',
    therapeuticClass: 'H1 Antagonist / Phenothiazine Antiemetic',
    categoryId: 'gi',
    indications: ['Nausea', 'Vomiting', 'Motion sickness', 'Allergic reactions'],
    dosing: {
      adult: 'PO/IM: 12.5-25 mg every 4-6H.',
      pediatric: 'PO/IM (> 2 yrs): 0.25-0.5 mg/kg every 4-6H (Max 25mg/dose).'
    },
    safety: {
      adr: ['Severe sedation', 'Respiratory depression in young children', 'Anticholinergic effects'],
      contraindications: ['Children < 2 years (Risk of fatal respiratory depression)', 'Coma'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg, 25mg tablet', '25mg/ml injection', '5mg/5ml syrup'],
      dosageForms: ['Tablet', 'Injection', 'Syrup'],
      priceNPR: 'Tablet: 2-4',
      brandNames: ['Phenergan']
    },
    notes: ['Black Box Warning: Contraindicated in children < 2 years.']
  },
  {
    id: 'gi_019',
    genericName: 'Oral Rehydration Salts (ORS)',
    therapeuticClass: 'Oral Electrolyte Replacement',
    categoryId: 'gi',
    indications: ['Dehydration', 'Acute Diarrhea'],
    dosing: {
      adult: 'PO: 200-400 ml after every loose motion.',
      pediatric: 'PO: 50-100 ml after each loose stool (< 2 yrs); 100-200 ml (2-10 yrs).'
    },
    safety: {
      adr: ['Vomiting if given too quickly'],
      contraindications: ['Severe dehydration requiring IV fluids', 'Intestinal obstruction'],
      pregnancyLactation: 'Safe.'
    },
    pharmacy: {
      strengths: ['Standard WHO reduced osmolarity sachet'],
      dosageForms: ['Powder'],
      priceNPR: 'Sachet: 10-15',
      brandNames: ['Jeevan Jal', 'Navajeevan']
    },
    notes: ['Must be mixed accurately with clean drinking water.']
  },
  {
    id: 'gi_020',
    genericName: 'Zinc Sulfate',
    therapeuticClass: 'Trace Element Supplement',
    categoryId: 'gi',
    indications: ['Acute Diarrhea', 'Zinc Deficiency'],
    dosing: {
      adult: 'PO: 20 mg elemental zinc OD for 10-14 days.',
      pediatric: 'PO: < 6 months: 10 mg/day for 14 days. > 6 months: 20 mg/day for 14 days.'
    },
    safety: {
      adr: ['Nausea', 'Vomiting'],
      contraindications: ['None significant'],
      pregnancyLactation: 'Category A/C.'
    },
    pharmacy: {
      strengths: ['20mg tablet', '20mg/5ml syrup'],
      dosageForms: ['Tablet', 'Syrup'],
      priceNPR: 'Tablet: 2-3',
      brandNames: ['Zincovit', 'Z&D']
    },
    notes: ['Reduces severity and duration of diarrhea episodes. MUST administer for the full 14 days.']
  },
  {
    id: 'gi_021',
    genericName: 'Loperamide',
    therapeuticClass: 'Antimotility Agent',
    categoryId: 'gi',
    indications: ['Acute Uncomplicated Diarrhea', 'Chronic Diarrhea'],
    dosing: {
      adult: 'PO: 4 mg initially, then 2 mg after each unformed stool. Max 16 mg/day.',
      pediatric: 'Contraindicated in young children < 2 years. Rarely used in older children (0.1mg/kg/dose).'
    },
    safety: {
      adr: ['Constipation', 'Abdominal cramps', 'Toxic megacolon'],
      contraindications: ['< 2 Years Old', 'Dysentery (bloody diarrhea with fever)', 'C. diff colitis'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['2mg capsule'],
      dosageForms: ['Capsule/Tablet'],
      priceNPR: 'Capsule: 2-5',
      brandNames: ['Imodium', 'Lomotil (Brand overlap warning)']
    },
    notes: ['Strictly avoid in acute infectious dysentery.']
  },
  {
    id: 'gi_022',
    genericName: 'Rifaximin',
    therapeuticClass: 'GI-Selective Antibiotic',
    categoryId: 'gi',
    indications: ['Traveler\'s Diarrhea (Non-invasive)', 'Hepatic Encephalopathy (HE)', 'Diarrhea-predominant IBS'],
    dosing: {
      adult: 'Traveler\'s Diarrhea: 200 mg TID for 3 days. HE: 400-550 mg BID.',
      pediatric: 'PO (Children > 12 yrs): Same as adult for traveler\'s diarrhea.'
    },
    safety: {
      adr: ['Nausea', 'Flatulence', 'Edema'],
      contraindications: ['Fever', 'Blood in stool (invasive pathogens like Salmonella/Campylobacter/Shigella)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['200mg', '400mg', '550mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '200mg tab: 15-25, 400mg tab: 25-40',
      brandNames: ['Rcifax', 'Sibofix']
    },
    notes: ['Not absorbed systemically. Useless for systemic infections.']
  },
  {
    id: 'gi_023',
    genericName: 'Ispaghula husk (Psyllium)',
    therapeuticClass: 'Bulk Forming Laxative',
    categoryId: 'gi',
    indications: ['Constipation', 'IBS', 'Hemorrhoids'],
    dosing: {
      adult: 'PO: 1-2 teaspoonfuls (approx. 3-6g) mixed in fluid, 1-3 times daily.',
      pediatric: 'PO (Children 6-12 yrs): Half the adult dose.'
    },
    safety: {
      adr: ['Flatulence', 'Abdominal bloating', 'Intestinal obstruction (if swallowed dry)'],
      contraindications: ['Intestinal obstruction', 'Fecal impaction'],
      pregnancyLactation: 'Safe in pregnancy (often preferred laxative).'
    },
    pharmacy: {
      strengths: ['Granules/Powder pack'],
      dosageForms: ['Powder'],
      priceNPR: '100g pack: 100-150',
      brandNames: ['Isabgol', 'Fybogel']
    },
    notes: ['Must be taken with adequate water to prevent esophageal or intestinal obstruction.']
  },
  {
    id: 'gi_024',
    genericName: 'Bisacodyl',
    therapeuticClass: 'Stimulant Laxative',
    categoryId: 'gi',
    indications: ['Constipation', 'Bowel Preparation'],
    dosing: {
      adult: 'PO: 5-10 mg at bedtime. Suppository: 10 mg PR.',
      pediatric: 'PO (4-10 yrs): 5 mg at bedtime. Suppository (< 10 yrs): 5 mg PR.'
    },
    safety: {
      adr: ['Abdominal cramps', 'Diarrhea', 'Hypokalemia (chronic abuse)'],
      contraindications: ['Intestinal obstruction', 'Appendicitis'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['5mg tablet (enteric coated)', '5mg', '10mg suppository'],
      dosageForms: ['Tablet', 'Suppository'],
      priceNPR: 'Tablet: 1-3',
      brandNames: ['Dulcolax']
    },
    notes: ['Do not take with milk or antacids (destroys enteric coating leading to gastric irritation).']
  },
  {
    id: 'gi_025',
    genericName: 'Senna',
    therapeuticClass: 'Stimulant Laxative',
    categoryId: 'gi',
    indications: ['Constipation'],
    dosing: {
      adult: 'PO: 1-2 tablets (approx. 15-30mg sennosides) at bedtime.',
      pediatric: 'PO (Children 6-12 yrs): Half adult dose.'
    },
    safety: {
      adr: ['Abdominal cramps', 'Electrolyte imbalance', 'Melanosis coli (chronic use)'],
      contraindications: ['Intestinal obstruction', 'Appendicitis'],
      pregnancyLactation: 'Category C. Usually safe but use cautiously.'
    },
    pharmacy: {
      strengths: ['Tablet (7.5mg/15mg sennosides)'],
      dosageForms: ['Tablet'],
      priceNPR: 'Tablet: Variable',
      brandNames: ['Pursennid', 'Senokot']
    },
    notes: ['Can cause yellow-brown or reddish discoloration of urine.']
  },
  {
    id: 'gi_026',
    genericName: 'Lactulose',
    therapeuticClass: 'Osmotic Laxative',
    categoryId: 'gi',
    indications: ['Constipation', 'Hepatic Encephalopathy'],
    dosing: {
      adult: 'Constipation: 15-30 ml PO daily. Hepatic Encephalopathy: 30-50 ml TID.',
      pediatric: 'Constipation: 1-3 ml/kg/day in divided doses.'
    },
    safety: {
      adr: ['Flatulence', 'Cramps', 'Diarrhea (if overdosed)'],
      contraindications: ['Galactosemia', 'Intestinal obstruction'],
      pregnancyLactation: 'Category B. Safe to use.'
    },
    pharmacy: {
      strengths: ['10g/15ml solution (3.33g/5ml)'],
      dosageForms: ['Oral Solution'],
      priceNPR: '100ml bottle: 120-180',
      brandNames: ['Duphalac', 'Looz']
    },
    notes: ['For Hepatic Encephalopathy, titrate dose to produce 2-3 soft stools per day.']
  },
  {
    id: 'gi_027',
    genericName: 'Macrogol 3350 (Polyethylene Glycol 3350)',
    therapeuticClass: 'Osmotic Laxative',
    categoryId: 'gi',
    indications: ['Constipation', 'Bowel Cleansing/Prep'],
    dosing: {
      adult: 'PO: 17 g (one sachet/capful) dissolved in 240 ml of fluid daily.',
      pediatric: 'PO (> 6 months): 0.5-1 g/kg/day.'
    },
    safety: {
      adr: ['Nausea', 'Bloating', 'Flatulence', 'Diarrhea'],
      contraindications: ['Intestinal obstruction', 'Bowel perforation'],
      pregnancyLactation: 'Category C. Very low systemic absorption, generally considered safe.'
    },
    pharmacy: {
      strengths: ['17g sachet/powder'],
      dosageForms: ['Powder for oral solution'],
      priceNPR: 'Sachet: 20-40',
      brandNames: ['Pegclear', 'Laxopeg']
    },
    notes: ['Takes 1 to 3 days to produce a bowel movement for routine constipation.']
  },
  {
    id: 'gi_028',
    genericName: 'Magnesium sulphate / Magnesium hydroxide',
    therapeuticClass: 'Osmotic Laxative / Antacid',
    categoryId: 'gi',
    indications: ['Constipation', 'Heartburn (Mg hydroxide)'],
    dosing: {
      adult: 'PO (Milk of Magnesia): 15-30 ml daily for constipation.',
      pediatric: 'PO (Children 6-12 yrs): 5-15 ml daily.'
    },
    safety: {
      adr: ['Diarrhea', 'Hypermagnesemia (rare, mainly in renal failure)'],
      contraindications: ['Severe renal impairment', 'Intestinal obstruction'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['Suspension (e.g., 400mg/5ml)'],
      dosageForms: ['Suspension'],
      priceNPR: 'Suspension: 50-80',
      brandNames: ['Milk of Magnesia', 'Cremaffin Plus']
    },
    notes: ['Used with caution in renal failure due to risk of magnesium accumulation.']
  },
  {
    id: 'gi_029',
    genericName: 'Mesalazine (Mesalamine / 5-ASA)',
    therapeuticClass: 'Aminosalicylate',
    categoryId: 'gi',
    indications: ['Ulcerative Colitis', 'Crohn\'s Disease'],
    dosing: {
      adult: 'PO (Acute): 2.4 - 4.8 g/day divided. Maintenance: 1.2 - 2.4 g/day. Suppository/Enema for distal colitis.',
      pediatric: 'PO: 30-50 mg/kg/day divided.'
    },
    safety: {
      adr: ['Headache', 'Nausea', 'Rash', 'Interstitial nephritis (rare)'],
      contraindications: ['Hypersensitivity to salicylates', 'Severe renal impairment'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['400mg', '800mg', '1200mg tablet/granules', 'Suppositories'],
      dosageForms: ['Tablet/Granules/Suppository/Enema'],
      priceNPR: '800mg tab: 20-30',
      brandNames: ['Mesacol', 'Pentasa']
    },
    notes: ['Monitor renal function prior to starting and periodically.']
  },
  {
    id: 'gi_030',
    genericName: 'Sulfasalazine',
    therapeuticClass: 'Aminosalicylate (5-ASA prodrug)',
    categoryId: 'gi',
    indications: ['Ulcerative Colitis', 'Crohn\'s Disease', 'Rheumatoid Arthritis'],
    dosing: {
      adult: 'PO (IBD Acute): 1-2 g QID. Maintenance: 500 mg QID.',
      pediatric: 'PO (IBD): 40-60 mg/kg/day in 3-6 divided doses.'
    },
    safety: {
      adr: ['Nausea', 'Headache', 'Rash', 'Oligospermia (reversible)'],
      contraindications: ['Hypersensitivity to sulfonamides/salicylates', 'Porphyria'],
      pregnancyLactation: 'Category B. Safe but needs Folic acid supplementation.'
    },
    pharmacy: {
      strengths: ['500mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: 'Tablet: 8-15',
      brandNames: ['Saaz', 'Salazopyrin']
    },
    notes: ['Urine and skin may discolour (orange-yellow). Co-administer folate.']
  },
  {
    id: 'gi_031',
    genericName: 'Octreotide',
    therapeuticClass: 'Somatostatin Analogue',
    categoryId: 'gi',
    indications: ['Acute variceal hemorrhage', 'Acromegaly', 'Carcinoid tumors'],
    dosing: {
      adult: 'Variceal Bleeding IV: 50 mcg bolus, then 50 mcg/hr infusion for 2-5 days.',
      pediatric: 'Variceal Bleeding IV: 1-2 mcg/kg bolus, then 1-2 mcg/kg/hr.'
    },
    safety: {
      adr: ['Hyperglycemia / Hypoglycemia', 'Biliary sludge/gallstones (long-term)', 'Bradycardia'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['50mcg/ml', '100mcg/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: '100mcg Amp: 300-500',
      brandNames: ['Octride', 'Sandostatin']
    },
    notes: ['Preferred over vasopressin/terlipressin for variceal bleeds in many settings due to fewer cardiovascular side effects.']
  },
  {
    id: 'gi_032',
    genericName: 'Probiotics',
    therapeuticClass: 'Intestinal flora restoring agent',
    categoryId: 'gi',
    indications: ['Antibiotic-associated diarrhea', 'Infectious Diarrhea', 'IBS'],
    dosing: {
      adult: 'PO: 1-2 capsules or sachets OD to BID.',
      pediatric: 'PO: 1 sachet/capsule OD/BID.'
    },
    safety: {
      adr: ['Mild bloating', 'Rare bacteremia/fungemia in severely immunocompromised'],
      contraindications: ['Severely immunocompromised patients (e.g., pancreatitis, severe neutropenia)'],
      pregnancyLactation: 'Safe.'
    },
    pharmacy: {
      strengths: ['Various multi-strain formulations'],
      dosageForms: ['Capsule/Sachet'],
      priceNPR: 'Variable (10-30/Cap)',
      brandNames: ['Darolac', 'Econorm', 'Vizyl']
    },
    notes: ['If taking antibiotics, advise patient to gap the probiotic by at least 2 hours.']
  },
  {
    id: 'gi_033',
    genericName: 'Ursodeoxycholic Acid (UDCA)',
    therapeuticClass: 'Bile Acid',
    categoryId: 'gi',
    indications: ['Primary Biliary Cholangitis (PBC)', 'Gallstone dissolution', 'Cholestasis of Pregnancy'],
    dosing: {
      adult: 'PO: 10-15 mg/kg/day in 2-4 divided doses.',
      pediatric: 'PO: 10-15 mg/kg/day.'
    },
    safety: {
      adr: ['Diarrhea', 'Pruritus'],
      contraindications: ['Calcified/Radio-opaque gallstones', 'Non-functioning gallbladder'],
      pregnancyLactation: 'Category B. Used for intrahepatic cholestasis of pregnancy.'
    },
    pharmacy: {
      strengths: ['150mg', '300mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '300mg tab: 20-30',
      brandNames: ['Udiliv', 'Ursocol']
    },
    notes: ['Long-term therapy required for gallstones.']
  },
  {
    id: 'gi_034',
    genericName: 'Cimetidine',
    therapeuticClass: 'H2 Receptor Antagonist',
    categoryId: 'gi',
    indications: ['GERD', 'Peptic Ulcer Disease'],
    dosing: {
      adult: 'PO: 400 mg BID or 800 mg at bedtime.',
      pediatric: 'PO: 20-40 mg/kg/day divided QID.'
    },
    safety: {
      adr: ['Gynecomastia', 'Impotence', 'Confusion (elderly)'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['200mg', '400mg tablet'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Variable',
      brandNames: ['Cimet']
    },
    notes: ['Potent CYP450 inhibitor. Multiple drug interactions (warfarin, theophylline, phenytoin).']
  },
  {
    id: 'gi_035',
    genericName: 'Flavoxate',
    therapeuticClass: 'Antispasmodic',
    categoryId: 'gi',
    indications: ['Urinary tract spasm', 'Dysuria', 'Pelvic pain'],
    dosing: {
      adult: 'PO: 100-200 mg TID or QID.',
      pediatric: 'Not recommended < 12 years.'
    },
    safety: {
      adr: ['Nausea', 'Dry mouth', 'Blurred vision'],
      contraindications: ['GI obstruction', 'Achalasia', 'Glaucoma'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['200mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: 'Tablet: 10-20',
      brandNames: ['Urispas', 'Flavospas']
    },
    notes: ['Mainly used for lower urinary tract spasms rather than general GI cramps.']
  },
  {
    id: 'gi_036',
    genericName: 'Cyclizine',
    therapeuticClass: 'Antihistamine / Antiemetic',
    categoryId: 'gi',
    indications: ['Nausea', 'Vomiting', 'Motion Sickness', 'Vertigo'],
    dosing: {
      adult: 'PO/IM/IV: 50 mg up to TID.',
      pediatric: 'PO (Children 6-12 yrs): 25 mg up to TID.'
    },
    safety: {
      adr: ['Drowsiness', 'Dry mouth', 'Tachycardia'],
      contraindications: ['Severe heart failure (IV use)'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['50mg tablet', '50mg/ml ampoule'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Tablet: 2-5',
      brandNames: ['Valoid', 'Cyclizine']
    },
    notes: ['May be mixed with morphine off-label to prevent opioid-induced nausea.']
  },
  {
    id: 'gi_037',
    genericName: 'Dimenhydrinate',
    therapeuticClass: 'Antihistamine / Antiemetic',
    categoryId: 'gi',
    indications: ['Motion sickness', 'Nausea', 'Vomiting'],
    dosing: {
      adult: 'PO: 50-100 mg every 4-6H (Max 400 mg/day).',
      pediatric: 'PO (Children 2-6 yrs): 12.5-25 mg Q6-8H (Max 75 mg/day).'
    },
    safety: {
      adr: ['Sedation', 'Dry mouth', 'Blurred vision'],
      contraindications: ['Neonates', 'Angle-closure glaucoma'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['50mg tablet', '50mg/ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Tablet: 1-3',
      brandNames: ['Dramamine', 'Gravol']
    },
    notes: ['Take 30-60 minutes before travel for motion sickness.']
  },
  {
    id: 'gi_038',
    genericName: 'Diphenoxylate',
    therapeuticClass: 'Opioid Antidiarrheal',
    categoryId: 'gi',
    indications: ['Diarrhea (severe/chronic)'],
    dosing: {
      adult: 'PO: 5 mg QID until controlled, then reduce.',
      pediatric: 'Not recommended < 2 yrs.'
    },
    safety: {
      adr: ['Drowsiness', 'Euphoria/Abuse potential', 'Constipation'],
      contraindications: ['Children < 2 yrs', 'Obstructive jaundice', 'Diarrhea from enterotoxin-producing bacteria'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['Tablets usually containing Diphenoxylate 2.5mg + Atropine 0.025mg'],
      dosageForms: ['Tablet'],
      priceNPR: 'Tablet: Variable',
      brandNames: ['Lomotil']
    },
    notes: ['Combined with a subtherapeutic dose of atropine to discourage abuse.']
  },
  {
    id: 'gi_039',
    genericName: 'Docusate Sodium',
    therapeuticClass: 'Stool Softener',
    categoryId: 'gi',
    indications: ['Constipation (to avoid straining)'],
    dosing: {
      adult: 'PO: 50-300 mg daily in divided doses.',
      pediatric: 'PO (Children >3 yrs): 20-60 mg daily.'
    },
    safety: {
      adr: ['Mild cramping', 'Diarrhea'],
      contraindications: ['Intestinal obstruction', 'Concomitant use of mineral oil'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['100mg capsule', '50mg/5ml syrup'],
      dosageForms: ['Capsule', 'Syrup'],
      priceNPR: 'Capsule: 5-10',
      brandNames: ['Colace', 'Cellubril']
    },
    notes: ['Does not stimulate peristalsis; only softens stool by drawing in water/fats.']
  },
  {
    id: 'gi_040',
    genericName: 'Liquid Paraffin',
    therapeuticClass: 'Lubricant Laxative',
    categoryId: 'gi',
    indications: ['Constipation'],
    dosing: {
      adult: 'PO: 15-45 ml daily.',
      pediatric: 'PO (Not recommended < 3 yrs). Children > 3 yrs: 5-15 ml.'
    },
    safety: {
      adr: ['Lipid pneumonia (if aspirated)', 'Anal seepage', 'Decreased absorption of fat-soluble vitamins (A, D, E, K)'],
      contraindications: ['Difficulty swallowing (high aspiration risk)'],
      pregnancyLactation: 'Generally avoided (can decrease vitamin absorption).'
    },
    pharmacy: {
      strengths: ['Usually formulated as emulsion'],
      dosageForms: ['Emulsion/Liquid'],
      priceNPR: 'Bottle: 100-150',
      brandNames: ['Cremaffin (Combo)']
    },
    notes: ['Take on an empty stomach and do not lie down immediately after taking to prevent aspiration.']
  },
  {
    id: 'gi_041',
    genericName: 'Adalimumab',
    therapeuticClass: 'TNF-alpha Inhibitor',
    categoryId: 'gi',
    indications: ['Crohn\'s Disease', 'Ulcerative Colitis', 'Rheumatoid Arthritis'],
    dosing: {
      adult: 'SC: 160 mg initially, then 80 mg at week 2, then 40 mg every other week.',
      pediatric: 'SC (Weight based): Usually specialist initiation only.'
    },
    safety: {
      adr: ['Injection site reactions', 'Increased risk of serious infections (TB, sepsis)', 'Malignancy risk'],
      contraindications: ['Active infections (e.g., active TB)', 'Severe heart failure'],
      pregnancyLactation: 'Category B. Crosses placenta, especially in 3rd trimester.'
    },
    pharmacy: {
      strengths: ['40mg/0.4ml or 40mg/0.8ml prefilled syringe/pen'],
      dosageForms: ['Injection (SC)'],
      priceNPR: 'Variable (Very High, 10k-20k+)',
      brandNames: ['Humira', 'Exemptia']
    },
    notes: ['Must screen for latent TB and Hepatitis B before initiation.']
  },
  {
    id: 'gi_042',
    genericName: 'Infliximab',
    therapeuticClass: 'TNF-alpha Inhibitor',
    categoryId: 'gi',
    indications: ['Crohn\'s Disease', 'Ulcerative Colitis', 'Rheumatoid Arthritis'],
    dosing: {
      adult: 'IV: 5 mg/kg at 0, 2, and 6 weeks, then every 8 weeks.',
      pediatric: 'IV (Children > 6 yrs): 5 mg/kg.'
    },
    safety: {
      adr: ['Infusion reactions', 'Infections', 'Heart failure exacerbation'],
      contraindications: ['Active infections', 'Moderate to severe heart failure'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['100mg vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Variable (Very High)',
      brandNames: ['Remicade', 'Infimab']
    },
    notes: ['Administered under specialist supervision with resuscitation equipment readily available.']
  },
  {
    id: 'gi_043',
    genericName: 'Budesonide',
    therapeuticClass: 'Corticosteroid (Locally acting)',
    categoryId: 'gi',
    indications: ['Crohn\'s Disease (mild-moderate active)', 'Ulcerative colitis (rectal foam)'],
    dosing: {
      adult: 'PO: 9 mg OD in the morning for up to 8 weeks.',
      pediatric: 'PO (Children 8-10 yrs): Specialist adjusted.'
    },
    safety: {
      adr: ['Headache', 'Nausea', 'Respiratory infections'],
      contraindications: ['Systemic fungal infections'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['3mg enteric-coated capsule'],
      dosageForms: ['Capsule/Tablet', 'Rectal Foam'],
      priceNPR: 'Capsule: 30-50',
      brandNames: ['Budez', 'Budenofalk']
    },
    notes: ['High first-pass metabolism means fewer systemic side effects compared to oral prednisolone.']
  },
  {
    id: 'gi_044',
    genericName: 'Hydrocortisone acetate',
    therapeuticClass: 'Corticosteroid (Topical/Rectal)',
    categoryId: 'gi',
    indications: ['Ulcerative proctitis', 'Hemorrhoids (with inflammation)'],
    dosing: {
      adult: 'Rectal: 1 suppository/enema BID or applied topically to peri-anal area.',
      pediatric: 'Avoid if possible.'
    },
    safety: {
      adr: ['Local irritation', 'Thinning of skin/mucosa (prolonged use)'],
      contraindications: ['Untreated local infections (viral, bacterial, fungal)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['Often combined as 0.5%-1% cream/ointment or suppository'],
      dosageForms: ['Cream', 'Ointment', 'Suppository'],
      priceNPR: 'Tube: 80-150',
      brandNames: ['Anovate (combo)', 'Proctosedyl (combo)']
    },
    notes: ['Avoid usage beyond 7-14 days to prevent mucosal atrophy.']
  },
  {
    id: 'gi_045',
    genericName: 'Terlipressin',
    therapeuticClass: 'Vasopressin Analogue',
    categoryId: 'gi',
    indications: ['Bleeding Oesophageal Varices', 'Hepatorenal Syndrome'],
    dosing: {
      adult: 'IV Variceal bleed: 2 mg initially, then 1-2 mg every 4-6 hours until bleeding is controlled (max 24-48 hrs).',
      pediatric: 'Rarely used.'
    },
    safety: {
      adr: ['Abdominal cramps', 'Hypertension', 'Myocardial/Peripheral ischemia', 'Headache'],
      contraindications: ['Pregnancy', 'Ischemic heart disease (relative)'],
      pregnancyLactation: 'Contraindicated.'
    },
    pharmacy: {
      strengths: ['1mg ampoule'],
      dosageForms: ['Injection'],
      priceNPR: '1mg Amp: 1000-2500',
      brandNames: ['Terlibite', 'Remestyp']
    },
    notes: ['Monitor strictly for ischemic complications (e.g. angina, peripheral cyanosis).']
  }
];
