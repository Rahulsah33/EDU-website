import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ExamFAQSection({ faqs = [] }) {
  const [openQuestion, setOpenQuestion] = useState(0);

  if (!faqs.length) return null;

  return (
    <section className="exam-completion-section exam-faq-section">
      <span className="eyebrow">Good to know</span>
      <h2>Frequently Asked Questions</h2>
      <div className="exam-faq-list">
        {faqs.map(({ question, answer }, index) => {
          const isOpen = openQuestion === index;
          return (
            <div className="exam-faq-item" key={question}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`exam-faq-answer-${index}`}
                onClick={() => setOpenQuestion(isOpen ? -1 : index)}
              >
                <span>{question}</span>
                <ChevronDown
                  size={18}
                  className={
                    isOpen ? "exam-faq-chevron open" : "exam-faq-chevron"
                  }
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`exam-faq-answer-${index}`}
                    className="exam-faq-answer"
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p>{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
