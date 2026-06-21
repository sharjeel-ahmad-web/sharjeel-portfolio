"use client";

import { Globe, Loader2, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "4daf5baa-a809-4d7b-86fc-8d956912e26c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Thanks for reaching out. I’ll be in touch shortly.");
        event.currentTarget.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="section-shell scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="section-label">Contact</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Let&apos;s build <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">something remarkable.</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">
            If you need a website that feels polished, performs well, and supports real growth, I&apos;d be glad to help.
          </p>
          <p className="mt-3 text-sm text-slate-500">Available for select freelance projects and long-term collaborations.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            {[
              {
                href: "mailto:sharjeel.graphics.web@gmail.com",
                icon: Mail,
                title: "Email",
                text: "sharjeel.graphics.web@gmail.com",
                accent: "text-primary",
                bg: "bg-primary/10",
              },
              {
                href: "https://www.linkedin.com/in/sharjeel-ahmad-web-developer-2646361b7/",
                icon: Globe,
                title: "LinkedIn",
                text: "Connect with Sharjeel Ahmad",
                accent: "text-blue-400",
                bg: "bg-blue-500/10",
              },
              {
                icon: MapPin,
                title: "Location",
                text: "Pakistan · Available for remote & global teams",
                accent: "text-emerald-400",
                bg: "bg-emerald-500/10",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href || "#contact"}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group glass-card flex items-start gap-5 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.accent}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="glass-card relative overflow-hidden rounded-[30px] p-8 md:p-10">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/10 blur-[90px]" />
            <h3 className="relative z-10 text-2xl font-semibold text-white">Send a message</h3>

            <form onSubmit={handleSubmit} className="relative z-10 mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-white/10 bg-background px-5 py-4 text-sm text-white outline-none transition focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-background px-5 py-4 text-sm text-white outline-none transition focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project inquiry"
                  className="w-full rounded-2xl border border-white/10 bg-background px-5 py-4 text-sm text-white outline-none transition focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your goals, timeline, and what you hope to achieve."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-background px-5 py-4 text-sm text-white outline-none transition focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                />
              </div>

              {status && (
                <p className={`text-sm font-medium ${status.includes("Thanks") ? "text-emerald-400" : "text-primary"}`}>
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    Sending <Loader2 className="h-5 w-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send message <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
