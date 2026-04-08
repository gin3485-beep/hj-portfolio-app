'use client';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-start relative px-4 md:px-12 pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(126,34,206,0.08)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,_rgba(126,34,206,0.15)_0%,_transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-10 bg-[linear-gradient(#7e22ce_1px,transparent_1px),linear-gradient(90deg,#7e22ce_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
      
      <div className="max-w-6xl w-full mx-auto flex flex-col items-start text-left z-10 mt-10">
        <div className="text-sm md:text-base text-purple-600 dark:text-purple-400 tracking-[0.3em] font-bold mb-4 flex items-center justify-start gap-4">
          <span className="block w-8 md:w-12 h-[2px] bg-purple-500"></span>
          ✦ DESIGNER & PUBLISHER
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-foreground mb-6 md:mb-8">
          CREATIVE<br />
          <span className="text-gradient">DESIGN</span><br />
          PORTFOLIO
        </h1>
        
        <p className="text-muted-foreground max-w-xs md:max-w-md lg:max-w-full leading-relaxed mb-10 md:mb-12 text-[0.9rem] md:text-base lg:text-lg break-keep flex items-center gap-2">
          아이디어를 시각으로, 경험을 디자인으로. UI/UX · Web · Print 전문 디자이너입니다.
        </p>
        
        <button onClick={scrollToContact} className="px-8 py-3.5 md:px-10 md:py-4 bg-purple-600 hover:bg-purple-500 border border-purple-500 text-white rounded-xl font-bold tracking-wide transition-all shadow-[0_4px_20px_rgba(126,34,206,0.2)] dark:shadow-[0_4px_20px_rgba(126,34,206,0.4)] hover:shadow-[0_8px_30px_rgba(126,34,206,0.4)] dark:hover:shadow-[0_8px_30px_rgba(126,34,206,0.6)] transform hover:-translate-y-1 text-sm md:text-base bg-gradient-to-r from-purple-600 to-indigo-600">
          CONTACT ME
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground text-[10px] tracking-widest font-semibold">
        SCROLL
        <div className="w-[1px] h-10 bg-gradient-to-b from-purple-500 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
