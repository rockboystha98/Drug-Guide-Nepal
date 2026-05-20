import { Protocol } from '../types/protocols';

export const protocolList5: Protocol[] = [
  {
    id: 'prot-dyslipidemia-2026',
    title: 'Management of Dyslipidemia (2026 ACC/AHA)',
    category: 'Endocrinology & Cardiology',
    tags: ['Dyslipidemia', 'Cholesterol', 'Hypertriglyceridemia', 'Primary Prevention', 'Secondary Prevention', 'Statin', 'LDL-C'],
    description: 'Interactive protocol for the evaluation and management of dyslipidemia based on 2026 ACC/AHA/AACVPR guidelines.',
    startNodeId: 'start',
    nodes: {
      'start': {
        id: 'start',
        title: 'Determine Patient Group',
        type: 'decision',
        content: 'Select the appropriate patient group for dyslipidemia management based on their clinical presentation:',
        options: [
          { label: 'Secondary Prevention (Clinical ASCVD)', nextId: 'sec_prev' },
          { label: 'Severe Hypercholesterolemia (LDL-C \u2265 190)', nextId: 'severe_ldl' },
          { label: 'Diabetes in Adults (without ASCVD)', nextId: 'diabetes' },
          { label: 'Subclinical Atherosclerosis (CAC Scoring)', nextId: 'subclinical' },
          { label: 'Primary Prevention (Adults 30\u201379y, LDL 70\u2013189)', nextId: 'prim_prev' },
          { label: 'Hypertriglyceridemia (\u2265 150 mg/dL)', nextId: 'hyper_tg' }
        ]
      },
      'sec_prev': {
        id: 'sec_prev',
        title: 'Secondary Prevention for Clinical ASCVD',
        type: 'decision',
        content: '**Does the patient have "Very High Risk" ASCVD?**\n\n*Very High Risk includes multiple major ASCVD events (e.g., recent ACS within 12 mo, history of MI, history of ischemic stroke, symptomatic PAD) OR 1 major ASCVD event + \u22652 high-risk conditions (age \u226565, prior CABG/PCI, current smoker, diabetes, HF, HTN, LDL-C \u2265100 on max statin+ezetimibe).*',
        options: [
          { label: 'Yes (Very High Risk)', nextId: 'sec_prev_very_high' },
          { label: 'No (Not Very High Risk)', nextId: 'sec_prev_not_very_high' }
        ]
      },
      'sec_prev_very_high': {
        id: 'sec_prev_very_high',
        title: 'Clinical ASCVD at Very High Risk',
        type: 'action',
        content: '- **Goal:** \u226550% reduction in LDL-C AND absolute LDL-C < 55 mg/dL (non-HDL-C < 85 mg/dL, optional apoB < 55 mg/dL).\n\n**1.** Start high-intensity or maximally tolerated statin (e.g., Atorvastatin 40-80 mg daily or Rosuvastatin 20-40 mg daily).\n**2.** Check LDL-C/non-HDL-C. If goal not achieved, add ezetimibe (10 mg daily) and/or PCSK9 mAb (e.g., Evolocumab 140 mg SQ q2wk or Alirocumab 75-150 mg SQ q2wk).\n**3.** If unable to tolerate/adhere or if additional lowering needed, consider inclisiran (284 mg SQ initially, at 3 mo, then q6mo) or bempedoic acid (180 mg daily).',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'sec_prev_not_very_high': {
        id: 'sec_prev_not_very_high',
        title: 'Clinical ASCVD Not at Very High Risk',
        type: 'action',
        content: '- **Goal:** \u226550% reduction in LDL-C AND absolute LDL-C < 70 mg/dL (non-HDL-C < 100 mg/dL, optional apoB < 70 mg/dL).\n\n**1.** Start high-intensity or maximally tolerated statin (e.g., Atorvastatin 40-80 mg daily or Rosuvastatin 20-40 mg daily).\n**2.** Check LDL-C/non-HDL-C. If goal not achieved, add ezetimibe (10 mg daily), a PCSK9 mAb, and/or bempedoic acid (180 mg daily).\n**3.** Consider inclisiran (284 mg SQ initially, at 3 mo, then q6mo) if needed.',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'severe_ldl': {
        id: 'severe_ldl',
        title: 'Severe Hypercholesterolemia (LDL-C \u2265 190)',
        type: 'decision',
        content: '**Target:** Achieve \u226550% LDL-C reduction.\n- Without clinical ASCVD/HeFH/Risk Factors: LDL-C < 100 mg/dL (non-HDL-C < 130 mg/dL).\n- With clinical ASCVD or HeFH/Risk Factors: LDL-C < 70 mg/dL (non-HDL-C < 100 mg/dL).\n\n**Action:**\nRule out secondary causes. Consider cascade screening and genetic testing. Initiate maximally tolerated statin.\n\nIs the goal achieved on statins alone?',
        options: [
          { label: 'Yes (Goal achieved)', nextId: 'monitor' },
          { label: 'No (Goal not achieved)', nextId: 'severe_ldl_add_on' }
        ]
      },
      'severe_ldl_add_on': {
        id: 'severe_ldl_add_on',
        title: 'Add-on Therapy for Severe Hyperlipidemia',
        type: 'action',
        content: '**Action:**\nAdd ezetimibe (10 mg/day), a PCSK9 mAb (e.g., Alirocumab 75-150 mg SQ q2wk), and/or bempedoic acid (180 mg/day).\nConsider inclisiran (284 mg SQ, then at 3 mo, then q6mo) as an alternative to PCSK9 mAb.',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'diabetes': {
        id: 'diabetes',
        title: 'Diabetes in Adults (40-75y without ASCVD)',
        type: 'decision',
        content: 'Does the patient have multiple ASCVD risk factors or PREVENT ASCVD 10-y risk \u226510%? (e.g., long duration diabetes, albuminuria \u226530, eGFR <60, retinopathy, neuropathy)',
        options: [
          { label: 'Yes (High risk)', nextId: 'diabetes_high_risk' },
          { label: 'No (Standard risk / low 10y risk)', nextId: 'diabetes_standard_risk' }
        ]
      },
      'diabetes_high_risk': {
        id: 'diabetes_high_risk',
        title: 'Diabetes with Multiple ASCVD Risk Factors (\u226510% risk)',
        type: 'action',
        content: '**Target:** \u226550% reduction in LDL-C AND LDL-C < 70 mg/dL (non-HDL-C < 100 mg/dL).\n\n**Action:** Prescribe high-intensity statin therapy (e.g., Atorvastatin 40-80 mg daily or Rosuvastatin 20-40 mg daily).\n- If goal not achieved, add ezetimibe (10 mg daily) or PCSK9 mAb (or bempedoic acid 180 mg daily).\n- Consider IPE (Icosapent Ethyl 4 g/day, usually 2 g twice daily with food) if TG 150-499 despite max statin.',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'diabetes_standard_risk': {
        id: 'diabetes_standard_risk',
        title: 'Diabetes without Multiple ASCVD Risk Factors',
        type: 'action',
        content: '**Target:** \u226530 to 49% reduction in LDL-C AND LDL-C < 100 mg/dL (non-HDL-C < 130 mg/dL).\n\n**Action:** Prescribe moderate-intensity statin therapy (e.g., Atorvastatin 10-20 mg daily or Rosuvastatin 5-10 mg daily).\n- If goal not achieved, add ezetimibe (10 mg daily).',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'subclinical': {
        id: 'subclinical',
        title: 'Subclinical Atherosclerosis (CAC Scoring)',
        type: 'decision',
        content: 'What is the patient\'s Coronary Artery Calcium (CAC) score?',
        options: [
          { label: 'CAC 1 to 99 AU (<75th percentile)', nextId: 'cac_mild' },
          { label: 'CAC \u2265100 to 299 AU (or \u226575th percentile)', nextId: 'cac_moderate' },
          { label: 'CAC \u2265300 to 999 AU', nextId: 'cac_severe' },
          { label: 'CAC \u22651000 AU', nextId: 'cac_extensive' }
        ]
      },
      'cac_mild': {
        id: 'cac_mild',
        title: 'Mild CAC (1-99 AU)',
        type: 'action',
        content: '- **Goal:** \u226530% - 49% reduction; LDL-C < 100 mg/dL (non-HDL-C < 130 mg/dL).\n- **Action:** Start moderate-intensity statin (e.g., Atorvastatin 10-20 mg daily or Rosuvastatin 5-10 mg daily).',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'cac_moderate': {
        id: 'cac_moderate',
        title: 'Moderate CAC (\u2265100 to 299 AU)',
        type: 'action',
        content: '- **Goal:** \u226550% reduction; LDL-C < 70 mg/dL (non-HDL-C < 100 mg/dL).\n- **Action:** Start LDL-C lowering therapy (consider statin as first line).',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'cac_severe': {
        id: 'cac_severe',
        title: 'Severe CAC (\u2265300 to 999 AU)',
        type: 'action',
        content: '- **Goal:** \u226550% reduction; LDL-C < 70 mg/dL (non-HDL-C < 100 mg/dL, optional apoB < 70).\n- **Action:** Start LDL-C lowering therapy. Optional: intensify to LDL-C < 55 mg/dL with ezetimibe (10 mg/day) / PCSK9 mAb / bempedoic acid (180 mg/day) if needed.',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'cac_extensive': {
        id: 'cac_extensive',
        title: 'Extensive CAC (\u22651000 AU)',
        type: 'action',
        content: '- **Goal:** \u226550% reduction; LDL-C < 55 mg/dL (non-HDL-C < 85 mg/dL, optional apoB < 55).\n- **Action:** Start intensive LDL-C lowering therapy (e.g., high-intensity statin: Atorvastatin 40-80 mg/day). Intensify as needed (like secondary prevention).',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'prim_prev': {
        id: 'prim_prev',
        title: 'Primary Prevention (Adults 30-79y, LDL 70-189)',
        type: 'decision',
        content: 'Estimate the 10-year ASCVD risk using the **PREVENT-ASCVD equations**.\nWhat is the estimated 10-year risk?',
        options: [
          { label: 'Low (< 3%)', nextId: 'prim_prev_low' },
          { label: 'Borderline (3% to < 5%)', nextId: 'prim_prev_borderline' },
          { label: 'Intermediate (5% to < 10%)', nextId: 'prim_prev_intermediate' },
          { label: 'High (\u2265 10%)', nextId: 'prim_prev_high' }
        ]
      },
      'prim_prev_low': {
        id: 'prim_prev_low',
        title: 'Low 10-year ASCVD Risk (< 3%)',
        type: 'action',
        content: '**Action:** Emphasize lifestyle modifications to reduce ASCVD risk.\n\n*Note: If 30-year risk is \u226510% or LDL-C is 160-189 mg/dL, a moderate-intensity statin (e.g., Atorvastatin 10-20 mg/day) is reasonable to reduce cumulative exposure.*',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'prim_prev_borderline': {
        id: 'prim_prev_borderline',
        title: 'Borderline 10-year ASCVD Risk (3% to < 5%)',
        type: 'decision',
        content: '**Action:** Consider risk enhancers (e.g., family history of premature ASCVD, Lp(a) \u226550 mg/dL, hsCRP \u22652 mg/L, reproductive risk markers) in risk discussion to personalize assessment.\n\nAre risk enhancers present, or does the patient prefer statin therapy?',
        options: [
          { label: 'Yes (Initiate Statin)', nextId: 'prim_prev_statin_borderline' },
          { label: 'Uncertain', nextId: 'prim_prev_cac' },
          { label: 'No (Lifestyle only)', nextId: 'monitor' }
        ]
      },
      'prim_prev_statin_borderline': {
        id: 'prim_prev_statin_borderline',
        title: 'Initiate Statin (Borderline Risk)',
        type: 'action',
        content: '**Action:** Start moderate-intensity statin (e.g., Atorvastatin 10-20 mg daily or Rosuvastatin 5-10 mg daily).\n**Goal:** \u226530-49% reduction & LDL-C < 100 mg/dL (non-HDL-C < 130 mg/dL).',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'prim_prev_intermediate': {
        id: 'prim_prev_intermediate',
        title: 'Intermediate 10-year ASCVD Risk (5% to < 10%)',
        type: 'decision',
        content: 'Is the decision to start statin therapy certain, or uncertain?',
        options: [
          { label: 'Certain (Initiate Statin)', nextId: 'prim_prev_statin_intermediate' },
          { label: 'Uncertain', nextId: 'prim_prev_cac' }
        ]
      },
      'prim_prev_statin_intermediate': {
        id: 'prim_prev_statin_intermediate',
        title: 'Initiate Statin (Intermediate Risk)',
        type: 'action',
        content: '**Action:** Initiate at least moderate-intensity statin (e.g., Atorvastatin 10-20 mg/day).\n\n**Target:** \u226530-49% reduction & LDL-C < 100 mg/dL.\n*(For upper end of this risk range, high-intensity statin is beneficial for \u226550% reduction)*.',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'prim_prev_cac': {
        id: 'prim_prev_cac',
        title: 'Coronary Artery Calcium (CAC) Assessment',
        type: 'decision',
        content: 'Perform CAC Assessment to refine risk.\nWhat is the CAC score?',
        options: [
          { label: 'CAC = 0', nextId: 'cac_zero' },
          { label: 'CAC > 0', nextId: 'subclinical' }
        ]
      },
      'cac_zero': {
        id: 'cac_zero',
        title: 'CAC = 0',
        type: 'action',
        content: 'It is reasonable to defer statin therapy and reassess with repeat CAC in 3-7 years, provided no high-risk conditions are present (e.g., current smoking, diabetes, significant family history).',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'prim_prev_high': {
        id: 'prim_prev_high',
        title: 'High 10-year ASCVD Risk (\u2265 10%)',
        type: 'action',
        content: '**Action:** Initiate high-intensity statin therapy (e.g., Atorvastatin 40-80 mg daily or Rosuvastatin 20-40 mg daily).\n\n**Target:** \u226550% reduction & LDL-C < 70 mg/dL (non-HDL-C < 100 mg/dL).\nIf goal not achieved on max statin, reasonable to add ezetimibe (10 mg daily).',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'hyper_tg': {
        id: 'hyper_tg',
        title: 'Management of Hypertriglyceridemia',
        type: 'decision',
        content: 'Identify and manage secondary causes of hypertriglyceridemia (diet, unmanaged DM, hypothyroidism, alcohol, meds). Emphasize lifestyle (diet low in sugar/refined carbs, weight loss, exercise).\n\nWhat is the fasting TG level?',
        options: [
          { label: '150 to 499 mg/dL (Moderate)', nextId: 'hyper_tg_mod' },
          { label: '500 to 999 mg/dL (Severe)', nextId: 'hyper_tg_sev' },
          { label: '\u2265 1000 mg/dL (Very Severe)', nextId: 'hyper_tg_vsev' }
        ]
      },
      'hyper_tg_mod': {
        id: 'hyper_tg_mod',
        title: 'Moderate Hypertriglyceridemia (150-499 mg/dL)',
        type: 'action',
        content: '**Action:** Estimate 10-year ASCVD risk using PREVENT-ASCVD. Maximize statin therapy if indicated to lower LDL-C and non-HDL-C.\n\n- Non-HDL-C and apoB goals are preferred over LDL-C.\n- Consider addition of Icosapent Ethyl (IPE) (4 g/day, typically 2 g twice daily with food) if ASCVD or diabetes with \u22651 risk factor present, and TG persistently \u2265150 despite statin.',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'hyper_tg_sev': {
        id: 'hyper_tg_sev',
        title: 'Severe Hypertriglyceridemia (500-999 mg/dL)',
        type: 'action',
        content: '**Action:** Diet low in added sugar, refined carbs, and saturated fat, with individualized limitation of total fat & no alcohol.\n- Address secondary causes.\n- Consider fibric acid derivatives (e.g., Fenofibrate 40-200 mg daily) or prescription omega-3 fatty acids (4 g/day) as reasonable to lower TG and reduce risk of pancreatitis.',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'hyper_tg_vsev': {
        id: 'hyper_tg_vsev',
        title: 'Very Severe Hypertriglyceridemia (\u2265 1000 mg/dL)',
        type: 'action',
        content: '**Risk of Pancreatitis is high.**\n\n**Action:**\n- Immediate referral to a Registered Dietitian Nutritionist (RDN) for a diet very low in total fat & refined carbs, NO alcohol, NO added sugars.\n- Pharmacotherapy: Fibrates (e.g., Fenofibrate 40-200 mg daily) or omega-3 FAs (4 g/day).\n- For Familial Chylomicronemia Syndrome (FCS), olezarsen (80 mg SQ once monthly) is recommended as an adjunct to diet.',
        options: [
          { label: 'Restart Protocol', nextId: 'start' }
        ]
      },
      'monitor': {
        id: 'monitor',
        title: 'Monitor and Follow-Up',
        type: 'endpoint',
        content: 'Monitor adherence and response to therapy. Regularly reassess lifestyle modifications and lipids.'
      }
    }
  }
];
