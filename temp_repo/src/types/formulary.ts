export type PatientType = 'adult' | 'pediatric';

export interface DrugPharmacy {
  strengths: string[];
  dosageForms: string[];
  priceNPR?: string;
  brandNames: string[]; // From Bharatpur Formulary
  handlingNote?: string; // e.g. cytotoxic handling
}

export interface DrugSafety {
  adr: string[];
  contraindications: string[];
  pregnancyLactation: string;
  renalAdjustment?: string;
  hepaticAdjustment?: string;
}

export interface DrugDosing {
  adult: string; // mg, frequency, route
  pediatric: string; // mg/kg/dose or mg/kg/day, frequency, route
  neonatal?: string;
}

export interface DrugEntry {
  id: string;
  genericName: string;
  therapeuticClass: string;
  categoryId: string; // matches therapeutic portal (e.g., 'gi', 'cardio', 'infections')
  indications: string[]; // for global search
  dosing: DrugDosing;
  safety: DrugSafety;
  pharmacy: DrugPharmacy;
  notes?: string[]; // Specific "Notes" from NNF and local tips
  searchTags?: string[];
  administrationNote?: string;
  route?: string;
  vehicleType?: string;
  handlingNote?: string;
  sepsisPriority?: boolean;
  concentrationAlert?: string;
  renalAdjustment?: string;
  awareCategory?: string;
}

export interface TherapeuticCategory {
  id: string;
  name: string;
  iconName: string; // To dynamically render lucide icons
  description: string;
}
