import { ArrowRight, Bot, Code, Layout } from "lucide-react";

const services = [
  {
    title: "Frontend development",
    desc: "High-converting websites and web apps built with React, Next.js, and performance-first architecture.",
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    title: "UI/UX & WordPress",
    desc: "Premium design systems, polished interfaces, and flexible WordPress builds that stay easy to manage.",
    icon: <Layout className="h-8 w-8 text-blue-400" />,
  },
  {
    title: "AI integrations",
    desc: "Smarter product experiences through AI workflows, automation, and seamless integrations that save time.",
    icon: <Bot className="h-8 w-8 text-emerald-400" />,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label">Services</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Built to solve <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">real business needs.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((srv) => (
            <a
              key={srv.title}
              href="#contact"
              className="group glass-card rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-background/50 p-4">{srv.icon}</div>
              <h3 className="mb-3 text-2xl font-semibold text-white">{srv.title}</h3>
              <p className="mb-6 text-sm leading-6 text-slate-400">{srv.desc}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Explore this service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
