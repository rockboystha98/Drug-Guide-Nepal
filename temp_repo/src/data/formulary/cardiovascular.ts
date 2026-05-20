import { DrugEntry } from '../../types/formulary';

export const cardioDrugs: DrugEntry[] = [
  // Cardiac Glycosides
  {
    id: 'cardio_001',
    genericName: 'Digoxin',
    therapeuticClass: 'Cardiac Glycoside',
    categoryId: 'cardio',
    indications: ['Heart Failure', 'Atrial Fibrillation (Rate Control)'],
    dosing: {
      adult: 'PO: Loading 0.75-1.5 mg over 24hr. Maintenance: 0.125-0.25 mg OD. IV: 0.5-1 mg loading.',
      pediatric: 'PO/IV: Varies extensively by age/weight. Premature: 15-25 mcg/kg loading. Term: 20-30 mcg/kg. Children 2-5 yrs: 30-40 mcg/kg divided Q8H.'
    },
    safety: {
      adr: ['Arrhythmias', 'Nausea/Vomiting', 'Visual disturbances (yellow halos)', 'Confusion'],
      contraindications: ['Ventricular fibrillation', 'Hypertrophic obstructive cardiomyopathy (HOCM)', 'Wolff-Parkinson-White syndrome'],
      pregnancyLactation: 'Category C. Dose requirements may increase during pregnancy.',
      renalAdjustment: 'Reduce dose or extend interval in renal impairment (renally cleared).'
    },
    pharmacy: {
      strengths: ['0.25mg tablet', '0.5mg/2ml injection', '50mcg/ml elixir'],
      dosageForms: ['Tablet', 'Injection', 'Elixir'],
      priceNPR: 'Tablet: 2-3, Inj: 15-20',
      brandNames: ['Lanoxin', 'Cardioxin']
    },
    notes: ['Narrow therapeutic index. Monitor K+ (hypokalemia increases toxicity).']
  },
  // Diuretics
  {
    id: 'cardio_002',
    genericName: 'Furosemide',
    therapeuticClass: 'Loop Diuretic',
    categoryId: 'cardio',
    indications: ['Edema (Cardiac/Hepatic/Renal)', 'Acute Pulmonary Edema', 'Hypertension (Severe)', 'Heart Failure', 'Swelling/Edema', 'Shortness of breath'],
    dosing: {
      adult: 'PO: 20-80 mg daily. IV: 20-40 mg slow IV push.',
      pediatric: 'PO: 1-2 mg/kg/dose Q6-12H (Max 6 mg/kg/day). IV: 1 mg/kg slow push (Max 6 mg/kg/day).'
    },
    safety: {
      adr: ['Hypokalemia', 'Hyponatremia', 'Dehydration', 'Ototoxicity (rapid IV push)', 'Hyperuricemia'],
      contraindications: ['Anuria', 'Severe hypokalemia/hyponatremia', 'Hepatic coma'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['40mg tablet', '20mg/2ml ampoule'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Tablet: 1-2, Ampoule: 5-10',
      brandNames: ['Lasix', 'Fruselac (Combo)']
    },
    notes: ['IV push should not exceed 4 mg/minute to prevent ototoxicity.']
  },
  {
    id: 'cardio_003',
    genericName: 'Hydrochlorothiazide (HCTZ)',
    therapeuticClass: 'Thiazide Diuretic',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Mild to Moderate Edema', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 12.5-25 mg OD. Max 50 mg/day.',
      pediatric: 'PO: 1-2 mg/kg/day in 1-2 divided doses.'
    },
    safety: {
      adr: ['Hypokalemia', 'Hyperuricemia', 'Hyperglycemia', 'Hypercalcemia'],
      contraindications: ['Anuria', 'Severe sulfonamide hypersensitivity', 'Severe renal impairment (CrCl < 30)'],
      pregnancyLactation: 'Category B. Diuretics generally avoided in pregnancy to prevent hypovolemia unless medically necessary.'
    },
    pharmacy: {
      strengths: ['12.5mg', '25mg'],
      dosageForms: ['Tablet'],
      priceNPR: 'Tablet: 2-3',
      brandNames: ['Aquazide']
    },
    notes: ['Ineffective if CrCl < 30 mL/min (use loop diuretics instead).']
  },
  {
    id: 'cardio_004',
    genericName: 'Spironolactone',
    therapeuticClass: 'Potassium-Sparing Diuretic (Aldosterone Antagonist)',
    categoryId: 'cardio',
    indications: ['Heart Failure', 'Ascites (Cirrhosis)', 'Resistant Hypertension', 'Primary Hyperaldosteronism'],
    dosing: {
      adult: 'Heart Failure: 12.5-25 mg OD. Ascites: 100-400 mg/day.',
      pediatric: 'PO: 1-3 mg/kg/day in single or divided doses.'
    },
    safety: {
      adr: ['Hyperkalemia', 'Gynecomastia', 'Menstrual irregularities'],
      contraindications: ['Hyperkalemia', 'Severe renal failure (Anuria)', 'Addison\'s disease'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mg', '50mg', '100mg'],
      dosageForms: ['Tablet'],
      priceNPR: '25mg tab: 4-6',
      brandNames: ['Aldactone']
    },
    notes: ['Monitor potassium critically, especially if co-administered with ACEI/ARBs.']
  },
  // Anti-Arrhythmics
  {
    id: 'cardio_005',
    genericName: 'Amiodarone',
    therapeuticClass: 'Anti-arrhythmic (Class III)',
    categoryId: 'cardio',
    indications: ['Ventricular Fibrillation / Pulseless VT (Cardiac Arrest)', 'SVT', 'Atrial Fibrillation', 'Arrhythmias', 'Palpitation'],
    dosing: {
      adult: 'Cardiac Arrest: 300 mg IV push, may repeat 150 mg. Stable VT/SVT: 150 mg IV over 10 mins. PO: 200 mg TID for 1 week, then titrate down (usually 200mg OD maintenance).',
      pediatric: 'Cardiac Arrest: 5 mg/kg IV rapid push.'
    },
    safety: {
      adr: ['Pulmonary toxicity (fibrosis)', 'Thyroid dysfunction (Hyper/Hypo)', 'Corneal microdeposits', 'Liver toxicity', 'Prolonged QT'],
      contraindications: ['Severe sinus bradycardia', '2nd or 3rd degree AV block', 'Iodine allergy'],
      pregnancyLactation: 'Category D. Avoid if possible (can cause neonatal goiter).'
    },
    pharmacy: {
      strengths: ['100mg tablet', '200mg tablet', '150mg/3ml ampoule'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '200mg tab: 15-20, Inj: 120-150',
      brandNames: ['Cordarone', 'Eurythmic']
    },
    notes: ['Requires dedicated central line if possible for continuous infusion to prevent phlebitis.']
  },
  {
    id: 'cardio_006',
    genericName: 'Adenosine',
    therapeuticClass: 'Anti-arrhythmic',
    categoryId: 'cardio',
    indications: ['Paroxysmal Supraventricular Tachycardia (PSVT) conversion', 'Arrhythmias', 'Palpitation'],
    dosing: {
      adult: 'IV: 6 mg rapid push. If no effect in 1-2 mins, give 12 mg rapid push. May repeat 12 mg once.',
      pediatric: 'IV: 0.1 mg/kg rapid push (Max 6 mg). Total max dose 12 mg.'
    },
    safety: {
      adr: ['Chest pressure/tightness', 'Flushing', 'Brief transient asystole/bradycardia', 'Dyspnea'],
      contraindications: ['2nd or 3rd degree AV block', 'Sick sinus syndrome', 'Asthma (can cause bronchospasm)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['6mg/2ml vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 180-250',
      brandNames: ['Adenocor']
    },
    notes: ['Must be given as a VERY rapid IV push followed immediately by rapid 20ml flush. Half life is < 10 seconds.']
  },
  // Antihypertensives (Beta-Blockers)
  {
    id: 'cardio_007',
    genericName: 'Atenolol',
    therapeuticClass: 'Beta-1 Selective Blocker',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Angina', 'Acute MI', 'High Blood Pressure', 'Chest pain'],
    dosing: {
      adult: 'PO: 25-100 mg OD.',
      pediatric: 'PO: 0.5-1 mg/kg/day OD (Max 2 mg/kg/day).'
    },
    safety: {
      adr: ['Bradycardia', 'Fatigue', 'Cold extremities', 'Bronchospasm', 'Masks hypoglycemia'],
      contraindications: ['Asthma (relative)', '2nd/3rd degree heart block', 'Severe bradycardia or cardiogenic shock'],
      pregnancyLactation: 'Category D. Associated with fetal growth restriction. Labetalol/Methyldopa preferred.'
    },
    pharmacy: {
      strengths: ['25mg', '50mg', '100mg'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 2-4',
      brandNames: ['Aten', 'Tenormin']
    },
    notes: ['Do not stop abruptly.']
  },
  // Antihypertensives (ACEI/ARB)
  {
    id: 'cardio_008',
    genericName: 'Enalapril',
    therapeuticClass: 'ACE Inhibitor',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Heart Failure', 'Diabetic Nephropathy', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 2.5-5 mg initially, up to 20-40 mg/day in 1-2 divided doses.',
      pediatric: 'PO (Children 1mo to 16yrs): 0.08 mg/kg OD (Max initial 5 mg). Titrate max to 0.58 mg/kg/day.'
    },
    safety: {
      adr: ['Dry cough', 'Hyperkalemia', 'Hypotension', 'Angioedema (life-threatening)', 'Renal impairment'],
      contraindications: ['History of angioedema', 'Bilateral renal artery stenosis', 'PREGNANCY (Contraindicated)'],
      pregnancyLactation: 'Category D. CONTRAINDICATED in 2nd and 3rd trimesters (causes fetal renal agenesis).'
    },
    pharmacy: {
      strengths: ['2.5mg', '5mg', '10mg'],
      dosageForms: ['Tablet'],
      priceNPR: '5mg tab: 2-3',
      brandNames: ['Envas', 'Nuril']
    },
    notes: ['Monitor creatinine and potassium 1-2 weeks after starting.']
  },
  {
    id: 'cardio_009',
    genericName: 'Losartan',
    therapeuticClass: 'Angiotensin II Receptor Blocker (ARB)',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Diabetic Nephropathy', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 25-100 mg OD.',
      pediatric: 'PO (Children 6-16 yrs): 0.7 mg/kg OD (Max 50mg/day).'
    },
    safety: {
      adr: ['Hyperkalemia', 'Hypotension', 'Renal impairment'],
      contraindications: ['Bilateral renal artery stenosis', 'PREGNANCY'],
      pregnancyLactation: 'Category D. CONTRAINDICATED in pregnancy.'
    },
    pharmacy: {
      strengths: ['25mg', '50mg'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 3-5',
      brandNames: ['Losar', 'Repace']
    },
    notes: ['Given if patient develops an intolerant ACE inhibitor dry cough.']
  },
  // Calcium Channel Blockers (Moved to cardio section specifically from previous core systems)
  {
    id: 'cardio_010',
    genericName: 'Amlodipine',
    therapeuticClass: 'Calcium Channel Blocker (DHP)',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Chronic Stable Angina', 'High Blood Pressure', 'Chest pain', 'BP'],
    dosing: {
      adult: 'PO: 5-10 mg OD.',
      pediatric: 'PO (Children 6-17 yrs): 2.5-5 mg OD.'
    },
    safety: {
      adr: ['Peripheral edema (ankle swelling)', 'Flushing', 'Headache', 'Palpitations'],
      contraindications: ['Severe hypotension', 'Cardiogenic shock', 'Aortic stenosis'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['2.5mg', '5mg', '10mg'],
      dosageForms: ['Tablet'],
      priceNPR: '5mg tab: 3-5',
      brandNames: ['Amlod', 'Amlopin', 'Stamlo']
    },
    notes: ['Edema is dependent on dose and is not due to fluid overload (due to vasodilation gradient).']
  },
  // Centrally Acting Antihypertensive
  {
    id: 'cardio_011',
    genericName: 'Methyldopa',
    therapeuticClass: 'Centrally Acting Alpha-2 Agonist',
    categoryId: 'cardio',
    indications: ['Hypertension in Pregnancy (PIH)', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 250 mg BID-TID. Max 3g/day.',
      pediatric: 'PO: 10 mg/kg/day in 2-4 divided doses. Max 65 mg/kg or 3g/day.'
    },
    safety: {
      adr: ['Sedation', 'Depression', 'Hemolytic anemia (positive Coombs test)', 'Hepatotoxicity'],
      contraindications: ['Active liver disease', 'Depression (severe)'],
      pregnancyLactation: 'Category B. Longest safety record for chronic hypertension in pregnancy.'
    },
    pharmacy: {
      strengths: ['250mg'],
      dosageForms: ['Tablet'],
      priceNPR: '250mg tab: 5-8',
      brandNames: ['Alphadopa']
    },
    notes: ['Observe for jaundice and hematological abnormalities.']
  },
  // Nitrates / Anti-anginals
  {
    id: 'cardio_012',
    genericName: 'Glyceryl Trinitrate (Nitroglycerin/NTG)',
    therapeuticClass: 'Nitrate / Vasodilator',
    categoryId: 'cardio',
    indications: ['Acute Angina Pectoris', 'Acute Pulmonary Edema', 'Hypertensive Emergency', 'Chest pain', 'Heart attack'],
    dosing: {
      adult: 'Sublingual: 0.3-0.6 mg PRN. May repeat Q5 mins (max 3 doses). IV: 5 mcg/min, titrate by 5 mcg Q3-5 mins.',
      pediatric: 'IV: 0.25-0.5 mcg/kg/min (titrate to effect).'
    },
    safety: {
      adr: ['Severe headache', 'Hypotension', 'Tachycardia', 'Flushing'],
      contraindications: ['Use of PDE-5 inhibitors (Sildenafil) within 24-48 hrs (fatal hypotension)', 'Severe anemia', 'Increased ICP', 'Hypovolemia', 'Right ventricular infarction'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['0.5mg sublingual', '2.6mg CR tablet', '5mg/ml ampoule (usually 5ml or 10ml)'],
      dosageForms: ['Tablet', 'Injection', 'Patch'],
      priceNPR: 'SL tab: 2-3, Inj: 120-180',
      brandNames: ['Nitrolingual', 'Angised', 'Nitroderm']
    },
    notes: ['Requires special non-PVC IV tubing (it absorbs into standard plastic). Keep patient sitting or lying during sublingual administration.']
  },
  // Lipid-Regulating
  {
    id: 'cardio_013',
    genericName: 'Atorvastatin',
    therapeuticClass: 'HMG-CoA Reductase Inhibitor (Statin)',
    categoryId: 'cardio',
    indications: ['Hypercholesterolemia', 'Primary/Secondary Prevention of ASCVD', 'Heart attack'],
    dosing: {
      adult: 'PO: 10-80 mg OD (high intensity is 40-80mg).',
      pediatric: 'PO (Usually >10 yrs for Familial Hypercholesterolemia): 10-20 mg OD.'
    },
    safety: {
      adr: ['Myalgia', 'Myopathy/Rhabdomyolysis', 'Elevated LFTs', 'New-onset diabetes'],
      contraindications: ['Active liver disease', 'PREGNANCY'],
      pregnancyLactation: 'Category X. CONTRAINDICATED.'
    },
    pharmacy: {
      strengths: ['10mg', '20mg', '40mg', '80mg'],
      dosageForms: ['Tablet'],
      priceNPR: '10mg tab: 5-10',
      brandNames: ['Lipikind', 'Storvas', 'Atorva']
    },
    notes: ['Can be taken any time of day (has a longer half-life than simvastatin). Report unexplained muscle pain immediately.']
  },
  // Vasopressors/Inotropes (Sepsis Link)
  {
    id: 'cardio_014',
    genericName: 'Noradrenaline (Norepinephrine)',
    therapeuticClass: 'Sympathomimetic Vasopressor (Alpha > Beta1)',
    categoryId: 'cardio',
    indications: ['Septic Shock / Distributive Shock (Sepsis 2026)', 'Severe Hypotension'],
    dosing: {
      adult: 'IV Infusion: 0.05-1 mcg/kg/min (titrate to maintain MAP > 65 mmHg).',
      pediatric: 'IV Infusion: 0.05-0.1 mcg/kg/min initial (titrate to effect).'
    },
    safety: {
      adr: ['Tissue necrosis (extravasation)', 'Severe peripheral ischemia', 'Arrhythmias'],
      contraindications: ['Hypovolemia (must volume resuscitate first)', 'Mesenteric/Peripheral vascular thrombosis'],
      pregnancyLactation: 'Category C. Used to maintain maternal life if shock is present.'
    },
    pharmacy: {
      strengths: ['2mg/2ml ampoule', '4mg/4ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 80-150',
      brandNames: ['Norpacin']
    },
    notes: ['First-line vasopressor in Sepsis. Must be given through a central line to prevent severe tissue sloughing. If extravasation occurs, use Phentolamine.']
  },
  {
    id: 'cardio_015',
    genericName: 'Dopamine',
    therapeuticClass: 'Sympathomimetic Inotrope/Vasopressor',
    categoryId: 'cardio',
    indications: ['Cardiogenic Shock', 'Hemodynamically significant bradycardia (if atropine/pacing fails)'],
    dosing: {
      adult: 'IV Infusion: 2-20 mcg/kg/min (Low dose 2-5: Dopa receptors; Mid 5-10: Beta-1; High 10-20: Alpha-1).',
      pediatric: 'IV Infusion: 2-20 mcg/kg/min.'
    },
    safety: {
      adr: ['Tachycardia', 'Arrhythmias (especially V-Fib)', 'Tissue necrosis (extravasation)'],
      contraindications: ['Tachyarrhythmias', 'V-Fib', 'Pheochromocytoma'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['200mg/5ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 50-80',
      brandNames: ['Dopmin']
    },
    notes: ['Largely replaced by Noradrenaline for shock, except in select patients with absolute bradycardia and low risk of tachyarrhythmias.']
  },
  {
    id: 'cardio_015a',
    genericName: 'Warfarin',
    therapeuticClass: 'Vitamin K Antagonist (Anticoagulant)',
    categoryId: 'cardio',
    indications: ['DVT / PE Prophylaxis and Treatment', 'Atrial Fibrillation (Stroke Prevention)', 'Prosthetic Heart Valves', 'Blood'],
    dosing: {
      adult: 'PO: 5 mg OD initially, then titrate rigorously to target INR (usually 2.0-3.0).',
      pediatric: 'PO (Requires profound specialist supervision): 0.1-0.2 mg/kg OD initially. Target INR dependent on condition.'
    },
    safety: {
      adr: ['Bleeding (severe/fatal)', 'Skin necrosis', 'Purple toe syndrome'],
      contraindications: ['Active bleeding', 'Severe hypertension', 'Pregnancy (teratogenic)'],
      pregnancyLactation: 'Category X (Highest Tier Teratogen - fetal warfarin syndrome). Avoid entirely unless mechanical heart valve exception applies.'
    },
    pharmacy: {
      strengths: ['1mg', '2mg', '3mg', '5mg'],
      dosageForms: ['Tablet'],
      priceNPR: '5mg tab: 5-10',
      brandNames: ['Uniwarfin', 'Warf']
    },
    notes: ['HIGH ALERT: Narrow therapeutic index. Interacts with numerous drugs and foods (green leafy vegetables). Requires frequent INR monitoring. Bleeding antidote is Vitamin K / Fresh Frozen Plasma.']
  },
  {
    id: 'cardio_016',
    genericName: 'Metoprolol',
    therapeuticClass: 'Beta-1 Selective Blocker',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Angina', 'Heart Failure', 'Acute MI'],
    dosing: {
      adult: 'PO: 25-100 mg OD or BID. IV: 5 mg over 1-2 mins, max 15 mg.',
      pediatric: 'PO: 1-2 mg/kg/day divided BID.'
    },
    safety: {
      adr: ['Bradycardia', 'Fatigue', 'Hypotension', 'Bronchospasm in sensitive patients'],
      contraindications: ['Asthma (relative)', 'Severe bradycardia', 'Heart block greater than first degree'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mg', '50mg', '100mg XL', '5mg/5ml Inj'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '50mg tab: 4-6',
      brandNames: ['Betaloc', 'Met XL']
    },
    notes: ['Metoprolol succinate (XL) is preferred for heart failure. Metoprolol tartrate is for immediate relief.']
  },
  {
    id: 'cardio_017',
    genericName: 'Bisoprolol',
    therapeuticClass: 'Beta-1 Selective Blocker',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Angina', 'Heart Failure (HFrEF)'],
    dosing: {
      adult: 'PO: 1.25-10 mg OD. Start low in heart failure and titrate.',
      pediatric: 'Safety not established, generally avoided or used under strict specialist direction.'
    },
    safety: {
      adr: ['Bradycardia', 'Fatigue', 'Cold extremities'],
      contraindications: ['Cardiogenic shock', 'Overt cardiac failure', '2nd/3rd degree AV block'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['2.5mg', '5mg'],
      dosageForms: ['Tablet'],
      priceNPR: '2.5mg tab: 4-7',
      brandNames: ['Concor', 'Bisoheart']
    },
    notes: ['Highly cardioselective beta-blocker. Do not stop abruptly.']
  },
  {
    id: 'cardio_018',
    genericName: 'Ramipril',
    therapeuticClass: 'ACE Inhibitor',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Heart Failure', 'Post-MI', 'Diabetic Nephropathy'],
    dosing: {
      adult: 'PO: 1.25-10 mg OD.',
      pediatric: 'Limited data, rarely used.'
    },
    safety: {
      adr: ['Dry cough', 'Hyperkalemia', 'Hypotension', 'Angioedema'],
      contraindications: ['History of angioedema', 'Bilateral renal artery stenosis', 'PREGNANCY'],
      pregnancyLactation: 'Category D. CONTRAINDICATED in 2nd and 3rd trimesters.'
    },
    pharmacy: {
      strengths: ['1.25mg', '2.5mg', '5mg', '10mg'],
      dosageForms: ['Capsule/Tablet'],
      priceNPR: '2.5mg tab: 3-5',
      brandNames: ['Cardace', 'Ramipres']
    },
    notes: ['Renally cleared; lower starting doses in renal impairment.']
  },
  {
    id: 'cardio_019',
    genericName: 'Telmisartan',
    therapeuticClass: 'Angiotensin II Receptor Blocker (ARB)',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Cardiovascular risk reduction'],
    dosing: {
      adult: 'PO: 20-80 mg OD.',
      pediatric: 'PO (Children 6-17 yrs): 1 mg/kg/day (Max 40-80mg/day).'
    },
    safety: {
      adr: ['Hypotension', 'Hyperkalemia', 'Renal impairment'],
      contraindications: ['Biliary obstructive disorders', 'Severe hepatic impairment', 'PREGNANCY'],
      pregnancyLactation: 'Category D. CONTRAINDICATED in pregnancy.'
    },
    pharmacy: {
      strengths: ['20mg', '40mg', '80mg'],
      dosageForms: ['Tablet'],
      priceNPR: '40mg tab: 5-8',
      brandNames: ['Telma', 'Telmikind']
    },
    notes: ['Longest half-life among ARBs (about 24 hours). Avoid co-administering with ACE inhibitors.']
  },
  {
    id: 'cardio_020',
    genericName: 'Nifedipine',
    therapeuticClass: 'Calcium Channel Blocker (DHP)',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Angina', 'Pre-term Labor (Tocolytic)'],
    dosing: {
      adult: 'PO: 10-20 mg TID (Immediate Release). 30-60 mg OD (Extended Release).',
      pediatric: 'PO: 0.25-0.5 mg/kg/dose Q6-8H (Immediate Release).'
    },
    safety: {
      adr: ['Flushing', 'Peripheral edema', 'Headache', 'Reflex tachycardia'],
      contraindications: ['Cardiogenic shock', 'Severe aortic stenosis', 'Unstable angina (immediate release formulated)'],
      pregnancyLactation: 'Category C. Extensively used safely in pregnancy for hypertension.'
    },
    pharmacy: {
      strengths: ['10mg', '20mg SR/Retard', '30mg XL'],
      dosageForms: ['Tablet', 'Capsule'],
      priceNPR: '20mg SR: 3-5',
      brandNames: ['Depin', 'Nicardia']
    },
    notes: ['Avoid immediate-release nifedipine for acute hypertensive crises due to risk of profound hypotension and stroke/MI.']
  },
  {
    id: 'cardio_021',
    genericName: 'Verapamil',
    therapeuticClass: 'Calcium Channel Blocker (Non-DHP) / Anti-arrhythmic (Class IV)',
    categoryId: 'cardio',
    indications: ['Angina', 'Hypertension', 'SVT (Rate Control)'],
    dosing: {
      adult: 'PO: 40-120 mg TID. IV: 5-10 mg slow IV push over 2 mins.',
      pediatric: 'PO: 4-8 mg/kg/day divided TID. IV: 0.1-0.3 mg/kg slowly.'
    },
    safety: {
      adr: ['Constipation', 'Bradycardia', 'Hypotension', 'Heart block'],
      contraindications: ['Severe LV dysfunction / Heart Failure', '2nd/3rd degree AV block', 'WPW syndrome with Afib'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['40mg', '80mg', '5mg/2ml Inj'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '40mg tab: 2-4',
      brandNames: ['Calaptin']
    },
    notes: ['Do not give IV with an IV beta-blocker concurrently (risk of asystole). Strong negative inotrope.']
  },
  {
    id: 'cardio_022',
    genericName: 'Isosorbide Dinitrate / Mononitrate',
    therapeuticClass: 'Nitrate / Vasodilator',
    categoryId: 'cardio',
    indications: ['Angina Pectoris (Prophylaxis)'],
    dosing: {
      adult: 'Dinitrate: PO 10-20 mg BID/TID. Mononitrate: PO 20 mg BID or 60 mg SR OD.',
      pediatric: 'Rarely indicated.'
    },
    safety: {
      adr: ['Headache', 'Hypotension', 'Flushing', 'Dizziness'],
      contraindications: ['Severe anemia', 'PDE-5 inhibitors use (e.g., Sildenafil) within 48hr'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['Dinitrate 10mg, 20mg', 'Mononitrate 20mg, 60mg SR'],
      dosageForms: ['Tablet'],
      priceNPR: 'Tablet: 3-8',
      brandNames: ['Sorbitrate', 'Monotrate']
    },
    notes: ['Require a nitrate-free interval of 10-14 hours per day to prevent tolerance development.']
  },
  {
    id: 'cardio_023',
    genericName: 'Rosuvastatin',
    therapeuticClass: 'HMG-CoA Reductase Inhibitor (Statin)',
    categoryId: 'cardio',
    indications: ['Hypercholesterolemia', 'ASCVD Prevention'],
    dosing: {
      adult: 'PO: 5-40 mg OD. High intensity is 20-40 mg.',
      pediatric: 'PO (Children >8 yrs with Familial Hypercholesterolemia): 5-20 mg OD.'
    },
    safety: {
      adr: ['Myalgia', 'Increased liver transaminases', 'New-onset diabetes'],
      contraindications: ['Active liver disease', 'PREGNANCY'],
      pregnancyLactation: 'Category X. CONTRAINDICATED.'
    },
    pharmacy: {
      strengths: ['5mg', '10mg', '20mg', '40mg'],
      dosageForms: ['Tablet'],
      priceNPR: '10mg tab: 8-15',
      brandNames: ['Rosuvas', 'Rozavel']
    },
    notes: ['Most potent statin. Low water solubility. Take at any time of day. Reduce dose in severe renal impairment.']
  },
  {
    id: 'cardio_024',
    genericName: 'Fenofibrate',
    therapeuticClass: 'Fibrate',
    categoryId: 'cardio',
    indications: ['Severe Hypertriglyceridemia', 'Mixed Dyslipidemia'],
    dosing: {
      adult: 'PO: 145-160 mg OD.',
      pediatric: 'Safety not established.'
    },
    safety: {
      adr: ['GI upset', 'Myopathy', 'Increases risk of gallstones'],
      contraindications: ['Severe renal/hepatic impairment', 'Gallbladder disease'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['145mg', '160mg', '200mg'],
      dosageForms: ['Tablet', 'Capsule'],
      priceNPR: '160mg tab: 10-20',
      brandNames: ['TG-tor', 'Fenolip']
    },
    notes: ['Greatest efficacy in lowering triglycerides. Increased risk of myopathy when co-administered with statins.']
  },
  {
    id: 'cardio_025',
    genericName: 'Dobutamine',
    therapeuticClass: 'Sympathomimetic Inotrope (Beta-1 Agonist)',
    categoryId: 'cardio',
    indications: ['Cardiogenic Shock', 'Severe Heart Failure with Low Cardiac Output'],
    dosing: {
      adult: 'IV Infusion: 2-20 mcg/kg/min. Titrate to clinical response.',
      pediatric: 'IV Infusion: 2-20 mcg/kg/min.'
    },
    safety: {
      adr: ['Tachycardia', 'Arrhythmias', 'Hypotension (if severe volume depletion)'],
      contraindications: ['Hypertrophic cardiomyopathy (HOCM)', 'Hypersensitivity to sulfites (in some preps)'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['250mg/20ml vial', '250mg/5ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial/Ampoule: 150-300',
      brandNames: ['Dobutrex', 'Cardiject']
    },
    notes: ['Pure inotrope, causes mild vasodilation. Do not confuse with dopamine. Correct hypovolemia before use.']
  }
];
