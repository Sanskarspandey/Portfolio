export const personalInfo = {
  name: "Sanskar Pandey",
  title: "AI/ML Engineer · Full Stack Developer · B.Tech CSE (AI & ML)",
  subtitle: "AI/ML Engineer · Full Stack Developer",
  university: "VIT Chennai",
  location: "Mumbai, India",
  email: "sanskar.p.work@gmail.com",
  phone: "+91 9372948245",
  github: "https://github.com/Sanskarspandey",
  linkedin: "https://www.linkedin.com/in/sanskar-pandey-188913238/",
  shortBio: "I'm a Computer Science Engineering (AI & ML) student at VIT Chennai and an AI/ML Engineer & Full Stack Developer passionate about building intelligent agentic systems, scalable web platforms, and machine learning solutions.",
  fullBio: [
    "I'm a Computer Science Engineering student specializing in AI & ML at VIT Chennai and an AI/ML Engineer & Full Stack Developer passionate about building scalable, intelligent solutions. I enjoy turning complex ideas into production-ready software by combining modern full-stack architectures with cutting-edge artificial intelligence.",
    "My experience spans multi-agent LLM systems, Agentic RAG, reinforcement learning algorithms, and full-stack cloud applications. Alongside engineering, I actively conduct research in deep learning, graph neural networks (ST-GAT), and autonomous navigation. I'm driven by curiosity, engineering excellence, and the vision to build AI systems that solve high-impact real-world problems."
  ],
  typewriterRoles: [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Agentic AI Builder",
    "AI Engineer",
    "Software Developer"
  ],
  stats: [
    {
      id: "cgpa",
      label: "CGPA",
      value: "8.59",
      suffix: " / 10",
      icon: "GraduationCap",
      description: "VIT Chennai B.Tech CSE (AI & ML)"
    },
    {
      id: "experience",
      label: "Research & Industry",
      value: "DRDO",
      suffix: " AI/ML",
      icon: "Briefcase",
      description: "Defence Research & Development Org"
    },
    {
      id: "projects",
      label: "Major Projects",
      value: "3",
      suffix: "+",
      icon: "Code2",
      description: "Multi-Agent, B2B & Agri-AI Platforms"
    },
    {
      id: "research",
      label: "Research Papers",
      value: "1",
      suffix: " (ST-GAT)",
      icon: "FileText",
      description: "Graph Attention Network Architecture"
    }
  ]
};

export const heroTechBadges = [
  { name: "Python", category: "Language" },
  { name: "LangGraph", category: "Agentic AI" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "LangChain", category: "AI Framework" },
  { name: "Ollama", category: "Local LLM" },
  { name: "FAISS", category: "Vector DB" },
  { name: "MongoDB", category: "Database" },
  { name: "Express.js", category: "Backend" },
  { name: "JavaScript", category: "Language" }
];

export const experiences = [
  {
    id: "drdo",
    role: "AI/ML Intern",
    company: "Defence Research and Development Organisation (DRDO)",
    type: "AI Research Internship",
    period: "Internship",
    location: "India",
    description: "Conducted cutting-edge reinforcement learning research for dynamic autonomous navigation and spatial path planning systems.",
    bulletPoints: [
      "Developed reinforcement learning agents using Q-Learning and SARSA for autonomous navigation and intelligent path planning in dynamic environments.",
      "Built an interactive visualization system using Tkinter, Matplotlib, and OSMnx to analyze agent behaviour on realistic map-based environments.",
      "Evaluated convergence, stability, and path efficiency across reinforcement learning algorithms to compare their navigation performance."
    ],
    technologies: [
      "Q-Learning",
      "SARSA",
      "Reinforcement Learning",
      "Python",
      "OSMnx",
      "Matplotlib",
      "Tkinter",
      "Autonomous Navigation"
    ]
  }
];

export const projects = [
  {
    id: "ai-se-team",
    number: "01",
    title: "AI Software Engineering Team",
    category: "Multi-Agent AI System",
    subtitle: "Automated End-to-End Software Specification & Scaffolding Platform",
    description: "Built a multi-agent AI software engineering platform that converts natural language software ideas into comprehensive technical specifications and full-stack application scaffolds.",
    bulletPoints: [
      "Orchestrated six collaborating AI agents featuring intelligent routing, dynamic task delegation, and shared state management.",
      "Engineered structured Pydantic schema validation for deterministic generation of Product Specs, SRS, UI Design, and Database Schemas.",
      "Generated clean React and Express.js project scaffolds powered locally via Ollama with Qwen 2.5 for fast, private inference."
    ],
    technologies: [
      "LangGraph",
      "LangChain",
      "Ollama",
      "Qwen 2.5",
      "Pydantic",
      "React",
      "Express.js",
      "Python"
    ],
    metrics: [
      { value: "6", label: "Collaborating Agents" },
      { value: "Full-Stack", label: "React/Express Scaffolds" },
      { value: "100%", label: "Local Private Inference" }
    ],
    github: "https://github.com/Sanskarspandey",
    featured: true
  },
  {
    id: "packlite-packaging",
    number: "02",
    title: "Packlite Packaging – B2B Platform",
    category: "Full Stack & Cloud Architecture",
    subtitle: "Scalable B2B E-Commerce & Quotation Workflow System",
    description: "Enterprise B2B e-commerce platform designed for wholesale product management, dynamic quotations, role-based authentication, and scalable commerce operations.",
    bulletPoints: [
      "Engineered a high-performance B2B shopping cart, inventory management, dynamic quotation request workflow, and secure authentication.",
      "Architected backend APIs using Express.js and Prisma ORM connected to serverless Neon PostgreSQL for sub-second query latency.",
      "Implemented automated deployment pipelines on Vercel coupled with GitHub CI/CD workflows for seamless continuous integration."
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Neon DB",
      "Vercel",
      "GitHub CI/CD"
    ],
    metrics: [
      { value: "Serverless", label: "Neon PostgreSQL" },
      { value: "Automated", label: "GitHub CI/CD Pipelines" },
      { value: "B2B", label: "Quotation & Cart Engine" }
    ],
    github: "https://github.com/Sanskarspandey",
    featured: true
  },
  {
    id: "krishi-mitra",
    number: "03",
    title: "Krishi-Mitra",
    category: "AI Agricultural Advisory Platform",
    subtitle: "AI-Powered Crop Advisory & 90-Day Price Forecasting Platform",
    description: "Comprehensive agricultural intelligence platform providing real-time crop recommendations, 90-day market price forecasting, multilingual support, and real-time weather alerts.",
    bulletPoints: [
      "Trained high-accuracy machine learning models: XGBoost (99% crop recommendation accuracy) and CatBoost (91% 90-day crop price forecasting).",
      "Developed interactive multi-platform dashboards (Web & Android) delivering localized weather alerts and real-time advisory.",
      "Awarded 3rd Place with a ₹10,000 cash prize at DATAQUEST 2.0, hosted by L&T EduTech and VIT Chennai."
    ],
    technologies: [
      "XGBoost",
      "CatBoost",
      "Python",
      "Web Dashboard",
      "Android",
      "Data Analytics",
      "Weather APIs"
    ],
    metrics: [
      { value: "99%", label: "XGBoost Recommendation Acc" },
      { value: "91%", label: "CatBoost Price Forecast" },
      { value: "3rd Place", label: "DATAQUEST 2.0 Award" }
    ],
    github: "https://github.com/Sanskarspandey",
    featured: true
  }
];

export const publications = [
  {
    id: "st-gat",
    number: "01",
    title: "ST-GAT: A Leakage-Free Spatio-Temporal Graph Attention Framework for Robust Network Intrusion Detection",
    type: "Research Paper",
    status: "Submitted",
    date: "2025 – 2026",
    summary: "Constructed an advanced deep learning framework combining Graph Attention Networks (GAT) and Bidirectional LSTM (BiLSTM) for robust network intrusion detection with strict leakage-free preprocessing.",
    details: [
      "Engineered a novel hybrid GAT + BiLSTM neural architecture capable of capturing both topological graph relations and temporal traffic flow sequences simultaneously.",
      "Implemented a leakage-free preprocessing pipeline to eliminate data leakage and benchmarked thoroughly against the standard CSE-CIC-IDS-2018 dataset.",
      "Achieved state-of-the-art detection metrics with 99.14% Accuracy and 96.65% Macro-F1 score across diverse network intrusion categories."
    ],
    technologies: [
      "Graph Attention Networks (GAT)",
      "BiLSTM",
      "CSE-CIC-IDS-2018",
      "Leakage-Free Preprocessing",
      "PyTorch",
      "Network Intrusion Detection"
    ],
    metrics: [
      { value: "99.14%", label: "Accuracy" },
      { value: "96.65%", label: "Macro-F1" },
      { value: "CSE-CIC", label: "Benchmark Dataset" }
    ]
  }
];

export const achievements = [
  {
    id: "dataquest",
    title: "DATAQUEST 2.0 – 3rd Place",
    host: "L&T EduTech & VIT Chennai",
    prize: "₹10,000 Cash Prize",
    project: "Krishi-Mitra Platform",
    description: "Secured 3rd place in the prestigious DATAQUEST 2.0 hackathon hosted by L&T EduTech and VIT Chennai for developing Krishi-Mitra, an AI-powered crop advisory and predictive pricing platform leveraging XGBoost (99% acc) and CatBoost (91% acc).",
    badges: [
      "3rd Place Podium",
      "₹10,000 Cash Prize",
      "L&T EduTech Recognized",
      "VIT Chennai"
    ]
  }
];

export const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    command: "ls languages/",
    skills: [
      { name: "Python", level: "Advanced", icon: "Code2", highlight: true },
      { name: "JavaScript", level: "Advanced", icon: "FileCode", highlight: true },
      { name: "Java", level: "Proficient", icon: "Coffee", highlight: false },
      { name: "C", level: "Proficient", icon: "Terminal", highlight: false },
      { name: "C++", level: "Proficient", icon: "TerminalSquare", highlight: false }
    ]
  },
  {
    id: "ai_ml",
    name: "AI & ML",
    command: "ls ai_ml/",
    skills: [
      { name: "LangChain", level: "Advanced", icon: "Cpu", highlight: true },
      { name: "LangGraph", level: "Advanced", icon: "GitBranch", highlight: true },
      { name: "Agentic RAG", level: "Advanced", icon: "Sparkles", highlight: true },
      { name: "CrewAI", level: "Proficient", icon: "Users", highlight: false },
      { name: "AutoGen", level: "Proficient", icon: "Bot", highlight: false },
      { name: "Ollama", level: "Advanced", icon: "Server", highlight: true },
      { name: "FAISS", level: "Advanced", icon: "Database", highlight: true },
      { name: "MCP", level: "Proficient", icon: "Share2", highlight: false },
      { name: "A2A", level: "Proficient", icon: "Network", highlight: false },
      { name: "NumPy", level: "Advanced", icon: "Binary", highlight: false },
      { name: "Matplotlib", level: "Advanced", icon: "BarChart3", highlight: false }
    ]
  },
  {
    id: "ai_engineering",
    name: "AI Engineering",
    command: "ls ai_engineering/",
    skills: [
      { name: "RAG", level: "Advanced", icon: "Search", highlight: true },
      { name: "FastAPI", level: "Advanced", icon: "Zap", highlight: true },
      { name: "Prompt Engineering", level: "Advanced", icon: "MessageSquareCode", highlight: true },
      { name: "Vector Databases", level: "Advanced", icon: "Layers", highlight: true },
      { name: "Docker", level: "Proficient", icon: "Box", highlight: false },
      { name: "AWS", level: "Proficient", icon: "Cloud", highlight: false },
      { name: "LoRA", level: "Proficient", icon: "Sliders", highlight: false },
      { name: "QLoRA", level: "Proficient", icon: "Cpu", highlight: false },
      { name: "Langfuse", level: "Proficient", icon: "Activity", highlight: false }
    ]
  },
  {
    id: "web",
    name: "Web Technologies",
    command: "ls web/",
    skills: [
      { name: "React", level: "Advanced", icon: "Atom", highlight: true },
      { name: "Node.js", level: "Advanced", icon: "Server", highlight: true },
      { name: "Express.js", level: "Advanced", icon: "Flame", highlight: true },
      { name: "MongoDB", level: "Advanced", icon: "Database", highlight: true },
      { name: "HTML5", level: "Advanced", icon: "Globe", highlight: false },
      { name: "CSS3", level: "Advanced", icon: "Palette", highlight: false }
    ]
  },
  {
    id: "developer_tools",
    name: "Developer Tools",
    command: "ls developer_tools/",
    skills: [
      { name: "Git", level: "Advanced", icon: "GitCommit", highlight: true },
      { name: "GitHub", level: "Advanced", icon: "Github", highlight: true },
      { name: "Visual Studio Code", level: "Advanced", icon: "Terminal", highlight: false }
    ]
  }
];

export const education = [
  {
    id: "vit",
    institution: "Vellore Institute of Technology, Chennai",
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
    period: "2023 – 2027",
    cgpa: "8.59 / 10",
    badge: "Specialization in AI & ML",
    highlights: [
      "Specialization in Artificial Intelligence, Machine Learning, and Agentic Systems",
      "Active participant in technical symposiums, research forums, and competitive hackathons"
    ]
  }
];

export const leadership = [
  {
    id: "rrc",
    role: "HR & Management Head",
    organization: "Red Ribbon Club, VIT Chennai",
    description: "Led recruitment, strategic event planning, and cross-functional coordination for student initiatives and community outreach operations.",
    badges: ["Recruitment", "Event Management", "Cross-Functional Leadership"]
  }
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" }
];
