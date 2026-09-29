import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock3,
  Flame,
  Play,
  Radio,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";

const enrolledCourses = [
  {
    id: "java-dsa-mastery",
    title: "Java Backend Mastery & Distributed Systems",
    instructor: "Aarav Sharma",
    progress: 72,
    totalLessons: 24,
    completedLessons: 17,
    nextLesson: "Lesson 18: Kafka Consumer Groups & Partition Rebalancing",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "jee-physics-mastery",
    title: "JEE Advanced Physics Complete Mechanics",
    instructor: "Dr. Ananya Sen",
    progress: 48,
    totalLessons: 30,
    completedLessons: 14,
    nextLesson: "Lesson 15: Instantaneous Center of Rotation",
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <section className="dash-hero-header">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Dashboard</span>
          </div>

          <div className="dash-welcome-card">
            <div className="dash-user-meta">
              <div className="dash-avatar-large">A</div>
              <div>
                <span className="dash-welcome-tag">Pro Learner</span>
                <h2>Good morning, Aanya! 👋</h2>
                <p>You're on track for your goal: <strong>JEE 2026 & FAANG Ready</strong></p>
              </div>
            </div>

            <div className="dash-quick-stats">
              <div className="d-stat-box">
                <div className="stat-icon-wrap streak-icon-wrap">
                  <Flame size={20} className="text-orange" />
                </div>
                <div>
                  <strong>14 Days</strong>
                  <span>Study Streak</span>
                </div>
              </div>

              <div className="d-stat-box">
                <div className="stat-icon-wrap hours-icon-wrap">
                  <Clock3 size={20} className="text-primary" />
                </div>
                <div>
                  <strong>38.5 hrs</strong>
                  <span>This Month</span>
                </div>
              </div>

              <div className="d-stat-box">
                <div className="stat-icon-wrap marks-icon-wrap">
                  <Award size={20} className="text-accent" />
                </div>
                <div>
                  <strong>92.4%</strong>
                  <span>Avg Test Score</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Dashboard Layout */}
      <section className="dash-main-section section-space">
        <Container>
          <div className="dash-grid-layout">
            {/* Left Main Column: Active Courses & Today's Schedule */}
            <div className="dash-col-main">
              {/* Enrolled Courses */}
              <div className="dash-panel">
                <div className="dash-panel-header">
                  <div className="dash-panel-title">
                    <BookOpen size={18} className="text-primary" />
                    <h3>In-Progress Courses ({enrolledCourses.length})</h3>
                  </div>
                  <Link to="/courses" className="text-link-sm">
                    Browse More Courses →
                  </Link>
                </div>

                <div className="enrolled-courses-list">
                  {enrolledCourses.map((c) => (
                    <div key={c.id} className="enrolled-card">
                      <img src={c.thumbnail} alt={c.title} className="enrolled-thumb" />
                      <div className="enrolled-info">
                        <div className="enrolled-title-row">
                          <h4>{c.title}</h4>
                          <span className="enrolled-perc">{c.progress}%</span>
                        </div>
                        <p className="enrolled-teacher">Instructor: {c.instructor}</p>

                        <div className="enrolled-progress-track">
                          <div
                            className="enrolled-progress-fill"
                            style={{ width: `${c.progress}%` }}
                          />
                        </div>

                        <div className="enrolled-next-row">
                          <span className="next-lesson-text">
                            Next: <strong>{c.nextLesson}</strong>
                          </span>
                          <Button size="sm" to={`/courses/${c.id}`}>
                            <Play size={12} fill="currentColor" /> Resume
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Schedule */}
              <div className="dash-panel">
                <div className="dash-panel-header">
                  <div className="dash-panel-title">
                    <Calendar size={18} className="text-primary" />
                    <h3>Today's Learning Schedule</h3>
                  </div>
                  <Link to="/live" className="text-link-sm">
                    View Full Calendar →
                  </Link>
                </div>

                <div className="schedule-timeline">
                  <div className="timeline-item is-live-item">
                    <div className="time-badge">7:30 PM</div>
                    <div className="timeline-content">
                      <span className="live-pulse-tag">● LIVE IN 15 MINS</span>
                      <h4>System Design: Microservices & High-Throughput Caching</h4>
                      <p>With Aarav Sharma (Ex-Google)</p>
                      <Button size="sm" to="/live">
                        <Radio size={14} /> Join Classroom
                      </Button>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="time-badge">9:00 PM</div>
                    <div className="timeline-content">
                      <span className="test-badge-tag">MOCK TEST</span>
                      <h4>Daily Speed Test: Physics Mechanics & Vectors</h4>
                      <p>25 minutes • 20 Questions</p>
                      <Button size="sm" variant="outline" to="/tests">
                        Start Mock Test
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Column: AI Recommendations & Streaks */}
            <div className="dash-col-side">
              {/* AI Study Recommendations */}
              <div className="dash-panel ai-recommend-panel">
                <div className="dash-panel-header">
                  <div className="dash-panel-title">
                    <Sparkles size={18} className="text-primary" />
                    <h3>AI Study Insights</h3>
                  </div>
                  <Badge variant="primary">Updated 10m ago</Badge>
                </div>

                <div className="ai-insight-content">
                  <p>
                    Based on your last mock test, we noticed you solved <strong>Electrostatics</strong> in 45s with 100% accuracy, but spent 3.2 mins on <strong>Rotational Mechanics</strong>.
                  </p>
                  <div className="ai-action-chip">
                    <TrendingUp size={15} className="text-accent" />
                    <span>Recommended Revision: <strong>Moment of Inertia Theorems</strong></span>
                  </div>
                  <Button size="sm" className="w-full" to="/ai-assistant">
                    Ask AI Tutor for Practice Set
                  </Button>
                </div>
              </div>

              {/* Weekly Streak Heatmap */}
              <div className="dash-panel">
                <div className="dash-panel-header">
                  <div className="dash-panel-title">
                    <Flame size={18} className="text-orange" />
                    <h3>Weekly Study Consistency</h3>
                  </div>
                </div>

                <div className="streak-days-row">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                    <div key={day} className="day-box">
                      <div className={`day-circle ${i < 5 ? "active" : i === 5 ? "today" : "future"}`}>
                        {i < 5 && <CheckCircle2 size={13} />}
                        {i === 5 && <span>★</span>}
                      </div>
                      <small>{day}</small>
                    </div>
                  ))}
                </div>
                <span className="streak-subtext">5 of 7 days completed this week • 12.5 hrs logged</span>
              </div>

              {/* Study Materials Quick Links */}
              <div className="dash-panel">
                <div className="dash-panel-header">
                  <div className="dash-panel-title">
                    <Award size={18} className="text-primary" />
                    <h3>Quick Material Downloads</h3>
                  </div>
                </div>

                <div className="dash-quick-links-list">
                  <Link to="/study-material" className="dash-link-item">
                    <span>⚡ 100 Golden Formulas for Physics</span>
                    <small>PDF • 4.8MB</small>
                  </Link>
                  <Link to="/study-material" className="dash-link-item">
                    <span>⚡ Organic Reaction Roadmap 2026</span>
                    <small>PDF • 6.2MB</small>
                  </Link>
                  <Link to="/study-material" className="dash-link-item">
                    <span>⚡ System Design Handbook</span>
                    <small>PDF • 8.5MB</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
