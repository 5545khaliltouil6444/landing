# AGENTS.md

## Project

Landing page built with TanStack Start, TanStack Router, React 19, Vite, and TypeScript.

## Commands

- `npm install` - install dependencies
- `npm run dev` - start the dev server on http://localhost:3000
- `npm run build` - create a production build
- `npm run typecheck` - run TypeScript checks
- `npm run format` - format the project with Prettier
- `npm run format:check` - verify formatting

## Structure

- `src/routes/` - file-based routes. `__root.tsx` is the document shell and `index.tsx` is the landing page.
- `src/components/` - shared React components.
- `src/content/` - site copy and structured content. Edit `site.ts` to change landing page text.
- `src/hooks/` - reusable React hooks.
- `src/lib/` - framework-agnostic helpers.
- `src/styles.css` - global styles and design tokens.
- `src/router.tsx`, `src/start.ts`, `src/server.ts` - TanStack Start wiring.
- `.lovable/project.json` - Lovable project metadata. Do not delete it.

## Conventions

- Use function components and named exports.
- Keep copy in `src/content/site.ts` instead of hardcoding it in components.
- Use the CSS variables in `src/styles.css`; do not introduce a second styling system.
- Do not edit `src/routeTree.gen.ts` by hand. TanStack Router regenerates it.
- Run `npm run typecheck` before finishing a change.
- Never commit secrets or `.env` files.
