import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  Check,
  CheckCircle2,
  Clock3,
  Flame,
  GraduationCap,
  LayoutDashboard,
  Play,
  Radio,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import { exams, reasons, stats } from "../data/homeData.js";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const topInstitutions = [
  "IIT Bombay",
  "AIIMS New Delhi",
  "Google",
  "Microsoft",
  "IIT Delhi",
  "ISRO",
  "Amazon",
  "McKinsey & Co",
];

function ExecutiveCommandCenter() {
  return (
    <motion.div
      className="dashboard-wrap"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <div className="dashboard-glow" />
      <motion.div
        className="dashboard-card"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Top Header of Command Center */}
        <div className="dash-top">
          <div>
            <div className="dash-badge-row">
              <span className="live-pulse-dot" />
              <span className="dash-kicker">Learning Command Center</span>
            </div>
            <h3>Hyy👋,  Aanya</h3>
          </div>
          <div className="avatar-wrap">
            <div className="avatar">A</div>
            <span className="avatar-status-dot" title="Active learner" />
          </div>
        </div>

        {/* Real-time Progress & Percentile Gauge */}
        <div className="progress-panel">
          <div className="progress-copy">
            <div>
              <span className="progress-title">Target Syllabus Mastery</span>
              <div className="progress-sub">JEE Advanced & Full-Stack Track</div>
            </div>
            <div className="progress-value-block">
              <strong>75%</strong>
              <span className="percentile-pill">Top 2.5%</span>
            </div>
          </div>
          <div className="progress-track">
            <span style={{ width: "78%" }} />
          </div>
          <div className="progress-foot">
            <span>Predicted Score: 284 / 300</span>
            <span className="trend-stat">
              <TrendingUp size={13} /> +14 pts this week
            </span>
          </div>
        </div>

        {/* Metric Tiles */}
        <div className="dash-grid">
          <div className="dash-tile course-tile">
            <span className="tile-label">Active Masterclass</span>
            <strong>Advanced System Architecture & Cloud</strong>
            <div className="course-meta">
              <span className="course-icon-badge">
                <BookOpen size={12} />
              </span>
              <span>Module 4 of 8 • Prof. Verma</span>
            </div>
          </div>
          <div className="dash-tile goal-tile">
            <span className="tile-label">Daily Problem Target</span>
            <div className="goal-ring-wrap">
              <div className="goal-ring">
                <strong>
                  18<span>/20</span>
                </strong>
              </div>
            </div>
            <span className="goal-status">
              <CheckCircle2 size={12} /> 90% Completed
            </span>
          </div>
        </div>

        {/* Streak & Consistency */}
        <div className="streak-row">
          <div className="streak-icon-fire">
            <Flame size={16} />
          </div>
          <div className="streak-details">
            <span className="tile-label">Study Streak & Consistency</span>
            <strong>18 Consecutive Days Active</strong>
          </div>
          <div className="streak-bars">
            <i className="active-bar" />
            <i className="active-bar" />
            <i className="active-bar" />
            <i className="active-bar" />
            <i className="active-bar" />
            <i className="active-bar" />
            <i className="active-bar" />
          </div>
        </div>

        {/* Live Masterclass Broadcast Alert */}
        <div className="upcoming-row">
          <div className="play-icon-live">
            <Radio size={14} className="live-broadcast-icon" />
          </div>
          <div className="upcoming-details">
            <span className="tile-label">Live Session Starting</span>
            <strong>Microservices & Kubernetes</strong>
          </div>
          <span className="class-time-badge">
            <Clock3 size={13} /> In 15 min
          </span>
        </div>

        {/* AI Cognitive Copilot Recommendation */}
        <div className="ai-row">
          <div className="ai-icon-chip">
            <Sparkles size={15} />
          </div>
          <div>
            <span className="tile-label">AI Diagnostic Recommendation</span>
            <p>High weightage: 3 questions predicted from Graph Algorithms & Dynamic Programming.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <div className="hero-grid">
            <motion.div className="hero-copy" variants={reveal}>
              <div className="hero-eyebrow-wrap">
                <span className="hero-eyebrow-badge">
                  <ShieldCheck size={14} className="badge-shield-icon" />
                  India's Digital Academy & Exam Prep Platform
                </span>
              </div>

              <h1>
                Turn Your Goals
                <br />
                <em>Into Reality.</em>
                <br />
                <span>With <em>RR Edu.</em></span>
              </h1>

              <p className="hero-lead-text">
                Prepare with top 1% educators, real-time AI doubt solvers, and
                national-level test simulators designed for JEE, NEET, UPSC, GATE & Software Engineering.
              </p>

              <div className="hero-actions">
                <Button size="lg" to="/courses" className="hero-primary-cta">
                  Explore All Programs <ArrowRight size={17} />
                </Button>
                <Button size="lg" variant="outline" to="/dashboard" className="hero-secondary-cta">
                  <LayoutDashboard size={16} /> Open Workspace
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="trusted-row">
                <div className="trust-stars-wrap">
                  <div className="star-icons-row">
                    <Star size={14} fill="#f59e0b" color="#f59e0b" />
                    <Star size={14} fill="#f59e0b" color="#f59e0b" />
                    <Star size={14} fill="#f59e0b" color="#f59e0b" />
                    <Star size={14} fill="#f59e0b" color="#f59e0b" />
                    <Star size={14} fill="#f59e0b" color="#f59e0b" />
                  </div>
                  <strong>4.9 / 5</strong>
                  <span>(48,000+ Student Reviews)</span>
                </div>
                <div className="trust-live-pill">
                  <span className="trust-pulse" />
                  <span>14,820 Active Learners Right Now</span>
                </div>
              </div>
            </motion.div>

            <ExecutiveCommandCenter />
          </div>
        </Container>
      </section>

      {/* Corporate & University Trust Marquee */}
      <section className="partners-strip">
        <Container>
          <div className="partners-wrap">
            <span className="partners-label">
              Our Alumni Study & Work at World-Class Institutions:
            </span>
            <div className="partners-list">
              {topInstitutions.map((name) => (
                <div className="partner-badge-item" key={name}>
                  <GraduationCap size={15} className="partner-icon" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Exam Categories */}
      <section className="exam-section section-space">
        <Container>
          <SectionHeading
            eyebrow="Specialized Academic & Career Tracks"
            title="Choose Your Preparation Discipline"
            description="Comprehensive, structured roadmaps crafted by India's top subject matter experts."
          />
          <div className="exam-grid">
            {exams.map(({ name, description, icon: Icon }, index) => (
              <motion.div
                className="exam-card"
                key={name}
                variants={reveal}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.18 }}
              >
                <div className={`exam-icon icon-tone-${index % 4}`}>
                  <Icon size={19} />
                </div>
                <div>
                  <div className="exam-card-track-header">
                    <h3>{name}</h3>
                    <span className="exam-track-tag">Comprehensive</span>
                  </div>
                  <p>{description}</p>
                </div>
                <ArrowRight className="card-arrow" size={16} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tri-Pillar Learning Ecosystem Showcase */}
      <section className="features-showcase-section section-space">
        <Container>
          <SectionHeading
            eyebrow="The RR Edu Technology Stack"
            title="Engineered for Measurable Academic Excellence"
            description="A cohesive ecosystem uniting live masterclasses, multimodal AI problem solving, and real test arenas."
          />

          <div className="features-showcase-grid">
            {/* Feature 1: Live Classes */}
            <motion.div
              className="feature-showcase-card feature-wide"
              variants={reveal}
              whileHover={{ y: -4 }}
            >
              <div className="f-card-content">
                <span className="live-pill-tag">
                  <span className="pulse-dot" /> LIVE DAILY MASTERCLASSES
                </span>
                <h3>High-Definition Interactive Broadcasts</h3>
                <p>
                  Learn directly from celebrated faculty members. Participate in live
                  polls, receive real-time answers to your questions, and review detailed digital class whiteboards.
                </p>
                <div className="f-action-link">
                  <Link to="/live" className="button button-primary button-sm">
                    View Live Batch Schedule <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
              <div className="f-card-image-wrap">
                <img
                  src="/assets/images/live-class.jpg"
                  alt="Live masterclass interactive stream"
                  className="f-card-img"
                />
              </div>
            </motion.div>

            {/* Feature 2: 24/7 AI Tutor */}
            <motion.div
              className="feature-showcase-card"
              variants={reveal}
              whileHover={{ y: -4 }}
            >
              <div className="f-card-image-wrap f-card-avatar-wrap">
                <img
                  src="/assets/images/ai-tutor.jpg"
                  alt="AI Tutor Avatar"
                  className="f-card-img"
                />
              </div>
              <div className="f-card-content">
                <Badge variant="primary">Cognitive AI Tutor</Badge>
                <h3>Multimodal Step-by-Step Solver</h3>
                <p>
                  Get instant explanations for complex equations, system architecture problems, and conceptual doubts anytime, day or night.
                </p>
                <div className="f-action-link">
                  <Link to="/ai-assistant" className="button button-outline button-sm">
                    Launch AI Tutor <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Smart Mock Tests */}
            <motion.div
              className="feature-showcase-card"
              variants={reveal}
              whileHover={{ y: -4 }}
            >
              <div className="f-card-image-wrap">
                <img
                  src="/assets/images/study-resources.jpg"
                  alt="Mock Test Simulator"
                  className="f-card-img"
                />
              </div>
              <div className="f-card-content">
                <Badge variant="success">All-India Test Series</Badge>
                <h3>National Percentile Exam Arena</h3>
                <p>
                  Experience the exact pressure of actual test environments with
                  countdown timers, negative marking logic, and chapter-wise accuracy heatmaps.
                </p>
                <div className="f-action-link">
                  <Link to="/tests" className="button button-outline button-sm">
                    Enter Test Arena <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Verified Stats */}
      <section className="stats-section">
        <Container>
          <div className="stats-grid">
            {stats.map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Advantages */}
      <section className="section-space why-section">
        <Container>
          <SectionHeading
            eyebrow="The RR Edu Advantage"
            title="Built for Clarity, Speed, and Retention"
            description="Our scientific methodology turns study time into measurable ranking improvements."
          />
          <div className="reason-grid">
            {reasons.map(({ title, description, icon: Icon }, index) => (
              <motion.article
                className="reason-card"
                key={title}
                variants={reveal}
                whileHover={{ y: -4 }}
              >
                <span className="reason-number">0{index + 1}</span>
                <div className="reason-icon">
                  <Icon size={21} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowRight className="reason-arrow" size={17} />
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Study Materials & Knowledge Repository */}
      <section className="course-preview section-space">
        <Container>
          <div className="course-preview-inner">
            <div>
              <Badge variant="success">Comprehensive Knowledge Vault</Badge>
              <h2>High-yield formula handbooks & revision roadmaps.</h2>
              <p>
                Download color-coded formula cheat-sheets, solved previous 10-year
                examination papers, and concise chapter summary notes curated by top faculty.
              </p>
              <div style={{ marginTop: "24px" }}>
                <Button to="/study-material" size="md">
                  Browse Study Notes & PYQs <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            <div className="course-placeholder">
              <img
                src="/assets/images/hero-ai.jpg"
                alt="Study Notes Preview"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Professional Call To Action Banner */}
      <section className="cta-section">
        <Container>
          <div className="cta-inner">
            <div className="cta-spark">
              <Award size={20} />
            </div>
            <h2>Start Your Academic Journey Today</h2>
            <p>
              Join 1,200,000+ ambitious scholars preparing with India's most advanced digital learning platform.
            </p>
            <div className="cta-buttons-wrap">
              <Button size="lg" to="/courses">
                Explore Available Courses <ArrowRight size={17} />
              </Button>
              <Button size="lg" variant="outline" to="/dashboard">
                Access Student Workspace
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  );
}
