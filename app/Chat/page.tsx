"use client";

import { SidebarDemo } from "@/components/Layout/Sidebar";
import Typewriter from "@/components/Typewriter";
import { useState, useRef, useEffect } from "react";
import { ChatInput } from "@/components/ui/chat-input";
import { Paperclip, Mic, CornerDownLeft} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AiReplyCard from "@/components/AiReplyCard";

// Message type definition
type Message = {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: string;
  tokens?: number;
};

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [showTypewriter, setShowTypewriter] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Hide typewriter when first message is sent
    if (showTypewriter) {
      setShowTypewriter(false);
    }

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: message,
      sender: "user",
      timestamp: formatTimestamp(new Date()),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage(""); // Clear input after sending

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: `ai-${Date.now()}`,
        content:
          " Hi Pavan, how can I help you today....",
        sender: "ai",
        timestamp: formatTimestamp(new Date()),
        tokens: 32,
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const formatTimestamp = (date: Date): string => {
    return `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")} ${date.getHours() >= 12 ? "PM" : "AM"}`;
  };

  return (
    <SidebarDemo>
      <div className="flex flex-col flex-1 p-2 overflow-y-auto ">
        <div className="flex h-full w-full flex-1 flex-col rounded-tl-xl border border-neutral-200 bg-[#E8EAE5] p-1 md:p-3 ">
          {/* Messages container - scrollable */}
          <div
            className="flex-1 overflow-y-auto mb-2 pr-1 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <AnimatePresence>
              {showTypewriter ? (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex items-center justify-center"
                >
                  <Typewriter />
                </motion.div>
              ) : (
                <motion.div
                  className="space-y-4 pb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      {msg.sender === "user" ? (
                        <div className="flex flex-col items-start mb-4">
                          <div className="flex items-center mb-0.5">
                            <div className="w-6 h-6 rounded-full bg-[#96BF8A] mr-1.5 flex items-center justify-center text-white text-sm font-semibold">
                              P
                            </div>
                            <span className="font-medium text-sm">Pavan Kumar</span>
                            <span className="text-xs text-gray-500 ml-1.5">
                              {msg.timestamp}
                            </span>
                          </div>
                          <div className="pl-8 text-sm text-gray-800">
                            {msg.content}
                          </div>
                        </div>
                      ) : (
                        // AI message with card
                        <AiReplyCard
                          key={msg.id}
                          content={msg.content}
                          timestamp={msg.timestamp}
                        />
                      )}
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Chat input component - fixed at bottom */}
          <div className="mt-auto">
            <form
              className="w-full relative rounded-lg border bg-white focus-within:ring-1 focus-within:ring-ring p-1"
              onSubmit={handleSubmit}
            >
              <ChatInput
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="min-h-8 resize-none overflow-hidden rounded-lg bg-background border-0 p-2 shadow-none focus-visible:ring-0 text-base"
              />

              <div className="flex items-center p-2 pt-0">
                <button
                  type="button"
                  className="hover:bg-accent rounded-md p-1.5 transition"
                >
                  <Paperclip className="size-4" />
                  <span className="sr-only">Attach file</span>
                </button>

                <button
                  type="button"
                  className="hover:bg-accent rounded-md p-1.5 transition"
                >
                  <Mic className="size-4" />
                  <span className="sr-only">Use Microphone</span>
                </button>

                {/* Custom lit-up button */}
                <button type="submit" className="p-[2px] relative ml-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="flex items-center gap-1 px-6 py-1.5 bg-[#00412E] rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-sm">
                    Send Message
                    <CornerDownLeft className="size-3" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SidebarDemo>
  );
};

// Add this global style to your CSS file or global stylesheet
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }

export default Chat;
