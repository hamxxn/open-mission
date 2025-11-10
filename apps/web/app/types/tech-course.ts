import { TechCourseStatus } from "@constants/tech-course-status";

export interface TechCourse {
  generation: string;
  recruitable: boolean;
  hidden: boolean;
  startDateTime: Date;
  endDateTime: Date;
  status: TechCourseStatus;
}
