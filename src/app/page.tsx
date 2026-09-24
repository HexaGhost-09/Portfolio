"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ShowreelModal from "../components/ShowreelModal";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ProjectGallery from "../components/ProjectGallery";
import SoftwareStack from "../components/SoftwareStack";
import StatsBanner from "../components/StatsBanner";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-accent-cyan selection:text-black">
      {/* Sticky Cinematic Navigation */}
      <Navbar onOpenShowreel={() => setShowreelOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenShowreel={() => setShowreelOpen(true)} />

      {/* Proof Stats Metrics */}
      <StatsBanner />

      {/* Interactive Before & After Comparison Slider */}
      <BeforeAfterSlider />

      {/* Filterable Project Gallery & Video Lightbox */}
      <ProjectGallery />

      {/* Creative Software & Technical Skillset */}
      <SoftwareStack />

      {/* Interactive Booking & Inquiry Form + Social Channels */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Fullscreen Showreel Cinema Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />
    </main>
  );
}
