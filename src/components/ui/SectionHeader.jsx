import Tag from "./Tag";
import LineAccent from "./LineAccent";

const SectionHeader = ({ tag, title, desc, center = false }) => (
  <div className={`reveal mb-14 ${center ? "text-center" : ""}`}>
    <Tag>{tag}</Tag>
    <h2 className="font-syne font-bold text-white tracking-tight leading-[1.1]"
        style={{ fontSize: "clamp(2rem,4vw,2.8rem)" }}>
      {title}
    </h2>
    <LineAccent center={center} />
    {desc && (
      <p className={`text-muted leading-relaxed text-[.95rem] max-w-122.5 ${center ? "mx-auto" : ""}`}>
        {desc}
      </p>
    )}
  </div>
);

export default SectionHeader;