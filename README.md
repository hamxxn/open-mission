# Open Mission

## 배포링크
https://open-mission-web.vercel.app

## 목표 : 프로젝트에 적용한 모든 기술들과 구현 방식 전반에 대해 도입 근거를 조사하고 스스로 정당성을 확립합니다.
- [ ] 아래 테크코스 내 지원서 페이지 전반에 적용 가능한 다국어 구조를 설계합니다. 문구, 라벨, 에러 메시지 등을 분리된 리소스 파일로 관리하고, 언어 전환 기능(다국어 구조)을 구현합니다.
  
  https://apply.techcourse.co.kr/assignment/17/mission/69

- [ ] 데이터 리스트 가상화를 도입하여 렌더링 및 불필요한 데이터 전송을 최소화합니다.

- [ ] 코드 분할을 적용해 초기 로딩 속도를 개선하고, 필요한 페이지 또는 컴포넌트만 지연 로딩되도록 구성합니다.

## 전체 구조
PROJECT_STRUCTURE.md 에 명시하였습니다.

## 다국어 구조 관련
I18N__STRUCTURE.md 에 명시하였습니다.

## 기술 스택

- **패키지 매니저**: pnpm
- **빌드 시스템**: Turbo
- **프레임워크**: Next.js
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **다국어 구조**: next-intl

