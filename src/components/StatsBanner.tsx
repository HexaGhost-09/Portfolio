"use client";

import React from "react";
import { creatorInfo } from "../data/portfolioData";
import { TrendingUp, Award, Clock, Eye } from "lucide-react";

export default function StatsBanner() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Eye className="w-5 h-5 text-accent-cyan" />;
      case 1:
        return <Award className="w-5 h-5 text-amber-400" />;
      case 2:
        return <TrendingUp className="w-5 h-5 text-purple-400" />;
      case 3:
        return <Clock className="w-5 h-5 text-emerald-400" />;
      default:
        return <Award className="w-5 h-5 text-accent-cyan" />;
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#0e1017] border border-border rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Glow behind */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-amber-500/5 pointer-events-none" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
          {creatorInfo.stats.map((stat, idx) => (
            <div key={stat.label} className="flex flex-col items-center text-center p-3">
              <div className="p-2.5 rounded-xl bg-surface border border-border mb-3">
                {getIcon(idx)}
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
