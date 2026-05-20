import { DrugEntry } from '../../types/formulary';

export const cnsDrugs3: DrugEntry[] = [
  {
    id: 'cns_038',
    genericName: 'Chlorpromazine',
    therapeuticClass: 'First Generation Antipsychotic (Phenothiazine)',
    categoryId: 'cns',
    indications: ['Schizophrenia', 'Bipolar Mania', 'Intractable Hiccups', 'Psychosis'],
    dosing: {
      adult: 'PO: 25-50 mg TID initially. Maintenance: 75-300 mg/day (rarely up to 1000 mg). IM (Acute): 25-50 mg.',
      pediatric: 'PO/IM: 0.5-1 mg/kg every 4-6 hours PRN.'
    },
    safety: {
      adr: ['Sedation (High)', 'Orthostatic hypotension', 'Anticholinergic effects', 'Corneal deposits', 'EPS', 'NMS'],
      contraindications: ['Coma', 'Severe CNS depression', 'Bone marrow depression'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mg', '50mg', '100mg tablet', '25mg/ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '50mg tab: 2-4',
      brandNames: ['Chlorpromazine', 'Largactil']
    },
    notes: ['Low potency but highly sedating typical antipsychotic. Photosensitivity is common; advise sunscreen.']
  },
  {
    id: 'cns_039',
    genericName: 'Fluphenazine',
    therapeuticClass: 'First Generation Antipsychotic',
    categoryId: 'cns',
    indications: ['Schizophrenia (Maintenance)', 'Psychosis'],
    dosing: {
      adult: 'IM Depot (Decanoate): 12.5-25 mg every 3-4 weeks. PO: 1-5 mg daily.',
      pediatric: 'PO (>12 yrs): 1-2.5 mg daily.'
    },
    safety: {
      adr: ['EPS (Very High)', 'Tardive Dyskinesia', 'NMS'],
      contraindications: ['Severe CNS depression', 'Coma', 'Subcortical brain damage'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1mg', '2.5mg tablet', '25mg/ml Decanoate Injection'],
      dosageForms: ['Tablet', 'Injection (Depot)'],
      priceNPR: 'Depot Inj: 60-100',
      brandNames: ['Anatensol', 'Prolixin']
    },
    notes: ['Depot formulation used for non-compliant patients. High incidence of extrapyramidal symptoms compared to atypicals.']
  },
  {
    id: 'cns_040',
    genericName: 'Trifluoperazine',
    therapeuticClass: 'First Generation Antipsychotic',
    categoryId: 'cns',
    indications: ['Schizophrenia', 'Severe Anxiety (short-term)', 'Psychosis'],
    dosing: {
      adult: 'PO: 2-5 mg BID initially. Maintenance 15-20 mg/day.',
      pediatric: 'PO (6-12 yrs): 1 mg 1-2 times daily. Max 15 mg/day.'
    },
    safety: {
      adr: ['EPS (High)', 'Tardive dyskinesia', 'Sedation (Moderate)', 'Anticholinergic (Low)'],
      contraindications: ['Coma', 'Blood dyscrasias', 'Bone marrow depression'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1mg', '5mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '5mg tab: 2-5',
      brandNames: ['Neocalm', 'Stelazine']
    },
    notes: ['High potency typical antipsychotic. Less sedating/hypotensive than chlorpromazine but higher EPS risk.']
  },
  {
    id: 'cns_041',
    genericName: 'Amisulpride',
    therapeuticClass: 'Second Generation Antipsychotic',
    categoryId: 'cns',
    indications: ['Schizophrenia (Acute and Chronic)', 'Psychosis'],
    dosing: {
      adult: 'PO: 50-300 mg/day (predominantly negative symptoms) or 400-800 mg/day (predominantly positive symptoms).',
      pediatric: 'Safety and efficacy not established.'
    },
    safety: {
      adr: ['Hyperprolactinemia', 'Weight gain', 'EPS (at high doses)', 'QT prolongation'],
      contraindications: ['Prolactin-dependent tumors', 'Pheochromocytoma', 'Concomitant use with levodopa'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['50mg', '100mg', '200mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 5-8',
      brandNames: ['Amisant', 'Sulpitac']
    },
    notes: ['Highly selective for D2/D3 receptors. Low risk of metabolic syndrome compared to olanzapine. Dose adjustment needed in renal impairment.']
  },
  {
    id: 'cns_042',
    genericName: 'Aripiprazole',
    therapeuticClass: 'Second Generation Antipsychotic (Partial Agonist)',
    categoryId: 'cns',
    indications: ['Schizophrenia', 'Bipolar I Disorder', 'Major Depressive Disorder (Adjunct)', 'Autism Irritability', 'Psychosis'],
    dosing: {
      adult: 'PO: 10-15 mg OD. Max 30 mg/day.',
      pediatric: 'PO (Schizophrenia > 13 yrs): Start 2 mg/day, titrate to 10 mg/day.'
    },
    safety: {
      adr: ['Akathisia (restlessness)', 'Insomnia', 'Tremor', 'Decreased EPS compared to typicals'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['5mg', '10mg', '15mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '10mg tab: 8-15',
      brandNames: ['Arip MT', 'Asprito']
    },
    notes: ['Unique mechanism: partial agonist at D2 and 5-HT1A, antagonist at 5-HT2A. Known to cause significant akathisia (often treated with propranolol/mirtazapine).']
  },
  {
    id: 'cns_043',
    genericName: 'Clozapine',
    therapeuticClass: 'Second Generation Antipsychotic',
    categoryId: 'cns',
    indications: ['Treatment-Resistant Schizophrenia', 'Psychosis in Parkinson\'s', 'Recurrent Suicidal Behavior in Schizophrenia', 'Psychosis'],
    dosing: {
      adult: 'PO: strictly titrated, start 12.5 mg 1-2 times daily. Target: 300-450 mg/day.',
      pediatric: 'Safety not established.'
    },
    safety: {
      adr: ['Agranulocytosis', 'Myocarditis/Cardiomyopathy', 'Seizures', 'Severe weight gain', 'Sialorrhea (drooling)'],
      contraindications: ['History of clozapine-induced agranulocytosis', 'Uncontrolled epilepsy', 'Severe CNS depression'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['25mg', '50mg', '100mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 8-12',
      brandNames: ['Sizopin', 'Lozapin']
    },
    notes: ['**Safety Alert**: Mandatory strict blood monitoring (ANC and WBC) due to fatal agranulocytosis risk. Only for treatment-resistant cases. Low risk of EPS/TD.']
  },
  {
    id: 'cns_044',
    genericName: 'Quetiapine',
    therapeuticClass: 'Second Generation Antipsychotic',
    categoryId: 'cns',
    indications: ['Schizophrenia', 'Bipolar Disorder (Mania and Depression)', 'Major Depressive Disorder (Adjunct)', 'Psychosis'],
    dosing: {
      adult: 'PO: 50-800 mg/day depending on indication. (Often 300-800 mg/day for Schizophrenia/Mania; 50-300 mg for Bipolar Depression).',
      pediatric: 'PO (Bipolar Mania 10-17 yrs): 400-600 mg/day.'
    },
    safety: {
      adr: ['Somnolence/Sedation (high)', 'Orthostatic hypotension', 'Weight gain', 'Metabolic syndrome', 'QT prolongation'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mg', '50mg', '100mg', '200mg SR tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 5-10',
      brandNames: ['Qutan', 'Seroquel']
    },
    notes: ['Highly sedating, often used off-label (controversially) for insomnia at low doses (25-50mg). Low EPS risk.']
  },
  {
    id: 'cns_045',
    genericName: 'Risperidone',
    categoryId: 'cns',
    therapeuticClass: 'Second Generation Antipsychotic',
    indications: ['Schizophrenia', 'Bipolar Mania', 'Autism Irritability', 'Psychosis'],
    dosing: {
      adult: 'PO: 1-2 mg/day initially, target 2-6 mg/day.',
      pediatric: 'PO (Autism irritability > 5 yrs, Schizophrenia > 13 yrs): 0.5-3 mg/day.'
    },
    safety: {
      adr: ['Hyperprolactinemia (highest among atypicals)', 'Weight gain', 'EPS (dose-dependent)', 'Orthostatic hypotension'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1mg', '2mg', '3mg', '4mg tablet', '1mg/ml oral solution'],
      dosageForms: ['Tablet', 'Syrup'],
      priceNPR: '2mg tab: 4-8',
      brandNames: ['Rispond', 'Sizodon']
    },
    notes: ['At doses above 6mg/day, the EPS profile resembles a typical antipsychotic. Highest risk of hyperprolactinemia (amenorrhea, galactorrhea, gynecomastia).']
  },
  {
    id: 'cns_046',
    genericName: 'Atomoxetine',
    therapeuticClass: 'Selective Norepinephrine Reuptake Inhibitor (Non-stimulant ADHD)',
    categoryId: 'cns',
    indications: ['Attention Deficit Hyperactivity Disorder (ADHD)'],
    dosing: {
      adult: 'PO: Start 40 mg OD, target 80 mg OD (max 100 mg/day).',
      pediatric: 'PO (children > 6 yrs, < 70 kg): 0.5 mg/kg/day, target 1.2 mg/kg/day.'
    },
    safety: {
      adr: ['Nausea', 'Decreased appetite', 'Fatigue', 'Somnolence', 'Increase in suicidal ideation (Black box warning in kids/young adults)', 'Hepatotoxicity (rare)'],
      contraindications: ['Concomitant MAOI use', 'Narrow-angle glaucoma', 'Pheochromocytoma', 'Severe cardiovascular disorders'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg', '18mg', '25mg', '40mg capsule'],
      dosageForms: ['Capsule'],
      priceNPR: '18mg cap: 15-25',
      brandNames: ['Attentrol', 'Axepta']
    },
    notes: ['Non-stimulant option with no abuse potential. Takes 1-4 weeks for full clinical response.']
  },
  {
    id: 'cns_047',
    genericName: 'Bupropion',
    therapeuticClass: 'Norepinephrine/Dopamine Reuptake Inhibitor (NDRI)',
    categoryId: 'cns',
    indications: ['Major Depressive Disorder', 'Smoking Cessation', 'ADHD (off-label)', 'Depression'],
    dosing: {
      adult: 'PO (Depression): 150 mg OD (SR formulation), max 300-400 mg/day. Smoking cessation: 150 mg SR daily for 3 days, then BID for 7-12 weeks.',
      pediatric: 'PO (ADHD off-label): 1.4-3 mg/kg/day.'
    },
    safety: {
      adr: ['Insomnia', 'Weight loss', 'Nausea', 'Dry mouth', 'Seizures (dose-dependent)'],
      contraindications: ['Seizure disorder', 'History of anorexia/bulimia (due to lower seizure threshold)', 'MAOI use'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['150mg SR', '300mg XL tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '150mg SR tab: 15-25',
      brandNames: ['Bupron SR', 'Essmoke']
    },
    notes: ['Does not cause significant weight gain or sexual dysfunction (unlike SSRIs). Lowers seizure threshold.']
  },
  {
    id: 'cns_048',
    genericName: 'Donepezil',
    therapeuticClass: 'Acetylcholinesterase Inhibitor',
    categoryId: 'cns',
    indications: ['Alzheimer\'s Dementia', 'Dementia'],
    dosing: {
      adult: 'PO: 5 mg OD at bedtime, may increase to 10 mg OD after 4-6 weeks.',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Nausea', 'Diarrhea', 'Insomnia', 'Muscle cramps', 'Bradycardia/Syncope'],
      contraindications: ['Hypersensitivity to piperidine derivatives'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['5mg', '10mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '5mg tab: 15-25',
      brandNames: ['Donep', 'Alzep']
    },
    notes: ['Taken at bedtime to minimize nausea/GI side effects. May cause cholinergic side effects (SLUDGE).']
  },
  {
    id: 'cns_049',
    genericName: 'Memantine',
    therapeuticClass: 'NMDA Receptor Antagonist',
    categoryId: 'cns',
    indications: ['Alzheimer\'s Dementia (Moderate to Severe)', 'Dementia'],
    dosing: {
      adult: 'PO: 5 mg OD, titrate weekly by 5 mg up to 10 mg BID (20 mg/day).',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Dizziness', 'Headache', 'Confusion', 'Constipation'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['5mg', '10mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '5mg tab: 10-20',
      brandNames: ['Admenta', 'Nemdatine']
    },
    notes: ['Often used in combination with an acetylcholinesterase inhibitor (e.g., donepezil). Reduce dose in severe renal impairment.']
  },
  {
    id: 'cns_050',
    genericName: 'Rivastigmine',
    therapeuticClass: 'Acetylcholinesterase Inhibitor',
    categoryId: 'cns',
    indications: ['Alzheimer\'s Dementia', 'Parkinson\'s Disease Dementia', 'Dementia'],
    dosing: {
      adult: 'PO: 1.5 mg BID, titrate up to 6 mg BID. Patch: 4.6 mg/24hr, titrate to 9.5-13.3 mg/24hr.',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Nausea', 'Vomiting', 'Anorexia', 'Weight loss', 'Bradycardia'],
      contraindications: ['History of application site reactions to patch'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['1.5mg', '3mg capsule', 'Patch (4.6mg, 9.5mg)'],
      dosageForms: ['Capsule', 'Patch'],
      priceNPR: 'Cap: 15-25, Patch: 100-200',
      brandNames: ['Rivamer', 'Exelon']
    },
    notes: ['Patch formulation significantly reduces severe GI side effects associated with the oral form.']
  },
  {
    id: 'cns_051',
    genericName: 'Chlordiazepoxide',
    therapeuticClass: 'Benzodiazepine',
    categoryId: 'cns',
    indications: ['Alcohol Withdrawal (Acute)', 'Anxiety'],
    dosing: {
      adult: 'PO: 25-100 mg Q6H initially, then taper. Max 300 mg/day in severe withdrawal.',
      pediatric: 'Children > 6 yrs: 5 mg 2-4 times daily (rarely used).'
    },
    safety: {
      adr: ['Sedation', 'Respiratory depression', 'Ataxia', 'Confusion (elderly)'],
      contraindications: ['Severe liver disease', 'Sleep apnea', 'Acute narrow-angle glaucoma'],
      pregnancyLactation: 'Category D.'
    },
    pharmacy: {
      strengths: ['10mg', '25mg tablet/capsule'],
      dosageForms: ['Tablet', 'Capsule'],
      priceNPR: '10mg tab: 2-5',
      brandNames: ['Librax (Combo with clidinium)', 'Equibrom']
    },
    notes: ['**Safety Alert**: Long half-life with active metabolites. Very effective for smoothing out acute alcohol withdrawal. Lorazepam/Oxazepam preferred in active liver failure.']
  },
  {
    id: 'cns_052',
    genericName: 'Lorazepam',
    therapeuticClass: 'Benzodiazepine',
    categoryId: 'cns',
    indications: ['Anxiety', 'Status Epilepticus', 'Alcohol Withdrawal (Preferred in liver disease)', 'Fits', 'Seizure'],
    dosing: {
      adult: 'PO: 1-3 mg/day in divided doses. IV (Status Epilepticus): 4 mg at 2 mg/min, may repeat in 10-15 mins.',
      pediatric: 'IV (Status Epilepticus): 0.05-0.1 mg/kg (max 4 mg) infused over 2-5 mins.'
    },
    safety: {
      adr: ['Sedation', 'Respiratory depression', 'Amnesia', 'Ataxia'],
      contraindications: ['Acute narrow-angle glaucoma', 'Severe respiratory depression'],
      pregnancyLactation: 'Category D.'
    },
    pharmacy: {
      strengths: ['1mg', '2mg tablet', '2mg/ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '1mg tab: 2-4, Inj: 20-40',
      brandNames: ['Ativan', 'Lorpose']
    },
    notes: ['**Safety Alert**: IV Lorazepam is preferred over Diazepam for status epilepticus in many settings because it stays in the CNS longer (less lipid-soluble redistribution out of the brain). Does NOT undergo complex hepatic oxidative metabolism, making it safer in cirrhosis.']
  },
  {
    id: 'cns_053',
    genericName: 'Disulfiram',
    therapeuticClass: 'Aldehyde Dehydrogenase Inhibitor',
    categoryId: 'cns',
    indications: ['Alcohol Dependence (Relapse Prevention)'],
    dosing: {
      adult: 'PO: 250-500 mg OD (must abstain from alcohol for at least 12 hours before starting).',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Metallic or garlic-like taste', 'Hepatotoxicity', 'Peripheral neuropathy', 'Severe Disulfiram-Alcohol reaction (Flushing, tachycardia, severe nausea, hypotension/shock)'],
      contraindications: ['Severe myocardial disease', 'Coronary occlusion', 'Psychoses', 'Current alcohol intoxication'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['250mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '250mg tab: 10-15',
      brandNames: ['Dizone', 'Antabuse']
    },
    notes: ['Requires a highly motivated patient. Warn patients about hidden alcohol in sauces, mouthwashes, cough syrups.']
  },
  {
    id: 'cns_054',
    genericName: 'Lithium (Lithium Carbonate)',
    therapeuticClass: 'Mood Stabilizer',
    categoryId: 'cns',
    indications: ['Bipolar Disorder (Mania and Maintenance)'],
    dosing: {
      adult: 'PO: 300-600 mg BID/TID. Titrate based on serum levels (Target: 0.6-1.2 mEq/L).',
      pediatric: 'PO (Bipolar > 12 yrs): Similar weight-based titration (e.g. 15-20 mg/kg/day divided) targeting therapeutic levels.'
    },
    safety: {
      adr: ['Fine tremor', 'Polyuria/Polydipsia (Nephrogenic Diabetes Insipidus)', 'Hypothyroidism', 'Toxicity (Ataxia, coarse tremor, confusion, seizures)'],
      contraindications: ['Severe cardiovascular/renal disease', 'Severe dehydration/sodium depletion'],
      pregnancyLactation: 'Category D. (Risk of Ebstein anomaly in 1st trimester).'
    },
    pharmacy: {
      strengths: ['300mg', '400mg SR tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '300mg SR tab: 5-10',
      brandNames: ['Lithosun SR', 'Licab SR']
    },
    notes: ['**Safety Alert**: Extremely narrow therapeutic index. Requires strict monitoring of serum levels, renal/thyroid function. Toxicity is precipitated by dehydration, NSAIDs, thiazides, or ACE inhibitors.']
  },
  {
    id: 'cns_055',
    genericName: 'Zolpidem',
    therapeuticClass: 'Non-benzodiazepine Hypnotic (Z-drug)',
    categoryId: 'cns',
    indications: ['Insomnia (Short-term)'],
    dosing: {
      adult: 'PO: 5-10 mg immediately before bedtime.',
      pediatric: 'Safety not established.'
    },
    safety: {
      adr: ['Drowsiness', 'Dizziness', 'Sleep-walking/Complex sleep behaviors', 'Amnesia'],
      contraindications: ['Severe hepatic impairment', 'Complex sleep behaviors (e.g. sleep-driving) previously experienced'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['5mg', '10mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '10mg tab: 5-8',
      brandNames: ['Zolfresh', 'Nitrest']
    },
    notes: ['Rapid onset of action; patient must be ready to go to sleep immediately. Increased risk of falls in the elderly.']
  }
];
