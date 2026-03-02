import { useState, useEffect } from "react";

const useCounter = (target, triggered) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    let current = 0;
    const increment = target / 60;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, 28);

    return () => clearInterval(timer);
  }, [triggered, target]);

  return value;
};

export default useCounter;