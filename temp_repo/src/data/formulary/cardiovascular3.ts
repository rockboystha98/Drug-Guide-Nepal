import { DrugEntry } from '../../types/formulary';

export const cardioExtendedDrugs2: DrugEntry[] = [
  {
    id: 'cardio_038',
    genericName: 'Captopril',
    therapeuticClass: 'ACE Inhibitor',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Heart Failure', 'Post-MI', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 12.5-50 mg BID or TID.',
      pediatric: 'PO (Neonates): 0.1-0.5 mg/kg/dose Q8-24H. (Infants/Children): 0.15-0.3 mg/kg/dose Q8H (titrate to max 6 mg/kg/day).'
    },
    safety: {
      adr: ['Dry cough', 'Hyperkalemia', 'Hypotension', 'Angioedema'],
      contraindications: ['History of angioedema', 'Bilateral renal artery stenosis', 'PREGNANCY'],
      pregnancyLactation: 'Category D. CONTRAINDICATED in pregnancy.'
    },
    pharmacy: {
      strengths: ['12.5mg', '25mg'],
      dosageForms: ['Tablet'],
      priceNPR: '25mg tab: 2-4',
      brandNames: ['Capotril', 'Aceten']
    },
    notes: ['Short-acting ACEI. Used when tight titration is needed (e.g., test dose in heart failure/pulmonary HTN). Must be taken on an empty stomach.']
  },
  {
    id: 'cardio_039',
    genericName: 'Irbesartan',
    therapeuticClass: 'Angiotensin II Receptor Blocker (ARB)',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Diabetic Nephropathy', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 150-300 mg OD.',
      pediatric: 'PO (6-12 yrs): 75-150 mg OD.'
    },
    safety: {
      adr: ['Hyperkalemia', 'Hypotension', 'Renal impairment'],
      contraindications: ['Bilateral renal artery stenosis', 'PREGNANCY'],
      pregnancyLactation: 'Category D. CONTRAINDICATED in pregnancy.'
    },
    pharmacy: {
      strengths: ['150mg', '300mg'],
      dosageForms: ['Tablet'],
      priceNPR: '150mg tab: 4-8',
      brandNames: ['Irovel', 'Aprovel']
    },
    notes: []
  },
  {
    id: 'cardio_040',
    genericName: 'Valsartan',
    therapeuticClass: 'Angiotensin II Receptor Blocker (ARB)',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Heart Failure', 'Post-MI', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 40-160 mg BID or 80-320 mg OD depending on indication.',
      pediatric: 'PO (6-16 yrs): 1-1.3 mg/kg/day OD.'
    },
    safety: {
      adr: ['Hyperkalemia', 'Hypotension', 'Renal impairment'],
      contraindications: ['Bilateral renal artery stenosis', 'PREGNANCY'],
      pregnancyLactation: 'Category D. CONTRAINDICATED in pregnancy.'
    },
    pharmacy: {
      strengths: ['40mg', '80mg', '160mg'],
      dosageForms: ['Tablet', 'Capsule'],
      priceNPR: '80mg tab: 5-10',
      brandNames: ['Valza', 'Diovan']
    },
    notes: []
  },
  {
    id: 'cardio_041',
    genericName: 'Nebivolol',
    therapeuticClass: 'Beta-1 Selective Blocker with Nitric Oxide potentiation',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Heart Failure', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 5-10 mg OD.',
      pediatric: 'Not established.'
    },
    safety: {
      adr: ['Fatigue', 'Headache', 'Dizziness', 'Bradycardia'],
      contraindications: ['Severe liver impairment', 'Heart block greater than first degree', 'Cardiogenic shock', 'Severe bradycardia'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['2.5mg', '5mg'],
      dosageForms: ['Tablet'],
      priceNPR: '5mg tab: 4-8',
      brandNames: ['Nebicard', 'Nebilet']
    },
    notes: ['Causes vasodilation mediated via the L-arginine/nitric oxide pathway, resulting in a more favorable hemodynamic profile.']
  },
  {
    id: 'cardio_042',
    genericName: 'Felodipine',
    therapeuticClass: 'Calcium Channel Blocker (DHP)',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Angina Pectoris', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 5-10 mg OD.',
      pediatric: 'Not commonly used.'
    },
    safety: {
      adr: ['Peripheral edema', 'Flushing', 'Headache', 'Palpitations'],
      contraindications: ['Uncompensated heart failure', 'Acute MI'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['2.5mg', '5mg', '10mg ER'],
      dosageForms: ['Tablet (Extended Release)'],
      priceNPR: '5mg ER tab: 4-8',
      brandNames: ['Felogard', 'Plendil']
    },
    notes: ['Highly vascular selective, with very little negative inotropic effect. Take without food or with a light meal. Avoid grapefruit juice.']
  },
  {
    id: 'cardio_043',
    genericName: 'Clonidine',
    therapeuticClass: 'Centrally Acting Alpha-2 Agonist',
    categoryId: 'cardio',
    indications: ['Hypertension', 'ADHD', 'Opioid withdrawal', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 0.1-0.2 mg BID. Maintenance up to 0.6 mg/day.',
      pediatric: 'PO: 5-10 mcg/kg/day in divided doses.'
    },
    safety: {
      adr: ['Dry mouth', 'Sedation/Drowsiness', 'Rebound hypertension (if stopped abruptly)', 'Bradycardia'],
      contraindications: ['Severe bradycardia', 'Sick sinus syndrome'],
      pregnancyLactation: 'Category C. Methyldopa is preferred for pregnancy hypertension.'
    },
    pharmacy: {
      strengths: ['100mcg (0.1mg)', '150mcg'],
      dosageForms: ['Tablet'],
      priceNPR: '0.1mg tab: 2-3',
      brandNames: ['Arkamin', 'Catapres']
    },
    notes: ['Crucial: Do not abruptly discontinue or sever rebound hypertension may occur.']
  },
  {
    id: 'cardio_044',
    genericName: 'Chlorthalidone',
    therapeuticClass: 'Thiazide-like Diuretic',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Edema', 'Heart Failure', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 12.5-25 mg OD.',
      pediatric: 'PO: 2 mg/kg/day in divided doses.'
    },
    safety: {
      adr: ['Hypokalemia', 'Hyponatremia', 'Hyperuricemia', 'Hyperglycemia'],
      contraindications: ['Anuria', 'Severe sulfonamide hypersensitivity'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['6.25mg', '12.5mg'],
      dosageForms: ['Tablet'],
      priceNPR: '12.5mg tab: 2-4',
      brandNames: ['Thalix', 'Chlorthal']
    },
    notes: ['Longer half-life and twice as potent as hydrochlorothiazide (HCTZ). Better for 24-hr BP control.']
  },
  {
    id: 'cardio_045',
    genericName: 'Indapamide',
    therapeuticClass: 'Thiazide-like Diuretic',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Edema', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 1.25-2.5 mg OD.',
      pediatric: 'Not established.'
    },
    safety: {
      adr: ['Hypokalemia', 'Hyponatremia', 'Hyperuricemia', 'Tiredness'],
      contraindications: ['Anuria', 'Severe hepatic impairment'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['1.5mg SR', '2.5mg'],
      dosageForms: ['Tablet'],
      priceNPR: '1.5mg SR tab: 3-5',
      brandNames: ['Natrilix SR', 'Lorvas SR']
    },
    notes: ['Considered metabolically neutral (less effect on glucose/lipids compared to other thiazides).']
  },
  {
    id: 'cardio_046',
    genericName: 'Metolazone',
    therapeuticClass: 'Thiazide-like Diuretic',
    categoryId: 'cardio',
    indications: ['Heart Failure (Edema formulation)', 'Resistant Edema', 'Refractory Edema', 'Swelling'],
    dosing: {
      adult: 'PO: 2.5-5 mg OD (used often 30 mins before loop diuretic).',
      pediatric: 'PO: 0.2-0.4 mg/kg/day.'
    },
    safety: {
      adr: ['Profound diuresis', 'Severe hypokalemia', 'Dehydration', 'Hyponatremia'],
      contraindications: ['Anuria', 'Hepatic coma'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['2.5mg', '5mg'],
      dosageForms: ['Tablet'],
      priceNPR: '2.5mg tab: 5-8',
      brandNames: ['Zytanix', 'Metoz']
    },
    notes: ['Remains effective even when GFR < 30 mL/min. Used to break loop diuretic resistance (given 30 mins before furosemide).']
  },
  {
    id: 'cardio_047',
    genericName: 'Torsemide (Torasemide)',
    therapeuticClass: 'Loop Diuretic',
    categoryId: 'cardio',
    indications: ['Heart Failure', 'Edema', 'Hypertension', 'Swelling'],
    dosing: {
      adult: 'PO: 5-20 mg OD.',
      pediatric: 'Not established.'
    },
    safety: {
      adr: ['Hypokalemia', 'Hyponatremia', 'Dehydration', 'Ototoxicity (rapid IV)'],
      contraindications: ['Anuria', 'Hepatic coma'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['5mg', '10mg', '20mg'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '10mg tab: 3-6',
      brandNames: ['Dytor', 'Tide']
    },
    notes: ['Longer half-life than furosemide and more consistent oral bioavailability.']
  },
  {
    id: 'cardio_048',
    genericName: 'Prazosin',
    therapeuticClass: 'Alpha-1 Adrenergic Blocker',
    categoryId: 'cardio',
    indications: ['Hypertension', 'BPH (Off-label)', 'PTSD Nightmares (Off-label)', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: Start 0.5-1 mg at bedtime. Maintenance: 1-5 mg BID/TID. Maximum 20mg/day.',
      pediatric: 'PO: 0.05-0.1 mg/kg/day in divided doses.'
    },
    safety: {
      adr: ['First-dose syncope', 'Orthostatic hypotension', 'Dizziness', 'Tachycardia'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1mg', '2mg', '5mg'],
      dosageForms: ['Tablet'],
      priceNPR: '1mg tab: 3-5',
      brandNames: ['Prazopress', 'Minipress']
    },
    notes: ['First-dose phenomenon: Profound orthostatic hypotension with syncope can occur. Give first dose before bedtime.']
  },
  {
    id: 'cardio_049',
    genericName: 'Reserpine',
    therapeuticClass: 'Central Monoamine Depleting Agent',
    categoryId: 'cardio',
    indications: ['Hypertension (Rarely used now)', 'Psychotic disorders (Obsolete use)'],
    dosing: {
      adult: 'PO: 0.1-0.25 mg OD.',
      pediatric: 'Rarely used.'
    },
    safety: {
      adr: ['Severe depression', 'Suicidal ideation', 'Nasal congestion', 'Peptic ulcers'],
      contraindications: ['Active peptic ulcer', 'History of mental depression/suicidal tendencies'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['0.1mg', '0.25mg'],
      dosageForms: ['Tablet'],
      priceNPR: 'Very cheap, low availability',
      brandNames: ['Serpasil']
    },
    notes: ['Largely superseded by safer modern antihypertensives. Derived from Rauwolfia serpentina.']
  },
  {
    id: 'cardio_050',
    genericName: 'Sodium Nitroprusside',
    therapeuticClass: 'Direct Vasodilator (Arterial and Venous)',
    categoryId: 'cardio',
    indications: ['Hypertensive Emergency', 'Acute Decompensated Heart Failure', 'High Blood Pressure'],
    dosing: {
      adult: 'IV Infusion: Start 0.3-0.5 mcg/kg/min, titrate up. Max 10 mcg/kg/min.',
      pediatric: 'IV Infusion: 0.3-0.5 mcg/kg/min, titrate up.'
    },
    safety: {
      adr: ['Profound hypotension', 'Cyanide/Thiocyanate toxicity (especially in prolonged/high dose use or renal/hepatic impairment)', 'Metabolic acidosis'],
      contraindications: ['Compensatory hypertension (e.g., A-V shunt or coarctation of aorta)', 'Known inadequate cerebral perfusion'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['50mg vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 300-500',
      brandNames: ['Nipride', 'Pruside']
    },
    notes: ['Protect infusion solution from light (wrap in foil). Reconstituted solution must be discarded after 24 hrs or if it turns blue/green/red.']
  },
  {
    id: 'cardio_051',
    genericName: 'Tamsulosin',
    therapeuticClass: 'Alpha-1a Adrenergic Blocker',
    categoryId: 'cardio',
    indications: ['Benign Prostatic Hyperplasia (BPH)'],
    dosing: {
      adult: 'PO: 0.4 mg OD, 30 mins after the same meal each day.',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Orthostatic hypotension', 'Retrograde ejaculation', 'Intraoperative floppy iris syndrome (IFIS) during cataract surgery'],
      contraindications: ['Severe hepatic failure'],
      pregnancyLactation: 'Category B. Not indicated in women typically, though used off-label for renal stones.'
    },
    pharmacy: {
      strengths: ['0.4mg MR capsule'],
      dosageForms: ['Capsule/Tablet'],
      priceNPR: '0.4mg cap: 5-10',
      brandNames: ['Veltam', 'Urimax']
    },
    notes: ['Uro-selective compared to Prazosin/Terazosin. Must warn ophthalmologist if undergoing cataract surgery due to IFIS risk.']
  },
  {
    id: 'cardio_052',
    genericName: 'Terazosin',
    therapeuticClass: 'Alpha-1 Adrenergic Blocker',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Benign Prostatic Hyperplasia (BPH)', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 1 mg at bedtime initially. Max 10 mg (for BPH) or 20 mg (for HTN) daily.',
      pediatric: 'Not established.'
    },
    safety: {
      adr: ['First-dose syncope', 'Dizziness', 'Asthenia', 'Orthostatic hypotension'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1mg', '2mg', '5mg'],
      dosageForms: ['Tablet'],
      priceNPR: '2mg tab: 4-6',
      brandNames: ['Teralfa', 'Hytrin']
    },
    notes: ['Requires first-dose administration at bedtime to avoid syncope.']
  },
  {
    id: 'cardio_053',
    genericName: 'Phenylephrine',
    therapeuticClass: 'Alpha-1 Agonist Vasopressor',
    categoryId: 'cardio',
    indications: ['Shock', 'Hypotension (e.g., anesthesia-induced)', 'Nasal congestion (topical)'],
    dosing: {
      adult: 'IV Infusion: 40-180 mcg/min initially, then 40-60 mcg/min maintenance. IV bolus: 50-250 mcg.',
      pediatric: 'IV Infusion: 0.1-0.5 mcg/kg/min.'
    },
    safety: {
      adr: ['Reflex bradycardia', 'Severe hypertension', 'Peripheral/Visceral ischemia'],
      contraindications: ['Severe hypertension', 'Ventricular tachycardia'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 80-120',
      brandNames: ['Neosynephrine', 'Frenin']
    },
    notes: ['Pure alpha agonist. Causes vasoconstriction without increasing heart rate (often causes reflex bradycardia).']
  },
  {
    id: 'cardio_054',
    genericName: 'Milrinone',
    therapeuticClass: 'Phosphodiesterase-3 (PDE3) Inhibitor / Inodilator',
    categoryId: 'cardio',
    indications: ['Acute Decompensated Heart Failure', 'Cardiogenic Shock', 'Post-cardiac surgery'],
    dosing: {
      adult: 'IV Infusion: Loading 50 mcg/kg over 10 mins (often omitted to prevent hypotension), then 0.375-0.75 mcg/kg/min.',
      pediatric: 'IV Infusion: Loading 50-75 mcg/kg (often omitted), then 0.5-0.75 mcg/kg/min.'
    },
    safety: {
      adr: ['Ventricular arrhythmias', 'Hypotension', 'Headache'],
      contraindications: ['Severe aortic/pulmonic valvular disease (may worsen obstruction)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg/10ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Amp: 250-400',
      brandNames: ['Primacor', 'Milcor']
    },
    notes: ['Inotrope + Vasodilator ("Inodilator"). May worsen hypotension, so dobutamine is preferred if BP is marginally low.']
  },
  {
    id: 'cardio_055',
    genericName: 'Bosentan',
    therapeuticClass: 'Endothelin Receptor Antagonist',
    categoryId: 'cardio',
    indications: ['Pulmonary Arterial Hypertension (PAH)'],
    dosing: {
      adult: 'PO: 62.5 mg BID for 4 weeks, then 125 mg BID.',
      pediatric: 'PO (> 1 month based on weight): 10-20 kg: 31.25 mg BID. 20-40 kg: 62.5 mg BID.'
    },
    safety: {
      adr: ['Hepatotoxicity', 'Teratogenicity', 'Edema', 'Anemia'],
      contraindications: ['PREGNANCY', 'Moderate to severe hepatic impairment', 'Use with cyclosporine or glyburide'],
      pregnancyLactation: 'Category X. CONTRAINDICATED. Must have negative pregnancy test monthly.'
    },
    pharmacy: {
      strengths: ['62.5mg', '125mg'],
      dosageForms: ['Tablet'],
      priceNPR: '62.5mg tab: 50-100',
      brandNames: ['Tracleer', 'Bosenat']
    },
    notes: ['Restricted distribution programs usually apply. Requires monthly LFT monitoring.']
  },
  {
    id: 'cardio_056',
    genericName: 'Sildenafil',
    therapeuticClass: 'Phosphodiesterase-5 (PDE5) Inhibitor',
    categoryId: 'cardio',
    indications: ['Pulmonary Arterial Hypertension (PAH)', 'Erectile Dysfunction (ED)'],
    dosing: {
      adult: 'PAH PO: 20 mg TID. ED PO: 50 mg PRN.',
      pediatric: 'PO (Children > 1 yr for PAH): 0.5-1 mg/kg/dose every 6-8 hrs (up to 20 mg TID).'
    },
    safety: {
      adr: ['Headache', 'Flushing', 'Dyspepsia', 'Visual changes (blue tinge)'],
      contraindications: ['Concurrent use of organic nitrates (nitroglycerin, isosorbide) - risk of fatal hypotension', 'Riociguat use'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['20mg (PAH)', '50mg', '100mg'],
      dosageForms: ['Tablet'],
      priceNPR: '20mg tab: 15-25, 50mg tab: 20-40',
      brandNames: ['Revatio', 'Viagra', 'Penegra']
    },
    notes: ['ABSOLUTE CONTRAINDICATION with nitrates. Leave a 24-48 hour window depending on formulation/renal function.']
  },
  {
    id: 'cardio_057',
    genericName: 'Cholestyramine',
    therapeuticClass: 'Bile Acid Sequestrant',
    categoryId: 'cardio',
    indications: ['Hypercholesterolemia', 'Pruritus in partial biliary obstruction', 'Bile acid diarrhea'],
    dosing: {
      adult: 'PO: 4 g 1-2 times daily, increase up to 24 g/day.',
      pediatric: 'PO: 240 mg/kg/day in 2-3 divided doses.'
    },
    safety: {
      adr: ['Constipation', 'Bloating', 'Nausea/Dyspepsia', 'Decreased absorption of fat-soluble vitamins (A,D,E,K) and other drugs'],
      contraindications: ['Complete biliary obstruction', 'Severe hypertriglyceridemia (can increase triglycerides)'],
      pregnancyLactation: 'Category C. Not absorbed systemically, but can cause maternal vitamin deficiency affecting fetus.'
    },
    pharmacy: {
      strengths: ['4g sachet'],
      dosageForms: ['Powder for Suspension/Sachet'],
      priceNPR: 'Sachet: Variable/High',
      brandNames: ['Questran']
    },
    notes: ['Must be mixed with fluid. Administer other drugs 1 hr before or 4-6 hrs after cholestyramine.']
  },
  {
    id: 'cardio_058',
    genericName: 'Clofibrate',
    therapeuticClass: 'Fibrate',
    categoryId: 'cardio',
    indications: ['Severe Hypertriglyceridemia (Historical)'],
    dosing: {
      adult: 'PO: 2 g daily in divided doses.',
      pediatric: 'Not recommended.'
    },
    safety: {
      adr: ['Gallstones', 'Myopathy', 'GI upset', 'Potential increased risk of malignancy'],
      contraindications: ['Significant hepatic or renal impairment', 'Primary biliary cirrhosis'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['500mg capsule'],
      dosageForms: ['Capsule'],
      priceNPR: 'Rarely available',
      brandNames: ['Atromid-S (Obsolete)']
    },
    notes: ['Largely superseded by safer fibrates (fenofibrate, gemfibrozil). Only included if historically stockpiled.']
  },
  {
    id: 'cardio_059',
    genericName: 'Ezetimibe',
    therapeuticClass: 'Cholesterol Absorption Inhibitor',
    categoryId: 'cardio',
    indications: ['Hypercholesterolemia (Adjunct to statin)'],
    dosing: {
      adult: 'PO: 10 mg OD.',
      pediatric: 'PO (> 10 yrs): 10 mg OD.'
    },
    safety: {
      adr: ['Diarrhea', 'Fatigue', 'Arthralgia', 'Elevated transaminases (when used with statins)'],
      contraindications: ['Concomitant use with a statin in active liver disease / pregnancy'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg'],
      dosageForms: ['Tablet'],
      priceNPR: '10mg tab: 15-20',
      brandNames: ['Ezetrol', 'Zetia', 'Ezibloc']
    },
    notes: ['Does not affect absorption of fat soluble vitamins. Excellent synergy with statin therapy.']
  },
  {
    id: 'cardio_060',
    genericName: 'Gemfibrozil',
    therapeuticClass: 'Fibrate',
    categoryId: 'cardio',
    indications: ['Severe Hypertriglyceridemia', 'Mixed Dyslipidemia'],
    dosing: {
      adult: 'PO: 600 mg BID (30 mins before morning and evening meals).',
      pediatric: 'Safety not established.'
    },
    safety: {
      adr: ['Dyspepsia', 'Gallstone formation', 'Myopathy (especially high risk if combined with statins)'],
      contraindications: ['Gallbladder disease', 'Severe hepatic/renal dysfunction'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['300mg', '600mg'],
      dosageForms: ['Tablet'],
      priceNPR: '600mg tab: 10-15',
      brandNames: ['Lopid', 'Gempar']
    },
    notes: ['Higher risk of rhabdomyolysis when combined with statins compared to fenofibrate. Fenofibrate is preferred if a statin is concurrent.']
  },
  {
    id: 'cardio_061',
    genericName: 'Nicotinic Acid (Niacin / Vitamin B3)',
    therapeuticClass: 'Lipid-Modifying Agent',
    categoryId: 'cardio',
    indications: ['Dyslipidemia (Raises HDL, Lowers TG)'],
    dosing: {
      adult: 'PO: Start 250 mg OD, titrate up. Extended Release: 500 mg at bedtime, up to 2000 mg.',
      pediatric: 'Not recommended for dyslipidemia.'
    },
    safety: {
      adr: ['Severe cutaneous flushing', 'Pruritus', 'Hepatotoxicity', 'Hyperglycemia', 'Hyperuricemia'],
      contraindications: ['Active liver disease', 'Active peptic ulcer', 'Arterial bleeding'],
      pregnancyLactation: 'Category C (for high doses).'
    },
    pharmacy: {
      strengths: ['250mg', '500mg ER'],
      dosageForms: ['Tablet'],
      priceNPR: '500mg ER tab: 5-10',
      brandNames: ['Nialip', 'Niacin']
    },
    notes: ['Flushing can be minimized by taking aspirin 325 mg 30 minutes prior to the dose and taking at bedtime with a low-fat snack.']
  },
  {
    id: 'cardio_062',
    genericName: 'Simvastatin',
    therapeuticClass: 'HMG-CoA Reductase Inhibitor (Statin)',
    categoryId: 'cardio',
    indications: ['Hypercholesterolemia', 'ASCVD Prevention'],
    dosing: {
      adult: 'PO: 10-40 mg at bedtime. (80 mg dose restricted due to myopathy risk).',
      pediatric: 'PO (Heterozygous FH, 10-17 yrs): 10-40 mg OD at bedtime.'
    },
    safety: {
      adr: ['Myopathy/Rhabdomyolysis', 'Elevated liver enzymes', 'New onset diabetes'],
      contraindications: ['Active liver disease', 'PREGNANCY', 'Concomitant use with strong CYP3A4 inhibitors (e.g. clarithromycin, itraconazole)'],
      pregnancyLactation: 'Category X. CONTRAINDICATED.'
    },
    pharmacy: {
      strengths: ['10mg', '20mg', '40mg'],
      dosageForms: ['Tablet'],
      priceNPR: '20mg tab: 4-8',
      brandNames: ['Simvotin', 'Zocor']
    },
    notes: ['Must be given in the evening/bedtime due to short half-life and nocturnal cholesterol synthesis. Highest risk of myopathy at 80mg dose.']
  }
];
