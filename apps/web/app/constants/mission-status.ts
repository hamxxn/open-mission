export const MISSION_STATUS = {
  NOT_STARTED: "시작 전",
  OPEN: "진행 중",
  SUBMITTABLE: "제출 가능",
  CLOSED: "마감",
} as const;

export type MissionStatus = keyof typeof MISSION_STATUS;
