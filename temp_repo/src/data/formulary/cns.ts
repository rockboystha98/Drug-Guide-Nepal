import { DrugEntry } from '../../types/formulary';

export const cnsDrugs: DrugEntry[] = [
  {
    id: 'cns_001',
    genericName: 'Carbamazepine',
    therapeuticClass: 'Anticonvulsant / Mood Stabilizer',
    categoryId: 'cns',
    indications: ['Epilepsy', 'Trigeminal Neuralgia', 'Bipolar Disorder', 'Neuropathic Pain', 'Fits', 'Seizure'],
    dosing: {
      adult: 'PO: 100-200 mg 1-2 times daily, gradually increase. Usual maintenance: 800-1200 mg/day.',
      pediatric: 'PO: 10-20 mg/kg/day in divided doses.'
    },
    safety: {
      adr: ['Dizziness', 'Ataxia', 'Hyponatremia', 'Stevens-Johnson Syndrome (SJS)'],
      contraindications: ['AV block', 'History of bone marrow depression'],
      pregnancyLactation: 'Category D. Risk of neural tube defects.'
    },
    pharmacy: {
      strengths: ['100mg', '200mg', '400mg CR tablet', '100mg/5ml syrup'],
      dosageForms: ['Tablet', 'Syrup'],
      priceNPR: '200mg tab: 2-5',
      brandNames: ['Tegretol', 'Mazetol']
    },
    notes: ['**Safety Alert**: Severe dermatologic reactions (SJS/TEN) risk, testing for HLA-B*1502 recommended in high-risk populations. Induces its own metabolism.']
  },
  {
    id: 'cns_002',
    genericName: 'Clobazam',
    therapeuticClass: 'Benzodiazepine (Anticonvulsant)',
    categoryId: 'cns',
    indications: ['Epilepsy (Adjunct)', 'Anxiety', 'Fits', 'Seizure'],
    dosing: {
      adult: 'PO: 20-30 mg daily in divided doses or as a single dose at night.',
      pediatric: 'PO (>6 yrs): 5 mg daily, maintenance 0.3-1 mg/kg/day.'
    },
    safety: {
      adr: ['Sedation', 'Drowsiness', 'Tolerance'],
      contraindications: ['Myasthenia gravis', 'Severe respiratory insufficiency', 'Sleep apnea'],
      pregnancyLactation: 'Category D.'
    },
    pharmacy: {
      strengths: ['5mg', '10mg', '20mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '10mg tab: 5-8',
      brandNames: ['Frisium', 'Loba']
    },
    notes: ['**Safety Alert**: Risk of dependency and withdrawal seizures if stopped abruptly. Less sedating than other benzodiazepines.']
  },
  {
    id: 'cns_003',
    genericName: 'Clonazepam',
    therapeuticClass: 'Benzodiazepine (Anticonvulsant / Anxiolytic)',
    categoryId: 'cns',
    indications: ['Epilepsy', 'Panic Disorder', 'Anxiety', 'Fits', 'Seizure'],
    dosing: {
      adult: 'PO: 0.5-1 mg/day initially, up to 4-8 mg/day depending on indication.',
      pediatric: 'PO (Seizures): 0.01-0.03 mg/kg/day in divided doses.'
    },
    safety: {
      adr: ['Drowsiness', 'Ataxia', 'Behavioral disturbances'],
      contraindications: ['Severe liver disease', 'Acute narrow-angle glaucoma'],
      pregnancyLactation: 'Category D.'
    },
    pharmacy: {
      strengths: ['0.25mg', '0.5mg', '1mg', '2mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '0.5mg tab: 2-4',
      brandNames: ['Clonotril', 'Lonazep']
    },
    notes: ['**Safety Alert**: High risk of dependency. Abrupt withdrawal can precipitate status epilepticus.']
  },
  {
    id: 'cns_004',
    genericName: 'Diazepam',
    therapeuticClass: 'Benzodiazepine',
    categoryId: 'cns',
    indications: ['Status Epilepticus', 'Acute Anxiety', 'Alcohol Withdrawal', 'Muscle Spasm', 'Fits', 'Seizure'],
    dosing: {
      adult: 'PO: 2-10 mg 2-4 times a day. IV (Status Epilepticus): 5-10 mg slow IV push (1-2 mins), repeat in 10-15 mins if needed. Max 30 mg.',
      pediatric: 'IV (Status Epilepticus): 0.2-0.3 mg/kg slow IV over 2-3 mins. PR (Rectal for seizures): 0.5 mg/kg.'
    },
    safety: {
      adr: ['Respiratory depression (especially IV)', 'Sedation', 'Hypotension'],
      contraindications: ['Myasthenia gravis', 'Severe respiratory depression', 'Acute narrow-angle glaucoma'],
      pregnancyLactation: 'Category D. Can cause floppy infant syndrome.'
    },
    pharmacy: {
      strengths: ['2mg', '5mg', '10mg tablet', '10mg/2ml ampoule', '5mg rectal tube'],
      dosageForms: ['Tablet', 'Injection', 'Rectal Tube'],
      priceNPR: 'Tab: 1-3, Amp: 10-20',
      brandNames: ['Valium', 'Calmpose']
    },
    notes: ['**Safety Alert**: High risk of dependency and respiratory depression with IV use. Must have resuscitation equipment ready during IV administration. Rectal gel is highly effective for pediatric seizures at home/ER.']
  },
  {
    id: 'cns_005',
    genericName: 'Gabapentin',
    therapeuticClass: 'Anticonvulsant / Neuropathic Pain Agent',
    categoryId: 'cns',
    indications: ['Neuropathic Pain', 'Partial Seizures (Adjunct)', 'Restless Legs Syndrome', 'Pain', 'Fits'],
    dosing: {
      adult: 'PO: 300 mg OD on day 1, 300 mg BID on day 2, 300 mg TID on day 3. Maintenance: 900-3600 mg/day.',
      pediatric: 'PO (Seizures 3-12 yrs): Start 10-15 mg/kg/day in 3 divided doses.'
    },
    safety: {
      adr: ['Dizziness', 'Somnolence', 'Peripheral edema', 'Weight gain'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['100mg', '300mg', '400mg capsule'],
      dosageForms: ['Capsule', 'Tablet'],
      priceNPR: '300mg cap: 10-15',
      brandNames: ['Gabapin', 'Neurontin']
    },
    notes: ['Dose must be reduced in renal impairment. Requires slow titration to avoid severe dizziness.']
  },
  {
    id: 'cns_006',
    genericName: 'Lacosamide',
    therapeuticClass: 'Anticonvulsant',
    categoryId: 'cns',
    indications: ['Partial-onset Seizures', 'Fits', 'Seizure'],
    dosing: {
      adult: 'PO/IV: Start 50 mg BID, increase by 100 mg/day weekly. Maintenance: 200-400 mg/day.',
      pediatric: 'PO (>4 yrs): Weight-based dosing (e.g., 1-2 mg/kg BID).'
    },
    safety: {
      adr: ['Dizziness', 'Headache', 'Nausea', 'PR interval prolongation'],
      contraindications: ['Second or third-degree AV block'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['50mg', '100mg', '150mg', '200mg tablet', '200mg/20ml vial'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '100mg tab: 20-30',
      brandNames: ['Lacosam', 'Vimpat']
    },
    notes: ['Monitor ECG in patients with known conduction problems or severe cardiac disease.']
  },
  {
    id: 'cns_007',
    genericName: 'Lamotrigine',
    therapeuticClass: 'Anticonvulsant / Mood Stabilizer',
    categoryId: 'cns',
    indications: ['Epilepsy', 'Bipolar Disorder (Maintenance)', 'Neuropathic pain (off-label)', 'Fits', 'Seizure'],
    dosing: {
      adult: 'PO: 25 mg daily for 2 weeks, then 50 mg daily for 2 weeks, then increase. Maintenance: 100-200 mg/day (varies with concomitant drugs).',
      pediatric: 'PO (2-12 yrs): Slowly titrate; 0.15-0.6 mg/kg/day depending on valproate/enzyme inducer use.'
    },
    safety: {
      adr: ['Rash (can be severe SJS/TEN)', 'Dizziness', 'Headache', 'Diplopia'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C (One of the safer antiepileptics in pregnancy but requires folate supplementation).'
    },
    pharmacy: {
      strengths: ['25mg', '50mg', '100mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 5-10',
      brandNames: ['Lamitor', 'Lamez']
    },
    notes: ['**Safety Alert**: Black box warning for life-threatening skin rashes (SJS/TEN). Must titrate SLOWLY. Valproate significantly increases lamotrigine levels.']
  },
  {
    id: 'cns_008',
    genericName: 'Levetiracetam',
    therapeuticClass: 'Anticonvulsant',
    categoryId: 'cns',
    indications: ['Partial, Myoclonic, and Tonic-Clonic Seizures', 'Status Epilepticus', 'Fits', 'Seizure'],
    dosing: {
      adult: 'PO/IV: 500 mg BID, max 3000 mg/day. IV loading for Status Epilepticus: 20-60 mg/kg.',
      pediatric: 'PO (>1 mo): Start 10 mg/kg BID, max 30 mg/kg BID. IV loading: 20-40 mg/kg.'
    },
    safety: {
      adr: ['Somnolence', 'Asthenia', 'Behavioral changes (agitation, aggression)', 'Dizziness'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C. Often preferred in pregnancy due to low teratogenic risk compared to VPA.'
    },
    pharmacy: {
      strengths: ['250mg', '500mg', '750mg tablet', '100mg/ml syrup', '500mg/5ml injection'],
      dosageForms: ['Tablet', 'Syrup', 'Injection'],
      priceNPR: '500mg tab: 15-25, Inj: 200-300',
      brandNames: ['Levroxa', 'Keppra']
    },
    notes: ['No significant drug interactions. Adjust dose in renal impairment. Watch for mood/behavioral changes.']
  },
  {
    id: 'cns_009',
    genericName: 'Oxcarbazepine',
    therapeuticClass: 'Anticonvulsant',
    categoryId: 'cns',
    indications: ['Partial Seizures', 'Trigeminal Neuralgia', 'Neuropathic pain', 'Fits', 'Seizure'],
    dosing: {
      adult: 'PO: Start 300 mg BID. Maintenance 1200-2400 mg/day.',
      pediatric: 'PO (4-16 yrs): Start 8-10 mg/kg/day in two divided doses.'
    },
    safety: {
      adr: ['Hyponatremia (more common than with carbamazepine)', 'Dizziness', 'Somnolence', 'Diplopia'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['150mg', '300mg', '600mg tablet', '300mg/5ml suspension'],
      dosageForms: ['Tablet', 'Suspension'],
      priceNPR: '300mg tab: 10-15',
      brandNames: ['Oxmazetol', 'Trioptal']
    },
    notes: ['Does not undergo autoinduction like carbamazepine. Monitor serum sodium closely, especially in the elderly.']
  },
  {
    id: 'cns_010',
    genericName: 'Phenobarbital',
    therapeuticClass: 'Barbiturate (Anticonvulsant)',
    categoryId: 'cns',
    indications: ['Tonic-Clonic and Partial Seizures', 'Neonatal Seizures', 'Status Epilepticus', 'Fits', 'Seizure'],
    dosing: {
      adult: 'PO: 60-120 mg/day. IV Status Epilepticus loading: 10-20 mg/kg (rate < 50 mg/min).',
      pediatric: 'IV (Neonatal seizures): Loading 15-20 mg/kg. Maintenance PO/IV: 3-5 mg/kg/day.'
    },
    safety: {
      adr: ['Sedation', 'Cognitive impairment', 'Respiratory depression (IV)', 'Paradoxical excitement in children'],
      contraindications: ['Porphyria', 'Severe respiratory depression'],
      pregnancyLactation: 'Category D. Teratogenic.'
    },
    pharmacy: {
      strengths: ['30mg', '60mg tablet', '200mg/ml injection'],
      dosageForms: ['Tablet', 'Injection', 'Syrup'],
      priceNPR: 'Tab: 1-3, Inj: 20-40',
      brandNames: ['Gardenal', 'Lumina']
    },
    notes: ['**Safety Alert**: High risk of respiratory depression with rapid IV push. Long half-life. Potent enzymatic inducer. Drug of choice for neonatal seizures.']
  },
  {
    id: 'cns_011',
    genericName: 'Phenytoin',
    therapeuticClass: 'Anticonvulsant',
    categoryId: 'cns',
    indications: ['Tonic-Clonic Seizures', 'Status Epilepticus', 'Neurosurgery prophylaxis', 'Fits', 'Seizure'],
    dosing: {
      adult: 'IV Status Epilepticus Loading: 15-20 mg/kg @ max rate 50 mg/min. PO Maintenance: 300 mg/day.',
      pediatric: 'IV Loading: 15-20 mg/kg @ max rate 1-3 mg/kg/min. PO Maintenance: 4-8 mg/kg/day.'
    },
    safety: {
      adr: ['Gingival hyperplasia', 'Nystagmus', 'Ataxia', 'Hypotension/Arrhythmias (if given too fast IV)', 'SJS'],
      contraindications: ['Sinus bradycardia', 'Heart block', 'Porphyria'],
      pregnancyLactation: 'Category D. Causes fetal hydantoin syndrome.'
    },
    pharmacy: {
      strengths: ['100mg capsule', '50mg/ml injection (2ml/5ml ampoule)', '30mg/5ml suspension'],
      dosageForms: ['Capsule', 'Tablet', 'Injection', 'Suspension'],
      priceNPR: '100mg cap: 2-5, Inj (50mg/ml 2ml): 15-30',
      brandNames: ['Eptoin', 'Dilantin']
    },
    notes: ['**Safety Alert**: IV administration MUST be slow to prevent severe cardiovascular collapse or "purple glove syndrome". Do not mix with dextrose solutions (precipitates). Non-linear kinetics (small dose change can cause massive level rise).']
  },
  {
    id: 'cns_012',
    genericName: 'Topiramate',
    therapeuticClass: 'Anticonvulsant',
    categoryId: 'cns',
    indications: ['Epilepsy', 'Migraine Prophylaxis', 'Fits', 'Seizure', 'Headache'],
    dosing: {
      adult: 'PO (Epilepsy): 25-50 mg/day initially, titrate to 200-400 mg/day. Migraine: 50-100 mg/day.',
      pediatric: 'PO (Epilepsy >2 yrs): 1-3 mg/kg/day initially, maintenance 5-9 mg/kg/day.'
    },
    safety: {
      adr: ['Cognitive dulling ("Dopamax" effect)', 'Weight loss', 'Kidney stones', 'Glaucoma (rare)', 'Paresthesias'],
      contraindications: ['Recent alcohol use (with ER formulation)'],
      pregnancyLactation: 'Category D. Risk of oral clefts.'
    },
    pharmacy: {
      strengths: ['25mg', '50mg', '100mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '25mg tab: 5-10',
      brandNames: ['Topamac', 'Epitop']
    },
    notes: ['Advise adequate hydration to prevent nephrolithiasis. May decrease efficacy of oral contraceptives.']
  },
  {
    id: 'cns_013',
    genericName: 'Valproic Acid (Sodium Valproate)',
    therapeuticClass: 'Anticonvulsant / Mood Stabilizer',
    categoryId: 'cns',
    indications: ['Epilepsy (All types)', 'Bipolar Mania', 'Migraine Prophylaxis', 'Fits', 'Seizure'],
    dosing: {
      adult: 'PO/IV: 10-15 mg/kg/day initially, can titrate to max 60 mg/kg/day. IV for status: 20-40 mg/kg loading.',
      pediatric: 'PO/IV: 15-20 mg/kg/day initially. IV Loading for Status Epilepticus: 20-40 mg/kg.'
    },
    safety: {
      adr: ['Hepatotoxicity', 'Pancreatitis', 'Weight gain', 'Tremor', 'Thrombocytopenia', 'Teratogenicity'],
      contraindications: ['Hepatic disease', 'Urea cycle disorders', 'Mitochondrial disorders'],
      pregnancyLactation: 'Category D/X. **CONTRAINDICATED in pregnancy for migraine/bipolar, extreme caution/avoid in epilepsy (neural tube defects).**'
    },
    pharmacy: {
      strengths: ['200mg', '300mg', '500mg CR tablet', '200mg/5ml syrup', '100mg/ml injection (10ml vial)'],
      dosageForms: ['Tablet', 'Syrup', 'Injection'],
      priceNPR: '500mg CR tab: 8-15, Inj: 150-250',
      brandNames: ['Encorate', 'Valparin']
    },
    notes: ['**Safety Alert**: High risk of neural tube defects (teratogen) - avoid in women of childbearing potential if possible. Monitor LFTS thoroughly during early therapy for fatal hepatotoxicity.']
  },
  {
    id: 'cns_014',
    genericName: 'Amantadine',
    therapeuticClass: 'Antiparkinsonian / Antiviral',
    categoryId: 'cns',
    indications: ['Parkinson\'s Disease', 'Drug-induced Extrapyramidal Symptoms (EPS)'],
    dosing: {
      adult: 'PO: 100 mg 1-2 times daily.',
      pediatric: 'Not indicated for Parkinson\'s.'
    },
    safety: {
      adr: ['Livedo reticularis', 'Hallucinations', 'Confusion', 'Peripheral edema'],
      contraindications: ['Severe renal impairment (requires dose adjustment)', 'History of seizures'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['100mg capsule'],
      dosageForms: ['Capsule', 'Tablet'],
      priceNPR: '100mg cap: 10-20',
      brandNames: ['Amantrel']
    },
    notes: ['Must be withdrawn gradually to avoid parkinsonian crisis or neuroleptic malignant syndrome-like states.']
  },
  {
    id: 'cns_015',
    genericName: 'Benztropine',
    therapeuticClass: 'Anticholinergic Antiparkinsonian',
    categoryId: 'cns',
    indications: ['Parkinsonism', 'Drug-induced EPS (e.g., from antipsychotics)'],
    dosing: {
      adult: 'PO/IM/IV: 1-2 mg daily, up to 6 mg daily.',
      pediatric: 'PO/IM/IV (>3 yrs): 0.02-0.05 mg/kg/dose.'
    },
    safety: {
      adr: ['Dry mouth', 'Blurred vision', 'Constipation', 'Urinary retention', 'Confusion/Tachycardia'],
      contraindications: ['Angle-closure glaucoma', 'Tardive dyskinesia', 'Bowel obstruction'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['2mg tablet', '1mg/ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: 'Tab: 2-5',
      brandNames: ['Cogentin']
    },
    notes: ['Often used PRN in emergency for acute dystonic reactions (e.g., torticollis from haloperidol).']
  },
  {
    id: 'cns_016',
    genericName: 'Levodopa + Carbidopa',
    therapeuticClass: 'Dopamine Precursor / Decarboxylase Inhibitor',
    categoryId: 'cns',
    indications: ['Parkinson\'s Disease'],
    dosing: {
      adult: 'PO: Typical start 25/100 mg or 50/200 mg TID, titrate according to clinical response.',
      pediatric: 'Not applicable.'
    },
    safety: {
      adr: ['Nausea', 'Dyskinesias', 'Orthostatic hypotension', 'Hallucinations/Confusion', 'Dark urine'],
      contraindications: ['Narrow-angle glaucoma', 'Non-selective MAOI concurrent use', 'Undiagnosed skin lesions (history of melanoma)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['100/10mg', '100/25mg', '200/50mg tablet (Levodopa/Carbidopa)', 'CR formulations'],
      dosageForms: ['Tablet'],
      priceNPR: '110mg CR tab: 5-10',
      brandNames: ['Syndopa', 'Tidomet']
    },
    notes: ['The gold standard for Parkinson’s. Do not stop abruptly (risk of Neuroleptic Malignant Syndrome). Dietary protein can interfere with absorption.']
  },
  {
    id: 'cns_017',
    genericName: 'Trihexyphenidyl (Benzhexol)',
    therapeuticClass: 'Anticholinergic Antiparkinsonian',
    categoryId: 'cns',
    indications: ['Parkinson\'s Disease', 'Drug-induced Extrapyramidal Symptoms (EPS)'],
    dosing: {
      adult: 'PO: 1-2 mg/day initially, up to 5-15 mg/day in divided doses.',
      pediatric: 'PO: Not commonly used, sometimes child/adolescent doses 1-2 mg for dystonias.'
    },
    safety: {
      adr: ['Dry mouth', 'Constipation', 'Blurred vision', 'Urinary retention', 'Memory impairment (elderly)'],
      contraindications: ['Narrow-angle glaucoma', 'GI obstruction', 'Megacolon'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['2mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '2mg tab: 1-3',
      brandNames: ['Pacitane', 'Parkin']
    },
    notes: ['Use with caution in the elderly due to high risk of confusion, hallucinations, and cognitive impairment.']
  },
  {
    id: 'cns_018',
    genericName: 'Ergotamine Tartrate',
    therapeuticClass: 'Ergot Alkaloid',
    categoryId: 'cns',
    indications: ['Acute Migraine Attacks', 'Cluster Headaches', 'Headache'],
    dosing: {
      adult: 'PO: 1-2 mg at onset, then 1 mg every 30 mins if needed. Max 6 mg/day or 10 mg/week.',
      pediatric: 'Safety not established.'
    },
    safety: {
      adr: ['Nausea/Vomiting (severe)', 'Peripheral ischemia (Ergotism)', 'Rebound headache', 'Angina'],
      contraindications: ['Ischemic heart disease', 'Peripheral vascular disease', 'Pregnancy', 'Severe hypertension', 'Concurrency with triptans/macrolides'],
      pregnancyLactation: 'Category X. CONTRAINDICATED (Oxytocic effects).'
    },
    pharmacy: {
      strengths: ['Often formulated with caffeine (e.g., Ergotamine 1mg + Caffeine 100mg)'],
      dosageForms: ['Tablet'],
      priceNPR: 'Tab: 5-10',
      brandNames: ['Vasograin (combo)', 'Ergocof']
    },
    notes: ['**Safety Alert**: Overuse causes severe rebound headaches. Vasoconstriction can be dangerous (ergotism). Triptans generally preferred.']
  },
  {
    id: 'cns_019',
    genericName: 'Sumatriptan',
    therapeuticClass: '5-HT1 Receptor Agonist (Triptan)',
    categoryId: 'cns',
    indications: ['Acute Migraine Attacks', 'Cluster Headaches', 'Headache'],
    dosing: {
      adult: 'PO: 50-100 mg at onset, may repeat once after 2 hours (Max 200 mg/day). SC: 6 mg at onset. Nasal: 20 mg.',
      pediatric: 'Nasal spray preferred in older children/adolescents.'
    },
    safety: {
      adr: ['Tingling', 'Warmth/Heaviness in chest or neck', 'Coronary vasospasm (rare but severe)'],
      contraindications: ['Ischemic heart disease', 'History of stroke/TIA', 'Uncontrolled hypertension', 'Hemiplegic migraine', 'Concurrent use with Ergotamine/MAOIs'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mg', '50mg', '100mg tablet', '6mg/0.5ml injection'],
      dosageForms: ['Tablet', 'Injection', 'Nasal Spray'],
      priceNPR: '50mg tab: 50-80, SC Inj: 600+',
      brandNames: ['Suminat']
    },
    notes: ['Take AS EARLY as possible during the migraine attack. Not for prophylaxis.']
  },
  {
    id: 'cns_020',
    genericName: 'Flunarizine',
    therapeuticClass: 'Calcium Channel Blocker (Migraine prophylaxis)',
    categoryId: 'cns',
    indications: ['Migraine Prophylaxis', 'Vertigo', 'Headache'],
    dosing: {
      adult: 'PO: 5-10 mg at night.',
      pediatric: 'PO: 5 mg at night.'
    },
    safety: {
      adr: ['Weight gain', 'Drowsiness/Sedation', 'Depression', 'Extrapyramidal symptoms (EPS - Parkinsonism)'],
      contraindications: ['History of depression', 'Pre-existing Parkinson\'s disease or extrapyramidal disorders'],
      pregnancyLactation: 'Not recommended.'
    },
    pharmacy: {
      strengths: ['5mg', '10mg tablet/capsule'],
      dosageForms: ['Tablet', 'Capsule'],
      priceNPR: '5mg tab: 4-8',
      brandNames: ['Flunarin', 'Sibelium']
    },
    notes: ['Prolonged use can induce severe depression and Parkinsonian symptoms in susceptible individuals. Should not be used for acute attacks.']
  },
  {
    id: 'cns_021',
    genericName: 'Acetazolamide',
    therapeuticClass: 'Carbonic Anhydrase Inhibitor',
    categoryId: 'cns',
    indications: ['Glaucoma', 'High Altitude Sickness', 'Idiopathic Intracranial Hypertension (Lowering ICP)'],
    dosing: {
      adult: 'PO: 250-1000 mg/day in divided doses. Acute Mountain Sickness prophylaxis: 125-250 mg BID.',
      pediatric: 'PO/IV: 8-30 mg/kg/day in divided doses.'
    },
    safety: {
      adr: ['Paresthesias (tingling)', 'Polyuria', 'Metabolic acidosis', 'Hypokalemia', 'SJS (Sulfonamide derivative)'],
      contraindications: ['Severe hepatic/renal impairment', 'Severe hypokalemia/hyponatremia', 'Sulfa allergy'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['250mg tablet', '500mg SR capsule'],
      dosageForms: ['Tablet', 'Capsule', 'Injection'],
      priceNPR: '250mg tab: 5-10',
      brandNames: ['Diamox']
    },
    notes: ['Used off-label to lower intracranial pressure. Warn patients about tingling in fingers/toes.']
  },
  {
    id: 'cns_022',
    genericName: 'Mannitol',
    therapeuticClass: 'Osmotic Diuretic',
    categoryId: 'cns',
    indications: ['Cerebral Edema (Lowering ICP)', 'Acute Renal Failure (Oliguric phase - obsolete use)'],
    dosing: {
      adult: 'IV: 0.25 to 2 g/kg as a 15-20% solution given over 30-60 minutes.',
      pediatric: 'IV: 0.25-1 g/kg/dose.'
    },
    safety: {
      adr: ['Volume depletion/dehydration', 'Initial volume expansion causing heart failure', 'Electrolyte imbalances'],
      contraindications: ['Anuria', 'Severe pulmonary edema', 'Active intracranial bleeding (except during craniotomy)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10%', '20% IV Infusion (100ml / 250ml)'],
      dosageForms: ['IV Infusion'],
      priceNPR: '20% 100ml bottle: 70-120',
      brandNames: ['Mannitol 20%']
    },
    notes: ['**Safety Alert**: Crystals may form at low temperatures; warm and use a fiter needle/set. Monitor serum osmolality and electrolytes closely.']
  }
];
