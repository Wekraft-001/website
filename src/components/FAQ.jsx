import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import knowledge from "../data/websiteKnowledge.json";
import { useLanguage } from "./LanguageContext";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { language, t } = useLanguage();
  const faqData = knowledge.faq;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FFFBF7] py-16 px-4 md:px-10 lg:px-20 font-cocon">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-[#3C91BA] text-3xl md:text-5xl font-nexa mb-4 text-center">
          {t("faq.title")}
        </h2>
        <p className="text-[#1E1E1E]/60 text-center mb-10 md:text-lg">
          {t("faq.subtitle")}
        </p>

        <div className="w-full flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border border-[#3C91BA]/20 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? "bg-white shadow-md shadow-[#FAB548]/10" : "bg-white/50"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
              >
                <span className={`font-medium md:text-lg pr-4 ${
                  openIndex === index ? "text-[#FAB548]" : "text-[#1E1E1E]/80"
                }`}>
                  {item.question[language] || item.question.en}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === index ? "bg-[#FAB548] text-white" : "bg-[#3C91BA]/10 text-[#3C91BA]"
                }`}>
                  {openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-6 md:px-6 text-[#1E1E1E]/60 leading-relaxed text-sm md:text-base border-t border-gray-100 mt-2 pt-4">
                      {item.answer[language] || item.answer.en}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
