"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { portfolioConfig } from "../data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [projectType, setProjectType] = useState("Commercial Edit");
  const [budget, setBudget] = useState("$500 - $1,500");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    timeline: "",
    brief: "",
  });

  const projectTypes = [
    "Commercial Edit",
    "Motion Graphics & 3D",
    "Color Grading",
    "Music Video",
    "Photo Retouching",
  ];

  const budgetTiers = [
    "< $500",
    "$500 - $1,500",
    "$1,500 - $3,000",
    "$3,000+",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${projectType}\nBudget Range: ${budget}\nEstimated Timeline: ${formData.timeline}\n\nProject Scope:\n${formData.brief}`
    );
    window.location.href = `mailto:${portfolioConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Direct Inquiries & Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 block">
              [ 04 ] Get in Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6">
              Let&apos;s talk about your next cut.
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-md">
              Currently accepting commercial edits, motion design contracts, and color grading projects worldwide.
            </p>

            {/* Email Box */}
            <div className="p-4 rounded-xl bg-surface border border-white/[0.08] mb-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                Direct Inquiries
              </span>
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`mailto:${portfolioConfig.email}`}
                  className="text-sm sm:text-base font-mono text-white hover:text-neutral-300 transition-colors truncate"
                >
                  {portfolioConfig.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-surfaceElevated hover:bg-white/10 text-xs font-mono text-neutral-300 transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-3">
              Elsewhere
            </span>
            <div className="flex flex-wrap gap-4 text-xs font-mono">
              {portfolioConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Inquiry Form */}
        <div className="lg:col-span-7 bg-surface rounded-2xl p-6 sm:p-10 border border-white/[0.08]">
          <form onSubmit={handleSendInquiry} className="space-y-6">
            {/* Service Selector */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                Project Category
              </label>
              <div className="flex flex-wrap gap-1.5">
                {projectTypes.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                      projectType === type
                        ? "bg-white text-black font-semibold"
                        : "bg-surfaceElevated text-neutral-400 hover:text-white border border-white/[0.06]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Selector */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                Estimated Budget
              </label>
              <div className="flex flex-wrap gap-1.5">
                {budgetTiers.map((tier) => (
                  <button
                    type="button"
                    key={tier}
                    onClick={() => setBudget(tier)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                      budget === tier
                        ? "bg-white text-black font-semibold"
                        : "bg-surfaceElevated text-neutral-400 hover:text-white border border-white/[0.06]"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Name / Studio
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surfaceElevated border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surfaceElevated border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Project Scope & Foot length
              </label>
              <textarea
                rows={3}
                required
                placeholder="Give a quick summary: footage camera, turnaround deadline, reference links..."
                value={formData.brief}
                onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surfaceElevated border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-white text-black font-medium text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
            >
              <span>Submit Project Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
