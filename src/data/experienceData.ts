export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  technologies: string[];
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  details: string;
}

export const experienceData: ExperienceItem[] = [
  {
    role: 'Software Intern',
    company: 'HealthEdge',
    location: 'Bengaluru, India',
    duration: 'June 2026 - Present',
    technologies: ['Performance Testing', 'Scalability Audits', 'Benchmarking', 'Product Analysis'],
    responsibilities: [
      'Conducting comprehensive performance and scalability evaluations for core frameworks and products developed within the organization.',
      'Analyzing latency bottlenecks, execution workloads, and system capacities under simulated high-throughput loads.'
    ]
  },
  {
    role: 'Software Intern',
    company: 'Genrobotics',
    location: 'Thiruvananthapuram, India',
    duration: 'April 2026 - May 2026',
    technologies: ['Django', 'Python', 'PostgreSQL', 'System Architecture', 'Git'],
    responsibilities: [
      'Developed modules for an ERP (Enterprise Resource Planning) application designed to streamline internal business operations across key workflows including inventory tracking, employee data, and process management.',
      'Designed and implemented modular backend systems with scalable architectures to ensure consistent data flow across multi-department operations.'
    ]
  },
  {
    role: 'Web Developer Intern',
    company: 'Soften Technologies',
    location: 'Kochi, India',
    duration: 'April 2025 - May 2025',
    technologies: ['Python', 'Django', 'SQLite3', 'HTML5', 'CSS3', 'JavaScript'],
    responsibilities: [
      'Developed and maintained responsive, web-based database applications using modern front-end and back-end web frameworks.',
      'Designed database tables, implemented queries, and integrated Django ORM and SQLite3 to support data persistence.'
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering (spec. in AIML)',
    institution: 'CHRIST (Deemed to be University)',
    location: 'Bengaluru, India',
    duration: 'July 2023 - May 2027 (Expected)',
    grade: 'CGPA: 3.89 / 4.0 (All 6 Semesters)',
    details: 'Specialization in Artificial Intelligence and Machine Learning. Active in campus fests: Event Head for Algo Royale during Magnovite \'25, and volunteered for ANVESHA \'25.'
  },
  {
    degree: 'Class XII (Senior Secondary School Certificate)',
    institution: 'Progressive English School',
    location: 'Sharjah, UAE',
    duration: 'Completed March 2023',
    grade: 'GPA: 93%',
    details: 'Completed Senior Secondary education (ISC/ICSE boards) with major focus in Mathematics, Computer Science, and Physics.'
  },
  {
    degree: 'Class X (Secondary School Certificate)',
    institution: 'Progressive English School',
    location: 'Sharjah, UAE',
    duration: 'Completed March 2021',
    grade: 'GPA: 91%',
    details: 'General secondary curriculum with high grades in Mathematics and Science streams.'
  }
];

export const cgpaData = [
  { semester: 'Sem 1', cgpa: 3.98 },
  { semester: 'Sem 2', cgpa: 3.96 },
  { semester: 'Sem 3', cgpa: 3.95 },
  { semester: 'Sem 4', cgpa: 3.93 },
  { semester: 'Sem 5', cgpa: 3.91 },
  { semester: 'Sem 6', cgpa: 3.89 }
];
