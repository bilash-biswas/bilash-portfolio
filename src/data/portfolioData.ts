export interface StatCard {
  value: string;
  label: string;
  subText: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  keyFeats: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface AchievementItem {
  platform: string;
  stats: string;
  solvedCount: number;
  profileUrl: string;
  badgeName: string;
}

export interface TrainingItem {
  course: string;
  institution: string;
  duration: string;
  result: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  result: string;
  passingYear: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitles: string[];
  summary: string;
  stats: StatCard[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  training: TrainingItem[];
  education: EducationItem[];
  contact: {
    city: string;
    country: string;
    email: string;
    github: string;
    linkedin: string;
  };
}

export const portfolioData: PortfolioData = {
  name: "Bilash Kumar Biswas",
  title: "Full-Stack Software Engineer",
  subtitles: [
    "Backend Systems Architect",
    "Mobile Application Specialist",
    "DevOps & Cloud Engineer"
  ],
  summary:
    "Results-driven Full-Stack Software Engineer with a proven track record of architecting distributed backend systems, high-performance offline-first mobile applications, and automated cloud infrastructures. Combines strong analytical foundations in data structures and algorithmic complexity with modern software design patterns (Clean Architecture, MVVM) to build secure, concurrent, and highly scalable production ecosystems.",
  stats: [
    {
      value: "325+",
      label: "Algorithmic Problems Solved",
      subText: "LeetCode & Beecrowd"
    },
    {
      value: "10+",
      label: "Projects & Repositories Completed",
      subText: "Active GitHub Open-Source Codebases"
    },
    {
      value: "5+",
      label: "Enterprise Frameworks Mastered",
      subText: "Spring Boot, .NET, Django, Flutter..."
    }
  ],
  skills: [
    {
      category: "Backend Engineering",
      skills: ["Java (Spring Boot)", "C#/.NET Core", "Python (Django & FastAPI)", "Node.js (Express & NestJS)"]
    },
    {
      category: "Frontend Web Systems",
      skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      category: "Mobile App Development",
      skills: ["Flutter (Dart)", "React Native (Expo)", "Kotlin (Jetpack Compose)", "Android Native (Java/XML)"]
    },
    {
      category: "Databases & Caching",
      skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Firebase", "Redis"]
    },
    {
      category: "Architecture & DevOps",
      skills: [
        "Clean Architecture & MVVM",
        "Microservices & Modular Monoliths",
        "AWS (EC2, S3, RDS, Route53)",
        "Git & GitHub CI/CD",
        "Linux Administration",
        "Kubernetes",
        "Docker & Docker Compose",
        "GraphQL",
        "WebSockets / Daphne Channels",
        "RabbitMQ",
        "Relational Database Design"
      ]
    }
  ],
  projects: [
    {
      id: "corebank",
      title: "CoreBank (Full-Stack Digital Banking Ecosystem)",
      category: "FinTech / Distributed Systems",
      description:
        "Architected a full-stack digital banking ecosystem combining a containerized Java Spring Boot REST API with a high-performance, reactive Flutter mobile client.",
      tech: ["Java (Spring Boot)", "Flutter", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "Git"],
      keyFeats: [
        "Implemented Pessimistic Concurrency Locking to eliminate race conditions in distributed ledger balances.",
        "Engineered device keychains authentication vectors (secure local credentials storage).",
        "Integrated RabbitMQ for asynchronous transaction auditing and background message processing."
      ],
      githubUrl: "https://github.com/bilash-biswas/secure-fullstack-banking.git",
      liveUrl: ""
    },
    {
      id: "walletflow",
      title: "WalletFlow (Financial Tracking & Budgeting Mobile Application)",
      category: "Mobile Utilities / Architecture",
      description:
        "Developed a high-performance, offline-first personal finance application separating business logic through Clean Architecture and MVVM patterns.",
      tech: ["Kotlin", "Jetpack Compose", "SQLite (Room)", "Dagger Hilt", "WorkManager", "Retrofit", "Biometric API", "Coroutines & Flow"],
      keyFeats: [
        "Enforced transactional consistency (ACID) using Room DB local store.",
        "Managed local device security with Android’s Biometric API hardware fingerprint authentication.",
        "Integrated WorkManager for automated threshold budget background alert triggers."
      ],
      githubUrl: "https://github.com/bilash-biswas/Expense-and-Budget-Tracker-App-Jetpack-Compose.git",
      liveUrl: ""
    },
    {
      id: "bcsplatform",
      title: "BCS Preparation Platform (Enterprise E-Learning Ecosystem)",
      category: "EdTech / SaaS Platform",
      description:
        "Architected an extensive exam SaaS preparation matrix utilizing an ASGI Daphne core backend, Next.js web ecosystem, and Expo mobile client.",
      tech: ["Django 5.2", "Next.js 15", "React 19", "React Native (Expo SDK 56)", "PostgreSQL", "Redis", "Daphne", "Celery", "Nginx", "Docker Compose", "AWS EC2", "GitHub Actions"],
      keyFeats: [
        "Containerized runtime layers orchestrated via Docker Compose for dev/production parity.",
        "Deployed live on AWS EC2 behind a host Nginx reverse proxy for SSL termination and static routing.",
        "Automated container volume pruning and live code rollouts via custom GitHub Actions CI/CD workflows."
      ],
      githubUrl: "https://github.com/bilash-biswas/bcs-preparation-platform.git",
      liveUrl: ""
    },
    {
      id: "collab-editor",
      title: "CollabEdit (Real-Time Collaborative Code Editor & Ecosystem)",
      category: "Real-Time Systems / DevOps",
      description:
        "Architected a real-time collaborative coding ecosystem featuring a NestJS WebSocket API, isolated Docker container execution sandboxes, Next.js web editor, and Expo mobile app.",
      tech: ["NestJS", "Next.js 15", "React Native (Expo)", "Redis", "RabbitMQ", "PostgreSQL", "Dockerode", "Kubernetes", "Prisma"],
      keyFeats: [
        "Integrated Socket.io with Redis adapter for real-time code sync, multi-user cursors, and live presence state management.",
        "Engineered isolated code execution sandboxes in Docker containers via Dockerode for secure JavaScript/TypeScript/Python runtimes.",
        "Implemented version backups queued asynchronously using RabbitMQ background tasks, and deployable via Kubernetes configurations."
      ],
      githubUrl: "https://github.com/bilash-biswas/realtime-collaborative-code-editor.git",
      liveUrl: ""
    },
    {
      id: "logicbuild",
      title: "LogicBuild (Dockerized Online Judge & Code Battles Platform)",
      category: "Real-Time Systems / Core Engine",
      description:
        "Engineered a full-stack competitive programming and matchmaking battle platform with isolated Docker/Kubernetes container execution engines.",
      tech: ["React", "Express", "BullMQ", "PostgreSQL", "Redis", "Docker (DinD)", "Kubernetes", "JWT"],
      keyFeats: [
        "Architected a scalable code execution queue using BullMQ and Redis for high-throughput asynchronous job processing.",
        "Engineered isolated Docker-in-Docker sandboxes for secure runtime evaluations across 9 programming languages.",
        "Implemented real-time 1v1 matchmaking battles and ELO-based leaderboard tracking using Socket.io and PostgreSQL triggers."
      ],
      githubUrl: "https://github.com/bilash-biswas/dockerized-code-judge.git",
      liveUrl: ""
    }
  ],
  achievements: [
    {
      platform: "LeetCode Profile",
      stats: "Active problem solver with 95+ solved data structure and algorithm problems.",
      solvedCount: 95,
      profileUrl: "https://leetcode.com/u/bilashbiswas",
      badgeName: "LeetCode Solved"
    },
    {
      platform: "Competitive Programming",
      stats: "Solved 230+ algorithmic complexity problems on Beecrowd platform.",
      solvedCount: 230,
      profileUrl: "https://judge.beecrowd.com/en/profile/386601",
      badgeName: "Beecrowd Solved"
    }
  ],
  training: [
    {
      course: "Industrial Control Technology on Instrumentation and Electrical Engineering",
      institution: "Training Institute for Chemical Industries (TICI)",
      duration: "3 Weeks",
      result: "Grade A+"
    }
  ],
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University, Bangladesh",
      result: "CGPA: 3.27 / 4.00",
      passingYear: "2021"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Bankra Degree College, Jessore",
      result: "GPA: 4.25 / 5.00",
      passingYear: "2016"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Digdana Khashal Nagar Secondary School, Jessore",
      result: "GPA: 4.81 / 5.00",
      passingYear: "2014"
    }
  ],
  contact: {
    city: "Dhaka",
    country: "Bangladesh",
    email: "bilashbiswas51@gmail.com",
    github: "https://github.com/bilash-biswas",
    linkedin: "https://linkedin.com/in/bilash-biswas"
  }
};
