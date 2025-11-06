import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("applications");
  return (
    <div className="w-full flex-1 py-[7rem] flex flex-col items-center  bg-gray-200">
      <div className="flex flex-col items-center w-[100rem]">
        <h2 className="w-full text-center bg-white text-gray-900 text-head1 px-[2rem] py-[3.2rem] mb-[1.75rem]">
          {t("title")}
        </h2>
        <div className="w-full  px-[2rem] py-[3.2rem] bg-white">
          <div className="text-gray-900 text-head2">
            {t("techcourse")} {t("web")} {8} {t("generation")}
          </div>
        </div>
      </div>
    </div>
  );
}
