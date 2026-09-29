import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Check, ChevronDown, Clock3, PlayCircle } from "lucide-react";
import { useState } from "react";

function lessonDuration(course) {
  const hours = Number.parseFloat(course.duration) || 1;
  const lessons = Math.max(course.lessons, 1);
  return `${Math.max(8, Math.round((hours * 60) / lessons))} min`;
}

export default function Curriculum({ course }) {
  const [openModules, setOpenModules] = useState([0]);
  const lessonTime = lessonDuration(course);
  const lessonCount = course.modules.reduce(
    (total, module) => total + module.lessons.length,
    0,
  );

  function toggleModule(index) {
    setOpenModules((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }

  return (
    <section className="detail-section curriculum-section">
      <div className="detail-section-heading">
        <div>
          <span className="eyebrow">Course content</span>
          <h2>Learn with a clear path</h2>
        </div>
        <div className="curriculum-stats">
          <span>
            <BookOpen size={15} /> {course.modules.length} Modules
          </span>
          <span>
            <Check size={15} /> {lessonCount} Lessons
          </span>
          <span>
            <Clock3 size={15} /> {course.duration}
          </span>
        </div>
      </div>
      <div className="curriculum-list">
        {course.modules.map((module, index) => {
          const isOpen = openModules.includes(index);
          return (
            <div className="curriculum-module" key={module.title}>
              <button
                className="curriculum-module-toggle"
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleModule(index)}
              >
                <span className="module-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="module-copy">
                  <strong>{module.title}</strong>
                  <small>{module.lessons.length} lessons</small>
                </span>
                <ChevronDown
                  size={18}
                  className={isOpen ? "module-chevron open" : "module-chevron"}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="curriculum-lessons"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="curriculum-lessons-inner">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div className="curriculum-lesson" key={lesson}>
                          <span className="lesson-icon">
                            <PlayCircle size={15} />
                          </span>
                          <span>{lesson}</span>
                          <small>{lessonTime}</small>
                          {lessonIndex === 0 && (
                            <span className="lesson-preview">Preview</span>
                          )}
                        </div>
                      ))}
                    </div>
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
