import { ArrowRight, BookOpen, Check, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import CourseCard from "../components/course/CourseCard.jsx";
import ExamCard from "../components/exams/ExamCard.jsx";
import ExamFAQSection from "../components/exams/ExamFAQSection.jsx";
import ExamIcon from "../components/exams/ExamIcon.jsx";
import courses from "../data/courses.js";
import exams from "../data/exams.js";

function formatCount(value) {
  return value >= 1000000
    ? `${(value / 1000000).toFixed(1).replace(".0", "")}M`
    : value >= 1000
      ? `${Math.round(value / 1000)}K`
      : value.toLocaleString("en-IN");
}

function labelFor(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());
}

function ExamStats({ exam }) {
  const stats = [
    [formatCount(exam.students), "Learners", Users],
    [exam.coursesCount, "Courses", BookOpen],
    [exam.educatorsCount, "Educators", Users],
    [exam.subjects.length, "Subjects", Check],
  ];

  return (
    <div className="exam-detail-stats">
      {stats.map(([value, label, Icon]) => (
        <div className="exam-detail-stat" key={label}>
          <Icon size={17} />
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function ExamPattern({ pattern }) {
  return (
    <section
      className="exam-detail-section exam-pattern-section"
      id="exam-pattern"
    >
      <span className="eyebrow">Know the format</span>
      <h2>Exam Pattern</h2>
      <div className="exam-pattern-grid">
        {Object.entries(pattern).map(([key, value]) => (
          <div className="exam-pattern-item" key={key}>
            <span>{labelFor(key)}</span>
            {Array.isArray(value) ? (
              <div className="exam-pattern-tags">
                {value.map((item) => (
                  <Badge key={item} variant="neutral">
                    {item}
                  </Badge>
                ))}
              </div>
            ) : (
              <strong>{String(value)}</strong>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ImportantDates({ dates = [] }) {
  if (!dates.length) return null;
  return (
    <section className="exam-completion-section exam-dates-section">
      <span className="eyebrow">Plan with context</span>
      <h2>Important Dates</h2>
      <div className="exam-dates-grid">
        {dates.map((date) => (
          <div className="exam-date-card" key={`${date.label}-${date.value}`}>
            <span className="exam-date-marker" />
            <div>
              <h3>{date.label}</h3>
              <p>{date.value}</p>
            </div>
            {date.isSample && <Badge variant="warning">Sample date</Badge>}
          </div>
        ))}
      </div>
      <p className="exam-data-note">
        Sample dates for demonstration purposes. Check the official exam
        authority for current dates.
      </p>
    </section>
  );
}

function PreparationTips({ tips = [] }) {
  if (!tips.length) return null;
  return (
    <section className="exam-completion-section exam-tips-section">
      <span className="eyebrow">Make each session count</span>
      <h2>Preparation Tips</h2>
      <div className="exam-tips-grid">
        {tips.map((tip, index) => (
          <motion.article
            className="exam-tip-card"
            key={tip}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{tip}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function RecommendedCourses({ courseIds = [] }) {
  const recommendedCourses = courseIds
    .map((courseId) => courses.find((course) => course.id === courseId))
    .filter(Boolean);
  if (!recommendedCourses.length) return null;
  return (
    <section className="exam-completion-section exam-recommended-section">
      <div className="exam-section-heading-row">
        <div>
          <span className="eyebrow">Learn with direction</span>
          <h2>Recommended Courses</h2>
        </div>
        <Button variant="outline" size="sm" to="/courses">
          View All Courses <ArrowRight size={15} />
        </Button>
      </div>
      <div className="course-grid exam-course-grid">
        {recommendedCourses.slice(0, 4).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

function RelatedExams({ currentExam }) {
  const subjectMatches = currentExam.subjects || [];
  const sameCategory = exams.filter(
    (exam) =>
      exam.id !== currentExam.id && exam.category === currentExam.category,
  );
  const overlapping = exams.filter(
    (exam) =>
      exam.id !== currentExam.id &&
      exam.subjects?.some((subject) => subjectMatches.includes(subject)) &&
      !sameCategory.some((item) => item.id === exam.id),
  );
  const related = [...sameCategory, ...overlapping].slice(0, 4);
  if (!related.length) return null;
  return (
    <section className="exam-related-section">
      <Container>
        <div className="exam-section-heading-row">
          <div>
            <span className="eyebrow">Keep exploring</span>
            <h2>Explore Other Exam Paths</h2>
          </div>
          <Button variant="outline" size="sm" to="/exams">
            View All Exams <ArrowRight size={15} />
          </Button>
        </div>
        <div className="related-exam-grid">
          {related.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function ExamDetails() {
  const { id } = useParams();
  const exam = exams.find((item) => item.id === id || item.slug === id);

  if (!exam) {
    return (
      <section className="exam-not-found">
        <Container>
          <div className="exam-not-found-icon">
            <BookOpen size={25} />
          </div>
          <span className="eyebrow">That path is unavailable</span>
          <h1>Exam Not Found</h1>
          <p>
            The exam you're looking for doesn't exist or may have been removed.
          </p>
          <Button to="/exams" size="md">
            Explore Exams <ArrowRight size={16} />
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <div className={`exam-details-page exam-accent-${exam.accent}`}>
      <section className="exam-detail-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/exams">Exams</Link>
            <span>/</span>
            <span>{exam.shortName}</span>
          </div>
          <motion.div
            className="exam-detail-hero-grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="exam-detail-copy">
              <div className="exam-detail-icon">
                <ExamIcon name={exam.icon} size={30} />
              </div>
              <div className="exam-detail-badges">
                <Badge variant="primary">{exam.category}</Badge>
                <Badge variant="neutral">{exam.shortName}</Badge>
              </div>
              <h1>{exam.shortName}</h1>
              <h2>{exam.name}</h2>
              <p>{exam.shortDescription}</p>
              <div className="exam-detail-actions">
                <Button to="/courses" size="lg">
                  Explore Courses <ArrowRight size={17} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("exam-overview")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Start Preparing
                </Button>
              </div>
              <ExamStats exam={exam} />
            </div>
            <div className="exam-detail-hero-aside">
              <span className="eyebrow">A path built for progress</span>
              <p>{exam.description}</p>
              <div className="exam-hero-subjects">
                {exam.subjects.map((subject) => (
                  <span key={subject}>{subject}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
      <main className="exam-detail-content">
        <Container>
          <section
            className="exam-detail-section exam-overview-section"
            id="exam-overview"
          >
            <span className="eyebrow">The bigger picture</span>
            <h2>About This Exam</h2>
            <p>{exam.description}</p>
          </section>
          <section className="exam-detail-section">
            <span className="eyebrow">Build your foundation</span>
            <h2>What You'll Prepare</h2>
            <div className="exam-subject-grid">
              {exam.subjects.map((subject, index) => (
                <motion.div
                  className="exam-subject-card"
                  key={subject}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                >
                  <div>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Check size={17} />
                  </div>
                  <h3>{subject}</h3>
                </motion.div>
              ))}
            </div>
          </section>
          <ExamPattern pattern={exam.examPattern} />
          <ImportantDates dates={exam.importantDates} />
          <PreparationTips tips={exam.preparationTips} />
          <RecommendedCourses courseIds={exam.featuredCourses} />
          <ExamFAQSection faqs={exam.faqs} />
        </Container>
      </main>
      <RelatedExams currentExam={exam} />
      <section className="exam-details-cta">
        <Container>
          <div className="exam-details-cta-inner">
            <div>
              <span className="eyebrow">Your next step</span>
              <h2>Ready to Start Preparing?</h2>
              <p>
                Build your preparation path with expert-led courses, structured
                practice, and learning resources designed around your goals.
              </p>
            </div>
            <div className="exam-detail-cta-actions">
              <Button to="/courses" size="lg">
                Explore Courses <ArrowRight size={17} />
              </Button>
              <Button to="/exams" variant="outline" size="lg">
                Explore All Exams
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
