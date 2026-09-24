"use client";

import React, { useState, useRef, useCallback } from "react";
import { ArrowLeftRight, Camera, SlidersHorizontal } from "lucide-react";
import { beforeAfterGrades } from "../data/portfolioData";

export default function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeGrade = beforeAfterGrades[activeIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="color-lab" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 block">
            [ 02 ] Color Science & Retouch
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Log vs. Master Grade
          </h2>
          <p className="text-sm text-neutral-400 mt-2 max-w-lg">
            Interact with the scrubber to inspect tonal curve manipulation, skin isolation, and film print emulation.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap gap-1 p-1 bg-surface rounded-full border border-white/[0.08]">
          {beforeAfterGrades.map((grade, idx) => (
            <button
              key={grade.id}
              onClick={() => {
                setActiveIndex(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                activeIndex === idx
                  ? "bg-white text-black font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Grade {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Grading Suite Monitor Frame */}
      <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#09090c] shadow-2xl">
        {/* Top Monitor Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-white/[0.08] bg-[#07070a] text-[11px] font-mono uppercase text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">{activeGrade.title}</span>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <span className="text-neutral-500 hidden sm:inline">{activeGrade.camera}</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-500">
            <span>{activeGrade.colorSpace}</span>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <span className="text-neutral-400 hidden sm:inline">{activeGrade.lut}</span>
          </div>
        </div>

        {/* Interactive Split Viewer */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[360px] sm:h-[500px] md:h-[640px] select-none cursor-ew-resize overflow-hidden bg-black"
        >
          {/* AFTER Image (Graded) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={activeGrade.afterImage}
              alt="Graded Result"
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* Graded Label */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white uppercase tracking-wider">
              {activeGrade.afterLabel}
            </div>
          </div>

          {/* BEFORE Image (RAW Log - Clipped) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="relative w-full h-full min-w-full">
              <img
                src={activeGrade.beforeImage}
                alt="Original Log Capture"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current
                    ? `${containerRef.current.clientWidth}px`
                    : "100%",
                }}
              />
              {/* RAW Label */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                {activeGrade.beforeLabel}
              </div>
            </div>
          </div>

          {/* Vertical Scrubber Hairline */}
          <div
            className="absolute top-0 bottom-0 w-[1px] bg-white pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Drag Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
              <ArrowLeftRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Bottom Technical Strip */}
        <div className="px-5 py-4 bg-[#07070a] border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-500" />
            <span>Workflow: Primary Wheel Isolation • Tone Curve Contrast • Film Grain Print</span>
          </div>
          <div className="text-[11px] text-neutral-500">
            [DRAG HORIZONTALLY TO REVEAL]
          </div>
        </div>
      </div>
    </section>
  );
}
