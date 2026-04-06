# Towsif's Portfolio

A modern, animated, developer-themed portfolio built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## Features

- Light / dark theme (dark by default, persisted to localStorage)
- Fully responsive with mobile nav
- Animated hero with typing effect + terminal window
- Code-snippet-themed About, Contact, and Project sections
- Git-log-style experience timeline
- Smooth scroll, grid background, glow hover effects

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Customizing content

All content lives in **`src/data.ts`**. Edit that one file to update:

- `profile` — name, role, bio, stats
- `socials` — GitHub, LinkedIn, email URLs
- `skills` — tech stack (icons from `react-icons/si`)
- `projects` — list of projects
- `experience` — work / education timeline

Colors and fonts can be tweaked in `tailwind.config.ts` and `src/index.css`.

## Project structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionHeading.tsx
├── hooks/
│   └── useTheme.ts
├── data.ts
├── types.ts
├── App.tsx
├── main.tsx
└── index.css
```
