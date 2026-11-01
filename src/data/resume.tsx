import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export type Skill = {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export type Project = {
  title: string;
  href?: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links?: readonly {
    type: string;
    href: string;
    icon: React.ReactNode;
  }[];
  image?: string;
  video?: string;
};

export const DATA = {
  name: "Mohammed Guejjim",
  initials: "MG",
  url: "https://portfolio.ellsimohammed8.workers.dev",
  location: "Morocco",
  locationLink: "https://www.google.com/maps/place/Morocco",
  description:
    "AI Automation Specialist | AI-Assisted Builder. I help agencies and small businesses stop losing clients to slow follow-up, with Make, n8n and Zapier systems, always with human approval before anything is sent.",
  summary:
    "I design and deliver automation systems that remove manual work - follow-up, onboarding, CRM and reporting - with a human approving before anything is sent, never auto-send. I build by directing AI tools: I specify, verify and deliver working systems. I do not claim hand-coded mastery of programming languages or frameworks. Licence Professionnelle in Biotechnologie Agroalimentaire et Qualité.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Make (Level 4)" },
    { name: "n8n" },
    { name: "Zapier" },
    { name: "Workflow Automation" },
    { name: "AI Agent Orchestration (directed)" },
    { name: "CRM Automation" },
    { name: "Google Workspace" },
    { name: "AI-Assisted Web Apps" },
    { name: "Prompt Engineering" },
    { name: "Quality & Process Documentation" },
  ] as Skill[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ellsimohammed8@gmail.com",
    tel: "+212611145968",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ellsimohammed8-prog",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammed-guejjim-07b797290",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:ellsimohammed8@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "https://github.com/ellsimohammed8-prog",
      badges: [],
      location: "Remote",
      title: "AI Automation Specialist",
      logoUrl: "/me.png",
      start: "2025",
      end: "Present",
      description:
        "Designing and delivering automation systems with Make, n8n and Zapier: post-call follow-up, lead generation and outreach, CRM and reporting, always with human approval before anything is sent. Systems are built by directing AI tools, specified and verified before delivery.",
    },
    {
      company: "Al Karama & Agro-Industries",
      href: "https://estfbs.usms.ac.ma/",
      badges: [],
      location: "Beni Mellal, Morocco",
      title: "Quality Intern - Final-Year Project (PFE)",
      logoUrl: "https://images.seeklogo.com/logo-png/42/1/usms-logo-png_seeklogo-424332.png",
      start: "2026",
      end: "2026",
      description:
        "Final-year internship (June 2026): production process follow-up, formulation and quality control of Harissa, and hazard-analysis tables (HACCP). Earlier, in May 2026, an agricultural valorisation internship focused on packaging and valorisation of agricultural products.",
    },
  ],
  education: [
    {
      school: "EST Fquih Ben Salah / Université Sultan Moulay Slimane",
      href: "https://estfbs.usms.ac.ma/",
      degree: "Attestation de Réussite / Licence Professionnelle: Biotechnologie Agroalimentaire et Qualité",
      logoUrl: "https://images.seeklogo.com/logo-png/42/1/usms-logo-png_seeklogo-424332.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Meeting-to-Deal",
      href: "https://github.com/ellsimohammed8-prog",
      dates: "2025 - Present",
      active: true,
      description:
        "Agency post-call system in Make: call summary, CRM sheet row, and a follow-up draft prepared for human approval. Nothing is ever auto-sent. Built by directing AI tools.",
      technologies: [
        "Make",
        "Google Sheets",
        "Gmail Drafts",
        "Human Approval",
      ],
      image: "/meeting-to-deal.jpg",
    },
    {
      title: "Auto Website Generator + Outreach",
      href: "https://github.com/ellsimohammed8-prog",
      dates: "2025 - Present",
      active: true,
      description:
        "n8n system: lead discovery, AI-assisted website generation, deployment, and outreach emails prepared as drafts for human approval. Flagship automation project, built by directing AI tools.",
      technologies: [
        "n8n",
        "Make",
        "Google Sheets",
        "Human Approval",
      ],
      image: "/auto-website-generator.jpg",
    },
    {
      title: "MapMyCode",
      href: "https://github.com/ellsimohammed8-prog/MapMyCode",
      dates: "2025 - Present",
      active: true,
      description:
        "Interactive code map for ordinary people: for each file, plain language - what it is, its role, and what happens if you change it. Fork of Understand-Anything, transformed for non-programmers.",
      technologies: [
        "AI-Assisted Build",
        "Open Source Fork",
        "Plain Language",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/MapMyCode",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mapmycode.jpg",
    },
    {
      title: "NovaPilot AI",
      href: "https://github.com/ellsimohammed8-prog/novapilot-ai",
      dates: "2024 - Present",
      active: true,
      description:
        "Meeting assistant for Windows: real-time audio transcription and meeting summaries. Built by directing AI tools, with human review of outputs. Meeting recording and transcription only.",
      technologies: [
        "Whisper",
        "Gemini",
        "AI-Assisted Build",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/novapilot-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/novapilot.jpg",
    },
    {
      title: "Cockpit-IA",
      href: "https://github.com/ellsimohammed8-prog/Cockpit-IA",
      dates: "2024 - Present",
      active: true,
      description:
        "AI-assisted sales automation system: follow-up, pipeline tracking and reporting, built by directing AI tools and verified before delivery.",
      technologies: [
        "Next.js 15",
        "FastAPI",
        "Supabase",
        "n8n",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/Cockpit-IA",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cockpit.jpg",
    },
    {
      title: "MG Diagnostics System (MGDS)",
      href: "https://github.com/ellsimohammed8-prog/MG-Diagnostics-System-Showcase",
      dates: "2024",
      active: true,
      description:
        "Showcase concept: a diagnostic workstation concept integrating sensor data and analysis dashboards. Concept demo, not a clinical product.",
      technologies: [
        "Computer Vision",
        "FastAPI",
        "Python",
        "Sensors",
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/MG-Diagnostics-System-Showcase",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mgds.jpg",
    },
    {
      title: "LuxeMode (ZARA Showcase)",
      href: "https://idyllic-selkie-dc610e.netlify.app/",
      dates: "2024",
      active: true,
      description:
        "High-End Luxury Fashion E-Commerce platform inspired by Zara. Features full-screen lookbook transitions, glassmorphic navigation, fluid responsive layouts, and interactive cart flows.",
      technologies: [
        "Next.js 15",
        "Tailwind CSS",
        "React",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://idyllic-selkie-dc610e.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/zara",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/luxemode.jpg",
    },
    {
      title: "Mystic Studio",
      href: "https://extraordinary-flan-7d625c.netlify.app/",
      dates: "2024",
      active: true,
      description:
        "Premium 3D Credit Card Skins Customizer. Interactive real-time 3D skin design platform with dynamic materials, neon glow shaders, and custom export workflows.",
      technologies: [
        "React",
        "Three.js",
        "Vite",
        "Tailwind CSS",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://extraordinary-flan-7d625c.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/mystric-card",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mystic.jpg",
    },
    {
      title: "Luxury Restaurant Showcase",
      href: "https://mohammedguejjim-hash.github.io/luxury-restaurant-demos/",
      dates: "2024",
      active: true,
      description:
        "High-end interactive restaurant showcase and table reservation system featuring luxury gastronomy presentation, menu discovery, and elegant dark/gold aesthetic.",
      technologies: [
        "UI/UX",
        "JavaScript",
        "Responsive Design",
        "GitHub Pages",
      ],
      links: [
        {
          type: "Website",
          href: "https://mohammedguejjim-hash.github.io/luxury-restaurant-demos/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohammedguejjim-hash/luxury-restaurant-demos",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/restaurant.jpg",
    },
    {
      title: "OvoMatrix IoT System",
      href: "https://github.com/ellsimohammed8-prog/OvoMatrix-v8.2-Showcase",
      dates: "2023 - 2024",
      active: true,
      description:
        "Smart poultry farm telemetry and automated monitoring ecosystem. Combines IoT microcontrollers, environmental sensors, and telemetry dashboards for climate and biosecurity management.",
      technologies: [
        "IoT",
        "C++",
        "Python",
        "Hardware Telemetry",
        "Dashboard",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/OvoMatrix-v8.2-Showcase",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ovomatrix.jpg",
    },
    {
      title: "Automation Services",
      image: "/automation-services.jpg",
      href: "https://ellsimohammed8-prog.github.io/automation-services/",
      dates: "2026",
      active: true,
      description:
        "My automation services site: Make, n8n and Zapier workflows, AI chatbots and automation for agencies and small businesses, with human approval before anything is sent.",
      technologies: [
        "Make",
        "n8n",
        "Zapier",
        "Workflow Automation",
      ],
      links: [
        {
          type: "Website",
          href: "https://ellsimohammed8-prog.github.io/automation-services/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/automation-services",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Cockpit IA Showcase",
      image: "/cockpit-ia-showcase.jpg",
      href: "https://ellsimohammed8-prog.github.io/cockpit-ia-showcase/",
      dates: "2026",
      active: true,
      description:
        "Showcase site for Cockpit IA: email-to-quote sales automation, RFQs in and validated quotes out. A concept demo, not a client product.",
      technologies: [
        "Sales Automation",
        "AI Automation",
        "CRM",
      ],
      links: [
        {
          type: "Website",
          href: "https://ellsimohammed8-prog.github.io/cockpit-ia-showcase/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/cockpit-ia-showcase",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Nour Rooftop Concept",
      image: "/nour-rooftop.jpg",
      href: "https://ellsimohammed8-prog.github.io/nour-rooftop-concept/",
      dates: "2026",
      active: true,
      description:
        "Luxury rooftop restaurant concept demo with fictional business content. A design concept, not a real restaurant.",
      technologies: [
        "UI/UX",
        "Responsive Design",
        "GitHub Pages",
      ],
      links: [
        {
          type: "Website",
          href: "https://ellsimohammed8-prog.github.io/nour-rooftop-concept/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/nour-rooftop-concept",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Marjana Concept",
      image: "/marjana.jpg",
      href: "https://ellsimohammed8-prog.github.io/marjana-concept/",
      dates: "2026",
      active: true,
      description:
        "Concept homepage for a rooftop restaurant in Marrakech, built as a sales demo. A concept demo, not a live client site.",
      technologies: [
        "UI/UX",
        "Responsive Design",
        "GitHub Pages",
      ],
      links: [
        {
          type: "Website",
          href: "https://ellsimohammed8-prog.github.io/marjana-concept/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/marjana-concept",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Visio Clara Concept",
      image: "/visio-clara.jpg",
      href: "https://ellsimohammed8-prog.github.io/visio-clara-concept/",
      dates: "2026",
      active: true,
      description:
        "Cinematic AI-video concept tribute with a scroll-driven nebula-to-iris experience. A concept demo.",
      technologies: [
        "UI/UX",
        "Animation",
        "GitHub Pages",
      ],
      links: [
        {
          type: "Website",
          href: "https://ellsimohammed8-prog.github.io/visio-clara-concept/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/visio-clara-concept",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "ClearQuote Insurance",
      image: "/clearquote.jpg",
      href: "https://ellsimohammed8-prog.github.io/clearquote-insurance/",
      dates: "2026",
      active: true,
      description:
        "Insurance comparison concept demo with a quote widget. A concept demo, not a real insurance broker.",
      technologies: [
        "UI/UX",
        "Comparison Website",
        "GitHub Pages",
      ],
      links: [
        {
          type: "Website",
          href: "https://ellsimohammed8-prog.github.io/clearquote-insurance/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/clearquote-insurance",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "NOVA Summit",
      image: "/nova-summit.jpg",
      href: "https://ellsimohammed8-prog.github.io/nova-summit/",
      dates: "2026",
      active: true,
      description:
        "Minimal single-page event landing page concept demo. Lightweight, fast and focused on one event.",
      technologies: [
        "Landing Page",
        "HTML/CSS",
        "GitHub Pages",
      ],
      links: [
        {
          type: "Website",
          href: "https://ellsimohammed8-prog.github.io/nova-summit/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/nova-summit",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "AquaShine Mobile Wash",
      image: "/aquashine.jpg",
      href: "https://ellsimohammed8-prog.github.io/aquashine-mobile-wash/",
      dates: "2026",
      active: true,
      description:
        "Premium mobile car wash concept demo website with AI-generated visuals and video. A concept demo.",
      technologies: [
        "UI/UX",
        "Service Website",
        "GitHub Pages",
      ],
      links: [
        {
          type: "Website",
          href: "https://ellsimohammed8-prog.github.io/aquashine-mobile-wash/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/aquashine-mobile-wash",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Aura Dental Studio",
      image: "/aura-dental.jpg",
      href: "https://ellsimohammed8-prog.github.io/aura-dental-studio/",
      dates: "2026",
      active: true,
      description:
        "Premium esthetic dentistry website template. A template demo, not a real clinic.",
      technologies: [
        "Clinic Website",
        "Template",
        "GitHub Pages",
      ],
      links: [
        {
          type: "Website",
          href: "https://ellsimohammed8-prog.github.io/aura-dental-studio/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/aura-dental-studio",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Vitalis Clinic",
      image: "/vitalis.jpg",
      href: "https://ellsimohammed8-prog.github.io/vitalis-clinic/",
      dates: "2026",
      active: true,
      description:
        "Clean medical website template. A template demo, not a real clinic.",
      technologies: [
        "Clinic Website",
        "Template",
        "GitHub Pages",
      ],
      links: [
        {
          type: "Website",
          href: "https://ellsimohammed8-prog.github.io/vitalis-clinic/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/vitalis-clinic",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "J.A.R.V.I.S. AI for Windows",
      image: "/jarvis.jpg",
      href: "https://github.com/ellsimohammed8-prog/jarvis",
      dates: "2026",
      active: true,
      description:
        "Desktop and voice assistant for Windows in Moroccan Darija and English, with PC control. Built by directing AI tools.",
      technologies: [
        "Voice Assistant",
        "Desktop Assistant",
        "Python",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/jarvis",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Food Additif",
      image: "/food-additif.jpg",
      href: "https://github.com/ellsimohammed8-prog/food-additif",
      dates: "2026",
      active: true,
      description:
        "Bilingual Arabic and English Progressive Web App to search, filter and inspect food additives, for food safety awareness.",
      technologies: [
        "PWA",
        "Food Safety",
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/food-additif",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "AMDM Digital Fortress Showcase",
      image: "/amdm.jpg",
      href: "https://github.com/ellsimohammed8-prog/AMDM-Digital-Fortress-Showcase",
      dates: "2026",
      active: true,
      description:
        "Showcase site for a digital platform for social impact and association management. The core codebase is a private client asset; this is the public showcase only.",
      technologies: [
        "Association Management",
        "Dashboard",
        "Showcase",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ellsimohammed8-prog/AMDM-Digital-Fortress-Showcase",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ] as Project[],
  hackathons: [
    {
      title: "AgroChallenge Regional Competition",
      dates: "March 2026",
      location: "EST Fquih Ben Salah, Morocco",
      description:
        "Competed in the regional innovation challenge with OvoMatrix: an intelligent IoT and computer-vision dashboard proposal for automated management, climate control, and biosecurity monitoring in smart poultry farms.",
      image: "https://images.seeklogo.com/logo-png/42/1/usms-logo-png_seeklogo-424332.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ellsimohammed8-prog/OvoMatrix-v8.2-Showcase",
        },
      ],
    },
  ],
} as const;
