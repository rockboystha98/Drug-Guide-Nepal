import { Protocol } from '../types/protocols';

export const protocolList4: Protocol[] = [
  {
    id: 'prot-status-epilepticus',
    title: 'Status Epilepticus Pathway',
    category: 'Neurology',
    tags: ['Seizure', 'Epilepsy', 'Status Epilepticus', 'Lorazepam', 'Phenytoin'],
    description: 'Time-sensitive management of prolonged seizures.',
    mermaidChart: `
graph TD
    A[Seizure &gt; 5 mins] --> B[0-5 mins: ABCs, O2, IV access, Blood glucose]
    B --> C[5-20 mins: Initial Therapy]
    C --> D[IV Lorazepam 4mg OR IM Midazolam 10mg]
    D --> E{Seizure Stopped?}
    E -- Yes --> F[Investigate cause, maintenance therapy]
    E -- No --> G[20-40 mins: Second Line]
    G --> H[IV Fosphenytoin, Valproate, or Levetiracetam]
    H --> I{Seizure Stopped?}
    I -- Yes --> F
    I -- No --> J[40+ mins: Refractory Status]
    J --> K[Intubate, start Propofol, Midazolam, or Pentobarbital infusion]
    K --> L[Continuous EEG monitoring]
    `
  },
  {
    id: 'prot-cardiac-arrest',
    title: 'Cardiac Arrest Algorithm (ACLS)',
    category: 'Cardiology',
    tags: ['ACLS', 'Cardiac Arrest', 'CPR', 'VF', 'Asystole', 'Epinephrine'],
    description: 'Management of pulseless cardiac arrest (Shockable vs Non-shockable rhythms).',
    mermaidChart: `
graph TD
    A[Start CPR, Give Oxygen, Attach Monitor] --> B{Rhythm shockable?}
    B -- Yes: VF/pVT --> C[Shock]
    C --> D[CPR 2 mins, IV/IO access]
    D --> E{Rhythm shockable?}
    E -- Yes --> F[Shock]
    F --> G[CPR 2 mins, Epinephrine 1mg every 3-5 mins]
    G --> H{Rhythm shockable?}
    H -- Yes --> I[Shock]
    I --> J[CPR 2 mins, Amiodarone 300mg or Lidocaine]
    B -- No: Asystole/PEA --> K[Epinephrine ASAP, CPR 2 mins]
    K --> L{Rhythm shockable?}
    L -- No --> M[CPR 2 mins, treat reversible causes 5Hs & 5Ts]
    L -- Yes --> C
    `
  },
  {
    id: 'prot-asthma',
    title: 'Acute Asthma Exacerbation Protocol',
    category: 'Pulmonology',
    tags: ['Asthma', 'Bronchospasm', 'Wheeze', 'Albuterol'],
    description: 'Severity assessment and treatment algorithm for acute asthma.',
    mermaidChart: `
graph TD
    A[Assess Asthma Severity] --> B{Signs of Life-Threatening?<br/>Silent chest, cyanosis, exhaustion}
    B -- Yes --> C[Consult ICU, Prepare for Intubation]
    C --> D[Continuous Albuterol, IV MgSO4, IV Steroids]
    B -- No --> E{Moderate vs Severe}
    E -- Severe --> F[SpO2 &lt; 92%, PEF 33-50%]
    F --> G[Oxygen to 94-98%, SABA+Ipratropium neb, Systemic steroids PO/IV]
    E -- Moderate --> H[SpO2 &gt; 92%, PEF &gt; 50%]
    H --> I[SABA neb, PO Steroids]
    G --> J[Reassess in 1 hour]
    I --> J
    J --> K{Improving?}
    K -- Yes --> L[Discharge plan with oral steroids and inhaler tweak]
    K -- No --> M[Admit to ward / HDU, consider IV MgSO4]
    `
  },
  {
    id: 'prot-angioedema',
    title: 'Management of Angioedema',
    category: 'Allergy & Immunology',
    tags: ['Angioedema', 'Anaphylaxis', 'Airway', 'Urticaria', 'Ishoo'],
    description: 'Interactive management of Angioedema (Patan Academy of Health Sciences).',
    startNodeId: 'start',
    nodes: {
      'start': {
        id: 'start',
        title: 'Initial Assessment',
        type: 'decision',
        content: 'Patient presents with angioedema.\n\nAre there any signs of airway obstruction?',
        options: [
          { label: 'Yes', nextId: 'airway' },
          { label: 'No', nextId: 'anaphylaxis' }
        ]
      },
      'airway': {
        id: 'airway',
        title: 'Airway Management',
        type: 'action',
        content: '**Early intubation:**\nIf available use fiberoptic, otherwise use video laryngoscope.\n\nUse double setup with preparation for cricothyrotomy.',
        options: [
          { label: 'Continue to Anaphylaxis Check', nextId: 'anaphylaxis' }
        ]
      },
      'anaphylaxis': {
        id: 'anaphylaxis',
        title: 'Anaphylaxis Assessment',
        type: 'decision',
        content: 'Any sign of anaphylaxis?',
        options: [
          { label: 'Yes', nextId: 'treat_anaphylaxis' },
          { label: 'No', nextId: 'urticaria' }
        ]
      },
      'treat_anaphylaxis': {
        id: 'treat_anaphylaxis',
        title: 'Treat Anaphylaxis',
        type: 'action',
        content: '**Treatment:**\nInj Adrenaline 1:1000 0.3-0.5 ml IM stat.',
        options: [
          { label: 'Next: Skin Assessment', nextId: 'urticaria' }
        ]
      },
      'urticaria': {
        id: 'urticaria',
        title: 'Skin/Urticaria Assessment',
        type: 'decision',
        content: 'Are there urticaria and skin symptoms present?\n\n---\n\n### Types of Angioedema\n\n**Histaminergic (with urticaria)**\n- *Onset:* Minutes. *Duration:* 12-24 hours.\n- *Common features:* Hypotension, Urticaria, Bronchospasm/wheezing.\n- *Response:* Therapy with epinephrine, antihistamines, steroids is effective.\n\n**Non-histaminergic / Bradykinin-mediated (without urticaria)**\n- *Includes:* ACEi-mediated, hereditary (C1-INH deficiency).\n- *Onset:* Hours. *Duration:* 48-72 hours.\n- *Atypical features:* Urticaria, Hypotension, Bronchospasm are rare.\n- *Response:* Therapy with epi/antihistamines/steroids is NOT effective.',
        options: [
          { label: 'Yes', nextId: 'treat_urticaria' },
          { label: 'No', nextId: 'ishoo' }
        ]
      },
      'treat_urticaria': {
        id: 'treat_urticaria',
        title: 'Treat Skin Symptoms',
        type: 'action',
        content: 'Administer:\n- H1/H2 antagonist\n- Steroid',
        options: [
          { label: 'Next: Ishoo Stage Assessment', nextId: 'ishoo' }
        ]
      },
      'ishoo': {
        id: 'ishoo',
        title: 'Ishoo Classification Stage',
        type: 'decision',
        content: 'Assess the airway involvement based on the Ishoo Classification.\n\nIs the Ishoo stage \u2265 3?\n\n---\n\n### Ishoo Classification\n- **Stage I:** Facial rash, facial oedema, lip oedema\n- **Stage II:** Soft palate oedema\n- **Stage III:** Tongue oedema\n- **Stage IV:** Laryngeal oedema',
        options: [
          { label: 'Yes (\u2265 3 - Tongue/Laryngeal oedema)', nextId: 'admit' },
          { label: 'No (< 3 - Facial/Lip/Soft palate oedema)', nextId: 'discharge' }
        ]
      },
      'admit': {
        id: 'admit',
        title: 'Admit Patient',
        type: 'endpoint',
        content: '**Admit** for close observation and airway monitoring.\n\n*Consider FFP (Fresh Frozen Plasma) if not improving* (especially in non-histaminergic/bradykinin-mediated where C1-INH concentrates or bradykinin antagonists are unavailable).'
      },
      'discharge': {
        id: 'discharge',
        title: 'Discharge Patient',
        type: 'endpoint',
        content: '**Discharge**\n\nPatient is safe for discharge. Ensure standard outpatient follow-up and precautions.'
      }
    }
  }
];
