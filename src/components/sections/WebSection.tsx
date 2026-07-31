'use client';
import SectionHeader from '../ui/SectionHeader';
import { usePopup } from '../ui/PopupProvider';
import { useState, useEffect } from 'react';

const webProjects = [
  { id: 1, icon: <img src="/images/web_design01.png" className="w-full h-full object-cover object-top" alt="SKB콜라보" />, imgUrl: '/images/web_design01.png', label: '상세페이지', title: 'SKB 콜라보 이벤트 랜딩페이지', desc: '자사의 제품과 SKB인터넷 패키지 콜라보를 알리는 이벤트 상세페이지' },
  // { id: 2, icon: <img src="/images/web_design04.png" className="w-full h-full object-cover object-top" alt="소상공인 스마트상점" />, imgUrl: '/images/web_design04.png', label: '상세페이지', title: '정부지원사업 상세페이지', desc: '스마트상점 도입 사업의 혜택을 알리고 신청을 유도하기 위해 제작된 상세페이지' },
  { id: 2, icon: <img src="/images/web_design02.png" className="w-full h-full object-cover object-top" alt="신제품출시" />, imgUrl: '/images/web_design02.png', label: '상세페이지', title: '자사 제품 소개 상세페이지', desc: '배리어프리 키오스크의 차별화된 기능과 사용자 편의성을 소개하는 상세페이지' },
  { id: 3, icon: <img src="/images/web_design03.png" className="w-full h-full object-cover object-top" alt="신제품출시" />, imgUrl: '/images/web_design03.png', label: '상세페이지', title: '자사 신규 제품 홍보 프로모션 페이지', desc: '새롭게 출시된 자사 제품을 소개하고 초기 판매를 유도하는 상세페이지' },
  { id: 4, icon: <img src="/images/web_design04.png" className="w-full h-full object-cover object-top" alt="신제품출시" />, imgUrl: '/images/web_design04.png', label: '홈페이지 팝업', title: 'SKB 콜라보 프로모션 팝업', desc: '자사 제품 구매 고객에게 SKB 인터넷 할인 혜택을 홍보하는 이벤트 팝업' },
  { id: 5, icon: <img src="/images/web_design09.png" className="w-full h-full object-cover object-top" alt="신제품출시" />, imgUrl: '/images/web_design09.png', label: '키오스크 화면', title: '키오스크 화면 UIUX디자인', desc: '메인 화면부터 주문 화면까지 사용자 중심으로 구성한 키오스크 UIUX 디자인' },
  { id: 6, icon: <img src="/images/web_design05.png" className="w-full h-full object-cover object-top" alt="신제품출시" />, imgUrl: '/images/web_design05.png', label: '테이블오더 화면', title: '네이버 리뷰 이벤트 안내 화면', desc: '매장에서 진행하는 리뷰 이벤트와 참여 혜택을 안내하는 테이블오더 광고 화면' },
  { id: 7, icon: <img src="/images/web_design06.png" className="w-full h-full object-cover object-top" alt="신제품출시" />, imgUrl: '/images/web_design06.png', label: 'DID 디스플레이', title: '음료 메뉴판 디스플레이', desc: '매장에서 판매하는 음료 메뉴와 가격 정보를 한눈에 확인할 수 있도록 제작한 DID 화면' },
  { id: 8, icon: <img src="/images/web_design07.png" className="w-full h-full object-cover object-top" alt="신제품출시" />, imgUrl: '/images/web_design07.png', label: '인스타그램 썸네일', title: '인스타그램 콘텐츠 디자인', desc: '전문적인 견적분석을 통해 비용 절감과 고객 맞춤형 컨설팅을 제공하는 홍보 콘텐츠' },
  { id: 9, icon: <img src="/images/web_design08.png" className="w-full h-full object-cover object-top" alt="신제품출시" />, imgUrl: '/images/web_design08.png', label: '블로그 썸네일', title: '블로그 썸네일 디자인', desc: '최신 외식 트렌드와 인기 메뉴를 쉽게 전달하는 블로그 썸네일' },

  // { id: 10, icon: '🌿', label: 'Eco', title: '친환경 브랜드 웹', desc: '지속가능성 메시지를 담은 친환경 기업 웹사이트' },
  // { id: 11, icon: '🏗️', label: 'Architecture', title: '건축사무소 포트폴리오', desc: '공간과 구조를 시각화한 건축사 웹 포트폴리오' },
  // { id: 12, icon: '💄', label: 'Beauty', title: '뷰티 브랜드 론칭 페이지', desc: '신규 뷰티 브랜드의 감각적인 론칭 웹페이지' },
  // { id: 13, icon: '⚽', label: 'Sports', title: '스포츠 클럽 공식 사이트', desc: '역동적인 스포츠 팀 브랜딩 및 팬 커뮤니티 웹' },
  // { id: 15, icon: '🔬', label: 'Tech', title: 'IT 기술 기업 웹사이트', desc: '혁신적 기술력을 표현하는 테크 기업 웹 디자인' }
];

export default function WebSection() {
  const { openPopup } = usePopup();
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  // 데스크톱에서는 3열 그리드에 맞춰 9개를 보여줍니다. 모바일은 4개.
  const initialCount = isDesktop ? 6 : 4;
  const displayedProjects = showAll ? webProjects : webProjects.slice(0, initialCount);

  return (
    <section id="web" className="py-20 px-4 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="02" title="Web & Contents Design" description="제품과 프로모션 정보를 사용 환경에 맞게 구조화하고, 브랜드의 시각적 일관성을 유지한 웹·콘텐츠 디자인입니다." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {displayedProjects.map(proj => (
            <div key={proj.id} onClick={() => openPopup(proj.imgUrl ? <img src={proj.imgUrl} className="block w-[1200px] max-w-full h-auto mx-auto" alt={proj.title} /> : proj.icon)} className="glass-card cursor-pointer group flex flex-col overflow-hidden">
              <div className="h-32 sm:h-44 md:h-52 bg-primary/5 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl relative overflow-hidden group-hover:bg-primary/20 transition-colors">
                {proj.icon}
              </div>
              <div className="p-3 sm:p-5 bg-card/60 backdrop-blur-md border-t border-border flex-1 flex flex-col">
                <div className="text-xs text-primary tracking-wider uppercase mb-[5px] font-bold">{proj.label}</div>
                <div className="font-bold text-sm sm:text-base text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors leading-tight line-clamp-1">{proj.title}</div>
                <div className="text-sm sm:text-base text-muted-foreground leading-snug line-clamp-2">{proj.desc}</div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && webProjects.length > initialCount && (
          <div className="mt-10 sm:mt-16 text-center">
            <button onClick={() => setShowAll(true)} className="px-8 py-3 sm:px-10 sm:py-3.5 border border-primary/50 text-primary rounded-[10px] text-sm sm:text-base font-bold tracking-[0.2em] hover:bg-primary hover:text-white dark:hover:text-foreground transition-all uppercase">
              더보기 ＋
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
