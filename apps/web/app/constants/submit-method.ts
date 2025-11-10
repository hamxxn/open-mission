export const SUBMISSION_METHOD = {
  PR: "PR",
  UPLOAD: "UPLOAD",
  FORM: "FORM",
} as const;

export type SubmissionMethod = keyof typeof SUBMISSION_METHOD;
