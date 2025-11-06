import { Button } from "@repo/ui/button";
import { useTranslations } from "next-intl";
import Header from "../components/header/Header";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div>
      <Header />
      <div className="text-blue-gray-500 text-en-head1">{t("hello")}</div>
      <Button appName="web">Open alert</Button>
    </div>
  );
}
