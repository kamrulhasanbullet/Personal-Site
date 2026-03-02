import { Building2 } from "lucide-react";

const Timeline = ({ items }) => (
  <div className="relative pl-6">
    {/* Vertical line */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/8" />

    {items.map((item, i) => (
      <div key={i} className="pb-10 relative">
        {/* Dot */}
        <div className="absolute -left-[1.55rem] top-1 w-3 h-3 rounded-full bg-cyan border-2 border-bg-2" />

        <div className="font-syne font-bold text-[.72rem] text-orange uppercase tracking-widest mb-1">
          {item.date}
        </div>
        <div className="font-syne font-bold text-white text-[.98rem] mb-0.5">
          {item.role}
        </div>
        <div className="flex items-center gap-1.5 text-muted text-[.82rem] mb-2">
          <Building2 size={11} />
          {item.place}
        </div>
        <div className="text-muted text-[.83rem] leading-relaxed">
          {item.desc}
        </div>
      </div>
    ))}
  </div>
);

export default Timeline;