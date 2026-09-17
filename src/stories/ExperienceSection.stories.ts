import type { Meta, StoryObj } from "@storybook/react";
import { ExperienceSection } from "../components/sections/experience-section";

const meta = {
  title: "Sections/ExperienceSection",
  component: ExperienceSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ExperienceSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Casual: Story = {
  globals: { tone: "casual" },
};
