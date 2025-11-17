# 다국어 구조 (Internationalization)

## 지원 언어

- **한국어 (ko)**: 기본 언어 (default)
- **영어 (en)**
- **독일어 (de)**

## 디렉토리 구조

```
apps/web/
├── app/
│   └── [locale]/            # 다국어 라우팅 (ko, en, de)
│       ├── layout.tsx       # 루트 레이아웃 (NextIntlClientProvider 포함)
│       ├── page.tsx         # 홈 페이지
│       ├── page.client.tsx  # 클라이언트 컴포넌트
│       ├── message/         # 메시지 페이지
│       └── mission/         # 미션 페이지
├── i18n/                    # 다국어 설정
│   ├── locales.ts           # 지원 언어 목록 및 기본 언어
│   ├── navigation.ts        # 네비게이션 설정 (Link, redirect 등)
│   ├── request.ts           # 요청 설정 (메시지 로드)
│   └── routing.ts           # 라우팅 설정
├── messages/                # 번역 파일
│   ├── ko.json             # 한국어 번역
│   ├── en.json             # 영어 번역
│   └── de.json             # 독일어 번역
├── translate/               # 번역 도구
│   ├── download.js         # Google Sheets에서 번역 다운로드
│   ├── upload.js           # Google Sheets에 번역 업로드
│   ├── constants/
│   │   ├── translate.js    # 번역 도구 상수
│   │   └── errors.js       # 에러 메시지
│   └── util/
│       └── google-sheet.js  # Google Sheets 유틸리티
└── middleware.ts            # Next.js 미들웨어 (다국어 처리)
```

## 설정 파일

### i18n/locales.ts

지원 언어 목록과 기본 언어를 정의합니다.

```typescript
export const SUPPORTED_LOCALES = ["en", "ko", "de"];
export const DEFAULT_LOCALE = "ko";
```

### i18n/routing.ts

next-intl의 라우팅 설정을 정의합니다.

```typescript
import { defineRouting } from "next-intl/routing";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./locales";

export const routing = defineRouting({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: "always", // 항상 locale을 URL에 포함
  localeDetection: true, // Accept-Language 헤더 기반 locale 감지
});
```

**주요 설정:**

- `localePrefix: "always"`: 모든 URL에 locale이 포함됩니다 (예: `/ko/home`, `/en/home`)
- `localeDetection: true`: 브라우저의 Accept-Language 헤더를 기반으로 자동으로 언어를 감지합니다

### i18n/request.ts

서버 컴포넌트에서 사용할 메시지를 로드하는 설정입니다.

```typescript
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // 유효하지 않은 locale인 경우 기본 locale로 설정
  if (!locale || !routing.locales.includes(locale as string)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

### i18n/navigation.ts

next-intl의 네비게이션 훅과 컴포넌트를 생성합니다.

```typescript
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
```

## 미들웨어 (middleware.ts)

Next.js 미들웨어를 통해 다국어 라우팅을 처리합니다.

```typescript
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import createMiddleware from "next-intl/middleware";
import { SUPPORTED_LOCALES } from "./i18n/locales";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  // 지원하지 않는 locale인 경우 기본 locale로 리다이렉트
  if (firstSegment && !SUPPORTED_LOCALES.includes(firstSegment)) {
    const pathWithoutLocale = pathname.replace(`/${firstSegment}`, "");
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
```

**기능:**

- 지원하지 않는 locale이 URL에 포함된 경우 기본 locale로 리다이렉트
- next-intl 미들웨어를 통한 자동 locale 처리
- 정적 파일 및 API 경로는 제외

## 레이아웃 설정

### app/[locale]/layout.tsx

루트 레이아웃에서 `NextIntlClientProvider`를 설정합니다.

```typescript
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTimeZone, setRequestLocale } from "next-intl/server";
import { routing } from "@i18n/routing";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const timeZone = await getTimeZone();

  // locale 유효성 검사
  if (!hasLocale(routing.locales, locale)) {
    console.error(`Invalid locale: ${locale}`);
  }

  // 서버 컴포넌트에서 locale 설정
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
```

## 번역 파일 (messages/)

각 언어별 JSON 파일에 번역 키-값 쌍을 저장합니다.

### 구조 예시

```json
// messages/ko.json
{
  "header": {
    "title": "제목",
    "description": "설명"
  },
  "button": {
    "submit": "제출",
    "cancel": "취소"
  }
}
```

```json
// messages/en.json
{
  "header": {
    "title": "Title",
    "description": "Description"
  },
  "button": {
    "submit": "Submit",
    "cancel": "Cancel"
  }
}
```

## 번역 도구 (translate/)

Google Sheets를 사용하여 번역을 관리하는 도구입니다.

### download.js

Google Sheets에서 번역을 다운로드하여 `messages/` 디렉토리에 JSON 파일로 저장합니다.

**기능:**

- Google Sheets에서 번역 데이터 읽기
- 중첩된 키 구조 지원 (예: "header.title" → `{ header: { title: "..." } }`)
- 각 언어별 JSON 파일 생성 (ko.json, en.json, de.json)

**사용 방법:**

```bash
node apps/web/translate/download.js
```

### upload.js

`messages/` 디렉토리의 JSON 파일을 읽어서 Google Sheets에 업로드합니다.

**기능:**

- JSON 파일에서 번역 데이터 읽기
- 중첩된 객체 구조를 평면화하여 Google Sheets 형식으로 변환
- Google Sheets에 새 행 추가 (기존 키는 유지)

**사용 방법:**

```bash
node apps/web/translate/upload.js
```

## Next.js 설정

### next.config.js

next-intl 플러그인을 설정합니다.

```javascript
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig = {};

export default withNextIntl(nextConfig);
```

## 라우팅 구조

### URL 구조

- `/ko/`: 한국어 홈 페이지
- `/en/`: 영어 홈 페이지
- `/de/`: 독일어 홈 페이지
- `/ko/mission/123`: 한국어 미션 페이지
- `/en/message/456`: 영어 메시지 페이지

### 네비게이션 사용

**Link 컴포넌트:**

```typescript
import { Link } from "@i18n/navigation";

<Link href="/mission/123">미션 보기</Link>
// 현재 locale에 맞게 자동으로 /ko/mission/123 또는 /en/mission/123으로 링크
```

**네비게이션:**

```typescript
import { useRouter } from "@i18n/navigation";

const router = useRouter();
router.push("/mission/123"); // 현재 locale 유지
```

### 새로운 번역 키 추가

1. `messages/ko.json`에 한국어 번역 추가
2. `messages/en.json`에 영어 번역 추가
3. `messages/de.json`에 독일어 번역 추가
4. 또는 `translate/upload.js`를 사용하여 Google Sheets에 업로드 후 `translate/download.js`로 다운로드
