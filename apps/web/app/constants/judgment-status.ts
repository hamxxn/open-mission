export const JUDGMENT_STATUS = {
  PENDING: "대기",
  RUNNING: "실행 중",
  PASSED: "통과",
  FAILED: "실패",
} as const;

export type JudgmentStatus = keyof typeof JUDGMENT_STATUS;
