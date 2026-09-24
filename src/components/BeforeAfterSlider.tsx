"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sliders, Sparkles, Layers, ArrowLeftRight } from "lucide-react";
import { beforeAfterPresets } from "../data/portfolioData";

export default function BeforeAfterSlider() {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = beforeAfterPresets[selectedPresetIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
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
    <section id="before-after" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5" />
            Interactive Color & Retouching Lab
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Before & After Grading
          </h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-xl">
            Drag the slider horizontally to inspect RAW log capture vs final color-graded & skin-retouched output.
          </p>
        </div>

        {/* Preset Selector Buttons */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#0d0f17] border border-border rounded-xl">
          {beforeAfterPresets.map((preset, idx) => (
            <button
              key={preset.id}
              onClick={() => {
                setSelectedPresetIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedPresetIndex === idx
                  ? "bg-accent-cyan text-black font-bold shadow-lg shadow-cyan-500/25"
                  : "text-neutral-400 hover:text-white hover:bg-surface"
              }`}
            >
              {preset.title.split(" ")[0]} Style
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Slider Component */}
      <div className="relative rounded-2xl overflow-hidden border border-border bg-[#0d0f17] shadow-2xl">
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[380px] sm:h-[500px] md:h-[620px] select-none cursor-ew-resize overflow-hidden"
        >
          {/* AFTER Image (Full Layer at back) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={activeItem.afterImage}
              alt="Graded Result"
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* Graded Tag */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-emerald-400 font-semibold tracking-wide">
              {activeItem.afterLabel}
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay layer) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full min-w-full">
              <img
                src={activeItem.beforeImage}
                alt="Original RAW"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current
                    ? `${containerRef.current.clientWidth}px`
                    : "100%",
                }}
              />
              {/* RAW Tag */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-amber-400 font-semibold tracking-wide">
                {activeItem.beforeLabel}
              </div>
            </div>
          </div>

          {/* Divider Handle Bar */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-accent-cyan shadow-[0_0_15px_#00f0ff] pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Draggable Knob */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0d0f17] border-2 border-accent-cyan shadow-xl flex items-center justify-center text-accent-cyan">
              <ArrowLeftRight className="w-4 h-4 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Info Strip Below Slider */}
        <div className="p-4 sm:p-6 bg-[#090a0f] border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              {activeItem.title}
            </h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              {activeItem.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400 font-mono flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-neutral-500" />
              Pipeline:
            </span>
            <div className="flex gap-1.5">
              {activeItem.softwareUsed.map((sw) => (
                <span
                  key={sw}
                  className="px-2.5 py-1 rounded-md bg-surface border border-border text-[11px] text-neutral-300 font-medium"
                >
                  {sw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
