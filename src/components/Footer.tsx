"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { portfolioConfig } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070708] py-12 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-500 uppercase tracking-wider">
        <div className="flex items-center gap-3">
          <span className="text-white font-medium">{portfolioConfig.name}</span>
          <span>•</span>
          <span>Editorial, Motion & Color</span>
        </div>

        <div className="text-[11px]">
          © {new Date().getFullYear()} — All Visual Rights Reserved
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
