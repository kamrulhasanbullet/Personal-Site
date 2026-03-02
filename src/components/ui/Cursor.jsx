import { useEffect, useRef } from "react";

const Cursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mouse   = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };

    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.13;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top  = ring.current.y + "px";
      }
      requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    tick();
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed w-10 h-10 border border-cyan/40 rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-300"
      />
    </>
  );
};

export default Cursor;


