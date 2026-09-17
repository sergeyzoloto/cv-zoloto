# Changelog

All notable changes to this project will be documented in this file.

## 2026-09-17

- Added a formal/casual presentation toggle in the header (coffee cup ↔ wine glass), mirroring the theme toggle
- Casual tone: document scrolling instead of scroll-snap, reveal-on-scroll animations, timeline layouts, warm accent and softer corners
- Added casual-voice copy for en/ru/nl as an overlay over the formal translations (same facts, relaxed register)
- Added a global prefers-reduced-motion guard; reveal animations never hide content when motion is reduced
- Fixed the absolutely positioned icon in the theme toggle anchoring to the header instead of its button
- Interest tags in the About section now show in every language, not only English
- Storybook: theme and tone toolbar switches, language provider decorator, ToneToggle and Reveal stories

## 2025-05-01

- Changed interface to keep consistent layout and style
- Added warning on too little height to render content properly
- Saved space for mobile rotated screen
- Replaced min-h-screen Tailwind className to min-h-dvh for mobile browsers
- Enhance contact section with GitHub and LinkedIn links
- Update translations, and adjust card layouts for better responsiveness

## 2025-04-29

- Small Typescript build fixes: Remove unused fullHeight prop from Section stories and update StoryButton import

## 2025-04-27

- Refactor navigation bar to reflect the current section visually
- Update english translation (tone of voice)
- Got rid of the contact form and updated the task list
- Added tooltip for Download Resume button in hero section to provide additional information about the file size
- Updated the download link to point to the correct resume file path

## 2025-04-26

- Hide borders on header and footer components
- Updated the data, content for the actual resume
- Add button to scroll to the next section in footer component
- Adjust hero section layout for extremely narrow mobile screens
- Enhance footer button styling, improve navigation bar opacity transition and position, and adjust margins in about, skills, and summary sections for better layout consistency

## 2025-04-25

- Refactor navigation structure
- Update media queries for container padding
- Implement navigation links from a dedicated file

## 2025-04-24

- Refactor variables to correctly apply them using Tailwind standard approach to colors
- Add summary link to mobile dropdown menu and desktop navigation
- Refactor summary section layout and enhance card components: get rid of grid, got back to flex
- Fix adaptive height adjustments for mobile and desktop views on card components
- Adjust leading in card title and fixed aspect ratio for svg education icons
- Check and adjust layout across sections

## 2025-04-23

- Add stories with color palette

## 2025-04-21

- Improved `SummarySection` layout
- Refactored `Card` component for better scroll handling and spacing
- Simplified `Section` component layout logic
- Unified styles across `SkillsSection`, `EducationSection`, `ExperienceSection`, and `AboutSection`
- Consistent card styles and better overflow handling for all sections
- Update experience card layout in summary section to display period adaptively

## 2025-04-20

- Added SummarySection component and update translations for summary data
- Refactored education and skills sections; update UI components accordingly
- Added new cards for brief intro, skills, and education to SummarySection

## 2025-04-19

- Added dialog demo component stories
- Got rid of unused files in the stories folder
- Added NavigationBar component with dynamic navigation items
- Updated translations
- Added scroll-context component to track screen position on the main page

## 2025-04-17

- Refactor layout for header and footer components to align with page content

## 2025-04-16

**Changed**:

- Log files restructured

## 2025-04-13

**Added**:

- Created Storybook stories for all UI components:
  - Added stories for core UI components (Section)
  - Added stories for layout components (Header, Footer)
  - Added stories for utility components (LanguageSwitcher, LanguageIndicator, ModeToggle)
  - Added stories for all section components (Hero, Experience, Education, Skills, About, Contact)
  - Organized stories into logical categories (UI, Layout, Components, Sections)
  - Included various component states and configurations where applicable

## 2025-04-12

**Added**:

- Implemented carousel functionality for all sections on mobile:
  - Enhanced the `Section` component with built-in carousel support
  - Added `useCarouselOnMobile` prop to enable carousel mode on small screens
  - Added `carouselChildrenFilter` prop to customize carousel items
  - Implemented navigation controls and slide indicators for all carousels
  - Applied consistent carousel behavior across all sections

**Changed**:

- Refactored section components to use the new carousel functionality:
  - Updated Experience, Skills, About, Education, and Contact sections
  - Extracted card components for better reusability
  - Improved mobile user experience with swipeable cards
- Updated the Hero section layout: button alignment
- Overall alignment alignment and spacing improvements

**Fixed**:

- Fixed the "Back to Top" button not appearing when scrolling:
  - Replaced scroll event listener with Intersection Observer API for more reliable detection with snap scrolling
  - Improved button visibility and accessibility
  - Added proper aria attributes for screen readers

## 2025-04-11

**Changed**:

- Finished the hero section layout:

  - Aligned the title and buttons to the left on wide screens and centered them on mobile.
  - Ensured the the text content aligns with the image.

- Updated the `Section` component:

  - Enforced full-screen height (`h-screen`) with proper handling of overflow.
  - Adjusted layout to ensure consistent alignment and spacing for all sections.

- Improved the `ExperienceSection` component:

  - Dynamically calculated the height of experience cards on mobile to fit within the available viewport space, accounting for the header and footer.
  - Added a scrollable container within experience cards to handle content overflow gracefully.

- Updated the `Section` component:

  - Enforced full-screen height (`h-screen`) with proper handling of overflow.
  - Adjusted layout to ensure consistent alignment and spacing for all sections.
  - Added horizontal scrolling support for child elements.

- Improved the `ExperienceSection` component:

  - Dynamically calculated the height of experience cards on mobile to fit within the available viewport space, accounting for the header and footer.
  - Added a scrollable container within experience cards to handle content overflow gracefully.
  - Limited the number of visible cards on desktop for better layout balance.

- Updated the `useMobile` hook:

  - Adjusted the default breakpoint to `1024px` for better responsiveness.

- Enhanced global styles:

  - Added a maximum width (`max-width: 100rem`) to the `.page-container` for improved layout consistency on larger screens.
  - Introduced a new `--breakpoint-xs` variable for theme-based breakpoints.

## 2025-04-10

**Changed**:

- Improved hero section alignment with a structured rectangular layout.
- Positioned title in the upper left corner and buttons in the lower left corner.
- Aligned the right edge of the content with the image.
- Enhanced responsive behavior for better visual balance.
- Improved image sizing and positioning.
- Adjusted spacing and formatting for better readability in all languages.
- Resolved minor layout issues in the hero section for better responsiveness.
- Ensured consistent font size to fit the parent container width
- Unified width and positioning across all sections for better consistency

## 2025-04-09

**Added**:

- Multilingual support with English, Russian, and Dutch translations
- Language switcher component in the header
- Browser language detection for automatic language selection
- Language context provider for state management
- Dynamic page title updates based on selected language
- Language indicator component for visual feedback
- HTML lang attribute updates for accessibility

**Changed**:

- Updated all section components to use translated content
- Improved header and footer components to support multiple languages
- Enhanced mobile menu with better icons and accessibility
- Created a reusable `Section` component in `src/components/ui/section.tsx` to handle common structure and styling.
- Refactored all six section components to use this base component:
  - HeroSection (kept original structure due to its unique layout)
  - ExperienceSection
  - EducationSection
  - SkillsSection
  - AboutSection
  - ContactSection
- Removed debugging background colors (like `bg-red-500/50` and `bg-green-500/50`).
- Added necessary UI components that were missing (input, textarea, badge, progress, card, button).
- Ensured consistent styling and layout across all sections.

**Created a structured data layer**:

- Organized all content into separate data files in a new `/src/data` directory.
- Defined TypeScript interfaces for each data type to ensure type safety.
- Created a central export file (`index.ts`) for easier imports.

**Implemented data models for each section**:

- Profile data (for hero section).
- Experience data (work history).
- Education data (academic background).
- Skills data (technical and soft skills).
- About data (personal information).
- Contact data (contact information and form fields).

**Refactored all section components to use the data**:

- Updated each component to consume data from the data layer.
- Implemented dynamic rendering based on the data structure.
- Used mapping functions to render lists of items (experiences, skills, etc.).

**Benefits of this architecture**:

- Content is now completely separated from presentation.
- Resume content can be updated by simply modifying the data files.
- TypeScript interfaces ensure data consistency and provide better developer experience.
- The architecture is more maintainable and scalable.
- Future content updates won't require changes to component code.

**Additional improvements**:

- Used proper TypeScript typing throughout the codebase.
- Maintained consistent naming conventions.
- Ensured all components properly handle the data structure.

**Simplified theme switching functionality**:

1. Replaced the dropdown menu with a single toggle button.
2. Added a `toggleTheme` utility function to switch between light and dark modes.
3. Updated the `ModeToggle` component to use this function and display the appropriate icon.
4. Maintained system as the default theme while hiding it from the UI.
5. Ensured the toggle shows the correct icon based on the actual appearance (considering system preference).

**Implemented a mobile experience slider for the experience section**:

1. Created a reusable `Carousel` component based on `embla-carousel-react`.
2. Added a `useMobile` hook to detect mobile viewport.
3. Implemented conditional rendering: carousel on mobile, standard grid on desktop.
4. Added navigation controls (prev/next buttons) and slide indicators.
5. Ensured proper accessibility with ARIA attributes and keyboard navigation.
6. Made the carousel responsive with proper state management.
7. Added visual indicators to show the current slide position.

**Implemented multilingual support**:

1. Created a language context provider to manage language state.
2. Added translation files for English, Russian, and Dutch languages.
3. Implemented a language switcher component in the header.
4. Updated all section components to use translations based on the selected language.
5. Persisted language preference in localStorage.
6. Created proper TypeScript interfaces for all translation data.
7. Ensured consistent language switching across the entire application.

**Enhanced language selection implementation**:

1. Added browser language detection to automatically set the initial language.
2. Improved the language switcher UI with a globe icon and language indicator.
3. Added proper HTML `lang` attribute updates for accessibility.
4. Created a language indicator component for visual feedback.
5. Updated page title to reflect the current language.
6. Added proper `aria-labels` for better screen reader support.
7. Improved mobile menu with Lucide icons for better UX.
8. Implemented smooth transitions between languages.

## 2025-04-06

**Updates**:

- Initial setup of the project with React, TypeScript, and Tailwind CSS.
- Added responsive sections for showcasing experience, education, skills, and contact information.
- Integrated Storybook for component documentation and testing.
- Configured Vite for development and build processes.
