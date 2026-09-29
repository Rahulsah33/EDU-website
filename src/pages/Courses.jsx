import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/common/Container.jsx";
import CourseFilters from "../components/course/CourseFilters.jsx";
import CourseGrid from "../components/course/CourseGrid.jsx";
import {
  filterCourses,
  searchCourses,
  sortCourses,
} from "../utils/courseUtils.js";

const competitiveExams = [
  "JEE",
  "NEET",
  "UPSC",
  "GATE",
  "SSC",
  "Banking",
  "CAT",
];
const programming = [
  "Java",
  "React",
  "DSA",
  "Python",
  "SQL",
  "Web Development",
];
const technology = ["Spring Boot", "System Design", "AI/ML", "Cloud", "DevOps"];

const categories = [
  { label: "All", matches: () => true },
  {
    label: "Competitive Exams",
    matches: (course) => competitiveExams.includes(course.category),
  },
  { label: "School", matches: (course) => course.category === "School" },
  {
    label: "Programming",
    matches: (course) => programming.includes(course.category),
  },
  {
    label: "Technology",
    matches: (course) => technology.includes(course.category),
  },
  {
    label: "Career Skills",
    matches: (course) => course.category === "Communication",
  },
  {
    label: "Communication",
    matches: (course) => course.category === "Communication",
  },
];

const categoryMatches = {
  "Competitive Exams": (course) => competitiveExams.includes(course.category),
  School: (course) => course.category === "School",
  Programming: (course) => programming.includes(course.category),
  Technology: (course) => technology.includes(course.category),
  "Career Skills": (course) => course.category === "Communication",
  Communication: (course) => course.category === "Communication",
};

const priceMatches = {
  Free: (price) => price === 0,
  "Under ₹999": (price) => price < 999,
  "₹999–₹1999": (price) => price >= 999 && price <= 1999,
  "₹2000+": (price) => price >= 2000,
};

const sortOptions = [
  ["popular", "Popular"],
  ["newest", "Newest"],
  ["highest-rated", "Highest Rated"],
  ["price-low", "Price: Low to High"],
  ["price-high", "Price: High to Low"],
];

const emptyFilters = {
  category: "",
  exam: "",
  level: "",
  price: "",
  rating: "",
};

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(emptyFilters);
  const [sortBy, setSortBy] = useState("popular");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeTab = categories.find(
    (category) => category.label === activeCategory,
  );
  const searchedCourses = searchCourses(search);
  const matchingCourses = filterCourses(searchedCourses, {
    category: (course) =>
      activeTab.matches(course) &&
      (!filters.category || categoryMatches[filters.category](course)),
    exam: filters.exam,
    level: filters.level,
    price: filters.price ? priceMatches[filters.price] : "",
    rating: filters.rating ? Number(filters.rating.replace("+", "")) : "",
  });
  const visibleCourses = sortCourses(matchingCourses, sortBy);
  const selectedCount = Object.values(filters).filter(Boolean).length;

  function updateFilter(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function clearAll() {
    setActiveCategory("All");
    setSearch("");
    setFilters(emptyFilters);
    setSortBy("popular");
  }

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Courses</span>
          </div>
          <div className="courses-hero-copy">
            <div>
              <span className="eyebrow">Build your next chapter</span>
              <h1>Explore Courses</h1>
              <p>
                Learn from expert educators and build skills that move you
                forward.
              </p>
            </div>
            <div className="course-search" role="search">
              <Search size={19} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by title, skill, exam..."
                aria-label="Search courses"
              />
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                aria-label="Open course filters"
                title="Filters"
              >
                <SlidersHorizontal size={18} />
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section className="courses-content">
        <Container>
          <nav className="category-tabs" aria-label="Course categories">
            {categories.map((category) => (
              <button
                className={
                  activeCategory === category.label
                    ? "category-tab active"
                    : "category-tab"
                }
                type="button"
                key={category.label}
                onClick={() => setActiveCategory(category.label)}
              >
                {category.label}
              </button>
            ))}
          </nav>
          <div className="courses-layout">
            <CourseFilters
              filters={filters}
              selectedCount={selectedCount}
              onChange={updateFilter}
              onClear={clearAll}
              mobileOpen={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
            />
            <div className="courses-results">
              <div className="courses-toolbar">
                <div>
                  <span className="courses-count">
                    {visibleCourses.length} courses found
                  </span>
                  <span className="courses-context">
                    {" "}
                    for your learning goals
                  </span>
                </div>
                <div className="courses-toolbar-actions">
                  <button
                    className="mobile-filter-button"
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <SlidersHorizontal size={15} /> Filters
                    {selectedCount > 0 && <span>{selectedCount}</span>}
                  </button>
                  <label className="sort-control">
                    <span>Sort by</span>
                    <select
                      value={sortBy}
                      onChange={(event) => setSortBy(event.target.value)}
                      aria-label="Sort courses"
                    >
                      {sortOptions.map(([value, label]) => (
                        <option value={value} key={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              {visibleCourses.length > 0 ? (
                <CourseGrid courses={visibleCourses} />
              ) : (
                <div className="course-empty-state">
                  <div className="empty-state-icon">
                    <Search size={22} />
                  </div>
                  <h2>No courses found</h2>
                  <p>Try another search or adjust your filters.</p>
                  <button
                    className="button button-primary button-md"
                    type="button"
                    onClick={clearAll}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
