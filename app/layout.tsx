import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AIChatWidget from "@/app/components/ai/AIChatWidget";
import Navbar from "@/app/components/layout/Navbar";
import { ChatProvider } from "@/lib/ChatContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sharjeel Ahmad | Senior Web Developer & AI Integration Specialist",
  description: "Premium portfolio showcasing web development, conversion-focused design, and AI integration solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <ChatProvider>
          <Navbar />

          <main className="flex-grow pt-24 pb-12">
            {children}
          </main>

          <footer className="border-t border-white/10 py-8 text-sm text-gray-500">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <p>© {new Date().getFullYear()} Sharjeel Ahmad</p>
              <div className="flex items-center gap-4">
                <a href="#home" className="transition hover:text-white">Home</a>
                <a href="#services" className="transition hover:text-white">Services</a>
                <a href="#contact" className="transition hover:text-white">Contact</a>
              </div>
            </div>
          </footer>

          <AIChatWidget />
        </ChatProvider>
      </body>
    </html>
  );
}
