export interface SkillItem {
  name: string;
  level: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 'Advanced', description: 'Core language for ML, AI models, backend web frameworks, and computer vision pipelines.' },
      { name: 'Java', level: 'Intermediate', description: 'Used for object-oriented software engineering, desktop architectures, and enterprise systems.' },
      { name: 'C', level: 'Intermediate', description: 'Foundation for understanding low-level algorithms, pointer management, and computation efficiency.' },
      { name: 'JavaScript', level: 'Advanced', description: 'Primary scripting language for UI development, interactive states, and frontend components.' },
      { name: 'SQL', level: 'Advanced', description: 'Writing optimized queries, relational schemas, database indexings, and transaction flows.' },
      { name: 'HTML', level: 'Advanced', description: 'Constructing accessible, clean, and semantically sound structures for modern web layouts.' },
      { name: 'CSS', level: 'Advanced', description: 'Styling premium, responsive layouts with custom flex/grid systems and hardware-accelerated animations.' }
    ]
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Machine Learning', level: 'Advanced', description: 'Supervised/unsupervised models, regression/classification, feature extraction, and cross-validation.' },
      { name: 'Deep Learning', level: 'Intermediate', description: 'Neural networks, activation layers, backpropagation, and multi-layer perceptron training.' },
      { name: 'NLP', level: 'Advanced', description: 'Text pre-processing, tokenization, TF-IDF vectorization, sentiment classification, and fine-tuning transformers.' },
      { name: 'Computer Vision', level: 'Advanced', description: 'Image processing, matrix calculations, edge/contour detection, and object localization pipelines.' },
      { name: 'Transformers', level: 'Intermediate', description: 'Fine-tuning Pre-trained models (like DistilBERT) for custom text processing and safety filters.' }
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Django', level: 'Advanced', description: 'Used for backend API design, ORM database integrations, authentication routes, and server architectures.' },
      { name: 'Angular', level: 'Intermediate', description: 'Client-side SPA framework, modular component building, data-binding, and API integration.' },
      { name: 'Streamlit', level: 'Advanced', description: 'Creating interactive user interfaces for machine learning models and visual dashboards.' },
      { name: 'PyTorch', level: 'Intermediate', description: 'Building neural network computational graphs, tensor matrices, and conducting transformer inferences.' },
      { name: 'TensorFlow', level: 'Intermediate', description: 'Training deep models, saving graph weights, and utilizing model optimization techniques.' },
      { name: 'Keras', level: 'Intermediate', description: 'High-level neural network API to rapidly prototype, compile, and validate deep layers.' }
    ]
  },
  {
    title: 'Data & Databases',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', description: 'Enterprise-grade relational database, query optimizations, JSONB datatypes, and foreign constraints.' },
      { name: 'SQLite', level: 'Advanced', description: 'Lightweight database layer for rapid development, testing, and portable applications.' },
      { name: 'MongoDB', level: 'Intermediate', description: 'Document-oriented NoSQL database, flexible schemas, collections management, and indexes.' }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Docker', level: 'Intermediate', description: 'Containerizing services, drafting Dockerfiles, and orchestrating multi-container environments.' },
      { name: 'Git', level: 'Advanced', description: 'Distributed version control, branch management, conflict merges, and collaboration workflows.' },
      { name: 'GitHub', level: 'Advanced', description: 'Hosting repository files, pull requests, actions CI/CD, and deploying custom static pages.' },
      { name: 'OpenCV', level: 'Advanced', description: 'Image filtering, pixel transformations, digital analysis, and custom contour operations.' },
      { name: 'YOLO', level: 'Advanced', description: 'Rapid, real-time object detection models for bounding box regressions and class estimations.' }
    ]
  }
];
