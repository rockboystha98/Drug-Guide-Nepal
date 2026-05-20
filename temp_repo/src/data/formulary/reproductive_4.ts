import { DrugEntry } from '../../types/formulary';

export const reproductive4Drugs: DrugEntry[] = [
  // 12.9 Oxytocics
  {
    id: 'rep_023',
    genericName: 'Oxytocin',
    therapeuticClass: 'Oxytocic',
    categoryId: 'reproductive',
    indications: ['Induction/Augmentation of Labor', 'Postpartum Hemorrhage (PPH) Prophylaxis and Treatment'],
    dosing: {
      adult: 'Induction: IV Infusion 1-2 mU/min, titrate up. PPH Prophylaxis: 10 IU IM or 5 IU slow IV after delivery of anterior shoulder. PPH Treatment: 20-40 IU in 1L crystalloid IV at 250ml/hr.',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Uterine hyperstimulation', 'Fetal distress', 'Water intoxication (prolonged high doses)', 'Hypotension (if rapid IV push)'],
      contraindications: ['Cephalopelvic disproportion', 'Fetal distress (if delivery not imminent)', 'Placenta previa', 'Prior classical C-section'],
      pregnancyLactation: 'Category X (Contraindicated before term unless for medical induction).'
    },
    pharmacy: {
      strengths: ['5 IU/ml, 10 IU/ml ampoule'],
      dosageForms: ['Injection'],
      priceNPR: '5 IU Ampoule: 15-25',
      brandNames: ['Syntocinon', 'Pitocin']
    },
    searchTags: ['Labor', 'PPH', 'Delivery', 'Bleeding'],
    notes: ['Must use an infusion pump for induction to avoid dangerous hyperstimulation. Store at 2-8°C.']
  },
  {
    id: 'rep_024',
    genericName: 'Ergometrine',
    therapeuticClass: 'Ergot Alkaloid / Oxytocic',
    categoryId: 'reproductive',
    indications: ['Postpartum Hemorrhage (PPH) Treatment/Prophylaxis', 'Post-abortion bleeding'],
    dosing: {
      adult: 'IM/IV: 0.2 mg. May repeat once if needed (severe bleeding).',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['**Hypertension (severe)**', 'Nausea/Vomiting', 'Headache', 'Vasospasm'],
      contraindications: ['**Hypertension / Pre-eclampsia / Eclampsia**', 'Heart Disease', 'Pregnancy (causes sustained tetanic uterine contraction)'],
      pregnancyLactation: 'Category X (Contraindicated in pregnancy). May inhibit lactation.'
    },
    pharmacy: {
      strengths: ['0.2mg/ml ampoule', '0.2mg tablet'],
      dosageForms: ['Injection', 'Tablet'],
      priceNPR: 'Ampoule: 10-20',
      brandNames: ['Ergotab', 'Ergomet']
    },
    searchTags: ['PPH', 'Delivery', 'Bleeding'],
    notes: ['ABSOLUTE CONTRAINDICATION in hypertensive disorders of pregnancy. Causes intense, sustained uterine contraction (tetanus) - NEVER use before delivery of the baby.']
  },
  {
    id: 'rep_025',
    genericName: 'Methylergometrine',
    therapeuticClass: 'Ergot Alkaloid / Oxytocic',
    categoryId: 'reproductive',
    indications: ['Routine management of uterine atony, hemorrhage, and subinvolution following delivery or abortion'],
    dosing: {
      adult: 'IM/PO: 0.2 mg IM/IV stat, followed by 0.2 mg PO TIR for up to 1 week if needed.',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Hypertension', 'Nausea/Vomiting', 'Headache', 'Ergotism (prolonged use)'],
      contraindications: ['Hypertension', 'Pre-eclampsia', 'Eclampsia', 'Pregnancy (before delivery)'],
      pregnancyLactation: 'Category X. Can suppress lactation.'
    },
    pharmacy: {
      strengths: ['0.2mg/ml ampoule', '0.125mg tablet'],
      dosageForms: ['Injection', 'Tablet'],
      priceNPR: 'Ampoule: 15-25',
      brandNames: ['Methergin']
    },
    searchTags: ['PPH', 'Delivery', 'Bleeding'],
    notes: ['Check BP before administration. Do not give if BP > 140/90.']
  },
  {
    id: 'rep_026',
    genericName: 'Mifepristone',
    therapeuticClass: 'Antiprogestin',
    categoryId: 'reproductive',
    indications: ['Medical termination of intrauterine pregnancy (Medical Abortion)'],
    dosing: {
      adult: 'PO: 200 mg as a single dose (followed 24-48 hours later by Misoprostol 800 mcg vaginally, buccally, or sublingually).',
      pediatric: 'Not generally indicated.'
    },
    safety: {
      adr: ['Vaginal bleeding (can be heavy)', 'Abdominal cramping', 'Nausea/Vomiting', 'Infection risk'],
      contraindications: ['Ectopic pregnancy', 'Chronic adrenal failure', 'Concurrent long-term corticosteroid therapy', 'Bleeding disorders'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['200mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: 'MA Kit (Mifepristone + Misoprostol): 500-800',
      brandNames: ['MTPill', 'Termipil']
    },
    searchTags: ['Abortion', 'Bleeding', 'Pregnancy termination'],
    notes: ['Must have rapid access to emergency care in case of incomplete abortion or severe hemorrhage.']
  },
  {
    id: 'rep_027',
    genericName: 'Misoprostol',
    therapeuticClass: 'Prostaglandin E1 Analog',
    categoryId: 'reproductive',
    indications: ['Medical Abortion', 'Labor Induction (Cervical ripening)', 'Postpartum Hemorrhage (PPH)', 'Missed/Incomplete abortion management'],
    dosing: {
      adult: 'PPH Prophylaxis: 600 mcg PO/SL immediately after delivery. PPH Treatment: 800 mcg SL/PR. Induction: 25 mcg vaginally Q4H.',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Shivering/Chills', 'Fever', 'Diarrhea', 'Uterine hyperstimulation/rupture'],
      contraindications: ['Previous Cesarean section (for induction due to high risk of rupture)'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['200mcg tablet (often scored)'],
      dosageForms: ['Tablet (PO/SL/Vaginal/Rectal)'],
      priceNPR: '200mcg tab: 15-20',
      brandNames: ['Cytolog', 'Misoprost']
    },
    searchTags: ['Abortion', 'PPH', 'Labor', 'Cervix', 'Bleeding'],
    notes: ['Keep away from moisture (tablets degrade rapidly if exposed to air). Do not exceed 25mcg per dose for induction of a live fetus.']
  },
  {
    id: 'rep_028',
    genericName: 'Dinoprostone',
    therapeuticClass: 'Prostaglandin E2 Analog',
    categoryId: 'reproductive',
    indications: ['Cervical ripening for induction of labor at term'],
    dosing: {
      adult: 'Vaginal gel: 0.5 mg into cervical canal. Vaginal insert: 10 mg (releases 0.3 mg/hr) left in place for up to 12 hours.',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Uterine hyperstimulation (with or without fetal distress)', 'Nausea', 'Vomiting', 'Fever'],
      contraindications: ['Previous Cesarean section or major uterine surgery', 'Fetal distress', 'Unexplained vaginal bleeding'],
      pregnancyLactation: 'Used specifically at term for induction.'
    },
    pharmacy: {
      strengths: ['0.5mg/3g gel', '10mg vaginal insert'],
      dosageForms: ['Cervical Gel', 'Vaginal Insert'],
      priceNPR: 'Gel: 300-500',
      brandNames: ['Cerviprime', 'Propess']
    },
    searchTags: ['Labor', 'Cervix'],
    notes: ['Must be in a hospital setting with continuous fetal heart rate and uterine activity monitoring.']
  },
  // 12.10 Tocolytics
  {
    id: 'rep_029',
    genericName: 'Nifedipine',
    therapeuticClass: 'Calcium Channel Blocker / Tocolytic',
    categoryId: 'reproductive',
    indications: ['Preterm Labor (Tocolysis)', 'Pregnancy-induced hypertension'],
    dosing: {
      adult: 'Tocolysis PO: 20 mg stat, then 10-20 mg Q4-6H (or 20 mg SR Q12H) for 48 hours.',
      pediatric: 'Not indicated for this use.'
    },
    safety: {
      adr: ['Hypotension', 'Tachycardia', 'Flushing', 'Headache'],
      contraindications: ['Hypotension', 'Cardiogenic shock', 'Aortic stenosis'],
      pregnancyLactation: 'Category C. Preferred first-line tocolytic.'
    },
    pharmacy: {
      strengths: ['10mg IR capsule/tablet', '20mg SR tablet'],
      dosageForms: ['Tablet', 'Capsule'],
      priceNPR: '10mg tab: 5-10',
      brandNames: ['Depin', 'Nicardia']
    },
    searchTags: ['Preterm', 'Tocolytic', 'Labor'],
    notes: ['Used to delay delivery by 48 hours to allow for antenatal corticosteroid administration (betamethasone) for fetal lung maturity.']
  },
  {
    id: 'rep_030',
    genericName: 'Isoxsuprine',
    therapeuticClass: 'Uterine Sympathomimetic (Beta-agonist)',
    categoryId: 'reproductive',
    indications: ['Premature labor (Tocolysis - second line)', 'Dysmenorrhea (historical)'],
    dosing: {
      adult: 'IV Infusion: 0.2-0.3 mg/min initially. PO maintenance: 10-20 mg QID.',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Maternal tachycardia/palpitations', 'Hypotension', 'Tremor', 'Pulmonary edema (especially if given with IV fluids/corticosteroids)'],
      contraindications: ['Maternal cardiac disease', 'Hemorrhage', 'Severe pre-eclampsia'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['10mg/2ml injection', '10mg, 40mg(SR) tablet'],
      dosageForms: ['Injection', 'Tablet'],
      priceNPR: '10mg tab: 8-15',
      brandNames: ['Duvadilan']
    },
    searchTags: ['Preterm', 'Labor', 'Tocolytic'],
    notes: ['Strictly monitor maternal heart rate and strictly restrict IV fluids to prevent dangerous pulmonary edema.']
  }
];
