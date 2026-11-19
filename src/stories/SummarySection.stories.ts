import type { Meta, StoryObj } from "@storybook/react";
import { SummarySection } from "../components/sections/summary-section";

const meta = {
  title: "Sections/SummarySection",
  component: SummarySection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SummarySection>;

export default meta;
type Story = StoryObj<typeof meta>;

// Switch the "Tone" toolbar to see the casual prose layout.
export const Default: Story = {};
