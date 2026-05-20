export type AwareClass = 'Access' | 'Watch' | 'Reserve' | 'Unknown';

export interface Treatment {
  type: 'preferred' | 'alternative';
  drug: string;
  dose: string;
  frequency: string;
  duration: string;
  condition?: string;
  aware?: AwareClass;
}

export interface Infection {
  id: string;
  section: 'adult' | 'pediatric' | 'neonatal' | 'appendix';
  categoryId: string;
  name: string;
  subType?: string;
  organisms: string[];
  treatments: Treatment[];
  comments?: string;
}

export interface Category {
  id: string;
  name: string;
}
