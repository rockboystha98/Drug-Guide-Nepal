import { DrugEntry } from '../../types/formulary';

export const anesthesiaEmergency3Drugs: DrugEntry[] = [
  // 15.1 General Anaesthetics - Inhalational
  {
    id: 'ane_016',
    genericName: 'Halothane',
    therapeuticClass: 'Inhalational Anesthetic',
    categoryId: 'anesthesia',
    indications: ['Induction of anesthesia', 'Maintenance of anesthesia'],
    dosing: {
      adult: 'Inhalation, delivered via properly calibrated vaporizer. Induction: 1-4%. Maintenance: 0.5-2%.',
      pediatric: 'Inhalation: Induction 1-4%. Maintenance 0.5-2%.'
    },
    safety: {
      adr: ['Hepatotoxicity (Halothane hepatitis)', 'Arrhythmias', '**Malignant Hyperthermia**', 'Hypotension'],
      contraindications: ['Family history of Malignant Hyperthermia', 'History of unexplained jaundice/fever after previous halothane exposure'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['250 ml volatile liquid in amber bottle'],
      dosageForms: ['Inhalation Liquid'],
      priceNPR: 'Bottle: 800-1200',
      brandNames: ['Halothane']
    },
    searchTags: ['Operation', 'Anesthesia', 'Inhalational'],
    notes: ['Sensitizes the myocardium to catecholamines (avoid adrenaline use if possible).']
  },
  {
    id: 'ane_017',
    genericName: 'Isoflurane',
    therapeuticClass: 'Inhalational Anesthetic',
    categoryId: 'anesthesia',
    indications: ['Induction and Maintenance of anesthesia'],
    dosing: {
      adult: 'Inhalation: Delivered via vaporizer. Induction: 1.5-3%. Maintenance: 1-2.5%.',
      pediatric: 'Inhalation: Induction and maintenance via calibrated vaporizer.'
    },
    safety: {
      adr: ['**Malignant Hyperthermia**', 'Respiratory depression', 'Hypotension', 'Cough/Airway irritation'],
      contraindications: ['History of Malignant Hyperthermia'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['100 ml or 250 ml volatile liquid'],
      dosageForms: ['Inhalation Liquid'],
      priceNPR: 'Bottle: 2000-3500',
      brandNames: ['Isoflurane', 'Forane']
    },
    searchTags: ['Operation', 'Anesthesia', 'Inhalational'],
    notes: ['Less myocardial depression and arrhythmias compared to halothane. Pungent odor limits its use for gas induction in children.']
  },
  {
    id: 'ane_018',
    genericName: 'Sevoflurane',
    therapeuticClass: 'Inhalational Anesthetic',
    categoryId: 'anesthesia',
    indications: ['Induction and Maintenance of anesthesia'],
    dosing: {
      adult: 'Inhalation: Induction: up to 5%. Maintenance: 0.5-3%.',
      pediatric: 'Inhalation: Induction: up to 7%. Maintenance: 0.5-3%.'
    },
    safety: {
      adr: ['**Malignant Hyperthermia**', 'Emergence agitation (especially in children)', 'Post-operative nausea and vomiting'],
      contraindications: ['History of Malignant Hyperthermia'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['250 ml volatile liquid'],
      dosageForms: ['Inhalation Liquid'],
      priceNPR: 'Bottle: 5000-8000',
      brandNames: ['Sevorane']
    },
    searchTags: ['Operation', 'Anesthesia', 'Inhalational'],
    notes: ['Sweet smelling and non-irritating to airways; excellent for inhalational induction in pediatric patients.']
  },
  {
    id: 'ane_019',
    genericName: 'Nitrous Oxide',
    therapeuticClass: 'Inhalational Anesthetic / Analgesic',
    categoryId: 'anesthesia',
    indications: ['Maintenance of anesthesia (adjunct)', 'Analgesia (e.g. obstetrics, dental)'],
    dosing: {
      adult: 'Inhalation: 50-70% mixed with at least 30% Oxygen.',
      pediatric: 'Inhalation: 50-70% mixed with at least 30% Oxygen.'
    },
    safety: {
      adr: ['Expansion of air-filled spaces (pneumothorax, bowel obstruction)', 'Diffusion hypoxia (if 100% O2 not given at end)', 'Vitamin B12 inactivation (with prolonged use)'],
      contraindications: ['Pneumothorax', 'Bowel obstruction', 'Middle ear surgery', 'Severe head injury'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['Medical gas cylinders'],
      dosageForms: ['Gas'],
      priceNPR: 'Cylinder refill: varies',
      brandNames: ['Nitrous Oxide']
    },
    searchTags: ['Operation', 'Anesthesia', 'Inhalational', 'Gas'],
    notes: ['Must ALWAYS be delivered with oxygen. Second-gas effect speeds uptake of other volatile anesthetics.']
  },
  // 15.1 General Anaesthetics - Intravenous
  {
    id: 'ane_020',
    genericName: 'Thiopental Sodium',
    therapeuticClass: 'Barbiturate / Intravenous Anesthetic',
    categoryId: 'anesthesia',
    indications: ['Induction of anesthesia', 'Status epilepticus', 'Elevated ICP management'],
    dosing: {
      adult: 'Induction IV: 3-5 mg/kg slow IV.',
      pediatric: 'Induction IV: 5-6 mg/kg slow IV.'
    },
    safety: {
      adr: ['Severe hypotension', '**Apnea**', 'Tissue necrosis (if extravasated)', 'Laryngospasm'],
      contraindications: ['Porphyria (Absolute)', 'Severe cardiovascular instability'],
      pregnancyLactation: 'Category C.'
    },
    concentrationAlert: 'Usually reconstituted to 2.5% solution (25 mg/ml).',
    pharmacy: {
      strengths: ['500 mg or 1 g vial (powder for reconstitution)'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 150-250',
      brandNames: ['Thiosol', 'Pentothal']
    },
    searchTags: ['Operation', 'Anesthesia', 'Induction'],
    notes: ['Extremely alkaline. Intra-arterial injection causes severe vasospasm and gangrene.']
  },
  // 15.2 Local Anaesthetics
  {
    id: 'ane_021',
    genericName: 'Bupivacaine',
    therapeuticClass: 'Local Anesthetic (Amide)',
    categoryId: 'anesthesia',
    indications: ['Spinal anesthesia', 'Epidural anesthesia', 'Local infiltration/Nerve blocks'],
    dosing: {
      adult: 'Spinal: 10-20 mg (2-4 ml of 0.5% heavy). Epidural/Blocks: Max dose 2 mg/kg (plain).',
      pediatric: 'Spinal: 0.3-0.4 mg/kg.'
    },
    safety: {
      adr: ['Cardiotoxicity (refractory ventricular arrhythmias if injected intravascularly)', 'Hypotension (in spinal/epidural)', 'Respiratory paralysis (high spinal)'],
      contraindications: ['IV regional anesthesia (Bier block)'],
      pregnancyLactation: 'Category C.'
    },
    concentrationAlert: 'Available as Plain 0.5% or Heavy (hyperbaric) 0.5% with dextrose for spinal.',
    pharmacy: {
      strengths: ['0.5% plain (10/20ml vial)', '0.5% Heavy (4ml ampoule)'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule/Vial: 50-120',
      brandNames: ['Sensorcaine', 'Anawin', 'Bupivacaine Heavy']
    },
    searchTags: ['Spinal anesthesia', 'Numb', 'Operation', 'Block'],
    notes: ['Highly cardiotoxic if given IV. Bupivacaine toxicity is treated with IV Lipid Emulsion (Intralipid 20%).']
  },
  {
    id: 'ane_022',
    genericName: 'Prilocaine Hydrochloride',
    therapeuticClass: 'Local Anesthetic (Amide)',
    categoryId: 'anesthesia',
    indications: ['Local infiltration', 'IV regional anesthesia (Bier block)'],
    dosing: {
      adult: 'Infiltration: 1-2%. Max 6 mg/kg (or 400 mg). With adrenaline: maximum 8 mg/kg.',
      pediatric: 'Infiltration: Max 5 mg/kg.'
    },
    safety: {
      adr: ['**Methemoglobinemia** (unique to prilocaine)', 'LAST (Local Anesthetic Systemic Toxicity)'],
      contraindications: ['Congenital or idiopathic methemoglobinemia', 'Hypersensitivity'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['Topical cream (EMLA = mixture with lignocaine)', 'Vials typically 1% or 2%'],
      dosageForms: ['Injection', 'Cream'],
      priceNPR: 'EMLA Cream: 200-300',
      brandNames: ['EMLA (as combo)', 'Citanest']
    },
    searchTags: ['Numb', 'Topical', 'Local'],
    notes: ['Metabolized in liver and lungs. Causes methemoglobinemia at doses > 600 mg.']
  },
  {
    id: 'ane_023',
    genericName: 'Procaine Hydrochloride',
    therapeuticClass: 'Local Anesthetic (Ester)',
    categoryId: 'anesthesia',
    indications: ['Local infiltration (rarely used now)'],
    dosing: {
      adult: 'Infiltration: typically 1-2%. Max 10 mg/kg.',
      pediatric: 'Not commonly recommended due to allergic risk.'
    },
    safety: {
      adr: ['Allergic reactions (PABA metabolite)', 'LAST'],
      contraindications: ['PABA allergy', 'Hypersensitivity to ester anesthetics'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1% or 2% vials'],
      dosageForms: ['Injection'],
      priceNPR: 'Variable',
      brandNames: ['Novocain']
    },
    searchTags: ['Numb', 'Local'],
    notes: ['Short duration of action. High incidence of allergic reactions compared to amides like lignocaine.']
  },
  {
    id: 'ane_024',
    genericName: 'Ropivacaine Hydrochloride',
    therapeuticClass: 'Local Anesthetic (Amide)',
    categoryId: 'anesthesia',
    indications: ['Surgical Anesthesia (epidural, nerve block, infiltration)', 'Acute Pain Management'],
    dosing: {
      adult: 'Surgical Anesthesia: Lumbar Epidural 75-200 mg. Major Nerve Block: 75-300 mg. Field Block: 5-200 mg.\nLabor/Postoperative Pain Management: Epidural initial 20-40 mg, continuous infusion 12-28 mg/h.',
      pediatric: 'Safety and efficacy in pediatric patients have not been established.'
    },
    safety: {
      adr: ['Hypotension', 'Nausea/Vomiting', 'Bradycardia', 'Methemoglobinemia', 'Central Nervous System Toxicity (seizures)', 'Cardiac arrest', 'Chondrolysis (if used intra-articularly)'],
      contraindications: ['Hypersensitivity to amide-type local anesthetics'],
      pregnancyLactation: 'Rapidly crosses placenta. No adequate human data on birth defects. Use cautiously.'
    },
    concentrationAlert: 'Do not use for intravenous regional anesthesia (Bier block). Available as 2 mg/ml (0.2%), 5 mg/ml (0.5%), and 10 mg/ml (1%).',
    pharmacy: {
      strengths: ['2 mg/ml', '5 mg/ml', '10 mg/ml'],
      dosageForms: ['Injection'],
      priceNPR: 'Variable',
      brandNames: ['Naropin', 'Ropivacaine']
    },
    searchTags: ['Numb', 'Local', 'Epidural', 'Block', 'Anesthetic'],
    notes: ['Not approved for intra-articular infusions (risk of chondrolysis).', 'Provides sensory block with less motor block and less cardiotoxicity compared to bupivacaine.']
  }
];
