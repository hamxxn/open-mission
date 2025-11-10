export const TECH_COURSE_STATUS = {
  NOT_STARTED: "시작 전",
  OPEN: "진행 중",
  CLOSED: "마감",
} as const;

export type TechCourseStatus = keyof typeof TECH_COURSE_STATUS;
