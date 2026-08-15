export const profile = {
  name: "Khalil Wali",
  shortName: "Khalil Wali",
  eyebrow: "FULL-STACK DEVELOPER / JUNIOR DEVOPS ENGINEER",
  role: "Full-Stack Developer | Junior DevOps Engineer",
  focus: "React • Node.js • Laravel • PostgreSQL • AWS • Docker • Kubernetes • Terraform • CI/CD",
  heading: "Building full-stack applications and the infrastructure that runs them.",
  summary:
    "I'm a Full-Stack Developer and Junior DevOps Engineer building modern web applications, containerized environments, CI/CD pipelines, and cloud infrastructure with a focus on reliability, scalability, and maintainability.",
  heroDescription:
    "Full-Stack Developer and Junior DevOps Engineer working across React, Node.js, Laravel, PostgreSQL, AWS, Docker, Kubernetes, Terraform, and CI/CD.",
  aboutLead:
    "Full-Stack Developer and Junior DevOps Engineer with hands-on experience building web applications and deploying cloud-native environments.",
  aboutBody:
    "I work across the application lifecycle — from frontend interfaces and backend APIs to databases, containers, CI/CD pipelines, infrastructure, and monitoring.",
  identityLine: "Nairobi, Kenya · AWS · Kubernetes · Terraform · CI/CD",
  email: "walikhalil480@gmail.com",
  phone: "0790877563",
  github: "https://github.com/walikhalil480-art",
  linkedin: "https://www.linkedin.com/in/khalil-abdi-wali-63a99a169",
  portfolio: "https://www.tijabo.online",
};

export const howIBuild = [
  {
    number: "01",
    title: "BUILD",
    description:
      "Develop full-stack applications with React, Node.js, Express, Laravel, TypeScript, and PHP.",
  },
  {
    number: "02",
    title: "CONTAINERIZE",
    description: "Use Docker and Docker Compose to create consistent application environments.",
  },
  {
    number: "03",
    title: "DEPLOY",
    description:
      "Use Kubernetes, AWS, Terraform, Linux, and Nginx for infrastructure and deployment.",
  },
  {
    number: "04",
    title: "OBSERVE",
    description: "Use Prometheus and Grafana to monitor applications and infrastructure.",
  },
];

export const technicalStack = {
  subtitle: "Tools I use to build, deploy, and maintain applications.",
  fullstack: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Laravel", "PHP", "Prisma ORM"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "Firebase Firestore"],
    },
  ],
  devops: [
    {
      category: "Cloud",
      items: ["AWS", "EC2", "IAM", "VPC", "S3", "CloudWatch"],
    },
    {
      category: "Containers",
      items: ["Docker", "Docker Compose", "Kubernetes", "Nginx"],
    },
    {
      category: "Infrastructure",
      items: ["Terraform"],
    },
    {
      category: "CI/CD",
      items: ["Git", "GitHub", "GitHub Actions"],
    },
    {
      category: "Observability",
      items: ["Prometheus", "Grafana"],
    },
    {
      category: "Operating Systems",
      items: ["Linux", "Ubuntu", "CentOS"],
    },
  ],
};

export const experience = {
  title: "Freelance Full-Stack Web Developer",
  company: "Self-Employed",
  period: "2022 — Present",
  description:
    "Designed and developed responsive web applications for small businesses and individual clients.",
  responsibilities: [
    "Designed and developed responsive web applications for small businesses and individual clients.",
    "Built modern frontend interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS.",
    "Developed RESTful APIs using Node.js, Express.js, Laravel, and PHP.",
    "Integrated authentication systems, payment gateways, and third-party APIs.",
    "Deployed applications using Docker, Nginx, VPS servers, and cloud-based environments.",
    "Managed domain configuration, SSL certificates, and production deployments.",
    "Optimized application performance, SEO, and responsiveness.",
    "Collaborated directly with clients to gather requirements and deliver solutions.",
  ],
};

export type Certification = {
  name: string;
  issuer: string;
};

export const certifications: Certification[] = [
  {
    name: "Diploma in AWS Solution Architect - Associate",
    issuer: "Alison",
  },
  {
    name: "Kubernetes Basics for DevOps",
    issuer: "Coursera",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Coursera",
  },
];

export type Project = {
  slug: string;
  index: string;
  name: string;
  subtitle: string;
  githubUrl: string;
  description: string;
  stack: string[];
  highlights: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  features?: string[];
  modules?: string[];
  infrastructure: string[];
  deployment: string[];
  decisions: string[];
  flowNodes: { label: string; sub?: string }[];
};

export const projects: Project[] = [
  {
    slug: "dukasmart",
    index: "01",
    name: "DukaSmart",
    subtitle: "Multi-Tenant Point-of-Sale Platform",
    githubUrl: "https://github.com/walikhalil480-art/dukasmart",
    description:
      "Scalable multi-tenant point-of-sale platform designed to manage multiple retail shops, inventory, customers, and role-based access.",
    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS",
      "GitHub Actions",
      "Linux",
    ],
    highlights: [
      "Multi-tenant architecture with global query scoping",
      "Role-based access control (RBAC)",
      "Inventory management & sales receipt processing",
      "Customer account tracking",
      "AWS infrastructure provisioned with Terraform",
      "Docker containerized runtime",
      "Kubernetes pod orchestration",
      "GitHub Actions deployment automation",
    ],
    overview:
      "DukaSmart demonstrates the combination of full-stack application development and cloud infrastructure automation. It delivers a multi-tenant POS application where retail businesses operate within isolated scopes, backed by declarative AWS infrastructure and automated Kubernetes deployment pipelines.",
    problem:
      "Retail operators managing multiple physical branches require a unified POS platform without cross-tenant data leaks or infrastructure deployment drift.",
    solution:
      "Engineered tenant scoping into the Laravel core application layer and codified AWS resource management in Terraform to ensure deterministic, zero-downtime container releases.",
    architecture: [
      "Application layer built with Laravel + PHP + MySQL enforcing tenant context globally across API requests.",
      "Multi-stage Docker builds creating light container images.",
      "Terraform provisioning AWS VPC networking, EC2 nodes, Security Groups, and IAM roles.",
      "Kubernetes managing high-availability pod deployment, internal DNS, and service rollouts.",
      "GitHub Actions executing CI/CD linting, image packaging, and automated cluster updates.",
    ],
    features: [
      "Multi-tenant data isolation",
      "Role-based access control (RBAC)",
      "Inventory tracking & management",
      "Customer management & receipt logs",
      "AWS infrastructure provisioning",
      "Declarative Terraform IaC",
      "Docker containerization",
      "Kubernetes orchestration",
      "GitHub Actions CI/CD",
      "Deployment automation",
    ],
    infrastructure: [
      "Terraform code defining AWS VPC subnets, internet gateways, and security boundaries.",
      "Docker images packaging the Laravel runtime and worker queues independently.",
      "Kubernetes Deployments and Services managing worker replica scaling and ingress traffic.",
    ],
    deployment: [
      "GitHub Actions pipeline triggered on release branch updates.",
      "Container tags bound to git commit SHA hashes for version tracking and rollback confidence.",
    ],
    decisions: [
      "Selected scoped shared-schema tenancy for high query performance and simplified database administration.",
      "Mandated Terraform as the exclusive path for cloud changes to maintain environment reproducibility.",
    ],
    flowNodes: [
      { label: "Developer", sub: "Source Code" },
      { label: "GitHub", sub: "Repository" },
      { label: "GitHub Actions", sub: "CI/CD Pipeline" },
      { label: "Docker", sub: "Container Build" },
      { label: "AWS / Kubernetes", sub: "Infrastructure" },
      { label: "DukaSmart", sub: "Multi-Tenant App" },
    ],
  },
  {
    slug: "daryeelone",
    index: "02",
    name: "DaryeelOne",
    subtitle: "Hospital Management System",
    githubUrl: "https://github.com/walikhalil480-art/HospitalSystem",
    description:
      "Full-stack hospital management platform designed around modular healthcare workflows, backend APIs, database management, authentication, and deployment infrastructure.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
    highlights: [
      "Modular healthcare administration architecture",
      "React + TypeScript single-page application frontend",
      "RESTful Express.js backend API with Prisma ORM",
      "Relational PostgreSQL database for medical records",
      "Docker containerization for local and cluster environments",
      "Kubernetes workload manifests and service definitions",
      "GitHub Actions CI workflow for build validation",
    ],
    overview:
      "DaryeelOne is a modular hospital management system built to streamline clinical workflows, patient registrations, doctor scheduling, electronic medical records (EMR), pharmacy inventories, and billing operations under a unified full-stack architecture.",
    problem:
      "Healthcare facilities require a reliable, structured platform to manage patient care, clinical scheduling, and billing records with strict authentication and role boundaries.",
    solution:
      "Developed a responsive React + TypeScript interface consuming typed REST APIs backed by a PostgreSQL database, packaged into Docker containers for reliable cluster deployment.",
    architecture: [
      "React + TypeScript frontend providing modular admin and clinical interfaces.",
      "Express.js backend exposing RESTful APIs with JWT authentication middleware.",
      "Prisma ORM managing transactional database migrations and typed queries against PostgreSQL.",
      "Docker packaging the frontend and backend services into portable container images.",
      "Kubernetes orchestrating pod deployments, internal service networking, and persistent storage.",
    ],
    modules: [
      "Patients Registration & History",
      "Doctors & Staff Directory",
      "Departments & Ward Management",
      "Appointments & Scheduling",
      "Electronic Medical Records (EMR)",
      "Pharmacy & Medication Inventory",
      "Billing & Invoicing Workflows",
    ],
    infrastructure: [
      "Docker multi-stage files building production-optimized static assets and backend runtimes.",
      "Kubernetes manifests defining Deployments, ClusterIP Services, ConfigMaps, and Secrets.",
    ],
    deployment: ["Automated CI testing and image containerization triggered via GitHub Actions."],
    decisions: [
      "Selected TypeScript across frontend and backend for end-to-end type safety.",
      "Used Prisma ORM to guarantee structured database migrations for medical schemas.",
    ],
    flowNodes: [
      { label: "Frontend", sub: "React / TypeScript" },
      { label: "Backend API", sub: "Node.js / Express" },
      { label: "PostgreSQL", sub: "Prisma ORM" },
      { label: "Docker", sub: "Containerization" },
      { label: "Deployment", sub: "K8s / Infrastructure" },
    ],
  },
  {
    slug: "hoyhel",
    index: "03",
    name: "HoyHel",
    subtitle: "Property Rental Platform",
    githubUrl: "https://github.com/walikhalil480-art/hoyhel",
    description:
      "Property rental platform designed to connect property listings with users looking to discover and reserve rental properties.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "Nginx", "Git"],
    highlights: [
      "Property discovery and listing management workflows",
      "Interactive property search and detail view interfaces",
      "Reservation inquiry and booking workflows",
      "Admin management dashboard for property owners",
      "Full-stack API integration with structured database storage",
      "Docker containerized setup for simplified deployment",
    ],
    overview:
      "HoyHel is a modern property rental application crafted to bridge real estate property managers and prospective tenants. The platform handles property listing details, media assets, search filtering, reservation inquiries, and administrative property oversight.",
    problem:
      "Property owners and tenants need a straightforward, fast web application to manage property availability, present property details, and handle rental inquiries cleanly.",
    solution:
      "Built a full-stack web application featuring rich property search views, backend API routes for listing management, and containerized deployment configuration.",
    architecture: [
      "React SPA interface optimized for fast property browsing and responsiveness.",
      "Express.js API layer providing endpoints for property listings, details, and reservations.",
      "PostgreSQL database storing listing attributes, owner records, and user inquiries.",
      "Nginx reverse proxy serving frontend assets and forwarding API requests.",
      "Docker container setup providing environment consistency.",
    ],
    features: [
      "Property listings catalog",
      "Detailed property view pages",
      "Rental reservation workflows",
      "User interaction & search filters",
      "Admin property management",
      "Rental lifecycle tracking",
    ],
    infrastructure: [
      "Dockerized container setup bundling web application and API layers.",
      "Nginx reverse proxy routing web requests and securing API endpoints.",
    ],
    deployment: ["Version controlled repository with containerized staging configurations."],
    decisions: [
      "Focused on clean REST API design to decouple property search rendering from backend persistence.",
    ],
    flowNodes: [
      { label: "User", sub: "Web Client" },
      { label: "Web Application", sub: "React Interface" },
      { label: "Backend API", sub: "Express Services" },
      { label: "Database", sub: "PostgreSQL" },
      { label: "Reservation", sub: "Property Management" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
