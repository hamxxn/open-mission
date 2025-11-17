import { Mission } from "@type/mission";
import {
  MissionInfo,
  MissionTestResult,
} from "@components/mission-card/components";

interface MissionCardProps {
  mission: Mission;
}

export default function MissionCard({ mission }: MissionCardProps) {
  const {
    week,
    startDateTime,
    submissionStartDateTime,
    endDateTime,
    submissionMethod,
    status,
    submitted,
    testable,
    judgment,
  } = mission;

  return (
    <div className="relative flex flex-col border border-gray-300 px-[2.4rem] py-[2rem] mb-[1.6rem]">
      <MissionInfo
        week={week}
        startDateTime={startDateTime}
        submissionStartDateTime={submissionStartDateTime}
        endDateTime={endDateTime}
        submissionMethod={submissionMethod}
        status={status}
        submitted={submitted}
        testable={testable}
      />
      {judgment && (
        <MissionTestResult testable={testable} judgment={judgment} />
      )}
    </div>
  );
}
