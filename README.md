# Akalya — Portfolio Site

A static, self-contained portfolio site. No build step required.

## Structure

```
portfolio-site/
├── index.html      # Page markup
├── css/
│   └── style.css   # All styling
├── js/
│   └── script.js   # Navigation, scroll reveal, animations
└── README.md
```

## Running it locally

Just open `index.html` directly in your browser (double-click it), or serve
the folder with any static server, e.g.:

```
npx serve .
```

## Deploying

Any static host works as-is — no build/compile step needed:

- **GitHub Pages**: push this folder to a repo and enable Pages on the branch.
- **Netlify / Vercel**: drag-and-drop this folder into their dashboard, or connect the repo.

## Notes

- The profile photo placeholder was intentionally removed per request.
- The internship section links directly to the certificate on Google Drive
  since the document's contents (role, duration, etc.) could not be verified.
- All project, skill, and certification details reflect only what was
  explicitly provided — nothing was invented.
