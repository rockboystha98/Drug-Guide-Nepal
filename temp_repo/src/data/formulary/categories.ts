import { TherapeuticCategory } from '../../types/formulary';

export const therapeuticCategories: TherapeuticCategory[] = [
  { id: 'gi', name: '1. GI & Metabolism', iconName: 'Stethoscope', description: 'Antacids, Antiemetics, Laxatives' },
  { id: 'cardio', name: '2. Cardiovascular', iconName: 'Activity', description: 'Antihypertensives, Antianginals, Diuretics' },
  { id: 'respiratory', name: '3. Respiratory', iconName: 'Wind', description: 'Bronchodilators, Corticosteroids' },
  { id: 'cns', name: '4. CNS', iconName: 'Brain', description: 'Analgesics, Antiepileptics, Psychotropics' },
  { id: 'infections', name: '5. Infections', iconName: 'Bug', description: 'Antibiotics, Antifungals, Antivirals' },
  { id: 'endocrine', name: '6. Endocrine', iconName: 'ActivitySquare', description: 'Antidiabetics, Thyroid hormones' },
  { id: 'reproductive', name: '7. Reproductive Health & Neonatology', iconName: 'Baby', description: 'Contraceptives, Oxytocics, Eclampsia, Neonatal Care' },
  { id: 'oncology', name: '8. Malignant Disease', iconName: 'ShieldAlert', description: 'Cytotoxics, Immunosuppressants' },
  { id: 'blood', name: '9. Nutrition/Blood', iconName: 'Droplet', description: 'Vitamins, Minerals, Anticoagulants' },
  { id: 'msk', name: '10. Musculoskeletal', iconName: 'Activity', description: 'NSAIDs, Muscle relaxants' },
  { id: 'eye', name: '11. Eye', iconName: 'Eye', description: 'Ophthalmologicals, Miotics, Mydriatics' },
  { id: 'ent', name: '12. ENT', iconName: 'Stethoscope', description: 'Ear and Nasal preparations' },
  { id: 'skin', name: '13. Skin', iconName: 'Thermometer', description: 'Topical antifungals, Corticosteroids' },
  { id: 'immunologicals', name: '14. Immunologicals/Vaccines', iconName: 'ShieldAlert', description: 'Vaccines, Antisera' },
  { id: 'anesthesia', name: '15. Anaesthesia/Emergency', iconName: 'Syringe', description: 'Anesthetics, Antidotes, Resuscitation' },
  { id: 'renal', name: '16. Renal & Genitourinary', iconName: 'Droplet', description: 'Diuretics, BPH treatments' }
];
