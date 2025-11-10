export const MISSION_STATUS = {
  NOT_STARTED: "NOT_STARTED",
  OPEN: "OPEN",
  SUBMITTABLE: "SUBMITTABLE",
  CLOSED: "CLOSED",
} as const;

export type MissionStatus =
  (typeof MISSION_STATUS)[keyof typeof MISSION_STATUS];
