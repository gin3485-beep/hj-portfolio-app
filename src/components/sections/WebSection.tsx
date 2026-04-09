'use client';
import SectionHeader from '../ui/SectionHeader';
import { usePopup } from '../ui/PopupProvider';
import { useState, useEffect } from 'react';

const webProjects = [
  { id: 1, icon: <img src="https://i.imgur.com/AsipFTn.png" className="w-full h-full object-cover object-top" alt="비버 배리어프리 키오스크" />, imgUrl: 'https://i.imgur.com/AsipFTn.png', label: 'Web Design', title: '비버 배리어프리 키오스크', desc: 'NIA 공식 인증 배리어프리 키오스크 웹 디자인' },
  { id: 2, icon: <img src="/images/orderqueen2.0Xskb.png" className="w-full h-full object-cover object-top" alt="SKB콜라보 이벤트" />, imgUrl: '/images/orderqueen2.0Xskb.png', label: '상세페이지', title: 'SKB콜라보 이벤트', desc: '자사의 신제품과 SKB인터넷 패키지 콜라보를 알리는 이벤트 상세페이지' },
  { id: 3, icon: '🍽️', label: 'Restaurant', title: '레스토랑 브랜딩 웹', desc: '감성적인 식음료 브랜드를 위한 웹사이트 디자인' },
  { id: 4, icon: '🚀', label: 'Startup', title: '스타트업 랜딩페이지', desc: '전환율에 최적화된 SaaS 스타트업 랜딩 페이지' },
  { id: 5, icon: '📸', label: 'Photography', title: '사진작가 웹사이트', desc: '비주얼 중심의 사진작가 개인 브랜딩 사이트' },
  { id: 6, icon: '🏥', label: 'Medical', title: '병원 홈페이지 리뉴얼', desc: '신뢰감과 접근성을 높인 의료기관 웹 리뉴얼' },
  { id: 7, icon: '🎓', label: 'Education', title: '온라인 강의 플랫폼', desc: '학습 경험 최적화를 위한 교육 플랫폼 UI 설계' },
  { id: 8, icon: '🏨', label: 'Hospitality', title: '호텔 예약 웹사이트', desc: '고급 호텔 브랜드를 위한 예약 중심 웹 디자인' },
  { id: 9, icon: '🎵', label: 'Music', title: '뮤지션 공식 사이트', desc: '아티스트 정체성을 담은 인터랙티브 뮤직 웹사이트' },
  { id: 10, icon: '🛍️', label: 'Fashion', title: '패션 브랜드 쇼핑몰', desc: '트렌디한 패션 브랜드의 온라인 스토어 디자인' },
  { id: 11, icon: '🌿', label: 'Eco', title: '친환경 브랜드 웹', desc: '지속가능성 메시지를 담은 친환경 기업 웹사이트' },
  { id: 12, icon: '🏗️', label: 'Architecture', title: '건축사무소 포트폴리오', desc: '공간과 구조를 시각화한 건축사 웹 포트폴리오' },
  { id: 13, icon: '💄', label: 'Beauty', title: '뷰티 브랜드 론칭 페이지', desc: '신규 뷰티 브랜드의 감각적인 론칭 웹페이지' },
  { id: 14, icon: '⚽', label: 'Sports', title: '스포츠 클럽 공식 사이트', desc: '역동적인 스포츠 팀 브랜딩 및 팬 커뮤니티 웹' },
  { id: 15, icon: '🔬', label: 'Tech', title: 'IT 기술 기업 웹사이트', desc: '혁신적 기술력을 표현하는 테크 기업 웹 디자인' }
];

export default function WebSection() {
  const { openPopup } = usePopup();
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  // 데스크톱에서는 3열 그리드에 맞춰 9개를 보여줍니다. 모바일은 4개.
  const initialCount = isDesktop ? 9 : 4;
  const displayedProjects = showAll ? webProjects : webProjects.slice(0, initialCount);

  return (
    <section id="web" className="py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="02" title="Web Design" description="사용자 중심의 인터페이스 설계와 경험 디자인 프로젝트입니다." />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayedProjects.map(proj => (
            <div key={proj.id} onClick={() => openPopup(proj.imgUrl ? <img src={proj.imgUrl} className="block w-full max-w-[1200px] h-auto mx-auto" alt={proj.title} /> : proj.icon)} className="glass-card cursor-pointer group flex flex-col overflow-hidden">
              <div className="h-32 md:h-44 lg:h-52 bg-primary/5 flex items-center justify-center text-4xl md:text-5xl lg:text-6xl relative overflow-hidden group-hover:bg-primary/20 transition-colors">
                {proj.icon}
              </div>
              <div className="p-3 md:p-5 bg-card/60 backdrop-blur-md border-t border-border flex-1 flex flex-col">
                <div className="text-sm md:text-base text-primary tracking-wider uppercase mb-1 md:mb-2 font-bold">{proj.label}</div>
                <div className="font-bold text-sm md:text-base text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors leading-tight line-clamp-1">{proj.title}</div>
                <div className="text-sm md:text-base text-muted-foreground leading-snug line-clamp-2">{proj.desc}</div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && webProjects.length > initialCount && (
          <div className="mt-10 md:mt-16 text-center">
            <button onClick={() => setShowAll(true)} className="px-8 py-3 md:px-10 md:py-3.5 border border-primary/50 text-primary rounded-lg text-sm md:text-base font-bold tracking-[0.2em] hover:bg-primary hover:text-white dark:hover:text-foreground transition-all uppercase">
              더보기 ＋
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
