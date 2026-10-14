# Victor Yeboah Studio - Creative Portfolio

A sleek, responsive, and modern portfolio website showcasing **Website Works**, **Graphic Design Works**, and **Video & Motion Direction**. Built with pure semantic HTML5, Vanilla CSS3 (custom design system & glassmorphism), and modular JavaScript.

---

## 🌟 Key Features

### 1. Curated Three-Discipline Work Showcase
- **💻 Website Works**:
  - *Compupartz* (compupartz.com, Django repair booking & parts store)
  - *Top Reasons* (topreasonsco.com, Next.js travel & car rental booking)
  - *Wastle Ghana* (wastleghana.com, waste pickup booking, brand & video)
  - *Eastern Prime Business Consult* (EPBCL agribusiness site on Vercel)
- **🎨 Graphic Design Works**:
  - *Aeterna Parfum* (Luxury Brand Identity & Packaging Design)
  - *Tokyo Electronic Sound Festival* (Swiss Grid Typographic Poster Series)
  - *Inter Aura* (Visual Identity Manual & Editorial Publication)
- **🎬 Video & Motion Works**:
  - *Cybernetica 2099* (4K Sci-Fi Cinematic Motion Graphics & 3D VFX)
  - *Lumina Audio* (3D Product Commercial with Audio Visualizers)
  - *Sonic Riot* (Kinetic 3D Typography Title Sequence)

### 2. Interactive Features & Micro-Interactions
- **Category Filter Tabs**: Instant filtering with count badges (`All Works (10)`, `Websites (4)`, `Graphic Design (3)`, `Video & Motion (3)`).
- **Modern HTML5 `<dialog>` Modal**:
  - Full-screen modal case studies with light dismiss and keyboard shortcuts (`Esc` to close, `←` / `→` arrows to cycle through projects).
  - Interactive Desktop / Tablet viewport switcher for Web projects.
  - Video player simulator with scrub bar, timer, and Web Audio API synthesizer.
  - Zoom-in inspection for Graphic Design artwork.
- **3D Card Hover Tilt**: Subtle perspective rotation following mouse movement.
- **Accessible & SEO Ready**: Semantic landmarks, descriptive headings, OpenGraph social meta tags, and high-contrast dark theme.
- **Interactive Contact Form**: Client-side validation with instant visual feedback.

---

## 📂 Project Structure

```
Portfolio/
├── index.html              # Main HTML5 entry point with semantic markup
├── css/
│   └── style.css           # Vanilla CSS design tokens, glassmorphism, responsive grid
├── js/
│   └── app.js              # Project data, category filtering, modal handler, canvas visualizer
└── assets/
    └── images/             # High-resolution generated demonstration assets
        ├── creator_portrait.jpg
        ├── web_aurora_ai.jpg
        ├── web_luxury_atelier.jpg
        ├── web_neobank.jpg
        ├── graphic_chronos_brand.jpg
        ├── graphic_tokyo_poster.jpg
        ├── graphic_echo_editorial.jpg
        ├── video_cyberpunk_teaser.jpg
        ├── video_lumina_commercial.jpg
        └── video_kinetic_typography.jpg
```

---

## 🚀 Running Locally

You can run this portfolio locally using any static web server:

```bash
# Using Python 3 (built-in):
python3 -m http.server 8085

# Or using npx serve:
npx serve .
```

Open [http://localhost:8085](http://localhost:8085) in your web browser.
