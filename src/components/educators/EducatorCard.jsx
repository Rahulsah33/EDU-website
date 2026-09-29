import { ArrowRight, BookOpen, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Badge from "../common/Badge.jsx";
import Button from "../common/Button.jsx";

function formatCount(value) {
  return value >= 1000000
    ? `${(value / 1000000).toFixed(1).replace(".0", "")}M`
    : value >= 1000
      ? `${Math.round(value / 1000)}K`
      : value.toLocaleString("en-IN");
}

export function EducatorAvatar({ educator, className = "" }) {
  const [imageFailed, setImageFailed] = useState(false);
  const isImage =
    typeof educator.avatar === "string" &&
    educator.avatar.startsWith("http") &&
    !imageFailed;
  return (
    <div className={`educator-avatar ${className}`}>
      {isImage ? (
        <img
          src={educator.avatar}
          alt={`Portrait of ${educator.name}`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span aria-label={`${educator.name} initials`}>
          {educator.avatar ||
            educator.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
        </span>
      )}
    </div>
  );
}

export default function EducatorCard({ educator, featured = false }) {
  return (
    <motion.article
      className={
        featured
          ? "educator-discovery-card featured"
          : "educator-discovery-card"
      }
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="educator-card-heading">
        <EducatorAvatar educator={educator} />
        <Badge variant={featured ? "primary" : "neutral"}>
          {educator.category}
        </Badge>
      </div>
      <h3>{educator.name}</h3>
      <p className="educator-role">{educator.subject} educator</p>
      <div className="educator-stats">
        <span>
          <Star size={14} fill="currentColor" /> {educator.rating.toFixed(1)}
        </span>
        <span>{educator.experience}</span>
        <span>
          <Users size={14} /> {formatCount(educator.students)}
        </span>
        <span>
          <BookOpen size={14} /> {educator.coursesCount} courses
        </span>
      </div>
      <div className="educator-expertise">
        {educator.expertise.slice(0, 3).map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
        {educator.expertise.length > 3 && (
          <span>+{educator.expertise.length - 3} more</span>
        )}
      </div>
      <Button
        className="educator-profile-button"
        variant={featured ? "primary" : "outline"}
        size={featured ? "md" : "sm"}
        to={`/educators/${educator.id}`}
      >
        View Profile <ArrowRight size={15} />
      </Button>
    </motion.article>
  );
}
