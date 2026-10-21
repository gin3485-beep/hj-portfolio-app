# HJ Design Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=flat&logo=tailwind-css)

모던하고 인터랙티브한 다크 글래스모피즘(Dark Glassmorphism) 디자인 기반의 개인 포트폴리오 웹사이트입니다. 기존의 단일 HTML 구조에서 벗어나 **Next.js** 기반의 컴포넌트 아키텍처로 재설계되어 높은 유지보수성과 확장성을 자랑합니다.

## ✨ 주요 특징 (Features)

- **최신 스택 기반 렌더링**: Next.js App Router와 TypeScript를 활용한 안정적인 컴포넌트 기반 아키텍처
- **트렌디한 UI/UX**: 깊이감을 주는 다크 글래스모피즘 테마 및 부드러운 스크롤, 인터랙션 애니메이션 적용
- **완벽한 반응형 웹 (Responsive Web)**: 모바일 환경부터 데스크톱 해상도(최대 1152px, max-w-6xl)까지 아우르는 최적화된 다중 컬럼/그리드 레이아웃
- **섹션별 모듈화**: Hero, About, UI/UX, Web, Print, Contact 등 목적에 맞게 철저히 분리된 UI 컴포넌트
- **중앙집중식 상태 관리**: Context API(`PopupProvider`)를 활용한 전역 모달/팝업 뷰어 구현

## 🚀 시작하기 (Getting Started)

### 사전 요구사항
* Node.js (v18 이상 권장)
* npm, yarn, pnpm 또는 bun

### 설치 및 실행

1. 프로젝트 패키지 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 브라우저에서 확인:  
로컬 서버가 구동되면, 브라우저를 열고 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인합니다.

## 📂 프로젝트 구조 (Project Structure)

- `/src/app`: Next.js App Router 기반의 페이지 및 전역 레이아웃
- `/src/components/sections`: 랜딩 페이지를 구성하는 주요 섹션 컴포넌트 (Hero, About 등)
- `/src/components/ui`: 재사용 가능한 범용 UI 컴포넌트 (팝업, 모달, 버튼 등)
- `/public`: 폰트, 이미지 등 정적 리소스 에셋

## 🛠️ 기술 스택 (Tech Stack)

- **Framework**: Next.js (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui
- **Icons**: Lucide React
- **Typography**: Inter Font (Google Fonts)

---
*자세한 프로젝트 히스토리 및 개발 규칙은 [PROJECT.md](./PROJECT.md)를 참고하세요.*
