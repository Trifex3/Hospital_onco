export class Investigation {
  id?: number;
  name?: string;
  type?: string;
  /*activityPicture?: string;*/
  riskLevel?: number;
  /*primaryColour?: string;
  secondaryColour?: string;*/
  doctors?: any;
}

export enum InvestigationType {
  CT,
  Appointmnet,
  Biology,
  Surgery,
  Biopsy,
  RTE,
  Ultrasound
}

export const INVESTIGATION_TYPES = ['CT', 'Appointmnet', 'Biology', ' Surgery', 'Biopsy', 'RTE', 'Ultrasound'];
