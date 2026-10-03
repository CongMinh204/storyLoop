# CLAUDE.md

storyLoop: a Chinese-learning app (HSK1) built around narrative roleplay chat, "Bloom" review stages, flashcards and progress tracking. It is a university group project (EXE201). The UI was exported from Figma Make ("V Storyloop"), and the UI text is mostly Vietnamese.

## Commands

- `npm i` installs dependencies (npm is used, not pnpm).
- `npm run dev` starts the Vite dev server.
- `npm run build` creates a production build.
- `npm run preview` serves the build.
- There are no tests and no linter configured.

## Stack

React 18, TypeScript, Vite 6, Tailwind CSS v4 (via `@tailwindcss/vite`, no `tailwind.config`), shadcn/ui (Radix), lucide-react, motion, canvas-confetti, recharts.

## Structure

- `src/main.tsx` is the entry point. It renders `App` and imports `styles/index.css`.
- `src/app/App.tsx` is a single ~1800-line file holding almost the whole app:
  - Data at the top: the colour palette `C`, `STORY_LIBRARY`, `STORY_TURNS` (chat script), `VOCAB_MAP`, `BLOOM_STAGES`, `HSK1_CARDS`.
  - `Screen` is `"home" | "chat" | "bloom" | "progress" | "profile" | "library"`. It is held in `useState` in `App`, so there is no router even though `react-router` is installed.
  - Two parallel layouts, picked with `useIsMobile()`: `MobileApp` (bottom nav, `Mobile*Screen`) and `DesktopApp` (sidebar and topbar, `Desktop*Screen`). They share `ChatStoryEngine`, `BloomContent`, `FlashcardScreen` and `LibraryScreen`.
- `src/app/components/ProgressScreen.tsx` is the progress screen, used by both layouts.
- `src/app/components/ui/` is the shadcn component set. Most of it is currently unused. Prefer these over writing new primitives.
- `src/app/components/figma/ImageWithFallback.tsx` is the Figma helper for images.
- `src/styles/` holds `fonts.css` (Plus Jakarta Sans), `tailwind.css`, `theme.css` (design tokens) and `index.css` (imports them all).
- `src/imports/` holds the original Figma assets and HTML flow references. They are reference material and are not imported by the app.
- `guidelines/Guidelines.md` is an unfilled template. `plans/` and `default_shadcn_theme.css` came with the export.

## Conventions

- The `@` alias points to `src`.
- `vite.config.ts` has a `figma:asset/<file>` resolver that maps to `src/assets/`. Keep it if Figma-exported imports are added.
- Keep both the `react()` and `tailwindcss()` Vite plugins. Do not add `.css`, `.ts` or `.tsx` to `assetsInclude`.
- The original Figma look is the source of truth. Do not restyle existing screens unless asked.
- Any change to shared flow (chat, bloom, library) must work in both the mobile and desktop layouts.
- Because `App.tsx` is so large, new features should go in their own files under `src/app/components/`, as `ProgressScreen.tsx` does, rather than growing `App.tsx`.

## Working rules

- Ask before: deleting or renaming existing files, adding new dependencies, modifying `vite.config.ts` or `package.json`, or running `git commit` / `git push`.
- Keep changes scoped. For anything touching `ChatStoryEngine`, `BloomContent`, `FlashcardScreen` or `LibraryScreen` (shared between mobile and desktop), state the plan before editing, since it must work in both layouts.
- Use Plan mode for multi-file or structural changes; Manual mode for routine edits.
- If a request is ambiguous, ask instead of guessing.
