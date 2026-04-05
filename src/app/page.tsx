import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import UiUxSection from '../components/sections/UiUxSection';
import WebSection from '../components/sections/WebSection';
import PrintSection from '../components/sections/PrintSection';
import ContactSection from '../components/sections/ContactSection';
import { PopupProvider } from '../components/ui/PopupProvider';

export default function Home() {
  return (
    <PopupProvider>
      <div className="flex flex-col w-full px-2 sm:px-0">
        <HeroSection />
        <AboutSection />
        <UiUxSection />
        <WebSection />
        <PrintSection />
        <ContactSection />
      </div>
    </PopupProvider>
  );
}
