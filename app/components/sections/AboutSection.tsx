import { Globe, Target, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="fade-up mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <span className="section-label">About</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="glass-card rounded-[30px] p-8 md:p-10">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
              I help brands turn <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">complex ideas</span> into clear digital experiences.
            </h2>
            <div className="space-y-5 text-base leading-7 text-slate-300 md:text-lg">
              <p>
                My work focuses on creating websites that feel premium, load quickly, and guide visitors toward the next step with confidence.
              </p>
              <p>
                Whether the goal is stronger conversion, better brand perception, or smoother user journeys, I approach each project with both design discipline and business clarity.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">What clients value</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Clear communication, thoughtful execution, and a partner who treats every detail as part of the business strategy.</p>
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                icon: Target,
                title: "Business-first thinking",
                text: "Every decision is shaped around impact, clarity, and long-term scalability.",
                accent: "text-primary",
              },
              {
                icon: Globe,
                title: "Remote collaboration",
                text: "Structured communication and dependable delivery across time zones keep projects moving smoothly.",
                accent: "text-blue-400",
              },
              {
                icon: TrendingUp,
                title: "Outcome-focused delivery",
                text: "The priority is not just completion — it's measurable improvement in performance, trust, and growth.",
                accent: "text-emerald-400",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1">
                <item.icon className={`mb-4 h-7 w-7 ${item.accent}`} />
                <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}