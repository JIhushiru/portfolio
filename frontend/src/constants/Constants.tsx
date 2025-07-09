export const skills = {
    languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'SQL'],
    frameworks: ['React', 'Express', 'FastAPI', 'Flask'],
    backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'SQLAlchemy', 'MariaDB'],
    tools: ['Git', 'Docker', 'Replit', 'Selenium', 'Jest', 'Pytest'],
}

export const experience =[
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
  {
    title: 'UPLB Tour Route Optimizer',
    description: 'Used QGIS and Python to solve a Traveling Salesman Problem (TSP) for optimizing tour routes around the University of the Philippines Los Baños campus.',
    tech: ['Python', 'QGIS', 'TSP'],
    link: '',
    source: 'https://github.com/JIhushiru/UPLB-TSP-tour',
    screenshot: '/screenshot_tsp.png'
  },
  {
    title: 'Study Time Optimizer for UPLB Students',
    description: 'Applied the steepest descent method to analyze and improve study time efficiency for Applied Mathematics students.',
    tech: ['Python', 'Optimization', 'Steepest Descent'],
    link: '',
    source: '',
    screenshot: '/screenshot_st.png',
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
    title: 'Student Organization Management System',
    description: 'Database-backed system with UI for managing student organization members, roles, payments, and generating reports.',
    tech: ['Python', 'MariaDB', 'CRUD'],
    link: '',
    source: 'https://github.com/JIhushiru/Student-Organization-Management-System',
    screenshot: '/screenshot_soms.png',
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
    title: 'Job Tracker: Application Organizer',
    description: 'Lightweight tool for tracking job applications, updating statuses, and visualizing progress in the job hunt.',
    tech: ['React', 'LocalStorage', 'JavaScript'],
    link: 'https://job-tracker-api-1.onrender.com/',
    source: 'https://github.com/JIhushiru/job-tracker-api',
    screenshot: '/screenshot_jt.png',
  },
  {
    title: 'Geospatial ML for Banana Yield Prediction',
    description: 'Research project using six machine learning models to forecast banana yield gaps under climate scenarios. Cubist model outperformed others.',
    tech: ['Machine Learning', 'Geospatial', 'Climate Data'],
    link: '',
    source: '',
    screenshot: '/screenshot_geo.png',
  }
];
