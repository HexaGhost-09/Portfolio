export type ProjectCategory = 
  | "all"
  | "video-editing"
  | "motion-graphics"
  | "color-grading"
  | "photo-retouching";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  thumbnail: string;
  videoUrl?: string; // YouTube, Vimeo, or MP4 embed url
  isDirectVideo?: boolean;
  aspectRatio?: "16:9" | "9:16" | "4:5" | "1:1";
  tools: string[];
  duration?: string;
  client?: string;
  featured?: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  softwareUsed: string[];
}

export interface SoftwareTool {
  name: string;
  iconName: string;
  category: "Video" | "VFX & Motion" | "Photo & Design" | "Color Science";
  description: string;
  highlights: string[];
  glowColor: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  handle: string;
  url: string;
  icon: string;
}
