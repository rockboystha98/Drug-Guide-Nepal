import { FC } from 'react';

export interface CalculatorOption {
  label: string;
  value: number | string;
  points?: number;
}

export interface CalculatorField {
  id: string;
  label: string;
  type: 'radio' | 'number' | 'boolean' | 'select';
  options?: CalculatorOption[];
  min?: number;
  max?: number;
  unit?: string;
  placeholder?: string;
}

export interface CalculatorResult {
  score?: number | string;
  interpretation: string;
  action?: string;
}

export interface CalculatorDef {
  id: string;
  title: string;
  description: string;
  category: 'Cardiology' | 'Pulmonology' | 'Infectious Disease' | 'Gastroenterology' | 'Renal' | 'Neurology' | 'Hematology' | 'Emergency';
  fields: CalculatorField[];
  calculate: (values: Record<string, any>) => CalculatorResult;
  reference?: string;
}

export const calculators: CalculatorDef[] = [
  {
    id: 'cha2ds2-vasc',
    title: 'CHA₂DS₂-VASc Score',
    description: 'Calculates stroke risk for patients with atrial fibrillation.',
    category: 'Cardiology',
    fields: [
      { id: 'age', label: 'Age', type: 'radio', options: [{ label: '< 65', value: 0 }, { label: '65-74', value: 1 }, { label: '≥ 75', value: 2 }] },
      { id: 'sex', label: 'Sex', type: 'radio', options: [{ label: 'Male', value: 0 }, { label: 'Female', value: 1 }] },
      { id: 'chf', label: 'CHF History', type: 'boolean' },
      { id: 'htn', label: 'Hypertension History', type: 'boolean' },
      { id: 'stroke', label: 'Stroke/TIA/TE History', type: 'boolean' },
      { id: 'vascular', label: 'Vascular Disease History (prior MI, PAD, or aortic plaque)', type: 'boolean' },
      { id: 'diabetes', label: 'Diabetes History', type: 'boolean' }
    ],
    calculate: (v) => {
      let score = 0;
      score += Number(v.age || 0);
      score += Number(v.sex || 0);
      if (v.chf) score += 1;
      if (v.htn) score += 1;
      if (v.stroke) score += 2;
      if (v.vascular) score += 1;
      if (v.diabetes) score += 1;

      let act = '';
      if (score === 0) act = 'Low risk. No antithrombotic therapy recommended.';
      else if (score === 1 && v.sex === 1) act = 'Low risk. No antithrombotic therapy recommended. (Score 1 due to female sex)';
      else if (score === 1 && v.sex === 0) act = 'Moderate risk. Consider oral anticoagulation based on patient preference/bleeding risk.';
      else act = 'High risk. Oral anticoagulation recommended.';

      return {
        score,
        interpretation: `Score: ${score}`,
        action: act
      };
    }
  },
  {
    id: 'has-bled',
    title: 'HAS-BLED Score',
    description: 'Estimates 1-year risk for major bleeding for patients with atrial fibrillation.',
    category: 'Cardiology',
    fields: [
      { id: 'htn', label: 'Hypertension (uncontrolled, >160 mmHg systolic)', type: 'boolean' },
      { id: 'renal', label: 'Abnormal Renal Function (Dialysis, transplant, Cr >2.26 mg/dL or >200 µmol/L)', type: 'boolean' },
      { id: 'liver', label: 'Abnormal Liver Function (Cirrhosis or Bilirubin >2x Normal or AST/ALT/AP >3x Normal)', type: 'boolean' },
      { id: 'stroke', label: 'Stroke History', type: 'boolean' },
      { id: 'bleeding', label: 'Prior Major Bleeding or Predisposition to Bleeding', type: 'boolean' },
      { id: 'labile_inr', label: 'Labile INR (unstable/high INRs or poor time in therapeutic range)', type: 'boolean' },
      { id: 'age', label: 'Age > 65', type: 'boolean' },
      { id: 'drugs', label: 'Medication Usage Predisposing to Bleeding (Aspirin, NSAIDs)', type: 'boolean' },
      { id: 'alcohol', label: 'Alcohol Use (≥8 drinks/week)', type: 'boolean' }
    ],
    calculate: (v) => {
      let score = 0;
      ['htn', 'renal', 'liver', 'stroke', 'bleeding', 'labile_inr', 'age', 'drugs', 'alcohol'].forEach(f => {
        if (v[f]) score += 1;
      });
      let riskStr = '';
      if (score === 0) riskStr = 'Low Risk (1.13 bleeds per 100 patient-years)';
      else if (score === 1) riskStr = 'Low-Moderate Risk (1.02 bleeds per 100 patient-years)';
      else if (score === 2) riskStr = 'Moderate Risk (1.88 bleeds per 100 patient-years)';
      else if (score === 3) riskStr = 'High Risk (3.74 bleeds per 100 patient-years)';
      else riskStr = 'High Risk (>8.7 bleeds per 100 patient-years)';

      return {
        score,
        interpretation: riskStr,
        action: score >= 3 ? 'High bleeding risk; caution and regular review of patient is formally recommended when initiating antithrombotic therapy.' : 'Relatively low risk of major bleeding.'
      };
    }
  },
  {
    id: 'wells-pe',
    title: "Wells' Criteria for PE",
    description: 'Calculates probability of Pulmonary Embolism.',
    category: 'Pulmonology',
    fields: [
      { id: 'clinical_signs', label: 'Clinical signs and symptoms of DVT', type: 'boolean' },
      { id: 'alt_diagnosis', label: 'PE is #1 diagnosis OR equally likely', type: 'boolean' },
      { id: 'hr_high', label: 'Heart rate > 100', type: 'boolean' },
      { id: 'immobilization', label: 'Immobilization at least 3 days OR surgery in the previous 4 weeks', type: 'boolean' },
      { id: 'prior_pe_dvt', label: 'Previous, objectively diagnosed PE or DVT', type: 'boolean' },
      { id: 'hemoptysis', label: 'Hemoptysis', type: 'boolean' },
      { id: 'malignancy', label: 'Malignancy w/ treatment within 6 months or palliative', type: 'boolean' }
    ],
    calculate: (v) => {
      let score = 0;
      if (v.clinical_signs) score += 3.0;
      if (v.alt_diagnosis) score += 3.0;
      if (v.hr_high) score += 1.5;
      if (v.immobilization) score += 1.5;
      if (v.prior_pe_dvt) score += 1.5;
      if (v.hemoptysis) score += 1.0;
      if (v.malignancy) score += 1.0;

      let act = '';
      if (score > 6.0) act = 'High probability (60%). Consider CTA or VQ scan.';
      else if (score >= 2.0 && score <= 6.0) act = 'Moderate probability (16.2%). Consider d-dimer or imaging.';
      else act = 'Low probability (3.6%). Consider d-dimer or PERC rule.';

      let twotier = score > 4.0 ? 'PE Likely (consider imaging)' : 'PE Unlikely (consider D-dimer)';

      return {
        score,
        interpretation: `Score: ${score} (${twotier})`,
        action: act
      };
    }
  },
  {
    id: 'sirs',
    title: "SIRS Criteria",
    description: 'Identifies patients with Systemic Inflammatory Response Syndrome.',
    category: 'Infectious Disease',
    fields: [
      { id: 'temp', label: 'Temp < 36°C (96.8°F) or > 38°C (100.4°F)', type: 'boolean' },
      { id: 'hr', label: 'Heart Rate > 90', type: 'boolean' },
      { id: 'rr', label: 'Respiratory Rate > 20 or PaCO2 < 32 mmHg', type: 'boolean' },
      { id: 'wbc', label: 'WBC < 4k, > 12k, or > 10% bands', type: 'boolean' }
    ],
    calculate: (v) => {
      let score = 0;
      if (v.temp) score += 1;
      if (v.hr) score += 1;
      if (v.rr) score += 1;
      if (v.wbc) score += 1;
      
      let interp = score >= 2 ? "Meets SIRS criteria." : "Does not meet SIRS criteria.";

      return {
        score,
        interpretation: interp,
        action: score >= 2 ? "Assess for infection source. If infection present/suspected -> Sepsis." : "Observe clinically."
      };
    }
  },
  {
    id: 'qsofa',
    title: "qSOFA Score",
    description: 'Identifies patients with suspected infection who are at greater risk for a poor outcome.',
    category: 'Infectious Disease',
    fields: [
      { id: 'neuro', label: 'Altered mental status (GCS < 15)', type: 'boolean' },
      { id: 'rr', label: 'Respiratory rate ≥ 22 breaths/min', type: 'boolean' },
      { id: 'sbp', label: 'Systolic blood pressure ≤ 100 mmHg', type: 'boolean' }
    ],
    calculate: (v) => {
      let score = 0;
      if (v.neuro) score += 1;
      if (v.rr) score += 1;
      if (v.sbp) score += 1;
      
      let interp = score >= 2 ? "High risk of poor outcome." : "Not high risk by qSOFA.";

      return {
        score,
        interpretation: `Score: ${score} - ${interp}`,
        action: score >= 2 ? "Associated with a 3- to 14-fold increase in in-hospital mortality. Assess full SOFA score and consider ICU care." : "Continue standard care."
      };
    }
  },
  {
    id: 'centor',
    title: 'Centor Score (Modified/McIsaac)',
    description: 'Estimates probability of streptococcal pharyngitis (Group A Strep) and suggests management.',
    category: 'Infectious Disease',
    fields: [
      { id: 'fever', label: 'Fever (History or > 38°C / 100.4°F)', type: 'boolean' },
      { id: 'cough', label: 'Absence of Cough', type: 'boolean' },
      { id: 'nodes', label: 'Tender Anterior Cervical Adenopathy', type: 'boolean' },
      { id: 'tonsil', label: 'Tonsillar Swelling or Exudates', type: 'boolean' },
      { id: 'age', label: 'Age', type: 'radio', options: [{ label: '3 - 14 years', value: 1 }, { label: '15 - 44 years', value: 0 }, { label: '≥ 45 years', value: -1 }] },
    ],
    calculate: (v) => {
      let score = 0;
      if (v.fever) score += 1;
      if (v.cough) score += 1;
      if (v.nodes) score += 1;
      if (v.tonsil) score += 1;
      score += Number(v.age || 0);

      let p = '';
      if (score <= 0) p = '1-2%';
      else if (score === 1) p = '5-10%';
      else if (score === 2) p = '11-17%';
      else if (score === 3) p = '28-35%';
      else p = '51-53%';

      let act = '';
      if (score <= 1) act = 'No antibiotic or swab necessary.';
      else if (score === 2 || score === 3) act = 'Order Rapid Strep Test and/or perform throat culture. Treat with antibiotics if POSITIVE.';
      else act = 'Order Rapid Strep Test. Treat empirically or based on test results.';

      return {
        score,
        interpretation: `Score: ${score} (Probability of Strep: ${p})`,
        action: act
      };
    }
  },
  {
    id: 'creatinine-clearance',
    title: 'Creatinine Clearance (Cockcroft-Gault)',
    description: 'Estimates creatinine clearance (CrCl) for medication dosing.',
    category: 'Renal',
    fields: [
      { id: 'sex', label: 'Sex', type: 'radio', options: [{ label: 'Male', value: 1 }, { label: 'Female', value: 0.85 }] },
      { id: 'age', label: 'Age', type: 'number', unit: 'years' },
      { id: 'weight', label: 'Weight', type: 'number', unit: 'kg' },
      { id: 'creatinine', label: 'Serum Creatinine', type: 'number', unit: 'mg/dL' }
    ],
    calculate: (v) => {
      if (!v.age || !v.weight || !v.creatinine || !v.sex) {
         return { interpretation: 'Please provide all values.', action: '' };
      }
      
      const age = Number(v.age);
      const weight = Number(v.weight);
      const cr = Number(v.creatinine);
      const sexMult = Number(v.sex);

      if (age <= 0 || weight <= 0 || cr <= 0) {
        return { interpretation: 'Values must be greater than zero.', action: '' };
      }

      const crcl = ((140 - age) * weight * sexMult) / (72 * cr);
      
      return {
        score: crcl.toFixed(1),
        interpretation: `CrCl: ${crcl.toFixed(1)} mL/min`,
        action: 'Use this value for renally adjusted medication dosing. Note: may overestimate GFR in obese or edematous patients.'
      };
    }
  },
  {
    id: 'gcs',
    title: 'Glasgow Coma Scale (GCS)',
    description: 'Standardized assessment of level of consciousness.',
    category: 'Neurology',
    fields: [
      { id: 'eye', label: 'Eye Opening', type: 'select', 
        options: [
          { label: 'Spontaneous (4)', value: 4 },
          { label: 'To sound (3)', value: 3 },
          { label: 'To pressure/pain (2)', value: 2 },
          { label: 'None (1)', value: 1 },
          { label: 'Non-testable (NT)', value: 0 }
        ]
      },
      { id: 'verbal', label: 'Verbal Response', type: 'select', 
        options: [
          { label: 'Oriented (5)', value: 5 },
          { label: 'Confused (4)', value: 4 },
          { label: 'Words (3)', value: 3 },
          { label: 'Sounds (2)', value: 2 },
          { label: 'None (1)', value: 1 },
          { label: 'Non-testable (NT)', value: 0 }
        ]
      },
      { id: 'motor', label: 'Motor Response', type: 'select', 
        options: [
          { label: 'Obeys commands (6)', value: 6 },
          { label: 'Localizing (5)', value: 5 },
          { label: 'Normal flexion (4)', value: 4 },
          { label: 'Abnormal flexion (3)', value: 3 },
          { label: 'Extension (2)', value: 2 },
          { label: 'None (1)', value: 1 },
          { label: 'Non-testable (NT)', value: 0 }
        ]
      }
    ],
    calculate: (v) => {
      const e = Number(v.eye || 0);
      const verbal = Number(v.verbal || 0);
      const m = Number(v.motor || 0);

      if (e === 0 || verbal === 0 || m === 0) {
        return { interpretation: `GCS: E${e === 0 ? 'NT' : e} V${verbal === 0 ? 'NT' : verbal} M${m === 0 ? 'NT' : m}`, action: 'Unable to calculate total due to non-testable component.' };
      }

      const score = e + verbal + m;
      let interp = '';
      if (score >= 13) interp = 'Mild brain injury';
      else if (score >= 9) interp = 'Moderate brain injury';
      else interp = 'Severe brain injury';

      return {
        score,
        interpretation: `GCS: ${score} (${interp})`,
        action: score <= 8 ? 'Consider intubation for airway protection (GCS ≤ 8 intubate).' : 'Monitor neuro status.'
      };
    }
  },
  {
    id: 'timi-nstemi',
    title: 'TIMI Risk Score for UA/NSTEMI',
    description: 'Estimates mortality for patients with unstable angina and NSTEMI.',
    category: 'Cardiology',
    fields: [
      { id: 'age', label: 'Age ≥ 65', type: 'boolean' },
      { id: 'markers', label: 'Elevated cardiac markers', type: 'boolean' },
      { id: 'ecg', label: 'ST deviation ≥ 0.5 mm', type: 'boolean' },
      { id: 'risk', label: '≥ 3 CAD risk factors', type: 'boolean' },
      { id: 'cad', label: 'Known CAD (stenosis ≥ 50%)', type: 'boolean' },
      { id: 'asa', label: 'Aspirin use in past 7 days', type: 'boolean' },
      { id: 'angina', label: 'Severe angina (≥ 2 episodes in 24 hrs)', type: 'boolean' }
    ],
    calculate: (v) => {
      let score = 0;
      ['age', 'markers', 'ecg', 'risk', 'cad', 'asa', 'angina'].forEach(f => {
        if (v[f]) score += 1;
      });
      let riskStr = '';
      if (score <= 1) riskStr = '4.7% (Low)';
      else if (score === 2) riskStr = '8.3% (Low)';
      else if (score === 3) riskStr = '13.2% (Intermediate)';
      else if (score === 4) riskStr = '19.9% (Intermediate)';
      else if (score === 5) riskStr = '26.2% (High)';
      else if (score >= 6) riskStr = '40.9% (High)';
      
      return {
        score,
        interpretation: `Score: ${score} - 14-day risk of all-cause mortality, new/recurrent MI, or severe ischemia requiring urgent revascularization: ${riskStr}.`,
        action: score >= 3 ? 'Intermediate/High Risk: Indicates significant benefit from early invasive strategy.' : 'Low risk.'
      };
    }
  },
  {
    id: 'child-pugh',
    title: 'Child-Pugh Score for Cirrhosis Mortality',
    description: 'Estimates cirrhosis severity and predicts survival.',
    category: 'Gastroenterology',
    fields: [
      { id: 'bili', label: 'Total Bilirubin (mg/dL)', type: 'radio', options: [{ label: '< 2', value: 1 }, { label: '2 - 3', value: 2 }, { label: '> 3', value: 3 }] },
      { id: 'alb', label: 'Serum Albumin (g/dL)', type: 'radio', options: [{ label: '> 3.5', value: 1 }, { label: '2.8 - 3.5', value: 2 }, { label: '< 2.8', value: 3 }] },
      { id: 'inr', label: 'INR', type: 'radio', options: [{ label: '< 1.7', value: 1 }, { label: '1.7 - 2.2', value: 2 }, { label: '> 2.2', value: 3 }] },
      { id: 'ascites', label: 'Ascites', type: 'radio', options: [{ label: 'Absent', value: 1 }, { label: 'Slight', value: 2 }, { label: 'Moderate', value: 3 }] },
      { id: 'enceph', label: 'Hepatic Encephalopathy', type: 'radio', options: [{ label: 'None', value: 1 }, { label: 'Grade I-II', value: 2 }, { label: 'Grade III-IV', value: 3 }] }
    ],
    calculate: (v) => {
      let score = 0;
      if (v.bili) score += Number(v.bili);
      if (v.alb) score += Number(v.alb);
      if (v.inr) score += Number(v.inr);
      if (v.ascites) score += Number(v.ascites);
      if (v.enceph) score += Number(v.enceph);

      if (score === 0) return { interpretation: 'Please fill all fields', action: '' };

      let classStr = '';
      if (score <= 6) classStr = 'Class A (Well compensated)';
      else if (score <= 9) classStr = 'Class B (Significant functional compromise)';
      else classStr = 'Class C (Decompensated)';

      return {
        score,
        interpretation: `Score: ${score} - ${classStr}`,
        action: classStr === 'Class A (Well compensated)' ? '1-year survival ~100%, 2-year survival ~85%.' : classStr === 'Class B (Significant functional compromise)' ? '1-year survival ~80%, 2-year survival ~60%.' : '1-year survival ~45%, 2-year survival ~35%.'
      };
    }
  },
  {
    id: 'curb-65',
    title: 'CURB-65 Score for Pneumonia Severity',
    description: 'Estimates mortality of community-acquired pneumonia to help determine inpatient vs. outpatient treatment.',
    category: 'Pulmonology',
    fields: [
      { id: 'confusion', label: 'Confusion (AMTS ≤ 8 or disorientation in person, place, or time)', type: 'boolean' },
      { id: 'bun', label: 'BUN > 19 mg/dL (> 7 mmol/L)', type: 'boolean' },
      { id: 'resp', label: 'Respiratory Rate ≥ 30 breaths/min', type: 'boolean' },
      { id: 'bp', label: 'Systolic BP < 90 mmHg or Diastolic BP ≤ 60 mmHg', type: 'boolean' },
      { id: 'age', label: 'Age ≥ 65 years', type: 'boolean' }
    ],
    calculate: (v) => {
      let score = 0;
      ['confusion', 'bun', 'resp', 'bp', 'age'].forEach(f => {
        if (v[f]) score += 1;
      });
      let riskStr = '';
      if (score === 0) riskStr = '0.6%';
      else if (score === 1) riskStr = '2.7%';
      else if (score === 2) riskStr = '6.8%';
      else if (score === 3) riskStr = '14.0%';
      else if (score === 4) riskStr = '27.8%';
      else riskStr = '27.8%';
      
      let act = '';
      if (score <= 1) act = 'Low risk. Outpatient treatment.';
      else if (score === 2) act = 'Moderate risk. Consider short hospital stay or close outpatient monitoring.';
      else act = 'High risk. Hospitalization required. Consider ICU admission (especially if score 4-5).';

      return {
        score,
        interpretation: `Score: ${score} - 30-day mortality risk: ${riskStr}`,
        action: act
      };
    }
  },
  {
    id: 'wells-dvt',
    title: "Wells' Criteria for DVT",
    description: 'Calculates clinical probability of Deep Vein Thrombosis.',
    category: 'Hematology',
    fields: [
      { id: 'cancer', label: 'Active cancer (treatment within 6 months, or palliative)', type: 'boolean' },
      { id: 'paralysis', label: 'Paralysis, paresis, or recent plaster immobilization of legs', type: 'boolean' },
      { id: 'bedridden', label: 'Recently bedridden > 3 days, or major surgery within 12 weeks', type: 'boolean' },
      { id: 'tenderness', label: 'Localized tenderness along deep venous system', type: 'boolean' },
      { id: 'swelling', label: 'Entire leg swollen', type: 'boolean' },
      { id: 'calf', label: 'Calf swelling > 3 cm larger than asymptomatic leg', type: 'boolean' },
      { id: 'pitting', label: 'Pitting edema confined to symptomatic leg', type: 'boolean' },
      { id: 'veins', label: 'Collateral superficial veins (non-varicose)', type: 'boolean' },
      { id: 'dvt_hx', label: 'Previously documented DVT', type: 'boolean' },
      { id: 'alt_diagnosis', label: 'Alternative diagnosis at least as likely as DVT', type: 'boolean' }
    ],
    calculate: (v) => {
      let score = 0;
      ['cancer', 'paralysis', 'bedridden', 'tenderness', 'swelling', 'calf', 'pitting', 'veins', 'dvt_hx'].forEach(f => {
        if (v[f]) score += 1;
      });
      if (v['alt_diagnosis']) score -= 2;

      let riskStr = '';
      let action = '';
      if (score <= 0) {
        riskStr = 'Low Risk (DVT Probability ~5%)';
        action = 'Consider d-dimer. If negative, DVT excluded. If positive, ultrasound.';
      } else if (score >= 1 && score <= 2) {
        riskStr = 'Moderate Risk (DVT Probability ~17%)';
        action = 'High-sensitivity d-dimer or ultrasound recommended.';
      } else {
        riskStr = 'High Risk (DVT Probability ~17-53%)';
        action = 'Ultrasound of lower extremities recommended.';
      }

      return {
        score,
        interpretation: `Score: ${score} - ${riskStr}`,
        action: action
      };
    }
  },
  {
    id: 'perc-rule',
    title: 'PERC Rule for PE',
    description: 'Rules out Pulmonary Embolism without further testing in patients with low clinical probability.',
    category: 'Pulmonology',
    fields: [
      { id: 'age', label: 'Age ≥ 50', type: 'boolean' },
      { id: 'hr', label: 'Heart Rate ≥ 100 bpm', type: 'boolean' },
      { id: 'o2', label: 'SaO2 < 95% on room air', type: 'boolean' },
      { id: 'hx', label: 'Prior DVT or PE', type: 'boolean' },
      { id: 'trauma', label: 'Recent trauma or surgery (requiring hospitalization within 4 weeks)', type: 'boolean' },
      { id: 'hemoptysis', label: 'Hemoptysis', type: 'boolean' },
      { id: 'hormone', label: 'Exogenous estrogen use', type: 'boolean' },
      { id: 'leg', label: 'Unilateral leg swelling', type: 'boolean' }
    ],
    calculate: (v) => {
      let score = 0;
      ['age', 'hr', 'o2', 'hx', 'trauma', 'hemoptysis', 'hormone', 'leg'].forEach(f => {
        if (v[f]) score += 1;
      });
      
      return {
        score,
        interpretation: score === 0 ? "Score: 0 - Meets ALL PERC criteria" : `Score: ${score} - Does NOT meet all PERC criteria`,
        action: score === 0 ? 'If overall pre-test probability is low (<15%), PE is virtually excluded (<2% risk). No further workup (D-dimer or CT) needed.' : 'PERC Rule cannot rule out PE. Evaluate with D-dimer or imaging depending on clinical probability.'
      };
    }
  },
  {
    id: 'heart-score',
    title: 'HEART Score for Major Cardiac Events',
    description: 'Predicts 6-week risk of major adverse cardiac event (MACE).',
    category: 'Cardiology',
    fields: [
      { id: 'history', label: 'History', type: 'radio', options: [{ label: 'Highly suspicious', value: 2 }, { label: 'Moderately suspicious', value: 1 }, { label: 'Slightly suspicious', value: 0 }] },
      { id: 'ecg', label: 'ECG', type: 'radio', options: [{ label: 'Significant ST depression', value: 2 }, { label: 'Non-specific repolarization dist.', value: 1 }, { label: 'Normal', value: 0 }] },
      { id: 'age', label: 'Age', type: 'radio', options: [{ label: '≥ 65 years', value: 2 }, { label: '45-64 years', value: 1 }, { label: '< 45 years', value: 0 }] },
      { id: 'risk', label: 'Risk Factors (HTN, hypercholesterolemia, DM, obesity, smoking, family hx, ASCVD)', type: 'radio', options: [{ label: '≥ 3 risk factors or history of ASCVD', value: 2 }, { label: '1 or 2 risk factors', value: 1 }, { label: 'No risk factors known', value: 0 }] },
      { id: 'trop', label: 'Initial Troponin', type: 'radio', options: [{ label: '≥ 3× normal limit', value: 2 }, { label: '1-3× normal limit', value: 1 }, { label: '≤ normal limit', value: 0 }] }
    ],
    calculate: (v) => {
      let score = 0;
      let filled = 0;
      ['history', 'ecg', 'age', 'risk', 'trop'].forEach(f => {
        if (v[f] !== undefined) {
          score += Number(v[f]);
          filled += 1;
        }
      });
      
      if (filled < 5) return { interpretation: 'Please provide all 5 values.', action: '' };

      let mace = '';
      let action = '';
      if (score <= 3) {
        mace = '0.9 - 1.7%';
        action = 'Low risk. Consider discharge.';
      } else if (score <= 6) {
        mace = '12 - 16.6%';
        action = 'Intermediate risk. Consider observation, serial troponins, non-invasive testing.';
      } else {
        mace = '50 - 65%';
        action = 'High risk. Consider early invasive strategy.';
      }

      return {
        score,
        interpretation: `Score: ${score} - MACE Risk: ${mace}`,
        action
      };
    }
  },
  {
    id: 'anion-gap',
    title: 'Anion Gap',
    description: 'Calculates the anion gap to help identify causes of metabolic acidosis.',
    category: 'Renal',
    fields: [
      { id: 'na', label: 'Sodium (Na+)', type: 'number', unit: 'mEq/L' },
      { id: 'cl', label: 'Chloride (Cl-)', type: 'number', unit: 'mEq/L' },
      { id: 'hco3', label: 'Bicarbonate (HCO3-)', type: 'number', unit: 'mEq/L' }
    ],
    calculate: (v) => {
      if (!v.na || !v.cl || !v.hco3) return { interpretation: 'Please provide all lab values.', action: '' };
      
      const ag = Number(v.na) - (Number(v.cl) + Number(v.hco3));
      
      let interp = '';
      if (ag < 3) interp = 'Low Anion Gap';
      else if (ag <= 11) interp = 'Normal Anion Gap (3-11 mEq/L)';
      else interp = 'High Anion Gap (> 11 mEq/L)';

      return {
        score: ag,
        interpretation: `Anion Gap: ${ag} mEq/L - ${interp}`,
        action: ag > 11 ? 'High Anion Gap suggests causes such as GOLD MARK (Glycols, Oxoproline, L-lactate, D-lactate, Methanol, Aspirin, Renal failure, Ketoacidosis).' : 'Consider non-anion gap causes for acidosis if present (e.g., diarrhea, RTAs).'
      };
    }
  },
  {
    id: 'corrected-calcium',
    title: 'Corrected Calcium',
    description: 'Adjusts total calcium level based on serum albumin.',
    category: 'Renal',
    fields: [
      { id: 'ca', label: 'Measured Serum Calcium', type: 'number', unit: 'mg/dL' },
      { id: 'alb', label: 'Serum Albumin', type: 'number', unit: 'g/dL' }
    ],
    calculate: (v) => {
      if (!v.ca || !v.alb) return { interpretation: 'Please provide both values.', action: '' };
      const ca = Number(v.ca);
      const alb = Number(v.alb);
      const normalAlb = 4.0;
      
      const correctedCa = ca + (0.8 * (normalAlb - alb));
      
      return {
        score: correctedCa.toFixed(1),
        interpretation: `Corrected Calcium: ${correctedCa.toFixed(1)} mg/dL`,
        action: 'Use the corrected calcium to determine true hypercalcemia or hypocalcemia in the setting of hypoalbuminemia.'
      };
    }
  },
  {
    id: 'alvarado-score',
    title: 'Alvarado Score for Acute Appendicitis',
    description: 'Assesses the clinical probability of acute appendicitis.',
    category: 'Gastroenterology',
    fields: [
      { id: 'migratory', label: 'Migratory Right Iliac Fossa Pain', type: 'boolean' },
      { id: 'anorexia', label: 'Anorexia', type: 'boolean' },
      { id: 'nausea', label: 'Nausea / Vomiting', type: 'boolean' },
      { id: 'tenderness_rlq', label: 'Tenderness in Right Iliac Fossa', type: 'boolean' },    // 2 points
      { id: 'rebound', label: 'Rebound Tenderness in Right Iliac Fossa', type: 'boolean' },
      { id: 'fever', label: 'Elevated Temperature (≥ 37.3°C / 99.1°F)', type: 'boolean' },
      { id: 'leukocytosis', label: 'Leukocytosis (> 10,000 in adults)', type: 'boolean' }, // 2 points
      { id: 'shift', label: 'Shift to the left of Neutrophils', type: 'boolean' }
    ],
    calculate: (v) => {
      let score = 0;
      if (v.migratory) score += 1;
      if (v.anorexia) score += 1;
      if (v.nausea) score += 1;
      if (v.tenderness_rlq) score += 2;
      if (v.rebound) score += 1;
      if (v.fever) score += 1;
      if (v.leukocytosis) score += 2;
      if (v.shift) score += 1;

      let act = '';
      if (score <= 3) act = 'Low probability of appendicitis. Consider discharge or alternative diagnosis.';
      else if (score >= 4 && score <= 6) act = 'Equivocal. Consider further observation or imaging (CT/US).';
      else act = 'High probability of appendicitis. Surgical consultation recommended.';

      return {
        score,
        interpretation: `Score: ${score} - ${score >= 7 ? 'High' : score >= 4 ? 'Intermediate' : 'Low'} Probability`,
        action: act
      };
    }
  },
  {
    id: 'meld-score',
    title: 'MELD Score (Model for End-Stage Liver Disease) (Pre-2016)',
    description: 'Predicts 3-month survival for patients with advanced liver disease.',
    category: 'Gastroenterology',
    fields: [
      { id: 'bili', label: 'Total Bilirubin', type: 'number', unit: 'mg/dL' },
      { id: 'inr', label: 'INR', type: 'number' },
      { id: 'cr', label: 'Serum Creatinine', type: 'number', unit: 'mg/dL' },
      { id: 'dialysis', label: 'Dialysis >= 2 times in past week', type: 'boolean' }
    ],
    calculate: (v) => {
      if (!v.bili || !v.inr || !v.cr) return { interpretation: 'Please provide all lab values.', action: '' };
      
      let bili = Math.max(1.0, Number(v.bili));
      let inr = Math.max(1.0, Number(v.inr));
      let cr = Math.max(1.0, Number(v.cr));
      
      if (v.dialysis || cr > 4.0) cr = 4.0;
      
      let meld = (0.957 * Math.log(cr)) + (0.378 * Math.log(bili)) + (1.120 * Math.log(inr)) + 0.643;
      meld = Math.round(meld * 10);
      
      let interp = '';
      if (meld <= 9) interp = '1.9% 3-month mortality';
      else if (meld <= 19) interp = '6.0% 3-month mortality';
      else if (meld <= 29) interp = '19.6% 3-month mortality';
      else if (meld <= 39) interp = '52.6% 3-month mortality';
      else interp = '71.3% 3-month mortality';

      return {
        score: meld,
        interpretation: `MELD Score: ${meld} - Estimated ${interp}`,
        action: meld >= 15 ? 'Consider referral to liver transplant center.' : 'Monitor routinely.'
      };
    }
  },
  {
    id: 'chads2',
    title: 'CHADS₂ Score for Atrial Fibrillation',
    description: 'Estimates stroke risk in patients with atrial fibrillation (precursor to CHA₂DS₂-VASc).',
    category: 'Cardiology',
    fields: [
      { id: 'chf', label: 'Congestive Heart Failure history', type: 'boolean' },
      { id: 'htn', label: 'Hypertension history', type: 'boolean' },
      { id: 'age', label: 'Age ≥ 75', type: 'boolean' },
      { id: 'diabetes', label: 'Diabetes Mellitus history', type: 'boolean' },
      { id: 'stroke', label: 'Stroke or TIA symptoms previously', type: 'boolean' } // 2 points
    ],
    calculate: (v) => {
      let score = 0;
      ['chf', 'htn', 'age', 'diabetes'].forEach(f => {
        if (v[f]) score += 1;
      });
      if (v.stroke) score += 2;

      let strokeRisk = '';
      if (score === 0) strokeRisk = '1.9%';
      else if (score === 1) strokeRisk = '2.8%';
      else if (score === 2) strokeRisk = '4.0%';
      else if (score === 3) strokeRisk = '5.9%';
      else if (score === 4) strokeRisk = '8.5%';
      else if (score === 5) strokeRisk = '12.5%';
      else strokeRisk = '18.2%';

      let action = '';
      if (score === 0) action = 'Low risk. Aspirin daily or no antithrombotic therapy.';
      else if (score === 1) action = 'Moderate risk. Aspirin or oral anticoagulation.';
      else action = 'High risk. Oral anticoagulation recommended.';

      return {
        score,
        interpretation: `Score: ${score} - Adjusted stroke risk: ${strokeRisk} per year`,
        action
      };
    }
  },
  {
    id: 'shock-index',
    title: 'Shock Index (SI)',
    description: 'Calculates the shock index to predict mortality and need for massive transfusion in trauma patients.',
    category: 'Emergency',
    fields: [
      { id: 'hr', label: 'Heart Rate (bpm)', type: 'number' },
      { id: 'sbp', label: 'Systolic BP (mmHg)', type: 'number' }
    ],
    calculate: (v) => {
      if (!v.hr || !v.sbp) return { interpretation: 'Please provide HR and SBP.', action: '' };
      
      const si = Number(v.hr) / Number(v.sbp);
      
      let interp = '';
      let action = '';
      if (si < 0.5) {
        interp = 'Normal (0.5 - 0.7)';
        action = 'Routine care. Low suspicion for occult shock.';
      } else if (si <= 0.7) {
        interp = 'Normal (0.5 - 0.7)';
        action = 'Routine care.';
      } else if (si < 1.0) {
        interp = 'Elevated (> 0.7)';
        action = 'Caution. Potential occult shock, increased risk of mortality.';
      } else {
        interp = 'High (≥ 1.0)';
        action = 'High risk of short-term mortality, need for massive transfusion, and intubation. Activate appropriate protocols.';
      }

      return {
        score: si.toFixed(2),
        interpretation: `Shock Index: ${si.toFixed(2)} - ${interp}`,
        action
      };
    }
  },
  {
    id: 'maintenance-fluids',
    title: 'Maintenance Fluids (4-2-1 Rule)',
    description: 'Calculates hourly maintenance IV fluid rate.',
    category: 'Emergency',
    fields: [
      { id: 'weight', label: 'Patient Weight', type: 'number', unit: 'kg' }
    ],
    calculate: (v) => {
      if (!v.weight) return { interpretation: 'Please provide patient weight.', action: '' };
      const wt = Number(v.weight);
      let rate = 0;
      
      if (wt <= 10) {
        rate = wt * 4;
      } else if (wt <= 20) {
        rate = 40 + ((wt - 10) * 2);
      } else {
        rate = 60 + ((wt - 20) * 1);
      }
      
      // Upper limit safely capped around 100-120 in many adult protocols, but mathematically we'll just give the strict 4-2-1
      
      return {
        score: rate,
        interpretation: `Maintenance Rate: ${rate} mL/hr`,
        action: 'Use isotonic crystalloids (e.g., Normal Saline, Plasmalyte, or LR) depending on clinical scenario. Capping at 100-120 mL/hr is standard for most average adults to avoid fluid overload.'
      };
    }
  },
  {
    id: 'winters-formula',
    title: "Winter's Formula",
    description: 'Calculates expected pCO2 to determine if there is a mixed acid-base disorder in the setting of metabolic acidosis.',
    category: 'Renal',
    fields: [
      { id: 'hco3', label: 'Bicarbonate (HCO3-)', type: 'number', unit: 'mEq/L' },
      { id: 'pco2', label: 'Measured pCO2 (from ABG/VBG)', type: 'number', unit: 'mmHg' }
    ],
    calculate: (v) => {
      if (!v.hco3) return { interpretation: 'Please provide serum Bicarbonate.', action: '' };
      const hco3 = Number(v.hco3);
      const expectedPCO2 = (1.5 * hco3) + 8;
      const lowerBound = expectedPCO2 - 2;
      const upperBound = expectedPCO2 + 2;
      
      let action = '';
      if (v.pco2) {
        const measured = Number(v.pco2);
        if (measured < lowerBound) {
          action = `Measured pCO2 (${measured}) is LOW compared to expected. This indicates a concomitant Primary Respiratory Alkalosis.`;
        } else if (measured > upperBound) {
          action = `Measured pCO2 (${measured}) is HIGH compared to expected. This indicates a concomitant Primary Respiratory Acidosis.`;
        } else {
          action = `Measured pCO2 (${measured}) matches expected. This is a pure metabolic acidosis with appropriate respiratory compensation.`;
        }
      } else {
        action = 'Enter measured pCO2 for further interpretation.';
      }

      return {
        score: expectedPCO2.toFixed(1),
        interpretation: `Expected pCO2: ${lowerBound.toFixed(1)} - ${upperBound.toFixed(1)} mmHg`,
        action
      };
    }
  },
  {
    id: 'parkland-formula',
    title: 'Parkland Formula for Burns',
    description: 'Calculates fluid resuscitation requirements for burn patients over the first 24 hours.',
    category: 'Emergency',
    fields: [
      { id: 'weight', label: 'Patient Weight', type: 'number', unit: 'kg' },
      { id: 'tbsa', label: 'Total Body Surface Area (TBSA) Burned', type: 'number', unit: '%' }
    ],
    calculate: (v) => {
      if (!v.weight || !v.tbsa) return { interpretation: 'Please provide weight and TBSA.', action: '' };
      const wt = Number(v.weight);
      const tbsa = Number(v.tbsa);
      
      // Traditional Parkland uses 4mL, but ATLS recently shifted to 2mL for adults. I'll provide 4mL to align with traditional MDCalc Parkland.
      const totalFluids = 4 * wt * tbsa;
      const first8Hours = totalFluids / 2;
      const next16Hours = totalFluids / 2;
      
      return {
        score: totalFluids,
        interpretation: `Total 24-hour Lactated Ringer's: ${totalFluids} mL`,
        action: `Give first half (${first8Hours} mL) over the first 8 hours post-burn (\u2248 ${(first8Hours/8).toFixed(0)} mL/hr).\nGive the second half (${next16Hours} mL) over the next 16 hours (\u2248 ${(next16Hours/16).toFixed(0)} mL/hr).\nAdjust based on urine output (target 0.5 mL/kg/hr in adults).`
      };
    }
  }
];
