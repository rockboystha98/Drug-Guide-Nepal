import { DrugEntry } from '../../types/formulary';

export const reproductive3Drugs: DrugEntry[] = [
  // 12.7 Progesterone
  {
    id: 'rep_016',
    genericName: 'Medroxyprogesterone Acetate (Oral)',
    therapeuticClass: 'Progestin',
    categoryId: 'reproductive',
    indications: ['Secondary Amenorrhea', 'Abnormal Uterine Bleeding', 'Endometrial hyperplasia prevention (in HRT)'],
    dosing: {
      adult: 'PO: 5-10 mg daily for 5-10 days per cycle.',
      pediatric: 'Not generally indicated.'
    },
    safety: {
      adr: ['Spotting/Breakthrough bleeding', 'Weight gain', 'Thromboembolism', 'Depression'],
      contraindications: ['Active DVT/PE', 'Breast cancer', 'Undiagnosed vaginal bleeding', 'Severe liver disease'],
      pregnancyLactation: 'Category X (Contraindicated in early pregnancy).'
    },
    pharmacy: {
      strengths: ['10mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '10mg tab: 15-25',
      brandNames: ['Deviry', 'Meopreg']
    },
    searchTags: ['Periods', 'Irregular cycles', 'Bleeding'],
    notes: ['Used to induce withdrawal bleeding in amenorrhea ("Progestin challenge test").']
  },
  {
    id: 'rep_017',
    genericName: 'Norethisterone',
    therapeuticClass: 'Progestin',
    categoryId: 'reproductive',
    indications: ['Delay of menstruation', 'Dysfunctional Uterine Bleeding (DUB)', 'Endometriosis'],
    dosing: {
      adult: 'Delay periods PO: 5 mg TID starting 3 days before expected period. DUB PO: 5 mg TID for 10 days.',
      pediatric: 'Ensure menarche has occurred; mostly adult dosing.'
    },
    safety: {
      adr: ['Nausea', 'Headache', 'Breast tenderness', 'Thrombosis risk'],
      contraindications: ['Pregnancy', 'Breast cancer', 'Severe hepatic impairment'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['5mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '5mg tab: 10-20',
      brandNames: ['Primolut N', 'Regestrone']
    },
    searchTags: ['Periods', 'Delay periods', 'Bleeding'],
    notes: ['Very commonly used for short-term cycle control.']
  },
  {
    id: 'rep_018',
    genericName: 'Dydrogesterone',
    therapeuticClass: 'Progestin (Retroprogesterone)',
    categoryId: 'reproductive',
    indications: ['Threatened/Habitual Abortion', 'Dysmenorrhea', 'Endometriosis', 'Premenstrual syndrome'],
    dosing: {
      adult: 'Threatened abortion PO: 40 mg stat, then 10 mg Q8H until symptoms remit.',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Migraine/headache', 'Nausea', 'Menstrual disorders (breakthrough bleeding)'],
      contraindications: ['Undiagnosed vaginal bleeding', 'Severe liver disorders'],
      pregnancyLactation: 'Used during pregnancy to support luteal phase/prevent miscarriage.'
    },
    pharmacy: {
      strengths: ['10mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '10mg tab: 50-80',
      brandNames: ['Duphaston']
    },
    searchTags: ['Pregnancy support', 'Miscarriage', 'Periods'],
    notes: ['Unlike many progestins, it is not thermogenic and does not inhibit ovulation at standard doses.']
  },
  {
    id: 'rep_019',
    genericName: 'Hydroxyprogesterone Caproate',
    therapeuticClass: 'Progestin',
    categoryId: 'reproductive',
    indications: ['Prevention of preterm birth in women with a singleton pregnancy and a history of spontaneous preterm birth'],
    dosing: {
      adult: 'IM: 250 mg weekly (starting at 16-20 weeks gestation, continuing until 37 weeks).',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Injection site reactions', 'Urticaria', 'Nausea/diarrhea'],
      contraindications: ['Current/history of thrombosis', 'Breast cancer', 'Undiagnosed abnormal vaginal bleeding'],
      pregnancyLactation: 'Category B. Used to maintain pregnancy.'
    },
    pharmacy: {
      strengths: ['250mg/ml, 500mg/2ml injection'],
      dosageForms: ['Injection'],
      priceNPR: '500mg Ampoule: 150-250',
      brandNames: ['Proluton Depot', 'HPC']
    },
    searchTags: ['Preterm labor', 'Pregnancy support'],
    notes: ['Must be administered deep IM. Cannot stop active preterm labor; it is prophylactic.']
  },
  // 12.8 Contraceptives
  {
    id: 'rep_020',
    genericName: 'Levonorgestrel (Implant)',
    therapeuticClass: 'Progestin Contraceptive',
    categoryId: 'reproductive',
    indications: ['Long-term reversible contraception'],
    dosing: {
      adult: 'Subdermal: 2 rods (75 mg each, total 150 mg) implanted in the inner aspect of the upper arm.',
      pediatric: 'Post-menarcheal adolescents only.'
    },
    safety: {
      adr: ['Change in menstrual bleeding patterns (amenorrhea or prolonged bleeding)', 'Weight gain', 'Acne'],
      contraindications: ['Active liver disease', 'Undiagnosed abnormal vaginal bleeding', 'Breast cancer'],
      pregnancyLactation: 'Category X. Safe during lactation (starting 6 weeks postpartum).'
    },
    pharmacy: {
      strengths: ['75mg per rod (2 rod system)'],
      dosageForms: ['Subdermal Implant'],
      priceNPR: 'Kit: 1000-2000 (often subsidized)',
      brandNames: ['Jadelle']
    },
    searchTags: ['Contraceptive', 'Implant', 'Family planning'],
    notes: ['Provides contraception for up to 5 years. Must be inserted/removed by a trained professional.']
  },
  {
    id: 'rep_021',
    genericName: 'Medroxyprogesterone Acetate (Injectable Contraceptive)',
    therapeuticClass: 'Progestin Contraceptive',
    categoryId: 'reproductive',
    indications: ['Contraception'],
    dosing: {
      adult: 'IM: 150 mg every 3 months (12 weeks).',
      pediatric: 'Not recommended as first-line due to bone mineral density loss.'
    },
    safety: {
      adr: ['Secondary amenorrhea', 'Weight gain', 'Decreased bone mineral density (with long-term use)'],
      contraindications: ['Breast cancer', 'Severe active liver disease'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['150mg/ml vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 100-150',
      brandNames: ['Depo-Provera', 'Sangini']
    },
    searchTags: ['Contraceptive', 'Injection', 'Family planning', 'Sangini'],
    notes: ['Counsel regarding delayed return to fertility (up to 10-18 months) after discontinuation.']
  },
  {
    id: 'rep_022',
    genericName: 'Combined Oral Contraceptive Pills (COCPs)',
    therapeuticClass: 'Estrogen/Progestin Contraceptive',
    categoryId: 'reproductive',
    indications: ['Contraception', 'Dysmenorrhea', 'Menorrhagia', 'PCOS'],
    dosing: {
      adult: 'PO: 1 tablet daily (typically Ethinylestradiol + Levonorgestrel), for 21 days followed by 7 pill-free/iron pill days.',
      pediatric: 'Post-menarcheal only.'
    },
    safety: {
      adr: ['Nausea', 'Breast tenderness', 'Breakthrough bleeding', '**Thromboembolism (DVT/PE)**'],
      contraindications: ['History of DVT/PE, stroke, or CAD', 'Smokers > 35 years', 'Migraine with aura', 'Breast cancer', 'Severe hypertension'],
      pregnancyLactation: 'Category X. Can decrease breast milk supply postpartum.'
    },
    pharmacy: {
      strengths: ['e.g., 30mcg EE + 150mcg Levonorgestrel'],
      dosageForms: ['Tablet'],
      priceNPR: 'Cycle: 50-150',
      brandNames: ['Nilcon', 'Mala-D', 'Gulaab']
    },
    searchTags: ['Contraceptive', 'Pill', 'Periods', 'PCOS'],
    notes: ['Must be taken at the same time every day. Missing pills significantly increases pregnancy risk.']
  }
];
