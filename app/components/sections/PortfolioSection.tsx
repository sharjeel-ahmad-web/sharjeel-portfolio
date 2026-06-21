import { ArrowRight, Bot, Code2, ExternalLink, Globe, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "High-performance e-commerce platform",
    tech: ["Next.js", "Tailwind", "Stripe"],
    type: "Web App",
    icon: <ShoppingCart className="h-8 w-8" />,
    link: "#contact",
  },
  {
    title: "AI content automation system",
    tech: ["React", "OpenAI API", "Node"],
    type: "AI Integration",
    icon: <Bot className="h-8 w-8" />,
    link: "#contact",
  },
  {
    title: "Corporate B2B portal optimization",
    tech: ["WordPress", "Elementor", "GTmetrix"],
    type: "Enterprise Site",
    icon: <Globe className="h-8 w-8" />,
    link: "#contact",
  },
  {
    title: "Immersive 3D portfolio experience",
    tech: ["Next.js", "Three.js", "Tailwind"],
    type: "Web App / 3D",
    icon: <Code2 className="h-8 w-8" />,
    link: "#contact",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="section-label">Portfolio</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Selected <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">work.</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">
            A collection of digital products engineered for speed, clarity, and measurable business growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj) => (
            <a
              key={proj.title}
              href={proj.link}
              className="group relative block aspect-[1.15/1] overflow-hidden rounded-[28px] border border-white/10 bg-background transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="absolute inset-0 z-0 flex items-center justify-center bg-card">
                <div className="h-48 w-48 rounded-full bg-primary/6 blur-[80px] transition-colors duration-700 group-hover:bg-primary/15" />
                <div className="absolute text-white/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-primary/10">
                  {proj.icon}
                </div>
              </div>

              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/75 to-transparent" />

              <div className="relative z-20 flex h-full flex-col justify-end p-7 md:p-8">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                    {proj.type}
                  </span>
                  <ExternalLink className="h-5 w-5 text-slate-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-primary md:text-3xl">
                  {proj.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {proj.tech.map((techItem) => (
                    <span key={techItem} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">
                      {techItem}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Explore project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}