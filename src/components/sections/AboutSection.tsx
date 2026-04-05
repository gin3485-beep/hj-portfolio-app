import SectionHeader from '../ui/SectionHeader';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-12">
      <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
        <SectionHeader 
          label="About Me" 
          title="장희진입니다." 
          description="UI/UX 설계부터 웹, 인쇄물까지 폭넓은 시각 언어로 브랜드의 가치를 완성합니다."
        />
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
          
          {/* Left Column (Profile & Skills) */}
          <div className="flex flex-col gap-6 md:w-1/3 shrink-0">
            {/* Profile Card */}
            <div className="glass-card p-5 md:p-8 flex flex-row md:flex-col items-center gap-5 md:gap-6 text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 shrink-0 bg-purple-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center text-3xl md:text-5xl shadow-inner">🎨</div>
              <div className="w-full text-left md:text-center">
                <div className="text-base md:text-xl font-bold text-white mb-2 md:mb-4">장희진</div>
                <div className="flex flex-col gap-1.5 md:gap-2 text-[0.8rem] md:text-sm text-gray-400">
                  <div className="flex items-center md:justify-center gap-2"><span className="text-purple-400 w-4 text-center">🎂</span> 1994.06.10</div>
                  <div className="flex items-center md:justify-center gap-2"><span className="text-purple-400 w-4 text-center">✉️</span> hh3430@naver.com</div>
                  <div className="flex items-center md:justify-center gap-2"><span className="text-purple-400 w-4 text-center">📞</span> 010-7677-1866</div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="glass-card p-5 md:p-8 md:mt-0 mt-2">
              <div className="text-[10px] md:text-xs text-purple-400 tracking-widest uppercase mb-4 font-bold md:text-center">🛠 스킬</div>
              <div className="flex flex-wrap md:justify-center gap-2">
                {['Figma', 'Illustrator', 'Photoshop', 'HTML/CSS', 'jQuery'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 border border-white/10 rounded-lg text-[0.8rem] text-gray-300 font-semibold hover:bg-purple-600 hover:text-white hover:border-purple-500 cursor-default transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Edu & Career) */}
          <div className="flex flex-col gap-6 md:w-2/3">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Education */}
              <div className="glass-card p-5 md:p-8">
                <div className="text-[10px] md:text-xs text-purple-400 tracking-widest uppercase mb-5 font-bold">🎓 학력</div>
                <div className="flex flex-col gap-4">
                  <div className="border-b border-white/5 pb-4">
                    <div className="font-bold text-sm md:text-base text-white mb-1">OO고등학교 졸업</div>
                    <div className="text-[10px] md:text-[11px] text-purple-400 font-semibold tracking-wider">2013</div>
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base text-white mb-1">OO대학교 졸업</div>
                    <div className="text-[10px] md:text-[11px] text-purple-400 font-semibold tracking-wider">2016</div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="glass-card p-5 md:p-8">
                <div className="text-[10px] md:text-xs text-purple-400 tracking-widest uppercase mb-5 font-bold">📜 자격증</div>
                <div className="flex flex-col gap-4">
                  <div className="border-b border-white/5 pb-4">
                    <div className="font-bold text-sm md:text-base text-white mb-1">컴퓨터그래픽스 운용기능사</div>
                    <div className="text-[10px] md:text-[11px] text-purple-400 font-semibold tracking-wider">2020.09</div>
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base text-white mb-1">웹디자인 기능사</div>
                    <div className="text-[10px] md:text-[11px] text-purple-400 font-semibold tracking-wider">2020.12</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career */}
            <div className="glass-card p-6 md:p-8 flex-1">
              <div className="text-[10px] md:text-xs text-purple-400 tracking-widest uppercase mb-6 font-bold">💼 경력</div>
              <div className="relative pl-6 border-l-[3px] border-purple-500/20 flex flex-col gap-8">
                
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-[#0d0714]"></div>
                  <div className="font-bold text-[0.95rem] md:text-lg text-white mb-1">엔프라미스</div>
                  <div className="text-[0.75rem] md:text-sm text-gray-400 mb-2">2022.02 – 2022.12 <span className="font-light">(퇴사사유: 인수합병)</span></div>
                  <span className="inline-block px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded text-[10px] md:text-[11px] text-purple-300 font-semibold">약 11개월</span>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-[#0d0714]"></div>
                  <div className="font-bold text-[0.95rem] md:text-lg text-white mb-1">오더퀸</div>
                  <div className="text-[0.75rem] md:text-sm text-gray-400 mb-2">2022.12 – 2023.10 <span className="font-light">(퇴사사유: 인수합병)</span></div>
                  <span className="inline-block px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded text-[10px] md:text-[11px] text-purple-300 font-semibold">약 10개월</span>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-[#0d0714] shadow-[0_0_15px_rgba(126,34,206,1)]"></div>
                  <div className="font-bold text-[0.95rem] md:text-lg text-white mb-1">비버웍스</div>
                  <div className="text-[0.75rem] md:text-sm text-gray-400 mb-2">2023.10 – 현재</div>
                  <span className="inline-block px-2 py-0.5 bg-purple-500 border border-purple-400 rounded text-[10px] md:text-[11px] text-white font-semibold shadow-lg shadow-purple-500/50">재직중</span>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
