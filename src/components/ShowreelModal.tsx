"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Film } from "lucide-react";
import { creatorInfo } from "../data/portfolioData";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-5xl bg-[#11131a] rounded-2xl overflow-hidden border border-border shadow-[0_0_80px_rgba(0,0,0,0.8)] z-10">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-[#0d0f17]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                Rasel — Official Showreel
              </h3>
              <p className="text-xs text-neutral-400">
                Motion Graphics, Commercial Cuts & Color Science
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-surface border border-transparent hover:border-border transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Embed Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={creatorInfo.showreelUrl}
            title="Rasel Video Showreel"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-[#0d0f17] border-t border-border">
          <div className="text-xs text-neutral-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Available for new client edits & motion design contracts
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-black bg-accent-cyan rounded-lg hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
            >
              Book Rasel for a Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
