# AGENTS.md

This document describes the architecture of the Muhamad Fajar Ramdani portfolio site for developers and AI agents working on the codebase.

## Project Overview

A single-page portfolio website for a Junior Fullstack Developer. Built with React 19 + React Router + Vite. All content is static — no database, no backend server.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + React Router v6 |
| Build | Vite 7 |
| Styling | TailwindCSS 4 (class strategy dark mode) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Blog rendering | React Markdown |
| Contact | EmailJS (`@emailjs/browser`) |
| Hosting | Netlify (SPA redirect in `netlify.toml`) |

## Directory Structure

```
src/
  components/         # One file per UI section
    Navbar.tsx        # Sticky floating nav with theme toggle
    Hero.tsx          # Typing animation hero with CTA buttons
    About.tsx         # Photo + bio + stat highlights
    Skills.tsx        # Animated progress bar skill groups
    Projects.tsx      # Searchable project grid with modal detail
    GitHubStats.tsx   # GitHub API stats with mock fallback
    Experience.tsx    # Vertical timeline with animated entries
    Blog.tsx          # Blog post preview cards
    Resume.tsx        # Embedded PDF viewer + download
    Contact.tsx       # EmailJS form with validation
    Footer.tsx        # Lighthouse badges + copyright
  data/
    index.ts          # ALL content: projects, skills, experience, blog posts
  hooks/
    useTheme.ts       # Dark/light mode: localStorage + system preference
    useGitHub.ts      # GitHub API fetch with mock fallback
  pages/
    Home.tsx          # Composes all section components
    BlogPost.tsx      # Full blog post with react-markdown renderer
  App.tsx             # React Router routes (/ and /blog/:slug)
  main.tsx            # Entry point
  styles.css          # TailwindCSS 4 import + CSS custom properties
public/
  favicon.ico
  headshot-on-white.jpg   # Profile photo — replace with actual headshot
  resume.pdf              # CV — add this file to enable the PDF viewer
index.html            # Vite entry with Google Fonts (Syne + Outfit)
```

## Key Conventions

### Theming
- Dark mode uses `.dark` class on `<html>` (Tailwind 4 `@custom-variant dark`)
- CSS custom properties (`--bg`, `--text`, `--accent`, `--glass`, etc.) defined in `:root` and `.dark` in `styles.css`
- Theme is persisted to `localStorage` and initialized by `useTheme()` hook called in `App.tsx`
- Toggle lives in `Navbar.tsx`, calls `toggleTheme()` from `useTheme.ts`

### Styling Approach
- Tailwind utility classes for layout (flex, grid, responsive)
- Inline `style` props for dynamic values that depend on CSS variables (because Tailwind can't interpolate CSS vars at runtime)
- `.glass-card` and `.accent-gradient` utility classes defined in `styles.css`
- No Tailwind config file — uses TailwindCSS 4 CSS-first configuration

### Content
- All portfolio content lives in `src/data/index.ts` (typed interfaces + data arrays)
- Blog posts are stored as markdown strings in `BLOG_POSTS[].content`
- To add a project: push to `PROJECTS` array; categories are `'Web' | 'API' | 'Fullstack'`

### GitHub Stats
- Fetched from `https://api.github.com/users/{VITE_GITHUB_USERNAME}`
- Falls back to `MOCK_STATS` if env var is missing or API fails
- Also fetches repos to compute total stars and top languages

### Contact Form
- Uses `@emailjs/browser` — requires `VITE_EMAILJS_*` env vars
- Validation is client-side only (in `validate()` function in `Contact.tsx`)
- Shows success/error state inline, no page navigation

## Environment Variables

```
VITE_GITHUB_USERNAME       — GitHub username (optional, has mock fallback)
VITE_EMAILJS_SERVICE_ID    — EmailJS service
VITE_EMAILJS_TEMPLATE_ID   — EmailJS template
VITE_EMAILJS_PUBLIC_KEY    — EmailJS public key
```

## Build & Deploy

- Build: `npm install && vite build` → output in `dist/`
- Netlify: configured in `netlify.toml` with `[[redirects]]` rule for SPA routing
- No server-side rendering — pure static SPA
