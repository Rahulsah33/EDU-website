import { Clock3, Heart, PlayCircle, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../hooks/useWishlist.js";

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

export default function CourseCard({ course }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(course.id);
  const instructorPhoto =
    educatorPhotoMap[course.instructorId] ||
    "/assets/images/educators/ananya-sharma.jpg";
  const fallbackThumb =
    categoryFallback[course.category] || "/assets/images/live-class.jpg";

  return (
    <article className="course-card">
      <div className="course-card-media">
        <img
          src={course.thumbnail}
          alt={`${course.title} course thumbnail`}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackThumb;
          }}
        />
        {course.bestseller && (
          <span className="course-bestseller">Bestseller</span>
        )}
        <button
          className={wishlisted ? "course-wishlist active" : "course-wishlist"}
          type="button"
          aria-label={`${wishlisted ? "Remove" : "Add"} ${course.title} ${wishlisted ? "from" : "to"} wishlist`}
          title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          onClick={() => toggleWishlist(course.id)}
        >
          <Heart size={17} fill={wishlisted ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="course-card-body">
        <span className="course-category">{course.category}</span>
        <h3>
          <Link to={`/courses/${course.id}`}>{course.title}</Link>
        </h3>
        <div className="course-instructor-row">
          <Link
            to={`/educators/${course.instructorId}`}
            className="course-instructor-link"
            title={`View ${course.instructor}'s profile`}
          >
            <img
              src={instructorPhoto}
              alt={course.instructor}
              className="course-instructor-thumb"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="course-instructor-name">By {course.instructor}</span>
          </Link>
        </div>
        <div className="course-rating-row">
          <strong>{course.rating.toFixed(1)}</strong>
          <span
            className="course-stars"
            aria-label={`${course.rating} out of 5 stars`}
          >
            <Star size={14} fill="currentColor" />{" "}
            {course.reviewCount.toLocaleString("en-IN")} reviews
          </span>
        </div>
        <div className="course-meta-row">
          <span>
            <Users size={14} /> {course.students.toLocaleString("en-IN")}{" "}
            students
          </span>
          <span>
            <Clock3 size={14} /> {course.duration}
          </span>
          <span>
            <PlayCircle size={14} /> {course.lessons} lessons
          </span>
        </div>
        <div className="course-card-footer">
          <div>
            <strong className="course-price">
              {formatPrice(course.price)}
            </strong>{" "}
            <del>{formatPrice(course.originalPrice)}</del>
            <span className="course-discount">{course.discount}% off</span>
          </div>
          <Link className="course-view-link" to={`/courses/${course.id}`}>
            View course
          </Link>
        </div>
      </div>
    </article>
  );
}
