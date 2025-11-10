export const SUBMISSION_METHOD = {
  PR: "PR",
  UPLOAD: "UPLOAD",
  FORM: "FORM",
} as const;

export type SubmissionMethod =
  (typeof SUBMISSION_METHOD)[keyof typeof SUBMISSION_METHOD];
