"use client";

import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react'; // 'User' icon ko remove kar diya kyunki hum custom SVG use kar rahe hain
import { useChat } from '@/lib/ChatContext';
import Image from 'next/image';

export default function AIChatWidget() {
    const { isOpen, setIsOpen, messages, setMessages } = useChat();
    const [inputValue, setInputValue] = useState('');
    const [isLoadingBackend, setIsLoadingBackend] = useState(false);
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://sharjeel-ai-backend.vercel.app';

    // Naye messages aane par auto-scroll karne ke liye reference
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    // Auto-scroll logic
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoadingBackend]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = inputValue.trim();
        const historyForApi = [...messages, { role: 'user', content: userMsg }];

        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInputValue('');
        setIsLoadingBackend(true);

        try {
            const response = await fetch(`${apiBaseUrl}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMsg,
                    history: historyForApi.filter(m => m.role !== 'system')
                })
            });

            const data = await response.json();

            if (data.reply) {
                setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
            } else {
                setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I had trouble connecting." }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', content: "Error: Could not reach backend." }]);
        }
        setIsLoadingBackend(false);
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">

            {/* Chat Window - Highly Responsive & Glassmorphism Design */}
            {isOpen && (
                <div className="w-[calc(100vw-2rem)] sm:w-[400px] h-[75vh] max-h-[600px] mb-4 bg-gray-900/85 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-bottom-10 duration-300 ease-out origin-bottom-right">

                    {/* Chat Header */}
                    <div className="px-5 py-4 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-b border-white/10 flex justify-between items-center shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-1.5">
                                <Image
                                    src="/images/robot-icon.svg"
                                    alt="Bot"
                                    width={30}
                                    height={30}
                                    className="object-contain drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]"
                                />
                                {/* Online Status Dot */}
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-gray-900 animate-pulse"></span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-sm tracking-wide text-white">Sharjeel's AI Agent</span>
                                <span className="text-xs text-emerald-400">Online</span>
                            </div>
                        </div>
                        <button onClick={toggleChat} className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:rotate-90 duration-300">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Messages Area */}
                    <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex gap-3 max-w-[85%] animate-in slide-in-from-bottom-4 fade-in duration-300 ease-out ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>

                                {/* Message Avatar */}
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'user'
                                        // User Icon Container
                                        ? 'bg-gray-800/50 border border-fuchsia-500/30'
                                        // Bot Icon Container
                                        : 'bg-white/10 border border-white/20 p-1.5 animate-[bounce_3s_infinite]'
                                    }`}>
                                    {msg.role === 'user' ? (
                                        // --- CUSTOM ANIMATED USER SVG ICON ---
                                        <svg viewBox="0 0 100 100" className="w-8 h-8">
                                            <defs>
                                                <linearGradient id="userGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#f472b6" /> {/* Pink */}
                                                    <stop offset="100%" stopColor="#a855f7" /> {/* Purple */}
                                                </linearGradient>
                                            </defs>
                                            {/* Spinning Outer Rings for Tech Look */}
                                            <circle cx="50" cy="50" r="42" fill="none" stroke="url(#userGrad)" strokeWidth="4" strokeDasharray="50 20" className="animate-[spin_4s_linear_infinite] origin-center" />
                                            <circle cx="50" cy="50" r="48" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="15 40" className="animate-[spin_3s_linear_infinite_reverse] origin-center opacity-50" />
                                            {/* User Head (Pulsing) */}
                                            <circle cx="50" cy="38" r="14" fill="url(#userGrad)" className="animate-pulse" />
                                            {/* User Body */}
                                            <path d="M 25 85 C 25 60 75 60 75 85" fill="none" stroke="url(#userGrad)" strokeWidth="12" strokeLinecap="round" />
                                        </svg>
                                    ) : (
                                        <Image
                                            src="/images/robot-icon.svg"
                                            alt="Bot"
                                            width={24}
                                            height={24}
                                            className="object-contain"
                                        />
                                    )}
                                </div>

                                {/* Message Bubble */}
                                <div className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-md ${msg.role === 'user'
                                        // User Message: Vibrant colorful gradient, glowing shadow, and breathing pulse animation
                                        ? 'bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white rounded-tr-none shadow-[0_0_15px_rgba(192,38,211,0.4)] animate-[pulse_3s_ease-in-out_infinite]'
                                        // Bot Message: Glassmorphism look
                                        : 'bg-white/10 text-gray-100 rounded-tl-none border border-white/5 backdrop-blur-sm'
                                    }`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {/* Loading Indicator (Professional Typing Effect) */}
                        {isLoadingBackend && (
                            <div className="flex gap-3 max-w-[85%] self-start animate-in fade-in duration-300">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 border border-white/20 p-1.5 shadow-lg">
                                    <Image
                                        src="/images/robot-icon.svg"
                                        alt="Bot Typing"
                                        width={24}
                                        height={24}
                                        className="object-contain opacity-70"
                                    />
                                </div>
                                <div className="p-4 rounded-2xl bg-white/10 rounded-tl-none border border-white/5 backdrop-blur-sm flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-white/10 bg-gray-900/60 backdrop-blur-xl">
                        <form onSubmit={handleSendMessage} className="relative flex items-center group/form">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message here..."
                                className="w-full bg-black/40 border border-white/10 rounded-full py-3.5 pl-5 pr-14 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all shadow-inner"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isLoadingBackend}
                                className="absolute right-2 p-2.5 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white rounded-full hover:shadow-[0_0_15px_rgba(192,38,211,0.5)] disabled:opacity-50 disabled:hover:shadow-none transition-all hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <Send className="w-4 h-4 ml-0.5" />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* --- MAIN TRIGGER BUTTON --- */}
            <div className="relative group">

                {/* Subtle Pulse Glow in background */}
                {!isOpen && (
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse transition-opacity duration-500 pointer-events-none group-hover:opacity-100 opacity-60"></div>
                )}

                {/* Animated Background Gradient Ring */}
                <div className={`absolute -inset-1.5 rounded-full blur-md transition-all duration-700 ${isOpen
                        ? 'opacity-0 bg-transparent'
                        : 'opacity-70 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-pulse group-hover:opacity-100 group-hover:blur-lg'
                    }`}></div>

                {/* The Actual Button */}
                <button
                    onClick={toggleChat}
                    className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] border-2 overflow-hidden
                    ${isOpen
                            ? 'bg-gray-800 border-gray-600 text-gray-400 hover:text-red-400 hover:border-red-400 hover:bg-gray-700 rotate-180 scale-90 shadow-none'
                            : 'bg-gray-900/80 backdrop-blur-md border-white/20 hover:scale-110 shadow-2xl shadow-blue-900/40 hover:-translate-y-1'
                        }`}
                >
                    {/* Your Custom Image Icon */}
                    <div className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${isOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'
                        }`}>
                        <Image
                            src="/images/robot-icon.svg"
                            alt="AI Bot"
                            width={50}
                            height={50}
                            priority
                            className="object-contain drop-shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                        />
                    </div>

                    {/* Standard X Icon for Close */}
                    <div className={`absolute transition-all duration-500 flex items-center justify-center ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
                        }`}>
                        <X className="w-8 h-8 sm:w-10 sm:h-10 block drop-shadow-md" />
                    </div>
                </button>
            </div>

        </div>
    );
}