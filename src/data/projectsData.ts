export interface Project {
  id: string;
  title: string;
  category: 'AI / ML' | 'Computer Vision' | 'NLP' | 'Web Development' | 'Enterprise';
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  github: string;
  liveDemo?: string;
  image: string;
  results?: {
    label: string;
    value: string;
  }[];
}

export const projectsData: Project[] = [
  {
    id: 'image-authenticity',
    title: 'Image Authenticity Detection System',
    category: 'Computer Vision',
    description: 'An ML-based image forensics system to classify images as Authentic, Manipulated, or AI-Generated using a Random Forest Classifier model and Error Level Analysis.',
    longDescription: 'This digital image forensics system is designed to identify local pixel manipulation (splicing, copy-move) and AI-generated syntheses. By utilizing Error Level Analysis (ELA), the application detects differences in compression ratios across an image. Visual features such as Local Binary Patterns (LBP) and statistical features (Entropy, FFT, noise variance, and edge density) are extracted and trained on a Random Forest classifier to classify image authenticity with high precision.',
    problem: 'With the rise of generative AI and sophisticated editing tools, detecting digital image manipulation has become highly complex. Traditional metadata analysis is easily bypassed, making visual forensics algorithms critical.',
    solution: 'Developed an ML system to classify images as Authentic, Manipulated, or AI-Generated. The solution integrates compression-difference visualization and a machine learning feature extraction model (FFT frequency analysis + LBP texture descriptor + Random Forest classifier) deployed via an interactive Streamlit dashboard.',
    features: [
      'Error Level Analysis (ELA) visualization',
      'EXIF Metadata parsing and manipulation flags',
      'Texture Analysis using Local Binary Patterns (LBP)',
      'Frequency domain analysis via Fast Fourier Transform (FFT)',
      'Noise variance estimation and edge density analysis',
      'Streamlit web dashboard for real-time file upload and visual inspection'
    ],
    technologies: ['Python', 'Random Forest', 'ELA', 'OpenCV', 'Pillow', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/adithyajb07',
    image: 'pic1.jpg',
    results: [
      { label: 'Detection Accuracy', value: '92.4%' },
      { label: 'Processing Speed', value: '< 2.5s / image' }
    ]
  },
  {
    id: 'adversarial-prompt',
    title: 'Adversarial Prompt Detection System',
    category: 'NLP',
    description: 'An NLP-based classifier model designed to detect adversarial, jailbreak, or unethical prompts in order to prevent the misuse of AI systems.',
    longDescription: 'This project implements an AI security layer positioned in front of Large Language Models (LLMs) to identify prompt injection, jailbreak strategies, and obfuscated input attacks. Utilizing a fine-tuned classifier, the system tokenizes input prompts, analyzes structural semantics, and labels input as safe or malicious. It is designed to mitigate unauthorized model output, prompt leakages, and privilege escalation attacks.',
    problem: 'LLMs are susceptible to prompt injection and jailbreak payloads that force them to bypass safety guardrails or leak proprietary prompts, threatening application security.',
    solution: 'Built an NLP-based classifier model to detect adversarial or unethical prompts. Deployed semantic processing filters for obfuscated text (such as Base64 decoding, token padding, and character-substitution normalization).',
    features: [
      'Real-time prompt filtering API',
      'Jailbreak and adversarial attack classification',
      'Obfuscated payload decoding (Base64, hex, and rot13 normalization)',
      'High-performance PyTorch inference pipeline',
      'Interactive Streamlit UI for threat modeling'
    ],
    technologies: ['Python', 'NLP', 'TF-IDF', 'DistilBERT', 'Transformers', 'PyTorch', 'Scikit-learn'],
    github: 'https://github.com/adithyajb07/LLM-Jailbreak-Prompt-Injection-Detection',
    image: 'pic2.jpg',
    results: [
      { label: 'Jailbreak Recall', value: '96.2%' },
      { label: 'Precision Rate', value: '94.8%' },
      { label: 'F1 Score', value: '95.5%' },
      { label: 'Latency Overhead', value: '< 45ms' }
    ]
  },
  {
    id: 'smart-bottle',
    title: 'Smart Bottle Vision System',
    category: 'Computer Vision',
    description: 'A computer vision system utilizing object detection and contour analysis for classifying bottle materials, calculating orientation, and estimating fill levels.',
    longDescription: 'This vision-based inspection system is designed for quality control. It leverages YOLO for robust bottle and object detection in images. Once detected, the model uses OpenCV color channel analysis and contour descriptors to classify bottle material (plastic vs glass), determines the angle of orientation to verify alignment, and performs a fill-level estimation by identifying liquid boundaries and volume ratios.',
    problem: 'Industrial beverage packaging lines require rapid, contact-free inspections to verify product fill levels, check container integrity, and ensure correct positioning on conveyor lines.',
    solution: 'Created an automated inspection pipeline merging object detection (YOLO) with classical geometric computer vision algorithms (Canny edge detection, Hough lines, and contour bounding boxes) inside a responsive Streamlit visualization dashboard.',
    features: [
      'Bottle object detection and spatial localization',
      'Material classification (glass vs plastic opacity profiles)',
      'Orientation angle estimation and alignment correction',
      'Liquid boundary detection and volume estimation',
      'Streamlit dashboard displaying visual step-by-step pipeline outputs'
    ],
    technologies: ['Python', 'OpenCV', 'YOLO', 'Streamlit', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/adithyajb07',
    image: 'pic3.jpg',
    results: [
      { label: 'Detection Accuracy', value: '97.1%' },
      { label: 'Fill Estimation Error', value: '± 3.2%' },
      { label: 'Processing Frame-Rate', value: '28 FPS' }
    ]
  },
  {
    id: 'gen-erp',
    title: 'Genrobotics ERP',
    category: 'Enterprise',
    description: 'A comprehensive Enterprise Resource Planning (ERP) application designed to streamline multi-vendor quotation workflows, procurement tracking, and digital financial approvals.',
    longDescription: 'During my internship at Genrobotics, I contributed to the architecture and backend/frontend development of an enterprise-grade ERP system. The platform digitizes operational and financial workflows, starting from purchase requests, multi-vendor quotation comparison, procurement settlements, to multi-tier digital approvals, installment tracking, and automated balance settlements.',
    problem: 'Manual procurement and quotation reviews in growing hardware engineering firms are prone to error, delay vendor coordination, and make audit trails difficult to track.',
    solution: 'Collaborated on developing structured workflow models in Django, incorporating a relational PostgreSQL schema and Angular modular dashboards. Configured multi-role access controls, transaction validation rules, and automated status transition hooks.',
    features: [
      'Quotation management and vendor bid comparison arrays',
      'Sequential purchase request and multi-tier approval routes',
      'Payment tracking, installment scheduling, and automated reminders',
      'Dynamic balance monitoring and status transition workflows',
      'Docker containerized deployment with PostgreSQL database backend'
    ],
    technologies: ['Angular', 'Django', 'Python', 'PostgreSQL', 'Docker', 'REST APIs', 'Git'],
    github: 'https://github.com/adithyajb07',
    image: 'pic4.jpg',
    results: [
      { label: 'Approval Speedup', value: '60%' },
      { label: 'Workflow Accuracy', value: '100%' },
      { label: 'Active ERP Modules', value: '5 Modules' }
    ]
  },
  {
    id: 'cleanfreshly',
    title: 'CleanFreshly Web Services',
    category: 'Web Development',
    description: 'A responsive e-commerce web platform integrating a relational catalog database, custom checkout shopping cart, and Razorpay payment gateways.',
    longDescription: 'CleanFreshly is a fully functional web application engineered to facilitate e-commerce operations. Built on a Django backbone, the system manages user registration/authentication, catalog browsing, shopping cart caching, and order invoice creation. It integrates the Razorpay payment API to process live online transactions securely and uses MySQL for robust transactional data management.',
    problem: 'Building robust, secure, and responsive e-commerce portals requires a carefully designed database schema and seamless payment service integration to prevent transaction dropouts.',
    solution: 'Developed a full-stack e-commerce platform enabling product browsing, cart management, and secure order placement. Integrated Razorpay payment gateway API and MySQL relational schema.',
    features: [
      'User accounts, profile management, and session cookies',
      'Dynamic inventory management and interactive cart controllers',
      'Razorpay payment gateway API integration',
      'Relational MySQL schema with transaction integrity guarantees',
      'Fully responsive UI styled with modern CSS variables'
    ],
    technologies: ['Django', 'Python', 'MySQL', 'Razor-Pay', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
    github: 'https://github.com/adithyajb07',
    image: 'pic5.jpg',
    results: [
      { label: 'Transaction Reliability', value: '99.9%' },
      { label: 'Page Load Speed', value: '1.2s' }
    ]
  },
  {
    id: 'sentiment-analysis',
    title: 'Product Review Sentiment Classifier',
    category: 'AI / ML',
    description: 'An NLP-based classification model that processes customer reviews, normalizes text inputs, and evaluates sentiment polarity using machine learning classifiers.',
    longDescription: 'This machine learning project focuses on analyzing customer reviews to classify them as positive, negative, or neutral. Text inputs are pre-processed using tokenization, stop-word removal, and lemmatization (NLTK/SpaCy), then vectorised via TF-IDF before classification. The model comparison includes Logistic Regression, Support Vector Machines, and Naive Bayes architectures to identify the highest performing model for deployment.',
    problem: 'Brands receive thousands of reviews across sites daily. Manual sentiment sorting is impossible, hindering fast customer feedback analysis.',
    solution: 'Created an NLP pipeline in Python that processes text, normalizes character datasets, performs feature extraction, and trains classification classifiers to output structured sentiment dashboards.',
    features: [
      'Text pre-processing (lemmatization, tokenization, regular expressions)',
      'TF-IDF text vectorization matrix',
      'Comparative analysis of classification models',
      'Sentiment dashboard with positive/negative keyword density maps'
    ],
    technologies: ['Python', 'NLTK', 'Scikit-learn', 'TF-IDF', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/adithyajb07',
    image: 'pic6.jpg',
    results: [
      { label: 'Model Accuracy', value: '89.7%' },
      { label: 'Inference Velocity', value: '12ms / sentence' }
    ]
  },
  {
    id: 'book-cinema',
    title: 'BookCinema Ticket Portal',
    category: 'Web Development',
    description: 'A desktop ticket booking application constructed in Java Swing/JFrame and connected to a NoSQL MongoDB backend for rapid booking data storage.',
    longDescription: 'BookCinema is a lightweight desktop booking system written in Java. Utilizing JFrame/Swing, the application guides users through interactive theater layouts, movie selection grids, showtime selections, and ticket confirmations. Seat layout states and reservation records are instantly synchronized with a MongoDB cluster using the official Java-MongoDB driver.',
    problem: 'Ticket systems require concurrent inventory management to prevent seat double-booking, demanding rapid database write capabilities and $.',
    solution: 'Developed a thread-safe seat selection panel in Java Swing, utilizing document-based MongoDB storage where booking collections are indexed by showtime and coordinates.',
    features: [
      'Interactive grid UI for physical theater seat maps',
      'Real-time seating conflict checks and database locking',
      'NoSQL storage of booking documents in MongoDB Atlas',
      'Desktop window environment with customized JFrame elements'
    ],
    technologies: ['Java', 'Swing (JFrame)', 'MongoDB', 'NoSQL', 'MongoDB Driver', 'IDE IntelliJ'],
    github: 'https://github.com/adithyajb07',
    image: 'pic7.jpg',
    results: [
      { label: 'Database Latency', value: '< 8ms' },
      { label: 'Concurrent Bookings', value: '150 seats / min' }
    ]
  }
];
