import { Protocol } from '../types/protocols';

export const protocolList3: Protocol[] = [
  {
    id: 'prot-circulation',
    title: 'Assessment and Management of Circulation',
    category: 'Emergency & Critical Care',
    tags: ['Circulation', 'Shock', 'Fluids', 'Hemodynamics'],
    description: 'Protocol for hemodynamic assessment and resuscitation.',
    mermaidChart: `
graph TD
    A[Assess Circulation: <br/>HR, BP, Cap Refill, Urine Output] --> B{Signs of Shock?}
    B -- No --> C[Routine Monitoring]
    B -- Yes --> D[Obtain IV access x2 large bore]
    D --> E[Send Bloods: VBG, Lactate, CBC, Crossmatch]
    E --> F{Is there active bleeding?}
    F -- Yes --> G[Stop bleeding <br/> Activate Massive Transfusion]
    F -- No --> H[Fluid Challenge: 500ml Crystalloid STAT]
    G --> I[Reassess BP and Perfusion]
    H --> I
    I --> J{Responded?}
    J -- Yes --> K[Maintenance fluids if needed]
    J -- No --> L[Consider Vasopressors/Inotropes <br/> e.g., Norepinephrine]
    `
  },
  {
    id: 'prot-oxygen',
    title: 'Oxygen Therapy Protocol',
    category: 'Pulmonology',
    tags: ['Oxygen', 'Hypoxia', 'Respiratory Failure', 'ARDS'],
    description: 'Guidelines for safe oxygen administration and target saturations.',
    mermaidChart: `
graph TD
    A[Patient needs Oxygen Therapy] --> B{Risk of Type II Respiratory Failure?<br/>e.g. COPD}
    B -- Yes --> C[Target SpO2 88-92%]
    C --> D[Start with 24-28% Venturi Mask]
    B -- No --> E[Target SpO2 94-98%]
    E --> F{Severity of condition?}
    F -- Mild --> G[Nasal Cannula 2-6 L/min]
    F -- Moderate --> H[Simple Face Mask 5-10 L/min]
    F -- Severe --> I[Non-Rebreather Mask 15 L/min]
    D --> J[Reassess ABG in 1 hr]
    G --> K[Monitor SpO2]
    H --> K
    I --> K
    J --> L{PaCO2 rising?}
    L -- Yes --> M[Consider NIV / BiPAP]
    L -- No --> N[Continue current target]
    `
  },
  {
    id: 'prot-cardiogenic-shock',
    title: 'Assessment and Management of Cardiogenic Shock',
    category: 'Cardiology',
    tags: ['Cardiogenic Shock', 'Shock', 'Heart Failure', 'Inotropes'],
    description: 'Step-wise approach to suspected cardiogenic shock.',
    mermaidChart: `
graph TD
    A[Suspected Cardiogenic Shock<br/>SBP &lt; 90, signs of end-organ hypoperfusion] --> B[12-lead ECG, Echo, Trop, Lactate]
    B --> C{ACS / STEMI?}
    C -- Yes --> D[Urgent PCI / Revascularization]
    C -- No --> E{Volume Status?}
    E -- Hypovolemic --> F[Cautious Fluid Challenge 250ml]
    E -- Congested --> G[Start Inotrope: Dobutamine or Milrinone]
    F --> H[Reassess Perfusion]
    G --> H
    H --> I{Persistent Hypotension?}
    I -- Yes --> J[Add Vasopressor: Norepinephrine]
    I -- No --> K[Continue maintenance & monitoring]
    J --> L[Consider Mechanical Circulatory Support <br/> IABP, ECMO]
    D --> K
    `
  },
  {
    id: 'prot-brain-tumour',
    title: 'Classification of Brain Tumour',
    category: 'Neurology',
    tags: ['Brain tumor', 'Neoplasm', 'Oncology', 'Classification'],
    description: 'WHO classification and initial approach to brain tumors.',
    mermaidChart: `
graph TD
    A[Brain Tumour Detection] --> B[Intra-axial vs Extra-axial]
    B -- Extra-axial --> C[Meningioma / Schwannoma]
    B -- Intra-axial --> D[Primary vs Secondary]
    D -- Secondary --> E[Metastatic: Lung, Breast, Melanoma]
    D -- Primary --> F[Gliomas vs Non-Gliomas]
    F -- Gliomas --> G[Astrocytoma, Oligodendroglioma, Glioblastoma]
    F -- Non-Gliomas --> H[Ependymoma, Medulloblastoma]
    `
  },
  {
    id: 'prot-common-cold',
    title: 'Management of Common Cold',
    category: 'Infectious Diseases',
    tags: ['Cold', 'URI', 'Viral', 'Pediatrics'],
    description: 'Diagnosis, drug dosages, and counselling for the common cold.',
    startNodeId: 'start',
    nodes: {
      'start': {
        id: 'start',
        title: 'Clinical Assessment',
        type: 'decision',
        content: 'Patient presents with upper respiratory tract symptoms.\n\nAre there any red flags or atypical features pointing to other diagnoses?\n*(e.g., abrupt onset, characteristic high fever, prominent/paroxysmal cough, or shortness of breath)*',
        options: [
          { label: 'Yes (Atypical features present)', nextId: 'differentials' },
          { label: 'No (Gradual onset, rhinorrhea, mild aches)', nextId: 'common_cold_dx' }
        ]
      },
      'differentials': {
        id: 'differentials',
        title: 'Differential Diagnosis of URTI',
        type: 'endpoint',
        content: '**Review for other conditions:**\n\n- **Influenza:** Abrupt onset, characteristic high fever rising rapidly, prominent early aches.\n- **Acute Bronchitis:** Prominent, persistent dry or wet cough.\n- **Bacterial Sinusitis:** Symptom duration longer/worse, severe pain. Common aches and fever.\n- **Pharyngitis:** Prominent sore throat, variable fever (high if bacterial).\n- **Pertussis:** Paroxysmal, whoop-like cough.\n- **COVID-19:** Common shortness of breath, possible anosmia.\n- **Allergic Rhinitis:** Chronic, prominent sneezing, prominent rhinorrhea, no fever.'
      },
      'common_cold_dx': {
        id: 'common_cold_dx',
        title: 'Confirmed Common Cold',
        type: 'decision',
        content: 'The common cold is a mild upper respiratory viral infection, self-limited up to 10 days (median 8 days in children).\n\n**Viral Causes:** Rhinovirus (30-50%), Coronavirus (10-15%), Influenza virus, RSV, Parainfluenza, Adenovirus, etc.\n\nSelect patient age group for management:',
        options: [
          { label: 'Adult Patient (>12 years)', nextId: 'adult_tx' },
          { label: 'Pediatric Patient (0-12 years)', nextId: 'peds_tx' }
        ]
      },
      'adult_tx': {
        id: 'adult_tx',
        title: 'Adult Treatment Guidelines',
        type: 'decision',
        content: '**Key Recommendations:**\n- **Antibiotics are ineffective** for the common cold and should not be prescribed.\n- Treatments with established effectiveness for adults are limited to OTC analgesics and decongestants with or without antihistamines.\n- Codeine and other antitussives have not been proven effective for cough in adults.\n- Topical decongestant use should be limited to 2-3 days to prevent rebound rhinitis.',
        options: [
          { label: 'View Medications & Dosages', nextId: 'adult_meds' },
          { label: 'Patient Counselling', nextId: 'counselling' }
        ]
      },
      'peds_tx': {
        id: 'peds_tx',
        title: 'Pediatric Treatment Guidelines',
        type: 'decision',
        content: '**Key Recommendations:**\n- **WARNING:** OTC cold medications should NOT be used in children < 4 years due to potential harms and lack of benefit.\n- Antibiotics are ineffective and should not be prescribed.\n\n**Safe & Effective Alternatives:**\n- **Honey:** For children \u2265 12 months (2.5ml for 2-5y, 5ml for 6-11y, once daily).\n- **Nasal saline irrigation:** 3 to 9 ml per nostril up to 3 weeks.\n- **Menthol/Eucalyptus rub:** For children \u2265 2 years.',
        options: [
          { label: 'View Pediatric Dosages', nextId: 'peds_meds' },
          { label: 'Patient Counselling', nextId: 'counselling' }
        ]
      },
      'adult_meds': {
        id: 'adult_meds',
        title: 'Adult Medications',
        type: 'action',
        content: '### Nasal Decongestants\n- **Pseudoephedrine:** 60 mg 4-6 hourly.\n- **Phenylephrine:** 10 mg 4 hourly (Max 60mg/24hr). *Less effective than pseudoephedrine.*\n- **Oxymetazoline (Topical):** 0.1% 2-3 sprays into each nostril for \u2264 3 days. (Max 2 doses/day)\n\n### Antihistamines\n- **Chlorpheniramine:** 4 mg 4-6 hourly (Max 24mg/day).\n- **Diphenhydramine:** 25 mg 4-6 hourly.\n\n### Antitussives\n- **Dextromethorphan:** 10-20 mg 4 hourly OR 20-30 mg 6-8 hourly. (Max 120mg/day).\n\n### Analgesics / Antipyretics\n- **Ibuprofen:** 200 to 800 mg 3-4 times daily (Max 2400mg/day).\n- **Paracetamol:** 500-1000 mg (Max 4g/day).',
        options: [
          { label: 'Next: Patient Counselling', nextId: 'counselling' }
        ]
      },
      'peds_meds': {
        id: 'peds_meds',
        title: 'Pediatric Medications',
        type: 'action',
        content: '*Note: OTC cold medications are contraindicated in children < 4 years.*\n\n### Nasal Decongestants\n- **Pseudoephedrine:** 1mg/kg/dose 6 hourly (Max 15 mg/dose).\n- **Phenylephrine:** 4-5y (2.5 mg q4h, max 15mg); 6-11y (5 mg q4h, max 30mg).\n- **Oxymetazoline:** 0.05% for >6 years. 2-3 sprays \u2264 3 days.\n\n### Antihistamines\n- **Chlorpheniramine:** 2-<6y (1mg q4-6h, max 6mg/day). 6-<12y (2mg q4-6h, max 12mg/day).\n- **Diphenhydramine:** 2-<6y (6.25mg q4-6h, max 37.5mg/day). 6-<12y (12.5-25mg q4-6h, max 150mg/day).\n\n### Analgesics / Antipyretics\n- **Ibuprofen (>6mo):** 4 to 10 mg/kg/dose every 6-8 hours (Max daily dose: 40mg/kg/day).\n- **Paracetamol:** 15 mg/kg per dose.',
        options: [
          { label: 'Next: Patient Counselling', nextId: 'counselling' }
        ]
      },
      'counselling': {
        id: 'counselling',
        title: 'Patient Counselling',
        type: 'endpoint',
        content: '**Why antibiotics will not help:**\n"The common cold is caused by a virus, so antibiotics won\'t help. Antibiotics can\'t fight viruses like colds. Taking them won\'t do any good this time and may hurt chances of fighting bacterial infections in the future."\n\n**Suggest treatments that might help:**\n"You can try honey for your cough, ibuprofen or paracetamol for muscle aches, and nasal or oral decongestants (with or without an antihistamine) for your congestion."\n\n**Manage expectations for length of illness:**\n"Most people start to feel better after about a week, but sometimes the cough can last even longer. It is common to catch one cold virus right after another, like planes taking off at a busy airport."\n\n**Next steps if patient does not improve:**\n"If you develop worsening symptoms like a fever >101°F (38.3°C), productive cough, shortness of breath, or very bad headache/facial pain, call me to ensure you don\'t have a more serious illness."'
      }
    }
  },
  {
    id: 'prot-copd-ccc',
    title: 'COPD - CCC Protocol',
    category: 'Pulmonology',
    tags: ['COPD', 'Exacerbation', 'Steroids', 'Inhalers'],
    description: 'Comprehensive Care Clinic protocol for COPD management.',
    mermaidChart: `
graph TD
    A[COPD Patient] --> B{Stable or Exacerbation?}
    B -- Exacerbation --> C[Oxygen target 88-92%]
    C --> D[Nebulized SABA/SAMA]
    D --> E[Systemic Corticosteroids: Prednisone 40mg x 5 days]
    E --> F{Purulent sputum?}
    F -- Yes --> G[Antibiotics: Azithromycin or Amoxy-Clav]
    F -- No --> H[Monitor closely]
    B -- Stable --> I[Assess GOLD Group A, B, E]
    I --> J[Group A: SABA PRN]
    I --> K[Group B: LABA or LAMA]
    I --> L[Group E: LABA + LAMA ± ICS]
    `
  },
  {
    id: 'prot-dm-management',
    title: 'Diabetes Mellitus Management Protocol',
    category: 'Endocrinology',
    tags: ['Diabetes', 'T2DM', 'HbA1c', 'Metformin'],
    description: 'Routine management and medication escalation for Type 2 Diabetes.',
    mermaidChart: `
graph TD
    A[Newly Diagnosed T2DM] --> B[Lifestyle modifications & Education]
    B --> C[Start Metformin if no contraindications]
    C --> D[Recheck HbA1c in 3 months]
    D --> E{HbA1c on target?}
    E -- Yes --> F[Continue current regimen]
    E -- No --> G[Add 2nd agent: SGLT2i, GLP1-RA, or DPP4i]
    G --> H[Recheck in 3 months]
    H --> I{HbA1c on target?}
    I -- Yes --> F
    I -- No --> J[Add 3rd agent or start Basal Insulin]
    `
  },
  {
    id: 'prot-headache',
    title: 'Headache Evaluation Protocol',
    category: 'Neurology',
    tags: ['Headache', 'Migraine', 'Red Flags', 'SNOOP', 'TTH', 'Cluster'],
    description: 'Interactive algorithm for assessing primary vs secondary headache (SNOOP criteria) and management.',
    startNodeId: 'start',
    nodes: {
      'start': {
        id: 'start',
        title: 'Headache Presentation',
        type: 'decision',
        content: '**Patient presents with Headache.**\n\nIs there a recent history of Head or neck trauma?',
        options: [
          { label: 'Yes', nextId: 'tbi_protocol' },
          { label: 'No', nextId: 'red_flags_check' }
        ]
      },
      'tbi_protocol': {
        id: 'tbi_protocol',
        title: 'Traumatic Brain Injury',
        type: 'endpoint',
        content: '**Action:** Follow Traumatic Brain Injury Protocol.'
      },
      'red_flags_check': {
        id: 'red_flags_check',
        title: 'Red Flags Assessment',
        type: 'decision',
        content: 'Evaluate for the presence of **Red Flags**:\n\n**History:** Neoplasm history, Age \u226550 years, Pregnant or postpartum state, Immunosuppressed state (eg, HIV, glucocorticoid therapy), Anticoagulant therapy, Hypercoagulable condition.\n\n**Symptoms:** Sudden onset ("thunderclap"), New or change in usual pattern or progressive, Associated eye pain/vision change, Positional headache, Exertional headache (cough, exercise, intercourse), Associated neck pain.\n\n**Signs:** Altered/depressed mental status, New neurologic deficits, Papilledema, Fever, rash, meningismus, other systemic signs.\n\nAre any Red Flags present?',
        options: [
          { label: 'Yes (Secondary Headache)', nextId: 'sec_fever' },
          { label: 'No (Primary Headache)', nextId: 'prim_duration' }
        ]
      },
      'sec_fever': {
        id: 'sec_fever',
        title: 'Secondary Headache: Fever',
        type: 'decision',
        content: 'Does the patient have a fever?',
        options: [
          { label: 'Yes', nextId: 'sec_inf' },
          { label: 'No', nextId: 'sec_thunderclap' }
        ]
      },
      'sec_inf': {
        id: 'sec_inf',
        title: 'Secondary: Evaluate Infection',
        type: 'decision',
        content: 'Does the patient have either of the following?\n- Meningismus\n- Altered mental status',
        options: [
          { label: 'Yes', nextId: 'sec_meningitis' },
          { label: 'No', nextId: 'sec_other_inf' }
        ]
      },
      'sec_meningitis': {
        id: 'sec_meningitis',
        title: 'Meningitis Evaluation',
        type: 'endpoint',
        content: '**Action:** Obtain NCCT Head and Evaluate for meningitis.'
      },
      'sec_other_inf': {
        id: 'sec_other_inf',
        title: 'Other Infective Cause',
        type: 'endpoint',
        content: '**Action:** Evaluate for other infective cause.'
      },
      'sec_thunderclap': {
        id: 'sec_thunderclap',
        title: 'Secondary: Thunderclap Headache',
        type: 'decision',
        content: 'Is the pain consistent with a thunderclap headache (sudden and severe)?',
        options: [
          { label: 'Yes', nextId: 'sec_sah' },
          { label: 'No', nextId: 'sec_co' }
        ]
      },
      'sec_sah': {
        id: 'sec_sah',
        title: 'Subarachnoid Haemorrhage Evaluation',
        type: 'endpoint',
        content: '**Action:** Obtain NCCT head and evaluate for Subarachnoid Haemorrhage and other causes of Thunderclap headache.'
      },
      'sec_co': {
        id: 'sec_co',
        title: 'Secondary: CO Exposure',
        type: 'decision',
        content: 'Is there clinical suspicion of Carbon monoxide exposure? *(Drowsiness, Occurrence in winter; Smoke/fume inhalation from engines or fuel based heaters; multiple household members sick at once)*',
        options: [
          { label: 'Yes', nextId: 'sec_co_tx' },
          { label: 'No', nextId: 'sec_occular' }
        ]
      },
      'sec_co_tx': {
        id: 'sec_co_tx',
        title: 'CO Exposure Treatment',
        type: 'endpoint',
        content: '**Action:** Start 100% oxygen via Non Rebreather mask and further management and evaluation.'
      },
      'sec_occular': {
        id: 'sec_occular',
        title: 'Secondary: Ocular Symptoms',
        type: 'decision',
        content: 'Does the patient have ocular symptoms? *(Vision loss; Eye Pain; Halos around light; Blurred vision; Temporal artery tenderness)*',
        options: [
          { label: 'Yes', nextId: 'sec_occular_eval' },
          { label: 'No', nextId: 'sec_neuro' }
        ]
      },
      'sec_occular_eval': {
        id: 'sec_occular_eval',
        title: 'Ocular Condition Evaluation',
        type: 'endpoint',
        content: '**Action:** Evaluate for ocular condition:\n- Acute angle-closure glaucoma\n- Idiopathic intracranial hypertension\n- Giant cell arteritis'
      },
      'sec_neuro': {
        id: 'sec_neuro',
        title: 'Secondary: Neurological Deficit',
        type: 'decision',
        content: 'Does the patient have a new, unexplained neurological deficit? *(Hemiparesis; Speech Impairment; Horner syndrome; Gait impairment)*',
        options: [
          { label: 'Yes', nextId: 'sec_neuro_eval' },
          { label: 'No', nextId: 'sec_spinal' }
        ]
      },
      'sec_neuro_eval': {
        id: 'sec_neuro_eval',
        title: 'Cerebrovascular Evaluation',
        type: 'endpoint',
        content: '**Action:** Obtain NCCT head and evaluate for cerebral and cerebrovascular conditions.'
      },
      'sec_spinal': {
        id: 'sec_spinal',
        title: 'Secondary: Spinal Source',
        type: 'decision',
        content: 'Does the patient have any features suggestive of a spinal source? *(Positional headache resolving with positioning, Prominent neck pain, Associated limb weakness/numbness, Associated bowel and bladder dysfunction)*',
        options: [
          { label: 'Yes', nextId: 'sec_spinal_eval' },
          { label: 'No', nextId: 'sec_preg' }
        ]
      },
      'sec_spinal_eval': {
        id: 'sec_spinal_eval',
        title: 'Spinal Evaluation',
        type: 'endpoint',
        content: '**Action:** Perform Spinal Imaging followed by Orthopaedics / Neurology consultation.'
      },
      'sec_preg': {
        id: 'sec_preg',
        title: 'Secondary: Pregnancy',
        type: 'decision',
        content: 'Is the patient pregnant (>20 weeks), postpartum, or UPT positive?',
        options: [
          { label: 'Yes', nextId: 'sec_preeclampsia' },
          { label: 'No', nextId: 'sec_other_red' }
        ]
      },
      'sec_preeclampsia': {
        id: 'sec_preeclampsia',
        title: 'Preeclampsia Evaluation',
        type: 'endpoint',
        content: '**Action:** Evaluate for Preeclampsia.'
      },
      'sec_other_red': {
        id: 'sec_other_red',
        title: 'Secondary: Other Red Flags',
        type: 'decision',
        content: 'Does the patient have other clinical features suggestive of Red flags?',
        options: [
          { label: 'Yes', nextId: 'sec_neuro_consult' },
          { label: 'No', nextId: 'other_headaches' }
        ]
      },
      'sec_neuro_consult': {
        id: 'sec_neuro_consult',
        title: 'General Consultation',
        type: 'endpoint',
        content: '**Action:** Neuro Medicine / Surgery Consultation.'
      },
      'other_headaches': {
        id: 'other_headaches',
        title: 'Check Other Headaches',
        type: 'endpoint',
        content: 'Evaluate for other specific headaches:\n\n**Trigeminal Neuralgia:** Recurrent, severe, electric shock-like unilateral facial pain lasting seconds to 2 minutes in trigeminal nerve distribution, triggered by harmless stimuli.\n\n**Occipital Neuralgia:** Pain usually occipital, radiating to parietal area, vertex, or behind eye, worse in morning and linked to trauma, with associated neck stiffness/tenderness (C1\u2013C3).\n\n**Frontal Sinusitis:** Frontal/retro-orbital headache with diurnal variation (peaks midday), sinonasal symptoms, frontal sinus tenderness/pain on percussion.\n\n**Medication Overuse Headache:** Headache on \u226515 days/month in patient with preexisting primary headache, from regular overuse of acute meds for >3 months, resolving after stopping.'
      },
      'prim_duration': {
        id: 'prim_duration',
        title: 'Primary Headache Duration',
        type: 'decision',
        content: 'Ask for duration, frequency, and characteristics of the headache.\n\nWhat is the frequency of the headaches?',
        options: [
          { label: '< 15 days/month (Episodic)', nextId: 'prim_episodic' },
          { label: '\u2265 15 days/month lasting for > 3 months (Chronic)', nextId: 'prim_chronic' }
        ]
      },
      'prim_episodic': {
        id: 'prim_episodic',
        title: 'Episodic Headache Type',
        type: 'decision',
        content: 'Based on clinical features, select the type of episodic headache:',
        options: [
          { label: 'Migraine', nextId: 'migraine_tx' },
          { label: 'Tension Type', nextId: 'tension_tx' },
          { label: 'Cluster Headache', nextId: 'cluster_epi' }
        ]
      },
      'prim_chronic': {
        id: 'prim_chronic',
        title: 'Chronic Headache Type',
        type: 'decision',
        content: 'Based on clinical features, select the type of chronic headache:',
        options: [
          { label: 'Migraine (\u226515 days/mo, >3 mo, \u22658 days/mo migraine features)', nextId: 'migraine_tx' },
          { label: 'Tension Type (hours to days or unremitting)', nextId: 'tension_tx' },
          { label: 'Cluster Headache', nextId: 'cluster_chr' }
        ]
      },
      'cluster_epi': {
        id: 'cluster_epi',
        title: 'Episodic Cluster Assessment',
        type: 'decision',
        content: 'Are there at least two cluster periods present lasting 7 days to 1 year with a pain-free interval of \u2265 3 months?',
        options: [
          { label: 'Yes (Episodic Cluster)', nextId: 'cluster_acute' },
          { label: 'No (No remission or lasting <3 months)', nextId: 'cluster_chr' }
        ]
      },
      'cluster_chr': {
        id: 'cluster_chr',
        title: 'Chronic Cluster Headache',
        type: 'decision',
        content: 'Diagnosis: **Chronic Cluster Headache** (No remission or remission lasting < 3 months)',
        options: [
          { label: 'Manage Acute Attack', nextId: 'cluster_acute' }
        ]
      },
      'cluster_acute': {
        id: 'cluster_acute',
        title: 'Cluster Headache: Acute Attack',
        type: 'endpoint',
        content: '**Action:** Refer to ER and start Oxygen at \u226512 L/min via non-rebreather mask.'
      },
      'migraine_tx': {
        id: 'migraine_tx',
        title: 'Migraine Diagnosis & Acute Management',
        type: 'action',
        content: '### Diagnosis Features\n**Without Aura:** \u22655 attacks lasting 4\u201372 hrs with \u22652 of (unilateral, pulsating, moderate/severe, worsens with routine activity) PLUS \u22651 of (nausea/vomiting or photophobia/phonophobia).\n**With Aura:** \u22652 attacks with fully reversible aura (visual, sensory, speech, motor, brainstem) spreading over \u22655 mins, lasts 5-60 min, unilateral, positive symptoms, followed by headache in 60 mins.\n\n### Acute Treatment\n- **Mild:** Naproxen 500mg PO 12-hrly OR PCM 1g PO 8-hrly to 6-hrly\n- **Moderate:** Sumatriptan 50\u2013100 mg PO single dose (caution in structural heart disease/elderly); repeat after \u22652 hrs if needed (Max 200mg/day) along with Naproxen 500 mg.\n- **Severe:** Inj Metoclopramide 10mg + Inj ketorolac 30mg in 100 ml NS IV stat.',
        options: [
          { label: 'Preventive & Non-Pharm Management', nextId: 'migraine_prev' }
        ]
      },
      'migraine_prev': {
        id: 'migraine_prev',
        title: 'Migraine Prevention',
        type: 'endpoint',
        content: '### Indications for Preventive Therapy\nFrequent or long-lasting attacks, severe disability, contraindication/failure/adverse effects of acute therapy, risk of med overuse, menstrual migraine.\n\n### Preventive Medications\n1. **Propranolol:** 40\u201380 mg/day in 1-4 divided doses (Max: 240mg/day). *(Avoid in asthma, depression, bradycardia)*.\n2. **Amitriptyline:** 10\u201325 mg PO HS; increase in 10-25mg increments at >1 week intervals (Max: 150 mg/day). *(Suits depression, anxiety, insomnia, neuropathic pain)*.\n3. **Flunarizine:** 5\u201310 mg PO OD (Consider 2 med-free days/week). *(Suits HTN/smokers, caution in elderly >65 yrs)*.\n\n**Reassess after 3 months.** If not controlled, refer to Neuromedicine/Psychiatry.\n\n### Non-Pharmacological Management\n1. Educate on choices, expectations, side effects, and adherence.\n2. Maintain headache diary (frequency, severity, triggers, meds).\n3. Good sleep hygiene, regular meals, consistent exercise.\n4. Psychologist consult for behavioural therapies.'
      },
      'tension_tx': {
        id: 'tension_tx',
        title: 'Tension Type Diagnosis & Acute Management',
        type: 'action',
        content: '### Diagnosis Features\n\u226510 episodes lasting 30 min to 7 days, with \u22652 of (Bilateral, pressing/tightening quality, Mild-to-moderate intensity, not worsened by routine activity) AND no nausea/vomiting, AND at most one of photophobia/phonophobia.\n\n### Acute Treatment\n1. **Mild/Mod:** Tab Naproxen 500 mg PO stat OR Tab PCM 1 g PO stat\n2. **In ER / Unresponsive:** Inj Metoclopramide 10 mg + Inj ketorolac 30 mg in 100 ml NS IV stat.',
        options: [
          { label: 'Preventive Management', nextId: 'tension_prev' }
        ]
      },
      'tension_prev': {
        id: 'tension_prev',
        title: 'Tension Type Prevention',
        type: 'action',
        content: '### Indications for Preventive Therapy\n1. Frequent (> 2 headaches/week)\n2. Poorly responsive to acute therapies\n3. Severe or disabling symptoms\n\n### Preventive Measures\n1. **Non-Pharmacological:** Identify/minimize triggers, stress management, sleep hygiene, Cognitive Behavioral & Relaxation Therapy.\n2. **Medication:** Tab Amitriptyline 10 mg HS; increase by 10-12.5 mg increments every 2 weeks as needed/tolerated (Max 125 mg/day).',
        options: [
          { label: 'Assess Response', nextId: 'tension_response' }
        ]
      },
      'tension_response': {
        id: 'tension_response',
        title: 'Assess Response to Prevention',
        type: 'decision',
        content: 'Is there an adequate response to preventive therapy?',
        options: [
          { label: 'Yes', nextId: 'tension_good' },
          { label: 'No', nextId: 'tension_bad' }
        ]
      },
      'tension_good': {
        id: 'tension_good',
        title: 'Continue Therapy',
        type: 'endpoint',
        content: '**Action:** Continue for 3 to 6 months, then reassess.'
      },
      'tension_bad': {
        id: 'tension_bad',
        title: 'Referral or Alternate Diagnosis',
        type: 'decision',
        content: '**Action:** Refer to Neuromedicine/Psychiatry.\n\nIs an alternate headache condition suspected?',
        options: [
          { label: 'Yes', nextId: 'tension_alt_yes' },
          { label: 'No', nextId: 'tension_alt_no' }
        ]
      },
      'tension_alt_no': {
        id: 'tension_alt_no',
        title: 'Re-evaluate',
        type: 'endpoint',
        content: '**Action:** Reevaluate for alternate diagnosis / reassess triggers.'
      },
      'tension_alt_yes': {
        id: 'tension_alt_yes',
        title: 'Evaluate Alternative',
        type: 'endpoint',
        content: '**Action:** Evaluate and Treat alternative Diagnosis.'
      }
    }
  },
  {
    id: 'prot-anc',
    title: 'Antenatal Care (ANC) Protocol',
    category: 'Obstetrics',
    tags: ['ANC', 'Pregnancy', 'Screening', 'Obstetrics'],
    description: 'Standard antenatal visit schedule and screening protocol.',
    mermaidChart: `
graph TD
    A[First ANC Visit &lt; 12 weeks] --> B[Confirm pregnancy, EDD, USG]
    B --> C[Bloods: CBC, Blood group, HIV, Syphilis, Hep B]
    C --> D[Start Folic Acid]
    D --> E[Visit 2: 20-24 weeks]
    E --> F[Anomaly Scan, BP check, Urine dip]
    F --> G[Start Iron & Calcium]
    G --> H[Visit 3: 28-32 weeks]
    H --> I[OGTT, repeat Hb, Rh anti-D if negative]
    I --> J[Visit 4: 36 weeks]
    J --> K[Presentation, Birth plan, BP/Urine]
    `
  },
  {
    id: 'prot-immunization',
    title: 'Immunization Protocol',
    category: 'Pediatrics',
    tags: ['Vaccines', 'Immunization', 'EPI', 'Pediatrics'],
    description: 'Standard pediatric national immunization schedule.',
    mermaidChart: `
graph TD
    A[Birth] --> B[BCG, OPV-0, HepB]
    B --> C[6 Weeks]
    C --> D[Penta-1, OPV-1, PCV-1, Rota-1]
    D --> E[10 Weeks]
    E --> F[Penta-2, OPV-2, PCV-2, Rota-2]
    F --> G[14 Weeks]
    G --> H[Penta-3, OPV-3, PCV-3, IPV, Rota-3]
    H --> I[9 Months]
    I --> J[Measles-Rubella 1, JE-1]
    `
  },
  {
    id: 'prot-tbi',
    title: 'Management of Traumatic Brain Injury',
    category: 'Emergency & Critical Care',
    tags: ['TBI', 'Head Injury', 'GCS', 'Neurosurgery'],
    description: 'Initial stabilization and indications for CT scan in head trauma.',
    mermaidChart: `
graph TD
    A[Patient with Head Trauma] --> B[ABCDE Assessment / C-Spine]
    B --> C[Calculate GCS]
    C --> D{GCS Score}
    D -- Mild 13-15 --> E{High Risk Factors?<br/>Vomiting &gt;2, Age&gt;65, Amnesia, Anticoagulants}
    E -- Yes --> F[CT Head]
    E -- No --> G[Observe, Discharge with advice]
    D -- Mod 9-12 --> F
    D -- Severe &lt; 8 --> H[Intubate, Neuroprotective vent]
    H --> F
    F --> I{Surgical lesion?}
    I -- Yes --> J[Urgent Neurosurgery Consult]
    I -- No --> K[Admit to ICU/HDU, Elevate head 30 deg, keep Na 140-150]
    `
  },
  {
    id: 'prot-snake-bite',
    title: 'Management of Snake Bite',
    category: 'Emergency & Critical Care',
    tags: ['Snake Bite', 'Toxins', 'ASV', 'Envenomation', 'PAHS'],
    description: 'Protocol for Management of Snake Bite (Patan Academy of Health Sciences).',
    startNodeId: 'triage',
    nodes: {
      'triage': {
        id: 'triage',
        title: 'Triage & Assessment',
        type: 'decision',
        content: '**Consider appropriate triaging.** Triage category Red should be treated in resuscitation area.\n\n### Assessment\n- **Airway:** abnormal sound\n- **Breathing:** Work of breathing\n- **Circulation:** BP, Pulse\n- **Disability:** Ptosis, Opthalmoplegia, Pupilary dilatation, Limitation to open mouth, tongue extrusion, inability to swallow, broken neck sign, skeletal muscle weakness, loss of gag reflex, paradoxical breathing\n- **Exposure:** Swelling \u2013 extent, peripheral pulse\n\nBased on assessment, which syndrome fits best?',
        options: [
          { label: 'Sndr 1 (Local swelling + paralysis, NO bleeding)', nextId: 'syndrome1' },
          { label: 'Sndr 2/3 (Paralysis, dark urine, muscle pain, NO bleeding)', nextId: 'syndrome2_3' },
          { label: 'Sndr 4 (Marked swelling, incoagulable blood, neurotoxicity)', nextId: 'syndrome4' },
          { label: 'Sndr 5 (Marked swelling/blisters, NO bleeding)', nextId: 'syndrome5' }
        ]
      },
      'syndrome1': {
        id: 'syndrome1',
        title: 'Syndrome 1: Cobra or King Cobra',
        type: 'action',
        content: '**Presentation:** Local swelling or other features of local envenoming with paralysis with NO features of bleeding or clotting disturbances.\n\n*Venom causes non-depolarizing, competitive post synaptic block by binding to acetylcholine receptors at the motor endplate.*\n\n### Treatment\n- **ASV*** (See ASV Administration)\n- May need ventilator support\n- **Needs admission**\n\n\\* *Neostigmine + Atropine if ASV is not available.*',
        options: [
          { label: 'View ASV Administration details', nextId: 'asv_admin' }
        ]
      },
      'syndrome2_3': {
        id: 'syndrome2_3',
        title: 'Syndrome 2 & 3: Krait',
        type: 'action',
        content: '**Syndrome 2:** Nocturnal bite and paralysis with no or minimal local signs of envenoming.\n**Syndrome 3:** Neurotoxicity with dark brown urine, severe muscle pain, without local swelling, bleeding or clotting disturbances and with or without renal failure.\n\n*Note: Krait bite can present as acute abdomen.*\n*Venom produces neuromuscular paralysis by presynaptic neurotoxins, damaging nerve endings and axon, regeneration takes 8-12 days.*\n\n### Treatment\n- **ASV** (See ASV Administration)\n- May need ventilator support\n- **Needs admission**',
        options: [
          { label: 'View ASV Administration details', nextId: 'asv_admin' }
        ]
      },
      'syndrome4': {
        id: 'syndrome4',
        title: 'Syndrome 4: Russell\'s Viper',
        type: 'action',
        content: '**Presentation:** Marked swelling (sometimes blister and necrosis) with incoagulable blood, neurotoxicity, AKI.\n*(Found in Low Land ONLY)*\n\n*Venom-induced consumption coagulopathy (VICC) is due to activation of clotting pathways and consumption of clotting factors.*\n\n### Treatment\n- **ASV** (See ASV Administration)\n- **Delayed FFP** (After ASV only)\n- May need ventilator support\n- May need fasciotomy#  (# *Fasciotomy only after bleeding disorder is corrected*)\n- **Needs admission**',
        options: [
          { label: 'View ASV Administration details', nextId: 'asv_admin' }
        ]
      },
      'syndrome5': {
        id: 'syndrome5',
        title: 'Syndrome 5: Pit Vipers',
        type: 'endpoint',
        content: '**Presentation:** Marked swelling on bitten limb often with blisters (sometimes with severe pain) without bleeding or clotting disturbances.\n*However, bleeding disorder have been reported in Nepal.*\n\n### Treatment\n- **NO ASV^**\n- **No FFP**\n- Blood transfusion ONLY as rescue therapy\n- Can be discharged\n- Swelling needs to be monitored\n\n^ *ASV available in Nepal has antivenom against Russel viper, Krait and Cobra.*'
      },
      'asv_admin': {
        id: 'asv_admin',
        title: 'ASV Administration Protocol',
        type: 'endpoint',
        content: '- **Prophylactic adrenaline** 0.25 mg IM stat\n- **First Dose:** 10 vial (100ml) ASV is diluted in 5-10ml/kg body weight (approximately 250 to 500ml) of D5 or NS and administered as infusion @ 2ml/minute.\n- **Additional Dose:** If not improving repeat second dose 5 vial (50 ml) diluted in 5-10ml/kg body weight (approximately 250 to 500ml) of D5 or NS and administered as infusion @ 2ml/minute.\n- **For CHILD:** Reconstituted antivenom is diluted in 3-5ml/kg body weight of D5 or NS and administered as infusion @ 2ml/min.\n- **Tetanus:** TT IM injection should be given. If patient presents with coagulopathy, it should be postponed until after resolution of coagulopathy.'
      }
    }
  }
];
