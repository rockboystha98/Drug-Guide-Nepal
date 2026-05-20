import { DrugEntry } from '../../types/formulary';

export const anesthesiaEmergency4Drugs: DrugEntry[] = [
  // 15.3 Neuromuscular Blockers (Non-depolarizing)
  {
    id: 'ane_024',
    genericName: 'Vecuronium',
    therapeuticClass: 'Non-depolarizing Neuromuscular Blocker',
    categoryId: 'anesthesia',
    indications: ['Muscle relaxation during general anesthesia', 'Facilitation of intubation', 'Mechanical ventilation'],
    dosing: {
      adult: 'Intubation: 0.08 - 0.1 mg/kg IV. Maintenance: 0.01 - 0.02 mg/kg per dose.',
      pediatric: 'Intubation: 0.1 mg/kg IV.'
    },
    safety: {
      adr: ['**Apnea**', 'Prolonged neuromuscular block', 'Histamine release (rare)'],
      contraindications: ['Lack of ventilatory support'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['4 mg or 10 mg vial (lyophilized powder + solvent)'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 120-200',
      brandNames: ['Norcuron', 'Vecuronium']
    },
    searchTags: ['Operation', 'Muscle relaxant', 'Paralytic'],
    notes: ['Metabolized by liver and excreted in bile/kidney. Intermediate duration (20-40 min). Must have emergency airway equipment ready.']
  },
  {
    id: 'ane_025',
    genericName: 'Rocuronium',
    therapeuticClass: 'Non-depolarizing Neuromuscular Blocker',
    categoryId: 'anesthesia',
    indications: ['Rapid Sequence Intubation (RSI) alternative to succinylcholine', 'Muscle relaxation during general anesthesia'],
    dosing: {
      adult: 'Intubation (RSI): 0.9 - 1.2 mg/kg IV. Standard Induction: 0.6 mg/kg.',
      pediatric: 'Intubation: 0.6 mg/kg IV.'
    },
    safety: {
      adr: ['**Apnea**', 'Pain on injection', 'Anaphylaxis'],
      contraindications: ['Lack of ventilatory support'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['50 mg/5ml vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 250-400',
      brandNames: ['Esmeron', 'Rocunium']
    },
    searchTags: ['Operation', 'Muscle relaxant', 'RSI', 'Paralytic'],
    notes: ['Fastest onset of all non-depolarizers (60-90 seconds at 0.9 mg/kg). Reversed specifically by Sugammadex or generally by Neostigmine.']
  },
  {
    id: 'ane_026',
    genericName: 'Pancuronium',
    therapeuticClass: 'Non-depolarizing Neuromuscular Blocker',
    categoryId: 'anesthesia',
    indications: ['Long-duration muscle relaxation during general anesthesia'],
    dosing: {
      adult: 'Intubation: 0.06 - 0.1 mg/kg IV. Maintenance: 0.01 - 0.02 mg/kg.',
      pediatric: 'Intubation: 0.06 - 0.1 mg/kg IV.'
    },
    safety: {
      adr: ['**Apnea**', 'Tachycardia (vagolytic effect)', 'Prolonged block'],
      contraindications: ['Renal failure (relies on renal excretion)', 'Tachycardia (relative)'] ,
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['4 mg/2ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 40-70',
      brandNames: ['Pavulon', 'Pancuronium']
    },
    searchTags: ['Operation', 'Muscle relaxant', 'Paralytic'],
    notes: ['Long-acting agent (60-120 min). Rarely used for routine cases now due to prolonged duration, mostly used in cardiac surgery or long ICU ventilation.']
  },
  // 15.5 Anticholinesterase / Reversal Agents
  {
    id: 'ane_027',
    genericName: 'Neostigmine',
    therapeuticClass: 'Acetylcholinesterase Inhibitor',
    categoryId: 'anesthesia',
    indications: ['Reversal of non-depolarizing neuromuscular blockade', 'Myasthenia gravis'],
    dosing: {
      adult: 'Reversal: 0.04 - 0.07 mg/kg IV (Max 5 mg).',
      pediatric: 'Reversal: 0.03 - 0.07 mg/kg IV.'
    },
    safety: {
      adr: ['Severe bradycardia', 'Bronchospasm', 'Increased salivation', 'Abdominal cramps'],
      contraindications: ['Intestinal/urinary obstruction', 'Asthma (relative due to bronchospasm)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['0.5 mg/ml or 2.5 mg/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 15-30',
      brandNames: ['Prostigmin', 'Neostig']
    },
    searchTags: ['Reversal', 'Operation', 'Anesthesia'],
    notes: ['MUST be co-administered with an anticholinergic (Atropine or Glycopyrrolate) to prevent severe bradycardia and cholinergic crisis.']
  },
  {
    id: 'ane_028',
    genericName: 'Glycopyrrolate',
    therapeuticClass: 'Anticholinergic',
    categoryId: 'anesthesia',
    indications: ['Co-administered with Neostigmine for reversal', 'Pre-medication to reduce secretions'],
    dosing: {
      adult: 'Reversal: 0.01 - 0.02 mg/kg IV (typically paired 1mg Neostigmine to 0.2mg Glycopyrrolate). Pre-med: 0.2 mg IM/IV.',
      pediatric: 'Reversal: 0.01 mg/kg IV.'
    },
    safety: {
      adr: ['Tachycardia', 'Dry mouth', 'Urinary retention'],
      contraindications: ['Glaucoma', 'Urinary retention'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['0.2 mg/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 20-40',
      brandNames: ['Pyrolate']
    },
    searchTags: ['Reversal', 'Secretions', 'Operation'],
    notes: ['Preferred over Atropine for reversal as it does not cross the blood-brain barrier (less delirium) and causes less tachycardia.']
  },
  // 15.3 Preanaesthetic Benzodiazepines & Opioids
  {
    id: 'ane_029',
    genericName: 'Midazolam',
    therapeuticClass: 'Benzodiazepine (Short-acting)',
    categoryId: 'anesthesia',
    indications: ['Pre-anesthetic medication', 'Procedural sedation', 'Induction of anesthesia'],
    dosing: {
      adult: 'Pre-med: 1-2 mg IV titrated. Induction: 0.1-0.2 mg/kg.',
      pediatric: 'Pre-med: 0.5 mg/kg PO (syrup target) or 0.1 mg/kg IV.'
    },
    safety: {
      adr: ['**Respiratory depression / Apnea**', 'Hypotension', 'Paradoxical agitation'],
      contraindications: ['Acute narrow-angle glaucoma', 'Shock/Coma'],
      pregnancyLactation: 'Category D.'
    },
    pharmacy: {
      strengths: ['1 mg/ml (5ml) ampoule', '5 mg/ml (1ml) ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 30-50',
      brandNames: ['Midaz', 'Fulsed']
    },
    searchTags: ['Sedation', 'Anesthesia', 'Seizure'],
    notes: ['Highly potent and acts fast. Must have airway support ready. Can be reversed by Flumazenil.']
  },
  {
    id: 'ane_030',
    genericName: 'Fentanyl',
    therapeuticClass: 'Opioid Analgesic (Strong)',
    categoryId: 'anesthesia',
    indications: ['Analgesia during anesthesia', 'Post-operative pain', 'Procedural sedation'],
    dosing: {
      adult: 'Analgesic adjunct: 1-2 mcg/kg IV. Induction (cardiac): 5-20 mcg/kg.',
      pediatric: 'Analgesia/Sedation: 1-2 mcg/kg IV.'
    },
    safety: {
      adr: ['**Severe respiratory depression**', 'Chest wall rigidity (if pushed rapidly)', 'Bradycardia'],
      contraindications: ['Unmonitored settings without ventilatory support'],
      pregnancyLactation: 'Category C.'
    },
    concentrationAlert: 'Standard is 50 mcg/ml (0.05 mg/ml). Always dose in MICROGRAMS.',
    pharmacy: {
      strengths: ['50 mcg/ml (2ml or 10ml ampoule/vial)'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 40-70',
      brandNames: ['Fent', 'Trofen']
    },
    searchTags: ['Pain', 'Anesthesia', 'Operation'],
    notes: ['100x more potent than Morphine. Very rapid onset. Chest wall rigidity treated with neuromuscular blockers.']
  }
];
