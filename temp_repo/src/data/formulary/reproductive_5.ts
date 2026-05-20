import { DrugEntry } from '../../types/formulary';

export const reproductive5Drugs: DrugEntry[] = [
  // Neonatal Specifics
  {
    id: 'rep_031',
    genericName: 'Caffeine Citrate',
    therapeuticClass: 'CNS Stimulant / Respiratory Stimulant',
    categoryId: 'reproductive',
    indications: ['Apnea of Prematurity'],
    dosing: {
      adult: 'Not indicated.',
      pediatric: 'Not indicated.',
      neonatal: 'Loading Dose: 20 mg/kg IV or PO once.\nMaintenance Dose: 5-10 mg/kg/day IV or PO, starting 24 hours after the loading dose.'
    },
    safety: {
      adr: ['Tachycardia', 'Jitteriness', 'Feeding intolerance', 'Seizures (at toxic doses)'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Not applicable.'
    },
    pharmacy: {
      strengths: ['20 mg/mL (equivalent to 10 mg/mL caffeine base) injection or oral solution'],
      dosageForms: ['Injection', 'Oral Solution'],
      priceNPR: 'Vial: 200-400',
      brandNames: ['Cafcit', 'Apneca']
    },
    searchTags: ['Baby', 'Newborn', 'Preterm', 'Apnea'],
    notes: ['CRITICAL MEASURE: Do not confuse caffeine citrate dose with caffeine base dose (20mg citrate = 10mg base). Clearly separate Loading vs Maintenance dose to prevent neonatal toxicity.']
  },
  {
    id: 'rep_032',
    genericName: 'Beractant / Poractant alfa',
    therapeuticClass: 'Pulmonary Surfactant',
    categoryId: 'reproductive',
    indications: ['Neonatal Respiratory Distress Syndrome (RDS) - Prophylaxis and Rescue'],
    dosing: {
      adult: 'Not indicated.',
      pediatric: 'Not indicated.',
      neonatal: 'Intratracheal: 100 mg/kg (4 mL/kg for Beractant) instilled directly into the endotracheal tube in 4 aliquots.'
    },
    safety: {
      adr: ['Transient bradycardia', 'Oxygen desaturation during administration', 'Pulmonary hemorrhage', 'Endotracheal tube blockage'],
      contraindications: ['None when used for RDS'],
      pregnancyLactation: 'Not applicable.'
    },
    pharmacy: {
      strengths: ['25mg/ml (Beractant), 80mg/ml (Poractant) vial'],
      dosageForms: ['Intratracheal suspension'],
      priceNPR: 'Vial: 8000 - 15000',
      brandNames: ['Survanta', 'Curosurf']
    },
    searchTags: ['Baby', 'Newborn', 'Preterm', 'Lungs', 'RDS'],
    notes: ['Must be administered only by personnel trained in neonatal intubation and airway management. Monitor oxygenation closely; ventilator settings often need rapid reduction post-administration to prevent lung overinflation.']
  },
  {
    id: 'rep_033',
    genericName: 'Phytomenadione (Vitamin K1)',
    therapeuticClass: 'Vitamin / Hemostatic Agent',
    categoryId: 'reproductive',
    indications: ['Prophylaxis and treatment of Hemorrhagic Disease of the Newborn', 'Vitamin K deficiency bleeding'],
    dosing: {
      adult: 'Coagulopathy: 1-10 mg IV/PO.',
      pediatric: 'Varies.',
      neonatal: 'Prophylaxis: 1 mg IM stat within 1 hour of birth (for babies >1.5kg). For babies <1.5kg: 0.5 mg IM.'
    },
    safety: {
      adr: ['Pain/swelling at injection site', 'Anaphylaxis (with IV administration, extremely rare with IM/PO)'],
      contraindications: ['Hypersensitivity'],
      pregnancyLactation: 'Given directly to neonate.'
    },
    pharmacy: {
      strengths: ['1mg/0.5ml ampoule (specifically formulated for pediatric use)'],
      dosageForms: ['Injection'],
      priceNPR: 'Ampoule: 10-25',
      brandNames: ['Kenadion', 'Vit K']
    },
    searchTags: ['Baby', 'Newborn', 'Bleeding', 'Prophylaxis'],
    notes: ['The 1mg IM shot is mandatory standard of care in all deliveries in Nepal to prevent fatal intracranial bleeding.']
  },
  {
    id: 'rep_034',
    genericName: 'Neomycin + Bacitracin Powder',
    therapeuticClass: 'Topical Antibiotic',
    categoryId: 'reproductive',
    indications: ['Umbilical cord care (often used off-label to dry/prevent infection in Nepal settings)', 'Superficial skin infections'],
    dosing: {
      adult: 'Topical: Apply 1-3 times daily.',
      pediatric: 'Topical: Apply 1-3 times daily.',
      neonatal: 'Topical: Dust lightly over the umbilical stump after cleaning with chlorhexidine (depending on specific hospital/NICU protocol).'
    },
    safety: {
      adr: ['Contact dermatitis', 'Ototoxicity/Nephrotoxicity (only if applied to large areas of broken skin or systemic absorption occurs)'],
      contraindications: ['Deep or puncture wounds', 'Known hypersensitivity'],
      pregnancyLactation: 'Not applicable.'
    },
    pharmacy: {
      strengths: ['Powder blend'],
      dosageForms: ['Topical Powder'],
      priceNPR: 'Bottle: 80-120',
      brandNames: ['Nebasulf (contains sulfacetamide as well)']
    },
    searchTags: ['Baby', 'Newborn', 'Cord care', 'Umbilicus'],
    notes: ['Note: National policy often recommends 7.1% Chlorhexidine gel for routine cord care in Nepal. Antibiotic powders are used in select clinical situations or older practices.']
  }
];
