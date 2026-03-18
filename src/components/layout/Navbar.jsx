import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import useActiveSection from "../../hooks/useActiveSection";

const NAV_LINKS = [
  "about",
  "skills",
  "services",
  "portfolio",
  "experience",
  "contact",
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-[5%] transition-all duration-300
          ${
            scrolled ? "py-3 bg-bg/90 backdrop-blur-xl" : "py-5 bg-transparent"
          }`}
      >
        {/* Logo */}
        <button
          onClick={() => go("hero")}
          className="font-syne text-2xl font-extrabold bg-grad-1 bg-clip-text text-transparent border-none outline-none cursor-pointer"
        >
          KIB.
        </button>

        {/* Desktop Links */}
        <ul className="nav-desktop flex gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li
              key={link}
              className={`relative ${active === link ? "nav-active" : ""}`}
            >
              <button
                onClick={() => go(link)}
                className={`font-dm text-[.87rem] tracking-[.05em] capitalize bg-transparent border-none outline-none cursor-pointer transition-colors duration-300
                  ${active === link ? "text-cyan font-semibold" : "text-muted hover:text-cyan"}`}
              >
                {link}
              </button>
              <span className="nav-indicator" />
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => go("contact")}
            className="font-syne font-bold text-[.82rem] tracking-widest uppercase px-5 py-2 rounded-[3px] border border-cyan text-cyan bg-transparent transition-all duration-300 hover:bg-cyan hover:text-bg cursor-pointer"
          >
            Hire Me
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white bg-transparent border-none outline-none p-1"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bg/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => go(link)}
              className={`font-syne text-2xl font-bold capitalize bg-transparent border-none outline-none cursor-pointer
                ${active === link ? "text-cyan" : "text-white"}`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className="font-syne font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-[3px] border border-cyan text-cyan mt-4 bg-transparent cursor-pointer"
          >
            Hire Me
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
