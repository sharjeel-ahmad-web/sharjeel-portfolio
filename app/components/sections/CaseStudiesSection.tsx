import { caseStudies } from "@/data/case-studies";
import { ArrowRight, TrendingUp, Terminal, Zap } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="scroll-mt-28 py-24 max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Business Impact.</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          I don&apos;t just build websites; I engineer solutions. Here is a selection of recent projects where I leveraged modern tech stacks (React, Next.js, AI) to overcome complex architectural challenges and deliver measurable ROI.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {caseStudies.map((project) => (
          <div
            key={project.id}
            className="relative bg-card border border-white/10 rounded-3xl p-8 md:p-10 hover:border-primary/40 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(20,184,166,0.1)] overflow-hidden flex flex-col"
          >
            {/* Subtle gradient glow in the background of the card on hover */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {/* Header: Title & Role */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                {project.title}
              </h3>
              <span className="shrink-0 text-xs font-bold px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary uppercase tracking-wider">
                {project.role}
              </span>
            </div>

            {/* Body: Problem, Solution, Impact */}
            <div className="space-y-8 mb-8 flex-grow relative z-10">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                  <Terminal className="w-4 h-4 text-gray-400" /> The Challenge
                </h4>
                <p className="text-gray-300 text-base leading-relaxed font-light">{project.problem}</p>
              </div>
              
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                  <Zap className="w-4 h-4 text-yellow-500" /> The Architecture
                </h4>
                <p className="text-gray-300 text-base leading-relaxed font-light">{project.solution}</p>
              </div>
              
              {/* Highlighted Business Impact Box */}
              <div className="bg-gradient-to-br from-primary/10 to-blue-500/5 border border-primary/20 p-5 rounded-2xl flex gap-4 items-start">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Measurable Impact</h4>
                  <p className="text-white text-base font-medium leading-relaxed">{project.impact}</p>
                </div>
              </div>
            </div>

            {/* Footer: Tech Stack & CTA */}
            <div className="relative z-10 mt-auto">
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-medium px-3 py-1.5 bg-background rounded-lg text-gray-400 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-primary transition-colors w-max"
              >
                Discuss This Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}