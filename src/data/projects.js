import { Globe, Award } from "lucide-react";

const projects = [
  {
    Icon: Globe,
    tag: "Full-Stack",
    title: "Club Management SaaS — ClubNest",
    desc: "All-in-one platform for angling clubs featuring automated memberships, Stripe-powered ticketing, and SEO-optimized website builder.",
    tech: [
      "React.js",
      "Firebase",
      "Express",
      "Node.Js",
      "Stripe",
      "MongoDB",
      "Tailwind",
      "Framer Motion",
      "Lucide Icons",
    ],
    cat: "Full-Stack",
    grad: "linear-gradient(135deg,#00e5ff,#7c3aed)",
    link: "https://clubnest.netlify.app/",
  },
  {
    Icon: Award,
    tag: "Full-Stack",
    title: "Career Tracking System — CareerPilot",
    desc: "Smart job application tracker with AI-driven resume optimization, Kanban-style workflow, and real-time performance analytics.",
    tech: [
      "Next.js",
      "MongoDB",
      "NextAuth.js",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons",
    ],
    cat: "Full-Stack",
    grad: "linear-gradient(135deg,#f59e0b,#ef4444)",
    link: "https://career-pilot-nu.vercel.app/",
  },
];

export const FILTERS = ["All", "Frontend", "Full-Stack", "UI/UX"];

export default projects;
