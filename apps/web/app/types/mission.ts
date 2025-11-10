import { JudgmentStatus } from "@constants/judgment-status";
import { SubmissionMethod } from "@constants/submit-method";
import { MissionStatus } from "@constants/mission-status";

export interface Judgment {
  url: string;
  commitHash: string;
  status: JudgmentStatus;
  passCount: number;
  totalCount: number;
  message: string;
  startedDateTime: Date;
  commitUrl: string;
}

export interface Mission {
  week: number;
  startDateTime: Date;
  submissionStartDateTime: Date;
  endDateTime: Date;
  submissionMethod: SubmissionMethod;
  status: MissionStatus;
  submitted: boolean;
  testable: boolean;
  judgment: Judgment | null;
}
