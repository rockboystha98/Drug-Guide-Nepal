import { DrugEntry } from '../../types/formulary';

export const immunologicals3Drugs: DrugEntry[] = [
  // Immunoglobulins & Antitoxins
  {
    id: 'imm_016',
    genericName: 'Anti-Rabies Immunoglobulin (RIG)',
    therapeuticClass: 'Immunoglobulin',
    categoryId: 'immunologicals',
    indications: ['Category III Animal Bites (severe exposure with broken skin/bleeding)', 'Wild animal bites'],
    dosing: {
      adult: 'Human RIG (HRIG): 20 IU/kg. Equine RIG (ERIG): 40 IU/kg. Infiltrate AS MUCH AS POSSIBLE into and around the wound. Any remainder given IM distant from vaccine site.',
      pediatric: 'Same weight-based calculation.'
    },
    route: 'Infiltration around wound and Intramuscular (IM).',
    safety: {
      adr: ['Local pain', 'Low-grade fever', 'Anaphylaxis (higher risk with Equine formulation)'],
      contraindications: ['**None if Category III exposure occurs.**'],
      pregnancyLactation: 'Safe and essential.'
    },
    pharmacy: {
      strengths: ['300 IU/2ml vial', '150 IU/ml vial'],
      dosageForms: ['Injection'],
      priceNPR: 'ERIG: 1000-1500, HRIG: 5000-8000',
      brandNames: ['Equirab', 'Berirab']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Do NOT mix in the same syringe with the ARV vaccine. Skin sensitivity test required before ERIG administration.'],
    searchTags: ['Dog bite', 'Rabies', 'Post-exposure']
  },
  {
    id: 'imm_017',
    genericName: 'Tetanus Immunoglobulin (TIG)',
    therapeuticClass: 'Immunoglobulin',
    categoryId: 'immunologicals',
    indications: ['Prophylaxis against Tetanus in tetanus-prone wounds (unimmunized or unknown status)', 'Treatment of Clinical Tetanus'],
    dosing: {
      adult: 'Prophylaxis: 250 - 500 IU IM single dose. Treatment: 3000 - 6000 IU IM in divided doses at different sites.',
      pediatric: 'Prophylaxis: 250 IU IM. Treatment: Same as adult.'
    },
    route: 'Intramuscular (IM).',
    safety: {
      adr: ['Local pain', 'Fever', 'Anaphylaxis (rare with human origin)'],
      contraindications: ['Hypersensitivity to human immunoglobulins'],
      pregnancyLactation: 'Safe if indicated.'
    },
    pharmacy: {
      strengths: ['250 IU vial', '500 IU vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: ~400-800',
      brandNames: ['Tetglob']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Wait, do not give TIG and Tetanus Vaccine in the same syringe or same site.'],
    searchTags: ['Tetanus', 'Post-exposure', 'Wound']
  },
  {
    id: 'imm_018',
    genericName: 'Anti-Snake Venom (ASV) Polyvalent',
    therapeuticClass: 'Antivenom',
    categoryId: 'immunologicals',
    indications: ['Snake bite with signs of systemic envenomation (Neurotoxic or Hemotoxic)'],
    dosing: {
      adult: 'Initial Dose: 10 vials (reconstituted) slow IV over 1 hour. Repeat based on clinical response/coagulation profiles per National Protocol.',
      pediatric: '**CRITICAL: DO NOT REDUCE DOSE FOR CHILDREN.** Initial dose is the SAME as adults (snake injects the same amount of venom regardless of victim size).'
    },
    route: 'Intravenous (IV) Infusion.',
    safety: {
      adr: ['**Anaphylaxis (common)**', 'Serum sickness (delayed)'],
      contraindications: ['None if life-threatening envenomation is present. Do NOT give to asymptomatic patients.'],
      pregnancyLactation: 'Safe and essential.'
    },
    pharmacy: {
      strengths: ['10ml vial (lyophilized powder)'],
      dosageForms: ['Injection'],
      priceNPR: 'Government Supply / Free',
      brandNames: ['Polyvalent ASV']
    },
    notes: ['**COLD CHAIN**: Store away from direct sunlight; lyophilized forms often stable at room temp but check label. MUST be administered only when SYMPTOMATIC (e.g. ptosis, WBCT20 prolonged). Keep Adrenaline ready!'],
    searchTags: ['Snake bite', 'Antivenom', 'Poisoning']
  },
  {
    id: 'imm_019',
    genericName: 'Diphtheria Antitoxin',
    therapeuticClass: 'Antitoxin / Immunoglobulin',
    categoryId: 'immunologicals',
    indications: ['Treatment of Clinical Diphtheria'],
    dosing: {
      adult: '20,000 to 100,000 units IV depending on severity and duration of illness.',
      pediatric: 'Same as adult (dose depends on clinical severity, not weight).'
    },
    route: 'Intravenous (IV) or Intramuscular (IM).',
    safety: {
      adr: ['Anaphylaxis (equine origin)', 'Serum sickness'],
      contraindications: ['None for confirmed Diphtheria'],
      pregnancyLactation: 'Safe and essential.'
    },
    pharmacy: {
      strengths: ['10,000 unit vial'],
      dosageForms: ['Injection'],
      priceNPR: 'Provided by special government order',
      brandNames: ['Diphtheria Antitoxin']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Equine-derived; sensitivity testing is mandatory before full dose.'],
    searchTags: ['Diphtheria', 'Antitoxin']
  },
  {
    id: 'imm_020',
    genericName: 'Anti-D Immunoglobulin (Human)',
    therapeuticClass: 'Immunoglobulin',
    categoryId: 'immunologicals',
    indications: ['Prevention of Rh(D) sensitization in Rh-negative mothers', 'Post-partum, Post-abortion, or Ectopic pregnancy in Rh-negative women'],
    dosing: {
      adult: 'Routine antenatal: 300 mcg at 28 weeks. Post-partum: 300 mcg within 72 hours of delivering an Rh-positive infant. Adjust dose with Kleihauer-Betke test if massive feto-maternal hemorrhage suspected.',
      pediatric: 'Not applicable.'
    },
    route: 'Intramuscular (IM).',
    safety: {
      adr: ['Local pain', 'Low-grade fever', 'Anaphylaxis (rare)'],
      contraindications: ['Rh-positive females', 'Already sensitized Rh-negative females'],
      pregnancyLactation: 'Given IN pregnancy and post-partum.'
    },
    pharmacy: {
      strengths: ['300mcg (1500 IU) vial/syringe', '100mcg (500 IU) / 50mcg (250 IU) for early bleeds'],
      dosageForms: ['Injection'],
      priceNPR: 'Syringe/Vial: ~3000-5000',
      brandNames: ['Rhogam', 'Rhoclone']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Standard dose of 300mcg covers up to 15ml of fetal RBC hemorrhage.'],
    searchTags: ['Pregnancy', 'Rh negative', 'Anti-D']
  },
  // Diagnostic Agents
  {
    id: 'imm_021',
    genericName: 'Tuberculin, Purified Protein Derivative (PPD)',
    therapeuticClass: 'Diagnostic Agent',
    categoryId: 'immunologicals',
    indications: ['Diagnosis of Latent Tuberculosis Infection (Mantoux test)'],
    dosing: {
      adult: '0.1 ml (5 TU) Intradermal.',
      pediatric: '0.1 ml (5 TU) Intradermal.'
    },
    route: 'Intradermal (ID) on volar aspect of forearm.',
    safety: {
      adr: ['Severe blistering/necrosis at injection site in highly sensitive individuals', 'Pain', 'Pruritus'],
      contraindications: ['Documented prior active TB', 'Prior severe reaction to PPD'],
      pregnancyLactation: 'Safe.'
    },
    pharmacy: {
      strengths: ['5 TU (Tuberculin Units) per 0.1ml'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: ~200-400 (mostly done as a lab test package)',
      brandNames: ['Tubersol', 'PPD']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Read results 48 to 72 hours post-injection. Measure INDURATION, not erythema.'],
    searchTags: ['Tuberculosis', 'Mantoux']
  },
  {
    id: 'imm_022',
    genericName: 'Hepatitis B Immunoglobulin (HBIG)',
    therapeuticClass: 'Immunoglobulin',
    categoryId: 'immunologicals',
    indications: ['Post-exposure prophylaxis for Hepatitis B (e.g., needlestick, sexual contact)', 'Prevention of vertical transmission in neonates born to HBsAg positive mothers'],
    dosing: {
      adult: 'Post-exposure: 0.06 ml/kg (usually 500 IU) IM as soon as possible, ideally within 24 hours.',
      pediatric: 'Neonates (HBsAg positive mother): 0.5 ml (100 IU) IM within 12 hours of birth, given concurrently with Hepatitis B vaccine at a different site.'
    },
    route: 'Intramuscular (IM).',
    safety: {
      adr: ['Local pain at injection site', 'Erythema', 'Low-grade fever', 'Anaphylaxis (rare)'],
      contraindications: ['Hypersensitivity to human immunoglobulins', 'Severe thrombocytopenia (relative, due to IM route)'],
      pregnancyLactation: 'Category C. Usually safe and indicated if exposed.'
    },
    pharmacy: {
      strengths: ['100 IU/0.5 ml (pediatric)', '500 IU/ml (adult) vails/syringes'],
      dosageForms: ['Injection'],
      priceNPR: 'Vial: 3000-5000',
      brandNames: ['Hepabig']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Do NOT freeze. Must be given in combination with the Hepatitis B vaccine sequence.'],
    searchTags: ['Hepatitis B', 'Post-exposure', 'Needlestick', 'HBIG']
  },
  {
    id: 'imm_023',
    genericName: 'Normal Immunoglobulin (Human) / IVIG',
    therapeuticClass: 'Immunoglobulin',
    categoryId: 'immunologicals',
    indications: ['Primary immunodeficiency syndromes', 'Kawasaki disease', 'Guillain-Barré syndrome', 'Immune thrombocytopenic purpura (ITP)'],
    dosing: {
      adult: 'Dose highly dependent on indication (e.g., ITP: 1-2 g/kg over 1-5 days; Replacement therapy: 0.2-0.8 g/kg/month).',
      pediatric: 'Dose highly dependent on indication (e.g., Kawasaki disease: 2 g/kg as a single infusion).'
    },
    route: 'Intravenous (IV) Infusion (slow initial rate).',
    safety: {
      adr: ['Headache (common)', 'Chills', 'Fever', 'Hypotension (if infused too rapidly)', 'Renal failure (sucrose-containing products)', 'Aseptic meningitis'],
      contraindications: ['IgA deficiency (risk of severe anaphylaxis if the IVIG has high IgA content)'],
      pregnancyLactation: 'Category C.'
    },
    pharmacy: {
      strengths: ['5% or 10% solution (50ml, 100ml)'],
      dosageForms: ['Injection'],
      priceNPR: 'Bottle: 15,000-40,000+ (highly variable)',
      brandNames: ['Intraglobin', 'Kiovig', 'Privigen']
    },
    notes: ['**COLD CHAIN**: Store according to manufacturer (usually 2°C to 8°C; some room temp stable). Always infuse slowly initially and monitor continuously for anaphylaxis/hypotension.'],
    searchTags: ['IVIG', 'Immunodeficiency', 'Kawasaki', 'ITP']
  },
  {
    id: 'imm_024',
    genericName: 'Yellow Fever Vaccine',
    therapeuticClass: 'Live Attenuated Vaccine (Strain 17D)',
    categoryId: 'immunologicals',
    indications: ['Prophylaxis against Yellow Fever (mostly for travelers to endemic areas in Africa/South America)'],
    dosing: {
      adult: '0.5 ml Subcutaneous (SC) as a single dose (provides life-long protection for most).',
      pediatric: '0.5 ml Subcutaneous (SC) as a single dose (usually not given <9 months of age).'
    },
    route: 'Subcutaneous (SC).',
    safety: {
      adr: ['Headache', 'Myalgia', 'Low-grade fever', 'Yellow fever vaccine-associated viscerotropic disease (YEL-AVD) - rare but fatal'],
      contraindications: ['Age < 6 months', 'Egg allergy (severe)', 'Thymus disorder history', 'Immunocompromised individuals', 'Pregnancy (unless high unpreventable risk)'],
      pregnancyLactation: 'Category C. Live vaccine.'
    },
    pharmacy: {
      strengths: ['Lyophilized powder with diluent'],
      dosageForms: ['Injection'],
      priceNPR: 'Travel Clinics only: ~3000-5000',
      brandNames: ['Stamaril']
    },
    notes: ['**COLD CHAIN**: 2°C to 8°C. Discard reconstituted vaccine within 1 hour. Only available at WHO-authorized vaccination centers.'],
    searchTags: ['Travel', 'Yellow Fever', 'Vaccine']
  }
];
