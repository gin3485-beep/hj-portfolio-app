'use client';
import SectionHeader from '../ui/SectionHeader';
import { usePopup } from '../ui/PopupProvider';
import { useState, useEffect } from 'react';

const printProjects = [
  {
    id: 1, icon: <img src="/images/sum_print_design02.png" className="w-full h-full object-cover" alt="문화 행사 포스터" />,
    imgUrl: '/images/print_design02.png', label: 'leaflet', title: '박람회 특가 리플릿', desc: '박람회 참가를 위한 리플릿 인쇄 디자인'
  },
  { id: 2, icon: '📰', label: 'Editorial', title: '사내 매거진 편집 디자인', desc: '격월 발행되는 기업 사내보 전체 레이아웃 및 편집 디자인' },
  { id: 3, icon: '🖼️', label: 'Poster', title: '문화 행사 포스터 시리즈', desc: '지역 문화 축제를 위한 포스터 및 배너 시리즈 디자인' },
  { id: 4, icon: '📦', label: 'Packaging', title: '식품 패키지 디자인', desc: '친환경 식품 브랜드의 패키지 아이덴티티 전체 제작' },
  { id: 5, icon: '📇', label: 'Business Card', title: '명함 세트 디자인', desc: '기업의 첫인상을 돋보이게 하는 프리미엄 명함 제작' },
  { id: 6, icon: '🏷️', label: 'Label', title: '브랜드 라벨 패키징', desc: '주류 브랜드 리뉴얼을 위한 감각적인 라벨 디자인' },
];

export default function PrintSection() {
  const { openPopup } = usePopup();
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  const initialCount = isDesktop ? 4 : 2;
  const displayedProjects = showAll ? printProjects : printProjects.slice(0, initialCount);

  return (
    <section id="print" className="py-20 px-4 sm:px-12 mt-10 mb-20 md:mb-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="03" title="Print Design" description="오프라인 공간에서도 브랜드를 말하는 인쇄물 디자인 프로젝트입니다." />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {displayedProjects.map(proj => (
            <div key={proj.id} onClick={() => openPopup(proj.imgUrl ? <img src={proj.imgUrl} className="block w-[1200px] max-w-full h-auto mx-auto" alt={proj.title} /> : proj.icon)} className="glass-card cursor-pointer group flex overflow-hidden">
              <div className="w-24 sm:w-32 md:w-40 shrink-0 bg-primary/5 flex items-center justify-center text-4xl sm:text-5xl md:text-5xl group-hover:bg-primary/20 transition-colors  ">
                {proj.icon}
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-card sm:bg-transparent border-l border-border flex flex-col justify-center w-full">
                <div className="text-xs text-primary tracking-wider uppercase mb-[5px] font-bold">{proj.label}</div>
                <div className="font-bold text-sm sm:text-lg text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">{proj.title}</div>
                <div className="text-sm sm:text-base text-muted-foreground leading-snug sm:leading-relaxed">{proj.desc}</div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && printProjects.length > initialCount && (
          <div className="mt-10 sm:mt-12 text-center">
            <button onClick={() => setShowAll(true)} className="px-8 py-3 sm:px-10 sm:py-3.5 border border-primary/50 text-primary rounded-[10px] text-sm sm:text-base font-bold tracking-[0.2em] hover:bg-primary hover:text-white dark:hover:text-foreground transition-all uppercase">
              더보기 ＋
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
