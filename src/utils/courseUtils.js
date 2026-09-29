import courses from "../data/courses.js";

export function getCourseById(id) {
  return courses.find((course) => course.id === id);
}

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug);
}

export function getCoursesByCategory(category) {
  return courses.filter((course) => course.category === category);
}

export function getCoursesByExam(exam) {
  return courses.filter((course) => course.exam === exam);
}

export function searchCourses(query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return courses;

  return courses.filter((course) =>
    [
      course.title,
      course.category,
      course.exam,
      course.subject,
      course.instructor,
      course.description,
    ].some((field) => field.toLowerCase().includes(normalizedQuery)),
  );
}

export function filterCourses(courseList, filters) {
  return courseList.filter((course) => {
    const categoryMatch = !filters.category || filters.category(course);
    const examMatch = !filters.exam || course.exam === filters.exam;
    const levelMatch = !filters.level || course.level === filters.level;
    const priceMatch = !filters.price || filters.price(course.price);
    const ratingMatch = !filters.rating || course.rating >= filters.rating;
    return (
      categoryMatch && examMatch && levelMatch && priceMatch && ratingMatch
    );
  });
}

export function sortCourses(courseList, sortBy) {
  return [...courseList].sort((first, second) => {
    if (sortBy === "newest") {
      return new Date(second.lastUpdated) - new Date(first.lastUpdated);
    }
    if (sortBy === "highest-rated") return second.rating - first.rating;
    if (sortBy === "price-low") return first.price - second.price;
    if (sortBy === "price-high") return second.price - first.price;
    return second.students - first.students;
  });
}
