"use client";

import React, { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { projectsList, Project } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

const filterTabs = [
  { label: "All Works", value: "all" },
  { label: "Commercial", value: "commercial" },
  { label: "Motion & 3D", value: "motion" },
  { label: "Color Grading", value: "color-grading" },
  { label: "Editorial", value: "editorial" },
];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const displayedProjects = activeFilter === "all"
    ? projectsList
    : projectsList.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 block">
            [ 01 ] Selected Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Curated Film & Motion Works
          </h2>
        </div>

        {/* Minimal Filters */}
        <div className="flex flex-wrap gap-1 p-1 bg-surface rounded-full border border-white/[0.08]">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                activeFilter === tab.value
                  ? "bg-white text-black font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group cursor-pointer flex flex-col"
          >
            {/* Visual Thumbnail Box */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#0c0c10] border border-white/[0.08] mb-5 transition-all duration-300 group-hover:border-white/25">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
              />

              {/* Minimal Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Play Badge on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  {project.categoryLabel}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  {project.duration}
                </span>
              </div>

              {/* Bottom Specs */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{project.aspect}</span>
                <span>{project.year}</span>
              </div>
            </div>

            {/* Project Metadata */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-white group-hover:text-neutral-300 transition-colors flex items-center gap-2">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
                </h3>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                <span>{project.client}</span>
                <span className="text-neutral-700">•</span>
                <span className="text-neutral-500">{project.role}</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed mt-1">
                {project.description}
              </p>

              {/* Tools row */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 px-2 py-0.5 rounded bg-surfaceElevated border border-white/[0.06]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
