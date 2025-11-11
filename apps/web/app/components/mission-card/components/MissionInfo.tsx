import { useTranslations } from "next-intl";
import { useRouter } from "@i18n/navigation";

import { Mission } from "@type/mission";
import { formatDate } from "@utils/format-date";
import { Button } from "@components/button/Button";

type MissionInfoProps = Pick<
  Mission,
  | "week"
  | "startDateTime"
  | "submissionStartDateTime"
  | "endDateTime"
  | "submissionMethod"
  | "status"
  | "submitted"
  | "testable"
>;

export default function MissionInfo({
  week,
  startDateTime,
  submissionStartDateTime,
  submitted,
  endDateTime,
  status,
}: MissionInfoProps) {
  const t = useTranslations("card");
  const router = useRouter();
  const isNotReady = submissionStartDateTime > new Date();
  const isNotSubmittable = status !== "OPEN" && status !== "SUBMITTABLE";
  const isSubmitDisabled = submitted || isNotReady || isNotSubmittable;

  const getSubmitButtonText = () => {
    if (submitted) return t("buttons.submitted");
    if (isNotReady) return t("buttons.ready");
    return t("buttons.submit");
  };

  const handleViewButtonClick = () => {
    router.push(`/mission/${week}`);
  };

  return (
    <header className="flex flex-col">
      <div className="flex justify-between">
        <h3 className="text-gray-900 ko-text-head2">
          {week}
          {t("week")}
        </h3>
        <div className="flex items-center gap-2">
          <Button
            disabled={status !== "OPEN" && status !== "SUBMITTABLE"}
            onClick={handleViewButtonClick}
          >
            {t("buttons.view")}
          </Button>
          <Button disabled={isSubmitDisabled}>{getSubmitButtonText()}</Button>
        </div>
      </div>
      <p className="ko-text-body2 text-gray-600">
        {formatDate(startDateTime, endDateTime)}
      </p>
    </header>
  );
}
