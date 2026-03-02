import { Globe, Code2, Server, Layers, Database, Figma, Settings, GitBranch } from "lucide-react";

const skills = [
  { name: "React / Next.js",      pct: 92, Icon: Globe,      color: "cyan"   },
  { name: "TypeScript",           pct: 85, Icon: Code2,      color: "orange" },
  { name: "Node.js / Express",    pct: 88, Icon: Server,     color: "cyan"   },
  { name: "CSS / Tailwind",       pct: 95, Icon: Layers,     color: "orange" },
  { name: "MongoDB / PostgreSQL", pct: 80, Icon: Database,   color: "cyan"   },
  { name: "UI/UX Design (Figma)", pct: 78, Icon: Figma,      color: "orange" },
  { name: "Docker / CI/CD",       pct: 72, Icon: Settings,   color: "cyan"   },
  { name: "GraphQL / REST API",   pct: 87, Icon: GitBranch,  color: "orange" },
];

export default skills;