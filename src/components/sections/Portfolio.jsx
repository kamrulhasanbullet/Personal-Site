"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import projects from "../../data/projects";

// ─── Description Modal ─────────────────────────────────────
const DescriptionModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  const {
    title,
    desc,
    tag,
    tech,
    link,
    frontendGithub,
    backendGithub,
    codeGithub,
  } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0e0e14] border border-white/10 rounded-2xl p-8 max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-white/30 hover:text-white hover:bg-white/10"
        >
          <X size={18} />
        </button>

        {/* Tag */}
        <p className="text-cyan text-xs uppercase mb-2">{tag}</p>

        {/* Title */}
        <h3 className="text-white text-xl font-bold mb-4">{title}</h3>

        {/* Desc */}
        <p className="text-gray-400 text-sm mb-6">{desc}</p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 bg-white/10 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 text-xs bg-cyan-500/20 text-cyan-400 rounded"
            >
              <ExternalLink size={14} /> Live
            </a>
          )}

          {codeGithub && (
            <a
              href={codeGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 text-xs bg-white/10 rounded"
            >
              <Github size={14} /> Code
            </a>
          )}

          {frontendGithub && (
            <a
              href={frontendGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 text-xs bg-white/10 rounded"
            >
              <Github size={14} /> Frontend
            </a>
          )}

          {backendGithub && (
            <a
              href={backendGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 text-xs bg-white/10 rounded"
            >
              <Github size={14} /> Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Card ─────────────────────────────────────
const ProjectCard = ({ project, onReadMore }) => {
  const {
    Icon,
    tag,
    title,
    desc,
    tech,
    grad,
    link,
    frontendGithub,
    backendGithub,
    codeGithub,
  } = project;

  return (
    <div className="group border border-white/10 rounded-xl overflow-hidden flex flex-col md:flex-row hover:border-cyan-400 transition">
      {/* Left */}
      <div className="relative md:w-1/3 flex items-center justify-center min-h-37.5">
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: grad }}
        />
        <Icon className="text-white/30 group-hover:text-cyan-400" size={40} />
      </div>

      {/* Right */}
      <div className="p-6 flex-1">
        <p className="text-xs text-cyan-400 mb-2">{tag}</p>

        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>

        <p className="text-gray-400 text-sm line-clamp-2 mb-2">{desc}</p>

        <button
          onClick={() => onReadMore(project)}
          className="text-xs text-cyan-400 underline mb-3 cursor-pointer"
        >
          See more →
        </button>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tech.map((t) => (
            <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 flex-wrap">
          {link && (
            <a href={link} target="_blank" className="text-xs flex gap-1">
              <ExternalLink size={12} /> Live
            </a>
          )}
          {codeGithub && (
            <a href={codeGithub} target="_blank" className="text-xs flex gap-1">
              <Github size={12} /> Code
            </a>
          )}
          {frontendGithub && (
            <a
              href={frontendGithub}
              target="_blank"
              className="text-xs flex gap-1"
            >
              <Github size={12} /> Frontend
            </a>
          )}
          {backendGithub && (
            <a
              href={backendGithub}
              target="_blank"
              className="text-xs flex gap-1"
            >
              <Github size={12} /> Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Main ─────────────────────────────────────
const Portfolio = () => {
  const [modalProject, setModalProject] = useState(null);

  return (
    <>
      <section id="portfolio" className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Projects"
            title="My Work"
            desc="Real-world full-stack projects"
            center
          />

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {projects.map((p) => (
              <ProjectCard
                key={p.title}
                project={p}
                onReadMore={setModalProject}
              />
            ))}
          </div>
        </div>
      </section>

      <DescriptionModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </>
  );
};

export default Portfolio;
