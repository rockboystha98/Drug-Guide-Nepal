import { DrugEntry } from '../../types/formulary';

export const infections2Drugs: DrugEntry[] = [
  // AMINOGLYCOSIDES
  {
    id: 'inf_128',
    genericName: 'Amikacin',
    therapeuticClass: 'Aminoglycoside (AWaRe: Access/Watch)',
    categoryId: 'infections',
    indications: ['Severe, hospital-acquired Gram-negative infections', 'Sepsis', 'MDR TB (Historical)'],
    dosing: { adult: 'IV/IM: 15 mg/kg OD.', pediatric: 'IV: 15-20 mg/kg OD. Neonates: specialized dosing based on age/weight.' },
    safety: { adr: ['Nephrotoxicity', 'Ototoxicity (irreversible)'], contraindications: ['Hypersensitivity', 'Pregnancy (can cause fetal deafness)'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['100mg/2ml', '250mg/2ml', '500mg/2ml vial'], dosageForms: ['Injection'], priceNPR: '500mg vial: 60-120', brandNames: ['Mikacin', 'Alfakim'] },
    notes: ['Monitor peak and trough levels. Renal impairment requires dose interval adjustment. Sepsis Priority.'],
    searchTags: ['Infection', 'Sepsis'],
    sepsisPriority: true
  },
  {
    id: 'inf_129',
    genericName: 'Gentamicin',
    therapeuticClass: 'Aminoglycoside (AWaRe: Access)',
    categoryId: 'infections',
    indications: ['Severe Gram-negative infections', 'Sepsis', 'Endocarditis synergy'],
    dosing: { adult: 'IV/IM: 5-7 mg/kg OD.', pediatric: 'IV: 5-7.5 mg/kg OD.' },
    safety: { adr: ['Nephrotoxicity', 'Ototoxicity'], contraindications: ['Pregnancy', 'Hypersensitivity'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['80mg/2ml ampoule'], dosageForms: ['Injection'], priceNPR: '80mg amp: 10-15', brandNames: ['Garamycin'] },
    notes: ['Therapeutic drug monitoring recommended.'],
    searchTags: ['Infection', 'Sepsis']
  },
  {
    id: 'inf_130',
    genericName: 'Neomycin',
    therapeuticClass: 'Aminoglycoside (AWaRe: Access)',
    categoryId: 'infections',
    indications: ['Hepatic encephalopathy', 'Bowel preparation for surgery'],
    dosing: { adult: 'PO: 1-2 g Q6H (for hepatic coma).', pediatric: 'PO: 50-100 mg/kg/day divided.' },
    safety: { adr: ['High systemic toxicity if absorbed (nephro/ototoxic)'], contraindications: ['Intestinal obstruction'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['Skin Ointment/Drops'], dosageForms: ['Topical', 'Tablet'], priceNPR: 'Mostly topical forms', brandNames: ['Neosporin (combo)'] },
    notes: ['Poorly absorbed orally. Used primarily for local gut effect.'],
    searchTags: ['Infection']
  },

  // CHLORAMPHENICOL
  {
    id: 'inf_131',
    genericName: 'Chloramphenicol',
    therapeuticClass: 'Amphenicol (AWaRe: Access)',
    categoryId: 'infections',
    indications: ['Typhoid fever (historical/resistant cases)', 'Meningitis', 'Eye infections'],
    dosing: { adult: 'PO/IV: 50 mg/kg/day divided Q6H.', pediatric: 'PO/IV: 50-75 mg/kg/day.' },
    safety: { adr: ['Gray baby syndrome (neonates)', 'Aplastic anemia (idiosyncratic, fatal)', 'Bone marrow suppression'], contraindications: ['Minor infections', 'Neonates'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['250mg cap', 'Eye drops'], dosageForms: ['Capsule', 'Injection', 'Drops'], priceNPR: 'Drops: 20-30', brandNames: ['Paraxin'] },
    notes: ['Avoided systemically due to fatal aplastic anemia risk unless no alternatives.'],
    searchTags: ['Infection', 'Typhoid', 'Meningitis']
  },
  
  // LINCOSAMIDES
  {
    id: 'inf_132',
    genericName: 'Clindamycin',
    therapeuticClass: 'Lincosamide (AWaRe: Access)',
    categoryId: 'infections',
    indications: ['Skin/soft tissue infections (MRSA)', 'Anaerobic infections', 'Pelvic inflammatory disease'],
    dosing: { adult: 'PO: 300-450 mg Q6H. IV: 600-900 mg Q8H.', pediatric: 'PO: 10-25 mg/kg/day divided. IV: 20-40 mg/kg/day.' },
    safety: { adr: ['Clostridium difficile-associated diarrhea (CDAD)', 'Rash'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['150mg, 300mg cap', '300mg/2ml IV'], dosageForms: ['Capsule', 'Injection'], priceNPR: '300mg cap: 15-25', brandNames: ['Dalacin', 'Clindac'] },
    notes: ['Notorious for causing pseudomembranous colitis.'],
    searchTags: ['Infection', 'Pneumonia']
  },
  
  // OXAZOLIDINONES
  {
    id: 'inf_133',
    genericName: 'Linezolid',
    therapeuticClass: 'Oxazolidinone (AWaRe: Reserve)',
    categoryId: 'infections',
    indications: ['VRE infections', 'MRSA pneumonia', 'MDR TB'],
    dosing: { adult: 'PO/IV: 600 mg Q12H.', pediatric: 'PO/IV: 10 mg/kg Q8H (if <11 yrs).' },
    safety: { adr: ['Myelosuppression (thrombocytopenia if > 14 days)', 'Peripheral/Optic neuropathy (> 28 days)', 'Serotonin syndrome'], contraindications: ['Concurrent MAOI use'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['600mg tab', '600mg/300ml IV'], dosageForms: ['Tablet', 'IV Infusion'], priceNPR: '600mg tab: 100-150', brandNames: ['Lizolid', 'Linox'] },
    notes: ['Monitor CBC weekly due to marrow suppression risk.'],
    searchTags: ['Infection', 'Pneumonia', 'TB']
  },
  
  // MACROLIDES
  {
    id: 'inf_134',
    genericName: 'Azithromycin',
    therapeuticClass: 'Macrolide (AWaRe: Watch)',
    categoryId: 'infections',
    indications: ['Atypical Pneumonia', 'Typhoid (uncomplicated)', 'Cholera', 'Fever', 'Sepsis'],
    dosing: { adult: 'PO: 500 mg OD for 3-5 days.', pediatric: 'PO: 10-20 mg/kg OD (Max 500mg).' },
    safety: { adr: ['GI upset', 'QT prolongation'], contraindications: ['Macrolide hypersensitivity'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['250mg, 500mg tab', '200mg/5ml syr'], dosageForms: ['Tablet', 'Syrup'], priceNPR: '500mg tab: 15-25', brandNames: ['Azithral', 'Zithrox'] },
    notes: ['Excellent tissue penetration allows for short courses. Sepsis Priority.'],
    searchTags: ['Infection', 'Sepsis', 'Pneumonia', 'Typhoid', 'Fever'],
    sepsisPriority: true
  },
  {
    id: 'inf_135',
    genericName: 'Clarithromycin',
    therapeuticClass: 'Macrolide (AWaRe: Watch)',
    categoryId: 'infections',
    indications: ['H. Pylori eradication', 'Respiratory tract infections', 'Atypical Mycobacterium'],
    dosing: { adult: 'PO: 250-500 mg BID.', pediatric: 'PO: 7.5 mg/kg BID.' },
    safety: { adr: ['Metallic taste', 'QT prolongation', 'GI upset'], contraindications: ['Concurrent statins (rhabdomyolysis risk)'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['250mg, 500mg tab', '125mg/5ml syr'], dosageForms: ['Tablet', 'Syrup'], priceNPR: '250mg tab: 15-25', brandNames: ['Claribid'] },
    notes: ['Potent CYP3A4 inhibitor.'],
    searchTags: ['Infection', 'Pneumonia']
  },
  {
    id: 'inf_136',
    genericName: 'Erythromycin',
    therapeuticClass: 'Macrolide (AWaRe: Watch)',
    categoryId: 'infections',
    indications: ['Pertussis', 'Diphtheria', 'Penicillin substitute for strep'],
    dosing: { adult: 'PO: 250-500 mg QID.', pediatric: 'PO: 30-50 mg/kg/day divided QID.' },
    safety: { adr: ['Severe GI cramping', 'QT prolongation', 'Cholestatic jaundice'], contraindications: ['Concurrent use with certain antihistamines/statins'], pregnancyLactation: 'Category B.' },
    pharmacy: { strengths: ['250mg, 500mg tab', 'Suspension'], dosageForms: ['Tablet', 'Syrup'], priceNPR: '250mg tab: 8-12', brandNames: ['Erythro', 'Althrocin'] },
    notes: ['Acts as a motilin receptor agonist (causes severe GI cramps).'],
    searchTags: ['Infection']
  },

  // QUINOLONES
  {
    id: 'inf_137',
    genericName: 'Ciprofloxacin',
    therapeuticClass: 'Fluoroquinolone (AWaRe: Watch)',
    categoryId: 'infections',
    indications: ['Complicated UTI', 'Typhoid (if susceptible)', 'Shigellosis'],
    dosing: { adult: 'PO: 500-750 mg BID.', pediatric: 'PO: 10-20 mg/kg BID (caution).' },
    safety: { adr: ['Tendon rupture (Achilles)', 'QT prolongation', 'Peripheral neuropathy'], contraindications: ['Pregnancy'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['250mg, 500mg tab', '200mg IV'], dosageForms: ['Tablet', 'IV'], priceNPR: '500mg tab: 5-8', brandNames: ['Ciplox', 'Cifran'] },
    notes: ['Don\'t take with milk or antacids.'],
    searchTags: ['Infection', 'Typhoid', 'UTI']
  },
  {
    id: 'inf_138',
    genericName: 'Levofloxacin',
    therapeuticClass: 'Fluoroquinolone (AWaRe: Watch)',
    categoryId: 'infections',
    indications: ['Community-acquired pneumonia', 'Complicated UTI', 'MDR TB'],
    dosing: { adult: 'PO/IV: 500-750 mg OD.', pediatric: 'PO: 8-10 mg/kg OD or BID (only if no alternatives).' },
    safety: { adr: ['Tendon rupture', 'QT prolongation', 'CNS toxicity'], contraindications: ['Pregnancy'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['250mg, 500mg tab', '500mg IV'], dosageForms: ['Tablet', 'IV'], priceNPR: '500mg tab: 10-15', brandNames: ['Levoquin', 'Glevo'] },
    notes: ['Respiratory fluoroquinolone with excellent pneumococcal coverage.'],
    searchTags: ['Infection', 'Pneumonia', 'UTI', 'TB']
  },
  {
    id: 'inf_139',
    genericName: 'Moxifloxacin',
    therapeuticClass: 'Fluoroquinolone (AWaRe: Watch)',
    categoryId: 'infections',
    indications: ['Respiratory tract infections', 'MDR TB', 'Intra-abdominal infections'],
    dosing: { adult: 'PO/IV: 400 mg OD.', pediatric: 'Not recommended.' },
    safety: { adr: ['Highest risk of QT prolongation among quinolones', 'Tendon rupture'], contraindications: ['Pregnancy', 'Severe hepatic impairment'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['400mg tab', '400mg IV'], dosageForms: ['Tablet', 'IV'], priceNPR: '400mg tab: 20-35', brandNames: ['Moxicip', 'Avelox'] },
    notes: ['Hepatically cleared (no dose adjustment in renal failure). Do not use for UTI.'],
    searchTags: ['Infection', 'Pneumonia', 'TB']
  },
  {
    id: 'inf_140',
    genericName: 'Nalidixic acid',
    therapeuticClass: 'First Gen Quinolone (AWaRe: Watch)',
    categoryId: 'infections',
    indications: ['Uncomplicated UTI (Historical)'],
    dosing: { adult: 'PO: 1g QID.', pediatric: 'PO: 50 mg/kg/day divided.' },
    safety: { adr: ['GI upset', 'Visual disturbances', 'Seizures'], contraindications: ['Infants < 3 months'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['500mg tab'], dosageForms: ['Tablet'], priceNPR: 'N/A', brandNames: ['Gramoneg'] },
    notes: ['Largely obsolete due to resistance.'],
    searchTags: ['Infection', 'UTI']
  },
  {
    id: 'inf_141',
    genericName: 'Norfloxacin',
    therapeuticClass: 'Fluoroquinolone (AWaRe: Watch)',
    categoryId: 'infections',
    indications: ['Uncomplicated UTI', 'Prostatitis', 'Gastroenteritis'],
    dosing: { adult: 'PO: 400 mg BID.', pediatric: 'Not recommended.' },
    safety: { adr: ['Tendon rupture', 'GI upset'], contraindications: ['Pregnancy'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['400mg tab'], dosageForms: ['Tablet'], priceNPR: '400mg tab: 5-8', brandNames: ['Norflox'] },
    notes: ['Does not achieve adequate systemic levels for non-urinary/gut infections.'],
    searchTags: ['Infection', 'UTI', 'Diarrhea']
  },
  {
    id: 'inf_142',
    genericName: 'Ofloxacin',
    therapeuticClass: 'Fluoroquinolone (AWaRe: Watch)',
    categoryId: 'infections',
    indications: ['PID', 'Epididymitis', 'Enteric fever', 'Diarrhea'],
    dosing: { adult: 'PO: 200-400 mg BID.', pediatric: 'PO: 15 mg/kg/day divided.' },
    safety: { adr: ['Tendon rupture', 'Insomnia'], contraindications: ['Pregnancy'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['200mg, 400mg tab'], dosageForms: ['Tablet', 'IV'], priceNPR: '200mg tab: 8-12', brandNames: ['Oflomac', 'Zanocin'] },
    notes: ['Often combined with ornithidazole (O2) for mixed GI infections.'],
    searchTags: ['Infection', 'Typhoid', 'Diarrhea']
  },
  
  // SULPHONAMIDES
  {
    id: 'inf_143',
    genericName: 'Cotrimoxazole (Sulphamethoxazole/Trimethoprim)',
    therapeuticClass: 'Sulphonamide + DHFR inhibitor (AWaRe: Access)',
    categoryId: 'infections',
    indications: ['PCP/PJP Pneumonia prophylaxis and treatment', 'UTI', 'Skin infections (MRSA)', 'Typhoid'],
    dosing: { adult: 'PO: 1 Double Strength (800/160 mg) BID. PCP: 15-20 mg/kg (TMP) divided Q6H.', pediatric: 'PO: 8-12 mg/kg/day (of TMP) divided BID.' },
    safety: { adr: ['Stevens-Johnson Syndrome (SJS)', 'Bone marrow suppression', 'Hyperkalemia', 'Crystalluria'], contraindications: ['Sulfa allergy', 'G6PD deficiency', '3rd trimester pregnancy'], pregnancyLactation: 'Category D (term).' },
    pharmacy: { strengths: ['480mg (400/80), 960mg (800/160) tab', '240mg/5ml syr'], dosageForms: ['Tablet', 'Syrup'], priceNPR: 'DS Tab: 2-5', brandNames: ['Septran', 'Bactrim'] },
    notes: ['Maintain adequate hydration to prevent crystalluria.'],
    searchTags: ['Infection', 'UTI', 'Pneumonia', 'Typhoid']
  },

  // TETRACYCLINES
  {
    id: 'inf_144',
    genericName: 'Doxycycline',
    therapeuticClass: 'Tetracycline (AWaRe: Access)',
    categoryId: 'infections',
    indications: ['Scrub Typhus', 'Atypical Pneumonia', 'Cholera', 'Chlamydia', 'Acne'],
    dosing: { adult: 'PO: 100 mg BID.', pediatric: 'PO: 2.2 mg/kg BID (safe <8 yrs for short courses like RMSF/Scrub Typhus).' },
    safety: { adr: ['Photosensitivity', 'Pill esophagitis', 'Teeth discoloration (less than other tetracyclines)'], contraindications: ['Pregnancy'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['100mg cap'], dosageForms: ['Capsule'], priceNPR: '100mg cap: 3-6', brandNames: ['Doxypal', 'Minicycline'] },
    notes: ['Take with plenty of water and remain upright for 30 mins to prevent esophagitis. Essential for Rickettsial infections in Nepal.'],
    searchTags: ['Infection', 'Pneumonia', 'Fever']
  },
  {
    id: 'inf_145',
    genericName: 'Minocycline',
    therapeuticClass: 'Tetracycline (AWaRe: Access)',
    categoryId: 'infections',
    indications: ['Acne vulgaris', 'Acinetobacter infections', 'Leprosy (alternative)'],
    dosing: { adult: 'PO: 100 mg BID.', pediatric: 'PO: >8 yrs: 2 mg/kg BID.' },
    safety: { adr: ['Vestibular toxicity (dizziness/vertigo)', 'Drug-induced lupus', 'Skin pigmentation'], contraindications: ['Pregnancy', 'Children < 8 yrs'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['50mg, 100mg tab'], dosageForms: ['Tablet'], priceNPR: '100mg tab: 20-30', brandNames: ['Cynomycin'] },
    notes: ['Significant vestibular adverse effects. Useful for multidrug-resistant Acinetobacter.'],
    searchTags: ['Infection']
  },
  {
    id: 'inf_146',
    genericName: 'Tetracycline / Oxytetracycline',
    therapeuticClass: 'Tetracycline (AWaRe: Access)',
    categoryId: 'infections',
    indications: ['H. Pylori eradication', 'Cholera', 'Acne'],
    dosing: { adult: 'PO: 250-500 mg QID.', pediatric: 'PO: >8 yrs: 25-50 mg/kg/day divided QID.' },
    safety: { adr: ['Teeth discoloration', 'Bone growth inhibition', 'Photosensitivity'], contraindications: ['Pregnancy', 'Children < 8 yrs', 'Renal impairment'], pregnancyLactation: 'Category D.' },
    pharmacy: { strengths: ['250mg cap', 'Eye ointment'], dosageForms: ['Capsule', 'Topical'], priceNPR: '250mg cap: 2-5', brandNames: ['Resteclin'] },
    notes: ['Absorption strongly inhibited by dairy products, iron, and antacids.'],
    searchTags: ['Infection']
  },

  // GLYCOPEPTIDES
  {
    id: 'inf_147',
    genericName: 'Vancomycin',
    therapeuticClass: 'Glycopeptide (AWaRe: Reserve)',
    categoryId: 'infections',
    indications: ['MRSA Infections', 'Severe Sepsis (Gram-positive)', 'C. difficile (PO)'],
    dosing: { adult: 'IV: 15-20 mg/kg Q8-12H.', pediatric: 'IV: 15 mg/kg Q6H or 20 mg/kg Q8H.' },
    safety: { adr: ['Red Man Syndrome', 'Nephrotoxicity', 'Ototoxicity'], contraindications: ['Hypersensitivity'], pregnancyLactation: 'Category C.' },
    pharmacy: { strengths: ['500mg, 1g vial'], dosageForms: ['Injection', 'Capsule'], priceNPR: '500mg vial: 300-500', brandNames: ['Vancocin'] },
    notes: ['Must be infused slowly (>60 mins). Monitor trough levels (target 10-20 mg/L). Sepsis Priority.'],
    searchTags: ['Infection', 'Sepsis'],
    sepsisPriority: true
  }
];
