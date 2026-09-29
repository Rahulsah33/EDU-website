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

export default function CourseCard({ course }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(course.id);

  return (
    <article className="course-card">
      <div className="course-card-media">
        <img src={course.thumbnail} alt={`${course.title} course thumbnail`} />
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
        <p className="course-instructor">By {course.instructor}</p>
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
