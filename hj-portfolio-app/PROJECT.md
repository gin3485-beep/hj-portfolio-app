# Antigravity Todo App (Portfolio)

## 📖 프로젝트 개요
기존 단일 HTML 파일(`portfolio.html`)로 구성된 포트폴리오 웹사이트를 Next.js 기반의 컴포넌트 아키텍처로 재설계하여 유지보수성과 확장성을 높인 프로젝트입니다. 사용자 룰에 따라 다크 글래스모피즘 기반의 UI와 인터랙션을 제공합니다.

## 📋 요청 이력 (Request History)
- **2026-04-08**: 다크/라이트 듀얼 테마 시스템 도입. 기본 화이트 테마 적용 및 테마 토글 기능 구현 완료.
- **2026-04-08**: `VoltAgent/awesome-design-md` 원칙을 적용하여 `DESIGN.md` 및 `AGENTS.md` 업데이트 완료. AI 협업을 위한 디자인 시스템 표준 수립.
- **2026-04-08**: Next.js Hydration Mismatch 오류(서버/클라이언트 렌더링 불일치) 분석 및 `WebSection.tsx` 수정 완료.
- **2026-04-05**: 디자인 분석 및 Next.js 프레임워크(TypeScript, TailwindCSS v4 기반) 도입. 유지보수에 용이한 컴포넌트 기반 구조화 확립 및 지속적 관리용 마크다운 전환 완료.

## ✨ 현재 기능 목록
- [x] 기존 `portfolio.html` 코드 분석 완료
- [x] Next.js 기반 아키텍처 문서화 및 승인 완료
- [x] Next.js (TypeScript) 프로젝트 초기화 (Tailwind CSS v4 + shadcn/ui 적용)
- [x] 컴포넌트 분리 (Hero, About, UI/UX, Web, Print, Contact)
- [x] 재사용 가능한 UI 컴포넌트(모달, 슬라이더, 섹션 헤더 등) 구현
- [x] 글로벌 CSS 다크 글래스모피즘(Dark Glassmorphism) 테마 및 Inter 폰트 적용
- [x] 모바일 + 데스크톱 웹 반응형 해상도(max-w-6xl, 1152px) 및 다중 컬럼/그리드 최적화 구현
- [x] SSR 환경에서의 Hydration 안정성 확보 (WebSection 등)
- [x] **다크/라이트 모드 테마 전환 시스템 구현 (`next-themes`)**
- [x] **디자인 시스템 표준화 (`DESIGN.md`) 및 듀얼 테마 가이드라인 반영**

## 📝 변경 이력 (Changelog)
- **2026-04-08**: React 19 환경에서의 `next-themes` 스크립트 태그 충돌 및 Hydration Mismatch 에러를 최종 해결함. `suppressHydrationWarning`을 활용한 정석적인 `ThemeProvider` 구조로 안착시키고, `layout.tsx`의 컴포넌트 임포트 오류를 수정함.
- **2026-04-08**: `next-themes`를 도입하여 라이트/다크 테마 전환 기능을 구현함. 전역 CSS 변수(OKLCH)를 활용하여 화이트 기반의 세련된 라이트 모드를 기본값으로 설정하고, 모든 컴포넌트를 테마 대응(`text-foreground`, `bg-background` 등) 구조로 리팩토링함.
- **2026-04-08**: AI 에이전트의 일관된 UI 생성을 돕는 `DESIGN.md`를 도입하고 `AGENTS.md`에 디자인 가이드라인 준수 명령을 명문화함. (참고: `awesome-design-md` 패턴)
- **2026-04-08**: `WebSection.tsx`에서 브라우저 크기(`window.innerWidth`)에 의존하여 서버와 클라이언트의 초기 HTML이 달라지던 Hydration 오류 수정. `useEffect`와 `useState`를 사용하여 클라이언트 마운트 이후에 데스크톱 레이아웃(8개 항목)으로 전환되도록 로직 개선.
- **2026-04-05**: 전체 컴포넌트(`HeroSection`, `SectionHeader` 등)의 텍스트 레이아웃을 반응형 브라우저 환경에서 가장 가독성이 높고 세련된 '전체 좌측 정렬(Left-aligned)' 기반으로 통일 및 단어 끊어짐 방지(`break-keep`)를 적용하여 한 줄 표출 경험 극대화.
- **2026-04-05**: `ContactSection`의 잔여 디자인(`// Contact`)을 `SectionHeader`와 동일한 양식(`PART 04`)으로 교체하여 전역 UI 일관성 확립.
- **2026-04-05**: 디자인 시인성 강화를 위해 네비게이션 바 링크를 최신 트렌드의 필(Pill) 형태 플로팅 메뉴로 개편 (`Home`, `About`, `Contact` 버튼 시인성 및 hover 이펙트 극대화) 및 전역 부드러운 스크롤(`scroll-smooth`) 동작 적용.
- **2026-04-05**: `SectionHeader`의 '01' 등 어색한 텍스트 디자인을 선형 그라데이션 포인트와 `PART` 텍스트가 접목된 세련된 UI로 변경.
- **2026-04-05**: 네비게이션 로고를 `PORT.`에서 사용자 아이텐티티 브랜드 `HJ.DESIGN`으로 변경하고 홈(최상단) 이동 기능 부여.
- **2026-04-05**: 디자인 제너레이션을 통해 '브랜드 아이덴티티 패키지(BI)' 목업 이미지를 리소스(`/public/images`)화 하고, `PrintSection`의 목록 및 모달 팝업으로 연동되는 썸네일 적용 완료.
- **2026-04-05**: 전역 `max-w-[560px]` 모바일 고정 레이아웃 제한을 해제하고, 데스크톱 최대폭 `1152px(max-w-6xl)`의 다중 컬럼/반응형 레이아웃 최적화를 전체 섹션에 반영 완료.
- **2026-04-05**: `PROJECT.md` 최초 생성
- **2026-04-05**: Next.js App Router 도입 및 섹션별 React 컴포넌트로 마이그레이션 (`Hero`, `About`, `UiUx`, `Web`, `Print`, `Contact`). `PopupProvider` 컨텍스트를 활용한 중앙집중식 모달 관리 아키텍처 추가.

---

## ⚙️ Role & Workflow Guidelines
- **Role**: Next.js 및 TypeScript 전문가이자 시니어 프론트엔드 엔지니어. 기존 `portfolio.html`의 컴포넌트 마이그레이션을 이끕니다.
- **Workflow / Management**:
  1. 작업 시작 전 `PROJECT.md` 우선 확인 및 파악.
  2. 작업 완료 즉시 사용자 질문 대기 없이 자율적으로 `PROJECT.md` 체크리스트 및 Changelog 동기화.
  3. 코드를 전면 수정하기 전에 컴포넌트 설계/아키텍처 제안 후 승인을 받는 단계적 접근 준수.
- **Technical Rules**:
  - `TypeScript Strict`: `any` 지양, 명확한 Type / Interface 정의 필수.
  - `Architecture`: 순수 공통 UI는 `/components/ui`에, 특화 컴포넌트는 `/components/sections`에 분리. Next.js App Router 환경에서 필요시에만 `"use client"` 할당.
  - `Styling`: 글로벌 CSS 및 Tailwind 환경을 활용하며, 디자인 일관성을 유지.
- **CLI & Automation**: 패키지 설치 또는 서버 구동 시 터미널(CLI) 환경 직접 활용 및 제안 필수.
