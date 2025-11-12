import type { TechCourseStatus } from "@constants/index";

export interface TechCourse {
  generation: string;
  recruitable: boolean;
  hidden: boolean;
  startDateTime: Date;
  endDateTime: Date;
  status: TechCourseStatus;
}
