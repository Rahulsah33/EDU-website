import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import EducatorCard from "../components/educators/EducatorCard.jsx";
import educators from "../data/educators.js";

export default function Educators() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const educatorData = Array.isArray(educators) ? educators : [];
  const filterOptions = [
    "All",
    ...new Set([
      ...educatorData.map((educator) => educator.subject),
      ...educatorData.map((educator) => educator.category),
    ]),
  ];
  const featuredEducators = [...educatorData]
    .sort((first, second) => second.rating - first.rating)
    .slice(0, 4);
  const normalizedSearch = search.trim().toLowerCase();
  const filteredEducators = educatorData.filter((educator) => {
    const filterMatch =
      activeFilter === "All" ||
      educator.subject === activeFilter ||
      educator.category === activeFilter;
    const searchableText = [
      educator.name,
      educator.subject,
      educator.category,
      educator.bio,
      ...educator.expertise,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return (
      filterMatch &&
      (!normalizedSearch || searchableText.includes(normalizedSearch))
    );
  });

  function clearFilters() {
    setSearch("");
    setActiveFilter("All");
  }

  return (
    <div className="educators-page">
      <section className="educators-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Educators</span>
          </div>
          <div className="educators-hero-content">
            <motion.div
              className="educators-hero-copy"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Badge variant="primary">The people behind the progress</Badge>
              <h1>
                Learn From People
                <br />
                <em>Who Know the Path.</em>
              </h1>
              <p>
                Meet experienced educators who turn complex concepts into clear,
                practical learning experiences.
              </p>
            </motion.div>
            <div className="educator-search" role="search">
              <Search size={19} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search educators, subjects, or expertise..."
                aria-label="Search educators, subjects, or expertise"
              />
              {search && (
                <button
                  className="educator-search-clear"
                  type="button"
                  aria-label="Clear educator search"
                  onClick={() => setSearch("")}
                >
                  <X size={17} />
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>
      <section className="featured-educators-section section-space">
        <Container>
          <SectionHeading
            eyebrow="Learn with confidence"
            title="Featured Educators"
            description="Thoughtful teachers, practical frameworks, and the clarity to help you keep moving."
          />
          <div className="featured-educator-grid">
            {featuredEducators.map((educator, index) => (
              <motion.div
                key={educator.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-35px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <EducatorCard educator={educator} featured />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      <section className="all-educators-section section-space">
        <Container>
          <SectionHeading
            eyebrow="Find your guide"
            title="Meet Our Educators"
            description="Explore the people bringing structure, experience, and a human point of view to every learning path."
          />
          <nav className="educator-filter-tabs" aria-label="Filter educators">
            {filterOptions.map((filter) => (
              <button
                className={
                  activeFilter === filter
                    ? "educator-filter-tab active"
                    : "educator-filter-tab"
                }
                type="button"
                key={filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </nav>
          <div className="educator-results-toolbar">
            <span>
              Showing <strong>{filteredEducators.length}</strong> of{" "}
              <strong>{educatorData.length}</strong> educators
            </span>
            {(search || activeFilter !== "All") && (
              <button type="button" onClick={clearFilters}>
                Clear Filters
              </button>
            )}
          </div>
          {filteredEducators.length > 0 ? (
            <div className="all-educator-grid">
              {filteredEducators.map((educator) => (
                <EducatorCard key={educator.id} educator={educator} />
              ))}
            </div>
          ) : (
            <div className="educator-empty-state">
              <div className="educator-empty-icon">
                <Search size={22} />
              </div>
              <h2>No educators found</h2>
              <p>Try adjusting your search or selected filters.</p>
              <Button size="md" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </Container>
      </section>
      <section className="educator-final-cta">
        <Container>
          <div className="educator-final-cta-inner">
            <div>
              <span className="eyebrow">Make learning feel personal</span>
              <h2>Build Your Learning Team</h2>
              <p>
                Find educators who match your goals, learning style, and
                subjects.
              </p>
            </div>
            <div className="educator-cta-actions">
              <Button to="/courses" size="lg">
                Explore Courses
              </Button>
              <Button to="/exams" variant="outline" size="lg">
                Explore Exams
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
