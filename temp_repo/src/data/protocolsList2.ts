import { Protocol } from '../types/protocols';

export const protocolList2: Protocol[] = [
  {
    id: 'prot-airway',
    title: 'Airway Management Flowchart',
    category: 'Emergency & Critical Care',
    tags: ['Intubation', 'RSI', 'Difficult Airway', 'Crash Airway', 'Ventilation'],
    description: '7 Ps of RSI, Double setup, and Failed Airway pathways.',
    markdownContent: `
### 7 Ps of Rapid Sequence Intubation (RSI)
1. **Preparation** (S: Suction, T: Tools for intubation, O: Oxygen source, P: Positioning, M: Monitors, A: Assistant/Ambu bag, I: IV access, D: Drugs)
2. **Preoxygenation**
3. **Pre-intubation optimization** (Manage Hypoxaemia with HFNC, manage Hypovolemia with fluid/[Norepinephrine (Noradrenaline)](#drug-Norepinephrine))
4. **Paralysis with Induction**
   - Induction: [Ketamine](#drug-Ketamine) 1 to 2 mg/kg
   - Paralysis: [Succinylcholine](#drug-Succinylcholine) 2 mg/kg (max 150mg) OR [Rocuronium](#drug-Rocuronium) 0.6 mg/kg OR [Vecuronium](#drug-Vecuronium) 0.08 mg/kg
5. **Positioning**
6. **Placement with Proof**
7. **Post Intubation Management (PIM)**
   - Monitor SpO2, BP, PR, RR
   - Maintain sedation with [Midazolam](#drug-Midazolam) 1mg/hour
   - Paralysis with intermittent [Vecuronium](#drug-Vecuronium) or [Rocuronium](#drug-Rocuronium)
   - Analgesia with [Morphine](#drug-Morphine) 1 mg/hour

### Assessment Pathway
- **Unresponsive / Gasping?** -> **Crash Airway** -> Give [Succinylcholine](#drug-Succinylcholine) 2mg/kg -> Intubate -> PIM.
- **Airway Assessment:**
  - **Maintain optimal physiology (BVM/LMA)?**
    - Yes -> Perform RSI with double setup
    - No -> Forced to act (Imminent airway obstruction) -> Difficult Airway -> Failure to maintain oxygenation -> **Insert LMA and prepare for cricothyroidectomy**.
- **Failed Airway:** If unable to intubate by multiple attempts or failure to maintain oxygenation -> **Call Help**.
    `
  },
  {
    id: 'prot-diabetic-ketoacidosis',
    title: 'Diabetic Ketoacidosis (DKA) & HHS',
    category: 'Endocrinology',
    tags: ['DKA', 'Diabetes', 'HHS', 'Insulin', 'Fluids', 'Acidosis'],
    description: 'Diagnosis and fluid/insulin management for DKA and HHS.',
    markdownContent: `
### Diagnostic Criteria
| Parameter | Mild DKA | Moderate DKA | Severe DKA | HHS |
|---|---|---|---|---|
| **Glucose** | >250 | >250 | >250 | >600 |
| **Arterial pH** | 7.25 - 7.3 | 7.0 - 7.24 | < 7.0 | > 7.3 |
| **Bicarbonate** | 15 - 18 | 10 - 14 | < 10 | > 15 |
| **Urine Ketones**| Positive | Positive | Positive | Small |
| **Mental Status**| Alert | Alert/drowsy | Stupor/coma | Stupor/coma |

### Management of DKA
**ER Management (NIKAH: NS, Insulin, K+, Antibiotics if infection, HCO3 only if pH <7)**

**1. Fluid Therapy:**
- Initial: Normal Saline (NS) @ 15-20 ml/kg/hr during the 1st hour.
- Add fluid based on urine output and ketone evaluation.
- *Note:* If blood sugar reaches 250 mg/dl (300 mg/dl in HHS), change to **5% dextrose with 0.45% NaCl** at 150-250 ml/hr.

**2. Insulin Therapy:**
- 0.15 units/kg IV bolus followed by 0.1 units/kg/hour IV infusion ([Insulin (Regular)](#drug-Insulin)).
- If patient is able to eat, start subcutaneous multiple-dose schedule.

**3. Potassium Therapy:**
- If Serum K < 3.3 meq/L: Correct with Inj KCl 20mEq/hr.
- If Serum K 3.3 - 5.5: Give potassium 20mEq in each liter of IV fluids.

**4. Bicarbonate Therapy:**
- *Only recommended if pH < 7.0*. Calculate deficit, give 1/2 as loading dose over 10 min, then 1/2 over 4 hour infusion.
    `
  },
  {
    id: 'prot-hypertension',
    title: 'AHA/ACC 2025 Hypertension Guidelines',
    category: 'Cardiology',
    tags: ['HTN', 'High Blood Pressure', 'BP', 'Hypertensive Emergency', 'Antihypertensives', 'AHA 2025', 'Resistant HTN'],
    description: '2025 AHA/ACC classification, risk-based treatment threshold (PREVENT CVD), resistant HTN, and hypertensive emergencies.',
  },
  {
    id: 'prot-wound',
    title: 'Traumatic Wound Management',
    category: 'Surgery & Orthopedics',
    tags: ['Wound', 'Trauma', 'Tetanus', 'Sutures', 'Dog Bite', 'Infection', 'Laceration'],
    description: 'Wound classification, tetanus prophylaxis, and irrigation principles.',
    markdownContent: `
### Wound Classification
- **Clean:** Normal tissue
- **Clean-contaminated:** Normal tissue that is colonized
- **Contaminated:** Contains foreign/infected materials
- **Infected:** Pus present

*Gustilo Classification (Open Fractures):*
- Type 1: < 2 cm open wound
- Type 2: 2-20 cm open wound
- Type 3A/B/C: Extensive tissue damage / periosteal stripping / neurovascular injury.

### Tetanus Prophylaxis
| Doses of Tetanus Toxoid | Clean / Clean Contaminated | All other wounds |
|---|---|---|
| **< 3 doses or unknown** | Give TT (Yes), No IG | Give TT (Yes), Give IG (Yes) |
| **>= 3 doses** | TT only if > 10 yrs since last | TT only if > 5 yrs since last |

### Antibiotics
- Not indicated for all wounds.
- **Contaminated Wounds:** [Amoxicillin-Clavulanic acid](#drug-Amoxicillin-Clavulanic) 625 mg TDS for 5-7 days.
- **Admitted (Open Fracture/Dirty):** Inj [Cefazolin](#drug-Cefazolin) 2g IV + [Metronidazole](#drug-Metronidazole) 500mg IV (for limb trauma).

### Wound Cleaning
**Normal Saline vs Betadine vs Hydrogen Peroxide:**
There is *no evidence* that betadine or hydrogen peroxide is better than normal saline or clean tap water for irrigation. Betadine and Hydrogen Peroxide can be cytotoxic to healthy cells and granulating tissues.
    `
  }
];
