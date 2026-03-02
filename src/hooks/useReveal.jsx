import { useEffect } from "react";

const useReveal = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 }
    );

    const els = document.querySelectorAll(".reveal, .reveal-l, .reveal-r");
    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  });
};

export default useReveal;