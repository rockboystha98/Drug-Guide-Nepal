import { DrugEntry } from '../../types/formulary';

export const anesthesiaEmergency2Drugs: DrugEntry[] = [
  // Antidotes / Toxicology
  {
    id: 'emg_010',
    genericName: 'N-Acetylcysteine (NAC)',
    therapeuticClass: 'Antidote / Mucolytic',
    categoryId: 'anesthesia',
    indications: ['Paracetamol (Acetaminophen) Poisoning', 'Mucolytic (rarely used IV for this)'],
    dosing: {
      adult: '21-hour IV protocol: 150 mg/kg over 1 hr, then 50 mg/kg over 4 hrs, then 100 mg/kg over 16 hrs. (Or oral protocol: 140 mg/kg loading, then 70 mg/kg q4h for 17 doses).',
      pediatric: 'Same weight-based protocol.'
    },
    safety: {
      adr: ['Anaphylactoid reactions (rash, wheezing) especially with IV loading dose', 'Nausea/Vomiting'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category B. Essential to prevent maternal/fetal hepatic failure.'
    },
    pharmacy: {
      strengths: ['200mg/ml (10ml or 25ml ampoule/vial)'],
      dosageForms: ['Injection', 'Oral Sachet'],
      priceNPR: 'Ampoule: 200-400',
      brandNames: ['Mucomix', 'Mucinac']
    },
    notes: ['In Paracetamol overdose, start NAC if serum level crosses the Rumack-Matthew nomogram line, or empirically if >150 mg/kg ingested and levels unavailable within 8 hrs. Treat anaphylactoid rash with antihistamines; do not stop NAC unless severe.']
  },
  {
    id: 'emg_011',
    genericName: 'Flumazenil',
    therapeuticClass: 'Benzodiazepine Antagonist',
    categoryId: 'anesthesia',
    indications: ['Benzodiazepine Overdose / Reversal of conscious sedation'],
    dosing: {
      adult: '0.2 mg IV over 30 seconds. If no response expected level of consciousness, titrate up to 1-3 mg total (0.3 mg-0.5 mg increments every minute).',
      pediatric: '0.01 mg/kg IV (max 0.2 mg) initial dose.'
    },
    safety: {
      adr: ['**Seizures** (especially in chronic BZD users or mixed TCA overdose)', 'Agitation', 'Withdrawal'],
      contraindications: ['Chronic benzodiazepine dependence', 'Co-ingestion of seizure-inducing drugs (e.g., TCAs)', 'Patients given BZDs for control of life-threatening conditions (e.g., status epilepticus)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['0.1mg/ml (5ml ampoule)'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: ~500-1000',
      brandNames: ['Flumed', 'Anexate']
    },
    notes: ['**USE WITH EXTREME CAUTION.** Seldom used in routine ODs because supportive care (ventilation) is safer than the risk of intractable flumazenil-induced seizures.']
  },
  {
    id: 'emg_012',
    genericName: 'Sodium Bicarbonate (IV)',
    therapeuticClass: 'Alkalinizing Agent',
    categoryId: 'anesthesia',
    indications: ['Tricyclic Antidepressant (TCA) cardiotoxicity (wide QRS)', 'Salicylate (Aspirin) poisoning (alkaline diuresis)', 'Barbiturate poisoning', 'Severe metabolic acidosis', 'Hyperkalemia'],
    dosing: {
      adult: 'TCA OD (QRS > 100ms): 1-2 mEq/kg IV bolus, repeat to narrow QRS, followed by infusion. Salicylate/Barbiturate: 1-2 mEq/kg bolus, then infusion of 150 mEq in 1L D5W at 200 ml/hr aiming for urine pH > 7.5.',
      pediatric: '1-2 mEq/kg IV.'
    },
    safety: {
      adr: ['Hypernatremia', 'Hypokalemia', 'Fluid overload', 'Rebound alkalosis'],
      contraindications: ['Metabolic/Respiratory Alkalosis', 'Hypocalcemia', 'Hypernatremia'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['7.5% (0.83 mEq/ml) or 8.4% (1 mEq/ml) 10ml ampoules or 100ml bottles'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule/Bottle: ~50-200',
      brandNames: ['Sodabicarb']
    },
    notes: ['In TCA overdose, Bicarbonate works by overcoming sodium channel blockade (sodium load) and altering protein binding (pH effect). Must monitor serum K+ closely.']
  },
  {
    id: 'emg_013',
    genericName: 'Activated Charcoal',
    therapeuticClass: 'Gastrointestinal Decontaminant',
    categoryId: 'anesthesia',
    indications: ['General poisonings to prevent GI absorption (Carbamate, Aspirin, Barbiturates, TCA, etc.)'],
    dosing: {
      adult: '50-100 g PO or via NG tube (mix with water to form slurry).',
      pediatric: '1 g/kg PO or via NG tube (max 50g).'
    },
    safety: {
      adr: ['Vomiting', 'Constipation', 'Bowel obstruction (with multiple doses)'],
      contraindications: ['Unprotected airway (Risk of fatal pneumonitis if aspirated)', 'Ingestion of Corrosives, Hydrocarbons (Kerosene), Alcohols, Metals (Iron/Lithium) - Charcoal does not bind these.'],
      pregnancyLactation: 'Category C. Safe if indicated.'
    },
    pharmacy: {
      strengths: ['50g/100g powder/granules'],
      dosageForms: ['Powder for Suspension'],
      priceNPR: 'Bottle: ~200-400',
      brandNames: ['Carbomix']
    },
    notes: ['Most effective if given within 1 hour of ingestion. Protect the airway BEFORE administration in a drowsy patient (Intubate first).']
  },
  {
    id: 'emg_014',
    genericName: 'Fomepizole',
    therapeuticClass: 'Alcohol Dehydrogenase Inhibitor',
    categoryId: 'anesthesia',
    indications: ['Methanol Poisoning', 'Ethylene Glycol Poisoning'],
    dosing: {
      adult: 'Loading: 15 mg/kg IV over 30 mins. Maintenance: 10 mg/kg IV every 12 hrs for 4 doses, then 15 mg/kg every 12 hrs until levels are negligible.',
      pediatric: 'Same as adult.'
    },
    safety: {
      adr: ['Headache', 'Nausea', 'Dizziness'],
      contraindications: ['Hypersensitivity to fomepizole or pyrazoles'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1g vial (rare/expensive in Nepal, Ethanol IV/PO often used instead)'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: Highly variable, often >10,000',
      brandNames: ['Antizol']
    },
    notes: ['If unavailable, Pharmaceutical/Commercial Ethanol (Vodka/Whisky or IV sterile formulation if available) is used to maintain a target serum ethanol level of 100 mg/dL to competitively inhibit alcohol dehydrogenase.']
  },
  {
    id: 'emg_015',
    genericName: 'Physostigmine',
    therapeuticClass: 'Reversible Cholinesterase Inhibitor',
    categoryId: 'anesthesia',
    indications: ['Severe Anticholinergic Toxicity (e.g., Atropine, Belladonna/Datura poisoning) presenting with severe delirium or hyperthermia'],
    dosing: {
      adult: '0.5 to 2 mg IV slow push. May repeat every 10-30 mins if needed.',
      pediatric: '0.02 mg/kg IV slow push (max 0.5 mg/dose).'
    },
    safety: {
      adr: ['Bradycardia', 'Seizures', 'Bronchorrhea', 'Cholinergic crisis'],
      contraindications: ['TCA overdose (can cause asystole)', 'Asthma/COPD', 'Intestinal obstruction'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1mg/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Provided by special hospital supply',
      brandNames: ['Antilirium']
    },
    notes: ['Rarely used due to narrow therapeutic index and risk of severe bradycardia. ECG must be checked to rule out TCA overdose (wide QRS) BEFORE giving Physostigmine.']
  }
];
