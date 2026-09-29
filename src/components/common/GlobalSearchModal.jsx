import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Radio,
  Search,
  Sparkles,
  Users,
  X,
  FileText,
  CheckCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import courses from "../../data/courses.js";
import educators from "../../data/educators.js";
import exams from "../../data/exams.js";
import { liveClasses } from "../../data/liveClassesData.js";
import { mockTests } from "../../data/testsData.js";
import { studyMaterials } from "../../data/studyMaterialData.js";

export default function GlobalSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(true); // toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.trim().toLowerCase();

  const matchedCourses = courses
    .filter(
      (c) =>
        c.title.toLowerCase().includes(normalized) ||
        c.subject?.toLowerCase().includes(normalized) ||
        c.category?.toLowerCase().includes(normalized),
    )
    .slice(0, 3);

  const matchedExams = exams
    .filter(
      (e) =>
        e.name.toLowerCase().includes(normalized) ||
        e.category.toLowerCase().includes(normalized),
    )
    .slice(0, 2);

  const matchedEducators = educators
    .filter(
      (ed) =>
        ed.name.toLowerCase().includes(normalized) ||
        ed.subject.toLowerCase().includes(normalized),
    )
    .slice(0, 2);

  const matchedLive = liveClasses
    .filter((l) => l.title.toLowerCase().includes(normalized))
    .slice(0, 2);

  const matchedTests = mockTests
    .filter((t) => t.title.toLowerCase().includes(normalized))
    .slice(0, 2);

  const matchedNotes = studyMaterials
    .filter((m) => m.title.toLowerCase().includes(normalized))
    .slice(0, 2);

  const hasResults =
    matchedCourses.length > 0 ||
    matchedExams.length > 0 ||
    matchedEducators.length > 0 ||
    matchedLive.length > 0 ||
    matchedTests.length > 0 ||
    matchedNotes.length > 0;

  function handleSelect(path) {
    navigate(path);
    onClose();
    setQuery("");
  }

  return (
    <AnimatePresence>
      <div className="global-search-backdrop" onClick={onClose}>
        <motion.div
          className="global-search-dialog"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.18 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="global-search-input-wrap">
            <Search className="search-input-icon" size={20} />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses, exams, live classes, educators, mock tests..."
              className="global-search-input"
            />
            {query && (
              <button
                className="search-clear-btn"
                onClick={() => setQuery("")}
                aria-label="Clear query"
              >
                <X size={16} />
              </button>
            )}
            <span className="search-esc-badge">ESC</span>
          </div>

          <div className="global-search-body">
            {!query.trim() ? (
              <div className="search-quick-links">
                <span className="search-group-title">Quick Explore</span>
                <div className="quick-tags-grid">
                  <button onClick={() => handleSelect("/courses")}>
                    <BookOpen size={14} /> All Courses
                  </button>
                  <button onClick={() => handleSelect("/live")}>
                    <Radio size={14} /> Live Classes
                  </button>
                  <button onClick={() => handleSelect("/ai-assistant")}>
                    <Sparkles size={14} /> AI Tutor
                  </button>
                  <button onClick={() => handleSelect("/tests")}>
                    <CheckCircle size={14} /> Mock Tests
                  </button>
                  <button onClick={() => handleSelect("/study-material")}>
                    <FileText size={14} /> Study Notes
                  </button>
                  <button onClick={() => handleSelect("/educators")}>
                    <Users size={14} /> Top Educators
                  </button>
                </div>
              </div>
            ) : hasResults ? (
              <div className="search-results-container">
                {matchedCourses.length > 0 && (
                  <div className="search-group">
                    <span className="search-group-title">Courses</span>
                    {matchedCourses.map((course) => (
                      <div
                        key={course.id}
                        className="search-result-item"
                        onClick={() => handleSelect(`/courses/${course.id}`)}
                      >
                        <BookOpen size={16} className="item-icon" />
                        <div className="item-meta">
                          <strong>{course.title}</strong>
                          <span>By {course.instructor} • {course.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {matchedLive.length > 0 && (
                  <div className="search-group">
                    <span className="search-group-title">Live Classes</span>
                    {matchedLive.map((live) => (
                      <div
                        key={live.id}
                        className="search-result-item"
                        onClick={() => handleSelect("/live")}
                      >
                        <Radio size={16} className="item-icon text-red" />
                        <div className="item-meta">
                          <strong>{live.title}</strong>
                          <span>{live.educator} • {live.scheduledFor}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {matchedTests.length > 0 && (
                  <div className="search-group">
                    <span className="search-group-title">Mock Tests</span>
                    {matchedTests.map((test) => (
                      <div
                        key={test.id}
                        className="search-result-item"
                        onClick={() => handleSelect("/tests")}
                      >
                        <CheckCircle size={16} className="item-icon text-green" />
                        <div className="item-meta">
                          <strong>{test.title}</strong>
                          <span>{test.questionCount} Questions • {test.duration} mins</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {matchedNotes.length > 0 && (
                  <div className="search-group">
                    <span className="search-group-title">Study Material</span>
                    {matchedNotes.map((note) => (
                      <div
                        key={note.id}
                        className="search-result-item"
                        onClick={() => handleSelect("/study-material")}
                      >
                        <FileText size={16} className="item-icon text-indigo" />
                        <div className="item-meta">
                          <strong>{note.title}</strong>
                          <span>{note.type} • {note.size}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {matchedExams.length > 0 && (
                  <div className="search-group">
                    <span className="search-group-title">Exams</span>
                    {matchedExams.map((exam) => (
                      <div
                        key={exam.id}
                        className="search-result-item"
                        onClick={() => handleSelect(`/exams/${exam.id}`)}
                      >
                        <GraduationCap size={16} className="item-icon" />
                        <div className="item-meta">
                          <strong>{exam.name}</strong>
                          <span>{exam.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {matchedEducators.length > 0 && (
                  <div className="search-group">
                    <span className="search-group-title">Educators</span>
                    {matchedEducators.map((ed) => (
                      <div
                        key={ed.id}
                        className="search-result-item"
                        onClick={() => handleSelect(`/educators/${ed.id}`)}
                      >
                        <Users size={16} className="item-icon" />
                        <div className="item-meta">
                          <strong>{ed.name}</strong>
                          <span>{ed.subject} Expert</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="search-empty">
                <Search size={32} className="empty-search-icon" />
                <p>No matches found for "{query}"</p>
                <span>Try checking for typos or searching by broad topics like "Physics", "Java", "JEE", or "Calculus".</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
