import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasel — Video Editor & Motion Designer | Visual Portfolio",
  description: "Official portfolio of Rasel. High-velocity video editing, After Effects motion graphics, Lightroom color grading, and Photoshop retouching.",
  keywords: [
    "Video Editor",
    "Motion Graphics",
    "After Effects",
    "Premiere Pro",
    "Lightroom Color Grading",
    "Photoshop Retouching",
    "Rasel Portfolio",
  ],
  openGraph: {
    title: "Rasel — Video Editor & Motion Designer",
    description: "High-retention video editing and cinematic color science.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-accent-cyan selection:text-black">
        {children}
      </body>
    </html>
  );
}
