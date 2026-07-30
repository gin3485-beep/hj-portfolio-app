'use client';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-start relative px-4 sm:px-12 pt-4">
      {/* Background gradients removed */}

      
      <div className="max-w-6xl w-full mx-auto flex flex-col items-start text-left z-10">
        <div className="text-sm sm:text-base text-primary dark:text-primary tracking-[0.3em] font-bold mb-4 flex items-center justify-start gap-4">
          <span className="block w-8 sm:w-12 h-[2px] bg-primary"></span>
          ✦ UI/UX DESIGNER
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[1.2] tracking-tighter text-foreground mb-6 sm:mb-8">
          <span className="text-gradient">PRODUCT<br />& UI/UX</span><br />
          PORTFOLIO
        </h1>
        
        <p className="text-muted-foreground max-w-xs sm:max-w-md md:max-w-full leading-relaxed mb-10 sm:mb-12 text-[0.9rem] sm:text-base md:text-lg break-keep">
          아이디어를 시각으로, 경험을 디자인으로.<br />
          사용자 경험과 실제 구현을 함께 고민하는 디자이너입니다
        </p>
        
        {/* <button onClick={scrollToContact} className="px-8 py-3.5 sm:px-10 sm:py-4 bg-primary hover:bg-primary border border-primary text-white rounded-[10px] font-bold tracking-wide transition-all    dark: transform hover:-translate-y-1 text-sm sm:text-base bg-primary">
          CONTACT ME
        </button> */}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground text-sm tracking-widest font-semibold">
        SCROLL
        <div className="w-[1px] h-10 bg-primary/50 animate-pulse"></div>
      </div>
    </section>
  );
}
