import { DrugEntry } from '../../types/formulary';

export const cardioExtendedDrugs: DrugEntry[] = [
  {
    id: 'cardio_026',
    genericName: 'Carvedilol',
    therapeuticClass: 'Non-selective Beta-blocker with Alpha-1 blockade',
    categoryId: 'cardio',
    indications: ['Heart Failure', 'Hypertension', 'Hypertension', 'High Blood Pressure', 'Swelling'],
    dosing: {
      adult: 'PO: Heart Failure: 3.125 mg BID, titrate up to 25 mg BID.',
      pediatric: 'PO: 0.05 mg/kg/dose BID, titrate up carefully. (Heart Failure)'
    },
    safety: {
      adr: ['Dizziness', 'Hypotension', 'Bradycardia', 'Fatigue'],
      contraindications: ['Severe hepatic impairment', 'Asthma (bronchospasm risk)', 'Cardiogenic shock', 'Severe bradycardia'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['3.125mg', '6.25mg', '12.5mg', '25mg'],
      dosageForms: ['Tablet'],
      priceNPR: '3.125mg tab: 2-5',
      brandNames: ['Carca', 'Cardivas']
    },
    notes: ['Must be taken with food to decrease the rate of absorption and reduce the incidence of orthostatic hypotension.']
  },
  {
    id: 'cardio_027',
    genericName: 'Propranolol',
    therapeuticClass: 'Non-selective Beta-blocker',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Angina', 'Arrhythmias', 'Essential Tremor', 'Migraine Prophylaxis', 'Palpitation', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 10-40 mg 2-4 times a day depending on indication. IV: 1 mg over 1 min for acute arrhythmias.',
      pediatric: 'PO (Arrhythmias/Thyrotoxicosis): 0.5-4 mg/kg/day in divided doses.'
    },
    safety: {
      adr: ['Bradycardia', 'Bronchospasm', 'Fatigue', 'Sleep disturbances/nightmares', 'Cold extremities'],
      contraindications: ['Asthma / COPD', 'Heart block greater than first degree', 'Cardiogenic shock'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg', '40mg tablet', '1mg/ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '40mg tab: 2-3',
      brandNames: ['Inderal', 'Ciplar']
    },
    notes: ['Crosses the blood-brain barrier highly, which may cause CNS side effects. Avoid in patients with reactive airways.']
  },
  {
    id: 'cardio_028',
    genericName: 'Diltiazem',
    therapeuticClass: 'Calcium Channel Blocker (Non-DHP)',
    categoryId: 'cardio',
    indications: ['Angina', 'Hypertension', 'Arrhythmias (SVT rate control)', 'Chest pain', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 30-60 mg TID or QID (immediate release); 90-360 mg OD for sustained release. IV: 0.25 mg/kg bolus.',
      pediatric: 'IV (Arrhythmia): 0.25 mg/kg bolus over 2 mins.'
    },
    safety: {
      adr: ['Bradycardia', 'Edema', 'Headache', 'AV block'],
      contraindications: ['Sick sinus syndrome', '2nd/3rd degree AV block', 'Severe hypotension', 'Acute MI with pulmonary congestion'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['30mg', '60mg', '90mg SR', '5mg/ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '30mg tab: 2-4, Inj: 20-30',
      brandNames: ['Dilzem']
    },
    notes: ['Less negative inotropic effect than verapamil, but should still be used cautiously in heart failure.']
  },
  {
    id: 'cardio_029',
    genericName: 'Disopyramide',
    therapeuticClass: 'Antiarrhythmic (Class Ia)',
    categoryId: 'cardio',
    indications: ['Ventricular arrhythmias', 'Palpitation'],
    dosing: {
      adult: 'PO: 100-200 mg QID.',
      pediatric: 'PO (< 1 yr): 10-30 mg/kg/day; (1-4 yrs): 10-20 mg/kg/day; (4-12 yrs): 10-15 mg/kg/day; (12-18 yrs): 6-15 mg/kg/day.'
    },
    safety: {
      adr: ['Anticholinergic effects (dry mouth, urinary retention)', 'Hypotension', 'Heart failure exacerbation'],
      contraindications: ['Complete heart block', 'Glaucoma', 'Uncompensated heart failure'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['100mg', '150mg capsule'],
      dosageForms: ['Capsule'],
      priceNPR: 'Capsule: Variable',
      brandNames: ['Norpace (rarely available)']
    },
    notes: ['High anticholinergic side effect profile.']
  },
  {
    id: 'cardio_030',
    genericName: 'Isoprenaline (Isoproterenol)',
    therapeuticClass: 'Non-selective Beta Agonist',
    categoryId: 'cardio',
    indications: ['Heart block', 'Severe bradycardia', 'Stokes-Adams attacks'],
    dosing: {
      adult: 'IV Infusion: 2-10 mcg/min, titrate to heart rate.',
      pediatric: 'IV Infusion: 0.1-1 mcg/kg/min.'
    },
    safety: {
      adr: ['Tachycardia', 'Palpitations', 'Headache', 'Flushing'],
      contraindications: ['Tachyarrhythmias', 'Angina (may worsen ischemia)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['2mg/2ml injection'],
      dosageForms: ['Injection'],
      priceNPR: 'Variable',
      brandNames: ['Isoprel']
    },
    notes: ['Pure beta agonist (Beta 1 and 2). Chronotropic and inotropic effects with vasodilation.']
  },
  {
    id: 'cardio_031',
    genericName: 'Lignocaine (Lidocaine)',
    therapeuticClass: 'Antiarrhythmic (Class Ib)',
    categoryId: 'cardio',
    indications: ['Ventricular arrhythmias (VT/VF)', 'Palpitation'],
    dosing: {
      adult: 'IV: 1-1.5 mg/kg bolus, followed by infusion of 1-4 mg/min.',
      pediatric: 'IV: 1 mg/kg bolus, then infusion 20-50 mcg/kg/min.'
    },
    safety: {
      adr: ['CNS toxicity (confusion, seizures)', 'Hypotension', 'Bradycardia'],
      contraindications: ['Severe Stokes-Adams syndrome', 'Severe heart block'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['1% (10mg/ml) or 2% (20mg/ml) without epinephrine formulation for IV use'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 20-40',
      brandNames: ['Xylocard']
    },
    notes: ['Ensure formulation does NOT contain epinephrine when used for arrhythmias. Reduce dose in liver failure.']
  },
  {
    id: 'cardio_032',
    genericName: 'Lisinopril',
    therapeuticClass: 'ACE Inhibitor',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Heart Failure', 'Acute MI', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 5-40 mg OD.',
      pediatric: 'PO (Children > 6 yrs): 0.07 mg/kg (up to 5 mg) OD.'
    },
    safety: {
      adr: ['Dry cough', 'Hyperkalemia', 'Hypotension'],
      contraindications: ['History of angioedema', 'Bilateral renal artery stenosis', 'PREGNANCY'],
      pregnancyLactation: 'Category D. CONTRAINDICATED in pregnancy.'
    },
    pharmacy: {
      strengths: ['2.5mg', '5mg', '10mg'],
      dosageForms: ['Tablet'],
      priceNPR: '5mg tab: 2-4',
      brandNames: ['Listril', 'Lipril']
    },
    notes: ['Not metabolized by the liver (active drug itself). Long acting (OD dosing).']
  },
  {
    id: 'cardio_033',
    genericName: 'Labetalol',
    therapeuticClass: 'Alpha and Beta Blocker',
    categoryId: 'cardio',
    indications: ['Hypertension in Pregnancy', 'Hypertensive Emergency', 'High Blood Pressure'],
    dosing: {
      adult: 'PO: 100-400 mg BID. IV for emergency: 20 mg over 2 mins, then 40-80 mg every 10 mins (max 300 mg).',
      pediatric: 'IV: 0.2-1 mg/kg/dose.'
    },
    safety: {
      adr: ['Orthostatic hypotension', 'Bradycardia', 'Dizziness', 'Hepatotoxicity (rare)'],
      contraindications: ['Asthma', 'Heart failure', 'Severe bradycardia'],
      pregnancyLactation: 'Category C. Widely used safely for pre-eclampsia.'
    },
    pharmacy: {
      strengths: ['100mg tablet', '5mg/ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '100mg tab: 5-8',
      brandNames: ['Lobet']
    },
    notes: ['Preferred IV agent for hypertensive emergencies in pregnancy.']
  },
  {
    id: 'cardio_034',
    genericName: 'Hydralazine',
    therapeuticClass: 'Direct Vasodilator',
    categoryId: 'cardio',
    indications: ['Hypertension', 'Hypertensive Emergencies (especially in pregnancy)', 'Heart Failure'],
    dosing: {
      adult: 'PO: 10-50 mg QID. IV: 5-20 mg slow push.',
      pediatric: 'PO: 0.75-3 mg/kg/day divided.'
    },
    safety: {
      adr: ['Reflex tachycardia', 'Headache', 'Drug-induced lupus-like syndrome (with high doses)'],
      contraindications: ['Coronary artery disease', 'Mitral valvular rheumatic heart disease'],
      pregnancyLactation: 'Category C. Frequently used in pre-eclampsia.'
    },
    pharmacy: {
      strengths: ['25mg tablet', '20mg/ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Tab: Variable',
      brandNames: ['Apresoline (Imported)'],
    },
    notes: ['May be combined with isosorbide dinitrate for heart failure in specific populations.']
  },
  {
    id: 'cardio_035',
    genericName: 'Adrenaline (Epinephrine)',
    therapeuticClass: 'Adrenergic Agonist (Vasopressor / Inotrope)',
    categoryId: 'cardio',
    indications: ['Cardiac Arrest', 'Anaphylaxis', 'Severe Shock (Vasopressor)', 'Shock'],
    dosing: {
      adult: 'Cardiac Arrest: 1 mg IV Q3-5 mins. Anaphylaxis: 0.5 mg IM. IV Infusion for shock: 0.05-2 mcg/kg/min.',
      pediatric: 'Cardiac Arrest/Anaphylaxis/Shock IV Infusion: 0.01-0.1 mcg/kg/min (titrate). IM (Anaphylaxis): 0.01 mg/kg.'
    },
    safety: {
      adr: ['Tachyarrhythmias', 'Hypertension', 'Tissue ischemia', 'Hyperglycemia'],
      contraindications: ['None in life-threatening emergencies.'],
      pregnancyLactation: 'Category C. Used in emergencies if benefits outweigh risks.'
    },
    pharmacy: {
      strengths: ['1mg/ml (1:1000) ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Amp: 10-15',
      brandNames: ['Adr', 'Epin']
    },
    notes: ['Essential for life support. Note the concentration (1:1000 for IM anaphylaxis; 1:10000 for IV cardiac arrest).']
  },
  {
    id: 'cardio_036',
    genericName: 'Vasopressin',
    therapeuticClass: 'Antidiuretic Hormone Analogue / Vasopressor',
    categoryId: 'cardio',
    indications: ['Vasodilatory Shock (Sepsis - ADJUNCT)', 'Diabetes Insipidus', 'Gastrointestinal hemorrhage'],
    dosing: {
      adult: 'Shock: IV Infusion: 0.01-0.04 units/min. GI bleeding: 0.2-0.4 units/min.',
      pediatric: 'Shock IV Infusion: 0.0003 - 0.002 units/kg/min.'
    },
    safety: {
      adr: ['Ischemic skin lesions', 'Arrhythmias', 'Hyponatremia', 'Abdominal cramps'],
      contraindications: ['Chronic nephritis with nitrogen retention'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['20 units/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Amp: 300-500',
      brandNames: ['Pressin', 'Cpressin']
    },
    notes: ['Sepsis guidelines recommend adding vasopressin (up to 0.03 U/min) early to noradrenaline to raise MAP or decrease noradrenaline dose requirement.']
  },
  {
    id: 'cardio_037',
    genericName: 'Clopidogrel',
    therapeuticClass: 'Antiplatelet Agent (P2Y12 Inhibitor)',
    categoryId: 'cardio',
    indications: ['Acute Coronary Syndrome (ACS)', 'Recent MI', 'Stroke', 'Heart attack'],
    dosing: {
      adult: 'PO: Loading dose 300-600 mg, then 75 mg OD.',
      pediatric: 'PO (0-24 months): 0.2 mg/kg/day OD.'
    },
    safety: {
      adr: ['Bleeding', 'Bruising', 'Thrombotic thrombocytopenic purpura (TTP) - rare'],
      contraindications: ['Active pathological bleeding (e.g., peptic ulcer, intracranial hemorrhage)'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['75mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '75mg tab: 5-8',
      brandNames: ['Clopigrel', 'Clavix']
    },
    notes: ['Interaction with omeprazole (PPI) may reduce clopidogrel efficacy. Pantoprazole is preferred if PPI is needed.']
  }
];
