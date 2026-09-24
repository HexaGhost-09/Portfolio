"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, Send, MessageSquare, Youtube, Instagram, Globe, Sparkles } from "lucide-react";
import { creatorInfo, socialLinks } from "../data/portfolioData";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedService, setSelectedService] = useState("Video Editing");
  const [selectedBudget, setSelectedBudget] = useState("$500 - $1,000");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectBrief: "",
  });

  const services = [
    "Video Editing",
    "Motion Graphics",
    "Color Grading",
    "Photo Retouching",
    "Full Package",
  ];

  const budgets = [
    "<$300",
    "$300 - $500",
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500+",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(creatorInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link or handle submission
    const subject = encodeURIComponent(`Project Inquiry: ${selectedService} [Budget: ${selectedBudget}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Rasel,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${selectedService}\nEstimated Budget: ${selectedBudget}\n\nProject Details:\n${formData.projectBrief}`
    );
    window.location.href = `mailto:${creatorInfo.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "Youtube":
        return <Youtube className="w-5 h-5 text-red-400" />;
      case "Instagram":
        return <Instagram className="w-5 h-5 text-pink-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-blue-400" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      default:
        return <Mail className="w-5 h-5 text-accent-cyan" />;
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Ready to Collaborate?
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let&apos;s Build Something Cinematic
        </h2>
        <p className="text-neutral-400 mt-3 text-sm sm:text-base">
          Whether you need a high-retention video edit, custom motion package, or clean photographic color grade, send over the details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contact & Social Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Quick Copy Email Card */}
          <div className="p-6 rounded-2xl bg-[#0d0f17] border border-border">
            <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-3">
              Direct Contact
            </h3>
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface border border-border group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-mono text-neutral-200 truncate">
                  {creatorInfo.email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1c202d] hover:bg-neutral-800 text-neutral-300 transition-colors shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Channels List */}
          <div className="p-6 rounded-2xl bg-[#0d0f17] border border-border flex-1">
            <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4">
              Connect Across Channels
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface hover:bg-surfaceHover border border-border hover:border-neutral-500 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#090a0f] border border-border">
                      {getSocialIcon(link.icon)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {link.platform}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        {link.handle}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-neutral-500 group-hover:text-white transition-colors">
                    →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7 bg-[#0d0f17] border border-border rounded-2xl p-6 sm:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2.5">
                1. Select Service Type
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((svc) => (
                  <button
                    type="button"
                    key={svc}
                    onClick={() => setSelectedService(svc)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                      selectedService === svc
                        ? "bg-accent-cyan text-black font-bold shadow-md shadow-cyan-500/20"
                        : "bg-surface hover:bg-surfaceHover text-neutral-300 border border-border"
                    }`}
                  >
                    {svc}
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Budget selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2.5">
                2. Approximate Project Budget
              </label>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                      selectedBudget === b
                        ? "bg-amber-400 text-black font-bold shadow-md shadow-amber-500/20"
                        : "bg-surface hover:bg-surfaceHover text-neutral-300 border border-border"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@brand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>
            </div>

            {/* Project Brief */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                Project Vision & Scope
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about the footage length, desired turnaround, reference videos or moodboard..."
                value={formData.projectBrief}
                onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white text-sm focus:outline-none focus:border-accent-cyan transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-accent-cyan hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Launch Project Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
