import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "@/app/components/sections/AboutSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import ResumeSection from "@/app/components/sections/ResumeSection";
import PortfolioSection from "@/app/components/sections/PortfolioSection";
import CaseStudiesSection from "@/app/components/sections/CaseStudiesSection";
import ContactSection from "@/app/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ResumeSection />
      <PortfolioSection />
      <CaseStudiesSection />
      <ContactSection />
    </div>
  );
}
