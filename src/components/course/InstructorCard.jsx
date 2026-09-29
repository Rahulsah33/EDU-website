import { Award, BookOpen, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import courses from "../../data/courses.js";

const instructorDetails = {
  "inst-ananya-sharma": { experience: "8+ years experience", courses: 12 },
  "inst-rohan-mehta": { experience: "10+ years experience", courses: 16 },
  "inst-priya-menon": { experience: "9+ years experience", courses: 11 },
  "inst-arjun-kapoor": { experience: "12+ years experience", courses: 18 },
  "inst-kavya-iyer": { experience: "7+ years experience", courses: 9 },
  "inst-vikram-singh": { experience: "14+ years experience", courses: 21 },
  "inst-meera-nair": { experience: "8+ years experience", courses: 13 },
  "inst-dev-malhotra": { experience: "11+ years experience", courses: 15 },
};

export default function InstructorCard({ course }) {
  const details = instructorDetails[course.instructorId] || {
    experience: "5+ years experience",
    courses: 6,
  };
  const instructorCourseCount = courses.filter(
    (item) => item.instructorId === course.instructorId,
  ).length;
  const courseCount = Math.max(details.courses, instructorCourseCount);
  const initials = course.instructor
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <section className="detail-section instructor-section">
      <span className="eyebrow">Meet your instructor</span>
      <h2>Learn from experience</h2>
      <div className="instructor-card">
        <div className="instructor-avatar" aria-hidden="true">
          {initials}
        </div>
        <div className="instructor-information">
          <div className="instructor-heading">
            <div>
              <h3>{course.instructor}</h3>
              <p>{course.subject} educator</p>
            </div>
            <Link
              className="button button-outline button-sm"
              to={`/educators/${course.instructorId}`}
            >
              View Instructor
            </Link>
          </div>
          <div className="instructor-stats">
            <span>
              <Award size={15} /> {details.experience}
            </span>
            <span>
              <Users size={15} /> {course.students.toLocaleString("en-IN")}{" "}
              students
            </span>
            <span>
              <Star size={15} fill="currentColor" /> {course.rating.toFixed(1)}{" "}
              rating
            </span>
            <span>
              <BookOpen size={15} /> {courseCount} courses
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
