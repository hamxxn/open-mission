import { MissionStatus } from "@/constants/mission-status";

export interface MissionInfo {
  title: string;
  startDateTime: Date;
  description: {
    title: string;
    items: string[];
  };
  example: {
    title: string;
    items: {
      title: string;
      description: string;
      assignment: string;
      example?: string;
    }[];
  };
  submissionStartDateTime: Date;
  submissionMethod: {
    title: string;
    items: string[];
  };
  endDateTime: Date;
  status: MissionStatus;
  submitted: boolean;
}
