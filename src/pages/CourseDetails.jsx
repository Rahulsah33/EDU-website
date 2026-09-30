import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe2,
  Heart,
  Play,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/common/Container.jsx";
import Toast from "../components/common/Toast.jsx";
import CourseCard from "../components/course/CourseCard.jsx";
import CoursePreviewModal from "../components/course/CoursePreviewModal.jsx";
import Curriculum from "../components/course/Curriculum.jsx";
import FAQSection from "../components/course/FAQSection.jsx";
import InstructorCard from "../components/course/InstructorCard.jsx";
import ReviewSection from "../components/course/ReviewSection.jsx";
import courses from "../data/courses.js";
import { useWishlist } from "../hooks/useWishlist.js";
import { getCourseById } from "../utils/courseUtils.js";

function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

const educatorPhotoMap = {
  "inst-ananya-sharma": "/assets/images/educators/ananya-sharma.jpg",
  "inst-rohan-mehta": "/assets/images/educators/rohan-mehta.jpg",
  "inst-priya-menon": "/assets/images/educators/priya-menon.jpg",
  "inst-arjun-kapoor": "/assets/images/educators/arjun-kapoor.jpg",
  "inst-kavya-iyer": "/assets/images/educators/kavya-iyer.jpg",
  "inst-vikram-singh": "/assets/images/educators/vikram-singh.jpg",
  "inst-meera-nair": "/assets/images/educators/meera-nair.jpg",
  "inst-dev-malhotra": "/assets/images/educators/dev-malhotra.jpg",
};

const categoryFallback = {
  JEE: "/assets/images/live-class.jpg",
  NEET: "/assets/images/study-resources.jpg",
  UPSC: "/assets/images/hero-ai.jpg",
  Programming: "/assets/images/exam-arena.jpg",
  Technology: "/assets/images/exam-arena.jpg",
  School: "/assets/images/live-class.jpg",
  Communication: "/assets/images/hero-ai.jpg",
};

function CourseMeta({ course }) {
  const photo =
    educatorPhotoMap[course.instructorId] ||
    "/assets/images/educators/ananya-sharma.jpg";
  return (
    <div className="course-detail-meta">
      <span>
        <Star size={15} fill="currentColor" />{" "}
        <strong>{course.rating.toFixed(1)}</strong> (
        {course.reviewCount.toLocaleString("en-IN")} reviews)
      </span>
      <span>
        <Users size={15} /> {course.students.toLocaleString("en-IN")} students
      </span>
      <span className="course-detail-instructor-tag">
        <Link
          to={`/educators/${course.instructorId}`}
          className="course-detail-instructor-link"
          title={`View ${course.instructor}'s profile`}
        >
          <img
            src={photo}
            alt={course.instructor}
            className="course-detail-instructor-avatar"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span>
            By <strong>{course.instructor}</strong>
          </span>
        </Link>
      </span>
      <span>
        Updated{" "}
        {new Date(course.lastUpdated).toLocaleDateString("en-IN", {
          month: "short",
          year: "numeric",
        })}
      </span>
      <span>
        <Globe2 size={15} /> {course.language}
      </span>
    </div>
  );
}

function PreviewCard({ course, onPreview, onEnroll }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(course.id);
  const fallbackThumb =
    categoryFallback[course.category] || "/assets/images/live-class.jpg";

  return (
    <aside className="course-preview-card">
      <div className="course-preview-media">
        <img
          src={course.thumbnail}
          alt={`${course.title} preview`}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackThumb;
          }}
        />
        <button
          type="button"
          className="course-preview-play"
          aria-label="Preview course"
          onClick={onPreview}
        >
          <Play size={22} fill="currentColor" />
        </button>
        <span>Preview Course</span>
      </div>
      <div className="course-preview-content">
        <div className="course-preview-price">
          <strong>{formatPrice(course.price)}</strong>
          <del>{formatPrice(course.originalPrice)}</del>
          <span>{course.discount}% off</span>
        </div>
        <p>One-time access to the complete learning path.</p>
        <button
          className="button button-primary button-lg course-enroll-button"
          type="button"
          onClick={onEnroll}
        >
          Enroll Now
        </button>
        <button
          className={
            wishlisted
              ? "course-wishlist-detail active"
              : "course-wishlist-detail"
          }
          type="button"
          aria-pressed={wishlisted}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggleWishlist(course.id)}
        >
          <Heart size={17} fill={wishlisted ? "currentColor" : "none"} />{" "}
          {wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
        <small>30-day learning guarantee</small>
      </div>
    </aside>
  );
}

export default function CourseDetails() {
  const { id } = useParams();
  const course = getCourseById(id);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (!toastVisible) return undefined;
    const timeout = window.setTimeout(() => setToastVisible(false), 3200);
    return () => window.clearTimeout(timeout);
  }, [toastVisible]);

  if (!course)
    return (
      <section className="course-not-found">
        <Container>
          <div className="placeholder-icon">
            <ArrowLeft size={25} />
          </div>
          <span className="eyebrow">That path is unavailable</span>
          <h1>Course Not Found</h1>
          <p>We could not find the course you were looking for.</p>
          <Link className="button button-primary button-md" to="/courses">
            Back to Courses
          </Link>
        </Container>
      </section>
    );

  const relatedCourses = courses
    .filter(
      (item) =>
        item.id !== course.id &&
        (item.category === course.category || item.subject === course.subject),
    )
    .slice(0, 4);
  const fallbackCourses = courses
    .filter(
      (item) =>
        item.id !== course.id &&
        !relatedCourses.some((related) => related.id === item.id),
    )
    .slice(0, 4 - relatedCourses.length);
  const allRelatedCourses = [...relatedCourses, ...fallbackCourses];

  return (
    <div className="course-details-page">
      <section className="course-detail-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/courses">Courses</Link>
            <span>/</span>
            <span>{course.title}</span>
          </div>
          <div className="course-detail-hero-grid">
            <div className="course-detail-copy">
              <span className="course-detail-category">{course.category}</span>
              <h1>{course.title}</h1>
              <p className="course-detail-description">{course.description}</p>
              <CourseMeta course={course} />
            </div>
            <PreviewCard
              course={course}
              onPreview={() => setPreviewOpen(true)}
              onEnroll={() => setToastVisible(true)}
            />
          </div>
        </Container>
      </section>
      <main className="course-detail-content">
        <Container>
          <div className="course-detail-main">
            <section className="detail-section learn-section">
              <span className="eyebrow">Your outcomes</span>
              <h2>What you'll learn</h2>
              <div className="learning-list">
                {course.whatYouWillLearn.map((item) => (
                  <div className="learning-item" key={item}>
                    <span>
                      <Check size={15} />
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="detail-section">
              <span className="eyebrow">The course</span>
              <h2>Description</h2>
              <p className="detail-body-copy">{course.description}</p>
            </section>
            <section className="detail-section">
              <span className="eyebrow">Before you begin</span>
              <h2>Requirements</h2>
              <ul className="requirements-list">
                {course.requirements.map((requirement) => (
                  <li key={requirement}>
                    <Check size={16} />
                    {requirement}
                  </li>
                ))}
              </ul>
            </section>
            <Curriculum course={course} />
            <InstructorCard course={course} />
            <ReviewSection course={course} />
            <FAQSection />
          </div>
        </Container>
      </main>
      <section className="related-courses-section">
        <Container>
          <div className="related-heading">
            <div>
              <span className="eyebrow">Keep going</span>
              <h2>Related courses</h2>
            </div>
            <Link className="text-link" to="/courses">
              Explore all courses{" "}
              <ArrowRight size={16} className="related-arrow" />
            </Link>
          </div>
          <div className="course-grid related-course-grid">
            {allRelatedCourses.map((relatedCourse) => (
              <CourseCard key={relatedCourse.id} course={relatedCourse} />
            ))}
          </div>
        </Container>
      </section>
      <CoursePreviewModal
        key={previewOpen ? "preview-open" : "preview-closed"}
        course={course}
        isOpen={previewOpen}
        onClose={() => setPreviewOpen(false)}
      />
      <Toast
        visible={toastVisible}
        message="Course added to your learning dashboard."
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
