const sampleDates = (first, second) => [
  { label: "Application window", value: first, isSample: true },
  { label: "Mock exam window", value: second, isSample: true },
];

const pattern = (mode, sections, duration, marking) => ({
  mode,
  sections,
  duration,
  marking,
});

export const exams = [
  {
    id: "jee",
    slug: "jee",
    name: "Joint Entrance Examination",
    shortName: "JEE",
    category: "Engineering",
    description:
      "A focused preparation hub for engineering aspirants building command across Physics, Chemistry, and Mathematics.",
    shortDescription:
      "Prepare for engineering entrance with a structured PCM path.",
    icon: "atom",
    accent: "indigo",
    students: 250000,
    coursesCount: 45,
    educatorsCount: 18,
    subjects: ["Physics", "Chemistry", "Mathematics"],
    examPattern: pattern(
      "Computer-based test",
      ["Physics", "Chemistry", "Mathematics"],
      "3 hours",
      "Correct answers carry positive marks; incorrect answers may carry negative marks.",
    ),
    importantDates: sampleDates(
      "Sample: September 2026",
      "Sample: January 2027",
    ),
    preparationTips: [
      "Build concept notes before increasing problem volume.",
      "Review mock-test errors by topic and time spent.",
      "Reserve weekly time for mixed PCM practice.",
    ],
    faqs: [
      {
        question: "How should I begin JEE preparation?",
        answer:
          "Start with core concepts, then build a steady cycle of topic practice, revision, and mock analysis.",
      },
      {
        question: "Are both Main and Advanced covered?",
        answer:
          "The learning paths are designed to support the different depth and problem-solving styles of both stages.",
      },
    ],
    featuredCourses: [
      "course-jee-physics-foundation",
      "course-school-math-classes-9-10",
    ],
  },
  {
    id: "neet",
    slug: "neet",
    name: "National Eligibility cum Entrance Test",
    shortName: "NEET",
    category: "Medical",
    description:
      "A biology, chemistry, and physics preparation architecture for learners working toward medical entrance goals.",
    shortDescription:
      "Build accuracy and confidence for medical entrance preparation.",
    icon: "microscope",
    accent: "teal",
    students: 210000,
    coursesCount: 38,
    educatorsCount: 16,
    subjects: ["Biology", "Physics", "Chemistry"],
    examPattern: pattern(
      "Pen-and-paper test",
      ["Physics", "Chemistry", "Botany", "Zoology"],
      "3 hours 20 minutes",
      "Correct answers receive positive marks and incorrect answers receive negative marks.",
    ),
    importantDates: sampleDates("Sample: November 2026", "Sample: May 2027"),
    preparationTips: [
      "Use NCERT as the anchor for Biology revision.",
      "Mix diagram recall with timed question sets.",
      "Keep an error notebook for repeated calculation mistakes.",
    ],
    faqs: [
      {
        question: "How much Biology practice is useful?",
        answer:
          "Frequent short recall sessions combined with chapter-level tests create a reliable revision rhythm.",
      },
      {
        question: "Can I prepare Physics alongside Biology?",
        answer:
          "Yes. A weekly plan that alternates calculation-heavy and memory-heavy sessions helps maintain balance.",
      },
    ],
    featuredCourses: [
      "course-neet-biology-complete",
      "course-jee-physics-foundation",
    ],
  },
  {
    id: "upsc",
    slug: "upsc",
    name: "Union Public Service Commission Civil Services Examination",
    shortName: "UPSC",
    category: "Civil Services",
    description:
      "Build an integrated understanding of polity, history, geography, economy, and current affairs for civil services preparation.",
    shortDescription:
      "A connected General Studies path for civil services aspirants.",
    icon: "landmark",
    accent: "amber",
    students: 135000,
    coursesCount: 52,
    educatorsCount: 24,
    subjects: ["General Studies", "History", "Polity", "Geography", "Economy"],
    examPattern: pattern(
      "Multi-stage examination",
      ["Prelims", "Mains", "Interview"],
      "Stage-dependent",
      "Prelims uses objective scoring; Mains evaluates written answers and the interview assesses suitability.",
    ),
    importantDates: sampleDates("Sample: October 2026", "Sample: June 2027"),
    preparationTips: [
      "Build a daily current-affairs reading habit.",
      "Connect static subjects to contemporary examples.",
      "Practice answer structure before increasing answer length.",
    ],
    faqs: [
      {
        question: "When should I start answer writing?",
        answer:
          "Start with short, structured answers once your basic subject notes are stable, then add timed practice.",
      },
      {
        question: "Is one source enough for every subject?",
        answer:
          "Use a small, consistent source set and spend more time revising and applying what you read.",
      },
    ],
    featuredCourses: [
      "course-upsc-gs-foundation",
      "course-banking-quant-reasoning",
    ],
  },
  {
    id: "gate",
    slug: "gate",
    name: "Graduate Aptitude Test in Engineering",
    shortName: "GATE",
    category: "Postgraduate Engineering",
    description:
      "Strengthen technical fundamentals and exam strategy for GATE Computer Science and related engineering pathways.",
    shortDescription:
      "Master core engineering concepts with a revision-first plan.",
    icon: "cpu",
    accent: "violet",
    students: 88000,
    coursesCount: 34,
    educatorsCount: 15,
    subjects: [
      "Computer Science",
      "Algorithms",
      "Operating Systems",
      "Networks",
    ],
    examPattern: pattern(
      "Computer-based test",
      ["General Aptitude", "Engineering Mathematics", "Subject Questions"],
      "3 hours",
      "Questions may include multiple-choice, multiple-select, and numerical-answer formats.",
    ),
    importantDates: sampleDates("Sample: August 2026", "Sample: February 2027"),
    preparationTips: [
      "Map the syllabus before choosing revision order.",
      "Solve previous-year questions by concept, not only by year.",
      "Use full mocks to practice switching between question types.",
    ],
    faqs: [
      {
        question: "Which topics should I revise first?",
        answer:
          "Start with high-weightage foundations that support several other subjects, then target your weaker areas.",
      },
      {
        question: "How important is aptitude?",
        answer:
          "Aptitude is a consistent scoring opportunity and deserves regular timed practice.",
      },
    ],
    featuredCourses: ["course-system-design-scale", "course-java-backend-mastery"],
  },
  {
    id: "ssc-cgl",
    slug: "ssc-cgl",
    name: "Staff Selection Commission Combined Graduate Level",
    shortName: "SSC CGL",
    category: "Government Careers",
    description:
      "Prepare across quantitative aptitude, reasoning, English, and general awareness with speed-building practice.",
    shortDescription: "A practical foundation for SSC CGL preparation.",
    icon: "badge-check",
    accent: "rose",
    students: 120000,
    coursesCount: 29,
    educatorsCount: 13,
    subjects: [
      "Quantitative Aptitude",
      "Reasoning",
      "English",
      "General Awareness",
    ],
    examPattern: pattern(
      "Computer-based test",
      ["Tier I", "Tier II", "Skill Tests where applicable"],
      "Tier-dependent",
      "Objective questions use section-wise timing and negative marking.",
    ),
    importantDates: sampleDates("Sample: July 2026", "Sample: December 2026"),
    preparationTips: [
      "Build speed with short daily calculation drills.",
      "Track accuracy separately from attempts.",
      "Revise vocabulary and current affairs in small batches.",
    ],
    faqs: [
      {
        question: "How can I improve my speed?",
        answer:
          "Use timed sets, review the slowest questions, and repeat the same pattern until the method feels automatic.",
      },
      {
        question: "Should I attempt every question?",
        answer:
          "Prioritize accuracy and use mock analysis to define your personal attempt threshold.",
      },
    ],
    featuredCourses: [
      "course-banking-quant-reasoning",
      "course-school-math-classes-9-10",
    ],
  },
  {
    id: "banking",
    slug: "banking",
    name: "Banking Recruitment Examinations",
    shortName: "Banking",
    category: "Banking Careers",
    description:
      "Build the reasoning, quantitative, English, and banking-awareness skills needed for common banking recruitment exams.",
    shortDescription: "Practice smarter for PO and clerk-level banking exams.",
    icon: "wallet-cards",
    accent: "emerald",
    students: 96000,
    coursesCount: 26,
    educatorsCount: 12,
    subjects: [
      "Quantitative Aptitude",
      "Reasoning",
      "English",
      "Banking Awareness",
    ],
    examPattern: pattern(
      "Computer-based test",
      ["Prelims", "Mains", "Interview where applicable"],
      "Stage-dependent",
      "Objective sections use timed attempts and negative marking.",
    ),
    importantDates: sampleDates("Sample: June 2026", "Sample: November 2026"),
    preparationTips: [
      "Alternate puzzle practice with calculation practice.",
      "Read finance and banking news for context.",
      "Analyze sectional cut-offs through mock tests.",
    ],
    faqs: [
      {
        question: "Which skill usually needs the most practice?",
        answer:
          "It depends on your baseline; use a diagnostic test to find whether speed, puzzles, or language accuracy is the main gap.",
      },
      {
        question: "Can one plan cover multiple banking exams?",
        answer:
          "A common foundation works well, with exam-specific mock practice added near each target date.",
      },
    ],
    featuredCourses: [
      "course-banking-quant-reasoning",
      "course-school-math-classes-9-10",
    ],
  },
  {
    id: "cat",
    slug: "cat",
    name: "Common Admission Test",
    shortName: "CAT",
    category: "Business Education",
    description:
      "Develop the reading, reasoning, and quantitative judgment needed to approach CAT sections with a repeatable strategy.",
    shortDescription: "A structured path across Quant, VARC, and DILR.",
    icon: "chart-line",
    accent: "blue",
    students: 102000,
    coursesCount: 31,
    educatorsCount: 17,
    subjects: ["Quantitative Ability", "VARC", "DILR"],
    examPattern: pattern(
      "Computer-based test",
      ["VARC", "DILR", "Quantitative Ability"],
      "2 hours",
      "Sectional timing and scaled scoring reward accuracy and thoughtful selection.",
    ),
    importantDates: sampleDates("Sample: August 2026", "Sample: November 2026"),
    preparationTips: [
      "Read widely and summarize arguments, not just vocabulary.",
      "Practice choosing questions before trying to solve everything.",
      "Use mock reviews to improve selection and time allocation.",
    ],
    faqs: [
      {
        question: "How often should I take a mock?",
        answer:
          "Begin with enough topic practice to understand patterns, then increase mock frequency as your exam strategy develops.",
      },
      {
        question: "Is speed more important than accuracy?",
        answer:
          "Strong performance comes from balancing both; selection is often the highest-leverage skill.",
      },
    ],
    featuredCourses: [
      "course-banking-quant-reasoning",
      "course-system-design-scale",
    ],
  },
  {
    id: "cuet",
    slug: "cuet",
    name: "Common University Entrance Test",
    shortName: "CUET",
    category: "University Entrance",
    description:
      "Create a flexible preparation plan for language, domain subjects, and general test components across university entrance goals.",
    shortDescription:
      "Prepare for university entrance with a subject-aware study plan.",
    icon: "school",
    accent: "cyan",
    students: 74000,
    coursesCount: 22,
    educatorsCount: 11,
    subjects: ["Languages", "Domain Subjects", "General Test"],
    examPattern: pattern(
      "Computer-based test",
      ["Language", "Domain Subjects", "General Test where applicable"],
      "Subject-dependent",
      "Each test paper follows its notified marking and timing scheme.",
    ),
    importantDates: sampleDates("Sample: February 2027", "Sample: May 2027"),
    preparationTips: [
      "Confirm the subject combination required by each target program.",
      "Revise school-level foundations before adding speed work.",
      "Practice switching between language and domain question styles.",
    ],
    faqs: [
      {
        question: "Can I choose multiple domain subjects?",
        answer:
          "Your final combination should follow the eligibility rules of the programs you are targeting.",
      },
      {
        question: "How should I balance school and CUET preparation?",
        answer:
          "Use your school syllabus as the foundation and add timed mixed practice for the test format.",
      },
    ],
    featuredCourses: [
      "course-school-math-classes-9-10",
      "course-jee-physics-foundation",
    ],
  },
  {
    id: "class-10",
    slug: "class-10",
    name: "Class 10 Board Examinations",
    shortName: "Class 10",
    category: "School",
    description:
      "Build a confident Class 10 foundation with clear concepts, board-style practice, and a calm revision plan.",
    shortDescription: "A steady school-learning path for Class 10 success.",
    icon: "book-open",
    accent: "orange",
    students: 68000,
    coursesCount: 18,
    educatorsCount: 10,
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    examPattern: pattern(
      "Written and school-based assessment",
      ["Subject papers", "Internal assessment where applicable"],
      "Subject-dependent",
      "Question formats and weightage vary by board and subject.",
    ),
    importantDates: sampleDates(
      "Sample: October 2026",
      "Sample: February 2027",
    ),
    preparationTips: [
      "Keep a weekly rotation across every subject.",
      "Practice writing complete answers under time limits.",
      "Use the final weeks for recall and sample-paper review.",
    ],
    faqs: [
      {
        question: "When should board revision begin?",
        answer:
          "Begin light cumulative revision early so the final weeks can focus on practice papers and confidence.",
      },
      {
        question: "Are these tips board-specific?",
        answer:
          "They are broad study principles; always follow your board's latest syllabus and assessment guidance.",
      },
    ],
    featuredCourses: [
      "course-school-math-classes-9-10",
      "course-jee-physics-foundation",
    ],
  },
  {
    id: "class-12",
    slug: "class-12",
    name: "Class 12 Board Examinations",
    shortName: "Class 12",
    category: "School",
    description:
      "Organize Class 12 study around strong subject fundamentals, practical application, and board-ready answer writing.",
    shortDescription:
      "A focused plan for Class 12 boards and next-step readiness.",
    icon: "graduation-cap",
    accent: "purple",
    students: 72000,
    coursesCount: 24,
    educatorsCount: 14,
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
    examPattern: pattern(
      "Written and practical assessment",
      ["Theory papers", "Practical or project work where applicable"],
      "Subject-dependent",
      "Marking schemes depend on board, subject, and practical components.",
    ),
    importantDates: sampleDates("Sample: November 2026", "Sample: March 2027"),
    preparationTips: [
      "Map every chapter to concepts, examples, and practice questions.",
      "Schedule practical and theory preparation separately.",
      "Use timed answer writing to improve presentation and completion.",
    ],
    faqs: [
      {
        question: "Can board preparation support entrance preparation?",
        answer:
          "Strong subject fundamentals help both, but entrance exams need additional timed and application-focused practice.",
      },
      {
        question: "How should I revise long subjects?",
        answer:
          "Break chapters into short recall blocks and revisit them through spaced practice.",
      },
    ],
    featuredCourses: [
      "course-school-math-classes-9-10",
      "course-jee-physics-foundation",
      "course-neet-biology-complete",
    ],
  },
];

export default exams;
