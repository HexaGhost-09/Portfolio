export interface Project {
  id: string;
  title: string;
  year: string;
  category: "commercial" | "motion" | "color-grading" | "editorial";
  categoryLabel: string;
  client: string;
  role: string;
  aspect: "16:9" | "9:16" | "2.39:1";
  duration: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  tools: string[];
}

export interface BeforeAfterGrade {
  id: string;
  title: string;
  camera: string;
  colorSpace: string;
  lut: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export const portfolioConfig = {
  name: "Rasel",
  profession: "Video Editor & Motion Designer",
  location: "Working Worldwide",
  availability: "Available for Select Projects (Q4 / 2026)",
  email: "contact.rasel.edits@gmail.com",
  showreelUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=0",
  bio: "Editing with rhythm, visual tension, and meticulous pacing. Focused on commercials, music videos, kinetic motion graphics, and editorial color science.",
  socials: [
    { name: "GitHub", handle: "HexaGhost-09", url: "https://github.com/HexaGhost-09" },
    { name: "YouTube", handle: "@rasel.edits", url: "https://youtube.com" },
    { name: "Instagram", handle: "@rasel.visuals", url: "https://instagram.com" },
    { name: "Behance", handle: "rasel-edits", url: "https://behance.net" },
  ],
};

export const softwareSuite = [
  {
    name: "Adobe Premiere Pro",
    role: "Editorial & Assembly",
    capabilities: "Multi-track pacing, sound design, dialogue cleanup, multicam sync",
  },
  {
    name: "Adobe After Effects",
    role: "Motion Graphics & VFX",
    capabilities: "3D camera projection, kinetic typography, screen replacements, rotoscoping",
  },
  {
    name: "DaVinci Resolve",
    role: "Color Grading & Finishing",
    capabilities: "ACES pipeline, film emulation, skin separation, split toning",
  },
  {
    name: "Adobe Photoshop",
    role: "Visual Design & Retouch",
    capabilities: "Frequency separation, key art, composite matte painting, thumbnail design",
  },
  {
    name: "Adobe Lightroom",
    role: "Color Profiling",
    capabilities: "Custom LUT authoring, tone curve tuning, RAW batch grading",
  },
];

export const beforeAfterGrades: BeforeAfterGrade[] = [
  {
    id: "grade-1",
    title: "Nordic Anamorphic Commercial",
    camera: "ARRI Alexa Mini • Log-C",
    colorSpace: "ACEScc to Rec.709",
    lut: "Custom 35mm 2383 Print LUT",
    beforeImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80&sat=-60&con=-20",
    afterImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80",
    beforeLabel: "Log-C Capture",
    afterLabel: "Master Grade",
  },
  {
    id: "grade-2",
    title: "Studio Editorial Portrait",
    camera: "Sony FX6 • S-Log3",
    colorSpace: "S-Gamut3.Cine to Rec.709",
    lut: "Studio Halation & Skin Isolation",
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80&sat=-50&con=-25",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80",
    beforeLabel: "RAW S-Log3",
    afterLabel: "Retouched & Graded",
  },
  {
    id: "grade-3",
    title: "Urban Night Cyberpunk Cut",
    camera: "RED V-Raptor • REDWideGamut",
    colorSpace: "IPP2 Pipeline",
    lut: "Neon Density & Deep Blacks",
    beforeImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80&sat=-50",
    afterImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    beforeLabel: "RAW Flat",
    afterLabel: "Final Grade",
  },
];

export const projectsList: Project[] = [
  {
    id: "01",
    title: "Midnight Shift / Performance Campaign",
    year: "2026",
    category: "commercial",
    categoryLabel: "Commercial",
    client: "Apex Footwear",
    role: "Lead Editor & Sound Design",
    aspect: "16:9",
    duration: "0:45",
    description: "Fast-paced commercial piece cut to heavy syncopated percussion. Utilizes speed ramps, directional match-cuts, and analog glitch overlays.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    tools: ["Premiere Pro", "After Effects", "Soundly"],
  },
  {
    id: "02",
    title: "Vapor Kinetic Title Sequence",
    year: "2025",
    category: "motion",
    categoryLabel: "Motion & 3D",
    client: "Horizon Docu-Series",
    role: "Motion Design & 3D Typography",
    aspect: "16:9",
    duration: "0:30",
    description: "Opening title sequence featuring 3D displacement maps, liquid chrome typography, and camera tracking through abstract environment passes.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    tools: ["After Effects", "Cinema 4D"],
  },
  {
    id: "03",
    title: "Echoes of Solitude / Narrative Short",
    year: "2025",
    category: "color-grading",
    categoryLabel: "Color Grade",
    client: "Independent Film",
    role: "Colorist",
    aspect: "2.39:1",
    duration: "1:15",
    description: "Cold Scandinavian film emulation grade. Emphasizing soft highlight rolloff, muted forest greens, and faithful skin tonal fidelity.",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    tools: ["DaVinci Resolve", "Lightroom"],
  },
  {
    id: "04",
    title: "Aura Haute Couture Campaign",
    year: "2025",
    category: "editorial",
    categoryLabel: "Photo Retouching",
    client: "Vogue Submissions",
    role: "High-End Retoucher",
    aspect: "16:9",
    duration: "Stills",
    description: "Editorial beauty retouching with dual-band frequency separation, skin micro-texture preservation, and clean color harmony.",
    thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    id: "05",
    title: "Cybernetic Genesis / Promo Teaser",
    year: "2024",
    category: "motion",
    categoryLabel: "Motion & VFX",
    client: "Synapse Sound",
    role: "VFX & Compositing",
    aspect: "16:9",
    duration: "0:25",
    description: "Complex audio-reactive particle simulations, optical glow diffusion, and dynamic optical flares layered over footage.",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    tools: ["After Effects", "Premiere Pro"],
  },
  {
    id: "06",
    title: "Velocity Formula / High Pacing Cut",
    year: "2024",
    category: "commercial",
    categoryLabel: "Commercial",
    client: "Formula Drift",
    role: "Editor & Colorist",
    aspect: "16:9",
    duration: "0:52",
    description: "Precision-cut race highlight package with bass drops, tyre squeal sound foley, and intense high-contrast grade.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    tools: ["Premiere Pro", "DaVinci Resolve"],
  },
];
