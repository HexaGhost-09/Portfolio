"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioConfig } from "../data/portfolioData";

interface NavbarProps {
  onOpenReel: () => void;
}

export default function Navbar({ onOpenReel }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070708]/80 backdrop-blur-xl border-b border-white/[0.06] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo / Moniker */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-sm font-semibold tracking-tight text-white uppercase group-hover:text-neutral-300 transition-colors">
            {portfolioConfig.name}
          </span>
          <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
            / Video Editor & Motion
          </span>
        </a>

        {/* Minimal Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase">
          <button
            onClick={onOpenReel}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Showreel
          </button>
          <a
            href="#work"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Selected Works
          </a>
          <a
            href="#color-lab"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Color Lab
          </a>
          <a
            href="#tools"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Capabilities
          </a>
        </nav>

        {/* Status & Contact Action */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Bookings</span>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-all group"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-neutral-400 hover:text-white p-1"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0d] border-b border-white/[0.08] px-6 py-6 flex flex-col gap-4 text-xs font-mono uppercase tracking-widest">
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenReel();
            }}
            className="text-left text-neutral-300 hover:text-white py-1"
          >
            ▶ Watch Showreel
          </button>
          <a
            href="#work"
            onClick={() => setMobileOpen(false)}
            className="text-neutral-300 hover:text-white py-1"
          >
            Selected Works
          </a>
          <a
            href="#color-lab"
            onClick={() => setMobileOpen(false)}
            className="text-neutral-300 hover:text-white py-1"
          >
            Color Lab (Before & After)
          </a>
          <a
            href="#tools"
            onClick={() => setMobileOpen(false)}
            className="text-neutral-300 hover:text-white py-1"
          >
            Software Pipeline
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center py-2.5 rounded-full bg-white text-black font-sans font-medium capitalize"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
