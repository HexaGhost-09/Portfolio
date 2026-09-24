# Rasel — Creative Video Editor & Visual Artist Portfolio

A sleek, dark cinematic portfolio built with **Next.js (App Router)** and **Tailwind CSS**. Designed specifically for showcasing video editing, After Effects motion graphics, Lightroom color grading, and Photoshop retouching.

---

## ✨ Features Included

1. **Cinematic Hero & Showreel Cinema Modal**:
   - High-impact neon/cyan glow backdrop.
   - 1-click modal with full-screen playback of your showreel.

2. **Interactive Before & After Image Slider**:
   - Draggable slider comparing RAW/flat captures against graded/retouched results.
   - Built-in style presets for Teal & Orange, Beauty Retouching, and Moody Night Grayscale/Atmosphere.

3. **Filterable Project Showcase & Lightbox**:
   - Filter tabs: *All Works*, *Video Editing*, *Motion Graphics*, *Color Grading*, *Photo Retouching*.
   - Click-to-open lightbox player with project description, tools used, and client attribution.

4. **Production Pipeline & Software Stack**:
   - Detailed capability breakdown for Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, Adobe Lightroom, and DaVinci Resolve.

5. **Interactive Booking / Inquiry Form**:
   - Service category selector & estimated budget buttons.
   - Direct 1-click email copy button with status feedback.
   - Direct integration channels for YouTube, Instagram, Behance, WhatsApp, and Email.

---

## 🛠️ Zero-Setup Deployment (GitHub & Vercel)

As per your workflow preference, you **do not need to download or install packages locally**. You can let GitHub Actions or Vercel handle building and deploying automatically.

### Option 1: Direct Vercel Deployment (Recommended)
1. Push this folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio release for Rasel"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New"** > **"Project"**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will build and host your portfolio with a live URL and SSL certificate!

---

## 🎨 How to Customize Content

All text, showreel URLs, project videos, and social handles are centralized in a single file:

📁 **`src/data/portfolioData.ts`**

- **Change your Showreel URL**: Update `creatorInfo.showreelUrl` to your YouTube or Vimeo link.
- **Update Social Links**: Edit `socialLinks` array with your actual YouTube, Instagram, Behance, and WhatsApp numbers.
- **Add / Swap Projects**: Edit the `projects` array to add your own YouTube/Vimeo embeds and cover thumbnails.
- **Update Before & After Photos**: Change `beforeAfterPresets` to use your own RAW and Graded image URLs.
