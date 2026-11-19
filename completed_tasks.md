# Archive

## Completed Tasks

### Task 1: Unify Section Components ✅

**Goal**: Create a reusable section component to standardize layout and reduce duplication.

1. Create a new `Section.tsx` component:

- Accept props for title, description, background color, and children content
- Handle consistent styling and layout for all sections

2. Refactor existing sections to use this component:

- Keep individual section content logic separate
- Update all section files to use the new component

### Task 2: Create Data-Driven Content Architecture ✅

**Goal**: Separate content from presentation for easier updates and translations.

1. Create data structure:

- Add a `data` folder with content files
- Create `content.ts` for English default content
- Organize by sections (hero, experience, skills, etc.)

2. Update components to use data:

- Replace hard-coded content with data references
- Add typings for content structure

### Task 3: Simplify Theme Switching ✅

**Goal**: Replace complex theme dropdown with a simple toggle.

1. Update theme-provider.tsx:

- Remove "system" option from UI (keep it as default)
- Simplify to just light/dark options

2. Replace ModeToggle component:

- Change dropdown menu to a simple toggle switch
- Make sure the icon changes based on current theme
- Keep system as the implicit default

### Task 4: Create Mobile Experience Slider ✅

**Goal**: Improve experience section readability on mobile with a slider.

1. Install or use shadcn Carousel component:

- Import from `@/components/ui/carousel`

2. Modify experience section:

- Wrap experience cards in carousel component
- Only apply carousel at mobile breakpoints
- Add navigation indicators and controls
- Ensure it's fully accessible

### Task 5: Add Multilingual Support ✅

**Goal**: Enable switching between English, Russian and Dutch languages.

1. Add translation files:

- Create `content.ru.ts` for Russian translation
- Create `content.nl.ts` for Dutch translation
- Match the structure of the English content file

2. Create language context:

- Add language selection state
- Create hooks for accessing current language

### Task 6: Implement Language Selection ✅

**Goal**: Allow users to change language via the UI.

1. Create language switcher component:

- Add it to the header next to theme toggle
- Simple dropdown or toggle between languages

2. Persist language preference:

- Store selected language in localStorage
- Apply language on page load

### Task 7: Improve Hero Section Alignment ✅

**Goal**: Create a more structured and visually balanced hero section layout.

1. Adjust the hero section layout to follow a clear rectangular structure:

   - Position the title (name) in the upper left corner of this rectangle
   - Place the buttons in the lower left corner of this rectangle
   - Ensure the right edge of this rectangle aligns perfectly with the image

2. Implementation steps:

   - Update the flex container in the hero section to use proper spacing
   - Add margin/padding to create consistent spacing between elements
   - Use flexbox properties to position elements at the corners
   - Ensure the layout is responsive on all screen sizes

3. Expected result:
   - A cleaner, more structured hero section
   - Better visual balance between text and image
   - Improved overall aesthetic with proper alignment

### Task 14: Standardize Section Layouts ✅

**Goal**: Use the experience section structure for other sections of the page to maintain consistency.

1. Update the `Section.tsx` component:

   - Add support for additional layouts or styles if needed
   - Ensure it can handle content from other sections seamlessly

2. Refactor other sections:

   - Replace existing layouts with the updated `Section.tsx` component
   - Test each section to ensure proper rendering and responsiveness

### Task 15: Implement pdf-file download CV button functionality ✅

**Goal**: Allow users to download the resume file when clicking the "Download Resume" button.

1. Add the resume file to the project:

   - Place the resume file (`resume.pdf`) in the `public` directory for easy access.

2. Implement download functionality:

   - Link the "Download Resume" button to the resume file using an `<a>` tag with the `href` attribute pointing to `/SergeyZolotkoResume.pdf`.
   - Add the `download` attribute to ensure the file is downloaded instead of opened in the browser.

### Task 16: Make the content more personal ✅

**Goal**: Rewrite the copy so the stories read as personal, not generic.

1. Rewrite the copy for every language:

   - Update `en`, `ru` and `nl` translations, including the `casual/` overlay.

2. Keep the translations consistent:

   - Keep key sets in sync across all languages and both tones.
