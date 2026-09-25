import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";

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
  url: "https://github.com/ellsimohammed8-prog",
  location: "Morocco",
  locationLink: "https://www.google.com/maps/place/Morocco",
  description:
    "Full-Stack AI Engineer & Automation Architect.",
  summary:
    "Specialized in building intelligent ecosystems, multimodal AI workstations, and scalable automation workflows. Experienced in developing real-time AI copilots, autonomous multi-agent orchestration, and bridging IoT telemetry with modern cloud web applications.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "FastAPI" },
    { name: "AI Agent Orchestration" },
    { name: "n8n & Automations" },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL & Supabase", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Computer Vision" },
    { name: "IoT & Embedded Systems", icon: Csharp },
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
      title: "Full-Stack AI Engineer & Automation Architect",
      logoUrl: "/me.png",
      start: "2022",
      end: "Present",
      description:
        "Architecting end-to-end intelligent AI applications, real-time meeting/interview copilots, and multi-agent automation systems. Designing autonomous workflows with n8n and LLMs (Claude, Gemini), and building high-performance web platforms with Next.js, FastAPI, and Supabase.",
    },
    {
      company: "Al Karama & Agro-Industries",
      href: "https://estfbs.usms.ac.ma/",
      badges: [],
      location: "Beni Mellal, Morocco",
      title: "Quality & Process Automation Specialist",
      logoUrl: "https://images.seeklogo.com/logo-png/42/1/usms-logo-png_seeklogo-424332.png",
      start: "2024",
      end: "2026",
      description:
        "Applied quality engineering, formulation control, hazard analysis (HACCP), and introduced digital tracking & smart process automation for food and bioprocess production lines.",
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
      title: "NovaPilot AI",
      href: "https://github.com/ellsimohammed8-prog/novapilot-ai",
      dates: "2024 - Present",
      active: true,
      description:
        "The Stealth Real-Time Meeting & Interview Copilot. Built with DirectX low-latency overlay, real-time voice streaming using Whisper, and automated situational intelligence powered by Gemini models.",
      technologies: [
        "DirectX",
        "Whisper",
        "Gemini",
        "FastAPI",
        "Python",
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
        "Central AI Operations & Autonomous Agent Platform. Centralizes prompt engineering, automation nodes, telemetry monitoring, and multi-model dispatching into a sleek glassmorphic interface.",
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
        "Multimodal AI Diagnostic Workstation. Integrates laboratory sensor telemetry, computer vision analysis, and diagnostic monitoring into a unified real-time clinical workstation.",
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
