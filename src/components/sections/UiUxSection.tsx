'use client';
import { useState, useEffect } from 'react';
import SectionHeader from '../ui/SectionHeader';

const uiuxProjects = [
  { icon: '📱', label: 'Mobile App', period: '2025.01.01 ~ 2025.03.31', title: '헬스케어 앱 리디자인', desc: '사용자 리서치 기반의 헬스케어 앱 전체 UX 개선 프로젝트. 직관적인 네비게이션과 접근성을 중심으로 설계하였습니다.' },
  { icon: '💻', label: 'Homepage', period: '2026.01.01 ~ 2026.03.31', title: '오더퀸 홈페이지 리뉴얼', desc: '복잡한 데이터를 직관적으로 표현하는 어드민 대시보드 디자인. 실시간 데이터 시각화와 필터링 UX를 설계하였습니다.' },
  { icon: '🛒', label: 'E-commerce', period: '2025.04.01 ~ 2025.06.30', title: '쇼핑몰 UX 최적화', desc: '전환율 향상을 위한 구매 플로우 UX 최적화 프로젝트. A/B 테스트를 통해 전환율을 32% 향상시킨 사례입니다.' },
  { icon: '🎯', label: 'Prototype', period: '2025.07.01 ~ 2025.09.30', title: '핀테크 앱 프로토타입', desc: '금융 서비스의 접근성을 높이는 UX 프로토타입 설계. 복잡한 금융 기능을 누구나 쉽게 쓸 수 있도록 단순화하였습니다.' },
];

export default function UiUxSection() {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCur(c => (c + 1) % uiuxProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCur(c => (c + 1) % uiuxProjects.length);
  const prev = () => setCur(c => (c - 1 + uiuxProjects.length) % uiuxProjects.length);

  return (
    <section id="uiux" className="py-20 px-4 md:px-12 relative z-10 before:absolute before:-inset-4 before:bg-[#070211] before:-z-10 before:skew-y-[-2deg] before:-my-10 border-y border-purple-500/10">
      <SectionHeader label="01" title="UI / UX Design" description="브랜드 아이덴티티를 담은 웹사이트 디자인 및 구현 프로젝트입니다." />
      
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden glass-card rounded-2xl md:rounded-3xl">
          <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ transform: `translateX(-${cur * 100}%)`}}>
            {uiuxProjects.map((p, i) => (
              <div key={i} className="min-w-full flex-col md:flex-row flex">
                <div className="h-44 md:h-[400px] md:w-1/2 bg-gradient-to-br from-purple-800/10 to-indigo-900/10 flex items-center justify-center text-6xl md:text-8xl shrink-0">
                  <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">{p.icon}</span>
                </div>
                <div className="p-6 md:p-12 flex flex-col justify-center bg-black/40 border-t md:border-t-0 md:border-l border-purple-500/10 md:w-1/2">
                  <div className="text-[10px] md:text-xs text-purple-400 tracking-[0.2em] font-bold uppercase mb-2 md:mb-4">{p.label}</div>
                  <div className="text-white font-black text-lg md:text-3xl mb-2 md:mb-4 leading-tight">{p.title}</div>
                  <div className="text-[11px] md:text-sm text-gray-300 leading-relaxed md:leading-loose mb-4 line-clamp-2 md:line-clamp-none">{p.desc}</div>
                  <div className="text-[9px] md:text-xs text-purple-300/60 font-semibold">{p.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 mt-8 md:mt-12">
          <button onClick={prev} className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-purple-300/50 hover:text-white hover:bg-purple-600/80 hover:shadow-[0_0_15px_rgba(126,34,206,0.5)] transition-all">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div className="flex gap-2.5">
            {uiuxProjects.map((_, i) => (
              <button key={i} onClick={() => setCur(i)} className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${i === cur ? 'w-6 md:w-8 bg-gradient-to-r from-purple-400 to-pink-500' : 'w-1.5 md:w-2 bg-gray-700 hover:bg-gray-500'}`} />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-purple-300/50 hover:text-white hover:bg-purple-600/80 hover:shadow-[0_0_15px_rgba(126,34,206,0.5)] transition-all">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
