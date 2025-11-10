export const TECH_COURSE_STATUS = {
  NOT_STARTED: "NOT_STARTED",
  OPEN: "OPEN",
  CLOSED: "CLOSED",
} as const;

export type TechCourseStatus =
  (typeof TECH_COURSE_STATUS)[keyof typeof TECH_COURSE_STATUS];
