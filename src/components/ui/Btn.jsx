import { useState } from "react";

const Btn = ({ children, primary = false, onClick, full = false, icon: Icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        font-syne font-bold text-[.87rem] tracking-[.06em] uppercase
        inline-flex items-center gap-1.5 justify-center
        px-8 py-3 rounded-[3px] cursor-pointer transition-all duration-300
        ${full ? "w-full" : "w-fit"}
        ${primary
          ? "bg-grad-1 text-bg border-none hover:shadow-[0_10px_28px_rgba(0,229,255,.28)] hover:-translate-y-0.5"
          : `bg-transparent border hover:-translate-y-0.5
             ${hovered ? "border-cyan text-cyan" : "border-white/10 text-[#e8edf5]"}`
        }
      `}
    >
      {children}
      {Icon && <Icon size={14} />}
    </button>
  );
};

export default Btn;