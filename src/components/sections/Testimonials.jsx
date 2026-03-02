import { Star } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import testimonials from "../../data/testimonials";

const TestimonialCard = ({ text, name, role, Icon }) => (
  <div
    className="reveal min-w-82.5 bg-white/3] border border-white/[.07] rounded-md p-8 shrink-0 transition-all duration-300 hover:border-cyan/30 hover:-translate-y-1 cursor-default"
  >
    {/* Stars */}
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className="text-orange fill-orange" />
      ))}
    </div>

    {/* Quote mark */}
    <p className="text-4xl text-cyan/20 font-serif leading-none mb-1">"</p>

    {/* Text */}
    <p className="text-muted text-[.88rem] leading-relaxed mb-6">{text}</p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-full bg-white/5 border border-white/[.07] flex items-center justify-center">
        <Icon size={18} className="text-cyan/50" />
      </div>
      <div>
        <div className="font-syne font-bold text-white text-[.92rem]">{name}</div>
        <div className="text-muted text-[.73rem]">{role}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section id="testimonials" className="py-28 px-[5%] bg-bg">
    <SectionHeader tag="Client Reviews" title="What Clients Say" center />

    <div
      className="flex gap-5 overflow-x-auto pb-4 max-w-275 mx-auto"
      style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,.05) transparent" }}
    >
      {testimonials.map((item, i) => (
        <div key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
          <TestimonialCard {...item} />
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;