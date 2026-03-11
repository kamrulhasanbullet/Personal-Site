import { Coffee } from "lucide-react";

const FOOTER_LINKS = [
  ["Home",      "hero"],
  ["About",     "about"],
  ["Skills",    "skills"],
  ["Services",  "services"],
  ["Portfolio", "portfolio"],
  ["Contact",   "contact"],
];

const Footer = () => (
  <footer className="bg-bg-2 border-t border-white/[.07] py-12 px-[5%] text-center">
    {/* Logo */}
    <div className="font-syne font-extrabold text-3xl bg-grad-1 bg-clip-text text-transparent inline-block mb-4">
      KIB.
    </div>

    {/* Links */}
    <div className="flex justify-center gap-8 flex-wrap mb-6">
      {FOOTER_LINKS.map(([label, id]) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
          className="font-dm text-muted text-[.83rem] bg-transparent border-none cursor-pointer transition-colors duration-300 hover:text-cyan"
        >
          {label}
        </button>
      ))}
    </div>

    {/* Copyright */}
    <p className="text-muted text-[.78rem] font-dm flex items-center justify-center gap-1.5">
      © 2026 Your Name. Built with and lots of
      <Coffee size={13} className="text-orange inline" />
      — All rights reserved.
    </p>
  </footer>
);

export default Footer;