import { Star } from "lucide-react";

const ratingLevels = [5, 4, 3, 2, 1];

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function ReviewSection({ course }) {
  const distribution = ratingLevels.map((level) => ({
    level,
    count: course.reviews.filter((review) => review.rating === level).length,
  }));
  const largestCount = Math.max(...distribution.map((item) => item.count), 1);

  return (
    <section className="detail-section reviews-section">
      <span className="eyebrow">Learner feedback</span>
      <h2>What learners are saying</h2>
      <div className="review-summary">
        <div className="overall-rating">
          <strong>{course.rating.toFixed(1)}</strong>
          <div
            className="review-stars"
            aria-label={`${course.rating} out of 5 stars`}
          >
            {ratingLevels.map((level) => (
              <Star key={level} size={16} fill="currentColor" />
            ))}
          </div>
          <span>{course.reviewCount.toLocaleString("en-IN")} reviews</span>
        </div>
        <div className="rating-distribution">
          {distribution.map((item) => (
            <div className="rating-bar-row" key={item.level}>
              <span>
                {item.level} <Star size={12} fill="currentColor" />
              </span>
              <div className="rating-bar">
                <i
                  style={{
                    width: `${Math.max(item.count ? 10 : 0, (item.count / largestCount) * 100)}%`,
                  }}
                />
              </div>
              <small>{item.count}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="review-grid">
        {course.reviews.map((review) => (
          <article
            className="review-card"
            key={`${review.name}-${review.date}`}
          >
            <div className="review-card-top">
              <div className="review-avatar">{initials(review.name)}</div>
              <div>
                <strong>{review.name}</strong>
                <span>{review.date}</span>
              </div>
              <div className="review-card-rating">
                <Star size={13} fill="currentColor" /> {review.rating}.0
              </div>
            </div>
            <p>{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
