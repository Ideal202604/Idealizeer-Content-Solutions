# IDEALIZEER CONTENT SOLUTIONS, PUNE

Idealizeer Content Solutions is a modern multi-page digital agency website built with React, Vite, and Tailwind CSS, now integrated with a Node.js + Express backend for contact form handling and direct email delivery.

The project focuses on strong UI/UX presentation, smooth navigation flows, responsive behavior, and practical backend connectivity.

Director- Pankaj Kathane , UI/UX Designer- Janbaj Jadhav and Developer- Wajid Daud Tamboli

## Project Description

This project represents a full agency website experience with:

- Homepage storytelling sections (hero, services, portfolio preview, process, testimonials, CTA)
- Dedicated pages for About, Services, Portfolio, Case Study, Career, Blog, and Contact
- Dark mode and light mode support
- Functional navigation and CTA flows
- Working contact form API integration with validation, persistence, and direct email notifications

## Features

- Responsive layout system with centralized container widths and consistent spacing
- Dark/Light theme toggle with local persistence
- Functional routing across all primary pages
- Dynamic blog article pages (`/blog/:id`)
- Privacy Policy and Terms of Service routes
- Contact form integrated with backend API (`POST /api/contact`) with direct email delivery to `info@idealizeer.com`
- API health endpoint for quick diagnostics (`GET /api/health`)
- Social sharing metadata (Open Graph/Twitter)
- Custom favicon and brand title integration

## Tech Stack

### Frontend

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM

### Backend

- Node.js
- Express
- CORS
- Nodemailer
- File-based persistence (`server/data/messages.json`)

## Installation Steps

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
cp .env.example .env
```

Set these in `.env`:

- `EMAIL_USER` (Gmail address used for sending)
- `EMAIL_PASS` (Gmail app password, not your normal Gmail password)
- `VITE_CONTACT_API_URL` (optional, defaults to `/api/contact`)
- `VITE_EMAILJS_PUBLIC_KEY` (required for EmailJS CDN contact form setup)

For Vercel and Next-style local conventions, you can also use `.env.local` with the same keys.

3. Start frontend (Vite):

```bash
npm run dev
```

4. Start backend API in another terminal:

```bash
npm run dev:server
```

Frontend runs on `http://localhost:5173` (or next free port) and backend runs on `http://localhost:5000`.

## Contact API Notes (500 Error Fix)

- This project is Vite + React, not Next.js. In production on Vercel, `/api/contact` is handled by `api/contact.js` (serverless function).
- In local development, `/api/contact` is proxied to the Express server via Vite dev proxy.
- If you get a 500 on `/api/contact`, verify:
	- `EMAIL_USER` and `EMAIL_PASS` are set correctly.
	- Gmail 2-Step Verification is enabled and `EMAIL_PASS` is a Gmail App Password.
	- You restarted the server after env changes.
	- Server terminal logs (not just browser console) for the exact Nodemailer error.

## Usage Guide

- Use the navbar to navigate all pages.
- Toggle dark/light theme from the navbar icon.
- Open Blog and click `Read Article` to view dynamic article pages.
- Open Contact page and submit the form to test backend integration.
- Check API health at `http://localhost:5000/api/health`.

## Official Links

- GitHub: https://github.com/Ideal202604
- LinkedIn: https://www.linkedin.com/company/idealizeer-content-solutions/posts/?feedView=all
- Contact / WhatsApp: +91 9922021699

## Folder Structure

```text
.
├── public/
│   ├── Logo.png
│   └── logo_pdf_02.png
├── server/
│   ├── data/
│   │   └── messages.json
│   └── index.js
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Team
- Director : Pankaj Kathane
- UI/UX Designer: Janbaj Jadhav
- Developer: Wajid Daud Tamboli

#
