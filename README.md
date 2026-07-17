# Akalya — Portfolio

A clean, modern, responsive portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview   # optional local preview of the production build
```

The production-ready files will be in the `dist/` folder.

## Deploying

This project works out of the box on:

- **Vercel** — import the repo, framework preset "Vite", no extra config needed.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — build with `npm run build`, then deploy the `dist/` folder
  (e.g. with the `gh-pages` package or GitHub Actions).

## Project structure

```
src/
  assets/            images (portrait, workspace photo, project screenshots)
  components/        Navbar, Hero, About, Skills, Projects, Certifications, Contact, Footer
  data/content.js     all editable text content (skills, projects, contact info, etc.)
  App.jsx            page composition
  index.css           Tailwind + global styles
public/
  favicon.svg
  resume.pdf          <-- add your actual resume file here (referenced by the "Download Resume" button)
```

## Customizing content

Almost all text (skills, project descriptions, certifications, contact details) lives in
`src/data/content.js`, so you can update the portfolio without touching component code.

To replace project screenshots, swap the files in `src/assets/` and keep the same import
names in `src/components/Projects.jsx`.

## Notes

- Add your real `resume.pdf` into the `public/` folder so the "Download Resume" button works.
- Update the `href="#"` project links in `src/data/content.js` (`projects` array) or wire up
  real project links once they're live.
