export const websiteData = {
  company: {
    name: "Kusha.io",
    tagline: "Global Technology Partner for Ambitious Businesses",
    subheadline: "Netherlands-registered technology company helping startups, scale-ups, and enterprises design, build, and scale software that works.",
    description: "Kusha is a Netherlands-registered technology company helping startups, scale-ups, and enterprises design, build, and scale software that works. From product ideas to enterprise systems, we deliver custom software, cloud, data, and AI solutions through a global delivery model built for quality, speed, and long-term partnership.",
    registration: "Registered in the Netherlands (KVK No. 98986708)",
    kvk: "98986708",
    email: "info@kusha.io",
    locations: {
      businessHQ: {
        title: "European Business HQ",
        location: "Netherlands",
        role: "Business Accountability, Contracting, Invoicing & Client Strategy",
        kvk: "KVK No. 98986708"
      },
      engineeringHub: {
        title: "Global Engineering Hub",
        location: "India",
        role: "Dedicated Engineering, Architecture, QA & AI Labs",
        coverage: "Full Timezone Overlap"
      }
    },
    targetMarkets: [
      "Netherlands", "Europe", "UK", "USA", "Australia", "Singapore", "Canada", "Middle East"
    ],
    purpose: "We exist to help businesses solve real problems with technology — not to sell software for its own sake. Every engagement starts with understanding what a client is trying to achieve, and works backward from there to the right technical solution.",
    mission: "To be a dependable, transparent technology partner for businesses around the world — helping them build, modernize, and scale software with confidence.",
    vision: "To grow into a globally trusted technology partner known for combining strong engineering with honest, business-first thinking — regardless of a client's size, industry, or location.",
    values: [
      {
        title: "Transparency",
        desc: "Clear communication, honest timelines, and no hidden surprises.",
        icon: "Eye"
      },
      {
        title: "Quality",
        desc: "Code and systems built to last, not just to ship.",
        icon: "ShieldCheck"
      },
      {
        title: "Accountability",
        desc: "We take ownership of outcomes, not just deliverables.",
        icon: "Award"
      },
      {
        title: "Partnership",
        desc: "We aim for long-term relationships built on trust, not one-off transactions.",
        icon: "Users"
      },
      {
        title: "Practical Innovation",
        desc: "We apply new technology where it genuinely helps, not for its own sake.",
        icon: "Sparkles"
      }
    ]
  },

  heroStats: [
    { label: "Engineering SLA", value: "99.8%", change: "+0.4% uptime benchmark", isPositive: true },
    { label: "Global Coverage", value: "24 / 7", change: "Europe • US • APAC Timezones", isPositive: true },
    { label: "Active Tech Domains", value: "14+", change: "FinTech, Health, AI & SaaS", isPositive: true }
  ],

  services: [
    {
      id: "software-engineering",
      number: "01",
      title: "Software & Product Engineering",
      shortDesc: "Custom software, MVPs, and enterprise applications built around your business goals.",
      whatItIs: "Custom software and digital product development tailored to your specific business requirements, from MVPs to full enterprise applications.",
      whatKushaProvides: [
        "Product strategy & technical discovery",
        "Custom software design and development",
        "MVP and prototype rapid engineering",
        "Enterprise software engineering",
        "API & scalable backend architecture"
      ],
      problemsSolved: [
        "Off-the-shelf software doesn't fit your unique workflow",
        "Need a product built precisely around your business logic",
        "Need to validate an idea quickly before committing massive capital"
      ],
      typicalUseCases: [
        "New digital product builds",
        "Internal mission-critical business tools",
        "Customer-facing portals & platforms",
        "Backend systems and APIs powering multiple applications"
      ],
      businessBenefits: [
        "Software that fits your actual processes",
        "Faster time-to-market for new products",
        "A scalable foundation for future growth"
      ],
      capabilities: ["React", "Node.js", "Python", "Go", "TypeScript", "Microservices", "REST / GraphQL"],
      cta: "Discuss Your Product Idea"
    },
    {
      id: "web-mobile",
      number: "02",
      title: "Web & Mobile Development",
      shortDesc: "Responsive web platforms and native or cross-platform mobile apps for iOS and Android.",
      whatItIs: "Development of modern web applications, high-performance websites, and native or cross-platform mobile apps.",
      whatKushaProvides: [
        "Web application development (SPAs & SSR)",
        "Responsive web platforms",
        "Native iOS and Android app development",
        "Cross-platform mobile apps (React Native / Flutter)"
      ],
      problemsSolved: [
        "Need a customer-facing presence that performs well and scales under load",
        "Need one unified codebase that works seamlessly across iOS and Android",
        "Existing web/mobile products are slow, outdated, or hard to maintain"
      ],
      typicalUseCases: [
        "Customer self-service portals",
        "E-commerce & marketplace platforms",
        "Booking and reservation systems",
        "Consumer and enterprise mobile apps"
      ],
      businessBenefits: [
        "Consistent user experience across all devices",
        "Faster development cycles through smart code reuse",
        "Platforms built to scale with exponential user growth"
      ],
      capabilities: ["React", "Next.js", "Vue", "React Native", "Flutter", "Swift", "Kotlin"],
      cta: "Talk to Us About Your Web or App Project"
    },
    {
      id: "cloud-devops",
      number: "03",
      title: "Cloud & DevOps",
      shortDesc: "Cloud architecture, migration, and CI/CD automation pipelines that scale with you.",
      whatItIs: "Cloud architecture, migration, and automation pipelines that support fast, reliable software delivery.",
      whatKushaProvides: [
        "Cloud solution design & multi-cloud architecture",
        "Zero-downtime cloud migration",
        "Infrastructure setup & orchestration",
        "CI/CD automated pipeline implementation",
        "DevOps process design & observability"
      ],
      problemsSolved: [
        "On-premise infrastructure is costly or difficult to scale",
        "Deployments are slow, manual, or prone to downtime",
        "Systems need superior reliability, failover, and observability"
      ],
      typicalUseCases: [
        "Migrating legacy applications to AWS / GCP / Azure",
        "Setting up auto-scaling infrastructure for growing products",
        "Automating build, test, and deploy pipelines"
      ],
      businessBenefits: [
        "Lower infrastructure overhead and server costs",
        "Faster and safer release cadence",
        "Improved system uptime, resilience, and scalability"
      ],
      capabilities: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      cta: "Plan Your Cloud Strategy"
    },
    {
      id: "data-analytics",
      number: "04",
      title: "Data Engineering & Analytics",
      shortDesc: "Data pipelines, warehousing, and analytics that turn raw information into strategic decisions.",
      whatItIs: "Building the infrastructure and data pipelines that collect, clean, process, and make sense of business data.",
      whatKushaProvides: [
        "High-throughput data pipeline development",
        "ETL / ELT data workflow implementation",
        "Modern cloud data warehousing",
        "Analytics, reporting, and BI solutions"
      ],
      problemsSolved: [
        "Data is scattered across siloed systems and hard to use",
        "Reporting takes too long or relies on error-prone spreadsheets",
        "Decisions are being made without verified, real-time data"
      ],
      typicalUseCases: [
        "Consolidating data from CRM, ERP, and product platforms",
        "Building executive analytics dashboards",
        "Preparing structured data for AI/ML modeling"
      ],
      businessBenefits: [
        "Faster, reliable access to actionable business insights",
        "Eliminated manual reporting overhead",
        "A rock-solid data foundation for future AI initiatives"
      ],
      capabilities: ["PostgreSQL", "Snowflake", "BigQuery", "Apache Kafka", "dbt", "Airflow", "PowerBI / Looker"],
      cta: "Discuss Your Data Challenges"
    },
    {
      id: "ai-ml",
      number: "05",
      title: "AI & Machine Learning",
      shortDesc: "Practical AI, machine learning, and generative AI integrations that create measurable value.",
      whatItIs: "Practical application of AI, machine learning, and generative AI to solve specific business problems without the hype.",
      whatKushaProvides: [
        "Machine learning model development and fine-tuning",
        "Generative AI & LLM integrations",
        "AI-powered intelligent feature development",
        "AI roadmap and strategy consulting"
      ],
      problemsSolved: [
        "Manual processes that could be automated intelligently",
        "Unused enterprise data that could power predictive insights",
        "Interest in AI without a clear, cost-effective starting point"
      ],
      typicalUseCases: [
        "Intelligent document parsing and data extraction",
        "Autonomous AI assistants and customer support bots",
        "Predictive analytics & demand forecasting",
        "Integrating LLMs into existing SaaS workflows"
      ],
      businessBenefits: [
        "Automation of complex, judgment-based workflows",
        "Novel AI-driven product capabilities",
        "Maximized return on existing company data assets"
      ],
      capabilities: ["OpenAI / Anthropic APIs", "PyTorch", "HuggingFace", "LangChain", "Vector DBs", "RAG Architecture"],
      cta: "Explore AI for Your Business"
    },
    {
      id: "iot-automation",
      number: "06",
      title: "IoT & Automation",
      shortDesc: "Connected devices, telemetry, and workflow automation that eliminate manual operational bottlenecks.",
      whatItIs: "Connecting physical devices to cloud software systems, and automating repetitive business workflows.",
      whatKushaProvides: [
        "IoT application & telemetry development",
        "Device-to-cloud secure integration",
        "End-to-end business process automation"
      ],
      problemsSolved: [
        "Manual, repetitive operational tasks draining team hours",
        "Lack of real-time visibility into physical assets or hardware",
        "Disconnected hardware and legacy software systems"
      ],
      typicalUseCases: [
        "Remote equipment and sensor monitoring",
        "Connected smart hardware product features",
        "Multi-step approval and operational workflow automation",
        "Operational process digitization"
      ],
      businessBenefits: [
        "Drastically reduced manual effort and operational friction",
        "Real-time visibility into operations and equipment",
        "Superior operational efficiency and error reduction"
      ],
      capabilities: ["MQTT", "WebSockets", "AWS IoT Core", "Edge Computing", "Node-RED", "Zapier/n8n"],
      cta: "Talk to Us About IoT & Automation"
    },
    {
      id: "cybersecurity-qa",
      number: "07",
      title: "Cybersecurity & Quality Engineering",
      shortDesc: "Secure-by-design development practices and rigorous automated QA testing for rock-solid reliability.",
      whatItIs: "Security-focused development practices and rigorous testing to ensure software is safe, resilient, and reliable.",
      whatKushaProvides: [
        "Secure software development lifecycle (SSDLC)",
        "Software testing & QA (automated & manual)",
        "Security-focused code review and vulnerability scanning"
      ],
      problemsSolved: [
        "Concerns about system vulnerabilities or customer data exposure",
        "Lack of confidence in software reliability prior to major releases",
        "Insufficient automated testing coverage leading to regression bugs"
      ],
      typicalUseCases: [
        "Pre-release full regression and penetration testing cycles",
        "Automated end-to-end and integration test suite builds",
        "Security-conscious application architecture and compliance prep"
      ],
      businessBenefits: [
        "Minimized risk of data leaks and security incidents",
        "Higher confidence in rapid continuous releases",
        "Significantly fewer production defects and rollbacks"
      ],
      capabilities: ["Cypress", "Playwright", "Jest", "OWASP Standards", "SonarQube", "Snyk", "Security Auditing"],
      cta: "Strengthen Your Software Quality"
    },
    {
      id: "system-integration",
      number: "08",
      title: "System Integration & Modernization",
      shortDesc: "Connecting disparate systems, APIs, and rebuilding legacy architectures that no longer serve you.",
      whatItIs: "Connecting disparate systems and modernizing legacy applications that hold your business back.",
      whatKushaProvides: [
        "Enterprise system integration",
        "High-performance API development for interoperability",
        "Legacy system refactoring & modernization",
        "Cloud-native platform re-architecture"
      ],
      problemsSolved: [
        "Siloed systems that do not communicate or sync data",
        "Outdated tech stacks that are expensive, brittle, or risky to maintain",
        "Legacy monolithic platforms preventing team agility"
      ],
      typicalUseCases: [
        "Integrating CRM, ERP, and billing platforms",
        "Migrating legacy monolithic apps to modular microservices",
        "Connecting third-party partner services via custom APIs"
      ],
      businessBenefits: [
        "Reduced operational friction between business tools",
        "Lower long-term maintenance and licensing costs",
        "A modern foundation for rapid feature development"
      ],
      capabilities: ["REST / GraphQL", "gRPC", "Message Queues", "Legacy Strangler Pattern", "API Gateways"],
      cta: "Discuss Your Modernization Needs"
    },
    {
      id: "it-consulting",
      number: "09",
      title: "IT Consulting & Technical Strategy",
      shortDesc: "Independent technical guidance for architecture, tech stack evaluation, and strategic roadmaps.",
      whatItIs: "Independent technical guidance to support architecture, technology, and strategic decisions before capital commitment.",
      whatKushaProvides: [
        "Technology strategy and digital roadmap consulting",
        "Architecture review and performance audits",
        "Technical due diligence input for investors & executives",
        "Vendor and technology stack selection guidance"
      ],
      problemsSolved: [
        "Uncertainty about the right technical direction or stack",
        "Need for an objective, expert outside perspective",
        "Complex architecture or high-risk technology trade-offs"
      ],
      typicalUseCases: [
        "Pre-project technical feasibility and scope planning",
        "System health and scalability reviews for existing products",
        "Comparative technology evaluations"
      ],
      businessBenefits: [
        "Confident, well-reasoned technical decision-making",
        "Reduced risk of costly rework and wrong technology bets",
        "Unbiased, objective expert guidance"
      ],
      capabilities: ["Architecture Blueprints", "Tech Audits", "Due Diligence", "Cost Optimization", "Security Planning"],
      cta: "Book a Technical Consultation"
    },
    {
      id: "dedicated-teams",
      number: "10",
      title: "Dedicated Development Teams",
      shortDesc: "Vetted senior engineers and complete cross-functional pods working as an extension of your team.",
      whatItIs: "Access to dedicated developers or full cross-functional development teams who integrate seamlessly into your workflow.",
      whatKushaProvides: [
        "Individual dedicated senior engineers",
        "Dedicated cross-functional teams (PM, Dev, QA, DevOps)",
        "Long-term engineering team augmentation"
      ],
      problemsSolved: [
        "Difficulty hiring qualified senior engineers locally",
        "Need for capacity without long-term local hiring liabilities",
        "Need to scale a squad rapidly for a time-sensitive initiative"
      ],
      typicalUseCases: [
        "Extending an in-house engineering team with specialized skills",
        "Spinning up an entire external product delivery team",
        "Filling critical skill gaps (e.g. Cloud, Mobile, AI, DevOps)"
      ],
      businessBenefits: [
        "Instant access to pre-vetted senior software talent",
        "Elastic scaling up or down as project demands change",
        "Drastically reduced hiring, onboarding, and management overhead"
      ],
      capabilities: ["Full-Stack Engineers", "DevOps Specialists", "QA Leads", "Scrum Masters", "UI/UX Engineers"],
      cta: "Build Your Dedicated Team"
    }
  ],

  industries: [
    {
      id: "fintech",
      name: "FinTech",
      tag: "Financial Technology",
      description: "Secure transaction systems, financial data pipelines, regulatory-aware application architecture, and integrations with banking and payment infrastructure.",
      highlights: ["Payment Gateway Integrations", "Real-time Ledger Systems", "PSD2 / Open Banking APIs", "Compliance & Audit Logs"]
    },
    {
      id: "healthcare",
      name: "Healthcare",
      tag: "Health & MedTech",
      description: "Secure patient data systems, workflow digitization, integration between healthcare software systems, and data-handling practices aligned with privacy expectations.",
      highlights: ["HIPAA/GDPR Data Handling", "Telehealth Platforms", "EHR/EMR Integrations", "Doctor-Patient Portals"]
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      tag: "Retail & Marketplaces",
      description: "Scalable storefronts, inventory and order management systems, payment and logistics integrations, and performance optimization for high-traffic platforms.",
      highlights: ["High-Traffic Headless Stores", "Automated Inventory Sync", "Multi-Currency Checkout", "Custom CRM & Order Routing"]
    },
    {
      id: "logistics",
      name: "Logistics & Supply Chain",
      tag: "Fleet & Freight",
      description: "Fleet and shipment tracking, route and inventory optimization tools, real-time visibility platforms, and system integration across supply chain partners.",
      highlights: ["Real-time GPS Telemetry", "Dispatch & Routing Optimization", "Warehouse Inventory Systems", "Partner EDI Integrations"]
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      tag: "Industry 4.0",
      description: "Production monitoring systems, IoT-enabled equipment tracking, process automation, and legacy shop-floor modernization.",
      highlights: ["Sensor Data Telemetry", "Predictive Maintenance", "OEE Performance Metrics", "Factory Floor Digitization"]
    },
    {
      id: "realestate",
      name: "Real Estate",
      tag: "PropTech",
      description: "Property management platforms, listing and search systems, CRM integrations, and virtual tour or booking functionality.",
      highlights: ["Interactive Listing Engines", "Tenant Portal Systems", "Automated Lease Processing", "Broker CRM Integrations"]
    },
    {
      id: "education",
      name: "Education",
      tag: "EdTech",
      description: "Learning management systems, student information platforms, content delivery tools, and administrative process automation.",
      highlights: ["Custom LMS Platforms", "Interactive Course Delivery", "Live Classroom Streaming", "Automated Assessment Engines"]
    },
    {
      id: "retail",
      name: "Retail",
      tag: "Omnichannel Commerce",
      description: "Point-of-sale integrations, omnichannel inventory systems, customer data platforms, and analytics for demand planning.",
      highlights: ["POS & Cloud Sync", "Unified Customer Profiles", "Stock Replenishment Algos", "Loyalty & Rewards Systems"]
    },
    {
      id: "saas",
      name: "SaaS",
      tag: "Cloud Platforms",
      description: "Multi-tenant architecture, subscription and billing systems, API-first product design, and scalable infrastructure for growing user bases.",
      highlights: ["Multi-Tenant Isolation", "Stripe Billing & Metering", "Granular RBAC Permissions", "Scalable Microservices"]
    },
    {
      id: "automotive",
      name: "Automotive",
      tag: "Connected Mobility",
      description: "Connected vehicle data platforms, dealership and fleet management systems, IoT integrations for diagnostics and monitoring.",
      highlights: ["CAN-bus / OBD Telemetry", "Dealership Inventory Portals", "Fleet Management Dashboards", "Diagnostic Reporting"]
    },
    {
      id: "professional-services",
      name: "Professional Services",
      tag: "Consulting & Legal",
      description: "Client management systems, workflow and document automation, internal tooling, and reporting dashboards.",
      highlights: ["Secure Document Portals", "Automated Time & Invoicing", "Client Collaboration Hubs", "Workflow Automation"]
    },
    {
      id: "travel",
      name: "Travel & Hospitality",
      tag: "TravelTech",
      description: "Booking and reservation platforms, property/inventory management systems, and integrations with third-party travel APIs.",
      highlights: ["GDS & OTA Integrations", "Dynamic Pricing Engines", "Booking & Payment Flow", "Guest Management Portals"]
    },
    {
      id: "industrial-tech",
      name: "Industrial Technology",
      tag: "Operational Tech",
      description: "Equipment monitoring, industrial IoT integration, predictive maintenance systems, and process digitization.",
      highlights: ["SCADA / PLC Interfacing", "Edge Device Management", "Safety Telemetry Alarms", "Industrial Data Lakes"]
    },
    {
      id: "startups",
      name: "Startups & Scale-ups",
      tag: "Venture Products",
      description: "MVP development, product-market fit iteration support, scalable architecture from day one, and flexible engineering capacity as the business grows.",
      highlights: ["Rapid MVP Prototyping", "Investor-Ready Tech Demos", "Cost-Efficient Cloud Setup", "Agile Pod Scaling"]
    }
  ],

  technologies: [
    {
      category: "Frontend",
      desc: "Responsive, accessible, and performant user interfaces using modern JavaScript/TypeScript frameworks.",
      stack: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "HTML5/CSS3", "Redux/Zustand"]
    },
    {
      category: "Backend",
      desc: "Reliable backend systems and APIs structured for high concurrency, maintainability, and scale.",
      stack: ["Node.js", "Python", "Go (Golang)", "Java", ".NET Core", "Express", "FastAPI", "NestJS"]
    },
    {
      category: "Mobile",
      desc: "Native and cross-platform apps enabling businesses to reach mobile users efficiently without compromising performance.",
      stack: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Expo", "Capacitor"]
    },
    {
      category: "Databases",
      desc: "Relational and NoSQL schemas suited to application performance, consistency, and analytical needs.",
      stack: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB", "Elasticsearch", "Supabase"]
    },
    {
      category: "Cloud",
      desc: "Resilient solutions architected and deployed on world-class cloud platforms.",
      stack: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Microsoft Azure", "Cloudflare", "Vercel"]
    },
    {
      category: "DevOps & CI/CD",
      desc: "Automated pipelines and infrastructure-as-code enabling fast, safe, and repeatable software delivery.",
      stack: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "GitLab CI", "Helm", "Ansible"]
    },
    {
      category: "Data Engineering",
      desc: "Modern ETL/ELT pipelines and data warehouses turning raw logs into actionable intelligence.",
      stack: ["Apache Kafka", "Snowflake", "BigQuery", "Apache Spark", "Airflow", "dbt", "Databricks"]
    },
    {
      category: "AI & Machine Learning",
      desc: "Practical ML models and generative AI technologies engineered into production workflows.",
      stack: ["OpenAI API", "Anthropic Claude", "LangChain", "PyTorch", "TensorFlow", "Hugging Face", "Pinecone/Chroma"]
    },
    {
      category: "IoT & Embedded",
      desc: "Protocols and device-to-cloud infrastructure connecting physical hardware with enterprise software.",
      stack: ["MQTT", "WebSockets", "AWS IoT Core", "CoAP", "Raspberry Pi", "ESP32", "Edge AI"]
    },
    {
      category: "Testing & QA",
      desc: "Automated test suites and manual validation frameworks ensuring zero regressions.",
      stack: ["Playwright", "Cypress", "Jest", "Selenium", "Postman", "k6 Performance", "Appium"]
    },
    {
      category: "Cybersecurity",
      desc: "Secure coding practices, encryption, access control design, and vulnerability auditing.",
      stack: ["OWASP Security", "OAuth 2.0 / OIDC", "SonarQube", "Snyk", "SSL/TLS Hardening", "Penetration Testing"]
    }
  ],

  howWeWork: [
    {
      step: "01",
      title: "Discovery",
      desc: "We start by understanding your business, goals, users, and constraints — not just the technical brief.",
      deliverable: "Strategic Alignment & Scope Map"
    },
    {
      step: "02",
      title: "Requirement Analysis",
      desc: "We translate your goals into clear, structured functional and technical requirements everyone agrees on.",
      deliverable: "Technical Requirements Specification"
    },
    {
      step: "03",
      title: "Solution Planning",
      desc: "We define the scope, approach, timeline, and team structure needed to deliver successfully.",
      deliverable: "Project Roadmap & Sprint Plan"
    },
    {
      step: "04",
      title: "Architecture",
      desc: "We design a system architecture built for performance, security, and future scalability.",
      deliverable: "System Architecture Blueprint"
    },
    {
      step: "05",
      title: "Design & Development",
      desc: "We build the solution in structured, reviewable increments, keeping you involved throughout with sprint demos.",
      deliverable: "Working Software Increments"
    },
    {
      step: "06",
      title: "Testing & QA",
      desc: "We validate functionality, performance, and security across devices before anything reaches production.",
      deliverable: "Automated QA & Security Sign-off"
    },
    {
      step: "07",
      title: "Deployment",
      desc: "We release to production carefully with automated CI/CD, minimizing risk and disruption to your business.",
      deliverable: "Zero-Downtime Production Launch"
    },
    {
      step: "08",
      title: "Support & Maintenance",
      desc: "We provide ongoing support, monitoring, and updates to keep your systems stable and secure.",
      deliverable: "SLA-backed Production Support"
    },
    {
      step: "09",
      title: "Scaling & Continuous Improvement",
      desc: "As your business grows, we help your systems evolve — adding new features, improving performance, and expanding capacity.",
      deliverable: "Growth & Feature Evolution"
    }
  ],

  engagementModels: [
    {
      id: "fixed-price",
      title: "Fixed-Price Projects",
      badge: "Predictable Scope",
      bestFor: "Best for projects with well-defined scope and requirements, where cost predictability matters most.",
      useCases: ["MVPs & Prototypes", "Defined feature builds", "Standalone tool integrations"],
      features: [
        "Guaranteed fixed budget and delivery milestones",
        "Clear timeline with predefined deliverables",
        "Defined change management process",
        "Full post-launch warranty period"
      ]
    },
    {
      id: "time-material",
      title: "Time & Material",
      badge: "Agile & Adaptive",
      bestFor: "Best for projects where requirements are expected to evolve, or where flexibility is more important than fixed scope.",
      useCases: ["Iterative product development", "R&D and exploratory software", "Fast-moving startup roadmaps"],
      features: [
        "Pay strictly for actual hours and resources used",
        "Pivots and requirement adjustments welcomed anytime",
        "Transparent bi-weekly sprint billing & logs",
        "Direct sprint-by-sprint backlog prioritization"
      ]
    },
    {
      id: "dedicated-developers",
      title: "Dedicated Developers",
      badge: "Specialized Talent",
      bestFor: "Best for businesses that need individual skilled engineers integrated directly into their existing workflow.",
      useCases: ["Filling specific skill gaps (AI, DevOps, Mobile)", "Scaling an established codebase", "Direct day-to-day developer management"],
      features: [
        "Full-time 100% dedicated to your project",
        "Works inside your Slack, Jira, and GitHub",
        "Direct daily communication in your timezone",
        "Zero recruitment or local employee overhead"
      ]
    },
    {
      id: "dedicated-teams",
      title: "Dedicated Development Teams",
      badge: "Complete Pod",
      bestFor: "Best for businesses that need a full, ready-to-work team without building one internally from scratch.",
      useCases: ["End-to-end product development", "New division software initiatives", "Accelerated multi-platform builds"],
      features: [
        "Cross-functional squad: Devs, QA, DevOps & Project Lead",
        "Self-managing autonomous agile delivery",
        "Standardized code reviews and documentation",
        "Scalable pod size based on velocity needs"
      ]
    },
    {
      id: "team-augmentation",
      title: "Team Augmentation",
      badge: "Elastic Capacity",
      bestFor: "Best for companies with an existing in-house team that needs additional surge capacity or specialized skills.",
      useCases: ["Meeting tight release deadlines", "Seasonal engineering surges", "Specialized architecture refactoring"],
      features: [
        "Seamless integration with existing engineering standards",
        "Rapid onboarding within days",
        "Flexible contract terms and scaling",
        "Knowledge transfer to internal engineers"
      ]
    },
    {
      id: "long-term-partnership",
      title: "Long-Term Technology Partnership",
      badge: "Strategic Co-Pilot",
      bestFor: "Best for businesses that want a consistent, ongoing engineering partner across multiple projects and initiatives.",
      useCases: ["Multi-year digital transformation", "Continuous product evolution", "CTO-level engineering co-pilot"],
      features: [
        "Strategic technology planning and architecture stewardship",
        "Priority engineering capacity allocation",
        "Discounted long-term engagement rates",
        "Proactive system optimizations and updates"
      ]
    }
  ],

  whyKusha: [
    {
      title: "Global Structure, Built for International Clients",
      desc: "A Netherlands-registered business presence paired with a capable engineering team, designed specifically to serve clients across different regions and time zones.",
      icon: "Globe"
    },
    {
      title: "End-to-End Capability",
      desc: "From early strategy and architecture through development, testing, deployment, and long-term support — all handled by one accountable partner.",
      icon: "Layers"
    },
    {
      title: "Flexible Engagement, Not One-Size-Fits-All",
      desc: "Fixed-price, dedicated teams, staff augmentation, or long-term partnership — structured around how you want to work.",
      icon: "Sliders"
    },
    {
      title: "Business-First Technology Thinking",
      desc: "We aim to understand the 'why' behind a request before jumping to the 'how,' so the solutions we build actually serve your goals.",
      icon: "TrendingUp"
    },
    {
      title: "Transparent Communication",
      desc: "Clear scoping, honest trade-off conversations, and structured updates — no surprises partway through a project.",
      icon: "MessageSquare"
    },
    {
      title: "Security and Quality as Standard Practice",
      desc: "Testing, code review, and secure development practices are built into our process, not treated as optional extras.",
      icon: "Shield"
    },
    {
      title: "Cost-Effective Engineering Without Compromise",
      desc: "Our delivery model allows for strong technical capability at a more sustainable cost than many Western-market-only providers.",
      icon: "Zap"
    },
    {
      title: "Built for Long-Term Partnership",
      desc: "We measure success by whether clients come back for their next project — not just whether the current one ships.",
      icon: "HeartHandshake"
    }
  ],

  caseStudyBlueprints: [
    {
      domain: "FinTech & Open Banking",
      challenge: "Scale a multi-currency payment reconciliation pipeline handling high transaction spikes without data loss.",
      solution: "Event-driven microservices architecture using Apache Kafka, Go, and PostgreSQL with automated audit logging.",
      outcomes: "Sub-50ms latency, zero transaction drops, and automated compliance reporting.",
      stack: ["Go", "Kafka", "PostgreSQL", "Docker", "AWS"]
    },
    {
      domain: "Healthcare & Telehealth",
      challenge: "Build a HIPAA/GDPR compliant video consultation and patient EHR portal with seamless doctor scheduling.",
      solution: "WebRTC encrypted video streams with React frontend, Node.js microservices, and encrypted AWS health datastore.",
      outcomes: "100% compliance audit pass, sub-second scheduling sync, and high patient satisfaction.",
      stack: ["React", "Node.js", "WebRTC", "PostgreSQL", "AWS HealthLake"]
    },
    {
      domain: "E-Commerce & Supply Chain",
      challenge: "Legacy monolithic webshop suffering 6s page loads and checkout drop-offs during seasonal flash sales.",
      solution: "Headless Next.js storefront paired with high-concurrency microservices and Redis inventory caching.",
      outcomes: "Page load dropped from 6s to 0.8s, checkout conversions surged +34%.",
      stack: ["Next.js", "TypeScript", "Redis", "Stripe API", "Kubernetes"]
    }
  ],

  insights: [
    { id: 1, title: "How to Choose the Right Software Development Partner for Your Business", category: "Strategy", readTime: "5 min" },
    { id: 2, title: "MVP vs. Full Product Build: What Startups Should Consider First", category: "Startups", readTime: "6 min" },
    { id: 3, title: "Cloud Migration: Common Pitfalls and How to Avoid Them", category: "Cloud", readTime: "7 min" },
    { id: 4, title: "Building Scalable SaaS Architecture from Day One", category: "SaaS", readTime: "8 min" },
    { id: 5, title: "When Does Legacy System Modernization Make Business Sense?", category: "Architecture", readTime: "6 min" },
    { id: 6, title: "A Practical Guide to Generative AI Integration for Businesses", category: "AI & ML", readTime: "7 min" },
    { id: 7, title: "Data Silos: Why They Happen and How to Fix Them", category: "Data", readTime: "5 min" },
    { id: 8, title: "Fixed-Price vs. Time & Material: Choosing the Right Engagement Model", category: "Strategy", readTime: "6 min" },
    { id: 9, title: "What CTOs Should Evaluate Before Outsourcing Development", category: "Leadership", readTime: "8 min" },
    { id: 10, title: "Building Secure Applications: A Non-Technical Founder's Guide", category: "Security", readTime: "6 min" },
    { id: 11, title: "The Real Cost of Technical Debt (and How to Manage It)", category: "Engineering", readTime: "7 min" },
    { id: 12, title: "API-First Design: Why It Matters for Modern Software Products", category: "Architecture", readTime: "5 min" },
    { id: 13, title: "How IoT Is Changing Manufacturing and Industrial Operations", category: "IoT", readTime: "8 min" },
    { id: 14, title: "Automating Business Processes: Where to Start", category: "Automation", readTime: "6 min" },
    { id: 15, title: "Microservices vs. Monolith: Making the Right Architecture Choice", category: "Architecture", readTime: "9 min" },
    { id: 16, title: "Data Analytics Maturity: Where Does Your Business Stand?", category: "Data", readTime: "6 min" },
    { id: 17, title: "Building for Compliance: Data Handling in Regulated Industries", category: "Security", readTime: "7 min" },
    { id: 18, title: "What Makes a Mobile App Strategy Successful in 2026", category: "Mobile", readTime: "5 min" },
    { id: 19, title: "DevOps Fundamentals: Why CI/CD Matters for Growing Companies", category: "Cloud", readTime: "6 min" },
    { id: 20, title: "Evaluating AI Use Cases: Which Problems Are Worth Solving with AI", category: "AI & ML", readTime: "8 min" },
    { id: 21, title: "Dedicated Team vs. In-House Hiring: A Cost and Capability Comparison", category: "Strategy", readTime: "7 min" },
    { id: 22, title: "Cybersecurity Basics Every Growing Business Should Have in Place", category: "Security", readTime: "6 min" },
    { id: 23, title: "Designing for Scale: Lessons from High-Growth Software Products", category: "Engineering", readTime: "8 min" },
    { id: 24, title: "The Role of System Integration in Digital Transformation", category: "Strategy", readTime: "7 min" }
  ],

  faqs: [
    {
      q: "What services does Kusha provide?",
      a: "Kusha provides end-to-end technology services, including custom software development, web and mobile app development, cloud and DevOps, data engineering and analytics, AI and machine learning, IoT and automation, cybersecurity, quality engineering, system integration, legacy modernization, IT consulting, and dedicated development teams."
    },
    {
      q: "Where is Kusha based?",
      a: "Kusha.io is registered as a business entity in the Netherlands under KVK No. 98986708, providing our global clients with a reliable European legal structure, contract governance, and business accountability."
    },
    {
      q: "Where is the development team located?",
      a: "Our engineering team is based in India, working as a fully integrated extension of our clients' teams, providing strong engineering depth at sustainable cost with complete timezone overlap."
    },
    {
      q: "Can Kusha work with international clients?",
      a: "Yes. Kusha is built specifically to serve international clients, with active focus on the Netherlands, Europe, the UK, the USA, Australia, Singapore, Canada, and the Middle East."
    },
    {
      q: "What types of projects do you undertake?",
      a: "We work on projects ranging from early-stage MVPs and startup products to enterprise software, legacy modernization, and long-term platform development, across web, mobile, cloud, data, and AI."
    },
    {
      q: "Can you work with an existing development team?",
      a: "Yes. We regularly work alongside in-house engineering teams through team augmentation, filling specific skill or capacity gaps as needed with seamless daily integration."
    },
    {
      q: "Can you build an application from scratch?",
      a: "Yes. We support projects from initial concept and requirements through architecture, development, testing, deployment, and ongoing support."
    },
    {
      q: "Do you provide dedicated developers?",
      a: "Yes. We offer individual dedicated developers as well as full dedicated cross-functional teams, depending on your project scope and roadmap needs."
    },
    {
      q: "Do you provide long-term support?",
      a: "Yes. We offer ongoing support and maintenance after launch, as well as long-term technology partnerships for continued development and scaling."
    },
    {
      q: "What engagement models are available?",
      a: "We offer fixed-price projects, time & material engagements, dedicated developers and teams, team augmentation, technical consulting, and long-term partnerships."
    },
    {
      q: "How do we start a project?",
      a: "Reach out via our contact form or email us at info@kusha.io. We'll schedule an initial discovery conversation to understand your requirements before proposing an approach."
    },
    {
      q: "Can we sign an NDA?",
      a: "Yes. We are glad to sign a mutual NDA before discussing confidential project details, as standard practice."
    },
    {
      q: "How do you handle project communication?",
      a: "We use structured communication throughout every project, including regular updates, scheduled check-ins, and clear documentation, adapted to your preferred tools (Slack, Teams, Jira) and time zone."
    },
    {
      q: "What technologies do you work with?",
      a: "We work across a broad range of modern frontend, backend, mobile, cloud, database, DevOps, data engineering, and AI/ML technologies, selected based on the specific needs of each project."
    }
  ]
};
