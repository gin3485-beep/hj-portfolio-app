'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // React 19에서는 mounted 체크 없이 직접 반환하는 것이 
  // 인라인 스크립트 경고를 피하는 가장 좋은 방법입니다.
  // <html> 태그의 suppressHydrationWarning이 Hydration 불일치를 처리합니다.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
