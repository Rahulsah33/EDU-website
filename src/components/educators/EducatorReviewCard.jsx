import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function EducatorReviewCard({ review }) {
  return (
    <motion.article
      className="educator-review-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="educator-review-top">
        <div className="educator-review-avatar" aria-hidden="true">
          {initials(review.student)}
        </div>
        <div>
          <strong>{review.student}</strong>
          <span>{review.date}</span>
        </div>
        <div
          className="educator-review-rating"
          aria-label={`${review.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={13}
              fill={index < review.rating ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>
      <Quote className="educator-review-quote" size={19} />
      <p>{review.comment}</p>
    </motion.article>
  );
}
