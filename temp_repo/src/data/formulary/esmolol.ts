import { DrugEntry } from '../../types/formulary';

export const esmololDrugs: DrugEntry[] = [
  {
    id: 'esmolol_001',
    genericName: 'Esmolol Hydrochloride',
    therapeuticClass: 'Beta1-Selective (Cardioselective) Adrenergic Blocker',
    categoryId: 'cardio',
    indications: [
      'Supraventricular Tachycardia (SVT)',
      'Noncompensatory Sinus Tachycardia',
      'Intraoperative and Postoperative Tachycardia and Hypertension'
    ],
    dosing: {
      adult: 'SVT/Tachycardia: Optional loading dose 500 mcg/kg IV over 1 min, then 50 mcg/kg/min for 4 min. May increase step-wise to max 200 mcg/kg/min.\nIntraop/Postop (Immediate Control): 1 mg/kg IV over 30 sec, then 150 mcg/kg/min.\nIntraop/Postop (Gradual Control): 500 mcg/kg IV over 1 min, then 50 mcg/kg/min (max 300 mcg/kg/min for hypertension).',
      pediatric: 'Safety and effectiveness have not been established in pediatric patients.'
    },
    safety: {
      adr: [
        'Symptomatic hypotension (hyperhidrosis, dizziness)',
        'Asymptomatic hypotension',
        'Infusion site reactions (inflammation, induration)',
        'Bradycardia'
      ],
      contraindications: [
        'Severe sinus bradycardia (may precipitate shock/arrest)',
        'Heart block greater than first degree',
        'Sick sinus syndrome',
        'Decompensated heart failure',
        'Cardiogenic shock',
        'Concomitant IV cardiodepressant calcium-channel antagonists (e.g., verapamil)',
        'Pulmonary hypertension'
      ],
      pregnancyLactation: 'Category C. Teratogenicity studies showed no evidence of maternal toxicity at human maintenance dosages, but fetal bradycardia has been reported in late pregnancy. Use with caution. Not known if excreted in human milk.',
      renalAdjustment: 'No dosage adjustment required for esmolol in patients with renal impairment receiving 150 mcg/kg for 4 hours. Acid metabolite accumulates in ESRD.'
    },
    pharmacy: {
      strengths: ['10 mg/mL (100 mg/10 mL vial)'],
      dosageForms: ['Injection (IV)'],
      priceNPR: 'N/A', // Unknown price in NPR
      brandNames: ['Brevibloc', 'Esmolol Hydrochloride Injection']
    },
    notes: [
      'Very short-acting IV beta-blocker (half-life ~9 mins).',
      'Continuous monitoring of blood pressure and heart rate is required.',
      'Incompatibilities: Sodium Bicarbonate (5%) and furosemide.'
    ]
  }
];
