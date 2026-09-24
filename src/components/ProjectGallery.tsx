"use client";

import React, { useState } from "react";
import { Play, Sparkles, Film, Palette, Image as ImageIcon, ExternalLink, Clock } from "lucide-react";
import { projects } from "../data/portfolioData";
import { Project, ProjectCategory } from "../types";
import ProjectModal from "./ProjectModal";

const categories: { label: string; value: ProjectCategory; icon: React.ReactNode }[] = [
  { label: "All Works", value: "all", icon: <Sparkles className="w-3.5 h-3.5" /> },
  { label: "Video Editing", value: "video-editing", icon: <Film className="w-3.5 h-3.5" /> },
  { label: "Motion Graphics", value: "motion-graphics", icon: <Sparkles className="w-3.5 h-3.5" /> },
  { label: "Color Grading", value: "color-grading", icon: <Palette className="w-3.5 h-3.5" /> },
  { label: "Photo Retouching", value: "photo-retouching", icon: <ImageIcon className="w-3.5 h-3.5" /> },
];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Film className="w-3.5 h-3.5" />
            Curated Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected Commercial & Creative Works
          </h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-xl">
            A breakdown of high-impact video edits, 3D motion simulations, and editorial color grades.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#0d0f17] border border-border rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat.value
                  ? "bg-accent-cyan text-black font-bold shadow-md shadow-cyan-500/20"
                  : "text-neutral-400 hover:text-white hover:bg-surface"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModalProject(project)}
            className="group relative bg-[#0e1017] rounded-2xl overflow-hidden border border-border hover:border-neutral-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 cursor-pointer flex flex-col"
          >
            {/* Thumbnail Box */}
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play Badge or Expand Badge */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                <div className="w-14 h-14 rounded-full bg-accent-cyan text-black flex items-center justify-center shadow-lg shadow-cyan-500/50 transform group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-black ml-0.5" />
                </div>
              </div>

              {/* Category Pill */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-300 font-semibold uppercase">
                {project.categoryLabel}
              </div>

              {/* Duration Pill if applicable */}
              {project.duration && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono text-neutral-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-accent-cyan" />
                  {project.duration}
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-accent-cyan transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Software Tags */}
              <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-surface border border-border text-[10px] font-medium text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.client && (
                  <span className="text-[11px] font-mono text-neutral-500">
                    {project.client}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
