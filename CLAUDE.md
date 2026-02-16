# CLAUDE.md

## Project Overview

Personal portfolio website for Manasa Surya P, a Data Analytics Engineer. Built with React, TypeScript, and Vite. The site showcases professional projects filtered by focus area (Data Platforms vs Analytics & BI), provides resume downloads, and includes contact information.

## Tech Stack

- **Language:** TypeScript (strict mode)
- **Framework:** React 18 with functional components and hooks
- **Routing:** React Router v6 (client-side, BrowserRouter)
- **Build Tool:** Vite 5
- **Styling:** Vanilla CSS with custom properties (no CSS framework)
- **Module System:** ES Modules (`"type": "module"`)

## Commands

```bash
npm run dev       # Start Vite dev server with hot reload
npm run build     # TypeScript check (tsc -b) then Vite production build
npm run preview   # Preview the production build locally
```

There is no test runner, linter, or formatter configured.

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── FocusToggle.tsx   # Focus area filter button group
│   └── ProjectCard.tsx   # Individual project display card
├── pages/            # Route-level page components
│   ├── Home.tsx          # Landing page with hero, about, highlights
│   ├── Projects.tsx      # Filterable project grid
│   ├── Resume.tsx        # Resume download links
│   └── Contact.tsx       # Contact information
├── data/             # Static data and type definitions
│   ├── focus.ts          # FocusLens type and filter options
│   └── projects.ts       # Project type and project entries
├── App.tsx           # Root component with routing and layout
├── main.tsx          # React entry point (mounts App in BrowserRouter)
├── index.css         # All styles (single CSS file)
└── vite-env.d.ts     # Vite client type declarations
```

## Architecture

- **App.tsx** owns the shared `focus` state (FocusLens) and passes it down to Home and Projects pages via props
- **Pages** are route-level components rendered by React Router `<Routes>`
- **Components** are reusable pieces used within pages
- **Data files** export TypeScript types alongside their data arrays — types are defined at the top of the file, data below

### Routing

Routes are defined in `App.tsx`:
- `/` → Home
- `/projects` → Projects
- `/resume` → Resume
- `/contact` → Contact

Navigation uses `<NavLink>` for active link styling.

## Coding Conventions

### TypeScript

- Strict mode enabled with `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- Props typed with `type` aliases (not `interface`), e.g. `type ProjectCardProps = { ... }`
- Union types for constrained values: `type FocusLens = "all" | "data-platforms" | "analytics-bi"`
- Export types from the same file as their data

### Components

- Functional components only (arrow functions with `const`)
- Default exports for all components and pages
- Hooks: `useState` for local state
- Conditional rendering uses ternary (`? :`) and logical AND (`&&`)
- List keys use compound strings: `${project.id}-${item}`

### File Naming

- **Components and pages:** PascalCase (e.g., `ProjectCard.tsx`, `Home.tsx`)
- **Data files:** camelCase (e.g., `projects.ts`, `focus.ts`)
- **Config files:** lowercase with dots (e.g., `vite.config.ts`, `tsconfig.app.json`)

### CSS

- Single file: `src/index.css`
- CSS custom properties for theming (`--bg`, `--surface`, `--text`, `--accent`, etc.)
- BEM-inspired class naming: `.project-card__header`, `.focus-toggle__button`
- State modifiers: `.is-active`
- Layout containers: `.container` class for max-width centering
- Responsive breakpoint at `720px`
- No CSS modules, no CSS-in-JS

### HTML/Accessibility

- Semantic elements: `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`
- External links use `target="_blank" rel="noreferrer"`
- ARIA attributes where needed (`role`, `aria-label`)

## Adding Content

### New Project

Add an entry to the `projects` array in `src/data/projects.ts` following the `Project` type:

```ts
{
  id: "kebab-case-id",
  title: "Project Title",
  summary: "One-line description.",
  tech: ["Tool1", "Tool2"],
  tags: ["data-platforms", "relevant-tag"],  // must include "data-platforms" or "analytics-bi" for filtering
  whatIDid: ["Action item 1", "Action item 2"],
  impact: ["Impact statement"],
  links: [{ label: "GitHub", href: "https://..." }],  // optional
}
```

### New Focus Area

1. Add the value to the `FocusLens` union type in `src/data/focus.ts`
2. Add a corresponding entry to the `focusOptions` array
3. Tag relevant projects with the new value

### New Page

1. Create a component in `src/pages/`
2. Add a `<Route>` in `App.tsx`
3. Add a `<NavLink>` to the nav in `App.tsx`

## Deployment

Intended for GitHub Pages. Requires:
1. Setting `base` in `vite.config.ts` to the repo name
2. Installing `gh-pages` and adding deploy scripts to `package.json`

No CI/CD pipeline is currently configured.
