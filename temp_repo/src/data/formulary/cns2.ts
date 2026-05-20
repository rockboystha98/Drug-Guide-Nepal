import { DrugEntry } from '../../types/formulary';

export const cnsDrugs2: DrugEntry[] = [
  {
    id: 'cns_023',
    genericName: 'Buprenorphine',
    therapeuticClass: 'Opioid Partial Agonist',
    categoryId: 'cns',
    indications: ['Moderate to Severe Pain', 'Opioid Dependence (Substitution Therapy)', 'Pain'],
    dosing: {
      adult: 'SL/Buccal: 0.2-0.4 mg Q6-8H. IM/Slow IV: 0.3-0.6 mg Q6-8H. Patch: 5-20 mcg/hr. Substitution: 2-24 mg/day SL.',
      pediatric: 'IV/IM (>6 mos): 2-6 mcg/kg Q6-8H.'
    },
    safety: {
      adr: ['Sedation', 'Nausea', 'Respiratory depression (resistant to naloxone due to high receptor affinity)', 'Constipation'],
      contraindications: ['Significant respiratory depression', 'Acute alcoholism'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['0.2mg SL', '2mg SL tablet', '0.3mg/ml injection', 'Transdermal Patch (5,10,20mcg/hr)'],
      dosageForms: ['Tablet', 'Injection', 'Patch'],
      priceNPR: 'Amp: 25-50, Patch: 300-600',
      brandNames: ['Buprigesic', 'Addnok']
    },
    notes: ['**Safety Alert**: Partial agonist. Can precipitate withdrawal in opioid-dependent patients if given while full agonists are in the system.']
  },
  {
    id: 'cns_024',
    genericName: 'Methadone',
    therapeuticClass: 'Opioid Analgesic / Substitution Therapy',
    categoryId: 'cns',
    indications: ['Opioid Dependence', 'Severe Chronic Pain', 'Pain'],
    dosing: {
      adult: 'PO: Start 20-30 mg/day, titrate upward. Pain: 2.5-10 mg Q8-12H.',
      pediatric: 'Not generally recommended for pediatric pain.'
    },
    safety: {
      adr: ['QT prolongation', 'Respiratory depression (delayed)', 'Constipation', 'Sedation'],
      contraindications: ['Significant respiratory depression', 'Known QT prolongation'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['5mg', '10mg tablet', '5mg/5ml syrup'],
      dosageForms: ['Tablet', 'Syrup'],
      priceNPR: 'Variable',
      brandNames: ['Methadone']
    },
    notes: ['**Safety Alert**: Long half-life (up to 120 hrs) means it accumulates, causing delayed, fatal respiratory depression. Requires strict monitoring and ECG.']
  },
  {
    id: 'cns_025',
    genericName: 'Morphine',
    therapeuticClass: 'Opioid Analgesic',
    categoryId: 'cns',
    indications: ['Severe Acute Pain', 'Chronic Pain', 'Acute Pulmonary Edema', 'Pain'],
    dosing: {
      adult: 'IV: 2-10 mg Q2-6H. PO: 10-30 mg Q4H (IR); or 15-30 mg Q12H (ER). SC/IM: 5-10 mg.',
      pediatric: 'IV: 0.05-0.1 mg/kg/dose Q2-4H PRN. PO: 0.2-0.5 mg/kg/dose.'
    },
    safety: {
      adr: ['Respiratory depression', 'Constipation', 'Nausea/Vomiting', 'Histamine release', 'Sedation'],
      contraindications: ['Severe respiratory depression', 'Acute asthma/COPD exacerbation'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg', '20mg', '30mg SR tablet', '10mg/ml, 15mg/ml ampoule'],
      dosageForms: ['Tablet', 'Injection', 'Syrup'],
      priceNPR: 'Amp: 15-30, Tab: 10-20',
      brandNames: ['Morphine', 'Morcontin']
    },
    notes: ['**Safety Alert**: Gold standard for severe pain. Monitor for respiratory depression. Have Naloxone available during IV administration.']
  },
  {
    id: 'cns_026',
    genericName: 'Pethidine (Meperidine)',
    therapeuticClass: 'Opioid Analgesic',
    categoryId: 'cns',
    indications: ['Moderate to Severe Acute Pain', 'Shivering (Post-anesthetic)', 'Pain'],
    dosing: {
      adult: 'IM/SC: 50-100 mg Q3-4H. IV: 25-50 mg slowly.',
      pediatric: 'IM/SC/IV: 1-1.5 mg/kg/dose Q3-4H.'
    },
    safety: {
      adr: ['Neurotoxicity (seizures from normeperidine metabolite)', 'Respiratory depression', 'Nausea', 'Tachycardia'],
      contraindications: ['MAOI use (Serotonin Syndrome risk)', 'Renal impairment', 'Convulsive disorders'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['50mg/ml (2ml ampoule = 100mg)'],
      dosageForms: ['Injection', 'Tablet'],
      priceNPR: 'Amp: 15-25',
      brandNames: ['Pethidine']
    },
    notes: ['**Safety Alert**: Do not use for >48 hours or at high doses due to accumulation of the toxic metabolite normeperidine, which causes seizures.']
  },
  {
    id: 'cns_027',
    genericName: 'Tramadol',
    therapeuticClass: 'Atypical Opioid Analgesic',
    categoryId: 'cns',
    indications: ['Moderate to Moderately Severe Pain', 'Pain'],
    dosing: {
      adult: 'PO/IV/IM: 50-100 mg Q4-6H PRN. Max 400 mg/day.',
      pediatric: 'PO/IV/IM (> 12 yrs): Same as adult. Avoid < 12 yrs.'
    },
    safety: {
      adr: ['Nausea', 'Dizziness', 'Constipation', 'Seizures (high doses)', 'Serotonin Syndrome'],
      contraindications: ['Children < 12 years (risk of fatal respiratory depression)', 'Uncontrolled epilepsy'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['50mg capsule', '100mg SR tablet', '50mg/ml injection'],
      dosageForms: ['Capsule', 'Tablet', 'Injection'],
      priceNPR: 'Cap: 3-6, Amp: 10-20',
      brandNames: ['Tramazac', 'Contramal']
    },
    notes: ['Seizure risk increases at doses >400mg. Do not co-administer with SSRIs/SNRIs due to serotonin syndrome risk.']
  },
  {
    id: 'cns_028',
    genericName: 'Naloxone',
    therapeuticClass: 'Opioid Antagonist',
    categoryId: 'cns',
    indications: ['Opioid Overdose', 'Reversal of Opioid-Induced Respiratory Depression'],
    dosing: {
      adult: 'IV/IM/SC: 0.4-2 mg every 2-3 mins PRN.',
      pediatric: 'IV/IM/SC: 0.01-0.1 mg/kg/dose every 2-3 mins.'
    },
    safety: {
      adr: ['Precipitation of severe opioid withdrawal', 'Tachycardia', 'Pulmonary edema (rare)'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['0.4mg/ml ampoule'],
      dosageForms: ['Injection', 'Nasal Spray'],
      priceNPR: 'Amp: 60-100',
      brandNames: ['Nalox', 'Nex']
    },
    notes: ['**Safety Alert**: Opioid effects (e.g., methadone) may outlast nasal/IV naloxone. Requires observation for re-sedation.']
  },
  {
    id: 'cns_029',
    genericName: 'Naltrexone',
    therapeuticClass: 'Opioid Antagonist',
    categoryId: 'cns',
    indications: ['Opioid Dependence (Relapse Prevention)', 'Alcohol Dependence'],
    dosing: {
      adult: 'PO: 50 mg OD (MUST be opioid-free for 7-10 days before starting).',
      pediatric: 'Not recommended.'
    },
    safety: {
      adr: ['Nausea', 'Headache', 'Hepatotoxicity (at high doses)'],
      contraindications: ['Current opioid dependence or active opioid withdrawal', 'Acute hepatitis/liver failure'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['50mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 50-80',
      brandNames: ['Nodict', 'Naltima']
    },
    notes: ['Completely block opioid analgesia; requires non-opioid pain management in emergencies.']
  },
  {
    id: 'cns_030',
    genericName: 'Fluoxetine',
    therapeuticClass: 'SSRI (Selective Serotonin Reuptake Inhibitor)',
    categoryId: 'cns',
    indications: ['Major Depressive Disorder (MDD)', 'OCD', 'Depression'],
    dosing: {
      adult: 'PO: 20 mg OD in the morning, up to 60-80 mg/day.',
      pediatric: 'PO (MDD > 8 yrs): 10-20 mg OD.'
    },
    safety: {
      adr: ['Insomnia', 'Nausea', 'Sexual dysfunction', 'Suicidality'],
      contraindications: ['Concomitant MAOI use'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg', '20mg capsule/tablet'],
      dosageForms: ['Capsule', 'Tablet'],
      priceNPR: '20mg cap: 3-6',
      brandNames: ['Fludac', 'Prodep']
    },
    notes: ['Longest half-life of all SSRIs (active metabolite lasts weeks). Does not require tapering.']
  },
  {
    id: 'cns_031',
    genericName: 'Escitalopram',
    therapeuticClass: 'SSRI',
    categoryId: 'cns',
    indications: ['Major Depressive Disorder (MDD)', 'Generalized Anxiety Disorder (GAD)', 'Depression', 'Anxiety'],
    dosing: {
      adult: 'PO: 10-20 mg OD.',
      pediatric: 'PO (MDD > 12 yrs): 10-20 mg OD.'
    },
    safety: {
      adr: ['Nausea', 'Sexual dysfunction', 'QT prolongation'],
      contraindications: ['Concomitant MAOI use', 'Pimozide use', 'Known QT prolongation'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['5mg', '10mg', '20mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '10mg tab: 4-8',
      brandNames: ['Nexito', 'Stalopam']
    },
    notes: ['S-enantiomer of citalopram. Dose capped at 20mg due to QT prolongation risk.']
  },
  {
    id: 'cns_032',
    genericName: 'Sertraline',
    therapeuticClass: 'SSRI',
    categoryId: 'cns',
    indications: ['Major Depressive Disorder', 'OCD', 'Panic Disorder', 'PTSD', 'Depression', 'Anxiety'],
    dosing: {
      adult: 'PO: Start 50 mg OD, titrate up to 200 mg/day.',
      pediatric: 'PO (OCD > 6 yrs): start 25-50 mg OD, up to 200 mg/day.'
    },
    safety: {
      adr: ['Nausea/Diarrhea', 'Insomnia', 'Sexual dysfunction'],
      contraindications: ['Concomitant MAOI use'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mg', '50mg', '100mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 4-7',
      brandNames: ['Serenata', 'Daxid']
    },
    notes: ['Higher incidence of GI side effects (diarrhea) initially compared to other SSRIs.']
  },
  {
    id: 'cns_033',
    genericName: 'Amitriptyline',
    therapeuticClass: 'Tricyclic Antidepressant (TCA)',
    categoryId: 'cns',
    indications: ['Neuropathic Pain', 'Migraine Prophylaxis', 'Insomnia', 'Depression'],
    dosing: {
      adult: 'PO (Depression): 50-150 mg/day at bedtime. PO (Pain/Migraine): 10-25 mg at bedtime.',
      pediatric: 'PO (Pain/Migraine prophylaxis): 0.1-2 mg/kg/day at bedtime.'
    },
    safety: {
      adr: ['Strong anticholinergic effects', 'Sedation', 'Weight gain', 'Orthostatic hypotension', 'QT prolongation/Arrhythmias'],
      contraindications: ['Recent MI', 'Arrhythmias', 'Severe liver disease', 'MAOI use'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg', '25mg', '75mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '25mg tab: 2-4',
      brandNames: ['Tryptomer', 'Eliwel']
    },
    notes: ['**Safety Alert**: Highly fatal in overdose due to cardiotoxicity (QRS widening, arrhythmias) and seizures.']
  },
  {
    id: 'cns_034',
    genericName: 'Duloxetine',
    therapeuticClass: 'SNRI',
    categoryId: 'cns',
    indications: ['Major Depressive Disorder', 'Generalized Anxiety Disorder', 'Diabetic Peripheral Neuropathy', 'Depression', 'Pain'],
    dosing: {
      adult: 'PO: 30-60 mg OD. Max 120 mg/day.',
      pediatric: 'PO (GAD > 7 yrs): 30-60 mg OD.'
    },
    safety: {
      adr: ['Nausea', 'Dry mouth', 'Constipation', 'Somnolence', 'Increased sweating'],
      contraindications: ['Concomitant MAOI use', 'Uncontrolled narrow-angle glaucoma'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['20mg', '30mg', '60mg capsule'],
      dosageForms: ['Capsule'],
      priceNPR: '30mg cap: 10-15',
      brandNames: ['Duzela', 'Symbal']
    },
    notes: ['Hepatotoxicity risk; avoid in chronic liver disease. Do not chew/crush capsules.']
  },
  {
    id: 'cns_035',
    genericName: 'Haloperidol',
    therapeuticClass: 'First Generation Antipsychotic',
    categoryId: 'cns',
    indications: ['Schizophrenia', 'Acute Psychosis', 'Psychosis'],
    dosing: {
      adult: 'PO: 0.5-5 mg BID/TID. IM (Acute): 2-5 mg.',
      pediatric: 'PO: 0.05-0.15 mg/kg/day.'
    },
    safety: {
      adr: ['Extrapyramidal symptoms (EPS - severe)', 'NMS (Neuroleptic Malignant Syndrome)', 'QT prolongation'],
      contraindications: ['Parkinson\'s disease', 'Severe CNS depression', 'Coma'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1.5mg', '5mg tablet', '5mg/ml injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '5mg tab: 2-5',
      brandNames: ['Serenace', 'Halopik']
    },
    notes: ['High potency typical antipsychotic. High EPS risk. Have benztropine/promethazine available.']
  },
  {
    id: 'cns_036',
    genericName: 'Olanzapine',
    therapeuticClass: 'Second Generation Antipsychotic',
    categoryId: 'cns',
    indications: ['Schizophrenia', 'Bipolar Disorder', 'Acute Agitation', 'Psychosis'],
    dosing: {
      adult: 'PO: 5-20 mg/day. IM: 5-10 mg for acute agitation.',
      pediatric: 'PO (>13 yrs): 2.5-10 mg/day.'
    },
    safety: {
      adr: ['Significant weight gain', 'Metabolic syndrome', 'Sedation', 'Hyperglycemia'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['2.5mg', '5mg', '10mg tablet', '10mg injection'],
      dosageForms: ['Tablet', 'Injection'],
      priceNPR: '5mg tab: 5-10',
      brandNames: ['Oleanz', 'Olanex']
    },
    notes: ['Very high risk of metabolic syndrome. Monitor fasting glucose and lipid profiles tightly.']
  },
  {
    id: 'cns_037',
    genericName: 'Alprazolam',
    therapeuticClass: 'Benzodiazepine (Anxiolytic)',
    categoryId: 'cns',
    indications: ['Panic Disorder', 'Anxiety'],
    dosing: {
      adult: 'PO: 0.25-0.5 mg TID. Max 4 mg/day.',
      pediatric: 'Not established.'
    },
    safety: {
      adr: ['Drowsiness', 'Cognitive impairment', 'Dependency (high risk)'],
      contraindications: ['Acute narrow angle glaucoma', 'Concurrent use with potent CYP3A4 inhibitors'],
      pregnancyLactation: 'Category D.'
    },
    pharmacy: {
      strengths: ['0.25mg', '0.5mg', '1mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '0.25mg tab: 1-3',
      brandNames: ['Alprax', 'Restyl']
    },
    notes: ['**Safety Alert**: High abuse potential and severe withdrawal symptoms if stopped abruptly.']
  }
];
