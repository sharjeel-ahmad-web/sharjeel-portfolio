'use client';

import { Moon, Sun, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#resume', label: 'Resume' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : prefersLight
        ? 'light'
        : 'dark';

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-18% 0px -52% 0px',
        threshold: [0.2, 0.5, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        <div className="glass-panel flex items-center justify-between gap-3 rounded-full px-4 py-3 sm:px-6">
          <a href="#home" className="flex shrink-0 items-center gap-3 text-sm font-semibold tracking-[0.3em] text-[var(--text)] sm:text-base">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-500 text-background">S</span>
            <span>
              SHARJEEL<span className="ml-1 text-primary">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-pill ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[color:var(--surface)] text-[var(--text)] transition hover:bg-[color:var(--surface-2)]"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a
              href="#contact"
              className="hidden rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20 md:inline-flex"
            >
              Let&apos;s Talk
            </a>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[color:var(--surface)] text-[var(--text)] transition hover:bg-[color:var(--surface-2)] md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-3 rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] p-3 shadow-2xl backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-primary/10 text-primary'
                      : 'text-[var(--muted)] hover:bg-[color:var(--surface-2)] hover:text-[var(--text)]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}