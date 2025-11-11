import { Mission } from "@type/mission";
import MissionInfo from "@components/mission-card/components/MissionInfo";
import MissionTestResult from "@components/mission-card/components/MissionTestResult";

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
    <div className="flex flex-col border border-gray-300 px-[2.4rem] py-[2rem]">
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
