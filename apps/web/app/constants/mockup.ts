import { Mission } from "@type/mission";
import { User } from "@type/user";
import { TechCourse } from "@type/tech-course";
import { TECH_COURSE_STATUS } from "@constants/tech-course-status";
import { SUBMISSION_METHOD } from "@constants/submit-method";
import { MISSION_STATUS } from "@constants/mission-status";
import { JUDGMENT_STATUS } from "@constants/judgment-status";

export const techCourseMockup: TechCourse = {
  generation: "8",
  recruitable: true,
  hidden: false,
  startDateTime: new Date("2025-09-29T15:00:00"),
  endDateTime: new Date("2025-10-10T10:00:00"),
  status: TECH_COURSE_STATUS.CLOSED,
};

export const userMockup: User = {
  submitted: true,
};

export const mockupMissionList: Mission[] = [
  {
    week: 1,
    startDateTime: new Date("2025-10-14T15:00:00"),
    submissionStartDateTime: new Date("2025-10-19T15:00:00"),
    endDateTime: new Date("2025-10-21T00:00:00"),
    submissionMethod: SUBMISSION_METHOD.PR,
    status: MISSION_STATUS.CLOSED,
    submitted: true,
    testable: true,
    judgment: {
      url: "https://github.com/woowacourse-precourse/javascript-calculator-8/pull/160",
      commitHash: "38c2c8aa23f44a8be09cb32a1021e2d7206f4cde",
      status: JUDGMENT_STATUS.PASSED,
      passCount: 2,
      totalCount: 2,
      message: "",
      startedDateTime: new Date("2025-10-20T16:17:57.533096"),
      commitUrl:
        "https://github.com/woowacourse-precourse/javascript-calculator-8/pull/160/commits/38c2c8aa23f44a8be09cb32a1021e2d7206f4cde",
    },
  },
  {
    week: 2,
    startDateTime: new Date("2025-10-21T15:00:00"),
    submissionStartDateTime: new Date("2025-10-26T15:00:00"),
    endDateTime: new Date("2025-10-28T00:00:00"),
    submissionMethod: SUBMISSION_METHOD.PR,
    status: MISSION_STATUS.CLOSED,
    submitted: true,
    testable: true,
    judgment: {
      url: "https://github.com/woowacourse-precourse/javascript-racingcar-8/pull/114",
      commitHash: "d65277451c417aacb068e62e84ad17d2ccc4beca",
      status: JUDGMENT_STATUS.PASSED,
      passCount: 2,
      totalCount: 2,
      message: "",
      startedDateTime: new Date("2025-10-27T18:02:34.315461"),
      commitUrl:
        "https://github.com/woowacourse-precourse/javascript-racingcar-8/pull/114/commits/d65277451c417aacb068e62e84ad17d2ccc4beca",
    },
  },
  {
    week: 3,
    startDateTime: new Date("2025-10-28T15:00:00"),
    submissionStartDateTime: new Date("2025-11-02T15:00:00"),
    endDateTime: new Date("2025-11-04T00:00:00"),
    submissionMethod: SUBMISSION_METHOD.PR,
    status: MISSION_STATUS.CLOSED,
    submitted: true,
    testable: true,
    judgment: {
      url: "https://github.com/woowacourse-precourse/javascript-lotto-8/pull/114",
      commitHash: "97ab475ff16f985c46d1c4f0eaf8a169b2484eeb",
      status: JUDGMENT_STATUS.PASSED,
      passCount: 2,
      totalCount: 2,
      message: "",
      startedDateTime: new Date("2025-11-03T18:55:30.994049"),
      commitUrl:
        "https://github.com/woowacourse-precourse/javascript-lotto-8/pull/114/commits/97ab475ff16f985c46d1c4f0eaf8a169b2484eeb",
    },
  },
  {
    week: 4,
    startDateTime: new Date("2025-11-04T15:00:00"),
    submissionStartDateTime: new Date("2025-11-17T15:00:00"),
    endDateTime: new Date("2025-11-25T00:00:00"),
    submissionMethod: SUBMISSION_METHOD.PR,
    status: MISSION_STATUS.OPEN,
    submitted: false,
    testable: false,
    judgment: null,
  },
];
