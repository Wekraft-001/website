import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io5";
import knowledge from "../data/websiteKnowledge.json";

const Chatbot = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = knowledge.contact.whatsapp.replace(/[^0-9]/g, "");

  return (
    <div className="fixed bottom-5 right-5 md:right-10 z-[60] flex items-center gap-3">
      {/* Tooltip Badge */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white text-[#1E1E1E] px-4 py-2 rounded-2xl shadow-xl border border-gray-100 font-cocon text-sm font-semibold whitespace-nowrap hidden sm:block"
          >
            Chat with us! 💬
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center cursor-pointer border-4 border-white relative"
        style={{ boxShadow: "0 10px 25px -5px rgba(37, 211, 102, 0.4)" }}
      >
        <IoLogoWhatsapp size={32} />
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 z-[-1]"></span>
      </motion.a>
    </div>
  );
};

export default Chatbot;
