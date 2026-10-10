import {
  Capability,
  Challenge,
  Solution,
  ServiceDetail,
  ProductOffering,
  MatrixRow,
  RoadmapPhase,
  Leader,
  SiteContent
} from "@/types";

export type {
  Capability,
  Challenge,
  Solution,
  ServiceDetail,
  ProductOffering,
  MatrixRow,
  RoadmapPhase,
  Leader,
  SiteContent
};

export const siteContent: SiteContent = {
  company: {
    name: "EAGLE SORA",
    legalName: "EAGLE SORA TRANSCENDENT PRIVATE LIMITED",
    tagline: "Innovating for a Smarter, Digital Nation",
    heroTagline: "TECHNOLOGY • INNOVATION • TRANSFORMATION",
    motto: "We don't just build technology, We build the future!!",
    mission: "To empower businesses through innovative, scalable digital solutions that drive growth, efficiency, and transformation.",
    vision: "To be a global leader in digital innovation, helping businesses transcend boundaries through transformative technology.",
    aboutParagraph: "EAGLE SORA TRANSCENDENT PRIVATE LIMITED is a forward-looking IT and software engineering company committed to delivering enterprise-grade technology solutions. We partner with startups, growing SMEs, and large organizations to engineer scalable software, cloud infrastructure, AI integrations, and compliant digital architectures.",
    location: "Yavatmal, Maharashtra, India",
    address: "Dhole Lay Out, Visawa colony, Pimpalgaon, Yavatmal, Maharashtra 445001",
    email: "services.eaglesora@gmail.com",
    phone: "+91 9307807516",
    website: "eaglesora.in",
    copyright: "© 2026 EAGLE SORA TRANSCENDENT PRIVATE LIMITED. All rights reserved."
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" }
  ],

  hero: {
    subtitle: "TECHNOLOGY • INNOVATION • TRANSFORMATION",
    titleMain: "Building a ",
    titleHighlight: "Smarter, More Connected ",
    titleEnd: "Digital Future.",
    description: "We build custom software, digital platforms and technology solutions that empower businesses and contribute to a smarter, more connected digital nation.",
    primaryCta: "Explore Our Services",
    secondaryCta: "Talk to Our Team",
    badges: [
      { id: "badge-1", label: "Digital Transformation", iconName: "TrendingUp" },
      { id: "badge-2", label: "Scalable Technology", iconName: "Cloud" },
      { id: "badge-3", label: "Stronger Businesses", iconName: "Users" },
      { id: "badge-4", label: "Innovative Solutions", iconName: "Lightbulb" },
      { id: "badge-5", label: "Sustainable Growth", iconName: "Leaf" }
    ]
  },

  stats: [
    { value: "50+", label: "Projects Delivered", description: "Successfully executed digital projects" },
    { value: "30+", label: "Happy Clients", description: "Global enterprises & high-growth SMEs" },
    { value: "5+", label: "Industries Served", description: "Healthcare, Finance, SaaS, Retail, Logistics" },
    { value: "100%", label: "Commitment to Quality", description: "Strict ISO & security compliant delivery" }
  ],

  quickCapabilities: [
    {
      id: "cap-custom-software",
      title: "Custom Software",
      shortDesc: "Tailored solutions to solve real business challenges.",
      iconName: "Code"
    },
    {
      id: "cap-web-mobile",
      title: "Web & Mobile Apps",
      shortDesc: "Modern, scalable and user-centric applications.",
      iconName: "Smartphone"
    },
    {
      id: "cap-cloud-solutions",
      title: "Cloud & Digital Solutions",
      shortDesc: "Secure, scalable and future-ready infrastructure.",
      iconName: "CloudLightning"
    },
    {
      id: "cap-tech-consulting",
      title: "Technology Consulting",
      shortDesc: "Strategic guidance for digital transformation.",
      iconName: "Settings"
    }
  ],

  challenges: [
    {
      id: "ch-1",
      title: "Outdated Technology",
      description: "Many businesses still rely on outdated IT systems that limit scalability, reduce efficiency, and hinder digital transformation.",
      iconName: "History",
      impact: "Hinders digital scalability and operational speed."
    },
    {
      id: "ch-2",
      title: "Lack of Customization",
      description: "Off-the-shelf software often fails to meet the specific needs of growing enterprises, leading to inefficiencies and higher costs.",
      iconName: "Sliders",
      impact: "High licensing costs with rigid software constraints."
    },
    {
      id: "ch-3",
      title: "Data Security & Compliance",
      description: "With rising cyber threats and strict regulations, many organizations struggle to maintain secure and compliant digital operations.",
      iconName: "ShieldAlert",
      impact: "Exposes organizations to security breaches and regulatory fines."
    },
    {
      id: "ch-4",
      title: "Shortage of Skilled Tech Talent",
      description: "Rapid tech evolution has created a gap between available talent and the skills needed to implement advanced digital solutions.",
      iconName: "UserX",
      impact: "Delays project launches and inflates internal hiring costs."
    }
  ],

  solutions: [
    {
      id: "sol-1",
      title: "Modern, Scalable Tech Infrastructure",
      description: "We replace legacy systems with cloud-native, scalable, and future-proof architectures tailored to your growth needs.",
      iconName: "Server",
      highlight: "Cloud-native architectures built for high availability."
    },
    {
      id: "sol-2",
      title: "Custom Software Development",
      description: "Our solutions are built from the ground up to align with your specific workflows, industry requirements, and business goals.",
      iconName: "Cpu",
      highlight: "100% custom-crafted codebase with high ROI."
    },
    {
      id: "sol-3",
      title: "End-to-End Data Security",
      description: "We integrate robust cybersecurity measures and ensure compliance with global standards like GDPR, HIPAA, and ISO.",
      iconName: "Lock",
      highlight: "Bank-grade encryption & continuous audit logging."
    },
    {
      id: "sol-4",
      title: "Agile & Flexible Delivery Models",
      description: "Using agile methodologies, we deliver fast, iterative solutions with high adaptability to changing business needs.",
      iconName: "Zap",
      highlight: "Sprint-based delivery with continuous feedback."
    },
    {
      id: "sol-5",
      title: "Access to Expert Talent & Innovation",
      description: "Our team of skilled professionals brings deep expertise in emerging technologies, ensuring world-class delivery and innovation.",
      iconName: "Award",
      highlight: "Dedicated elite tech leads for every client project."
    }
  ],

  services: [
    {
      id: "srv-custom-software",
      title: "Custom Software Development",
      category: "Core Engineering",
      shortDescription: "We design and build tailored software solutions that align with your unique business needs, ensuring seamless integration and long-term scalability.",
      fullDescription: "Our custom software development service addresses the limitations of standard off-the-shelf platforms. We construct resilient backends, clean frontend interfaces, microservices, and database layers tailored specifically to your internal processes and commercial goals.",
      iconName: "Code2",
      features: [
        "Microservices & Event-Driven Architecture",
        "Legacy Codebase Modernization",
        "Custom ERP & CRM Platform Engineering",
        "API Integration & Middleware Development"
      ],
      deliverables: [
        "Full Source Code Ownership",
        "Automated CI/CD Pipeline Setup",
        "Technical Documentation & API Specs",
        "Post-Launch Maintenance Support"
      ]
    },
    {
      id: "srv-web-mobile",
      title: "Web & Mobile App Development",
      category: "Digital Experience",
      shortDescription: "From concept to deployment, we create high-performance, user-friendly apps across platforms optimized for functionality, speed, and user experience.",
      fullDescription: "We build intuitive, responsive web platforms and cross-platform mobile apps (iOS & Android) that engage users and deliver fast loading speeds. Utilizing modern frameworks like Next.js, React Native, and TypeScript, we ensure flawless rendering and desktop-grade performance.",
      iconName: "Layout",
      features: [
        "Cross-Platform Native Mobile Apps",
        "Progressive Web Applications (PWA)",
        "High-Speed Next.js SSR & SSG Engineering",
        "UX/UI Design & Micro-Interactions"
      ],
      deliverables: [
        "App Store & Google Play Publishing",
        "Responsive Cross-Device Layouts",
        "SEO-Optimized Web Architectures",
        "Analytics & User Tracking Setup"
      ]
    },
    {
      id: "srv-cloud-infra",
      title: "Cloud & Infrastructure Services",
      category: "DevOps & Cloud",
      shortDescription: "We help businesses migrate, manage, and optimize their IT infrastructure with secure, scalable, and cost-effective cloud solutions.",
      fullDescription: "Transition your applications to scalable cloud environments on AWS, Azure, or Google Cloud. We implement Infrastructure as Code (IaC), container orchestration with Docker and Kubernetes, cost optimization, and 99.99% uptime guarantees.",
      iconName: "Cloud",
      features: [
        "Multi-Cloud Migration & Architecture",
        "Kubernetes & Container Orchestration",
        "Serverless Infrastructure Setup",
        "DevOps Automation & IaC (Terraform)"
      ],
      deliverables: [
        "Automated Deployment Scripts",
        "Cloud Cost Optimization Audit Report",
        "Disaster Recovery & Backup Protocols",
        "24/7 Infrastructure Monitoring Setup"
      ]
    },
    {
      id: "srv-ai-emerging",
      title: "AI & Emerging Tech Integration",
      category: "Artificial Intelligence",
      shortDescription: "Harnessing the power of AI, ML, and blockchain, we build intelligent systems that automate, analyze, and elevate your business operations.",
      fullDescription: "Empower your organization with predictive analytics, large language model (LLM) agents, machine learning workflows, and decentralized blockchain systems. We turn unstructured data into actionable strategic intelligence.",
      iconName: "BrainCircuit",
      features: [
        "Custom LLM & Generative AI Agents",
        "Predictive Analytics & Data Science",
        "Blockchain Smart Contracts & Web3 Apps",
        "Computer Vision & Automated Inspection"
      ],
      deliverables: [
        "Trained Custom Machine Learning Models",
        "Secure Vector Database Integration",
        "Smart Contract Security Audits",
        "AI Workflow Automation Pipelines"
      ]
    },
    {
      id: "srv-compliance-security",
      title: "Compliance & Security Solutions",
      category: "Cybersecurity",
      shortDescription: "We provide end-to-end security architecture and ensure regulatory compliance (GDPR, HIPAA, ISO), safeguarding your data & digital assets.",
      fullDescription: "Protect your proprietary assets and customer data from sophisticated cyber threats. We conduct vulnerability assessments, implement zero-trust access controls, and certify your software to meet international data protection laws.",
      iconName: "ShieldCheck",
      features: [
        "Zero-Trust Architecture & Identity Management",
        "GDPR, HIPAA, and ISO 27001 Compliance Audits",
        "Penetration Testing & Vulnerability Scans",
        "Data Encryption at Rest & in Transit"
      ],
      deliverables: [
        "Comprehensive Security Audit Certificates",
        "Vulnerability Mitigation Reports",
        "Compliance Readiness Documentation",
        "Incident Response Playbooks"
      ]
    }
  ],

  products: [
    {
      id: "prod-sora-ai",
      name: "SoraAI™",
      tagline: "Enterprise AI Automation & Intelligence Engine",
      description: "An advanced enterprise AI platform designed to automate complex multi-step workflows, analyze business intelligence data, and power domain-specific LLM assistants for teams.",
      badge: "SaaS Platform",
      iconName: "Sparkles",
      keyFeatures: [
        "Custom Knowledge Base Vector Search",
        "Automated Process Execution Pipelines",
        "Enterprise Data Privacy & On-Premises Option",
        "Real-Time Operational Insights Dashboard"
      ]
    },
    {
      id: "prod-sora-commerce",
      name: "SoraCommerce™",
      tagline: "Headless High-Throughput E-Commerce Platform",
      description: "A modular, lightning-fast e-commerce engine engineered for B2B and B2C enterprises requiring ultra-low latency catalog search, seamless payment routing, and global scale.",
      badge: "SaaS Platform",
      iconName: "ShoppingBag",
      keyFeatures: [
        "Sub-100ms API Search Engine",
        "Omnichannel Inventory Synchronizer",
        "Multi-Currency & Automated Tax Router",
        "Headless React Frontend SDK"
      ]
    }
  ],

  competitorMatrix: [
    {
      feature: "Custom Software Development",
      eagleSora: true,
      zoho: true,
      wipro: true,
      notes: "Tailored to exact workflows"
    },
    {
      feature: "Tailored Solutions for SMEs & Startups",
      eagleSora: true,
      zoho: true,
      wipro: false,
      notes: "Agile, adaptable engagement models"
    },
    {
      feature: "Affordable & Transparent Pricing",
      eagleSora: true,
      zoho: true,
      wipro: false,
      notes: "No hidden enterprise markups"
    },
    {
      feature: "Proprietary SaaS Product Offerings",
      eagleSora: true,
      zoho: true,
      wipro: false,
      notes: "SoraAI™ and SoraCommerce™"
    },
    {
      feature: "Blockchain & Emerging Tech Integration",
      eagleSora: true,
      zoho: false,
      wipro: true,
      notes: "Cutting-edge Web3 & AI models"
    },
    {
      feature: "Global Delivery Centers & Local Support",
      eagleSora: true,
      zoho: false,
      wipro: true,
      notes: "Direct engineer access & fast turnaround"
    }
  ],

  roadmap: [
    {
      phase: "Phase 1",
      title: "Product Expansion",
      description: "Launch new SaaS platforms tailored for mid-sized enterprises, including advanced AI tools, low-code platforms, and industry-specific digital solutions.",
      milestones: [
        "Launch SoraAI™ Beta Edition",
        "Expand low-code integration adapters",
        "Deploy SME digital transformation bundles"
      ],
      status: "active"
    },
    {
      phase: "Phase 2",
      title: "Global Market Penetration",
      description: "Establish delivery centers in Southeast Asia, the Middle East, and North America to serve a broader international client base and offer localized support.",
      milestones: [
        "Open Middle East delivery hub",
        "Establish North American partner network",
        "Multi-region cloud node deployment"
      ],
      status: "upcoming"
    },
    {
      phase: "Phase 3",
      title: "Advanced R&D & Innovation",
      description: "Invest in research areas like Quantum Computing, Edge AI, and Green Tech to future-proof our offerings and stay ahead of tech evolution.",
      milestones: [
        "Edge AI acceleration framework",
        "Sustainable Green-Computing audit engine",
        "Quantum-resistant cryptography prototypes"
      ],
      status: "planned"
    },
    {
      phase: "Phase 4",
      title: "Scale Operations & Global Reach",
      description: "Strengthen internal processes, governance, and financial systems to prepare for potential IPO and scale operations globally with increased workforce and automation.",
      milestones: [
        "Enterprise governance framework certification",
        "Workforce automation scaling",
        "Global delivery hub expansion"
      ],
      status: "planned"
    }
  ],

  stpAnalysis: {
    segmentation: {
      industries: ["Healthcare", "Finance & Fintech", "E-Commerce", "Education", "Logistics", "Manufacturing"],
      techNeeds: ["AI/ML Integration", "Custom Mobile & Web Apps", "Cloud Migration", "Cybersecurity & Compliance"],
      geography: ["India", "North America", "Middle East", "Europe", "Asia-Pacific"]
    },
    targeting: [
      "Tech-driven SMEs needing scalable, modern software architectures",
      "Fast-growing Startups requiring end-to-end full-cycle product development",
      "Enterprises seeking legacy system modernization & digital transformation",
      "Educational and Government institutions building secure digital infrastructure"
    ],
    positioning: [
      "Innovation-Driven Approach to Software Engineering",
      "Security & Trust as Fundamental Architectural Principles",
      "Complete Customization at Every Phase of Development",
      "Modular Architectures Scalable for Infinite Growth"
    ]
  },

  capitalAllocation: [
    {
      category: "Talent Acquisition & Salaries",
      amountInr: "800,000",
      percentage: 40,
      description: "Recruiting elite senior software engineers, solution architects, and domain specialists."
    },
    {
      category: "Product Development (SaaS Platforms)",
      amountInr: "500,000",
      percentage: 25,
      description: "Accelerating R&D for SoraAI™ and SoraCommerce™ feature expansion."
    },
    {
      category: "Cloud Infrastructure & DevOps Tools",
      amountInr: "400,000",
      percentage: 20,
      description: "Enterprise multi-cloud nodes, CI/CD tooling, and automated security scanners."
    },
    {
      category: "Operations & Compliance",
      amountInr: "300,000",
      percentage: 15,
      description: "ISO certifications, legal compliance frameworks, and operational governance."
    }
  ],

  leaders: [
    {
      id: "leader-sanjay",
      name: "SANJAY GORLE",
      role: "Director",
      nationality: "INDIAN",
      quote: "Experience and steady leadership ensure our company remains grounded while continuously striving for innovation and expansion.",
      bio: "Sanjay Gorle is a seasoned leader with deep expertise in business operations and strategic planning. As a Director at Eagle Sora, he contributes to shaping the company's long-term vision, operational efficiency, and organizational development. His experience and steady leadership ensure the company remains grounded while aiming for continuous innovation and expansion."
    },
    {
      id: "leader-ajay",
      name: "AJAY SANJAYRAO GORLE",
      role: "Director",
      nationality: "INDIAN",
      quote: "Our commitment to engineering excellence and a forward-thinking mindset drive our relentless pursuit of impactful digital transformation.",
      bio: "Ajay Sanjayrao Gorle brings a dynamic and visionary approach to technology leadership at Eagle Sora. With a strong background in digital innovation and strategic execution, he plays a key role in steering the company's growth, client engagement, and product development initiatives. His commitment to excellence and forward-thinking mindset drive the firm's pursuit of impactful digital transformation."
    }
  ],

  faq: [
    {
      question: "How does EAGLE SORA ensure software security & compliance?",
      answer: "We embed security standards into every stage of development. Our architectures comply with GDPR, HIPAA, and ISO standards, incorporating zero-trust access controls, end-to-end data encryption, and automated security audits."
    },
    {
      question: "Can we customize SaaS platforms like SoraAI™ for our specific business?",
      answer: "Yes, absolutely. SoraAI™ and SoraCommerce™ are engineered with modular headless APIs and customizable logic flows, allowing seamless adaptation to your proprietary enterprise data and workflows."
    },
    {
      question: "What engagement models do you offer for startups vs enterprises?",
      answer: "We offer flexible project-based deliverables, dedicated team extension models, and long-term SLA support agreements tailored to suit early-stage startup budgets as well as enterprise scaling needs."
    },
    {
      question: "How can changing CSS theme variables update the website UI?",
      answer: "Our frontend code strictly relies on CSS Custom Properties defined in `:root`. Changing a variable like `--color-primary` immediately propagates across all headers, buttons, accents, cards, and backgrounds globally."
    }
  ]
};