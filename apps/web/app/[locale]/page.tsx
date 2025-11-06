import { Button } from "@repo/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div>
      <div className="text-blue-gray-500 text-en-head1">{t("hello")}</div>
      <Button appName="web">Open alert</Button>
    </div>
  );
}
