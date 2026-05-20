import { DrugEntry } from '../../types/formulary';

export const anesthesiaEmergency5Drugs: DrugEntry[] = [
  // 15.4 Emergency & Resuscitation Drugs - Vasopressors/Inotropes
  {
    id: 'emg_031',
    genericName: 'Noradrenaline (Norepinephrine)',
    therapeuticClass: 'Vasopressor (Alpha > Beta Agonist)',
    categoryId: 'anesthesia',
    indications: ['Septic Shock', 'Cardiogenic Shock', 'Severe Hypotension'],
    dosing: {
      adult: 'Infusion: 0.01 - 3 mcg/kg/min IV. Titrate to MAP > 65 mmHg.',
      pediatric: 'Infusion: 0.05 - 0.1 mcg/kg/min (Max usually 2 mcg/kg/min).'
    },
    safety: {
      adr: ['**Tissue necrosis (Extravasation)**', 'Digital/mesenteric ischemia', 'Arrhythmias'],
      contraindications: ['Hypovolemic shock (must replace fluids first)'],
      pregnancyLactation: 'Category C.'
    },
    concentrationAlert: 'Most ampoules are 2mg/ml or 1mg/ml. MUST be diluted appropriately before infusion.',
    pharmacy: {
      strengths: ['2mg/ml or 1mg/ml ampoules'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 80-150',
      brandNames: ['Norad', 'Vasonorm']
    },
    searchTags: ['Shock', 'Low BP', 'Sepsis', 'ICU'],
    notes: ['First-line vasopressor in Septic Shock. Administer via Central Venous Catheter if possible. If extravasation occurs, treat with Phentolamine.']
  },
  {
    id: 'emg_032',
    genericName: 'Dopamine',
    therapeuticClass: 'Inotrope / Vasopressor',
    categoryId: 'anesthesia',
    indications: ['Significant Hypotension (especially with bradycardia)', 'Cardiogenic shock'],
    dosing: {
      adult: 'Infusion: Renal dose (controversial) 1-3 mcg/kg/min. Inotropic: 5-10 mcg/kg/min. Vasopressor: 10-20 mcg/kg/min.',
      pediatric: 'Infusion: 2-20 mcg/kg/min.'
    },
    safety: {
      adr: ['Tachyarrhythmias', 'Extravasation necrosis'],
      contraindications: ['Tachyarrhythmias', 'Pheochromocytoma'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['200 mg/5ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 40-70',
      brandNames: ['Dopamin']
    },
    searchTags: ['Shock', 'Heart failure', 'Low BP'],
    notes: ['Largely replaced by Noradrenaline for septic shock due to higher arrhythmogenic risk with Dopamine.']
  },
  {
    id: 'emg_033',
    genericName: 'Dobutamine',
    therapeuticClass: 'Inotrope (Beta-1 Agonist)',
    categoryId: 'anesthesia',
    indications: ['Cardiogenic Shock', 'Severe Heart Failure'],
    dosing: {
      adult: 'Infusion: 2 - 20 mcg/kg/min IV.',
      pediatric: 'Infusion: 2 - 20 mcg/kg/min IV.'
    },
    safety: {
      adr: ['Tachycardia', 'Arrhythmias', 'Mild hypotension (vasodilatory effect)'],
      contraindications: ['Idiopathic hypertrophic subaortic stenosis (IHSS)'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['250 mg/20ml vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 100-150',
      brandNames: ['Dobutam', 'Cardiject']
    },
    searchTags: ['Heart failure', 'Inotrope', 'Shock'],
    notes: ['Unlike dopamine, it does NOT have alpha-1 vasoconstrictive properties. Used to "squeeze" the heart harder, not to clamp blood vessels.']
  },
  // Anti-arrhythmics
  {
    id: 'emg_034',
    genericName: 'Amiodarone',
    therapeuticClass: 'Class III Anti-arrhythmic',
    categoryId: 'anesthesia',
    indications: ['Ventricular Fibrillation (Cardiac arrest)', 'Pulseless VT', 'Stable VT', 'Atrial Fibrillation (rhythm control)'],
    dosing: {
      adult: 'Cardiac Arrest: 300 mg IV push, followed by 150 mg if needed. Stable: 150 mg over 10 mins, then 1 mg/min infusion.',
      pediatric: 'Cardiac Arrest: 5 mg/kg IV push (max 300 mg/dose).'
    },
    safety: {
      adr: ['Hypotension', 'Bradycardia', 'Pulmonary fibrosis (long-term)', 'Thyroid dysfunction (long-term)', 'Phlebitis'],
      contraindications: ['Severe sinus node dysfunction', '2nd/3rd degree heart block (without pacemaker)'],
      pregnancyLactation: 'Category D.'
    },
    concentrationAlert: 'Standard is 150 mg/3ml ampoule.',
    pharmacy: {
      strengths: ['150 mg/3ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 80-120',
      brandNames: ['Cordarone', 'Aldarone']
    },
    searchTags: ['Cardiac Arrest', 'Arrhythmia', 'CPR', 'VT'],
    notes: ['Use with D5W if given as an infusion (precipitates in normal saline in some formulations; check local brand).']
  },
  {
    id: 'emg_035',
    genericName: 'Adenosine',
    therapeuticClass: 'Anti-arrhythmic (Unclassified)',
    categoryId: 'anesthesia',
    indications: ['SVT (Supraventricular Tachycardia)'],
    dosing: {
      adult: 'SVT: 6 mg RAPID IV push, followed by 20ml NS flush. If no conversion, give 12 mg. May repeat 12 mg once more.',
      pediatric: 'SVT: 0.1 mg/kg RAPID IV push (max 6 mg). Second dose: 0.2 mg/kg (max 12 mg).'
    },
    safety: {
      adr: ['Feeling of impending doom', 'Chest chest', 'Transient asystole', 'Flushing'],
      contraindications: ['2nd/3rd degree AV block', 'Sick sinus syndrome', 'Asthma (can cause bronchospasm)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['6 mg/2ml ampoule', '3 mg/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 150-250',
      brandNames: ['Adenocor', 'Adend']
    },
    searchTags: ['SVT', 'Tachycardia', 'Heart rate'],
    notes: ['Extremely short half-life (< 10 seconds). MUST be given very rapidly via a proximal IV site with a large saline flush immediately after. Warn the patient about the temporary feeling of "dying".']
  },
  {
    id: 'emg_036',
    genericName: 'Digoxin',
    therapeuticClass: 'Cardiac Glycoside / Anti-arrhythmic',
    categoryId: 'anesthesia',
    indications: ['Atrial Fibrillation with Rapid Ventricular Response', 'Heart Failure'],
    dosing: {
      adult: 'Loading IV: 0.5 - 1 mg given in divided doses (e.g., 0.5 mg, then 0.25 mg q6h x2). Maintenance: 0.125 - 0.25 mg PO daily.',
      pediatric: 'Total Digitalizing Dose (TDD) varies by age (e.g., 10-20 mcg/kg IV for >10 yrs). Consult local guidelines.'
    },
    safety: {
      adr: ['Arrhythmias (especially with hypokalemia)', 'Nausea/Vomiting', 'Visual disturbances (yellow halos)'],
      contraindications: ['Ventricular fibrillation', 'Hypokalemia predisposes to toxicity'],
      pregnancyLactation: 'Category C.'
    },
    concentrationAlert: 'Toxicity risk is HIGH. 0.5 mg/2ml ampoule (250 mcg/ml).',
    pharmacy: {
      strengths: ['0.5 mg/2ml ampoule', '0.25 mg tablet'],
      dosageForms: ['Injection', 'Tablet'],
      priceNPR: 'Ampoule: 20-40',
      brandNames: ['Lanoxin', 'Digoxin']
    },
    searchTags: ['Atrial Fibrillation', 'AFib', 'Heart Failure'],
    notes: ['Toxicity risk increases drastically with hypokalemia. Manage toxicity with Digoxin Immune Fab (rare in Nepal) or supportive care/Potassium correction.']
  },
  {
    id: 'emg_037',
    genericName: 'Magnesium Sulfate',
    therapeuticClass: 'Electrolyte Supplement / Anti-arrhythmic / Anticonvulsant',
    categoryId: 'anesthesia',
    indications: ['Torsades de Pointes', 'Eclampsia / Severe Pre-eclampsia', 'Severe Acute Asthma', 'Hypomagnesemia'],
    dosing: {
      adult: 'Torsades: 1-2 g IV slow over 5-15 mins. Eclampsia: 4 g IV loading over 15-20 min, then 1 g/hr infusion. Asthma: 1.2-2 g IV over 20 min.',
      pediatric: 'Pulseless VT/Torsades or typical asthma dose: 25-50 mg/kg IV (max 2 g).'
    },
    safety: {
      adr: ['Loss of deep tendon reflexes (early toxicity)', 'Respiratory depression', 'Flushing/Sweating', 'Hypotension'],
      contraindications: ['Myasthenia gravis', 'Heart block'],
      pregnancyLactation: 'Category D. Used for Eclampsia definitively.'
    },
    concentrationAlert: 'Typically available as 50% solution in 2ml or 10ml ampoules. VERY IMPORTANT to know the gram amount (50% = 500 mg/ml).',
    pharmacy: {
      strengths: ['50% ampoule (2 ml = 1 g, or 10 ml = 5 g)'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: ~25-50',
      brandNames: ['MagSulf']
    },
    searchTags: ['Torsades', 'Asthma', 'Eclampsia', 'Seizure'],
    notes: ['Antidote for Magnesium toxicity is Calcium Gluconate. Always check Deep Tendon Reflexes before giving maintenance doses.']
  }
];
