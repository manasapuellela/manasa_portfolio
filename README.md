# Manasa Surya P Portfolio

A clean, recruiter-friendly portfolio built with Vite, React, and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Update project data

Edit the project entries in `src/data/projects.ts` to add or update portfolio projects.

## Add resume PDFs

Place your PDF resumes in `public/resumes` with these filenames:

- `Manasa_DataAnalyticsEngineer_Python.pdf`
- `Manasa_Software_Python_AWS.pdf`

## Deploy to GitHub Pages

1. Create a repository on GitHub and push this project.
2. Install the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Update `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Set the Vite `base` path in `vite.config.ts` to match your repository name, for example:
   ```ts
   export default defineConfig({
     base: "/your-repo-name/",
     plugins: [react()],
   });
   ```
5. Run:
   ```bash
   npm run deploy
   ```
6. Enable GitHub Pages in repository settings and select the `gh-pages` branch.
