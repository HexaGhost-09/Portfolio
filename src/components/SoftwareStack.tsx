"use client";

import React from "react";
import { softwareSuite } from "../data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function SoftwareStack() {
  return (
    <section id="tools" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 block">
            [ 03 ] Technical Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Production & Finishing Pipeline
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-xs">
          Industry-standard NLEs, compositing suites, and color engines.
        </p>
      </div>

      <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {softwareSuite.map((tool, idx) => (
          <div
            key={tool.name}
            className="group py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-white/[0.02]"
          >
            <div className="flex items-center gap-6 md:w-1/3">
              <span className="text-xs font-mono text-neutral-600">0{idx + 1}</span>
              <h3 className="text-xl sm:text-2xl font-medium text-white group-hover:text-neutral-300 transition-colors">
                {tool.name}
              </h3>
            </div>

            <div className="md:w-1/4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 px-2.5 py-1 rounded bg-surfaceElevated border border-white/[0.06]">
                {tool.role}
              </span>
            </div>

            <div className="md:w-1/3">
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                {tool.capabilities}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
