import { DrugEntry } from '../../types/formulary';

export const cnsDrugs4: DrugEntry[] = [
  {
    id: 'cns_056',
    genericName: 'Clomipramine',
    therapeuticClass: 'Tricyclic Antidepressant (TCA)',
    categoryId: 'cns',
    indications: ['Obsessive Compulsive Disorder (OCD)', 'Depression', 'Panic Disorder', 'Anxiety'],
    dosing: {
      adult: 'PO: 25 mg daily initially, scale up to 100-250 mg/day over weeks.',
      pediatric: 'PO (OCD > 10 yrs): Start 25 mg daily, scale up to max 3 mg/kg/day or 200 mg/day (whichever is less).'
    },
    safety: {
      adr: ['Strong anticholinergic side effects', 'Sexual dysfunction', 'Weight gain', 'Seizures (high dose)'],
      contraindications: ['Recent MI', 'Arrhythmias', 'MAOI use'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg', '25mg', '50mg', '75mg SR tablet/capsule'],
      dosageForms: ['Tablet', 'Capsule'],
      priceNPR: '25mg tab: 5-8',
      brandNames: ['Clofranil', 'Anafranil']
    },
    notes: ['Considered the most serotonergic of the TCAs, which makes it effective for OCD. High seizure threshold lowering.']
  },
  {
    id: 'cns_057',
    genericName: 'Dosulepin (Dothiepin)',
    therapeuticClass: 'Tricyclic Antidepressant (TCA)',
    categoryId: 'cns',
    indications: ['Depression (particularly where anxiety/insomnia present)'],
    dosing: {
      adult: 'PO: 75 mg daily at bedtime. May increase up to 150-225 mg/day.',
      pediatric: 'Not recommended.'
    },
    safety: {
      adr: ['High cardiovascular toxicity in overdose', 'Anticholinergic effects', 'Sedation'],
      contraindications: ['Recent MI', 'Arrhythmias', 'Severe liver disease', 'Acute porphyria'],
      pregnancyLactation: 'Not recommended.'
    },
    pharmacy: {
      strengths: ['25mg', '75mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '75mg tab: 6-10',
      brandNames: ['Prothiaden']
    },
    notes: ['**Safety Alert**: Extremely toxic in overdose. Largely restricted or discouraged in many countries due to fatal cardiovascular toxicity when taken intentionally in overdose.']
  },
  {
    id: 'cns_058',
    genericName: 'Imipramine',
    therapeuticClass: 'Tricyclic Antidepressant (TCA)',
    categoryId: 'cns',
    indications: ['Neurogenic bladder / Nocturnal Enuresis', 'Depression', 'Panic Disorder'],
    dosing: {
      adult: 'PO (Depression): 75 mg/day initially, up to 150-200 mg/day.',
      pediatric: 'PO (Enuresis > 6 yrs): 10-25 mg at bedtime. Max 50 mg (6-12 yrs) or 75 mg (>12 yrs).'
    },
    safety: {
      adr: ['Anticholinergic effects', 'Orthostatic hypotension', 'Cardiotoxicity'],
      contraindications: ['Recent MI', 'Arrhythmias', 'MAOI use'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mg', '75mg capsule'],
      dosageForms: ['Capsule/Tablet'],
      priceNPR: '25mg tab: 2-5',
      brandNames: ['Depsonil', 'Tofranil']
    },
    notes: ['The prototype TCA. Often used off-label for bedwetting in children, but desmopressin is preferred due to TCA toxicity risk.']
  },
  {
    id: 'cns_059',
    genericName: 'Nortriptyline',
    therapeuticClass: 'Tricyclic Antidepressant (TCA)',
    categoryId: 'cns',
    indications: ['Depression', 'Neuropathic Pain (Off-label)'],
    dosing: {
      adult: 'PO: 25 mg 3-4 times daily, or entire dose at bedtime (up to 150 mg/day). Pain: 10-25 mg at night.',
      pediatric: 'Not generally recommended in children.'
    },
    safety: {
      adr: ['Anticholinergic effects (less than Amitriptyline)', 'Sedation', 'Cardiotoxicity in overdose'],
      contraindications: ['Recent MI', 'Arrhythmias'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg', '25mg tab'],
      dosageForms: ['Tablet'],
      priceNPR: '25mg tab: 5-8',
      brandNames: ['Sensival', 'Nortrip']
    },
    notes: ['Active metabolite of amitriptyline. Often preferred over amitriptyline in the elderly because it has somewhat fewer anticholinergic effects and less orthostatic hypotension.']
  },
  {
    id: 'cns_060',
    genericName: 'Trazodone',
    therapeuticClass: 'Serotonin Antagonist and Reuptake Inhibitor (SARI)',
    categoryId: 'cns',
    indications: ['Depression (particularly with insomnia)', 'Insomnia', 'Anxiety'],
    dosing: {
      adult: 'PO (Depression): 150 mg/day in divided doses. PO (Insomnia): 50-100 mg at bedtime.',
      pediatric: 'Safety not established.'
    },
    safety: {
      adr: ['Sedation (profound)', 'Orthostatic hypotension', 'Priapism (rare but severe medical emergency)', 'QT prolongation'],
      contraindications: ['Concurrent MAOI use'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['50mg', '100mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 5-10',
      brandNames: ['Trazalon', 'Trittico']
    },
    notes: ['**Safety Alert**: Can cause priapism (prolonged, painful erection) which requires emergency surgical intervention to prevent permanent impotence. Highly sedating.']
  },
  {
    id: 'cns_061',
    genericName: 'Venlafaxine',
    therapeuticClass: 'SNRI (Serotonin Norepinephrine Reuptake Inhibitor)',
    categoryId: 'cns',
    indications: ['Major Depressive Disorder', 'Generalized Anxiety Disorder', 'Panic Disorder', 'Social Anxiety', 'Depression'],
    dosing: {
      adult: 'PO (XR): 75 mg OD. May increase up to 225 mg/day (some sources say 375 mg/day max for severe depression).',
      pediatric: 'PO (GAD off-label > 8 yrs): 37.5 mg - 75 mg OD.'
    },
    safety: {
      adr: ['Nausea', 'Somnolence', 'Dry mouth', 'Sweating', 'Dose-dependent hypertension', 'Severe withdrawal syndrome if stopped abruptly'],
      contraindications: ['Concomitant MAOI use'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['37.5mg', '75mg', '150mg XR capsule/tablet'],
      dosageForms: ['Capsule (XR)', 'Tablet'],
      priceNPR: '75mg XR cap: 8-15',
      brandNames: ['Venlor', 'Velax']
    },
    notes: ['Requires monitoring of blood pressure, especially at higher doses (>150mg). Has a notorious "brain zap" discontinuation syndrome; must be tapered extremely slowly.']
  },
  {
    id: 'cns_062',
    genericName: 'Fluvoxamine',
    therapeuticClass: 'SSRI',
    categoryId: 'cns',
    indications: ['Obsessive Compulsive Disorder (OCD)', 'Social Anxiety Disorder', 'Depression'],
    dosing: {
      adult: 'PO: 50 mg at bedtime initially, titrate up to 100-300 mg/day.',
      pediatric: 'PO (OCD > 8 yrs): 25 mg at bedtime initially, up to 200 mg/day.'
    },
    safety: {
      adr: ['Nausea (very common initially)', 'Insomnia/Somnolence', 'Asthenia'],
      contraindications: ['Concomitant use of tizanidine, thioridazine, or pimozide', 'MAOI use'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['50mg', '100mg tablet/capsule'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 8-12',
      brandNames: ['Flunil', 'Fluvoxin']
    },
    notes: ['Potent CYP1A2 inhibitor; has many significant drug interactions (e.g., heavily increases clozapine, theophylline, and caffeine levels).']
  },
  {
    id: 'cns_063',
    genericName: 'Paroxetine',
    therapeuticClass: 'SSRI',
    categoryId: 'cns',
    indications: ['Major Depressive Disorder', 'Panic Disorder', 'Social Anxiety', 'PTSD', 'Depression'],
    dosing: {
      adult: 'PO: 20 mg/day initially usually in the morning. Max 50-60 mg/day.',
      pediatric: 'Use with extreme caution. Often avoided due to high suicidality risk in adolescents.'
    },
    safety: {
      adr: ['Sexual dysfunction', 'Weight gain', 'Sedation', 'Anticholinergic effects (mild, but more than other SSRIs)'],
      contraindications: ['Concomitant MAOI, thioridazine, or pimozide use', 'Pregnancy (especially 1st trimester)'],
      pregnancyLactation: 'Category D. **Safety Alert**: Associated with increased risk of congenital cardiovascular defects (atrial/ventricular septal defects) in the first trimester. Avoid in pregnancy.'
    },
    pharmacy: {
      strengths: ['12.5mg CR', '25mg CR', '20mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '20mg tab: 8-15',
      brandNames: ['Pari CR', 'Xet']
    },
    notes: ['Shortest half-life of the SSRIs. Most notorious for severe discontinuation syndrome. Highly anticholinergic for an SSRI, causing more sedation/weight gain.']
  }
];
