export interface StatCard {
  value: string;
  label: string;
  subText: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; proficiency: number }[]; // proficiency from 0-100 for visual bars
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
    "Backend Architecture",
    "Mobile Application Specialist",
    "DevOps Enthusiast"
  ],
  summary:
    "Detail-oriented Full-Stack Software Engineer with advanced technical expertise spanning complex backend API architectures, frontend systems, and cross-platform mobile application development. Leveraging intermediate-to-advanced algorithmic problem-solving skills, modern DevOps tools, and clean engineering design patterns to build secure, concurrent, and highly scalable software ecosystems.",
  stats: [
    {
      value: "325+",
      label: "Algorithmic Problems Solved",
      subText: "LeetCode & Beecrowd"
    },
    {
      value: "3+",
      label: "Production-Grade Projects Deployed",
      subText: "Full-Stack Ecosystems"
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
      skills: [
        { name: "Java (Spring Boot)", proficiency: 90 },
        { name: "C#/.NET Core", proficiency: 85 },
        { name: "Python (Django REST Framework)", proficiency: 88 },
        { name: "Node.js", proficiency: 80 }
      ]
    },
    {
      category: "Frontend Web Systems",
      skills: [
        { name: "Next.js", proficiency: 92 },
        { name: "React", proficiency: 95 },
        { name: "TypeScript", proficiency: 90 },
        { name: "JavaScript", proficiency: 95 },
        { name: "HTML5/CSS3", proficiency: 90 }
      ]
    },
    {
      category: "Mobile App Development",
      skills: [
        { name: "Flutter (Dart)", proficiency: 92 },
        { name: "Kotlin (Jetpack Compose)", proficiency: 80 },
        { name: "React Native", proficiency: 85 }
      ]
    },
    {
      category: "Databases & Caching",
      skills: [
        { name: "PostgreSQL", proficiency: 88 },
        { name: "MySQL", proficiency: 85 },
        { name: "SQLite", proficiency: 80 },
        { name: "MongoDB", proficiency: 82 },
        { name: "Firebase", proficiency: 85 },
        { name: "Redis", proficiency: 88 }
      ]
    },
    {
      category: "Architecture & DevOps",
      skills: [
        { name: "Clean Architecture & MVVM", proficiency: 90 },
        { name: "Git & GitHub CI/CD", proficiency: 92 },
        { name: "Docker & Docker Compose", proficiency: 88 },
        { name: "Kubernetes", proficiency: 75 },
        { name: "Linux Administration", proficiency: 80 },
        { name: "RabbitMQ", proficiency: 82 },
        { name: "GraphQL", proficiency: 80 },
        { name: "WebSockets / Daphne Channels", proficiency: 85 },
        { name: "Relational Database Design", proficiency: 90 }
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
      githubUrl: "https://github.com/bilash-biswas",
      liveUrl: "https://github.com/bilashbiswas"
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
      githubUrl: "https://github.com/bilash-biswas",
      liveUrl: "https://github.com/bilashbiswas"
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
      githubUrl: "https://github.com/bilash-biswas",
      liveUrl: "https://github.com/bilashbiswas"
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
    email: "bilash.eee.iu@gmail.com",
    github: "https://github.com/bilashbiswas",
    linkedin: "https://linkedin.com/in/bilash-kumar-biswas"
  }
};
