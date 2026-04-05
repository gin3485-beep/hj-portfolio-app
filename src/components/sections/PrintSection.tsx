'use client';
import SectionHeader from '../ui/SectionHeader';
import { usePopup } from '../ui/PopupProvider';

const printProjects = [
  { id: 1, icon: <img src="/images/bi_package_mockup.png" className="w-full h-full object-cover" alt="브랜드 아이덴티티 패키지" />, label: 'Branding', title: '브랜드 아이덴티티 패키지', desc: '명함·레터헤드·봉투를 포함한 전체 BI 패키지 디자인' },
  { id: 2, icon: '📰', label: 'Editorial', title: '사내 매거진 편집 디자인', desc: '격월 발행되는 기업 사내보 전체 레이아웃 및 편집 디자인' },
  { id: 3, icon: '🖼️', label: 'Poster', title: '문화 행사 포스터 시리즈', desc: '지역 문화 축제를 위한 포스터 및 배너 시리즈 디자인' },
  { id: 4, icon: '📦', label: 'Packaging', title: '식품 패키지 디자인', desc: '친환경 식품 브랜드의 패키지 아이덴티티 전체 제작' },
];

export default function PrintSection() {
  const { openPopup } = usePopup();

  return (
    <section id="print" className="py-20 px-4 md:px-12 relative z-10 before:absolute before:-inset-4 before:bg-[#070211] before:-z-10 before:skew-y-[2deg] before:-my-10 border-y border-purple-500/10 mt-10 mb-20 lg:mb-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="03" title="Print Design" description="오프라인 공간에서도 브랜드를 말하는 인쇄물 디자인 프로젝트입니다." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {printProjects.map(proj => (
            <div key={proj.id} onClick={() => openPopup(proj.icon)} className="glass-card cursor-pointer group flex overflow-hidden">
              <div className="w-24 md:w-32 lg:w-40 shrink-0 bg-gradient-to-br from-indigo-900/20 to-purple-800/10 flex items-center justify-center text-4xl md:text-5xl lg:text-5xl group-hover:from-indigo-800/40 group-hover:to-purple-700/30 transition-colors drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                {proj.icon}
              </div>
              <div className="p-4 md:p-6 lg:p-8 bg-black/40 border-l border-white/5 flex flex-col justify-center w-full">
                <div className="text-[10px] md:text-xs text-purple-400 tracking-widest uppercase mb-1 md:mb-2 font-bold">{proj.label}</div>
                <div className="font-bold text-[0.85rem] md:text-lg text-white mb-1 md:mb-2 group-hover:text-purple-300 transition-colors">{proj.title}</div>
                <div className="text-[11px] md:text-[0.85rem] text-gray-400 leading-snug md:leading-relaxed">{proj.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
