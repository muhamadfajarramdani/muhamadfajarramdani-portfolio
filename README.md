# Muhamad Fajar Ramdani — Portfolio

A modern, professional developer portfolio built with React, TypeScript, Vite, TailwindCSS, and Framer Motion. Deployed on Netlify.

## Tech Stack

- **Framework**: React 19 + React Router v6
- **Build**: Vite 7
- **Styling**: TailwindCSS 4 (glassmorphism + dark/light mode)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Blog**: React Markdown (content in `src/data/index.ts`)
- **Contact**: EmailJS
- **Hosting**: Netlify

## Getting Started

```bash
npm install
cp .env.example .env
# Fill in your environment variables
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Purpose |
|---|---|
| `VITE_GITHUB_USERNAME` | GitHub username for stats API (falls back to mock data) |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

### Setting up EmailJS

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create a template with variables: `from_name`, `from_email`, `message`
4. Copy your Service ID, Template ID, and Public Key into `.env`

## Resume PDF

Place your resume at `public/resume.pdf` to enable the embedded viewer and download button.

## Build

```bash
npm run build
```

Output is in `dist/`.

## Netlify Deployment

1. Connect your GitHub repo to Netlify
2. Set build command: `npm install && vite build`
3. Set publish directory: `dist`
4. Add environment variables in **Site Settings → Environment Variables**

The `netlify.toml` already includes the SPA redirect rule so React Router works correctly on Netlify.

## Customization

All content is in `src/data/index.ts`:
- `PROJECTS` — your project cards
- `SKILLS` — skill groups with progress levels
- `EXPERIENCES` — career timeline
- `BLOG_POSTS` — markdown articles

Replace `public/headshot-on-white.jpg` with your photo and `public/resume.pdf` with your CV.
