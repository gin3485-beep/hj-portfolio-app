'use client';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-12 lg:mb-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">
        
        {/* Left Column - Contact Info */}
        <div className="md:w-5/12 flex flex-col">
          <div className="flex items-center md:justify-start gap-4 mb-3">
            <span className="block w-6 md:w-10 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500/10 rounded-full"></span>
            <span className="text-[11px] md:text-xs text-purple-400 tracking-[0.2em] font-black uppercase opacity-90">
              PART 04
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4 md:mb-6">Contact</h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-[1.05rem] mb-6 md:mb-10">
            프로젝트 문의, 협업 제안, 채용 관련 연락 모두 환영합니다.<br className="hidden md:block"/> 빠르게 답변 드리겠습니다.
          </p>
          
          <div className="flex flex-col gap-5 md:gap-6 mt-2 glass-card p-5 md:p-8 bg-black/20">
            <div className="flex items-center gap-5">
              <span className="text-2xl md:text-3xl text-center w-8 md:w-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">✉️</span>
              <div>
                <div className="text-[9px] md:text-[10px] text-purple-400 tracking-widest font-bold uppercase mb-1">Email</div>
                <div className="font-semibold text-white text-[0.85rem] md:text-base">hh3430@naver.com</div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/5"></div>
            <div className="flex items-center gap-5">
              <span className="text-2xl md:text-3xl text-center w-8 md:w-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">📞</span>
              <div>
                <div className="text-[9px] md:text-[10px] text-purple-400 tracking-widest font-bold uppercase mb-1">Phone</div>
                <div className="font-semibold text-white text-[0.85rem] md:text-base">010-7677-1866</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="md:w-7/12 glass-card p-6 md:p-10 border-t-[3px] border-t-purple-600">
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div className="flex flex-col gap-1.5 md:gap-2">
                <label className="text-[10px] md:text-xs text-purple-400 font-bold uppercase tracking-widest">Name</label>
                <input type="text" placeholder="이름을 입력하세요" className="w-full bg-[#0a0415]/60 border border-purple-500/20 text-white rounded-lg lg:rounded-xl p-3 md:p-4 text-sm md:text-base focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-600 shadow-inner" />
              </div>
              <div className="flex flex-col gap-1.5 md:gap-2">
                <label className="text-[10px] md:text-xs text-purple-400 font-bold uppercase tracking-widest">Phone</label>
                <input type="tel" placeholder="핸드폰 번호" className="w-full bg-[#0a0415]/60 border border-purple-500/20 text-white rounded-lg lg:rounded-xl p-3 md:p-4 text-sm md:text-base focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-600 shadow-inner" />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 md:gap-2">
              <label className="text-[10px] md:text-xs text-purple-400 font-bold uppercase tracking-widest">Project type</label>
              <select defaultValue="" className="w-full bg-[#0a0415]/60 border border-purple-500/20 text-white rounded-lg lg:rounded-xl p-3 md:p-4 text-sm md:text-base focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all shadow-inner appearance-none cursor-pointer">
                <option value="" disabled className="text-gray-500">문의 유형을 선택하세요</option>
                <option value="uiux">UI/UX 디자인</option>
                <option value="pub">퍼블리싱</option>
                <option value="web">웹 디자인</option>
                <option value="print">인쇄물 디자인</option>
                <option value="etc">기타</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-1.5 md:gap-2">
              <label className="text-[10px] md:text-xs text-purple-400 font-bold uppercase tracking-widest">Message</label>
              <textarea placeholder="프로젝트 내용이나 문의사항을 적어주세요." className="w-full bg-[#0a0415]/60 border border-purple-500/20 text-white rounded-lg lg:rounded-xl p-3 md:p-4 text-sm md:text-base h-28 md:h-36 resize-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-600 shadow-inner"></textarea>
            </div>
            
            <div className="flex items-start gap-3 mt-2 mb-2 md:mt-3 md:mb-3">
              <input type="checkbox" id="privacyCheck" className="mt-1 flex-shrink-0 w-4 h-4 accent-purple-500 rounded border-purple-500/50 hover:ring-2 ring-purple-500/30 cursor-pointer transition-all" />
              <label htmlFor="privacyCheck" className="text-[11px] md:text-xs text-gray-400 leading-relaxed max-w-full cursor-pointer">
                <span className="text-purple-400 font-semibold">개인정보 수집·이용 동의</span><br/>
                수집된 개인정보(이름, 연락처)는 문의 답변 목적으로만 사용되며, 답변 완료 후 즉시 파기됩니다.
              </label>
            </div>
            
            <button className="w-full mt-2 py-3.5 md:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold tracking-widest transition-all shadow-[0_4px_15px_rgba(126,34,206,0.4)] hover:shadow-[0_6px_20px_rgba(126,34,206,0.6)] text-[0.85rem] md:text-base hover:-translate-y-0.5">
              문의하기
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
