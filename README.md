# Khalil Wali — Portfolio

Personal portfolio for Khalil Wali, Full-Stack Developer and Junior DevOps Engineer.

---

## Overview

This repository contains the source code for my personal engineering portfolio website. Built with React, TypeScript, TanStack Router, and Tailwind CSS, it highlights my experience across full-stack software development, containerization, cloud infrastructure, and CI/CD automation.

---

## Tech Stack

- **Framework**: React 19 / TanStack Start / Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: TanStack Router (File-based SPA routing)
- **CI/CD**: GitHub Actions
- **Hosting / Deployment**: Netlify / Cloudflare Pages

---

## Features

- **Responsive Engineering UI**: Polished dark theme layout optimized for desktop, tablet, and mobile.
- **Custom Monogram Favicon**: Custom `KW` SVG and PNG icon system.
- **Detailed Case Studies**: Architectural data flow diagrams and deep-dive documentation for **DukaSmart**, **DaryeelOne**, and **HoyHel**.
- **Automated CI Pipeline**: GitHub Actions validating code linting, TypeScript type safety, and production build compilation on every push and pull request.
- **Netlify Deployment Preparedness**: Pre-configured build settings and SPA route redirect handling (`_redirects` & `netlify.toml`).

---

## Development

To run the application locally:

```bash
# Clone the repository
git clone https://github.com/walikhalil480-art/engineer-s-canvas-main.git
cd engineer-s-canvas-main

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## Code Quality & Verification

To run linting and TypeScript checks locally:

```bash
# Code linting
npm run lint

# TypeScript type checking
npm run typecheck
```

---

## Production Build

To compile the application for production:

```bash
npm run build
```

This compiles static production assets into `.output/public`.

---

## CI/CD Pipeline

The project includes an automated GitHub Actions CI workflow defined in `.github/workflows/ci.yml`.

On every `push` to `main` and `pull_request` targeting `main`, the pipeline automatically:

1. Checks out the repository code.
2. Sets up Node.js LTS (20.x).
3. Installs dependencies using `npm ci`.
4. Runs `npm run lint` for code style validation.
5. Runs `npm run typecheck` (`tsc --noEmit`) for strict TypeScript validation.
6. Executes `npm run build` to verify production compilation.

---

## Deployment

The production application is prepared for automated deployment via **Netlify** connected to the primary GitHub repository branch.

- **Build Command**: `npm run build`
- **Publish Directory**: `.output/public`
- **Redirects**: Handled via `public/_redirects` (`/* /index.html 200`) and `netlify.toml`.

---

## Links

- **GitHub**: [https://github.com/walikhalil480-art](https://github.com/walikhalil480-art)
- **LinkedIn**: [https://www.linkedin.com/in/khalil-abdi-wali-63a99a169](https://www.linkedin.com/in/khalil-abdi-wali-63a99a169)
- **Live Portfolio**: [https://www.tijabo.online](https://www.tijabo.online)
