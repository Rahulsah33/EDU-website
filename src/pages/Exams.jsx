import { Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import ExamCard from "../components/exams/ExamCard.jsx";
import exams from "../data/exams.js";

const featuredIds = ["jee", "neet", "upsc"];

export default function Exams() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const examData = Array.isArray(exams) ? exams : [];
  const categories = ["All", ...new Set(examData.map((exam) => exam.category))];
  const featuredExams = examData.filter((exam) =>
    featuredIds.includes(exam.id),
  );
  const normalizedSearch = search.trim().toLowerCase();
  const filteredExams = examData.filter((exam) => {
    const categoryMatch =
      activeCategory === "All" || exam.category === activeCategory;
    const subjects = Array.isArray(exam.subjects) ? exam.subjects : [];
    const searchableText = [
      exam.name,
      exam.shortName,
      exam.category,
      exam.description,
      exam.shortDescription,
      ...subjects,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return (
      categoryMatch &&
      (!normalizedSearch || searchableText.includes(normalizedSearch))
    );
  });

  function clearFilters() {
    setSearch("");
    setActiveCategory("All");
  }

  return (
    <div className="exams-page">
      <section className="exams-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Exams</span>
          </div>
          <div className="exams-hero-content">
            <div className="exams-hero-copy">
              <Badge variant="primary">Your next chapter starts here</Badge>
              <h1>
                Find Your Path.
                <br />
                <em>Prepare With Purpose.</em>
              </h1>
              <p>
                Explore exam-focused learning paths, expert-led courses, and
                structured preparation designed to help you move from where you
                are to where you want to be.
              </p>
            </div>
            <div className="exam-search" role="search">
              <Search size={19} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search exams..."
                aria-label="Search exams"
              />
              {search && (
                <button
                  className="exam-search-clear"
                  type="button"
                  aria-label="Clear exam search"
                  onClick={() => setSearch("")}
                >
                  <X size={17} />
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>
      <section className="exam-category-section">
        <Container>
          <nav className="exam-category-tabs" aria-label="Exam categories">
            {categories.map((category) => (
              <button
                className={
                  activeCategory === category
                    ? "exam-category-tab active"
                    : "exam-category-tab"
                }
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>
        </Container>
      </section>
      <section className="exam-featured-section section-space">
        <Container>
          <SectionHeading
            eyebrow="A focused first step"
            title="Popular Exam Paths"
            description="Focused preparation paths built around the goals learners care about most."
          />
          <div className="featured-exam-grid">
            {featuredExams.map((exam) => (
              <ExamCard key={exam.id} exam={exam} featured />
            ))}
          </div>
        </Container>
      </section>
      <section className="all-exams-section section-space">
        <Container>
          <SectionHeading
            eyebrow="Find your fit"
            title="Explore All Exams"
            description="Choose a direction, then build the preparation rhythm that works for you."
          />
          <div className="exam-results-toolbar">
            <span>
              Showing <strong>{filteredExams.length}</strong> of{" "}
              <strong>{examData.length}</strong> exams
            </span>
            {(search || activeCategory !== "All") && (
              <button type="button" onClick={clearFilters}>
                Clear Filters
              </button>
            )}
          </div>
          {filteredExams.length > 0 ? (
            <div className="all-exam-grid">
              {filteredExams.map((exam) => (
                <ExamCard key={exam.id} exam={exam} />
              ))}
            </div>
          ) : (
            <div className="exam-empty-state">
              <div className="exam-empty-icon">
                <Search size={22} />
              </div>
              <h2>No exams found</h2>
              <p>
                We couldn't find an exam matching your current search and
                filters.
              </p>
              <Button variant="primary" size="md" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </Container>
      </section>
      <section className="exam-final-cta">
        <Container>
          <div className="exam-final-cta-inner">
            <div>
              <span className="eyebrow">A little clarity goes a long way</span>
              <h2>Not Sure Where to Start?</h2>
              <p>
                Explore courses designed around your goals and build a learning
                path that works for you.
              </p>
            </div>
            <div className="exam-cta-actions">
              <Button variant="secondary" to="/courses">
                Explore Courses
              </Button>
              <Button variant="outline" to="/educators">
                Meet Our Educators
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
