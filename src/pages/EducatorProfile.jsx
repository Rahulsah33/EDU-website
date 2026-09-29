import { Award, ArrowRight, BookOpen, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import CourseCard from "../components/course/CourseCard.jsx";
import { EducatorAvatar } from "../components/educators/EducatorCard.jsx";
import EducatorCard from "../components/educators/EducatorCard.jsx";
import EducatorReviewCard from "../components/educators/EducatorReviewCard.jsx";
import courses from "../data/courses.js";
import educators from "../data/educators.js";

function formatCount(value) {
  return value >= 1000000
    ? `${(value / 1000000).toFixed(1).replace(".0", "")}M`
    : value >= 1000
      ? `${Math.round(value / 1000)}K`
      : value.toLocaleString("en-IN");
}

export default function EducatorProfile() {
  const { id } = useParams();
  const educator = educators.find((item) => item.id === id || item.slug === id);

  if (!educator)
    return (
      <section className="educator-not-found">
        <Container>
          <div className="educator-not-found-icon">
            <Users size={25} />
          </div>
          <span className="eyebrow">That profile is unavailable</span>
          <h1>Educator Not Found</h1>
          <p>
            The educator profile you're looking for doesn't exist or may have
            been removed.
          </p>
          <Button to="/educators" size="md">
            Explore Educators <ArrowRight size={16} />
          </Button>
        </Container>
      </section>
    );

  const stats = [
    [formatCount(educator.students), "Students", Users],
    [educator.coursesCount, "Courses", BookOpen],
    [educator.rating.toFixed(1), "Rating", Star],
    [educator.experience, "Experience", Award],
  ];
  const educatorCourses = (educator.courses || [])
    .map((courseId) => courses.find((course) => course.id === courseId))
    .filter(Boolean);
  const relatedEducators = educators
    .filter((item) => item.id !== educator.id)
    .map((item) => {
      const sharedExpertise = (item.expertise || []).filter((skill) =>
        (educator.expertise || []).includes(skill),
      ).length;
      const score =
        (item.subject === educator.subject ? 3 : 0) +
        (item.category === educator.category ? 2 : 0) +
        sharedExpertise;
      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort(
      (first, second) =>
        second.score - first.score || second.item.rating - first.item.rating,
    )
    .slice(0, 4)
    .map(({ item }) => item);

  return (
    <div className="educator-profile-page">
      <section className="educator-profile-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/educators">Educators</Link>
            <span>/</span>
            <span>{educator.name}</span>
          </div>
          <motion.div
            className="educator-profile-hero-grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <EducatorAvatar educator={educator} className="profile-avatar" />
            <div className="educator-profile-identity">
              <div className="educator-profile-badges">
                <Badge variant="primary">{educator.category}</Badge>
                <Badge variant="neutral">{educator.subject}</Badge>
              </div>
              <h1>{educator.name}</h1>
              <p className="educator-profile-role">
                {educator.subject} Educator
              </p>
              <div className="educator-profile-meta">
                <span>
                  <Star size={15} fill="currentColor" />{" "}
                  {educator.rating.toFixed(1)} rating
                </span>
                <span>{educator.experience} experience</span>
                <span>
                  <Users size={15} /> {formatCount(educator.students)} students
                </span>
                <span>
                  <BookOpen size={15} /> {educator.coursesCount} courses
                </span>
              </div>
              <div className="educator-profile-expertise-preview">
                {educator.expertise.slice(0, 3).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <Button to="/courses" size="lg">
                View Courses <ArrowRight size={17} />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
      <main className="educator-profile-content">
        <Container>
          <section
            className="educator-profile-stats"
            aria-label="Educator statistics"
          >
            {stats.map(([value, label, Icon], index) => (
              <motion.div
                className="educator-profile-stat"
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <Icon size={17} />
                <strong>{value}</strong>
                <span>{label}</span>
              </motion.div>
            ))}
          </section>
          <section className="educator-profile-section educator-about-section">
            <span className="eyebrow">A little about the journey</span>
            <h2>About the Educator</h2>
            <p>{educator.bio}</p>
          </section>
          <section className="educator-profile-section">
            <span className="eyebrow">What they bring</span>
            <h2>Areas of Expertise</h2>
            <div className="educator-profile-expertise-grid">
              {educator.expertise.map((item, index) => (
                <motion.div
                  className="educator-profile-expertise-card"
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: index * 0.04 }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item}</h3>
                </motion.div>
              ))}
            </div>
          </section>
          {educator.achievements?.length > 0 && (
            <section className="educator-profile-section educator-achievements-section">
              <span className="eyebrow">Proof of practice</span>
              <h2>Achievements &amp; Highlights</h2>
              <div className="educator-achievements-list">
                {educator.achievements.map((achievement) => (
                  <div key={achievement}>
                    <span>
                      <Award size={15} />
                    </span>
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          <section className="educator-profile-section educator-courses-section">
            <span className="eyebrow">Learn with this educator</span>
            <h2>Courses by {educator.name}</h2>
            <p className="educator-section-description">
              Explore courses designed and taught by this educator.
            </p>
            {educatorCourses.length > 0 ? (
              <div className="course-grid educator-course-grid">
                {educatorCourses.slice(0, 6).map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="educator-profile-empty">
                <BookOpen size={20} />
                <p>Courses coming soon</p>
              </div>
            )}
            {educatorCourses.length > 6 && (
              <Button variant="outline" size="md" to="/courses">
                View All Courses <ArrowRight size={16} />
              </Button>
            )}
          </section>
          <section className="educator-profile-section educator-reviews-section">
            <span className="eyebrow">Learner perspective</span>
            <h2>Student Reviews</h2>
            {(educator.reviews || []).length > 0 ? (
              <div className="educator-review-grid">
                {educator.reviews.map((review) => (
                  <EducatorReviewCard
                    key={`${review.student}-${review.date}`}
                    review={review}
                  />
                ))}
              </div>
            ) : (
              <div className="educator-profile-empty">
                <Star size={20} />
                <p>Reviews coming soon</p>
              </div>
            )}
          </section>
        </Container>
      </main>
      <section className="related-educators-section">
        <Container>
          <div className="educator-section-heading-row">
            <div>
              <span className="eyebrow">Keep exploring</span>
              <h2>You May Also Like</h2>
              <p>
                Explore educators teaching similar subjects and learning paths.
              </p>
            </div>
            <Button variant="outline" size="sm" to="/educators">
              View All Educators <ArrowRight size={15} />
            </Button>
          </div>
          {relatedEducators.length > 0 && (
            <div className="related-educator-grid">
              {relatedEducators.map((related) => (
                <EducatorCard key={related.id} educator={related} />
              ))}
            </div>
          )}
        </Container>
      </section>
      <section className="educator-profile-final-cta">
        <Container>
          <div className="educator-profile-final-cta-inner">
            <div>
              <span className="eyebrow">Your next step</span>
              <h2>Ready to Learn With the Right Educator?</h2>
              <p>
                Explore more courses, find your learning path, and keep moving
                toward your goals.
              </p>
            </div>
            <div>
              <Button to="/courses" size="lg">
                Explore Courses <ArrowRight size={17} />
              </Button>
              <Button to="/educators" variant="outline" size="lg">
                Explore Educators
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
