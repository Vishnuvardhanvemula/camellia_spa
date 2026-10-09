"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ArticleFAQ } from "@/data/spa-articles";

interface Props {
  faqs: ArticleFAQ[];
}

export function ArticleFAQAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className={`border rounded-xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-gold bg-white shadow-md"
                : "border-espresso/15 bg-white/60 hover:border-gold/50"
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <h3 className="font-serif text-lg md:text-xl text-espresso leading-snug">
                {faq.question}
              </h3>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-gold/20 text-espresso" : "bg-espresso/5 text-espresso/60"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-espresso/75 text-sm md:text-base leading-relaxed border-t border-espresso/10 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
