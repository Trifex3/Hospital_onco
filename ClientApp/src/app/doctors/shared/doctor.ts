import { Investigation } from "../../investigations/shared/investigation.model";

export namespace Doctor{

  export interface DoctorRequest {
    FirstName: string;
    LastName: string;
    Description: string;
    AInvestigations: Number[];
   /* ProfilePicture?: File;*/
  };

  export interface DoctorResponse {
    id: number;
    firstName: string;
    lastName: string;
    description: string;
    investigations: Investigation[];
   /* profilePicture?: string;*/
  }

  export interface DoctorConfirmation {
    status: string;
  };
};
