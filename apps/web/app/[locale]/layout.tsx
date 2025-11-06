import { hasLocale, NextIntlClientProvider } from "next-intl";
import "../styles/global.css";
import { getTimeZone, setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";

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
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
