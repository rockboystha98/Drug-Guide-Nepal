import { DrugEntry } from '../../types/formulary';

export const respiratoryDrugs2: DrugEntry[] = [
  {
    id: 'res_013',
    genericName: 'Bambuterol',
    therapeuticClass: 'LABA (Long-Acting Beta Agonist) (Prodrug of Terbutaline)',
    categoryId: 'respiratory',
    indications: ['Asthma (Maintenance)', 'COPD'],
    dosing: {
      adult: 'PO: 10-20 mg OD at bedtime.',
      pediatric: 'PO (Children 2-5 yrs): 10 mg OD. (>6 yrs): 10-20 mg OD.'
    },
    safety: {
      adr: ['Tremor', 'Headache', 'Palpitation', 'Tachycardia'],
      contraindications: ['Severe hepatic impairment'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg', '20mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '10mg tab: 5-10',
      brandNames: ['Bambudil', 'Rovair']
    },
    notes: ['Prodrug of terbutaline; effects last 24 hours. Taken at bedtime to prevent nocturnal asthma.']
  },
  {
    id: 'res_014',
    genericName: 'Formoterol',
    therapeuticClass: 'LABA (Long-Acting Beta Agonist)',
    categoryId: 'respiratory',
    indications: ['Asthma (Maintenance and Reliever when combined with ICS)', 'COPD', 'Wheezing', 'Breathlessness'],
    dosing: {
      adult: 'Inhaled MDI/Rotacap: 12-24 mcg BID.',
      pediatric: 'Inhaled (>5 yrs): 12 mcg BID.'
    },
    safety: {
      adr: ['Tremor', 'Palpitation', 'Headache'],
      contraindications: ['Monotherapy in asthma (must be used with ICS)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['12mcg Rotacap', 'Often sold as combo with Budesonide or Fluticasone (e.g., 6mcg Formoterol/dose MDI)'],
      dosageForms: ['Inhaler (MDI)', 'Rotacap'],
      priceNPR: 'Rotacap: 5-8/pc, MDI combo: 300-500',
      brandNames: ['Foracort (combo)', 'Formonide (combo)']
    },
    notes: ['Fast onset of action allows it to be used as a reliever (in SMART therapy with budesonide). DO NOT use as monotherapy.']
  },
  {
    id: 'res_015',
    genericName: 'Terbutaline',
    therapeuticClass: 'SABA (Short-Acting Beta Agonist)',
    categoryId: 'respiratory',
    indications: ['Asthma', 'COPD', 'Bronchospasm', 'Wheezing', 'Breathlessness'],
    dosing: {
      adult: 'PO: 2.5-5 mg TID. SC/IM/IV: 0.25-0.5 mg up to QID.',
      pediatric: 'PO: 0.05 mg/kg/dose TID. SC: 0.01 mg/kg/dose (max 0.25 mg).'
    },
    safety: {
      adr: ['Tremor', 'Tachycardia', 'Hypokalemia'],
      contraindications: ['Ischemic heart disease (relative)'],
      pregnancyLactation: 'Category C. Used to inhibit preterm labor (tocolytic) off-label.'
    },
    pharmacy: {
      strengths: ['2.5mg tablet', '0.5mg/ml injection', '1.5mg/5ml syrup'],
      dosageForms: ['Tablet', 'Injection', 'Syrup'],
      priceNPR: 'Tablet: 2-4, Inj: 10-20',
      brandNames: ['Bricanyl', 'Astharil']
    },
    notes: ['Similar to salbutamol. SC injection used for severe acute bronchospasm when nebulized therapy is inadequate/unavailable.']
  },
  {
    id: 'res_016',
    genericName: 'Beclomethasone',
    therapeuticClass: 'Inhaled Corticosteroid (ICS)',
    categoryId: 'respiratory',
    indications: ['Asthma (Maintenance)', 'COPD', 'Allergic Rhinitis (Nasal spray)', 'Wheezing'],
    dosing: {
      adult: 'Inhaled MDI: 200-400 mcg BID (up to 800 mcg/day).',
      pediatric: 'Inhaled MDI: 50-100 mcg BID (up to 200 mcg/day).'
    },
    safety: {
      adr: ['Oral candidiasis', 'Hoarseness'],
      contraindications: ['Primary treatment of status asthmaticus'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['50mcg/dose', '100mcg/dose', '200mcg/dose MDI'],
      dosageForms: ['Inhaler (MDI)', 'Nasal Spray'],
      priceNPR: 'MDI 200mcg: 250-350',
      brandNames: ['Beclomin', 'Aerocort (combo with levosalbutamol)']
    },
    notes: ['Rinse mouth after use to prevent candidiasis.']
  },
  {
    id: 'res_017',
    genericName: 'Zafirlukast',
    therapeuticClass: 'Leukotriene Receptor Antagonist',
    categoryId: 'respiratory',
    indications: ['Asthma (Prophylaxis)'],
    dosing: {
      adult: 'PO: 20 mg BID.',
      pediatric: 'PO (5-11 yrs): 10 mg BID.'
    },
    safety: {
      adr: ['Headache', 'GI upset', 'Hepatotoxicity (rare)', 'Churg-Strauss syndrome (rare)'],
      contraindications: ['Hepatic impairment'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['10mg', '20mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '20mg tab: 15-25',
      brandNames: ['Zafikast', 'Accolate']
    },
    notes: ['Must be taken on an empty stomach (1 hour before or 2 hours after meals). Montelukast is more commonly used.']
  },
  {
    id: 'res_018',
    genericName: 'Sodium Cromoglycate (Cromolyn Sodium)',
    therapeuticClass: 'Mast Cell Stabilizer',
    categoryId: 'respiratory',
    indications: ['Asthma (Prophylaxis)', 'Allergic Rhinitis'],
    dosing: {
      adult: 'Inhaled: 20 mg QID (usually via powder/spinhaler) or 2 puffs MDI QID.',
      pediatric: 'Inhaled (>2 yrs): Similar to adult dosing.'
    },
    safety: {
      adr: ['Throat irritation', 'Cough', 'Bronchospasm (paradoxical)'],
      contraindications: ['Acute asthma attack'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['1mg/dose MDI', '20mg capsule for inhalation'],
      dosageForms: ['Inhaler (MDI)', 'Rotacap', 'Eye drops', 'Nasal spray'],
      priceNPR: 'Variable',
      brandNames: ['Cromal']
    },
    notes: ['Must be used regularly for prophylaxis; no bronchodilator activity. Very safe profile but less effective than ICS.']
  },
  {
    id: 'res_019',
    genericName: 'Ephedrine',
    therapeuticClass: 'Sympathomimetic (Mixed Alpha/Beta Agonist)',
    categoryId: 'respiratory',
    indications: ['Bronchospasm (Historical)', 'Hypotension (Anesthesia-induced)'],
    dosing: {
      adult: 'PO: 15-60 mg TID (rarely used for asthma now). IV (for hypotension): 5-10 mg boluses.',
      pediatric: 'PO: 2-3 mg/kg/day divided Q4-6H (obsolete for asthma).'
    },
    safety: {
      adr: ['Tachycardia', 'Hypertension', 'Anxiety', 'Insomnia', 'Tremor'],
      contraindications: ['Hypertension', 'Ischemic heart disease', 'Thyrotoxicosis'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['15mg', '30mg tablet', '30mg/ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Injection: 40-70',
      brandNames: ['Ephedrine Amp']
    },
    notes: ['Largely abandoned for respiratory use due to systemic side effects and better alternatives. Frequently used in OB anesthesia for hypotension.']
  },
  {
    id: 'res_020',
    genericName: 'Epinephrine (Adrenaline)',
    therapeuticClass: 'Adrenergic Agonist (Vasopressor / Bronchodilator)',
    categoryId: 'respiratory',
    indications: ['Anaphylaxis', 'Severe Asthma (Status Asthmaticus if unresponsive to beta-2)', 'Croup (Nebulized)'],
    dosing: {
      adult: 'Anaphylaxis IM: 0.5 mg (0.5 mL of 1:1000) into anterolateral thigh, repeat after 5 mins if needed.',
      pediatric: 'Anaphylaxis IM: 0.01 mg/kg of 1:1000 (max 0.3 mg for prepubescent children). Croup Nebulized: 0.5 mL of 1:1000 mixed with 3 mL NS.'
    },
    safety: {
      adr: ['Tachycardia', 'Palpitations', 'Anxiety', 'Hypertension'],
      contraindications: ['No absolute contraindications in severe anaphylaxis'],
      pregnancyLactation: 'Category C. Life-saving in anaphylaxis.'
    },
    pharmacy: {
      strengths: ['1mg/ml (1:1000) ampoule'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 10-15',
      brandNames: ['Adr', 'Epin']
    },
    notes: ['Ensure IM (not SC/IV) route for anaphylaxis for rapid absorption. 1:1000 strength is crucial for IM.']
  },
  {
    id: 'res_021',
    genericName: 'Doxofylline',
    therapeuticClass: 'Methylxanthine Bronchodilator',
    categoryId: 'respiratory',
    indications: ['Asthma', 'COPD', 'Breathlessness'],
    dosing: {
      adult: 'PO: 400 mg OD or BID.',
      pediatric: 'PO (>12 yrs): 400 mg OD or BID.'
    },
    safety: {
      adr: ['Nausea', 'Epigastric pain', 'Headache', 'Far fewer cardiac/CNS side effects compared to Theophylline'],
      contraindications: ['Acute myocardial infarction', 'Hypotension'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['400mg tablet', '100mg/5ml syrup'],
      dosageForms: ['Tablet', 'Syrup'],
      priceNPR: '400mg tab: 5-10',
      brandNames: ['Doxolin', 'Doxofyl']
    },
    notes: ['Lacks affinity for adenosine receptors, leading to significantly reduced arrhythmogenic and central stimulation side effects.']
  },
  {
    id: 'res_022',
    genericName: 'Theophylline',
    therapeuticClass: 'Methylxanthine',
    categoryId: 'respiratory',
    indications: ['Asthma (Maintenance)', 'COPD'],
    dosing: {
      adult: 'PO: 300-600 mg/day (usually extended release, dose needs individual titration).',
      pediatric: 'PO: 12-16 mg/kg/day in divided doses (requires therapeutic drug monitoring if possible).'
    },
    safety: {
      adr: ['Nausea', 'Vomiting', 'Tachycardia', 'Arrhythmias', 'Seizures'],
      contraindications: ['Active peptic ulcer', 'Uncontrolled seizure disorder'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['200mg', '300mg', '400mg SR tablet'],
      dosageForms: ['Tablet/Capsule'],
      priceNPR: '300mg tab: 4-8',
      brandNames: ['Deriphyllin (Combo)', 'Theo-SR']
    },
    notes: ['Narrow therapeutic index. Plasma level monitoring recommended. Multiple drug interactions (e.g., clearance reduced by ciprofloxacin, macrolides).']
  },
  {
    id: 'res_023',
    genericName: 'Codeine',
    therapeuticClass: 'Opioid Antitussive',
    categoryId: 'respiratory',
    indications: ['Dry Cough', 'Non-productive cough', 'Cough'],
    dosing: {
      adult: 'PO: 15-30 mg TID/QID (often in syrup formulation with chlorpheniramine).',
      pediatric: 'CONTRAINDICATED < 12 yrs. Use with extreme caution in 12-18 yrs.'
    },
    safety: {
      adr: ['Constipation', 'Drowsiness', 'Respiratory depression (fatal in ultra-rapid metabolizers)'],
      contraindications: ['Children < 12 yrs', 'Respiratory depression', 'Asthma exacerbation', 'Post-tonsillectomy in children'],
      pregnancyLactation: 'Category C (Avoid near term to prevent neonatal respiratory depression/withdrawal).'
    },
    pharmacy: {
      strengths: ['Often 10mg/5ml in combo syrups'],
      dosageForms: ['Syrup', 'Tablet'],
      priceNPR: 'Syrup: 100-150',
      brandNames: ['Corex (classic)', 'Phensedyl (combo)']
    },
    notes: ['Highly restrictive due to abuse potential. Banned in many pediatric settings due to CYP2D6 genetic variability causing fatal respiratory depression.']
  },
  {
    id: 'res_024',
    genericName: 'Noscapine',
    therapeuticClass: 'Non-opioid Antitussive',
    categoryId: 'respiratory',
    indications: ['Dry Cough', 'Cough'],
    dosing: {
      adult: 'PO: 15-30 mg TID or QID.',
      pediatric: 'PO (2-12 yrs): 7.5-15 mg TID.'
    },
    safety: {
      adr: ['Dizziness', 'Nausea', 'Drowsiness (minor)'],
      contraindications: ['Abundant respiratory secretions (productive cough)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['Often in combo syrups'],
      dosageForms: ['Syrup', 'Tablet'],
      priceNPR: 'Syrup: 50-80',
      brandNames: ['Coscopin']
    },
    notes: ['Does not depress respiration or cause addiction like codeine.']
  },
  {
    id: 'res_025',
    genericName: 'Pholcodine',
    therapeuticClass: 'Opioid Antitussive',
    categoryId: 'respiratory',
    indications: ['Dry Cough', 'Cough'],
    dosing: {
      adult: 'PO: 5-10 mg TID or QID.',
      pediatric: 'PO (> 6 yrs): 2.5-5 mg TID.'
    },
    safety: {
      adr: ['Drowsiness', 'Constipation', 'Nausea'],
      contraindications: ['Respiratory failure', 'Asthma exacerbations'],
      pregnancyLactation: 'Category C. Avoid in late pregnancy.'
    },
    pharmacy: {
      strengths: ['5mg/5ml linctus'],
      dosageForms: ['Syrup'],
      priceNPR: 'Syrup: 80-120',
      brandNames: ['Tixylix', 'Pholcodine Linctus']
    },
    notes: ['Less constipating and less respiratory depression than codeine. Due to severe cross-reactivity with neuromuscular blocking agents leading to anaphylaxis during anesthesia, many countries have withdrawn this recently. Check local regulatory status.']
  },
  {
    id: 'res_026',
    genericName: 'Bromhexine',
    therapeuticClass: 'Mucolytic',
    categoryId: 'respiratory',
    indications: ['Productive Cough', 'Bronchitis', 'Cough'],
    dosing: {
      adult: 'PO: 8 mg TID.',
      pediatric: 'PO (2-5 yrs): 4 mg BID. (6-12 yrs): 4 mg TID.'
    },
    safety: {
      adr: ['GI upset', 'Headache'],
      contraindications: ['Active peptic ulcer'],
      pregnancyLactation: 'Category A/C. Avoid in first trimester.'
    },
    pharmacy: {
      strengths: ['8mg tablet', '4mg/5ml syrup'],
      dosageForms: ['Tablet', 'Syrup'],
      priceNPR: 'Syrup: 40-70',
      brandNames: ['Bromhexine', 'Ascoril (Combo)']
    },
    notes: ['Derived from the Adhatoda vasica plant. Increases lysosomal enzyme activity to break down mucopolysaccharides.']
  },
  {
    id: 'res_027',
    genericName: 'Carbocysteine',
    therapeuticClass: 'Mucolytic',
    categoryId: 'respiratory',
    indications: ['Productive Cough', 'COPD exacerbation (adjunct)', 'Cough'],
    dosing: {
      adult: 'PO: Start 750 mg TID, reduce to 375 mg TID when improved.',
      pediatric: 'PO (2-5 yrs): 62.5-125 mg QID. (6-12 yrs): 250 mg TID.'
    },
    safety: {
      adr: ['GI irritation', 'Rash'],
      contraindications: ['Active peptic ulcer'],
      pregnancyLactation: 'Not recommended (limited data).'
    },
    pharmacy: {
      strengths: ['375mg capsule', '250mg/5ml syrup'],
      dosageForms: ['Capsule', 'Syrup'],
      priceNPR: 'Capsule: 5-8',
      brandNames: ['Mucodyne', 'Carbocisteine']
    },
    notes: ['Reduces exacerbations in COPD. Do not co-administer with antitussives.']
  },
  {
    id: 'res_028',
    genericName: 'Acetylcysteine (N-Acetylcysteine)',
    therapeuticClass: 'Mucolytic / Antidote',
    categoryId: 'respiratory',
    indications: ['Productive Cough', 'CF / Bronchiectasis', 'Paracetamol Poisoning (Antidote)', 'Cough'],
    dosing: {
      adult: 'PO: 600 mg OD or 200 mg TID. Nebulized: 3-5 ml of 20% solution TID/QID.',
      pediatric: 'PO (2-6 yrs): 100 mg BID/TID. (>6 yrs): 200 mg BID/TID.'
    },
    safety: {
      adr: ['Nausea', 'Vomiting', 'Bronchospasm (if nebulized)'],
      contraindications: ['Active peptic ulcer'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['200mg', '600mg effervescent tablet', '200mg/ml injection'],
      dosageForms: ['Effervescent Tablet', 'Sachet', 'Injection'],
      priceNPR: '600mg tab: 15-25',
      brandNames: ['Mucinac', 'Fluimucil']
    },
    notes: ['Has a strong sulfur smell. Give beta-agonist before nebulization to prevent bronchospasm.']
  },
  {
    id: 'res_029',
    genericName: 'Phenylephrine',
    therapeuticClass: 'Systemic Nasal Decongestant',
    categoryId: 'respiratory',
    indications: ['Nasal congestion', 'Cold', 'Runny nose'],
    dosing: {
      adult: 'PO: 10 mg every 4 hours.',
      pediatric: 'PO (>12 yrs): 10 mg every 4 hours. (6-11 yrs): 5 mg every 4 hours.'
    },
    safety: {
      adr: ['Hypertension', 'Tachycardia', 'Insomnia'],
      contraindications: ['Severe hypertension', 'Use within 14 days of MAOIs'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['Usually 5-10mg in combo cold preparations'],
      dosageForms: ['Tablet', 'Syrup'],
      priceNPR: 'Combo tab: 3-6',
      brandNames: ['Sinarest (combo)', 'D-Cold Total (combo)']
    },
    notes: ['Alpha-1 agonist. Efficacy orally is poor due to high first-pass metabolism, but replaced pseudoephedrine OTC due to meth prevention laws in many places.']
  },
  {
    id: 'res_030',
    genericName: 'Pseudoephedrine',
    therapeuticClass: 'Systemic Nasal Decongestant',
    categoryId: 'respiratory',
    indications: ['Nasal congestion', 'Cold', 'Runny nose'],
    dosing: {
      adult: 'PO: 60 mg every 4-6 hours (max 240 mg/day).',
      pediatric: 'PO (6-12 yrs): 30 mg every 4-6 hours (max 120 mg/day).'
    },
    safety: {
      adr: ['Insomnia', 'Nervousness', 'Palpitations', 'Hypertension'],
      contraindications: ['Severe hypertension', 'Severe CAD', 'MAOI therapy within 14 days'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['Often 30-60mg in combo products', '60mg single agent tablet'],
      dosageForms: ['Tablet', 'Syrup'],
      priceNPR: 'Tab: 5-10',
      brandNames: ['Sudafed', 'Sinarest (older formulations)']
    },
    notes: ['Far more effective than oral phenylephrine. Regulated stringently due to potential for methamphetamine diversion.']
  },
  {
    id: 'res_031',
    genericName: 'Caffeine Citrate',
    therapeuticClass: 'Respiratory Stimulant',
    categoryId: 'respiratory',
    indications: ['Apnea of Prematurity'],
    dosing: {
      adult: 'Not indicated.',
      pediatric: 'IV/PO (Neonates): Loading dose 20 mg/kg (equivalent to 10 mg/kg caffeine base). Maintenance 5 mg/kg/day OD.'
    },
    safety: {
      adr: ['Tachycardia', 'Restlessness', 'GI intolerance (NEC risk theoretically, though mainly safe)'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Not applicable (Used in neonates).'
    },
    pharmacy: {
      strengths: ['20mg/ml ampoule/oral solution'],
      dosageForms: ['Injection', 'Oral Solution'],
      priceNPR: 'Vial: 200-300',
      brandNames: ['Apnocaf', 'Caffeine Citrate Inj']
    },
    notes: ['Preferred over theophylline/aminophylline in neonates due to wider therapeutic index and once-daily dosing.']
  }
];
