"use client";

import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { portfolioConfig } from "../data/portfolioData";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-6xl bg-[#09090c] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl z-10 flex flex-col">
        {/* Screening Room Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#07070a]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white">
              {portfolioConfig.name} — Showreel (2026)
            </span>
            <span className="text-neutral-600 hidden sm:inline">•</span>
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
              Selected Commercial & Motion Work
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
              [ESC TO CLOSE]
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Screen Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={portfolioConfig.showreelUrl}
            title="Official Showreel"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Bottom Specs Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-3.5 bg-[#07070a] border-t border-white/[0.08] text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-4">
            <span>Role: Editing / Motion / Grading</span>
            <span className="text-neutral-600">•</span>
            <span>Audio: Custom Sound Design Mix</span>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="text-white hover:underline text-xs tracking-wider uppercase font-medium"
          >
            Inquire for Projects →
          </a>
        </div>
      </div>
    </div>
  );
}
