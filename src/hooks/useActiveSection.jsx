import { useState, useEffect } from "react";

const NAV_IDS = ["hero", "about", "skills", "services", "portfolio", "experience", "blog", "contact"];

const useActiveSection = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 110) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
};

export default useActiveSection;