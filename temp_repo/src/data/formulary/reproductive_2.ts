import { DrugEntry } from '../../types/formulary';

export const reproductive2Drugs: DrugEntry[] = [
  // 12.5 Estrogens
  {
    id: 'rep_009',
    genericName: 'Conjugated Estrogens',
    therapeuticClass: 'Estrogen',
    categoryId: 'reproductive',
    indications: ['Menopause symptoms (moderate to severe vasomotor)', 'Vulvar/vaginal atrophy', 'Hypoestrogenism'],
    dosing: {
      adult: 'PO: 0.3-0.625 mg daily (cyclic or continuous). Adjust to lowest effective dose.',
      pediatric: 'Not generally applicable.'
    },
    safety: {
      adr: ['**Thromboembolism (DVT/PE)**', 'Breast tenderness', 'Nausea', 'Endometrial hyperplasia/cancer risk (if uterus intact without progestin)'],
      contraindications: ['Undiagnosed abnormal genital bleeding', 'Active/history of DVT/PE', 'Estrogen-dependent tumor', 'Liver dysfunction'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['0.625mg tablet', 'Ointment/Cream'],
      dosageForms: ['Tablet', 'Vaginal Cream'],
      priceNPR: '0.625mg tab: 15-20',
      brandNames: ['Premarin']
    },
    searchTags: ['HRT', 'Menopause', 'Hormone'],
    notes: ['**BLACK BOX WARNING:** Increased risk of endometrial cancer if used without a progestin in women with an intact uterus. Cardiovascular and breast cancer risks under HRT guidelines.']
  },
  {
    id: 'rep_010',
    genericName: 'Estradiol',
    therapeuticClass: 'Estrogen',
    categoryId: 'reproductive',
    indications: ['Menopause (HRT)', 'Hypoestrogenism', 'Prostate cancer (palliation)', 'Gender-affirming hormone therapy'],
    dosing: {
      adult: 'PO: 1-2 mg daily. Transdermal: Apply patch once or twice weekly.',
      pediatric: 'Delayed puberty: Specialist dosing.'
    },
    safety: {
      adr: ['**Thromboembolism**', 'Nausea/Vomiting', 'Headache', 'Breast changes', 'Gallbladder disease'],
      contraindications: ['Breast cancer history (unless palliative)', 'Active DVT/PE', 'Undiagnosed vaginal bleeding'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['1mg, 2mg tablet', 'Transdermal gel/patch'],
      dosageForms: ['Tablet', 'Patch', 'Gel'],
      priceNPR: '2mg tab: 8-15',
      brandNames: ['Progynova', 'Estrabet']
    },
    searchTags: ['HRT', 'Menopause', 'Hormone'],
    notes: ['Use the lowest effective dose for the shortest duration necessary for menopausal symptoms.']
  },
  {
    id: 'rep_011',
    genericName: 'Ethinylestradiol',
    therapeuticClass: 'Estrogen',
    categoryId: 'reproductive',
    indications: ['Female Hypogonadism', 'Menopause', 'Used in combination oral contraceptives (COCs)'],
    dosing: {
      adult: 'PO: 10-50 mcg daily depending on indication. (Primarily found in combination pills).',
      pediatric: 'Varies.'
    },
    safety: {
      adr: ['Thromboembolism', 'Hypertension', 'Edema', 'Nausea'],
      contraindications: ['Thromboembolic disorders', 'Severe hepatic disease', 'Estrogen-dependent neoplasia'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['Often combined as 0.03mg (30mcg) in COCs'],
      dosageForms: ['Tablet'],
      priceNPR: 'Varies (see COCs)',
      brandNames: ['Lynoral (rarely standalone)']
    },
    searchTags: ['HRT', 'Contraceptive component'],
    notes: ['Highly potent synthetic estrogen. Strongly associated with increased hepatic synthesis of clotting factors.']
  },
  {
    id: 'rep_012',
    genericName: 'Mestranol',
    therapeuticClass: 'Estrogen',
    categoryId: 'reproductive',
    indications: ['Component of Oral Contraceptives'],
    dosing: {
      adult: 'Combined with a progestin for cyclic oral contraception.',
      pediatric: 'Not indicated alone.'
    },
    safety: {
      adr: ['Similar to ethinylestradiol'],
      contraindications: ['Similar to ethinylestradiol'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['Found in combination pills'],
      dosageForms: ['Tablet'],
      priceNPR: 'Varies',
      brandNames: ['Combination only']
    },
    searchTags: ['Contraceptive'],
    notes: ['Prodrug that is converted to ethinylestradiol in the liver.']
  },
  // 12.6 Antiestrogens / SERMs
  {
    id: 'rep_013',
    genericName: 'Clomiphene Citrate',
    therapeuticClass: 'Selective Estrogen Receptor Modulator (SERM) / Ovulation Inducer',
    categoryId: 'reproductive',
    indications: ['Female Infertility (Ovulatory dysfunction/PCOS)'],
    dosing: {
      adult: 'PO: 50 mg/day for 5 days (starting on day 2-5 of cycle). May increase to 100 mg/day in subsequent cycles if ovulation fails.',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['**Ovarian Hyperstimulation Syndrome (OHSS)**', 'Multiple pregnancies (twins/triplets)', 'Hot flashes', 'Blurred vision'],
      contraindications: ['Ovarian cysts (not due to PCOS)', 'Pregnancy', 'Liver disease', 'Undiagnosed vaginal bleeding'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['50mg, 100mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '50mg tab: 15-25',
      brandNames: ['Clofert', 'Siphene']
    },
    searchTags: ['Infertility', 'Pregnancy', 'PCOS', 'Ovulation'],
    notes: ['Instruct patient to report severe pelvic pain or visual disturbances immediately.']
  },
  {
    id: 'rep_014',
    genericName: 'Tamoxifen',
    therapeuticClass: 'Selective Estrogen Receptor Modulator (SERM)',
    categoryId: 'reproductive',
    indications: ['Breast cancer (Estrogen-receptor positive)', 'Breast cancer risk reduction in high-risk women'],
    dosing: {
      adult: 'PO: 20 mg daily (for 5-10 years depending on tumor stage/risk).',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Hot flashes', 'Vaginal discharge/bleeding', '**Increased risk of endometrial cancer**', '**Thromboembolism (DVT/PE)**'],
      contraindications: ['Concurrent coumarin-type anticoagulant therapy (for risk reduction indication)', 'History of DVT/PE'],
      pregnancyLactation: 'Category D.'
    },
    pharmacy: {
      strengths: ['10mg, 20mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '20mg tab: 10-20',
      brandNames: ['Tamoxen', 'Cytotam']
    },
    searchTags: ['Breast cancer'],
    notes: ['Annual gynecological exams are critical to monitor for endometrial hyperplasia/cancer.']
  },
  {
    id: 'rep_015',
    genericName: 'Human Chorionic Gonadotropin (hCG)',
    therapeuticClass: 'Gonadotropin',
    categoryId: 'reproductive',
    indications: ['Induction of Ovulation (in infertility following clomiphene or FSH)', 'Prepubertal Cryptorchidism', 'Hypogonadotropic Hypogonadism'],
    dosing: {
      adult: 'Ovulation induction: 5,000-10,000 USP units IM one day after last dose of menotropins/FSH.',
      pediatric: 'Cryptorchidism: 1,000-4,000 units IM 2-3 times/week for several weeks.'
    },
    safety: {
      adr: ['**Ovarian Hyperstimulation Syndrome (OHSS)**', 'Multiple pregnancies', 'Headache', 'Edema', 'Irritability'],
      contraindications: ['Precocious puberty', 'Prostate carcinoma or androgen-dependent neoplasm', 'Prior hypersensitivity'],
      pregnancyLactation: 'Category C (Paradoxically, it is used to induce pregnancy/maintain corpus luteum).'
    },
    pharmacy: {
      strengths: ['2000 IU, 5000 IU, 10000 IU injection/vial'],
      dosageForms: ['Injection'],
      priceNPR: '5000 IU Vial: 800-1200',
      brandNames: ['Choriomon', 'Lupi-HCG']
    },
    searchTags: ['Infertility', 'Ovulation'],
    notes: ['Used to trigger the final maturation of the egg and to cause ovulation (the "trigger shot").']
  },
  {
    id: 'rep_015b',
    genericName: 'Letrozole',
    therapeuticClass: 'Aromatase Inhibitor',
    categoryId: 'reproductive',
    indications: ['Infertility / Ovulation Induction (Off-label but widely preferred for PCOS)', 'Breast Cancer (ER-positive, postmenopausal)'],
    dosing: {
      adult: 'Infertility PO: 2.5-5 mg/day for 5 days (days 3-7 of cycle). Breast CA PO: 2.5 mg daily.',
      pediatric: 'Not indicated.'
    },
    safety: {
      adr: ['Hot flashes', 'Joint/muscle pain', 'Fatigue', 'Osteoporosis (long-term use)'],
      contraindications: ['Pregnancy (ensure patient is not pregnant before starting)', 'Premenopausal women (for breast cancer)'],
      pregnancyLactation: 'Category X.'
    },
    pharmacy: {
      strengths: ['2.5mg tablet'],
      dosageForms: ['Tablet'],
      priceNPR: '2.5mg tab: 20-35',
      brandNames: ['Letroz', 'Femara']
    },
    searchTags: ['Infertility', 'PCOS', 'Ovulation', 'Breast cancer'],
    notes: ['Increasingly preferred over clomiphene for PCOS-related infertility due to higher live birth rates and lower risk of multiple gestations.']
  }
];
