import { adultRespCardioCns } from './adult_pt1';
import { adultGiUtiSkin } from './adult_pt2';
import { adultBatch3 } from './adult_batch3';
import { adultBatch4 } from './adult_batch4';
import { adultBatch5 } from './adult_batch5';
import { adultBatch6 } from './adult_batch6';
import { pediatricNeonatal } from './pediatric_neonatal';
import { pediatricBatch1 } from './pediatric_pt1';
import { pediatricBatch2 } from './pediatric_pt2';
import { pediatricBatch3 } from './pediatric_pt3';
import { pediatricBatch4 } from './pediatric_pt4';
import { pediatricBatch5 } from './pediatric_pt5';
import { Infection, Category, AwareClass, Treatment } from './types';
import { categories } from './categories';

export const infections: Infection[] = [
  ...adultRespCardioCns,
  ...adultGiUtiSkin,
  ...adultBatch3,
  ...adultBatch4,
  ...adultBatch5,
  ...adultBatch6,
  ...pediatricNeonatal,
  ...pediatricBatch1,
  ...pediatricBatch2,
  ...pediatricBatch3,
  ...pediatricBatch4,
  ...pediatricBatch5
];

export { categories, type Infection, type Category, type AwareClass, type Treatment };

export const mdroGuidelines = `
### Approach to Multidrug Resistant Organisms (MDRO)

Colonization and infection with MDROs are on the rise (e.g., MRSA, VRE, ESBL, CRAB).

**General Approach:**
* **Good hand hygiene** compliance.
* **Contact precautions** for patients harboring epidemiologically relevant drug-resistant organisms.
* **Adequate environmental cleaning** and disinfection.
* **Selective Decontamination** / Chlorhexidine bathing.

**Treatment Strategy in Nepal Context:**
Because of the high prevalence of Tuberculosis in Nepal, it is strictly advised to reserve **Fluoroquinolones** and **Linezolid** and limit their use for other indications.

**Combination Antibiotics with Polymyxins:**
When a polymyxin (Polymyxin B or Colistin) is being used to treat MDRO, it should be used in combination with a second active agent (e.g., Meropenem, Tigecycline, or Aminoglycosides) to reduce mortality and prevent resistance emergence during monotherapy.
`;
