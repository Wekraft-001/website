import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import knowledge from "../data/websiteKnowledge.json";
import WekraftBg from "../assets/wekraftBG.svg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="w-full py-20 px-4 md:px-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${WekraftBg})` }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#3C91BA]/50 font-nexa text-3xl md:text-5xl mb-4">
            Common Questions
          </h2>
          <p className="font-cocon text-[#1E1E1E]/60 text-lg">
            Everything you need to know about our journey and offerings.
          </p>
        </motion.div>

        <div className="space-y-4">
          {knowledge.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-dashed border-[#3C91BA]/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="p-6 flex items-center justify-between gap-4">
                <span className="font-cocon text-[#1E1E1E]/80 text-lg md:text-xl font-medium leading-tight">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FAB548]/10 flex items-center justify-center text-[#FAB548]">
                  {activeIndex === index ? (
                    <IoChevronUp size={20} />
                  ) : (
                    <IoChevronDown size={20} />
                  )}
                </div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 font-cocon text-[#1E1E1E]/60 text-base md:text-lg border-t border-dashed border-[#3C91BA]/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
