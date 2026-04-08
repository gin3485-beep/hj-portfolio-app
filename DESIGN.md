# Antigravity Design System — DESIGN.md

이 문서는 Antigravity 포트폴리오 프로젝트의 시각적 정체성과 UI/UX 원칙을 정의합니다. AI 에이전트와 개발자는 이 가이드를 준수하여 일관된 디자인 경험을 유지해야 합니다.

## 1. Visual Theme & Atmosphere
- **Light Mode (Default):** Sophisticated White, Clean, Professional, Minimalist with Purple Accents.
- **Dark Mode (HeroUI Style):** Deep Black (Pure Black feel), High Contrast, Minimalist Borders, Cyber-elegant.
- **Concept:** 낮에는 깔끔한 화이트, 밤에는 깊이 있는 딥 블랙 테마를 제공하여 모던한 전문성을 강조합니다.

## 2. Color Palette & Roles
### Light Mode
- **Background:** `oklch(0.99 0.01 300)` (Crisp White)
- **Foreground:** `oklch(0.2 0.05 300)` (Deep Charcoal)
- **Primary:** `oklch(0.6 0.2 290)` (Soft Purple)
- **Card Surface:** `rgba(255, 255, 255, 0.6)` (Frosted Glass)

### Dark Mode
- **Background:** `oklch(0.1 0 0)` (Deep Black)
- **Foreground:** `oklch(0.985 0 0)` (Pure White)
- **Primary:** `oklch(0.65 0.2 290)` (Vibrant Purple)
- **Card Surface:** `oklch(0.15 0.01 0 / 0.6)` (Darker Slate/Black)
- **Border:** `oklch(0.25 0.01 0 / 0.8)` (Subtle Grayish Stroke)

## 3. Typography Rules
- **Font Family:** `Inter`, sans-serif
- **Headings:** `font-black`, `tracking-tighter`, `text-foreground`.
- **Accents:** `text-primary`. 다크 모드 그라데이션은 `from-purple-400 to-indigo-400` 선호.
- **Alignment:** **Left-aligned priority**.

## 4. Component Stylings
### Glass Card (`.glass-card`)
- **Light:** Border `oklch(0.85 0.02 300 / 0.5)`, Shadow `rgba(0,0,0,0.05)`.
- **Dark:** Border `white/5` (Very subtle), Shadow `rgba(0,0,0,0.6)`.
- **Hover (Dark):** `bg-white/5`, `border-white/10`, `transform -translate-y-1`.

## 5. Layout Principles
- **Responsive:** Mobile-first, Desktop max-w-6xl.
- **Transitions:** 테마 전환 시 `duration-500`의 부드러운 색상 변화 적용.

## 6. Do's and Don'ts
### ✅ Do
- 다크 모드에서는 배경을 완전한 블랙에 가깝게 유지하세요.
- 카드의 경계선은 아주 미세하게(`border-white/5`) 설정하여 모던함을 유지하세요.
- 호버 시에만 카드의 밝기를 약간 높여 상호작용을 강조하세요.

### ❌ Don't
- 다크 모드 배경에 너무 밝은 보라색 그라데이션을 넓게 쓰지 마세요 (딥 블랙 느낌 저해).
- 카드의 그림자를 너무 밝은 유채색으로 쓰지 마세요.
