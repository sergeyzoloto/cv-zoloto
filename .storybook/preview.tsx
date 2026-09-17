import "../src/index.css";
import type { Decorator, Preview } from "@storybook/react";
import { isTone, type Tone } from "../src/types/tone";
import { StoryFrame, type Theme } from "./story-frame";

const withToneAndTheme: Decorator = (Story, context) => {
  const theme: Theme = context.globals.theme === "dark" ? "dark" : "light";
  const tone: Tone = isTone(context.globals.tone)
    ? context.globals.tone
    : "formal";

  return (
    <StoryFrame theme={theme} tone={tone}>
      <Story />
    </StoryFrame>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
    tone: {
      description: "Presentation tone",
      toolbar: {
        title: "Tone",
        icon: "star",
        items: [
          { value: "formal", title: "Formal" },
          { value: "casual", title: "Casual" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
    tone: "formal",
  },
  decorators: [withToneAndTheme],
};

export default preview;
