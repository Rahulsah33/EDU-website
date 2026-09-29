import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const questions = [
  [
    "Is this course beginner friendly?",
    "The course level is shown above, and the requirements section highlights the knowledge that will help you get the most from it.",
  ],
  [
    "How long do I have access?",
    "You will be able to learn from the course at your own pace. Access details will be finalized with enrollment in a later milestone.",
  ],
  [
    "Are practice tests included?",
    "Practice activities are planned for the learning experience. The full assessment experience will be added in a later milestone.",
  ],
  [
    "Are downloadable notes included?",
    "Supporting notes are planned alongside the course lessons and will be included when the learning experience is completed.",
  ],
  [
    "Is a certificate provided?",
    "Certificate details will be announced when the course completion and enrollment flow is implemented.",
  ],
];

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section className="detail-section faq-section">
      <span className="eyebrow">Good to know</span>
      <h2>Frequently asked questions</h2>
      <div className="faq-list">
        {questions.map(([question, answer], index) => {
          const isOpen = openQuestion === index;
          return (
            <div className="faq-item" key={question}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenQuestion(isOpen ? -1 : index)}
              >
                <span>{question}</span>
                <ChevronDown
                  size={18}
                  className={isOpen ? "faq-chevron open" : "faq-chevron"}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq-answer"
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
