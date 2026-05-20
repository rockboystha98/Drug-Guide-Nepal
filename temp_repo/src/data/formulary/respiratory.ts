import { DrugEntry } from '../../types/formulary';

export const respiratoryDrugs: DrugEntry[] = [
  // Bronchodilators: Adrenoceptor agonists
  {
    id: 'res_001',
    genericName: 'Salbutamol (Albuterol)',
    therapeuticClass: 'SABA (Short-Acting Beta Agonist)',
    categoryId: 'respiratory',
    indications: ['Asthma (Acute/Rescue)', 'COPD', 'Bronchospasm', 'Breathlessness', 'Asthma attack', 'Wheezing'],
    dosing: {
      adult: 'Inhaled MDI: 100-200 mcg (1-2 puffs) PRN. Nebulized: 2.5-5 mg QID. PO: 2-4 mg TID/QID.',
      pediatric: 'Inhaled MDI: 100-200 mcg PRN. Nebulized: 0.15 mg/kg/dose (min 1.25 mg, max 5.0 mg) Q2-6H.'
    },
    safety: {
      adr: ['Tremor', 'Tachycardia', 'Headache', 'Hypokalemia (high doses)'],
      contraindications: ['Ischemic heart disease/tachyarrhythmias (relative caution)'],
      pregnancyLactation: 'Category C. Commonly used, benefits outweigh risks.'
    },
    pharmacy: {
      strengths: ['100mcg/dose MDI', '2.5mg/2.5ml Respule', '4mg Tablet', '2mg/5ml Syrup'],
      dosageForms: ['Inhaler (MDI)', 'Nebulizer Solution', 'Tablet', 'Syrup'],
      priceNPR: 'MDI: 200-250, Respule: 25/pc',
      brandNames: ['Asthalin', 'Ventorlin']
    },
    notes: ['Monitor potassium levels during continued nebulization. Differentiate MDI (with spacer in kids) from rotacaps.']
  },
  {
    id: 'res_002',
    genericName: 'Levosalbutamol (Levalbuterol)',
    therapeuticClass: 'SABA (Selective Isomer)',
    categoryId: 'respiratory',
    indications: ['Asthma', 'COPD', 'Bronchospasm', 'Breathlessness', 'Asthma attack', 'Wheezing'],
    dosing: {
      adult: 'Inhaled MDI: 50-100 mcg (1-2 puffs) PRN. Nebulized: 0.63-1.25 mg TID.',
      pediatric: 'Nebulized: 0.31-0.63 mg TID for children 6-11 years.'
    },
    safety: {
      adr: ['Tremor and tachycardia (theoretically less than racemic salbutamol, but still present)'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['50mcg MDI', '0.63mg/2.5ml Respule', '1.25mg/2.5ml Respule', '1mg/5ml Syrup'],
      dosageForms: ['Inhaler (MDI)', 'Nebulizer Solution', 'Syrup'],
      priceNPR: 'Respule: 25-35',
      brandNames: ['Levolin']
    },
    notes: ['Used for patients who experience severe tachycardia/tremors with standard salbutamol.']
  },
  {
    id: 'res_003',
    genericName: 'Salmeterol',
    therapeuticClass: 'LABA (Long-Acting Beta Agonist)',
    categoryId: 'respiratory',
    indications: ['Asthma (Maintenance only, with ICS)', 'COPD', 'Breathlessness'],
    dosing: {
      adult: 'Inhaled MDI/Rotacap: 50 mcg BID.',
      pediatric: 'Inhaled (>4 yrs): 50 mcg BID.'
    },
    safety: {
      adr: ['Tremor', 'Headache', 'Palpitation'],
      contraindications: ['Acute bronchospasm (NEVER use for acute relief)', 'Monotherapy in asthma (must combine with ICS)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mcg MDI (usually in combo limit)', '50mcg Rotacap'],
      dosageForms: ['Inhaler (MDI)', 'Rotacap'],
      priceNPR: 'Rotacap: 5/pc (Often sold as combo with Fluticasone - Seroflo)',
      brandNames: ['Severent', 'Seroflo (Combo)', 'Foracort (combo with formoterol)']
    },
    notes: ['BLACK BOX: Do not use as monotherapy in asthma due to severe exacerbation risk. Must instruct patient on Rotahaler technique vs MDI.']
  },
  // Antimuscarinics
  {
    id: 'res_004',
    genericName: 'Ipratropium Bromide',
    therapeuticClass: 'SAMA (Short-Acting Muscarinic Antagonist)',
    categoryId: 'respiratory',
    indications: ['COPD (Maintenance and Acute)', 'Asthma (Acute severe, adjunct to Salbutamol)', 'Wheezing'],
    dosing: {
      adult: 'Nebulized: 500 mcg Q6-8H. MDI: 20-40 mcg (1-2 puffs) TID/QID.',
      pediatric: 'Nebulized (< 12 yrs): 250 mcg Q8H. Acute severe: Mix with salbutamol every 20 mins x 3 doses.'
    },
    safety: {
      adr: ['Dry mouth', 'Cough', 'Urinary retention (rare, caution in BPH)'],
      contraindications: ['Known hypersensitivity to atropine derivatives'],
      pregnancyLactation: 'Category B. Generally safe.'
    },
    pharmacy: {
      strengths: ['20mcg MDI', '250mcg/ml Respule', '500mcg/ml Respule'],
      dosageForms: ['Inhaler (MDI)', 'Nebulizer Solution'],
      priceNPR: 'Respule: 25-30. MDI: 250-300.',
      brandNames: ['Ipravent', 'Duolin (Combo with Levosalbutamol)']
    },
    notes: ['Ensure nebulizer mask fits well; leak into eyes can cause pupillary dilation and precipitate acute glaucoma.']
  },
  // Xanthines
  {
    id: 'res_005',
    genericName: 'Aminophylline',
    therapeuticClass: 'Methylxanthine',
    categoryId: 'respiratory',
    indications: ['Acute Severe Asthma / Status Asthmaticus (2nd/3rd line)', 'COPD exacerbation (severe)'],
    dosing: {
      adult: 'IV: Loading dose 5 mg/kg (ideal body weight) over 20-30 mins. Maintenance: 0.5 mg/kg/hr.',
      pediatric: 'IV: Loading 5 mg/kg. Maintenance (<9 yrs): 1 mg/kg/hr. Maintenance (>9 yrs): 0.8 mg/kg/hr.'
    },
    safety: {
      adr: ['Tachycardia', 'Arrhythmias (fatal)', 'Seizures', 'Nausea/Vomiting'],
      contraindications: ['Active peptic ulcer disease', 'Underlying severe seizure disorders', 'Concomitant use of macrolides/cipro (increases drug levels)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mg/ml (10ml ampoule = 250mg)'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 15-25',
      brandNames: ['Aminophylline Amp']
    },
    notes: ['Narrow therapeutic index. Must calculate using ideal, not actual, body weight. Half loading dose if patient already takes PO Theophylline.']
  },
  // Corticosteroids (Inhaled & Systemic)
  {
    id: 'res_006',
    genericName: 'Budesonide',
    therapeuticClass: 'Inhaled Corticosteroid (ICS)',
    categoryId: 'respiratory',
    indications: ['Asthma (Maintenance)', 'COPD', 'Croup', 'Wheezing'],
    dosing: {
      adult: 'Inhaled MDI/Rotacap: 200-800 mcg/day in divided doses. Nebulized: 1-2 mg twice daily.',
      pediatric: 'Inhaled: 100-400 mcg/day. Croup (nebulized): 2 mg as a single dose STAT.'
    },
    safety: {
      adr: ['Oral candidiasis (Thrush)', 'Hoarseness / Dysphonia'],
      contraindications: ['Primary treatment of status asthmaticus'],
      pregnancyLactation: 'Category B. Preferred ICS in pregnancy.'
    },
    pharmacy: {
      strengths: ['100mcg, 200mcg, 400mcg Rotacap', '0.5mg, 1mg Respule'],
      dosageForms: ['Rotacap', 'Inhaler (MDI)', 'Nebulizer Solution'],
      priceNPR: 'Respule: 35-50',
      brandNames: ['Budecort', 'Foracort (combo)']
    },
    notes: ['Counsel patient strictly: Rinse mouth and spit after every use to prevent thrush.']
  },
  {
    id: 'res_007',
    genericName: 'Hydrocortisone',
    therapeuticClass: 'Systemic Corticosteroid',
    categoryId: 'respiratory',
    indications: ['Acute Severe Asthma', 'Anaphylaxis', 'Sepsis (Refractory Shock)'],
    dosing: {
      adult: 'Asthma IV: 100-200 mg Q6H. Anaphylaxis: 100-300 mg IM/IV.',
      pediatric: 'Asthma IV: 4 mg/kg loading, then 2 mg/kg Q6H. Anaphylaxis: <6 mos: 25mg; 6m-6y: 50mg; 6-12y: 100mg.'
    },
    safety: {
      adr: ['Hyperglycemia', 'Hypertension', 'Increased infection risk', 'Psychosis'],
      contraindications: ['Systemic fungal infections'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['100mg vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 40-70',
      brandNames: ['Primacort', 'Hisone']
    },
    notes: ['Used for emergency rescue, not maintenance.']
  },
  // Leukotriene Receptor Antagonists
  {
    id: 'res_008',
    genericName: 'Montelukast',
    therapeuticClass: 'Leukotriene Receptor Antagonist (LTRA)',
    categoryId: 'respiratory',
    indications: ['Asthma (Prophylaxis)', 'Allergic Rhinitis', 'Sneezing', 'Runny nose'],
    dosing: {
      adult: 'PO: 10 mg OD at bedtime.',
      pediatric: 'PO (6-14 yrs): 5 mg chewable OD at bedtime. (2-5 yrs): 4 mg chewable OD at bedtime.'
    },
    safety: {
      adr: ['Neuropsychiatric events (vivid dreams, agitation, suicidal ideation - Black Box Warning)', 'Headache', 'GI upset'],
      contraindications: ['Acute asthma attacks (Not a rescue drug)'],
      pregnancyLactation: 'Category B. Generally safe.'
    },
    pharmacy: {
      strengths: ['4mg, 5mg chewable tablet', '10mg tablet'],
      dosageForms: ['Tablet', 'Chewable Tablet'],
      priceNPR: '10mg tab: 8-15',
      brandNames: ['Montair', 'Romilast']
    },
    notes: ['Warn parents about potential behavioral changes or nightmares in children.']
  },
  // Antihistamines
  {
    id: 'res_009',
    genericName: 'Promethazine',
    therapeuticClass: 'Sedating Antihistamine / Phenothiazine',
    categoryId: 'respiratory',
    indications: ['Allergic rhinitis', 'Type 1 hypersensitivity', 'Motion sickness', 'Sneezing'],
    dosing: {
      adult: 'PO: 25-50 mg/day or at night. IM: 25-50 mg.',
      pediatric: 'CONTRAINDICATED < 2 YEARS. PO (>2 yrs): 0.1 mg/kg/dose.'
    },
    safety: {
      adr: ['Severe sedation', 'Respiratory depression (fatal in infants)', 'Anticholinergic effects'],
      contraindications: ['CHILDREN < 2 YEARS (Fatal respiratory depression)', 'Coma', 'Severe CNS depression'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mg tablet', '5mg/5ml syrup', '25mg/ml injection'],
      dosageForms: ['Tablet', 'Syrup', 'Injection'],
      priceNPR: 'Tablet: 2-3',
      brandNames: ['Phenergan']
    },
    notes: ['BLACK BOX LABEL: Never use in children under 2. Cannot be given IV push (causes severe tissue necrosis).']
  },
  {
    id: 'res_010',
    genericName: 'Cetirizine',
    therapeuticClass: 'Non-sedating Antihistamine',
    categoryId: 'respiratory',
    indications: ['Allergic Rhinitis', 'Urticaria', 'Runny nose', 'Sneezing'],
    dosing: {
      adult: 'PO: 10 mg OD.',
      pediatric: 'PO (2-6 yrs): 2.5 mg BID. (6-12 yrs): 5 mg BID or 10 mg OD.'
    },
    safety: {
      adr: ['Mild drowsiness (more than true non-sedating agents like fexofenadine)', 'Headache'],
      contraindications: ['Severe renal impairment (requires dose adjust)'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['10mg tablet', '5mg/5ml syrup'],
      dosageForms: ['Tablet', 'Syrup'],
      priceNPR: 'Tablet: 2-4',
      brandNames: ['Cetzine', 'Alerid']
    },
    notes: ['May cause more sedation than levocetirizine or fexofenadine.']
  },
  {
    id: 'res_010_b',
    genericName: 'Diphenhydramine Hydrochloride',
    therapeuticClass: 'Sedating Antihistamine',
    categoryId: 'respiratory',
    indications: ['Allergic reactions', 'Anaphylaxis (adjunct)', 'Motion sickness', 'Parkinsonism (mild/elderly)'],
    dosing: {
      adult: 'IV/IM: 10-50 mg (max rate 25 mg/min). Max 400 mg/day.',
      pediatric: 'IV/IM: 5 mg/kg/day divided in 4 doses. Max 300 mg/day. CONTRAINDICATED in premature infants and neonates.'
    },
    safety: {
      adr: ['Sedation, sleepiness', 'Thickening of bronchial secretions', 'Hypotension', 'Dry mouth, urinary retention', 'Epigastric distress'],
      contraindications: ['Premature infants and neonates', 'Nursing mothers', 'Use as local anesthetic'],
      pregnancyLactation: 'Category B. Contraindicated in nursing mothers.'
    },
    pharmacy: {
      strengths: ['50 mg/mL injection'],
      dosageForms: ['Injection'],
      priceNPR: 'Injection: Varies',
      brandNames: []
    },
    notes: ['Local necrosis has been associated with subcutaneous or intradermal use. Use with caution in asthma, narrow-angle glaucoma, and symptomatic prostatic hypertrophy.']
  },
  // Cough Preparations
  {
    id: 'res_011',
    genericName: 'Ambroxol',
    therapeuticClass: 'Mucolytic',
    categoryId: 'respiratory',
    indications: ['Productive Cough', 'Acute/Chronic Bronchitis', 'Cough'],
    dosing: {
      adult: 'PO: 30 mg TID.',
      pediatric: 'PO (2-5 yrs): 7.5 mg TID. (6-12 yrs): 15 mg TID.'
    },
    safety: {
      adr: ['GI irritation', 'Nausea'],
      contraindications: ['Active peptic ulcer disease (caution - damages gastric mucus)'],
      pregnancyLactation: 'Category C. Avoid in 1st trimester.'
    },
    pharmacy: {
      strengths: ['30mg tablet', '15mg/5ml syrup', '30mg/5ml syrup'],
      dosageForms: ['Tablet', 'Syrup'],
      priceNPR: 'Syrup: 50-80',
      brandNames: ['Mucolite', 'Ambrodil']
    },
    notes: ['Ensure patient drinks plenty of fluids to help clear mucus.']
  },
  {
    id: 'res_012',
    genericName: 'Dextromethorphan',
    therapeuticClass: 'Antitussive (Non-opioid)',
    categoryId: 'respiratory',
    indications: ['Dry Cough', 'Non-productive cough', 'Cough'],
    dosing: {
      adult: 'PO: 10-30 mg Q4-8H (Max 120 mg/day).',
      pediatric: 'PO (6-12 yrs): 5-15 mg Q4-8H (Max 60 mg/day). <6 yrs: Not recommended.'
    },
    safety: {
      adr: ['Dizziness', 'Drowsiness', 'GI upset', 'Serotonin syndrome (if mixed with MAOIs/SSRIs)'],
      contraindications: ['Use with MAOIs', 'Productive/secretory cough', 'Asthma exacerbation'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg/5ml syrup', '15mg/5ml syrup'],
      dosageForms: ['Syrup'],
      priceNPR: 'Syrup: 60-100',
      brandNames: ['Corex-DX', 'Alex']
    },
    notes: ['Often sold in combinations. Highly abused in large doses (causes dissociation).']
  }
];
