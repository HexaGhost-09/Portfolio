"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ShowreelModal from "../components/ShowreelModal";
import ProjectGallery from "../components/ProjectGallery";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import SoftwareStack from "../components/SoftwareStack";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const [reelOpen, setReelOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-white selection:text-black">
      {/* Editorial Navigation */}
      <Navbar onOpenReel={() => setReelOpen(true)} />

      {/* Cinematic Studio Hero */}
      <Hero onOpenReel={() => setReelOpen(true)} />

      {/* Selected Film & Motion Works */}
      <ProjectGallery />

      {/* Color Science & Retouch Monitor (Before / After) */}
      <BeforeAfterSlider />

      {/* Technical Pipeline & Capabilities */}
      <SoftwareStack />

      {/* Inquiries & Channels */}
      <ContactSection />

      {/* Minimal Footer */}
      <Footer />

      {/* Screening Room Modal */}
      <ShowreelModal isOpen={reelOpen} onClose={() => setReelOpen(false)} />
    </main>
  );
}
