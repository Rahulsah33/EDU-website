import { SlidersHorizontal, X } from "lucide-react";

const filterGroups = [
  {
    key: "category",
    label: "Category",
    options: [
      "Competitive Exams",
      "School",
      "Programming",
      "Technology",
      "Career Skills",
      "Communication",
    ],
  },
  {
    key: "exam",
    label: "Exam",
    options: [
      "JEE Main & Advanced",
      "NEET UG",
      "UPSC CSE",
      "GATE CSE",
      "SSC CGL",
      "IBPS PO, SBI PO",
      "CAT",
      "CBSE",
      "Technical Interviews",
      "AWS Associate",
      "Career Skill",
      "Professional Skill",
    ],
  },
  {
    key: "level",
    label: "Level",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    key: "price",
    label: "Price",
    options: ["Free", "Under ₹999", "₹999–₹1999", "₹2000+"],
  },
  { key: "rating", label: "Rating", options: ["4.5+", "4+", "3.5+"] },
];

export default function CourseFilters({
  filters,
  selectedCount,
  onChange,
  onClear,
  mobileOpen,
  onClose,
}) {
  const panel = (
    <div className="course-filters-panel">
      <div className="course-filters-heading">
        <div>
          <span className="eyebrow">Refine your path</span>
          <h2>Filters</h2>
        </div>
        {mobileOpen && (
          <button
            className="course-filter-close"
            type="button"
            onClick={onClose}
            aria-label="Close filters"
          >
            <X size={19} />
          </button>
        )}
      </div>
      {filterGroups.map((group) => (
        <label className="filter-field" key={group.key}>
          <span>{group.label}</span>
          <select
            value={filters[group.key]}
            onChange={(event) => onChange(group.key, event.target.value)}
          >
            <option value="">All {group.label.toLowerCase()}</option>
            {group.options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      ))}
      <div className="filter-actions">
        <span>{selectedCount} selected</span>
        <button type="button" onClick={onClear} disabled={!selectedCount}>
          Clear all
        </button>
      </div>
    </div>
  );

  return (
    <>
      <aside className="course-filters-desktop">
        <div className="course-filters-title">
          <SlidersHorizontal size={16} /> Filter courses
        </div>
        {panel}
      </aside>
      {mobileOpen && (
        <div className="course-filters-mobile">
          <button
            className="course-filter-backdrop"
            type="button"
            aria-label="Close filters"
            onClick={onClose}
          />
          <div className="course-filter-drawer">{panel}</div>
        </div>
      )}
    </>
  );
}
