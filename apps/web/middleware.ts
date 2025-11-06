import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import createMiddleware from "next-intl/middleware";
import { SUPPORTED_LOCALES } from "./i18n/locales";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const firstSegment = pathname.split("/")[1];
  const pathWithoutLocale = pathname.replace(`/${firstSegment}`, "");

  if (firstSegment && !SUPPORTED_LOCALES.includes(firstSegment)) {
    const redirectPath = `/${routing.defaultLocale}${pathWithoutLocale}`;
    const redirectUrl = new URL(redirectPath, request.url);

    return NextResponse.redirect(redirectUrl);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // 모든 경로에서 실행하되 정적 파일은 제외
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
