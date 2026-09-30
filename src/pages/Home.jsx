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
import CountUp from "../components/common/CountUp.jsx";
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

function MasterclassShowcaseCard() {
  return (
    <motion.div
      className="hero-showcase-container"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="showcase-card-main">
        {/* Live Preview Media Frame */}
        <div className="showcase-media-frame">
          <img
            src="/assets/images/live-class.jpg"
            alt="Live classroom lecture preview"
            className="showcase-media-img"
          />
          <div className="showcase-media-overlay">
            <span className="live-broadcast-pill">
              <span className="live-pulse-dot" /> LIVE SESSION IN PROGRESS
            </span>
            <span className="live-viewer-count">
              <Users size={12} /> 1,480 Attending
            </span>
          </div>
        </div>

        {/* Masterclass & Instructor Info */}
        <div className="showcase-details">
          <div className="showcase-course-tag">JEE Advanced & GATE Track</div>
          <h3 className="showcase-course-title">
            Rotational Dynamics & Analytical Mechanics
          </h3>
          <p className="showcase-course-desc">
            Module 4: Moment of Inertia, Angular Momentum & Rigid Body Equilibrium.
          </p>

          <div className="showcase-educator-row">
            <div className="showcase-avatar">
              <span>AV</span>
            </div>
            <div className="showcase-educator-meta">
              <strong>Dr. Anand Verma</strong>
              <span>Ph.D., IIT Delhi • 18+ Years Faculty Experience</span>
            </div>
            <div className="showcase-rating-pill">
              <Star size={12} fill="#f59e0b" color="#f59e0b" /> 4.96
            </div>
          </div>

          <div className="showcase-action-row">
            <Link to="/live" className="button button-primary button-sm w-full">
              <Play size={14} /> Join Free Live Preview
            </Link>
          </div>
        </div>
      </div>
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
                <span className="hero-category-tag">
                  ACADEMIC EXCELLENCE & EXAM PREPARATION
                </span>
              </div>

              <h1>
                Master competitive exams with <em className="serif-accent">India’s foremost</em> academic faculty.
              </h1>

              <p className="hero-lead-text">
                Structured live masterclasses, personalized 1-on-1 doubt mentoring, and rigorous All-India test arenas engineered for JEE, NEET, UPSC, GATE & Software Engineering.
              </p>

              <div className="hero-actions">
                <Button size="lg" to="/courses" className="hero-primary-cta">
                  Explore All Programs <ArrowRight size={17} />
                </Button>
                <Button size="lg" variant="outline" to="/dashboard" className="hero-secondary-cta">
                  <LayoutDashboard size={16} /> Student Portal
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
                  <span>(48,000+ Verified Student Reviews)</span>
                </div>
                <div className="trust-verified-pill">
                  <ShieldCheck size={14} />
                  <span>Recognized Academic Curriculum</span>
                </div>
              </div>
            </motion.div>

            <MasterclassShowcaseCard />
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
            eyebrow="The R Academy Learning Framework"
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
                  src="/assets/images/exam-arena.jpg"
                  alt="National Mock Test Simulator Arena"
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

      {/* High-Impact Animated Counting Stats */}
      <section className="stats-section">
        <Container>
          <div className="stats-grid">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="stat-card"
                  key={item.label || idx}
                  variants={reveal}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`stat-icon-capsule ${item.tone}`}>
                    {Icon && <Icon size={24} />}
                  </div>
                  <div className="stat-value-wrap">
                    <strong className="stat-number">
                      <CountUp
                        end={item.end}
                        suffix={item.suffix}
                        prefix={item.prefix || ""}
                      />
                    </strong>
                    <span className="stat-label">{item.label}</span>
                    {item.sub && <small className="stat-sub">{item.sub}</small>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Core Advantages */}
      <section className="section-space why-section">
        <Container>
          <SectionHeading
            eyebrow="The R Academy Advantage"
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
