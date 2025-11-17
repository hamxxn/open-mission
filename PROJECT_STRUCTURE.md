# Open Mission

## 기술 스택

- **패키지 매니저**: pnpm@9.0.0
- **빌드 시스템**: Turbo
- **프레임워크**: Next.js 16.0.0
- **언어**: TypeScript 5.9.2
- **스타일링**: Tailwind CSS 4.1.16
- **다국어**: next-intl 4.4.0

## 전체 구조

```
open-mission/
├── apps/
│   └── web/
├── packages/                # 공유 패키지
│   ├── eslint-config/       # ESLint 설정
│   ├── prettier-config/     # Prettier 설정
│   ├── tailwind-config/     # Tailwind CSS 설정
│   ├── typescript-config/   # TypeScript 설정
│   └── ui/                  # 공유 UI 컴포넌트
├── eslint-example/          # ESLint 설정 프로젝트
├── pnpm-workspace.yaml      # pnpm workspace 설정
├── turbo.json               # Turbo 설정
└── package.json             # 루트 패키지 설정
```

## apps/web

### 디렉토리 구조

```
apps/web/
├── app/
│   ├── [locale]/            # 다국어 라우팅 (ko, en, de)
│   │   ├── layout.tsx       # 루트 레이아웃
│   │   ├── page.tsx         # 홈 페이지
│   │   ├── page.client.tsx
│   │   ├── message/         # 메시지 페이지
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       ├── page.client.tsx
│   │   │       ├── hooks/
│   │   │       └── utils/
│   │   └── mission/         # 미션 페이지
│   │       └── [id]/
│   │           ├── page.tsx
│   │           ├── page.client.tsx
│   │           └── components/
│   ├── assets/              # SVG 아이콘
│   ├── components/          # 공통 컴포넌트
│   │   ├── article/         # 아티클 컴포넌트
│   │   ├── button/          # 버튼 컴포넌트
│   │   ├── header/          # 헤더 컴포넌트
│   │   ├── mission-card/    # 미션 카드 컴포넌트
│   │   │   └── @modal/      # 모달 컴포넌트
│   │   └── toast/           # 토스트 컴포넌트
│   ├── constants/
│   │   ├── judgment-status.ts
│   │   ├── mission-status.ts
│   │   ├── submit-method.ts
│   │   └── tech-course-status.ts
│   ├── mock/                # 목업 데이터
│   │   ├── main-page-mockup.ts
│   │   ├── message-mockup.ts
│   │   └── mission-page-mockup.ts
│   ├── styles/              # 전역 스타일
│   │   ├── global.css
│   │   ├── message-animation.css
│   │   └── toost-animation.css
│   ├── types/               # TypeScript 타입 정의
│   │   ├── mission-info.ts
│   │   ├── mission.ts
│   │   └── tech-course.ts
│   └── utils/
│       ├── cn.ts            # className 병합 유틸
│       └── format-date.ts   # 날짜 포맷팅
├── i18n/                    # 다국어 설정
│   ├── locales.ts           # 지원 언어 목록
│   ├── navigation.ts        # 네비게이션 설정
│   ├── request.ts           # 요청 설정
│   └── routing.ts           # 라우팅 설정
├── messages/                # 번역 파일
│   ├── ko.json             # 한국어
│   ├── en.json             # 영어
│   └── de.json             # 독일어
├── public/
│   └── assets/             # 이미지 파일
├── translate/               # 번역 도구
│   ├── download.js         # Google Sheets에서 번역 다운로드
│   ├── upload.js           # Google Sheets에 번역 업로드
│   └── util/
│       └── google-sheet.js # Google Sheets 유틸리티
├── middleware.ts            # Next.js 미들웨어 (다국어 처리)
├── next.config.js           # Next.js 설정
├── postcss.config.mjs       # PostCSS 설정
└── tsconfig.json            # TypeScript 설정
```

## packages/ - 공유 패키지

모노레포 내에서 공유되는 설정 및 라이브러리 패키지입니다.

### @repo/eslint-config

ESLint 공유 설정

```
packages/eslint-config/
├── index.js              # 메인 ESLint 설정
├── mixins/
│   └── react.js         # React 관련 ESLint 규칙
└── patch.js              # ESLint 패치
```

### @repo/prettier-config

Prettier 공유 설정

```
packages/prettier-config/
└── index.js              # Prettier 설정
```

### @repo/tailwind-config

Tailwind CSS 공유 설정

```
packages/tailwind-config/
└── shared-styles.css     # 공유 스타일
```

## eslint-example/

ESLint 설정 예제 프로젝트

```
eslint-example/
├── src/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
└── tsconfig.json
```
