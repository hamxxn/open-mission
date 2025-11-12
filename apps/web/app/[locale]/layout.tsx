import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTimeZone, setRequestLocale } from "next-intl/server";
import { routing } from "@i18n/routing";

import "@styles/global.css";
import { Header } from "@components/index";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const timeZone = await getTimeZone();

  if (!hasLocale(routing.locales, locale)) {
    console.error(`Invalid locale: ${locale}`);
  }
  setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider timeZone={timeZone}>
          <div className="mx-auto flex min-h-screen w-full flex-col">
            <Header />
            <div className="flex w-full min-w-[112.8rem] flex-1 flex-col">
              {children}
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
