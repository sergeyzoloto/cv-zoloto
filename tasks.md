# Task for Digital Resume Project

## Status (2026-11-18)

Current focus: content rewrite + custom domain launch. Storybook stays part of the workflow — it's the right way to design and review components in isolation.

Tasks are prioritised with MoSCoW.

## Done recently

- Removed stray `en-new.ts`; build passes again
- Added favicon (`public/favicon.svg`, placeholder "SZ" monogram)
- Lint passes with 0 warnings (context/provider split, `badgeVariants.ts`)
- Removed unused shadcn components, Radix packages and the dead `tailwind.config.ts`
- Storybook builds and all story tests pass; stories added for SummarySection and UI primitives
- Add Summary Section to Storybook
- Consolidate the hero section layout for different tone-of-voice modes

## Must have — launch blockers

1. Edit content to make stories more personal — rewrite en/ru/nl copy, incl. `casual/`; keep key sets in sync across languages.
2. Update the PDF resume to match the new content (one per language if needed).
3. Connect the custom domain in Cloudflare Pages (HTTPS, redirect from `*.pages.dev`).

## Should have — right after launch

1. SEO and link previews: Open Graph/Twitter meta, preview image, `canonical`, `robots.txt`, `sitemap.xml`.
2. Language-aware meta: update `description` and `og:locale` on language switch.
3. Tests: translation key completeness for every language and tone; page smoke test.
4. CI: GitHub Action running `npm ci`, lint, `tsc`, build and story tests on PRs `dev` → `main`.
5. README: Node 22, correct repo URL, Cloudflare deploy and Storybook instructions.
6. Accessibility pass (Lighthouse/axe): contrast in both themes, focus on toggles, photo `alt`.
7. Rework Storybook stories. Still open from it:
   - preview doesn't load `App.css` (layout utilities missing in stories);
   - no font declared — app and Storybook render different type;
   - `story-frame.tsx` mutates `<html>` without cleanup (breaks Docs pages);
   - `ThemeProvider` / `ScrollProvider` not mounted in stories;
   - language not pinned (no `en/ru/nl` global);
   - remove scaffolding: `src/stories/assets`, `Configure.mdx`, `StoryHomePage.tsx`, onboarding addon.
8. Add various screen formats to section stories — mobile/desktop viewports.

## Could have

1. Refactor Hero section.
2. Refactor Summary Section.
3. Refactor Skills Section.
4. Лента навигации.
5. Publish Storybook (Chromatic — needs a project token — or a separate Cloudflare Pages project).
6. Cookie-free analytics (Cloudflare Web Analytics) and tracking of "Download resume" clicks.
7. Image optimisation: WebP/AVIF, explicit sizes, preload for the profile photo.
8. Reduce bundle size (470 KB JS): code splitting, check `lucide-react` and `embla` usage.
9. Decide on `settings-dialog.tsx` — currently a demo used only in Storybook.
10. Tidy `completed_tasks.md` and `change_log.md`; log recent changes.
