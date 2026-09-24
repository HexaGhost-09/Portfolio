"use client";

import React from "react";
import { Cpu, CheckCircle2, Film, Sparkles, Image as ImageIcon, SunMedium, Palette } from "lucide-react";
import { softwareTools } from "../data/portfolioData";

export default function SoftwareStack() {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case "Film":
        return <Film className="w-6 h-6 text-purple-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-blue-400" />;
      case "Image":
        return <ImageIcon className="w-6 h-6 text-cyan-400" />;
      case "SunMedium":
        return <SunMedium className="w-6 h-6 text-amber-400" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-red-400" />;
      default:
        return <Cpu className="w-6 h-6 text-accent-cyan" />;
    }
  };

  return (
    <section id="software" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5" />
          Production Pipeline
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Mastered Creative Software & Workflow
        </h2>
        <p className="text-neutral-400 mt-2 text-sm sm:text-base">
          From fast timeline assembly to micro-skin retouching and complex 3D particle motion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {softwareTools.map((tool) => (
          <div
            key={tool.name}
            className="group relative bg-[#0d0f17] rounded-2xl p-6 border border-border hover:border-neutral-500 transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient Back Glow */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tool.glowColor} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-surface border border-border">
                  {getToolIcon(tool.iconName)}
                </div>
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider px-2 py-0.5 rounded bg-surface border border-border/80">
                  {tool.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                {tool.description}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-border/60">
              {tool.highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
