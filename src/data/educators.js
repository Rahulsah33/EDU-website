const educatorReview = (student, rating, comment) => ({
  student,
  rating,
  comment,
  date: "2026-08-14",
});

const educatorPhotoMap = {
  "inst-ananya-sharma": "/assets/images/educators/ananya-sharma.jpg",
  "ananya-sharma": "/assets/images/educators/ananya-sharma.jpg",
  "AS": "/assets/images/educators/ananya-sharma.jpg",

  "inst-rohan-mehta": "/assets/images/educators/rohan-mehta.jpg",
  "rohan-mehta": "/assets/images/educators/rohan-mehta.jpg",
  "RM": "/assets/images/educators/rohan-mehta.jpg",

  "inst-priya-menon": "/assets/images/educators/priya-menon.jpg",
  "priya-menon": "/assets/images/educators/priya-menon.jpg",
  "PM": "/assets/images/educators/priya-menon.jpg",

  "inst-arjun-kapoor": "/assets/images/educators/arjun-kapoor.jpg",
  "arjun-kapoor": "/assets/images/educators/arjun-kapoor.jpg",
  "AK": "/assets/images/educators/arjun-kapoor.jpg",

  "inst-kavya-iyer": "/assets/images/educators/kavya-iyer.jpg",
  "kavya-iyer": "/assets/images/educators/kavya-iyer.jpg",
  "KI": "/assets/images/educators/kavya-iyer.jpg",

  "inst-vikram-singh": "/assets/images/educators/vikram-singh.jpg",
  "vikram-singh": "/assets/images/educators/vikram-singh.jpg",
  "VS": "/assets/images/educators/vikram-singh.jpg",

  "inst-meera-nair": "/assets/images/educators/meera-nair.jpg",
  "meera-nair": "/assets/images/educators/meera-nair.jpg",
  "MN": "/assets/images/educators/meera-nair.jpg",

  "inst-dev-malhotra": "/assets/images/educators/dev-malhotra.jpg",
  "dev-malhotra": "/assets/images/educators/dev-malhotra.jpg",
  "DM": "/assets/images/educators/dev-malhotra.jpg",
};

const avatar = (initials, slug, id) =>
  educatorPhotoMap[id] || educatorPhotoMap[slug] || educatorPhotoMap[initials] || initials;

export const educators = [
  {
    id: "inst-ananya-sharma",
    slug: "ananya-sharma",
    name: "Ananya Sharma",
    avatar: avatar("AS", "ananya-sharma", "inst-ananya-sharma"),
    subject: "Physics",
    category: "Competitive Exams",
    experience: "8+ years",
    students: 18400,
    rating: 4.8,
    coursesCount: 12,
    bio: "Ananya helps learners turn difficult Physics ideas into visual, solvable patterns through patient explanations and deliberate practice.",
    expertise: [
      "Mechanics",
      "Electricity and Magnetism",
      "JEE Problem Solving",
    ],
    achievements: [
      "Mentored 18,000+ learners",
      "Designed 12 exam preparation courses",
    ],
    courses: ["course-jee-physics-foundation"],
    reviews: [
      educatorReview(
        "Ishita Verma",
        5,
        "Her explanations make hard problems feel approachable.",
      ),
      educatorReview(
        "Rahul Joshi",
        4,
        "Clear, structured, and always focused on the why.",
      ),
    ],
  },
  {
    id: "inst-rohan-mehta",
    slug: "rohan-mehta",
    name: "Rohan Mehta",
    avatar: avatar("RM", "rohan-mehta", "inst-rohan-mehta"),
    subject: "Java",
    category: "Programming",
    experience: "10+ years",
    students: 37700,
    rating: 4.9,
    coursesCount: 16,
    bio: "Rohan teaches backend engineering with a focus on readable code, practical architecture, and the habits that help developers grow on real teams.",
    expertise: ["Java", "Spring Boot", "Backend Architecture"],
    achievements: [
      "Built production systems across three industries",
      "Published 16 hands-on learning paths",
    ],
    courses: ["course-java-backend-mastery"],
    reviews: [
      educatorReview(
        "Nikhil Rao",
        5,
        "The project feedback changed how I think about backend design.",
      ),
      educatorReview(
        "Mansi Patel",
        5,
        "Deep technical knowledge with a very calm teaching style.",
      ),
    ],
  },
  {
    id: "inst-priya-menon",
    slug: "priya-menon",
    name: "Priya Menon",
    avatar: avatar("PM", "priya-menon", "inst-priya-menon"),
    subject: "Biology",
    category: "Competitive Exams",
    experience: "9+ years",
    students: 33400,
    rating: 4.9,
    coursesCount: 11,
    bio: "Priya combines NCERT precision with memory systems that help medical aspirants revise intelligently and retain more under pressure.",
    expertise: ["Human Physiology", "Genetics", "NCERT Revision"],
    achievements: [
      "Created 11 Biology revision programs",
      "Known for diagram-led teaching",
    ],
    courses: ["course-neet-biology-complete"],
    reviews: [
      educatorReview(
        "Sneha Kulkarni",
        5,
        "The revision system is thoughtful and incredibly effective.",
      ),
      educatorReview(
        "Aditya Shah",
        5,
        "Every diagram has a purpose and the practice is well chosen.",
      ),
    ],
  },
  {
    id: "inst-arjun-kapoor",
    slug: "arjun-kapoor",
    name: "Arjun Kapoor",
    avatar: avatar("AK", "arjun-kapoor", "inst-arjun-kapoor"),
    subject: "System Design",
    category: "Technology",
    experience: "12+ years",
    students: 23600,
    rating: 4.8,
    coursesCount: 18,
    bio: "Arjun teaches engineers to reason through ambiguity, make trade-offs explicit, and communicate system decisions with confidence.",
    expertise: [
      "Distributed Systems",
      "System Design Interviews",
      "Scalable APIs",
    ],
    achievements: [
      "Reviewed 500+ architecture interviews",
      "Led platforms serving millions of users",
    ],
    courses: ["course-system-design-scale"],
    reviews: [
      educatorReview(
        "Saurabh Jain",
        5,
        "The frameworks make system design conversations much easier to lead.",
      ),
      educatorReview(
        "Mita Roy",
        4,
        "Excellent examples and honest trade-off discussions.",
      ),
    ],
  },
  {
    id: "inst-kavya-iyer",
    slug: "kavya-iyer",
    name: "Kavya Iyer",
    avatar: avatar("KI", "kavya-iyer", "inst-kavya-iyer"),
    subject: "Quantitative Aptitude",
    category: "Career Skills",
    experience: "7+ years",
    students: 19500,
    rating: 4.7,
    coursesCount: 9,
    bio: "Kavya makes aptitude feel less like a race and more like a set of recognizable patterns that improve with focused practice.",
    expertise: ["Quantitative Aptitude", "Banking Exams", "Python Automation"],
    achievements: [
      "Coached 19,000+ aptitude learners",
      "Built practical speed-drill systems",
    ],
    courses: ["course-banking-quant-reasoning"],
    reviews: [
      educatorReview(
        "Sahil Gupta",
        5,
        "The drills helped me become faster without becoming careless.",
      ),
      educatorReview(
        "Preeti Shah",
        4,
        "Very practical lessons and great practice pacing.",
      ),
    ],
  },
  {
    id: "inst-vikram-singh",
    slug: "vikram-singh",
    name: "Vikram Singh",
    avatar: avatar("VS", "vikram-singh", "inst-vikram-singh"),
    subject: "General Studies",
    category: "Competitive Exams",
    experience: "14+ years",
    students: 21700,
    rating: 4.8,
    coursesCount: 21,
    bio: "Vikram connects static subjects, current affairs, and answer writing so civil services preparation feels coherent instead of scattered.",
    expertise: ["Indian Polity", "Modern History", "Answer Writing"],
    achievements: [
      "Mentored multiple mains cohorts",
      "Created 21 integrated GS courses",
    ],
    courses: ["course-upsc-gs-foundation"],
    reviews: [
      educatorReview(
        "Madhav Rao",
        5,
        "The connections between subjects make revision much more meaningful.",
      ),
      educatorReview(
        "Nandini Das",
        4,
        "Thoughtful teaching and strong answer frameworks.",
      ),
    ],
  },
  {
    id: "inst-meera-nair",
    slug: "meera-nair",
    name: "Meera Nair",
    avatar: avatar("MN", "meera-nair", "inst-meera-nair"),
    subject: "Mathematics",
    category: "School",
    experience: "8+ years",
    students: 19800,
    rating: 4.7,
    coursesCount: 13,
    bio: "Meera teaches school mathematics and analytical thinking with a focus on clean steps, time awareness, and confidence-building feedback.",
    expertise: ["School Mathematics", "Algebra", "Geometry"],
    achievements: [
      "Designed 13 practice-led courses",
      "Specialist in foundational mathematics",
    ],
    courses: ["course-school-math-classes-9-10"],
    reviews: [
      educatorReview(
        "Vivek Tiwari",
        5,
        "The structured lessons fit smoothly into school exam preparation.",
      ),
      educatorReview(
        "Ritika Sharma",
        5,
        "Patient, precise, and very good at building student confidence.",
      ),
    ],
  },
  {
    id: "inst-dev-malhotra",
    slug: "dev-malhotra",
    name: "Dev Malhotra",
    avatar: avatar("DM", "dev-malhotra", "inst-dev-malhotra"),
    subject: "Web Development",
    category: "Programming",
    experience: "11+ years",
    students: 50800,
    rating: 4.9,
    coursesCount: 15,
    bio: "Dev helps aspiring developers build polished products while learning the architecture, accessibility, and debugging habits behind them.",
    expertise: ["React", "Web Development", "Frontend Architecture"],
    achievements: [
      "Built and reviewed 100+ product interfaces",
      "Mentored 50,000+ developers",
    ],
    courses: ["course-fullstack-web-development"],
    reviews: [
      educatorReview(
        "Ayesha Khan",
        5,
        "The project feels like real product work, not a toy exercise.",
      ),
      educatorReview(
        "Mihir Joshi",
        5,
        "Fantastic balance of visual polish and engineering depth.",
      ),
    ],
  },
];

export default educators;
