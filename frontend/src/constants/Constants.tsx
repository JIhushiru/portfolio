export const skills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'R', 'SQL'],
    'ml / ai': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'CLIP', 'Pandas', 'NumPy', 'SciPy'],
    frameworks: ['React', 'Angular', 'FastAPI', 'Flask', 'Express'],
    backend: ['Node.js', 'MongoDB', 'PostgreSQL', 'MariaDB', 'Firebase'],
    tools: ['Git', 'Docker', 'Kubernetes', 'GitHub Actions', 'Hugging Face', 'Streamlit', 'Jupyter', 'Pytest'],
}

export const education = [
    {
      school: 'University of the Philippines Los Baños',
      degree: 'BS Applied Mathematics',
      location: 'Laguna, Philippines',
      duration: '',
      highlights: [
        'GWA 1.76 / GPA 3.24 (US Equivalent)',
        'University Scholar (2025), College Scholar (2023)',
        'Specialization in mathematical modeling and optimization',
        'Research on geospatial ML for crop yield prediction',
        'Coursework in statistics, numerical methods, and data science',
      ],
    },
];

export const experience =[
    {
      company: 'Stetho / Private Mirror',
      role: 'Python Developer',
      location: 'Remote',
      duration: 'Sept 2025 - Oct 2025',
      logo: '',
      points: [
        'Developed AI for Physicians, a medical AI assistant using GPT-4 and RAG pipelines',
        'Built backend services with FastAPI and integrated vector search for clinical knowledge retrieval',
        'Implemented document processing pipelines for medical literature and patient data',
      ]
    },
    {
      company: 'Ross Media Group',
      role: 'Lead / Founding ML Engineer',
      location: 'Remote',
      duration: 'Jul 2025 - Sept 2025',
      logo: '',
      points: [
        'Led development of ClipNET, an AI-powered video processing pipeline',
        'Integrated Whisper for transcription, CLIP for visual analysis, and GPT-4 for content generation',
        'Architected end-to-end ML infrastructure with Docker and Kubernetes for scalable deployment',
      ]
    },
    {
      company: 'Tutor.com',
      role: 'Advanced Tutor',
      location: 'Santiago, Santiago Metropolitan Region, Chile • Remote',
      duration: 'March 2022 - Present',
      logo: '/tutor.jpeg',
      points: [
        'Provide in-depth tutoring in programming languages including C#, C++, Java, and Python',
        'Cover core programming concepts such as syntax, logic, and object-oriented principles',
        'Teach foundational and advanced mathematics topics based on student level',
        'Customize lessons to suit individual learning styles from high school to college students'
      ]
    },
    {
      company: 'Elinnov Technologies, Inc.',
      role: 'Software Engineer Intern',
      location: 'Taguig, National Capital Region, Philippines • Remote',
      duration: 'Jun 2024 - Aug 2024',
      logo: '/elinnov.png',
      points: [
        'Contributed to web application development using ASP.NET MVC and C#',
        'Implemented and managed data features using SQL and MongoDB',
        'Collaborate with senior engineers on coding assignments and coding reviews',
        'Gained hands-on experience in full-stack development and database integration'
      ]
    }
];

export const projects = [
  // Live demo projects first
  {
    title: 'AI Career Transition Planner',
    description: 'Hybrid AI meta-model that analyzes resumes, recommends career paths across 185 roles using Dijkstra-based pathfinding, and generates personalized learning roadmaps with skill gap analysis.',
    tech: ['Next.js', 'FastAPI', 'Gemini', 'SpaCy', 'Docker'],
    link: 'https://ai-career-transition-planner.vercel.app',
    source: 'https://github.com/JIhushiru/ai-career-transition-planner',
    screenshot: '/ai-career-transition-planner.png',
  },
  {
    title: 'Plant Disease Vision',
    description: 'Computer vision system that identifies crop diseases from leaf photos. Uses EfficientNet-B0 fine-tuned on PlantVillage dataset with CLIP-based input validation, covering 38 disease classes across 14 crops.',
    tech: ['PyTorch', 'FastAPI', 'React', 'CLIP', 'Docker'],
    link: 'https://plant-disease-vision.vercel.app/',
    source: 'https://github.com/JIhushiru/plant-disease-vision',
    screenshot: '/screenshot_pdv.png',
  },
  {
    title: 'SmartDoc AI: Document Classifier',
    description: 'AI-powered tool using OpenAI embeddings to classify documents (PDFs, Word, images), with feedback loop and retraining capabilities.',
    tech: ['OpenAI', 'Python', 'NLP', 'Embeddings'],
    link: 'https://smartdoc-ai-jer.vercel.app/',
    source: 'https://github.com/JIhushiru/smartdoc-ai',
    screenshot: '/screenshot_sdoc.png',
  },
  {
    title: 'JapCharQuiz: Japanese Character Quiz',
    description: 'Interactive web app for learning hiragana and katakana. Features multiple quiz modes, real-time score and streak tracking, and persistent high scores via local storage.',
    tech: ['React', 'TypeScript', 'Vite'],
    link: 'https://jap-char-game.vercel.app/',
    source: 'https://github.com/JIhushiru/JapCharQuiz',
    screenshot: '/screenshot_jcq.png',
  },
  {
    title: 'Job Tracker: Application Organizer',
    description: 'Lightweight tool for tracking job applications, updating statuses, and visualizing progress in the job hunt.',
    tech: ['React', 'LocalStorage', 'JavaScript'],
    link: 'https://job-tracker-api-5v85.vercel.app/',
    source: 'https://github.com/JIhushiru/job-tracker-api',
    screenshot: '/screenshot_jt.png',
  },
  // Source-only projects
  {
    title: 'Predictive Maintenance for Industrial Equipment',
    description: 'End-to-end project predicting Remaining Useful Life (RUL) of machinery using time series sensor data. Built a full-stack ML pipeline with real-time visualization, batch predictions, and risk alerts.',
    tech: ['Time Series', 'Machine Learning', 'Streamlit', 'Scikit-learn'],
    link: '',
    source: 'https://github.com/JIhushiru/predx',
    screenshot: '/screenshot_predx.png',
  },
  {
    title: 'UPLB Tour Route Optimizer',
    description: 'Used QGIS and Python to solve a Traveling Salesman Problem (TSP) for optimizing tour routes around the University of the Philippines Los Baños campus.',
    tech: ['Python', 'QGIS', 'TSP'],
    link: '',
    source: 'https://github.com/JIhushiru/UPLB-TSP-tour',
    screenshot: '/screenshot_tsp.png',
  },
  {
    title: 'Student Organization Management System',
    description: 'Database-backed system with UI for managing student organization members, roles, payments, and generating reports.',
    tech: ['Python', 'MariaDB', 'CRUD'],
    link: '',
    source: 'https://github.com/JIhushiru/Student-Organization-Management-System',
    screenshot: '/screenshot_soms.png',
  },
  {
    title: 'Geospatial ML for Banana Yield Prediction',
    description: 'Research project using six machine learning models to forecast banana yield gaps under climate scenarios. Cubist model outperformed others.',
    tech: ['Machine Learning', 'Geospatial', 'Climate Data'],
    link: '',
    source: '',
    screenshot: '/screenshot_geo.png',
  },
  {
    title: 'Harvesty: Agricultural E-Commerce Platform',
    description: 'Developed a full-stack farm-to-table web app connecting farmers and consumers. Includes product listings, admin tools, and order tracking.',
    tech: ['MongoDB', 'ExpressJS', 'React', 'NodeJS'],
    link: '',
    source: '',
    screenshot: '/screenshot_harvesty.png',
  },
  {
    title: 'Study Time Optimizer for UPLB Students',
    description: 'Applied the steepest descent method to analyze and improve study time efficiency for Applied Mathematics students.',
    tech: ['Python', 'Optimization', 'Steepest Descent'],
    link: '',
    source: '',
    screenshot: '/screenshot_st.png',
  },
];
