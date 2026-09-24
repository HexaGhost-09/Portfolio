"use client";

import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-5xl bg-[#0a0a0d] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl z-10 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#07070a]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              [{project.id}]
            </span>
            <h3 className="text-base font-medium text-white">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
              [ESC TO CLOSE]
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          {project.videoUrl ? (
            <iframe
              src={project.videoUrl}
              title={project.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Project Technical Breakdown */}
        <div className="p-6 bg-[#07070a] border-t border-white/[0.08] overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-5 mb-5 border-b border-white/[0.06] text-xs font-mono">
            <div>
              <span className="text-neutral-500 block mb-1 uppercase tracking-widest text-[10px]">Client / Brand</span>
              <span className="text-white">{project.client}</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1 uppercase tracking-widest text-[10px]">Role</span>
              <span className="text-white">{project.role}</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1 uppercase tracking-widest text-[10px]">Aspect & FPS</span>
              <span className="text-white">{project.aspect} • 24fps</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1 uppercase tracking-widest text-[10px]">Software Pipeline</span>
              <span className="text-white">{project.tools.join(", ")}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
