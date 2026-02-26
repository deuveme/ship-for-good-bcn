"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "Anyone who wants to help! Developers, designers, product managers, data scientists, marketers — if you have skills that can help a non-profit, you belong here. No previous hackathon experience required.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "Not at all. While we need builders who can code, we equally need people with design, strategy, communication, and project management skills. Non-profits also participate by presenting their challenges and working with teams.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes, Ship for Good is completely free to attend. We provide the venue, food, drinks, and Wi-Fi. All we ask is that you bring your skills and enthusiasm.",
  },
  {
    question: "Do I need to attend both days?",
    answer:
      "We strongly recommend attending both. April 17 (evening) is when non-profits pitch and teams form — it's essential context. April 18 is the full build day. If you can only make one day, prioritize the 18th.",
  },
  {
    question: "What should I bring?",
    answer:
      "Your laptop, charger, and any tools you normally use to build. We'll have power strips, Wi-Fi, and monitors available. Optional: bring a sweater — AC can be cold.",
  },
  {
    question: "What happens to the projects after the hackathon?",
    answer:
      "Our goal is to ship solutions that non-profits can actually use. Teams are encouraged to continue working with their non-profit after the event. We'll facilitate handoffs and follow-ups.",
  },
  {
    question: "Where exactly is the venue?",
    answer:
      "42 Barcelona, located in the Telefónica Building in Barcelona. We'll share the exact address and directions closer to the event.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className="text-sm font-medium pr-8 group-hover:text-accent transition-colors">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-foreground-muted shrink-0 text-lg"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-foreground-muted leading-relaxed pb-5 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-accent mb-3">
            FAQ
          </p>
          <h2 className="font-pixel text-4xl sm:text-5xl tracking-tight">
            Common questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="border-t border-border"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
