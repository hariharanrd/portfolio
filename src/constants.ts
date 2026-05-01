export const DATA = {
  name: "Hariharan D",
  role: "Senior Software Engineer",
  status: "Currently architecting scalable SaaS solutions",
  email: "mailhariharand@gmail.com",
  phone: "+91 7708510797",
  location: "Chennai",
  summary: "Strategic Software Engineer with 7+ years of experience architecting and scaling enterprise SaaS solutions. Expert in Core Java, distributed systems, and database optimization.",
  
  stack: {
    backend: ["Core Java (Expert)", "MySQL", "Spring Boot", "Kafka", "Redis", "RESTful Services", "gRPC", "OAuth2", "Framework Development", "Security Management"],
    infrastructure: ["Docker", "Zoho Cloud Platform", "GCP", "CI/CD Pipelines", "Git", "Mercurial", "Event-driven Architectures", "Microservices"],
    ai: ["Custom AI Agents", "MCP Servers", "Agentic Workflows", "Claude", "Gemini", "LLM Integration", "RAG Systems"],
    leadership: ["Design Reviews", "Peer Code Reviews", "Junior Mentorship", "Feature Ownership", "Technical Documentation"]
  },

  experience: [
    {
      company: "Zoho Corporation",
      role: "Member Technical Staff (SDE)",
      period: "2026",
      description: "Leading performance optimization and multi-tenant resource fairness initiatives.",
      hasLeadership: true,
      metrics: [
        { label: "System Latency", value: "Optimized", detail: "via Redis Caching" },
        { label: "Design Reviews", value: "Active", detail: "Architectural oversight" }
      ],
      challenges: [
        "Implementing a Rate Limiter system for account promotion/demotion in Kafka to ensure fair usage of shared queues.",
        "Identifying frequently accessed data paths and implementing Redis caching to bypass heavy DB queries."
      ]
    },
    {
      company: "Zoho Corporation",
      role: "Member Technical Staff (SDE)",
      period: "2025",
      description: "Specializing in modern authentication protocols and production reliability tools.",
      hasLeadership: true,
      challenges: [
        "Migrated users from legacy Basic Auth to Modern GMail OAuth for enhanced security.",
        "Developed robust monitoring systems to detect production anomalies in real-time.",
        "Built a log visualization tool to identify anomalies early in the development lifecycle."
      ]
    },
    {
      company: "Zoho Corporation",
      role: "Member Technical Staff (SDE)",
      period: "2024",
      description: "Architected security measures and efficiency improvements for communication systems.",
      hasLeadership: true,
      metrics: [
        { label: "Team Mentorship", value: "Active", detail: "Junior engineers" },
        { label: "Email Sync", value: "60%", detail: "Reduction in sync time" }
      ],
      challenges: [
        "Engineered a Spam and Abuse Monitoring System to automatically protect application resources.",
        "Optimized email system integration to handle high-volume synchronization efficiently."
      ]
    },
    {
      company: "Zoho Corporation",
      role: "Member Technical Staff (SDE)",
      period: "2023",
      description: "Focusing on product hardening and core communication infrastructure.",
      hasLeadership: true,
      challenges: [
        "Introduced robust security handlings to enhance the overall product defense-in-depth.",
        "Re-architected the email infrastructure using modern Java mail APIs for improved reliability.",
        "Extended the proprietary REST API framework with advanced core features."
      ]
    },
    {
      company: "Zoho Corporation",
      role: "Member Technical Staff (SDE)",
      period: "2022",
      description: "Delivered legal compliance features and core business logic services.",
      hasLeadership: true,
      challenges: [
        "Developed a multi-layered Data Preservation feature to prevent data overwrites for legal requirements.",
        "Architected Working Hours Management APIs for critical SLA and due-date calculations.",
        "Integrated internal microservices to facilitate seamless data transfer across the ecosystem."
      ]
    },
    {
      company: "Zoho Corporation",
      role: "Member Technical Staff (SDE)",
      period: "2021",
      description: "Standardizing development practices and managing complex domain lifecycles.",
      hasLeadership: true,
      challenges: [
        "Built an internal validation tool to detect framework usage violations during build time.",
        "Developed end-to-end modules for full lifecycle management of custom customer domains.",
        "Engineered REST APIs for high-scale App User and Role management systems."
      ]
    },
    {
      company: "Zoho Corporation",
      role: "Member Technical Staff (SDE)",
      period: "2020",
      description: "Driving cloud transitions and database framework enhancements.",
      challenges: [
        "Automated custom domain management to replace error-prone manual processes.",
        "Developed seamless migration APIs for transitioning customers from OnPremises to Cloud.",
        "Optimized database criteria management for effective and efficient querying."
      ]
    },
    {
      company: "Zoho Corporation",
      role: "Member Technical Staff (SDE)",
      period: "2019",
      description: "Establishing foundational migration frameworks and modern API standards.",
      challenges: [
        "Developed a regional data center migration framework with optimized bulk insert/update logic.",
        "Converted legacy Apache Struts API systems to a modern, high-performance REST framework.",
        "Designed mobile-specific redirect systems to improve app adoption and user journey."
      ]
    },
    {
      company: "Zoho Corporation",
      role: "Project Trainee (Intern)",
      period: "2019",
      description: "Developed a web-based People Management solution using Core Java, Tomcat, and MySQL.",
      challenges: ["Full-stack web architecture", "Database schema design for HR systems"]
    }
  ],

  projects: [
    {
      title: "Log Visualizer",
      tldr: "Internal diagnostic tool for visualizing development logs.",
      tech: ["ANTLR", "Spring Boot", "Java"],
      impact: "Improved developer-cycle diagnostics via structured query visualization.",
      challenges: ["Parsing complex raw logs", "Optimizing real-time search latency"]
    },
    {
      title: "Personal Finance Management",
      tldr: "Full-stack application for automated financial tracking.",
      tech: ["React", "Spring Boot", "Supabase", "GCP"],
      impact: "Unified financial data across multiple streams with automated categorization.",
      challenges: ["Secure OAuth integration", "Cloud deployment at scale"]
    }
  ]
};
