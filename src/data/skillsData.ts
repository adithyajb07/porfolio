export interface SkillItem {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Proficient';
  proficiency: number; // 0 - 100 percentage
  description: string;
  category: string;
  usedInProjects?: string[];
  tags?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI / ML & Computer Vision',
    icon: 'Brain',
    skills: [
      {
        name: 'Machine Learning',
        level: 'Advanced',
        proficiency: 95,
        category: 'AI / ML',
        description: 'Supervised/unsupervised pipelines, regression, random forests, classification, and cross-validation metrics.',
        usedInProjects: ['Image Authenticity Detection System', 'SIH Financial Aid Assistant', 'Student Exam Predictor'],
        tags: ['Scikit-learn', 'Algorithms', 'Feature Engineering']
      },
      {
        name: 'Computer Vision',
        level: 'Advanced',
        proficiency: 92,
        category: 'AI / ML',
        description: 'Image processing, frequency domain FFT analysis, Local Binary Patterns (LBP), and Error Level Analysis (ELA).',
        usedInProjects: ['Image Authenticity Detection System'],
        tags: ['OpenCV', 'ELA', 'LBP', 'FFT']
      },
      {
        name: 'NLP',
        level: 'Advanced',
        proficiency: 90,
        category: 'AI / ML',
        description: 'Text tokenization, TF-IDF vectorization, adversarial prompt detection, and transformer embeddings.',
        usedInProjects: ['Adversarial Prompt Detection', 'SIH Financial Aid Assistant'],
        tags: ['NLTK', 'Transformers', 'DistilBERT']
      },
      {
        name: 'PyTorch',
        level: 'Intermediate',
        proficiency: 82,
        category: 'AI / ML',
        description: 'Constructing computational graphs, tensor matrices, backpropagation, and transformer inference engines.',
        usedInProjects: ['Adversarial Prompt Detection'],
        tags: ['Deep Learning', 'Tensors', 'GPU Acceleration']
      },
      {
        name: 'TensorFlow / Keras',
        level: 'Intermediate',
        proficiency: 80,
        category: 'AI / ML',
        description: 'Deep neural network layer prototyping, training epochs, weight serialization, and validation callbacks.',
        usedInProjects: ['Image Forensics Pipeline'],
        tags: ['Neural Networks', 'CNN', 'Deep Learning']
      },
      {
        name: 'OpenCV & YOLO',
        level: 'Advanced',
        proficiency: 88,
        category: 'AI / ML',
        description: 'Digital image transformation, matrix filters, edge/contour detection, and real-time bounding box regression.',
        usedInProjects: ['Image Authenticity Detection System'],
        tags: ['Object Detection', 'Contours', 'Real-time Vision']
      },
      {
        name: 'Transformers',
        level: 'Intermediate',
        proficiency: 85,
        category: 'AI / ML',
        description: 'Fine-tuning Pre-trained models (DistilBERT, LLM safety filters) for structured text security and classification.',
        usedInProjects: ['Adversarial Prompt Detection'],
        tags: ['LLMs', 'DistilBERT', 'Hugging Face']
      }
    ]
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      {
        name: 'Python',
        level: 'Advanced',
        proficiency: 96,
        category: 'Languages',
        description: 'Core language for ML research, OpenCV forensics, deep learning pipelines, FastAPI/Django backends, and data science.',
        usedInProjects: ['Image Authenticity Detection System', 'Adversarial Prompt Detection', 'Genrobotics ERP Backend', 'SIH Assistant'],
        tags: ['OOP', 'NumPy', 'Pandas', 'Django']
      },
      {
        name: 'Java',
        level: 'Intermediate',
        proficiency: 84,
        category: 'Languages',
        description: 'Object-oriented software development, concurrent multithreading, desktop Swing/JFrame applications, and driver bindings.',
        usedInProjects: ['BookCinema Ticket Portal'],
        tags: ['Multithreading', 'OOP', 'Swing UI']
      },
      {
        name: 'JavaScript / TypeScript',
        level: 'Advanced',
        proficiency: 88,
        category: 'Languages',
        description: 'Modern ES6+, asynchronous state management, dynamic DOM rendering, and TypeScript type safety systems.',
        usedInProjects: ['Portfolio Single Page Application', 'Web Portals'],
        tags: ['React', 'Async/Await', 'Type Safety']
      },
      {
        name: 'SQL',
        level: 'Advanced',
        proficiency: 90,
        category: 'Languages',
        description: 'Writing optimized multi-table JOINs, subqueries, relational schemas, indexing strategies, and ACID transactions.',
        usedInProjects: ['Genrobotics ERP System', 'Student Performance DB'],
        tags: ['PostgreSQL', 'SQLite', 'Query Optimization']
      },
      {
        name: 'C',
        level: 'Intermediate',
        proficiency: 78,
        category: 'Languages',
        description: 'Foundation for low-level memory allocation, pointers, data structures, and computational complexity analysis.',
        tags: ['Pointers', 'Memory Management', 'Algorithms']
      }
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Web Architecture',
    icon: 'Layers',
    skills: [
      {
        name: 'Django',
        level: 'Advanced',
        proficiency: 88,
        category: 'Frameworks',
        description: 'Backend REST API architecture, ORM querysets, secure session authentication, and scalable enterprise ERP modules.',
        usedInProjects: ['Genrobotics ERP System', 'Soften Tech Database Applications'],
        tags: ['REST API', 'ORM', 'Auth & Security']
      },
      {
        name: 'Streamlit',
        level: 'Advanced',
        proficiency: 94,
        category: 'Frameworks',
        description: 'Rapid deployment of interactive AI/ML dashboards, live feature visualizers, and inference test harnesses.',
        usedInProjects: ['Image Authenticity Detection System', 'Adversarial Prompt Detection', 'SIH Assistant'],
        tags: ['Data Visualization', 'ML UI', 'Dashboard']
      },
      {
        name: 'Angular / React',
        level: 'Intermediate',
        proficiency: 82,
        category: 'Frameworks',
        description: 'Modular SPA client-side development, component life cycles, reactive UI bindings, and Tailwind CSS design systems.',
        usedInProjects: ['Portfolio Application', 'Interactive Web Portals'],
        tags: ['Single Page Apps', 'Components', 'Reactive UI']
      }
    ]
  },
  {
    id: 'databases-tools',
    title: 'Databases, Cloud & DevOps',
    icon: 'Database',
    skills: [
      {
        name: 'PostgreSQL',
        level: 'Advanced',
        proficiency: 89,
        category: 'Databases & Tools',
        description: 'Enterprise relational database, complex migrations, foreign keys, JSONB queries, and high-throughput connections.',
        usedInProjects: ['Genrobotics ERP System'],
        tags: ['Relational DB', 'ACID', 'JSONB']
      },
      {
        name: 'MongoDB (NoSQL)',
        level: 'Intermediate',
        proficiency: 85,
        category: 'Databases & Tools',
        description: 'Document-oriented NoSQL storage, flexible collection schemas, Atlas cluster deployments, and index synchronization.',
        usedInProjects: ['BookCinema Ticket Portal'],
        tags: ['MongoDB Atlas', 'NoSQL', 'Document Store']
      },
      {
        name: 'Docker',
        level: 'Intermediate',
        proficiency: 80,
        category: 'Databases & Tools',
        description: 'Containerizing applications, multi-stage Dockerfiles, volume bindings, and reproducible environments.',
        usedInProjects: ['Containerized ML Deployments'],
        tags: ['Containers', 'Microservices', 'DevOps']
      },
      {
        name: 'Git & GitHub',
        level: 'Advanced',
        proficiency: 94,
        category: 'Databases & Tools',
        description: 'Distributed version control, branching strategies, collaborative PR reviews, and automated CI/CD static deployments.',
        usedInProjects: ['All Projects & Open Source Repositories'],
        tags: ['Version Control', 'CI/CD', 'Open Source']
      }
    ]
  }
];
