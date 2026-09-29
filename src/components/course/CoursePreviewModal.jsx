import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CoursePreviewModal({ course, isOpen, onClose }) {
  const [playing, setPlaying] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = document.querySelectorAll(
        ".course-preview-modal button",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="course-modal-overlay"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="course-preview-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-modal-title"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="course-modal-header">
              <div>
                <span className="eyebrow">Course preview</span>
                <h2 id="preview-modal-title">{course.title}</h2>
              </div>
              <button
                className="course-modal-close"
                type="button"
                aria-label="Close preview"
                ref={closeButtonRef}
                onClick={onClose}
              >
                <X size={19} />
              </button>
            </div>
            <div className="mock-video">
              <img src={course.thumbnail} alt="" />
              <div className="mock-video-shade" />
              <button
                className="mock-video-play"
                type="button"
                onClick={() => setPlaying((current) => !current)}
                aria-label={playing ? "Pause preview" : "Play preview"}
              >
                {playing ? (
                  <Pause size={23} fill="currentColor" />
                ) : (
                  <Play size={23} fill="currentColor" />
                )}
              </button>
              <span className="mock-video-label">
                {playing ? "Playing preview" : "Preview lesson"}
              </span>
            </div>
            <div className="course-modal-lesson">
              <div>
                <span className="tile-label">Lesson 01</span>
                <strong>
                  {course.modules[0]?.lessons[0] || "Course introduction"}
                </strong>
              </div>
              <span>{course.duration}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
