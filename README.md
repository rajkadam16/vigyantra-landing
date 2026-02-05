# VigyanTra Tech - Landing Page

A modern, high-converting landing page built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Features

- ✨ Modern, premium design with gradient effects
- 🌓 Dark/Light mode toggle with persistence
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations with Framer Motion
- ⚡ Fast loading and SEO optimized
- 🧩 Reusable component architecture

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd vigyantra-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
vigyantra-landing/
├── app/
│   ├── layout.tsx       # Root layout with SEO meta tags
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles and Tailwind config
├── components/
│   ├── Navbar.tsx       # Navigation with mobile menu
│   ├── Hero.tsx         # Hero section with CTAs
│   ├── Services.tsx     # Services showcase
│   ├── About.tsx        # About company section
│   ├── Projects.tsx     # Portfolio/projects
│   ├── TechStack.tsx    # Technology stack display
│   ├── Testimonials.tsx # Client testimonials
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer with links
│   └── ThemeProvider.tsx # Dark mode provider
└── public/              # Static assets

```

## Sections

1. **Navbar** - Logo, navigation menu, dark mode toggle, CTA button
2. **Hero** - Headline, subtext, dual CTAs, animated background
3. **Services** - 4 service cards with hover effects
4. **About** - Company info, mission, vision, highlights
5. **Projects** - Portfolio showcase with project cards
6. **Tech Stack** - Technology icons with animations
7. **Testimonials** - Client feedback cards
8. **Contact** - Contact form with validation
9. **Footer** - Quick links, social media, copyright

## Customization

### Colors

Edit the color variables in `app/globals.css` under the `@theme` directive:

```css
@theme {
  --color-primary-500: #0ea5e9;
  --color-purple-600: #9333ea;
  /* ... */
}
```

### Content

Update component content directly in the respective files under `components/`.

## License

© 2026 VigyanTra Tech. All rights reserved.
