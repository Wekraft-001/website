import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoPaperPlane, IoChatbubbleEllipses, IoChatboxEllipses, IoLogoWhatsapp } from "react-icons/io5";
import knowledge from "../data/websiteKnowledge.json";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: "Peaceful greetings! 🌿 I'm your Wekraft guide.",
            sender: "bot",
          },
          {
            id: 2,
            text: "I'm here if you have any questions about our toolkits, our mission, or how we empower little minds. What can I help you with today?",
            sender: "bot",
          },
        ]);
      }, 500);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const result = generateResponse(input);
      setMessages((prev) => [
        ...prev,
        { 
          id: Date.now(), 
          text: result.text, 
          sender: "bot",
          isWhatsApp: result.isWhatsApp 
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (query) => {
    const q = query.toLowerCase().trim();
    const normalizedQ = q.replace(/[^a-z0-9]/g, ''); // for things like "skillseed" vs "skill seed"
    
    // 1. Precise Theme Matches (Highest Priority)
    // SkillSeed Match
    if (normalizedQ.includes("skillseed") || q.includes("skill seed")) {
        const faq = knowledge.faqs.find(f => f.question.toLowerCase().includes("skillseed"));
        return { text: faq ? faq.answer : knowledge.faqs[1].answer, isWhatsApp: false };
    }

    // AI / Personalized Match
    if (normalizedQ.includes("ai") || q.includes("artificial intelligence") || q.includes("personaliz")) {
        const faq = knowledge.faqs.find(f => f.id === "faq_3");
        return { text: faq?.answer || knowledge.faqs[2].answer, isWhatsApp: false };
    }

    // Wekraft Company Match
    if (q.includes("what is wekraft") || q.includes("who is wekraft") || (q.includes("wekraft") && q.length < 15)) {
        return { text: knowledge.faqs[0].answer, isWhatsApp: false };
    }

    // 2. Keyword Group Checks
    const keywords = {
      intelligence: ["intelligence", "types", "smart", "logical", "linguistic", "spatial", "naturalistic", "interpersonal", "intrapersonal", "bodily"],
      location: ["location", "where", "rwanda", "kenya", "tanzania", "address", "hq", "headquarters", "kigali"],
      mission: ["mission", "vision", "goal", "why", "purpose", "aim", "future"],
      contact: ["contact", "call", "email", "phone", "reach", "support", "talk"],
      awards: ["award", "abu dhabi", "winner", "achievement", "victory", "aim summit"]
    };

    if (keywords.intelligence.some(k => q.includes(k))) {
        return { text: `We focus on 7 types of intelligence including logical, spatial, and naturalistic. We help every child find their spark!`, isWhatsApp: false };
    }
    if (keywords.location.some(k => q.includes(k))) {
        return { text: `Our headquarters is at ${knowledge.headquarters}. We are also active in Kenya and Tanzania!`, isWhatsApp: false };
    }
    if (keywords.mission.some(k => q.includes(k))) {
        return { text: knowledge.mission, isWhatsApp: false };
    }
    if (keywords.contact.some(k => q.includes(k))) {
        return { text: `You can reach us at ${knowledge.contact.phone} or ${knowledge.contact.email}.`, isWhatsApp: false };
    }
    if (keywords.awards.some(k => q.includes(k))) {
        const faq = knowledge.faqs.find(f => f.id === "faq_8");
        return { text: faq?.answer, isWhatsApp: false };
    }

    // 3. Last Resort: Word Overlap Search across all FAQs
    const words = q.split(/\s+/).filter(w => w.length > 3);
    if (words.length > 0) {
        let bestFaq = null;
        let highestOverlap = 0;
        
        knowledge.faqs.forEach(f => {
            const overlap = words.filter(word => f.question.toLowerCase().includes(word)).length;
            if (overlap > highestOverlap) {
                highestOverlap = overlap;
                bestFaq = f;
            }
        });

        if (bestFaq && highestOverlap >= 1) {
            return { text: bestFaq.answer, isWhatsApp: false };
        }
    }

    // 4. WhatsApp Fallback
    return { 
      text: "I'm sorry, I couldn't find a precise match for that in my knowledge base. Would you like to chat with our team on WhatsApp for a quick answer?", 
      isWhatsApp: true 
    };
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 md:right-10 w-16 h-16 rounded-full bg-[#FAB548] text-white shadow-2xl z-[60] flex items-center justify-center cursor-pointer border-4 border-white"
        style={{ boxShadow: "0 10px 25px -5px rgba(250, 181, 72, 0.4)" }}
      >
        {isOpen ? <IoClose size={32} /> : <IoChatbubbleEllipses size={32} />}
        {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#FAB548] animate-ping opacity-25"></span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-5 md:right-10 w-[90vw] md:w-[400px] h-[580px] bg-white rounded-3xl shadow-2xl z-[60] flex flex-col overflow-hidden border border-gray-100"
          >
            <div className="bg-[#3C91BA] p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                   <IoChatboxEllipses size={24} />
                </div>
                <div>
                  <h3 className="font-nexa text-lg">Wekraft Assistant</h3>
                  <p className="text-white/70 text-xs font-cocon">Online | Peaceful Greetings</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#FFFBF7]">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: m.sender === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl font-cocon text-sm md:text-base ${
                      m.sender === "user"
                        ? "bg-[#FAB548] text-white rounded-tr-none shadow-orange-100 shadow-lg"
                        : "bg-white text-[#1E1E1E]/80 rounded-tl-none shadow-sm border border-gray-100"
                    }`}
                  >
                    {m.text}
                  </div>
                  
                  {m.isWhatsApp && (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      href={`https://wa.me/${knowledge.contact.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full font-cocon text-sm shadow-lg hover:bg-[#128C7E] transition-colors"
                    >
                      <IoLogoWhatsapp size={20} />
                      Chat on WhatsApp
                    </motion.a>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                    <div className="flex gap-1">
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 p-3 bg-gray-50 rounded-xl font-cocon text-sm outline-none focus:ring-2 focus:ring-[#3C91BA]/20 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                className="w-12 h-12 bg-[#3C91BA] text-white rounded-xl flex items-center justify-center shadow-lg shadow-[#3C91BA]/20"
              >
                <IoPaperPlane size={20} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
