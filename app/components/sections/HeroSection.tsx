import CanvasWrapper from "@/app/components/3d/CanvasWrapper";
import { IMAGE_CARD_BG } from "@/app/lib/imageTheme";
import { ArrowRight, CalendarPlus, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="section-shell relative mx-auto flex min-h-[88vh] max-w-7xl scroll-mt-28 flex-col items-center justify-between gap-14 px-4 py-16 sm:px-6 lg:flex-row lg:px-8 lg:py-24">
      <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="fade-up z-10 w-full max-w-2xl space-y-8">
        <div className="section-label w-fit">
          <Sparkles className="h-3.5 w-3.5" />
          Senior Web Developer & Product Designer
        </div>

        <div className="space-y-5">
          <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
            Design-led websites that
            <span className="block bg-gradient-to-r from-primary via-teal-300 to-blue-500 bg-clip-text text-transparent">
              earn trust instantly.
            </span>
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            I build premium, high-performing digital experiences for brands that want clarity, confidence, and a site that works as hard as their team does.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <a
            href="#case-studies"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 sm:text-base"
          >
            Explore selected work
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/10 sm:text-base"
          >
            <CalendarPlus className="h-5 w-5 text-slate-300 transition-colors group-hover:text-white" />
            Book a discovery call
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-3">
          {[
            { value: "95%+", label: "Performance mindset" },
            { value: "1 day", label: "Typical response time" },
            { value: "5+ yrs", label: "Experience shipped" },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-2xl p-4 text-center sm:text-left">
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="mt-1 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-2xl">
        <div className="absolute -left-8 top-6 h-14 w-14 rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm" />
        <div className="absolute -right-4 bottom-8 h-16 w-16 rounded-2xl border border-blue-400/20 bg-blue-400/10 backdrop-blur-sm" />
        <div
          className="float-slow relative flex h-[430px] w-full items-center justify-center overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_80px_rgba(1,7,19,0.65)] transition-all duration-500 hover:border-primary/30 lg:h-[620px]"
          style={{ backgroundColor: IMAGE_CARD_BG }}
        >
          <div className="absolute inset-0 z-10">
            <CanvasWrapper />
          </div>
          <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          <div className="absolute left-5 top-5 z-30 rounded-full border border-white/10 bg-background/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur-md">
            AI + Web Dev
          </div>
        </div>
      </div>
    </section>
  );
}