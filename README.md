# Visitka Site

Personal portfolio/landing site built with Next.js, TypeScript and Sanity CMS.

The site is designed as a compact personal page with editable content, animated sections and a built-in Sanity Studio route for content management.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Sanity CMS
- Styled Components

## Features

- Responsive personal landing page.
- CMS-driven content through Sanity.
- Built-in `/studio` route for editing.
- Fallback content when Sanity environment variables are not configured.
- Animated UI sections and icon-based interface elements.

## Quick Start

```bash
npm install
copy .env.example .env.local
npm run dev
```

Site: `http://localhost:3000`

Studio: `http://localhost:3000/studio`

## Environment

Create `.env.local` from `.env.example`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-19
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
src/app/          Next.js routes
src/components/   landing page UI
src/lib/          fallback content and helpers
src/sanity/       Sanity client, queries and schemas
public/           static assets
```

## Notes

The project can run without a connected Sanity dataset because it includes fallback content for local demos.
