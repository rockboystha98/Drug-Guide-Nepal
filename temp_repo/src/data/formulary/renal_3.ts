import { DrugEntry } from '../../types/formulary';

export const renal3Drugs: DrugEntry[] = [
  // 5.4 Drugs used for bladder pathology / Incontinence
  {
    id: 'ren_019',
    genericName: 'Oxybutynin',
    therapeuticClass: 'Anticholinergic / Antispasmodic',
    categoryId: 'renal',
    indications: ['Overactive Bladder (OAB)', 'Urinary Incontinence', 'Neurogenic Bladder'],
    dosing: {
      adult: 'PO: 5 mg 2-3 times daily (IR) or 5-10 mg OD (ER).',
      pediatric: '>5 yrs: 5 mg BD. Neurogenic bladder varies.'
    },
    renalAdjustment: 'Use with caution in renal impairment.',
    safety: {
      adr: ['Dry mouth', 'Constipation', 'Blurred vision', 'Cognitive impairment (especially elderly)'],
      contraindications: ['Urinary retention', 'Gastric retention', 'Uncontrolled narrow-angle glaucoma'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['2.5mg, 5mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '5mg tab: 8-15',
      brandNames: ['Tropan', 'Cystran']
    },
    searchTags: ['Bladder', 'Incontinence', 'Kidney', 'Bed wetting'],
    notes: ['High affinity for M1/M3 receptors. Significant anticholinergic side effects limit tolerability.']
  },
  {
    id: 'ren_020',
    genericName: 'Tolterodine',
    therapeuticClass: 'Anticholinergic / Antispasmodic',
    categoryId: 'renal',
    indications: ['Overactive Bladder (OAB) with symptoms of urge urinary incontinence, urgency, and frequency'],
    dosing: {
      adult: 'PO: 2 mg BD (IR) or 4 mg OD (ER).',
      pediatric: 'Not established.'
    },
    renalAdjustment: 'If CrCl 10-30 ml/min, max dose 1 mg BD (IR) or 2 mg OD (ER).',
    safety: {
      adr: ['Dry mouth', 'Headache', 'Constipation', 'QT prolongation'],
      contraindications: ['Urinary retention', 'Gastric retention', 'Uncontrolled narrow-angle glaucoma'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['1mg, 2mg tablet (IR)', '2mg, 4mg capsule (ER)'],
      dosageForms: ['Tablet', 'Capsule'],
      priceNPR: '2mg ER cap: 15-25',
      brandNames: ['Terol', 'Roliten']
    },
    searchTags: ['Bladder', 'Incontinence'],
    notes: ['More selective for bladder over salivary glands compared to oxybutynin (fewer dry mouth reports).']
  },
  {
    id: 'ren_021',
    genericName: 'Solifenacin',
    therapeuticClass: 'Anticholinergic (M3 Selective)',
    categoryId: 'renal',
    indications: ['Overactive Bladder (OAB)'],
    dosing: {
      adult: 'PO: 5 mg once daily. May increase to 10 mg.',
      pediatric: 'Not established.'
    },
    renalAdjustment: 'If CrCl < 30 ml/min, max dose is 5 mg daily.',
    safety: {
      adr: ['Dry mouth', 'Constipation', 'Blurred vision'],
      contraindications: ['Urinary retention', 'Severe hepatic impairment', 'Glaucoma'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['5mg, 10mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '5mg tab: 20-30',
      brandNames: ['Soliten', 'Bispec']
    },
    searchTags: ['Bladder', 'Incontinence'],
    notes: ['Highly selective M3 antagonist, offering a better side-effect profile regarding cognitive impairment compared to Oxybutynin.']
  },
  {
    id: 'ren_022',
    genericName: 'Mirabegron',
    therapeuticClass: 'Beta-3 Adrenergic Agonist',
    categoryId: 'renal',
    indications: ['Overactive Bladder (OAB)'],
    dosing: {
      adult: 'PO: 25 mg once daily. May increase to 50 mg.',
      pediatric: 'Not established.'
    },
    renalAdjustment: 'If CrCl 15-29 ml/min, max dose is 25 mg daily.',
    safety: {
      adr: ['Hypertension', 'Nasopharyngitis', 'UTI', 'Headache'],
      contraindications: ['Severe uncontrolled hypertension'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mg, 50mg extended-release tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '25mg tab: 40-60',
      brandNames: ['Mirago', 'Begmira']
    },
    searchTags: ['Bladder', 'Incontinence'],
    notes: ['Alternative for patients who cannot tolerate anticholinergic side effects of solifenacin/tolterodine.']
  },
  {
    id: 'ren_023',
    genericName: 'Bethanechol',
    therapeuticClass: 'Cholinergic Agonist',
    categoryId: 'renal',
    indications: ['Non-obstructive Urinary Retention (e.g., postpartum, postoperative)', 'Neurogenic Bladder'],
    dosing: {
      adult: 'PO: 10-50 mg 3-4 times daily.',
      pediatric: '0.6 mg/kg/day divided QID.'
    },
    renalAdjustment: 'No specific dosage adjustment needed for renal impairment.',
    safety: {
      adr: ['Sweating', 'Salivation', 'Flushing', 'Abdominal cramps', 'Bronchospasm'],
      contraindications: ['Mechanical urinary obstruction', 'Asthma', 'Hyperthyroidism', 'Peptic ulcer disease'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['25mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '25mg tab: 10-20',
      brandNames: ['Urotone', 'Betac']
    },
    searchTags: ['Bladder', 'Retention'],
    notes: ['Administer on an empty stomach to prevent nausea and vomiting. Must ensure no mechanical obstruction before use.']
  },
  {
    id: 'ren_024',
    genericName: 'Flavoxate',
    therapeuticClass: 'Antispasmodic',
    categoryId: 'renal',
    indications: ['Symptomatic relief of dysuria, urgency, nocturia, suprapubic pain (often in cystitis/prostatitis)'],
    dosing: {
      adult: 'PO: 200 mg 3-4 times daily.',
      pediatric: 'Not recommended for children < 12 years.'
    },
    renalAdjustment: 'Cautious use in renal impairment.',
    safety: {
      adr: ['Nausea', 'Vomiting', 'Dry mouth', 'Vertigo', 'Blurred vision'],
      contraindications: ['Pyloric or duodenal obstruction', 'Intestinal bleeding', 'Achalasia', 'Glaucoma'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['200mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '200mg tab: 15-25',
      brandNames: ['Favox', 'Urispas']
    },
    searchTags: ['Urine burn', 'Bladder', 'Spasm'],
    notes: ['Direct smooth muscle relaxant (papaverine-like) rather than a strict anticholinergic.']
  },

  // BPH Drugs
  {
    id: 'ren_025',
    genericName: 'Tamsulosin',
    therapeuticClass: 'Alpha-1 Blocker',
    categoryId: 'renal',
    indications: ['Benign Prostatic Hyperplasia (BPH)', 'Medical Expulsive Therapy for Ureteral Stones (Off-label)'],
    dosing: {
      adult: 'PO: 0.4 mg OD, **30 minutes after the same meal each day**.',
      pediatric: ''
    },
    renalAdjustment: 'No adjustment needed (if CrCl > 10 ml/min).',
    safety: {
      adr: ['**Orthostatic hypotension**', 'Dizziness', 'Retrograde ejaculation', 'Intraoperative Floppy Iris Syndrome (IFIS)'],
      contraindications: ['History of orthostatic hypotension', 'Severe hepatic impairment'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['0.4mg capsule (SR)'],
      dosageForms: ['Capsule'],
      priceNPR: '0.4mg cap: 10-15',
      brandNames: ['Veltam', 'Urimax']
    },
    searchTags: ['Prostate', 'BPH', 'Stone', 'Kidney'],
    notes: ['Warn patient about orthostatic hypotension with first dose. Tell eye surgeon if planning cataract surgery due to IFIS risk.']
  },
  {
    id: 'ren_026',
    genericName: 'Alfuzosin',
    therapeuticClass: 'Alpha-1 Blocker',
    categoryId: 'renal',
    indications: ['Benign Prostatic Hyperplasia (BPH)'],
    dosing: {
      adult: 'PO: 10 mg once daily immediately after the same meal.',
      pediatric: ''
    },
    renalAdjustment: 'Caution in severe renal impairment (CrCl < 30 ml/min).',
    safety: {
      adr: ['Dizziness', 'Headache', 'Fatigue', 'QT prolongation'],
      contraindications: ['Severe hepatic impairment', 'Use with potent CYP3A4 inhibitors'],
      pregnancyLactation: 'Category B.'
    },
    pharmacy: {
      strengths: ['10mg ER tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '10mg tab: 15-20',
      brandNames: ['Alfuzin', 'Alfoo']
    },
    searchTags: ['Prostate', 'BPH'],
    notes: ['Claimed to have less ejaculatory dysfunction and blood pressure lowering effect compared to Tamsulosin.']
  },
  {
    id: 'ren_027',
    genericName: 'Finasteride',
    therapeuticClass: '5-Alpha Reductase Inhibitor',
    categoryId: 'renal',
    indications: ['Benign Prostatic Hyperplasia (BPH)', 'Androgenetic Alopecia'],
    dosing: {
      adult: 'PO: 5 mg OD for BPH. 1 mg OD for Alopecia.',
      pediatric: ''
    },
    renalAdjustment: 'No dosage adjustment required.',
    safety: {
      adr: ['Impotence', 'Decreased libido', 'Ejaculation disorder', 'Gynecomastia'],
      contraindications: ['Pregnancy (women of childbearing potential should not handle crushed tablets)'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['1mg tablet', '5mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '5mg tab: 15-20',
      brandNames: ['Fincar', 'Finax']
    },
    searchTags: ['Prostate', 'BPH'],
    notes: ['Takes up to 6 months for maximal effect in BPH (actually shrinks the prostate). Will artificially decrease PSA levels by ~50%.']
  },
  {
    id: 'ren_028',
    genericName: 'Dutasteride',
    therapeuticClass: '5-Alpha Reductase Inhibitor',
    categoryId: 'renal',
    indications: ['Benign Prostatic Hyperplasia (BPH)'],
    dosing: {
      adult: 'PO: 0.5 mg once daily.',
      pediatric: ''
    },
    renalAdjustment: 'No dosage adjustment required.',
    safety: {
      adr: ['Impotence', 'Decreased libido', 'Ejaculation disorder'],
      contraindications: ['Pregnancy (hazardous to handle)', 'Children'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['0.5mg capsule'],
      dosageForms: ['Capsule'],
      priceNPR: '0.5mg cap: 20-30',
      brandNames: ['Dutas', 'Dutamac']
    },
    searchTags: ['Prostate', 'BPH'],
    notes: ['Inhibits both Type 1 and Type 2 5-AR (Finasteride mostly inhibits Type 2), potentially offering more rapid/complete DHT suppression.']
  }
];
