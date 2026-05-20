export interface RenalRule {
  maxCrCl: number;
  minCrCl?: number;
  dose?: string;
  freq?: string;
  warning?: string;
}

export interface DrugRenalConfig {
  matchNames: string[];
  rules: RenalRule[];
}

export const renalAdjustments: DrugRenalConfig[] = [
  {
    matchNames: ["Amoxicillin-clavulanate", "Amoxicillin"],
    rules: [
      { maxCrCl: 30, minCrCl: 10, dose: "250-500 mg", freq: "PO q12h", warning: "Avoid 875mg formulation for Amox-Clav if applicable." },
      { maxCrCl: 9, minCrCl: 0, dose: "250-500 mg", freq: "PO q24h" }
    ]
  },
  {
    matchNames: ["Ampicillin"],
    rules: [
      { maxCrCl: 50, minCrCl: 10, freq: "q6h - q12h" },
      { maxCrCl: 9, minCrCl: 0, freq: "q12h - q24h" }
    ]
  },
  {
    matchNames: ["Cefepime"],
    rules: [
      { maxCrCl: 60, minCrCl: 30, freq: "q24h" },
      { maxCrCl: 29, minCrCl: 11, dose: "Decrease by 50%", freq: "q24h" },
      { maxCrCl: 10, minCrCl: 0, dose: "Decrease by 75%", freq: "q24h" }
    ]
  },
  {
    matchNames: ["Gentamicin", "Amikacin", "Vancomycin"],
    rules: [
      { maxCrCl: 50, minCrCl: 0, freq: "Extend to q48h-q72h", warning: "Requires strict Therapeutic Drug Monitoring (TDM) and trough level targeting." }
    ]
  },
  {
    matchNames: ["Meropenem", "Meronem"],
    rules: [
      { maxCrCl: 50, minCrCl: 26, freq: "q12h" },
      { maxCrCl: 25, minCrCl: 10, dose: "Decrease by 50%", freq: "q12h" },
      { maxCrCl: 9, minCrCl: 0, dose: "Decrease by 50%", freq: "q24h" }
    ]
  },
  {
    matchNames: ["Piperacillin-tazobactam"],
    rules: [
      { maxCrCl: 40, minCrCl: 20, dose: "2.25g q6h OR 3.375g q8h" },
      { maxCrCl: 19, minCrCl: 0, dose: "2.25g", freq: "q8h" }
    ]
  },
  {
    matchNames: ["Cefuroxime"],
    rules: [
      { maxCrCl: 20, minCrCl: 10, freq: "q12h" },
      { maxCrCl: 9, minCrCl: 0, freq: "q24h" }
    ]
  },
  {
    matchNames: ["Ciprofloxacin"],
    rules: [
      { maxCrCl: 50, minCrCl: 30, dose: "250-500 mg", freq: "q12h" },
      { maxCrCl: 29, minCrCl: 0, dose: "250-500 mg", freq: "q18h - q24h" }
    ]
  },
  {
    matchNames: ["Levofloxacin"],
    rules: [
      { maxCrCl: 50, minCrCl: 20, dose: "Standard 1st dose, then 50%", freq: "q24h" },
      { maxCrCl: 19, minCrCl: 0, dose: "Standard 1st dose, then 50%", freq: "q48h" }
    ]
  },
  {
    matchNames: ["Cotrimoxazole", "Trimethoprim-sulfamethoxazole", "TMP-SMX"],
    rules: [
      { maxCrCl: 30, minCrCl: 15, dose: "Decrease by 50%" },
      { maxCrCl: 14, minCrCl: 0, dose: "USE NOT RECOMMENDED", warning: "Drug strictly not recommended with CrCl < 15." }
    ]
  },
  {
    matchNames: ["Colistin", "Colistimethate"],
    rules: [
      { maxCrCl: 50, minCrCl: 30, dose: "2.5-3.8 mg/kg/day divided in 2 doses" },
      { maxCrCl: 29, minCrCl: 10, dose: "2.5 mg/kg/day once daily or divided in 2 doses" },
      { maxCrCl: 9, minCrCl: 0, dose: "1.5 mg/kg every 36 hours" }
    ]
  },
  {
    matchNames: ["Teicoplanin"],
    rules: [
      { maxCrCl: 60, minCrCl: 40, dose: "Decrease maintenance by 50%", freq: "q48h (or 1/2 dose daily)", warning: "Do not adjust for first 3 loading days." },
      { maxCrCl: 39, minCrCl: 0, dose: "Decrease maintenance by 66%", freq: "q72h (or 1/3 dose daily)", warning: "Do not adjust for first 3 loading days." }
    ]
  }
];

export const noRenalAdjustmentDrugs = [
  "Ceftriaxone", "Doxycycline", "Metronidazole", "Azithromycin", "Clindamycin", "Tigecycline", "Rifampicin", "Isoniazid", "Pyrazinamide"
];
