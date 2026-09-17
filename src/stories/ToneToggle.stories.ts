import type { Meta, StoryObj } from "@storybook/react";
import { ToneToggle } from "../components/tone-toggle";

const meta = {
  title: "Components/ToneToggle",
  component: ToneToggle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ToneToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Casual: Story = {
  globals: { tone: "casual" },
};
