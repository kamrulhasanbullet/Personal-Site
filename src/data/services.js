import { Monitor, Server, Palette, Layers, Zap, Users } from "lucide-react";

const services = [
  {
    Icon:  Monitor,
    title: "Frontend Development",
    desc:  "Pixel-perfect, performant UIs using React, Next.js, modern CSS. Mobile-first, accessible, blazing fast.",
    price: "Starting $500",
    color: "cyan",
  },
  {
    Icon:  Server,
    title: "Backend Development",
    desc:  "Scalable REST/GraphQL APIs, database architecture, authentication, and cloud deployment with Node.js.",
    price: "Starting $700",
    color: "orange",
  },
  {
    Icon:  Palette,
    title: "UI/UX Design",
    desc:  "Clean, modern interface design in Figma. User research, wireframing, prototyping, and design systems.",
    price: "Starting $400",
    color: "purple",
  },
  {
    Icon:  Layers,
    title: "Full-Stack Web Apps",
    desc:  "Complete web app development from architecture to deployment. SaaS, dashboards, e-commerce.",
    price: "Starting $1,200",
    color: "cyan",
  },
  {
    Icon:  Zap,
    title: "Performance Optimization",
    desc:  "Core Web Vitals, code splitting, lazy loading, caching, SEO improvements for existing apps.",
    price: "Starting $300",
    color: "orange",
  },
  {
    Icon:  Users,
    title: "Technical Consulting",
    desc:  "Tech stack advice, code reviews, architecture planning, and mentoring for teams and startups.",
    price: "$75 / hour",
    color: "purple",
  },
];

export default services;