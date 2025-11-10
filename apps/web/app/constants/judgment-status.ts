export const JUDGMENT_STATUS = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  PASSED: "PASSED",
  FAILED: "FAILED",
} as const;

export type JudgmentStatus =
  (typeof JUDGMENT_STATUS)[keyof typeof JUDGMENT_STATUS];
