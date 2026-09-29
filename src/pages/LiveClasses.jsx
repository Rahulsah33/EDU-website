import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  Calendar,
  Clock,
  Download,
  MessageSquare,
  Play,
  Radio,
  Send,
  Sparkles,
  ThumbsUp,
  Users,
  Video,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import Toast from "../components/common/Toast.jsx";
import { liveClasses } from "../data/liveClassesData.js";

const categories = ["All", "Technology", "Competitive Exams", "Programming"];

export default function LiveClasses() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedLive, setSelectedLive] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { user: "Priya S.", text: "Is the slide deck available?", time: "7:31 PM" },
    { user: "Rohan M.", text: "Can we use Redis Cluster for this?", time: "7:32 PM" },
    { user: "Aarav (Educator)", text: "Yes! We will cover cluster partitioning next.", time: "7:32 PM" },
  ]);
  const [inputChat, setInputChat] = useState("");
  const [likes, setLikes] = useState(248);
  const [hasLiked, setHasLiked] = useState(false);

  const filteredClasses = liveClasses.filter(
    (cls) => activeTab === "All" || cls.category === activeTab,
  );

  const activeLive = liveClasses.find((cls) => cls.isLive) || liveClasses[0];

  function handleSendChat(e) {
    e.preventDefault();
    if (!inputChat.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      {
        user: "You",
        text: inputChat.trim(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setInputChat("");
  }

  function handleLike() {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  }

  function triggerToast(msg) {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  }

  return (
    <div className="live-classes-page">
      {/* Hero Banner */}
      <section className="live-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Live Classes</span>
          </div>

          <div className="live-hero-inner">
            <div className="live-hero-info">
              <div className="live-badge-row">
                <span className="live-pulsing-badge">
                  <span className="pulse-dot" /> LIVE STREAMING
                </span>
                <Badge variant="primary">{activeLive.category}</Badge>
              </div>
              <h1>Interactive Live Masterclasses</h1>
              <p>
                Learn in real-time with India's top educators. Ask live doubts,
                participate in polls, and collaborate with 1M+ active learners.
              </p>

              <div className="live-stats-bar">
                <div className="stat-item">
                  <Radio className="text-red" size={18} />
                  <strong>12 Daily Streams</strong>
                </div>
                <div className="stat-item">
                  <Users className="text-primary" size={18} />
                  <strong>24,500+ Active Now</strong>
                </div>
                <div className="stat-item">
                  <MessageSquare className="text-accent" size={18} />
                  <strong>Instant Doubt Resolution</strong>
                </div>
              </div>
            </div>

            {/* Featured Active Live Card */}
            <div className="live-featured-card">
              <div className="live-card-media">
                <img
                  src={activeLive.thumbnail}
                  alt={activeLive.title}
                  className="live-card-img"
                />
                <div className="live-media-overlay">
                  <span className="live-chip">
                    <Radio size={12} className="pulse-red" /> {activeLive.viewers} watching
                  </span>
                  <button
                    className="live-play-btn"
                    onClick={() => setSelectedLive(activeLive)}
                    aria-label="Join Live Class"
                  >
                    <Play size={24} fill="currentColor" />
                  </button>
                </div>
              </div>

              <div className="live-card-details">
                <span className="live-exam-tag">{activeLive.exam}</span>
                <h3>{activeLive.title}</h3>
                <div className="live-educator-row">
                  <img
                    src={activeLive.educatorAvatar}
                    alt={activeLive.educator}
                    className="live-avatar-thumb"
                  />
                  <div>
                    <strong>{activeLive.educator}</strong>
                    <span>{activeLive.educatorRole}</span>
                  </div>
                </div>
                <div className="live-card-actions">
                  <Button
                    size="md"
                    className="w-full"
                    onClick={() => setSelectedLive(activeLive)}
                  >
                    <Video size={16} /> Enter Live Classroom
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Schedule Tabs and Grid */}
      <section className="live-schedule-section section-space">
        <Container>
          <div className="live-section-header">
            <div>
              <span className="eyebrow">Interactive broadcast schedule</span>
              <h2>Upcoming & Scheduled Masterclasses</h2>
            </div>
            <div className="live-filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`live-tab-btn ${activeTab === cat ? "active" : ""}`}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="live-grid">
            {filteredClasses.map((item) => (
              <motion.div
                key={item.id}
                className={`live-schedule-card ${item.isLive ? "is-live-card" : ""}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="schedule-media-wrap">
                  <img src={item.thumbnail} alt={item.title} />
                  <span className={item.isLive ? "live-status-pill live" : "live-status-pill upcoming"}>
                    {item.isLive ? "● LIVE NOW" : "UPCOMING"}
                  </span>
                  <span className="schedule-duration">
                    <Clock size={12} /> {item.duration}
                  </span>
                </div>

                <div className="schedule-body">
                  <div className="schedule-meta-top">
                    <Badge variant="neutral">{item.exam}</Badge>
                    <span className="schedule-time">
                      <Calendar size={13} /> {item.scheduledFor}
                    </span>
                  </div>

                  <h4>{item.title}</h4>

                  <div className="schedule-educator">
                    <img src={item.educatorAvatar} alt={item.educator} />
                    <div>
                      <strong>{item.educator}</strong>
                      <small>{item.educatorRole}</small>
                    </div>
                  </div>

                  <div className="schedule-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>

                  <div className="schedule-footer">
                    {item.isLive ? (
                      <Button
                        size="sm"
                        className="w-full"
                        onClick={() => setSelectedLive(item)}
                      >
                        <Video size={14} /> Join Now ({item.viewers} watching)
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={() => triggerToast(`Reminder set for "${item.title}"!`)}
                      >
                        <Bell size={14} /> Set Class Reminder
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recorded Vault Highlights */}
      <section className="live-vault-section section-space">
        <Container>
          <div className="live-vault-box">
            <div className="vault-copy">
              <Badge variant="primary">Missed a class?</Badge>
              <h2>Watch 500+ Full HD Lecture Recordings</h2>
              <p>
                Access searchable transcriptions, high-yield PDF notes, and
                chapter timestamps for every live session across all exams.
              </p>
              <div className="vault-actions">
                <Button to="/courses" size="lg">
                  Explore Course Library
                </Button>
                <Button
                  to="/study-material"
                  variant="outline"
                  size="lg"
                >
                  <Download size={16} /> Download Lecture Notes
                </Button>
              </div>
            </div>
            <div className="vault-visual">
              <img
                src="/assets/images/study-resources.jpg"
                alt="Vault library"
                className="vault-img"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Live Classroom Modal */}
      <AnimatePresence>
        {selectedLive && (
          <div className="live-modal-backdrop" onClick={() => setSelectedLive(null)}>
            <motion.div
              className="live-modal-window"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="live-modal-header">
                <div className="modal-title-wrap">
                  <span className="pulse-red-tag">● LIVE INTERACTION</span>
                  <h3>{selectedLive.title}</h3>
                </div>
                <button
                  className="close-modal-btn"
                  onClick={() => setSelectedLive(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="live-modal-layout">
                {/* Main Video Screen */}
                <div className="live-stream-area">
                  <div className="mock-stream-frame">
                    <img
                      src="/assets/images/live-class.jpg"
                      alt="Live classroom view"
                      className="stream-mock-video"
                    />
                    <div className="stream-overlay-controls">
                      <span className="stream-badge">
                        <Users size={14} /> {selectedLive.viewers + 1} students connected
                      </span>
                      <div className="stream-reaction-bar">
                        <button
                          className={`like-btn ${hasLiked ? "liked" : ""}`}
                          onClick={handleLike}
                        >
                          <ThumbsUp size={16} /> {likes}
                        </button>
                        <span className="stream-hd-tag">1080p HD</span>
                      </div>
                    </div>
                  </div>

                  <div className="stream-info-bar">
                    <div className="educator-meta-badge">
                      <img
                        src={selectedLive.educatorAvatar}
                        alt={selectedLive.educator}
                      />
                      <div>
                        <strong>{selectedLive.educator}</strong>
                        <span>{selectedLive.educatorRole}</span>
                      </div>
                    </div>
                    <div className="stream-tool-buttons">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => triggerToast("PDF Lecture Notes downloaded!")}
                      >
                        <Download size={14} /> Download Live Notes
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => triggerToast("Doubt queued for educator live review!")}
                      >
                        <Sparkles size={14} /> Raise Live Hand
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Live Chat Sidebar */}
                <div className="live-chat-panel">
                  <div className="chat-header">
                    <h4>Live Q&A Chat</h4>
                    <span className="chat-status-dot">● Active</span>
                  </div>

                  <div className="chat-messages-container">
                    {chatMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`chat-bubble ${msg.user === "You" ? "own-bubble" : ""}`}
                      >
                        <div className="chat-user-line">
                          <strong>{msg.user}</strong>
                          <small>{msg.time}</small>
                        </div>
                        <p>{msg.text}</p>
                      </div>
                    ))}
                  </div>

                  <form className="chat-input-form" onSubmit={handleSendChat}>
                    <input
                      type="text"
                      placeholder="Ask educator a question..."
                      value={inputChat}
                      onChange={(e) => setInputChat(e.target.value)}
                    />
                    <button type="submit" aria-label="Send message">
                      <Send size={16} />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast */}
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage("")} />}
    </div>
  );
}
