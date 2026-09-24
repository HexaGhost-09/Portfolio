"use client";

import React, { useState, useEffect } from "react";
import { Film, Menu, X, Play, Mail } from "lucide-react";

interface NavbarProps {
  onOpenShowreel: () => void;
}

export default function Navbar({ onOpenShowreel }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Showreel", href: "#showreel", action: onOpenShowreel },
    { name: "Before & After", href: "#before-after" },
    { name: "Work", href: "#work" },
    { name: "Software", href: "#software" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/80 backdrop-blur-md border-b border-border/80 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#0d0f17] rounded-xl flex items-center justify-center group-hover:bg-[#131622] transition-colors">
              <Film className="w-5 h-5 text-accent-cyan" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider text-white font-mono flex items-center gap-1">
              RASEL
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
            </span>
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase -mt-1 font-semibold">
              Video & Visual Artist
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.action) {
                  e.preventDefault();
                  link.action();
                }
              }}
              className="text-sm font-medium text-neutral-300 hover:text-accent-cyan transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenShowreel}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-surface border border-border hover:border-accent-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-accent-cyan text-accent-cyan" />
            Watch Reel
          </button>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-black bg-accent-cyan hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <Mail className="w-3.5 h-3.5" />
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-surface border border-border"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0f17]/95 backdrop-blur-xl border-b border-border px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (link.action) {
                  e.preventDefault();
                  link.action();
                }
              }}
              className="text-base font-medium text-neutral-200 hover:text-accent-cyan transition-colors py-2 border-b border-border/40"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShowreel();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-white bg-surface border border-border"
            >
              <Play className="w-4 h-4 fill-accent-cyan text-accent-cyan" />
              Watch Showreel
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-black bg-accent-cyan font-bold"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
