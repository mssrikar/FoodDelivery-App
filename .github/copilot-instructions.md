# Copilot / Agent Instructions — Namaste-React

Purpose: short, actionable guidance so an AI agent can be productive immediately in this small static React repo.

Quick summary
- Minimal static React app that uses CDN builds of React and ReactDOM. Entry points: `indux.html` (root HTML), `App.js` (script), and `indux.css` (styles).
- The project currently relies on global `React` / `ReactDOM` (loaded via unpkg in `indux.html`).

Big picture
- This is a tiny single-page app without bundler-run code paths by default. `indux.html` mounts a root div (#root) and loads `App.js` which uses `React.createElement` and `ReactDOM.createRoot(...).render(...)`.
- External dependencies: React and ReactDOM are included via CDN script tags in `indux.html`. There are no import/require statements in `App.js`.

Developer workflows & commands
- Dev server (optional): Parcel is present as a devDependency (`parcel` in `devDependencies`). To run a local dev server use:
  - `npx parcel serve indux.html` (dev, hot-reload)
  - `npx parcel build indux.html` (production bundle)
- Note: `package.json` has a `test` script (`jest`) but Jest is not listed in dependencies. Do not run `npm test` until Jest is installed/configured.

Project-specific conventions & gotchas
- Filename typos: the repo uses `indux.html` and `indux.css` (not `index.*`). Preserve these exact filenames when referencing files or adding scripts.
- `package.json` sets `main: "App.js"` and `type: "commonjs"` — for a browser-first project these fields are non-blocking but unusual. Treat `App.js` as the front-end entry, not a Node module.
- `App.js` expects global `React`/`ReactDOM`. If you migrate to ES modules (import React from 'react'), update `indux.html` and add proper bundling/imports.

Patterns and examples (copy/paste friendly)
- How the app renders (from `App.js`):
  ```js
  const heading = React.createElement("h1", {id: "heading"}, "Hello from React!");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);
  ```
- `indux.html` loads CDN scripts before `App.js`. Keep that loading order if you keep CDN usage.

When editing or extending the project
- Preserve the CDN approach unless you intentionally convert the code to a module-based workflow. If converting:
  - Add `react` and `react-dom` to `dependencies` and switch `indux.html` to load the bundled output (or remove CDN tags and import in code).
  - Update `package.json` scripts to include `"start": "parcel serve indux.html"` and `"build": "parcel build indux.html"`.
- Be conservative: small changes (styling, content) can be done directly in `App.js` and `indux.css` without touching bundling.

Files to inspect first
- `indux.html` — HTML entry and CDN integrations.
- `App.js` — front-end JS entry (uses global React). 
- `indux.css` — simple styles (example: `#heading { color: blue; }`).
- `package.json` — devDependency on Parcel, `test` script references Jest (not installed).

Edge cases an agent should flag to a human
- The `indux.*` filenames look like typos of `index.*`. Confirm intent with the repo owner before renaming.
- `package.json` test script mismatch (calls `jest` without dependency) — ask whether tests should be added or the script removed.

If unclear, ask the maintainer:
- Should we keep CDN-based React or migrate to module imports and bundling?
- Are `indux.*` filenames intentionally spelled that way?
- Do you want `start`/`build` scripts added to `package.json`?

End of file.
