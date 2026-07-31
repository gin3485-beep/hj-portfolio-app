'use client';
import { useState, useEffect } from 'react';
import SectionHeader from '../ui/SectionHeader';

const productProjects = [
  {
    image: '/images/sum_product_design01.png', // 여기에 이미지를 추가할 수 있습니다. 예: '/images/product-1.jpg'
    title: 'JJ STORAGE',
    desc: '탐색·예약·결제 과정을 최적화한 모바일 공유창고 서비스',
    role: 'UX Research, UI/UX Design (100%)',
    period: '2026.05–2026.06',
    link: '#' // 프로젝트 보기 링크를 연결할 수 있습니다.
  },
  {
    image: '/images/sum_product_design01.png', // 여기에 이미지를 추가할 수 있습니다. 예: '/images/product-1.jpg'
    title: '모바일 공유창고 예약 솔루션',
    desc: '공유창고 탐색부터 예약·결제까지 설계한 모바일 공유창고 솔루션',
    role: 'UX Research, UI/UX Design (100%)',
    period: '2026.05–2026.06',
    link: '#' // 프로젝트 보기 링크를 연결할 수 있습니다.
  }
];

export default function ProductDesignSection() {
  const [cur, setCur] = useState(0);

  // 슬라이드가 1개 이상일 경우 자동 슬라이드 적용 가능
  // useEffect(() => {
  //   if (productProjects.length <= 1) return;
  //   const timer = setInterval(() => {
  //     setCur(c => (c + 1) % productProjects.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);

  const next = () => setCur(c => (c + 1) % productProjects.length);
  const prev = () => setCur(c => (c - 1 + productProjects.length) % productProjects.length);

  return (
    <section id="product-design" className="py-20 px-4 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="01" title="UI/UX Design" description="사용자 관점에서 문제를 정의하고, 정보 구조와 이용 흐름을 설계한 UI/UX 프로젝트입니다." />

        <div className="flex items-center gap-3 sm:gap-5 w-full">
          {/* 좌측 화살표 버튼 */}
          <button
            onClick={prev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary hover:scale-105 transition-all shrink-0"
            aria-label="이전 슬라이드"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          {/* 슬라이드 박스 */}
          <div className="relative overflow-hidden glass-card rounded-2xl sm:rounded-3xl flex-1">
            <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ transform: `translateX(-${cur * 100}%)` }}>
              {productProjects.map((p, i) => (
                <div key={i} className="min-w-full flex-col sm:flex-row flex items-stretch">
                  {/* 좌측: 이미지 */}
                  <div className="w-full sm:w-1/2 aspect-[4/3] sm:aspect-auto bg-primary/5 overflow-hidden shrink-0 border-b sm:border-b-0 sm:border-r border-border/50 flex items-center justify-center relative">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover object-top select-none transform-gpu"
                        style={{
                          imageRendering: '-webkit-optimize-contrast',
                          transform: 'translateZ(0)',
                          backfaceVisibility: 'hidden',
                          WebkitFontSmoothing: 'subpixel-antialiased'
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement?.classList.add('bg-primary/20');
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-primary/30 py-8">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        <span className="text-sm font-semibold tracking-wider">Image Area</span>
                      </div>
                    )}
                  </div>

                  {/* 우측: 설명 */}
                  <div className="pt-6 sm:pt-8 md:pt-10 px-6 sm:px-8 md:px-10 pb-6 sm:pb-8 flex flex-col justify-between bg-card sm:bg-transparent sm:w-1/2">
                    <div>
                      <div className="font-score-dream text-foreground font-bold text-xl sm:text-2xl lg:text-3xl mb-5 sm:mb-6 leading-tight tracking-tight">{p.title}</div>

                      <div className="flex flex-col gap-3.5 sm:gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-start text-sm sm:text-base text-muted-foreground leading-relaxed">
                          <span className="font-bold min-w-[60px] text-foreground shrink-0 mb-1 sm:mb-0">설명</span>
                          <span className="break-keep">{p.desc}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-start text-sm sm:text-base text-muted-foreground leading-relaxed">
                          <span className="font-bold min-w-[60px] text-foreground shrink-0 mb-1 sm:mb-0">역할</span>
                          <span>{p.role}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-start text-sm sm:text-base text-muted-foreground leading-relaxed">
                          <span className="font-bold min-w-[60px] text-foreground shrink-0 mb-1 sm:mb-0">기간</span>
                          <span>{p.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end mt-6 sm:mt-8">
                      <a href={p.link} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 w-max">
                        프로젝트 보기
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 우측 화살표 버튼 */}
          <button
            onClick={next}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary hover:scale-105 transition-all shrink-0"
            aria-label="다음 슬라이드"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        {/* 하단 슬라이드 인디케이터 (프로젝트가 2개 이상일 때 표시) */}
        {productProjects.length > 1 && (
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {productProjects.map((_, i) => (
              <button key={i} onClick={() => setCur(i)} className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${i === cur ? 'w-6 sm:w-8 bg-primary' : 'bg-primary/30 hover:bg-primary/50 w-1.5 sm:w-2'}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
