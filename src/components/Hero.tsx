"use client";

import React from "react";
import { Play, ArrowDownRight, Globe } from "lucide-react";
import { portfolioConfig } from "../data/portfolioData";

interface HeroProps {
  onOpenReel: () => void;
}

export default function Hero({ onOpenReel }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-5 sm:px-8 max-w-7xl mx-auto film-grain">
      {/* Top Meta Line */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/[0.08] text-xs font-mono uppercase tracking-wider text-neutral-400">
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-neutral-500" />
          <span>{portfolioConfig.location}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{portfolioConfig.availability}</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
        <div className="lg:col-span-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.95]">
            Rhythm. Motion. <br />
            <span className="text-neutral-500">Visual Precision.</span>
          </h1>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-end">
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md">
            {portfolioConfig.bio}
          </p>
        </div>
      </div>

      {/* Hero Showreel Showcase Banner */}
      <div
        onClick={onOpenReel}
        className="group relative w-full aspect-[21/9] min-h-[300px] sm:min-h-[440px] rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c0c10] cursor-pointer shadow-2xl transition-all duration-500 hover:border-white/30"
      >
        {/* Background Visual Frame */}
        <img
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2000&q=85"
          alt="Showreel Preview"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-70 group-hover:opacity-85"
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

        {/* Center Play Pill */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-3.5 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono uppercase tracking-widest transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:text-black shadow-2xl">
            <Play className="w-4 h-4 fill-current" />
            <span>Play Official Showreel</span>
          </div>
        </div>

        {/* Reel Bottom Meta */}
        <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">Reel 2026</span>
            <span className="text-neutral-600">•</span>
            <span>Commercials / Motion / Grade</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-neutral-500">
            <span>[ 4K • 24 FPS • SOUND DESIGN ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
