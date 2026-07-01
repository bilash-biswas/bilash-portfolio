# Premium Developer Portfolio Website

A highly responsive, production-ready, and visually stunning modern portfolio website for **Bilash Kumar Biswas**, built using **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Key Features

- **Dynamic Hero Section**: Clean typewriter effect cycling through engineering roles and a custom-generated professional headshot.
- **Glassmorphic UI Design**: Minimalist corporate tech aesthetics, custom background grid overlays, and soft shadow styles.
- **Dynamic Navigation Bar**: Floating layout with smooth-scrolling anchors and an active section highlighter utilizing `framer-motion` sliding background capsules.
- **Proficiency Progress Bars**: Core skill cards grouped by domain featuring progress bars that animate dynamically on scroll viewport entrance.
- **Rich Case Studies**: Detailed project cards displaying categories, tech stacks, feature matrices, codebases, and live links.
- **Competitive Profile Anchors**: Glowing achievement cards mapping LeetCode (95+) and Beecrowd (230+) competitive programming records.
- **Timeline Milestones**: Vertical chronologic list outlining university degrees and chemical industries training (TICI).
- **Zod Validated Contact Form**: Seamless user forms connected to React Hook Form and EmailJS client libraries (includes a simulation mode if API keys are absent).
- **System Memory Theme Switch**: Smooth light/dark switches respecting system settings using `next-themes`.

---

## 📁 Scalable Directory Layout

```bash
src/
├── app/                  # Application Router paths
│   ├── globals.css       # Tailwind v4 setup & custom utility layers
│   ├── layout.tsx        # SEO Meta tags, Google Fonts, Theme wrappers
│   └── page.tsx          # Single-page layout integration
├── components/           # UI Component blocks
│   ├── ThemeProvider.tsx # client-side next-themes provider wrapper
│   ├── Navbar.tsx        # Floating navigation bar
│   ├── Hero.tsx          # Profile presentation & typewriter
│   ├── About.tsx         # Summary and statistics counter
│   ├── Skills.tsx        # Expertise progress bars
│   ├── Projects.tsx      # Portfolio projects cards
│   ├── ProblemSolving.tsx# Competitive programming stats
│   ├── Education.tsx     # Timelines (Academic/Training)
│   ├── Contact.tsx       # Form fields & submit actions
│   └── Footer.tsx        # Quick links & social buttons
├── data/
│   └── portfolioData.ts  # Central profile database record
```

---

## 🛠️ Local Development Setup

### 1. Install Dependencies
Run the package manager from the root of the directory:
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file at the root of the workspace to configure EmailJS integrations. If these are omitted, the form automatically falls back to an elegant **Simulation Mode**:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 3. Run Development Server
Start the local server (usually boots on `http://localhost:3000` or the next available port):
```bash
npm run dev
```

### 4. Build Production Bundle
To compile and test static builds locally:
```bash
npm run build
npm run start
```

---

## 🎨 Modifying Profile Content

All content is managed locally. To change biography details, skills, or projects, simply open [src/data/portfolioData.ts](src/data/portfolioData.ts) and modify the fields. The UI updates instantly.

---

## 📦 Deploying to Vercel

The codebase is fully optimized for instant deployment to Vercel.

1. Push your local workspace code to a remote GitHub repository.
2. Log into the [Vercel Dashboard](https://vercel.com) and click **Add New Project**.
3. Select your repository.
4. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**. Vercel will automatically compile, optimize, and serve your portfolio globally on a secure CDN.
