import { Briefcase, CheckCircle2, DownloadCloud } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative mb-14 flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
          <div className="relative z-10">
            <span className="section-label">Resume</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Professional <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">experience.</span>
            </h2>
          </div>

          <a
            href="/resume.pdf"
            download="Sharjeel-Ahmad-Resume.pdf"
            className="group relative z-10 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 md:w-auto"
          >
            <DownloadCloud className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Download resume
          </a>
        </div>

        <div className="relative ml-3 space-y-10 border-l-2 border-white/10 pl-8 md:ml-4 md:pl-12">
          {[
            {
              title: "Full Stack & AI Integration Specialist",
              company: "Independent Consultant",
              period: "2022 - Present",
              accent: "border-primary shadow-[0_0_18px_rgba(24,199,180,0.2)]",
              iconColor: "text-primary",
              bullets: [
                "Architected scalable web applications for international clients using modern React and Next.js stacks.",
                "Integrated AI workflows and automation tools that reduced repetitive work and improved team efficiency.",
                "Led performance and SEO improvements that strengthened user retention and business conversion rates.",
              ],
            },
            {
              title: "Frontend Web Developer (UI & WordPress)",
              company: "Creative Agency",
              period: "2020 - 2022",
              accent: "border-blue-500/40 shadow-[0_0_18px_rgba(59,130,246,0.1)]",
              iconColor: "text-blue-400",
              bullets: [
                "Delivered responsive websites from concept to launch for clients across multiple industries.",
                "Optimized heavy WordPress builds for speed, accessibility, and maintainability.",
                "Worked closely with design teams to translate visuals into polished, high-performing interfaces.",
              ],
            },
          ].map((item) => (
            <div key={item.title} className="group relative">
              <div className={`absolute -left-[42px] top-7 z-10 h-5 w-5 rounded-full border-4 border-background bg-primary ${item.accent} transition-transform duration-300 group-hover:scale-125 md:-left-[58px]`} />
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <div className={`mt-2 inline-flex items-center gap-2 font-medium ${item.iconColor}`}>
                      <Briefcase className="h-4 w-4" />
                      {item.company}
                    </div>
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-slate-300">
                    {item.period}
                  </span>
                </div>
                <ul className="space-y-4">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${item.iconColor}`} />
                      <span className="text-sm leading-6 text-slate-300 md:text-base">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}