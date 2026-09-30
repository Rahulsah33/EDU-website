import {
  Award,
  Heart,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";

const milestones = [
  {
    year: "2023",
    title: "Founded with a Mission",
    desc: "Started by a passionate team of educators and engineers from IITs and IISc to democratize elite-grade exam coaching.",
  },
  {
    year: "2024",
    title: "100,000+ Active Learners",
    desc: "Expanded across JEE, NEET, UPSC, and Software Engineering, achieving an average test score boost of 28%.",
  },
  {
    year: "2025",
    title: "AI Study Tutor Launch",
    desc: "Integrated intelligent real-time doubt solving and adaptive practice simulators to customize every learner's journey.",
  },
  {
    year: "2026",
    title: "1 Million Milestone",
    desc: "Now empowering over 1,000,000 learners with live interactive classes, formula handbooks, and mentorship across India.",
  },
];

const values = [
  {
    icon: Target,
    title: "Clarity Over Complexity",
    desc: "We deconstruct intimidating concepts into crystal-clear mental models and intuitive analogies.",
  },
  {
    icon: Zap,
    title: "Active Learning",
    desc: "Passive watching is replaced with live interactive coding, rapid quizzes, and hands-on simulation.",
  },
  {
    icon: Heart,
    title: "Student-First Mentorship",
    desc: "Every feature is built around empathy, learner mental wellness, and consistent daily momentum.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "Curriculum developed strictly in alignment with the latest national exam blueprints and industry standards.",
  },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>

          <div className="about-hero-inner">
            <div className="about-hero-copy">
              <Badge variant="primary">Our Story & Mission</Badge>
              <h1>Democratizing <em className="serif-accent">elite education</em> for every ambitious scholar.</h1>
              <p>
                At R Academy, we believe world-class education shouldn't be a
                privilege of geography or wealth. We combine India's finest
                educators with structured pedagogy to provide a decisive academic advantage to
                every student.
              </p>
            </div>

            <div className="about-hero-visual">
              <img
                src="/assets/images/hero-ai.jpg"
                alt="About R Academy Learning Platform"
                className="about-hero-img"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Impact Stats */}
      <section className="about-stats-section">
        <Container>
          <div className="about-stats-grid">
            <div className="a-stat-box">
              <strong>1,000,000+</strong>
              <span>Active Students</span>
            </div>
            <div className="a-stat-box">
              <strong>250+</strong>
              <span>Curated Courses</span>
            </div>
            <div className="a-stat-box">
              <strong>150+</strong>
              <span>Top Educators</span>
            </div>
            <div className="a-stat-box">
              <strong>98.2%</strong>
              <span>Positive Rating</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="about-values-section section-space">
        <Container>
          <div className="section-title-centered">
            <span className="eyebrow">Our Guiding Principles</span>
            <h2>What Drives Everything We Build</h2>
          </div>

          <div className="values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="value-card">
                  <div className="value-icon-wrap">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Milestones Timeline */}
      <section className="about-timeline-section section-space">
        <Container>
          <div className="section-title-centered">
            <span className="eyebrow">Journey So Far</span>
            <h2>Our Milestones & Growth</h2>
          </div>

          <div className="timeline-cards-grid">
            {milestones.map((m, idx) => (
              <div key={idx} className="milestone-card">
                <span className="milestone-year">{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="about-cta-section section-space">
        <Container>
          <div className="about-cta-box">
            <h2>Ready To Start Your Learning Journey?</h2>
            <p>Join over 1 million learners building their dreams with R Academy today.</p>
            <div className="cta-btn-group">
              <Button size="lg" to="/signup">
                Create Free Account
              </Button>
              <Button size="lg" variant="outline" to="/courses">
                Explore Courses
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
