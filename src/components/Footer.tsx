"use client";

import React from "react";
import { Film, Heart, ArrowUp } from "lucide-react";
import { creatorInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/80 bg-[#07080c] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center">
            <Film className="w-4 h-4 text-accent-cyan" />
          </div>
          <div>
            <span className="text-sm font-bold text-white font-mono tracking-wider">
              {creatorInfo.name}
            </span>
            <span className="text-xs text-neutral-500 block">
              © {new Date().getFullYear()} • All Visual Rights Reserved
            </span>
          </div>
        </div>

        <div className="text-xs text-neutral-400 text-center">
          Built with Next.js & Tailwind CSS • Powered by After Effects & Premiere Pro
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface border border-border text-xs text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
