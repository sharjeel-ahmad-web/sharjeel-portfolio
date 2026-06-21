"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types define kar rahe hain
type Message = {
    role: 'user' | 'ai' | 'system';
    content: string;
};

type ChatContextType = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'ai', content: "Hi! I'm Sharjeel's AI assistant. Ask me anything about his experience or projects." }
    ]);

    return (
        <ChatContext.Provider value={{ isOpen, setIsOpen, messages, setMessages }}>
            {children}
        </ChatContext.Provider>
    );
}

// Custom hook taake components easily data access kar sakein
export function useChat() {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
}