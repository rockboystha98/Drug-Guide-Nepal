import { TherapeuticCategory, DrugEntry } from '../types/formulary';
import { therapeuticCategories as baseCategories } from './formulary/categories';
import { ent1Drugs } from './formulary/ent_1';
import { ent2Drugs } from './formulary/ent_2';
import { ent3Drugs } from './formulary/ent_3';
import { ent4Drugs } from './formulary/ent_4';
import { skin1Drugs } from './formulary/skin_1';
import { skin2Drugs } from './formulary/skin_2';
import { skin3Drugs } from './formulary/skin_3';
import { skin4Drugs } from './formulary/skin_4';
import { skin5Drugs } from './formulary/skin_5';
import { eye1Drugs } from './formulary/eye_1';
import { eye2Drugs } from './formulary/eye_2';
import { eye3Drugs } from './formulary/eye_3';
import { eye4Drugs } from './formulary/eye_4';
import { eye5Drugs } from './formulary/eye_5';
import { giDrugs } from './formulary/gastrointestinal';
import { cardioDrugs } from './formulary/cardiovascular';
import { cardioExtendedDrugs } from './formulary/cardiovascular2';
import { cardioExtendedDrugs2 } from './formulary/cardiovascular3';
import { esmololDrugs } from './formulary/esmolol';
import { respiratoryDrugs } from './formulary/respiratory';
import { respiratoryDrugs2 } from './formulary/respiratory2';
import { cnsDrugs } from './formulary/cns';
import { cnsDrugs2 } from './formulary/cns2';
import { cnsDrugs3 } from './formulary/cns3';
import { cnsDrugs4 } from './formulary/cns4';
import { endocrine1Drugs } from './formulary/endocrine_1';
import { endocrine2Drugs } from './formulary/endocrine_2';
import { endocrine3Drugs } from './formulary/endocrine_3';
import { reproductive1Drugs } from './formulary/reproductive_1';
import { reproductive2Drugs } from './formulary/reproductive_2';
import { reproductive3Drugs } from './formulary/reproductive_3';
import { reproductive4Drugs } from './formulary/reproductive_4';
import { reproductive5Drugs } from './formulary/reproductive_5';
import { nutritionBlood1Drugs } from './formulary/nutrition_1';
import { nutritionBlood2Drugs } from './formulary/nutrition_2';
import { nutritionBlood3Drugs } from './formulary/nutrition_3';
import { nutritionBlood4Drugs } from './formulary/nutrition_4';
import { msk1Drugs } from './formulary/msk_1';
import { msk2Drugs } from './formulary/msk_2';
import { msk3Drugs } from './formulary/msk_3';
import { msk4Drugs } from './formulary/msk_4';
import { msk5Drugs } from './formulary/msk_5';
import { msk6Drugs } from './formulary/msk_6';
import { malignant1Drugs } from './formulary/malignant_1';
import { malignant2Drugs } from './formulary/malignant_2';
import { malignant3Drugs } from './formulary/malignant_3';
import { malignant4Drugs } from './formulary/malignant_4';
import { malignant5Drugs } from './formulary/malignant_5';
import { malignant6Drugs } from './formulary/malignant_6';
import { malignant7Drugs } from './formulary/malignant_7';
import { immunologicals1Drugs } from './formulary/immunologicals_1';
import { immunologicals2Drugs } from './formulary/immunologicals_2';
import { immunologicals3Drugs } from './formulary/immunologicals_3';
import { anesthesiaEmergencyDrugs } from './formulary/anesthesia';
import { anesthesiaEmergency2Drugs } from './formulary/anesthesia_2';
import { anesthesiaEmergency3Drugs } from './formulary/anesthesia_3';
import { anesthesiaEmergency4Drugs } from './formulary/anesthesia_4';
import { anesthesiaEmergency5Drugs } from './formulary/anesthesia_5';
import { renal1Drugs } from './formulary/renal_1';
import { renal2Drugs } from './formulary/renal_2';
import { renal3Drugs } from './formulary/renal_3';
import { renal4Drugs } from './formulary/renal_4';
import { infections1Drugs } from './formulary/infections_1';
import { infections2Drugs } from './formulary/infections_2';
import { infections3Drugs } from './formulary/infections_3';
import { infections4Drugs } from './formulary/infections_4';
import { infections5Drugs } from './formulary/infections_5';
import { tbDrugs } from './formulary/tb_drugs';
import { palliativeDrugs } from './formulary/palliative_1';

export const therapeuticCategories: TherapeuticCategory[] = baseCategories;

export const formularyData: DrugEntry[] = [
  ...endocrine1Drugs,
  ...endocrine2Drugs,
  ...endocrine3Drugs,
  ...reproductive1Drugs,
  ...reproductive2Drugs,
  ...reproductive3Drugs,
  ...reproductive4Drugs,
  ...reproductive5Drugs,
  ...ent1Drugs,
  ...ent2Drugs,
  ...ent3Drugs,
  ...ent4Drugs,
  ...eye1Drugs,
  ...eye2Drugs,
  ...eye3Drugs,
  ...eye4Drugs,
  ...eye5Drugs,
  ...giDrugs,
  ...cardioDrugs,
  ...cardioExtendedDrugs,
  ...cardioExtendedDrugs2,
  ...esmololDrugs,
  ...respiratoryDrugs,
  ...respiratoryDrugs2,
  ...cnsDrugs,
  ...cnsDrugs2,
  ...cnsDrugs3,
  ...cnsDrugs4,
  ...nutritionBlood1Drugs,
  ...nutritionBlood2Drugs,
  ...nutritionBlood3Drugs,
  ...nutritionBlood4Drugs,
  ...msk1Drugs,
  ...msk2Drugs,
  ...msk3Drugs,
  ...msk4Drugs,
  ...msk5Drugs,
  ...msk6Drugs,
  ...malignant1Drugs,
  ...malignant2Drugs,
  ...malignant3Drugs,
  ...malignant4Drugs,
  ...malignant5Drugs,
  ...malignant6Drugs,
  ...malignant7Drugs,
  ...skin1Drugs,
  ...skin2Drugs,
  ...skin3Drugs,
  ...skin4Drugs,
  ...skin5Drugs,
  ...immunologicals1Drugs,
  ...immunologicals2Drugs,
  ...immunologicals3Drugs,
  ...anesthesiaEmergencyDrugs,
  ...anesthesiaEmergency2Drugs,
  ...anesthesiaEmergency3Drugs,
  ...anesthesiaEmergency4Drugs,
  ...anesthesiaEmergency5Drugs,
  ...renal1Drugs,
  ...renal2Drugs,
  ...renal3Drugs,
  ...renal4Drugs,
  ...infections1Drugs,
  ...infections2Drugs,
  ...infections3Drugs,
  ...infections4Drugs,
  ...infections5Drugs,
  ...tbDrugs,
  ...palliativeDrugs
];
