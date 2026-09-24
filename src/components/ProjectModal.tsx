"use client";

import React, { useEffect } from "react";
import { X, Play, Tag, ExternalLink } from "lucide-react";
import { Project } from "../types";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-[#11131a] rounded-2xl overflow-hidden border border-border shadow-2xl z-10 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-[#0d0f17]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-accent-cyan">
              {project.categoryLabel}
            </span>
            <h3 className="text-lg font-bold text-white tracking-wide">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-surface border border-transparent hover:border-border transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video or Image Viewport */}
        <div className="relative w-full bg-black flex-1 min-h-[300px] max-h-[550px] overflow-hidden flex items-center justify-center">
          {project.videoUrl ? (
            <iframe
              src={project.videoUrl}
              title={project.title}
              className="w-full h-full aspect-video border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Footer info */}
        <div className="p-6 bg-[#0d0f17] border-t border-border flex flex-col gap-4">
          <p className="text-sm text-neutral-300 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border/40">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-neutral-400 font-mono">Tools:</span>
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs text-neutral-200"
                >
                  {tool}
                </span>
              ))}
            </div>

            {project.client && (
              <div className="text-xs text-neutral-400 font-mono">
                Client / Brand: <span className="text-white font-semibold">{project.client}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
