import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Bookmark,
  CheckCircle2,
  Clock,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Timer,
  TrendingUp,
  X,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import { mockTests } from "../data/testsData.js";

const categories = ["All", "Competitive Exams", "Programming"];

export default function Tests() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeTest, setActiveTest] = useState(null); // active test object when simulator is open
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionId]: optionIndex }
  const [markedForReview, setMarkedForReview] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer effect
  useEffect(() => {
    if (!activeTest || isSubmitted || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [activeTest, isSubmitted, timeLeft]);

  function startTest(test) {
    setActiveTest(test);
    setCurrentQIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    setTimeLeft(test.duration * 60);
    setIsSubmitted(false);
  }

  function handleSelectOption(qId, optIdx) {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: optIdx,
    }));
  }

  function toggleMarkForReview(qId) {
    setMarkedForReview((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  // Calculate results
  const totalQuestions = activeTest ? activeTest.questions.length : 0;
  const answeredCount = Object.keys(userAnswers).length;
  let correctCount = 0;
  if (activeTest) {
    activeTest.questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });
  }
  const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * (activeTest?.totalMarks || 100)) : 0;
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  const filteredTests = mockTests.filter(
    (t) => activeTab === "All" || t.category === activeTab,
  );

  return (
    <div className="tests-page">
      {/* Hero Section */}
      <section className="tests-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Mock Tests</span>
          </div>

          <div className="tests-hero-inner">
            <div className="tests-hero-copy">
              <h1>Benchmark Your <em className="serif-accent">Speed & Accuracy</em> in National Arenas</h1>
              <p>
                Practice full-length national mock tests with real-time timers,
                detailed explanations, subject strength heatmaps, and percentile ranking.
              </p>

              <div className="tests-metrics-row">
                <div className="t-metric">
                  <strong>10,000+</strong>
                  <span>Curated Questions</span>
                </div>
                <div className="t-metric">
                  <strong>98.4%</strong>
                  <span>Exam Similarity Score</span>
                </div>
                <div className="t-metric">
                  <strong>Instant</strong>
                  <span>AI Performance Analytics</span>
                </div>
              </div>
            </div>

            <div className="tests-hero-visual">
              <img
                src="/assets/images/exam-arena.jpg"
                alt="National Exam Testing Simulator Arena"
                className="test-hub-img"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Tests Catalog */}
      <section className="tests-catalog-section section-space">
        <Container>
          <div className="tests-header-row">
            <div>
              <span className="eyebrow">Sharpen your timing</span>
              <h2>Available Practice Tests & Mock Series</h2>
            </div>
            <div className="tests-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`test-tab-pill ${activeTab === cat ? "active" : ""}`}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="tests-grid">
            {filteredTests.map((test) => (
              <motion.div
                key={test.id}
                className="test-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="test-card-top">
                  <Badge variant="neutral">{test.exam}</Badge>
                  <span className="test-diff-tag">{test.difficulty}</span>
                </div>

                <h3>{test.title}</h3>
                <p>{test.description}</p>

                <div className="test-stats-row">
                  <span>
                    <HelpCircle size={14} /> {test.questionCount} Questions
                  </span>
                  <span>
                    <Clock size={14} /> {test.duration} mins
                  </span>
                  <span>
                    <Award size={14} /> {test.totalMarks} Marks
                  </span>
                </div>

                <div className="test-card-footer">
                  <span className="test-attempts-count">
                    {test.attempts} students attempted
                  </span>
                  <Button size="sm" onClick={() => startTest(test)}>
                    <Timer size={14} /> Start Test Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive Test Taking Simulator Modal */}
      <AnimatePresence>
        {activeTest && (
          <div className="test-modal-backdrop">
            <motion.div
              className="test-simulator-window"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              {/* Simulator Header */}
              <div className="sim-header">
                <div className="sim-title-group">
                  <Badge variant="primary">{activeTest.exam}</Badge>
                  <h3>{activeTest.title}</h3>
                </div>

                <div className="sim-header-right">
                  {!isSubmitted ? (
                    <div className={`sim-timer ${timeLeft < 300 ? "timer-warning" : ""}`}>
                      <Timer size={18} />
                      <strong>{formatTime(timeLeft)}</strong>
                    </div>
                  ) : (
                    <Badge variant="success">Completed</Badge>
                  )}

                  <button
                    className="sim-close-btn"
                    onClick={() => setActiveTest(null)}
                    aria-label="Exit simulator"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {!isSubmitted ? (
                /* Active Question Taking View */
                <div className="sim-body-layout">
                  <div className="sim-main-question">
                    {(() => {
                      const q = activeTest.questions[currentQIndex];
                      const selectedOption = userAnswers[q.id];
                      const isMarked = markedForReview[q.id];

                      return (
                        <div className="question-content-box">
                          <div className="question-meta-bar">
                            <span>
                              Question <strong>{currentQIndex + 1}</strong> of{" "}
                              {activeTest.questions.length}
                            </span>
                            <div className="q-tags">
                              <span className="q-subject-pill">{q.subject}</span>
                              <span className="q-topic-pill">{q.topic}</span>
                            </div>
                          </div>

                          <h4 className="question-text">{q.question}</h4>

                          <div className="options-list">
                            {q.options.map((opt, oIdx) => (
                              <label
                                key={oIdx}
                                className={`option-item ${selectedOption === oIdx ? "selected" : ""}`}
                                onClick={() => handleSelectOption(q.id, oIdx)}
                              >
                                <input
                                  type="radio"
                                  name={`q-${q.id}`}
                                  checked={selectedOption === oIdx}
                                  onChange={() => handleSelectOption(q.id, oIdx)}
                                />
                                <span className="option-letter">
                                  {String.fromCharCode(65 + oIdx)}
                                </span>
                                <span className="option-label-text">{opt}</span>
                              </label>
                            ))}
                          </div>

                          <div className="question-nav-actions">
                            <button
                              className={`mark-review-btn ${isMarked ? "marked" : ""}`}
                              onClick={() => toggleMarkForReview(q.id)}
                            >
                              <Bookmark size={15} />{" "}
                              {isMarked ? "Marked for Review" : "Mark for Review"}
                            </button>

                            <div className="next-prev-group">
                              <Button
                                size="sm"
                                variant="outline"
                                disabled={currentQIndex === 0}
                                onClick={() => setCurrentQIndex((i) => i - 1)}
                              >
                                Previous
                              </Button>
                              {currentQIndex < activeTest.questions.length - 1 ? (
                                <Button
                                  size="sm"
                                  onClick={() => setCurrentQIndex((i) => i + 1)}
                                >
                                  Next Question
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  className="btn-finish"
                                  onClick={() => setIsSubmitted(true)}
                                >
                                  Submit Test
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Question Palette Sidebar */}
                  <div className="sim-palette-sidebar">
                    <h4>Question Palette</h4>
                    <div className="palette-grid">
                      {activeTest.questions.map((q, idx) => {
                        const isAnswered = userAnswers[q.id] !== undefined;
                        const isMarked = markedForReview[q.id];
                        const isCurrent = idx === currentQIndex;

                        let statusClass = "unvisited";
                        if (isCurrent) statusClass += " current";
                        if (isMarked) statusClass = "marked";
                        else if (isAnswered) statusClass = "answered";

                        return (
                          <button
                            key={q.id}
                            className={`palette-num-btn ${statusClass}`}
                            onClick={() => setCurrentQIndex(idx)}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>

                    <div className="palette-legend">
                      <div>
                        <span className="legend-dot answered" /> Answered (
                        {answeredCount})
                      </div>
                      <div>
                        <span className="legend-dot marked" /> Marked (
                        {Object.values(markedForReview).filter(Boolean).length})
                      </div>
                      <div>
                        <span className="legend-dot unvisited" /> Unanswered (
                        {totalQuestions - answeredCount})
                      </div>
                    </div>

                    <Button
                      size="md"
                      className="w-full submit-sidebar-btn"
                      onClick={() => setIsSubmitted(true)}
                    >
                      Submit Final Test
                    </Button>
                  </div>
                </div>
              ) : (
                /* Instant Score & Solution Review */
                <div className="sim-results-screen">
                  <div className="results-card-top">
                    <div className="score-ring-box">
                      <div className="score-main">
                        <strong>{score}</strong>
                        <span>/ {activeTest.totalMarks} Marks</span>
                      </div>
                    </div>

                    <div className="score-stats-grid">
                      <div className="s-stat">
                        <CheckCircle2 className="text-green" size={20} />
                        <div>
                          <strong>{correctCount}</strong>
                          <span>Correct</span>
                        </div>
                      </div>
                      <div className="s-stat">
                        <XCircle className="text-red" size={20} />
                        <div>
                          <strong>{answeredCount - correctCount}</strong>
                          <span>Incorrect</span>
                        </div>
                      </div>
                      <div className="s-stat">
                        <TrendingUp className="text-primary" size={20} />
                        <div>
                          <strong>{accuracy}%</strong>
                          <span>Accuracy</span>
                        </div>
                      </div>
                      <div className="s-stat">
                        <Sparkles className="text-accent" size={20} />
                        <div>
                          <strong>94th</strong>
                          <span>Est. Percentile</span>
                        </div>
                      </div>
                    </div>

                    <div className="results-action-buttons">
                      <Button size="md" onClick={() => startTest(activeTest)}>
                        <RotateCcw size={16} /> Retake Test
                      </Button>
                      <Button
                        size="md"
                        variant="outline"
                        onClick={() => setActiveTest(null)}
                      >
                        Back to Test Catalog
                      </Button>
                    </div>
                  </div>

                  {/* Solutions list */}
                  <div className="solutions-breakdown">
                    <h3>Comprehensive Solution Analysis</h3>
                    <div className="solutions-list">
                      {activeTest.questions.map((q, idx) => {
                        const userAns = userAnswers[q.id];
                        const isCorrect = userAns === q.correctIndex;

                        return (
                          <div
                            key={q.id}
                            className={`solution-item ${isCorrect ? "is-correct" : "is-wrong"}`}
                          >
                            <div className="sol-header">
                              <span className="q-badge">Question {idx + 1}</span>
                              <span
                                className={`sol-status-tag ${isCorrect ? "correct" : "wrong"}`}
                              >
                                {isCorrect ? "✓ Correct" : "✗ Incorrect / Skipped"}
                              </span>
                            </div>

                            <p className="sol-question">{q.question}</p>

                            <div className="sol-options-grid">
                              {q.options.map((opt, oIdx) => {
                                let optClass = "";
                                if (oIdx === q.correctIndex) optClass = "correct-opt";
                                else if (userAns === oIdx) optClass = "user-wrong-opt";

                                return (
                                  <div key={oIdx} className={`sol-opt-row ${optClass}`}>
                                    <strong>{String.fromCharCode(65 + oIdx)}.</strong> {opt}
                                    {oIdx === q.correctIndex && <span>(Correct Answer)</span>}
                                    {userAns === oIdx && oIdx !== q.correctIndex && (
                                      <span>(Your Answer)</span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>

                            <div className="sol-explanation-box">
                              <strong>💡 Detailed Explanation:</strong>
                              <p>{q.explanation}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
