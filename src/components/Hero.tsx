"use client";

import React from "react";
import { Play, Sparkles, ArrowRight, Video, Flame, Film } from "lucide-react";
import { creatorInfo } from "../data/portfolioData";

interface HeroProps {
  onOpenShowreel: () => void;
}

export default function Hero({ onOpenShowreel }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grain">
      {/* Cinematic Ambient Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-purple-600/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/80 border border-border backdrop-blur-md mb-8 shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
          </span>
          <span className="text-xs font-medium text-neutral-300 tracking-wider uppercase font-mono">
            {creatorInfo.location} • Taking On New Projects
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Turning Raw Footage Into <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan via-white to-amber-400">
            Cinematic Art & Motion
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-neutral-400 mb-10 leading-relaxed">
          Hi, I&apos;m <span className="text-white font-semibold">{creatorInfo.name}</span>. I craft high-velocity video edits, 
          kinetic After Effects motion sequences, and editorial color grading in Photoshop & Lightroom that command attention.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Play Showreel Button */}
          <button
            onClick={onOpenShowreel}
            className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-accent-cyan hover:bg-cyan-300 transition-all shadow-[0_0_30px_rgba(0,240,255,0.4)] w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Play className="w-4 h-4 fill-black transition-transform group-hover:scale-110" />
              Watch 2026 Showreel
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          {/* Explore Projects Button */}
          <a
            href="#work"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-surface hover:bg-surfaceHover border border-border hover:border-neutral-500 transition-all w-full sm:w-auto"
          >
            Explore Portfolio
            <ArrowRight className="w-4 h-4 text-neutral-400" />
          </a>
        </div>

        {/* Featured Badges */}
        <div className="mt-14 pt-8 border-t border-border/60 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-neutral-400 uppercase tracking-widest">
          <span className="flex items-center gap-2 hover:text-white transition-colors">
            <Film className="w-4 h-4 text-purple-400" />
            Premiere Pro
          </span>
          <span className="flex items-center gap-2 hover:text-white transition-colors">
            <Sparkles className="w-4 h-4 text-blue-400" />
            After Effects
          </span>
          <span className="flex items-center gap-2 hover:text-white transition-colors">
            <Flame className="w-4 h-4 text-cyan-400" />
            Photoshop Retouch
          </span>
          <span className="flex items-center gap-2 hover:text-white transition-colors">
            <Video className="w-4 h-4 text-amber-400" />
            Lightroom Color Lab
          </span>
        </div>
      </div>
    </section>
  );
}
