import { DrugEntry } from '../../types/formulary';

export const anesthesiaEmergencyDrugs: DrugEntry[] = [
  // EMERGENCY RESUSCITATION / ANTIDOTES
  {
    id: 'emg_001',
    genericName: 'Adrenaline (Epinephrine)',
    therapeuticClass: 'Sympathomimetic (Alpha/Beta Agonist)',
    categoryId: 'anesthesia',
    indications: ['Anaphylaxis', 'Cardiac Arrest', 'Severe Asthma', 'Sepsis (Vasopressor)'],
    dosing: {
      adult: 'Anaphylaxis: 0.5 mg IM (1:1000). Cardiac Arrest: 1 mg IV push Q3-5 mins (1:10,000). Sepsis: 0.05-0.5 mcg/kg/min IV infusion.',
      pediatric: 'Anaphylaxis: 0.01 mg/kg IM (Max 0.5 mg). Cardiac Arrest: 0.01 mg/kg IV (0.1 ml/kg of 1:10,000 solution).'
    },
    safety: {
      adr: ['Tachycardia', 'Arrhythmia', 'Hypertension', 'Anxiety', 'Tremor'],
      contraindications: ['None in life-threatening emergency'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1mg/ml (1:1000) ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 10-25',
      brandNames: ['Adrin', 'Epi']
    },
    concentrationAlert: 'Adrenaline 1mg/ml (1:1000) vs 1:10,000 for cardiac arrest.',
    notes: ['CRITICAL SAFETY WARNING: IM Adrenaline (1:1000) for Anaphylaxis in the anterolateral thigh. IV Adrenaline push (1:10,000 dilution) is for Cardiac Arrest ONLY.'],
    searchTags: ['Shock', 'Heart stopped', 'Anaphylaxis', 'Emergency', 'CPR']
  },
  {
    id: 'emg_002',
    genericName: 'Atropine',
    therapeuticClass: 'Anticholinergic',
    categoryId: 'anesthesia',
    indications: ['Symptomatic Bradycardia', 'Organophosphate Poisoning (OPP)', 'Pre-anesthetic medication', 'Poisoning'],
    dosing: {
      adult: 'Bradycardia: 0.5 mg IV Q3-5 mins (Max 3mg). OPP: 1-2 mg IV every 5-10 mins until atropinization (clear chest, dry mouth, HR >80).',
      pediatric: 'Bradycardia: 0.02 mg/kg IV (Min dose 0.1 mg). OPP: 0.02-0.05 mg/kg.'
    },
    safety: {
      adr: ['Tachycardia', 'Dry mouth', 'Blurred vision', 'Urinary retention', 'Delirium'],
      contraindications: ['Glaucoma (relative)', 'Urinary tract obstruction'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['0.6mg/ml ampoule', '1mg/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 8-15',
      brandNames: ['Atropine Inj']
    },
    notes: ['In OPP, maintain atropinization infusion for 3-5 days. Do not stop abruptly. Pupil dilation is NOT a reliable early sign of atropinization.']
  },
  {
    id: 'emg_003',
    genericName: 'Naloxone',
    therapeuticClass: 'Opioid Antagonist',
    categoryId: 'anesthesia',
    indications: ['Opioid Overdose', 'Reversal of opioid-induced respiratory depression', 'Poisoning'],
    dosing: {
      adult: 'IV/IM/SC: 0.4 - 2 mg Q2-3 mins. If no response after 10 mg, question diagnosis of opioid toxicity.',
      pediatric: 'IV/IM/SC: 0.01 mg/kg (can repeat). If no response, use 0.1 mg/kg.'
    },
    safety: {
      adr: ['Acute opioid withdrawal (agitation, tachycardia, hypertension, seizures)', 'Pulmonary edema'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C. Can precipitate fetal withdrawal.'
    },
    pharmacy: {
      strengths: ['0.4mg/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 150-250',
      brandNames: ['Nalox']
    },
    notes: ['Half-life of Naloxone (30-80 mins) is much SHORTER than most opioids. Patient may relapse into coma and need repeat dosing or continuous IV infusion.']
  },
  {
    id: 'emg_004',
    genericName: 'Calcium Gluconate',
    therapeuticClass: 'Calcium Salt / Antidote',
    categoryId: 'anesthesia',
    indications: ['Hyperkalemia with ECG changes (Cardioprotection)', 'Magnesium Sulfate Toxicity', 'Hypocalcemia', 'Poisoning'],
    dosing: {
      adult: 'Hyperkalemia/Mg toxicity: 10ml of 10% solution slow IV over 2-5 mins.',
      pediatric: 'IV: 0.5-1 ml/kg of 10% solution slow IV.'
    },
    safety: {
      adr: ['Severe bradycardia or asystole if pushed too fast', 'Local necrosis if extravasation occurs'],
      contraindications: ['Digoxin toxicity (use extreme caution/avoid if possible)', 'Ventricular fibrillation'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10% Ampoule (10ml)'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 25-45',
      brandNames: ['CalGlu']
    },
    notes: ['In Hyperkalemia, Calcium does NOT lower serum potassium levels; it only stabilizes the cardiac membrane.']
  },
  {
    id: 'emg_005',
    genericName: 'Pralidoxime (PAM)',
    therapeuticClass: 'Cholinesterase Reactivator',
    categoryId: 'anesthesia',
    indications: ['Organophosphate Poisoning (OPP)', 'Poisoning'],
    dosing: {
      adult: 'IV: 1-2 g infused over 15-30 mins, then maintenance infusion of 500 mg/hr.',
      pediatric: 'IV: 20-50 mg/kg loading over 15-30 mins, then 10-20 mg/kg/hr infusion.'
    },
    safety: {
      adr: ['Tachycardia', 'Muscle rigidity (if infused too fast)', 'Dizziness'],
      contraindications: ['Carbamate poisoning (relative - usually unneeded)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['500mg/20ml ampoule', '1g vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 250-400',
      brandNames: ['A-PAM', 'Neopam']
    },
    notes: ['Must be given early (within 48 hours ideally) before enzyme "aging" occurs. Does not replace the need for Atropine.']
  },
  // ANAESTHETICS (INDUCTION & MAINTENANCE)
  {
    id: 'ane_006',
    genericName: 'Propofol',
    therapeuticClass: 'Intravenous General Anesthetic',
    categoryId: 'anesthesia',
    indications: ['Induction/Maintenance of Anesthesia', 'Sedation in ICU', 'Surgery'],
    dosing: {
      adult: 'Induction IV: 1.5 - 2.5 mg/kg (titrated). Maintenance infusion: 4-12 mg/kg/hr.',
      pediatric: 'Induction >3 yrs: 2.5 - 3.5 mg/kg.'
    },
    safety: {
      adr: ['Hypotension', 'Apnea', 'Pain on injection', 'Propofol Infusion Syndrome (PRIS) with prolonged high dose'],
      contraindications: ['Hypersensitivity to egg or soy (lipid vehicle)'],
      pregnancyLactation: 'Category B. Safe but crosses placenta (can cause neonatal depression).'
    },
    pharmacy: {
      strengths: ['1% (10mg/ml) ampoule/vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 200-300',
      brandNames: ['Diprivan', 'Profol']
    },
    notes: ['Lacks analgesic properties; must be combined with an opioid/analgesic for painful procedures.']
  },
  {
    id: 'ane_007',
    genericName: 'Ketamine',
    therapeuticClass: 'Dissociative Anesthetic',
    categoryId: 'anesthesia',
    indications: ['Induction of Anesthesia (especially in hemodynamically unstable/asthmatic patients)', 'Procedural Sedation', 'Surgery'],
    dosing: {
      adult: 'Induction IV: 1-2 mg/kg. IM: 5-10 mg/kg.',
      pediatric: 'Induction IV: 1-2 mg/kg. IM: 4-5 mg/kg.'
    },
    safety: {
      adr: ['Emergence delirium/hallucinations', 'Hypertension', 'Tachycardia', 'Increased salivation'],
      contraindications: ['Conditions where significant elevated BP is hazardous (e.g., severe uncontrolled HTN, ruptured aneurysm)', 'Elevated ICP (historical relative CI)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg/ml vial', '50mg/ml vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 100-200',
      brandNames: ['Ketmin', 'Aneket']
    },
    notes: ['Maintains respiratory drive and increases heart rate/BP, making it ideal for severe trauma/shock. Often co-administered with midazolam to reduce emergence delirium.']
  },
  // MUSCLE RELAXANTS (PARALYTICS)
  {
    id: 'ane_008',
    genericName: 'Succinylcholine (Suxamethonium)',
    therapeuticClass: 'Depolarizing Neuromuscular Blocker',
    categoryId: 'anesthesia',
    indications: ['Rapid Sequence Intubation (RSI)', 'Surgery'],
    dosing: {
      adult: 'IV: 1-1.5 mg/kg. (Onset: 30-60 secs. Duration: 5-10 mins).',
      pediatric: 'IV (Infants/Small children): 2 mg/kg.'
    },
    safety: {
      adr: ['Hyperkalemia', 'Malignant hyperthermia', 'Bradycardia', 'Fasciculations', 'Increased ICP/IOP'],
      contraindications: ['Burns > 24h old', 'Crush injuries', 'Severe hyperkalemia', 'History of Malignant Hyperthermia', 'Myopathies'],
      pregnancyLactation: 'Category C. Used safely.'
    },
    pharmacy: {
      strengths: ['50mg/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 40-70',
      brandNames: ['Scoline']
    },
    notes: ['Causes a transient MUST-KNOW rise in serum potassium. Absolutely contraindicated in significant burn/crush victims due to risk of fatal hyperkalemia cardiac arrest.']
  },
  // LOCAL ANAESTHETICS
  {
    id: 'ane_009',
    genericName: 'Lignocaine (Lidocaine)',
    therapeuticClass: 'Local Anesthetic (Amide) / Class 1B Anti-arrhythmic',
    categoryId: 'anesthesia',
    indications: ['Local/Regional Infiltration Anesthesia', 'Ventricular Arrhythmias', 'Surgery'],
    dosing: {
      adult: 'Local: Plain: Max 4.5 mg/kg (or 300mg total). With Adrenaline: Max 7 mg/kg (or 500mg total).',
      pediatric: 'Local Plain: Max 3-4 mg/kg.'
    },
    safety: {
      adr: ['Local Anesthetic Systemic Toxicity (LAST): Perioral numbness, tinnitus, seizures, cardiovascular collapse'],
      contraindications: ['Heart block', 'Adam-Stokes syndrome'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['2% plain vial', '2% with Adrenaline (1:200,000)', '4% Topical', '2% Jelly'],
      dosageForms: ['Injection', 'Jelly', 'Topical Spray'],
      priceNPR: 'Vial: 30-60',
      brandNames: ['Lox', 'Xylocaine']
    },
    notes: ['NEVER use Lignocaine WITH Adrenaline on terminal appendages (fingers, toes, nose, penis, earlobes) due to risk of ischemic necrosis.']
  }
];
