import { Star, Quote } from "lucide-react";

export default function ClientsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Sharjeel bridges the gap between engineering and business. His AI integration using MCP entirely automated our tier-1 support. His communication and code quality are world-class.",
      name: "Tech Director",
      role: "SaaS Startup (USA)",
    },
    {
      id: 2,
      quote: "We had a bulky WordPress site that was losing us sales. Sharjeel rebuilt it headless with Next.js. Our GTmetrix score went from a 'D' to an 'A', and conversions spiked.",
      name: "E-Commerce Founder",
      role: "Retail Brand (UK)",
    },
    {
      id: 3,
      quote: "Extremely reliable developer. He mapped out our complex relational database perfectly and delivered the Laravel API endpoints ahead of schedule. A true professional.",
      name: "Project Manager",
      role: "Digital Agency (Europe)",
    }
  ];

  return (
    <section id="clients" className="scroll-mt-28 py-24 max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Global Teams.</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg md:text-xl font-light leading-relaxed">
        My goal is to de-risk technical hiring for remote clients. Here is what business owners and technical leads say about our collaborations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="group bg-card border border-white/10 p-8 md:p-10 rounded-3xl relative flex flex-col justify-between hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.1)] overflow-hidden"
          >
            {/* Subtle background glow on hover */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1 text-yellow-500">
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                </div>
                <Quote className="w-8 h-8 text-white/5" />
              </div>
              
              <p className="text-gray-300 mb-8 italic leading-relaxed text-base md:text-lg font-light relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>

            <div className="border-t border-white/10 pt-6 relative z-10">
              <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
              <p className="text-sm text-primary font-medium mt-1">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}