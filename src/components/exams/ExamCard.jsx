import { ArrowRight } from "lucide-react";
import Badge from "../common/Badge.jsx";
import Button from "../common/Button.jsx";
import ExamIcon from "./ExamIcon.jsx";

function formatCount(value) {
  return value >= 1000000
    ? `${(value / 1000000).toFixed(1).replace(".0", "")}M`
    : value >= 1000
      ? `${Math.round(value / 1000)}K`
      : value.toLocaleString("en-IN");
}

export default function ExamCard({ exam, featured = false }) {
  return (
    <article
      className={`${featured ? "exam-discovery-card featured" : "exam-discovery-card"} exam-accent-${exam.accent}`}
    >
      <div className="exam-card-top">
        <div className="exam-discovery-icon">
          <ExamIcon name={exam.icon} size={featured ? 23 : 20} />
        </div>
        <Badge variant={featured ? "primary" : "neutral"}>
          {featured ? "Popular path" : exam.category}
        </Badge>
      </div>
      <div className="exam-card-heading">
        <h3>{exam.shortName}</h3>
        <p>{exam.name}</p>
      </div>
      <p className="exam-card-description">{exam.shortDescription}</p>
      <div className="exam-card-stats">
        <span>
          {formatCount(exam.students)} <small>Learners</small>
        </span>
        <span>
          {exam.coursesCount} <small>Courses</small>
        </span>
        <span>
          {exam.educatorsCount} <small>Educators</small>
        </span>
      </div>
      {!featured && (
        <div className="exam-subjects">
          {exam.subjects.slice(0, 3).map((subject) => (
            <span key={subject}>{subject}</span>
          ))}
        </div>
      )}
      <Button
        className="exam-card-button"
        size={featured ? "md" : "sm"}
        to={`/exams/${exam.id}`}
      >
        Explore exam <ArrowRight size={15} />
      </Button>
    </article>
  );
}
