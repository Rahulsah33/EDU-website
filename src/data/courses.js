const instructors = {
  ananya: { name: "Ananya Sharma", id: "inst-ananya-sharma" },
  rohan: { name: "Rohan Mehta", id: "inst-rohan-mehta" },
  priya: { name: "Priya Menon", id: "inst-priya-menon" },
  arjun: { name: "Arjun Kapoor", id: "inst-arjun-kapoor" },
  kavya: { name: "Kavya Iyer", id: "inst-kavya-iyer" },
  vikram: { name: "Vikram Singh", id: "inst-vikram-singh" },
  meera: { name: "Meera Nair", id: "inst-meera-nair" },
  dev: { name: "Dev Malhotra", id: "inst-dev-malhotra" },
};

const instructorPhotos = {
  "inst-ananya-sharma": "/assets/images/educators/ananya-sharma.jpg",
  "inst-rohan-mehta": "/assets/images/educators/rohan-mehta.jpg",
  "inst-priya-menon": "/assets/images/educators/priya-menon.jpg",
  "inst-arjun-kapoor": "/assets/images/educators/arjun-kapoor.jpg",
  "inst-kavya-iyer": "/assets/images/educators/kavya-iyer.jpg",
  "inst-vikram-singh": "/assets/images/educators/vikram-singh.jpg",
  "inst-meera-nair": "/assets/images/educators/meera-nair.jpg",
  "inst-dev-malhotra": "/assets/images/educators/dev-malhotra.jpg",
};

const photoToLocalMap = {
  "photo-1636466497217-26a42884da0b": "/assets/images/live-class.jpg",
  "photo-1530026405186-ed1f139313f8": "/assets/images/study-resources.jpg",
  "photo-1529107386315-e1a2ed48a620": "/assets/images/hero-ai.jpg",
  "photo-1554224155-6726b3ff858f": "/assets/images/study-resources.jpg",
  "photo-1509228468518-180dd4864904": "/assets/images/live-class.jpg",
  "photo-1515879218367-8466d910aaa4": "/assets/images/exam-arena.jpg",
  "photo-1558494949-ef010cbdcc31": "/assets/images/exam-arena.jpg",
  "photo-1498050108023-c5249f4df085": "/assets/images/ai-tutor.jpg",
};

const image = (id) => photoToLocalMap[id] || "/assets/images/live-class.jpg";

const review = (name, rating, text) => ({
  name,
  rating,
  text,
  date: "2026-08-14",
});

export const courses = [
  {
    id: "course-jee-physics-foundation",
    title: "JEE Physics: Mechanics to Modern Physics",
    slug: "jee-physics-mechanics-modern-physics",
    category: "JEE",
    exam: "JEE Main & Advanced",
    subject: "Physics",
    level: "Intermediate",
    instructor: instructors.ananya.name,
    instructorId: instructors.ananya.id,
    instructorPhoto: instructorPhotos["inst-ananya-sharma"],
    thumbnail: image("photo-1636466497217-26a42884da0b"),
    description:
      "Build strong JEE Physics intuition through mechanics, waves, electricity, optics, and modern physics with exam-focused problem solving.",
    shortDescription:
      "A complete, problem-first physics path for JEE aspirants.",
    rating: 4.8,
    reviewCount: 2480,
    students: 18400,
    duration: "46 hours",
    lessons: 112,
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    bestseller: true,
    language: "English",
    lastUpdated: "2026-08-20",
    whatYouWillLearn: [
      "Solve advanced mechanics problems",
      "Connect concepts across JEE Physics units",
      "Use time-efficient exam strategies",
    ],
    requirements: [
      "Class 11 Physics fundamentals",
      "Scientific calculator familiarity",
    ],
    modules: [
      {
        title: "Mechanics Core",
        lessons: ["Kinematics", "Newton's Laws", "Work, Energy and Power"],
      },
      {
        title: "Electricity and Magnetism",
        lessons: ["Electrostatics", "Current Electricity", "Magnetic Effects"],
      },
      {
        title: "Modern Physics",
        lessons: ["Dual Nature", "Atoms and Nuclei", "Semiconductors"],
      },
    ],
    reviews: [
      review(
        "Ishita Verma",
        5,
        "The problem sets made difficult JEE questions feel structured.",
      ),
      review(
        "Rahul Joshi",
        4,
        "Excellent explanations and very useful revision sheets.",
      ),
    ],
  },
  {
    id: "course-neet-biology-complete",
    title: "NEET Biology: NCERT Mastery",
    slug: "neet-biology-ncert-mastery",
    category: "NEET",
    exam: "NEET UG",
    subject: "Biology",
    level: "Intermediate",
    instructor: instructors.priya.name,
    instructorId: instructors.priya.id,
    instructorPhoto: instructorPhotos["inst-priya-menon"],
    thumbnail: image("photo-1530026405186-ed1f139313f8"),
    description:
      "Master every high-yield NCERT Biology concept with visual lessons, diagrams, and targeted NEET practice.",
    shortDescription:
      "NCERT-first biology preparation built for NEET accuracy.",
    rating: 4.9,
    reviewCount: 3160,
    students: 22600,
    duration: "58 hours",
    lessons: 148,
    price: 2999,
    originalPrice: 5999,
    discount: 50,
    bestseller: true,
    language: "English",
    lastUpdated: "2026-08-11",
    whatYouWillLearn: [
      "Recall NCERT facts faster",
      "Interpret diagrams and biological processes",
      "Improve accuracy with chapter tests",
    ],
    requirements: [
      "Class 11 and 12 Biology",
      "A copy of the latest NCERT textbooks",
    ],
    modules: [
      {
        title: "Cell and Genetics",
        lessons: ["Cell Biology", "Biomolecules", "Molecular Inheritance"],
      },
      {
        title: "Human Physiology",
        lessons: ["Digestion", "Circulation", "Neural Control"],
      },
      {
        title: "Ecology and Environment",
        lessons: ["Ecosystems", "Biodiversity", "Environmental Issues"],
      },
    ],
    reviews: [
      review(
        "Sneha Kulkarni",
        5,
        "The NCERT line-by-line approach is exactly what I needed.",
      ),
      review(
        "Aditya Shah",
        5,
        "Great diagrams and concise revision checkpoints.",
      ),
    ],
  },
  {
    id: "course-upsc-gs-foundation",
    title: "UPSC GS Foundation: Build the Big Picture",
    slug: "upsc-gs-foundation-big-picture",
    category: "UPSC",
    exam: "UPSC CSE",
    subject: "General Studies",
    level: "Beginner",
    instructor: instructors.vikram.name,
    instructorId: instructors.vikram.id,
    instructorPhoto: instructorPhotos["inst-vikram-singh"],
    thumbnail: image("photo-1529107386315-e1a2ed48a620"),
    description:
      "Understand the connected ideas behind polity, history, geography, economy, and environment for a confident UPSC foundation.",
    shortDescription:
      "A structured first step toward civil services preparation.",
    rating: 4.7,
    reviewCount: 1890,
    students: 14300,
    duration: "72 hours",
    lessons: 164,
    price: 4499,
    originalPrice: 7999,
    discount: 44,
    bestseller: true,
    language: "English",
    lastUpdated: "2026-07-28",
    whatYouWillLearn: [
      "Build an integrated GS mental model",
      "Read current affairs with context",
      "Create a sustainable study plan",
    ],
    requirements: [
      "No prior UPSC coaching required",
      "Daily newspaper reading habit",
    ],
    modules: [
      {
        title: "Indian Polity",
        lessons: ["Constitutional Framework", "Parliament", "Judiciary"],
      },
      {
        title: "History and Culture",
        lessons: ["Ancient India", "Modern India", "Art and Culture"],
      },
      {
        title: "Economy and Geography",
        lessons: ["Macroeconomics", "Resources", "Indian Geography"],
      },
    ],
    reviews: [
      review(
        "Madhav Rao",
        5,
        "The connections between subjects saved me a lot of revision time.",
      ),
      review(
        "Nandini Das",
        4,
        "Thoughtful teaching and a very clear weekly rhythm.",
      ),
    ],
  },
  {
    id: "course-banking-quant-reasoning",
    title: "Banking Exams: Quant and Reasoning Sprint",
    slug: "banking-exams-quant-reasoning-sprint",
    category: "Banking",
    exam: "IBPS PO, SBI PO",
    subject: "Aptitude",
    level: "Intermediate",
    instructor: instructors.kavya.name,
    instructorId: instructors.kavya.id,
    instructorPhoto: instructorPhotos["inst-kavya-iyer"],
    thumbnail: image("photo-1554224155-6726b3ff858f"),
    description:
      "Sharpen the high-impact quant and reasoning skills needed for banking prelims and mains.",
    shortDescription: "Fast, focused practice for banking aptitude exams.",
    rating: 4.7,
    reviewCount: 760,
    students: 5900,
    duration: "28 hours",
    lessons: 86,
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    bestseller: false,
    language: "English",
    lastUpdated: "2026-07-19",
    whatYouWillLearn: [
      "Recognize shortcut-friendly question types",
      "Solve puzzles under time pressure",
      "Review errors with an exam journal",
    ],
    requirements: ["Basic arithmetic", "Interest in timed practice"],
    modules: [
      {
        title: "Quantitative Aptitude",
        lessons: [
          "Simplification",
          "Number Series",
          "Arithmetic Word Problems",
        ],
      },
      {
        title: "Reasoning Ability",
        lessons: ["Puzzles", "Syllogisms", "Input-Output"],
      },
      {
        title: "Mock Analysis",
        lessons: ["Prelims Strategy", "Mains Strategy", "Error Log System"],
      },
    ],
    reviews: [
      review(
        "Sahil Gupta",
        5,
        "The timed sets helped me move from slow to steady.",
      ),
      review("Neha Thomas", 4, "Clear strategies and enough practice variety."),
    ],
  },
  {
    id: "course-school-math-classes-9-10",
    title: "School Mathematics: Classes 9 and 10",
    slug: "school-mathematics-classes-9-10",
    category: "School",
    exam: "CBSE",
    subject: "Mathematics",
    level: "Beginner",
    instructor: instructors.meera.name,
    instructorId: instructors.meera.id,
    instructorPhoto: instructorPhotos["inst-meera-nair"],
    thumbnail: image("photo-1509228468518-180dd4864904"),
    description:
      "Make school mathematics intuitive with visual explanations, worked examples, and board-style practice.",
    shortDescription: "A confidence-building math course for Classes 9 and 10.",
    rating: 4.9,
    reviewCount: 640,
    students: 5100,
    duration: "32 hours",
    lessons: 94,
    price: 999,
    originalPrice: 1799,
    discount: 44,
    bestseller: false,
    language: "English",
    lastUpdated: "2026-06-30",
    whatYouWillLearn: [
      "Understand core algebra and geometry",
      "Write complete board-ready solutions",
      "Practice chapter-wise with feedback",
    ],
    requirements: ["Class 8 mathematics", "A notebook for worked practice"],
    modules: [
      {
        title: "Algebra",
        lessons: ["Polynomials", "Linear Equations", "Quadratic Equations"],
      },
      {
        title: "Geometry",
        lessons: ["Triangles", "Circles", "Coordinate Geometry"],
      },
      {
        title: "Statistics and Probability",
        lessons: ["Data Handling", "Probability Basics", "Board Revision"],
      },
    ],
    reviews: [
      review(
        "Ritika Sharma",
        5,
        "My daughter finally enjoys solving instead of memorizing.",
      ),
      review(
        "Aman Khan",
        5,
        "The worked examples are simple without being shallow.",
      ),
    ],
  },
  {
    id: "course-java-backend-mastery",
    title: "Java Backend Mastery",
    slug: "java-backend-mastery",
    category: "Java",
    exam: "Professional Skill",
    subject: "Java",
    level: "Intermediate",
    instructor: instructors.rohan.name,
    instructorId: instructors.rohan.id,
    instructorPhoto: instructorPhotos["inst-rohan-mehta"],
    thumbnail: image("photo-1515879218367-8466d910aaa4"),
    description:
      "Build production-minded Java services from language fundamentals through APIs, testing, and persistence.",
    shortDescription: "From Java fundamentals to a deployable backend service.",
    rating: 4.8,
    reviewCount: 2840,
    students: 24800,
    duration: "44 hours",
    lessons: 118,
    price: 2799,
    originalPrice: 5499,
    discount: 49,
    bestseller: true,
    language: "English",
    lastUpdated: "2026-08-23",
    whatYouWillLearn: [
      "Write maintainable modern Java",
      "Design REST APIs and persistence layers",
      "Test and package a backend service",
    ],
    requirements: [
      "Basic programming experience",
      "A laptop with Java 21 installed",
    ],
    modules: [
      {
        title: "Java Foundations",
        lessons: ["Objects and Classes", "Collections", "Concurrency"],
      },
      {
        title: "Backend Engineering",
        lessons: ["REST APIs", "Persistence", "Validation"],
      },
      {
        title: "Production Readiness",
        lessons: ["Testing", "Logging", "Packaging"],
      },
    ],
    reviews: [
      review(
        "Nikhil Rao",
        5,
        "The capstone made the jump from tutorials to backend work much easier.",
      ),
      review(
        "Mansi Patel",
        5,
        "Deep technical knowledge with a very calm teaching style.",
      ),
    ],
  },
  {
    id: "course-system-design-scale",
    title: "System Design at Scale",
    slug: "system-design-at-scale",
    category: "System Design",
    exam: "Technical Interviews",
    subject: "Architecture",
    level: "Advanced",
    instructor: instructors.arjun.name,
    instructorId: instructors.arjun.id,
    instructorPhoto: instructorPhotos["inst-arjun-kapoor"],
    thumbnail: image("photo-1558494949-ef010cbdcc31"),
    description:
      "Learn a structured way to reason about scalable systems, from requirements and data models to reliability and trade-offs.",
    shortDescription:
      "A practical framework for senior system design interviews.",
    rating: 4.8,
    reviewCount: 1980,
    students: 15400,
    duration: "29 hours",
    lessons: 74,
    price: 3499,
    originalPrice: 6499,
    discount: 46,
    bestseller: false,
    language: "English",
    lastUpdated: "2026-07-31",
    whatYouWillLearn: [
      "Lead a system design conversation",
      "Choose storage and messaging patterns",
      "Reason about scale and failure",
    ],
    requirements: [
      "Professional software development experience",
      "Basic networking concepts",
    ],
    modules: [
      {
        title: "Design Foundations",
        lessons: ["Requirements", "Capacity Planning", "API Design"],
      },
      {
        title: "Distributed Building Blocks",
        lessons: ["Caching", "Queues", "Databases"],
      },
      {
        title: "Case Studies",
        lessons: ["News Feed", "Ride Matching", "Video Streaming"],
      },
    ],
    reviews: [
      review(
        "Saurabh Jain",
        5,
        "The framework gave my mock interviews a clear shape.",
      ),
      review(
        "Mita Roy",
        4,
        "Good depth without turning every topic into a buzzword list.",
      ),
    ],
  },
  {
    id: "course-fullstack-web-development",
    title: "Full-Stack Web Development",
    slug: "full-stack-web-development",
    category: "Web Development",
    exam: "Professional Skill",
    subject: "Web Development",
    level: "Intermediate",
    instructor: instructors.dev.name,
    instructorId: instructors.dev.id,
    instructorPhoto: instructorPhotos["inst-dev-malhotra"],
    thumbnail: image("photo-1498050108023-c5249f4df085"),
    description:
      "Build a complete web product across semantic HTML, modern CSS, JavaScript, React, APIs, and deployment.",
    shortDescription:
      "A portfolio-ready path from browser basics to full-stack delivery.",
    rating: 4.8,
    reviewCount: 3140,
    students: 27100,
    duration: "68 hours",
    lessons: 174,
    price: 3999,
    originalPrice: 7499,
    discount: 47,
    bestseller: true,
    language: "English",
    lastUpdated: "2026-08-21",
    whatYouWillLearn: [
      "Build accessible responsive interfaces",
      "Connect a frontend to APIs",
      "Deploy and explain a complete project",
    ],
    requirements: [
      "Basic computer literacy",
      "No prior web development required",
    ],
    modules: [
      { title: "The Web", lessons: ["HTML", "CSS", "Browser Fundamentals"] },
      {
        title: "JavaScript and React",
        lessons: ["JavaScript", "React", "Application State"],
      },
      { title: "Delivery", lessons: ["APIs", "Testing", "Deployment"] },
    ],
    reviews: [
      review(
        "Mihir Joshi",
        5,
        "I finished with a project I can actually explain in interviews.",
      ),
      review(
        "Lena Paul",
        5,
        "Excellent structure and a very polished capstone.",
      ),
    ],
  },
];

export const instructorDirectory = Object.values(instructors);

export default courses;
