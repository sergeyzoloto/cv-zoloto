import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import React from "react";
import { Section } from "../components/ui/section";
import { Button } from "../components/ui/button";

const meta = {
  title: "Components/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    useCarouselOnMobile: { control: "boolean" },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleChildren: ReactNode[] = [
  React.createElement(Button, { key: "1" }, "First"),
  React.createElement(Button, { key: "2" }, "Second"),
  React.createElement(Button, { key: "3" }, "Third"),
];

export const Default: Story = {
  args: {
    id: "example-section",
    title: "Sample Section",
    description: "This is a demo section with default layout.",
    children: sampleChildren,
  },
};

export const WithCarouselOnMobile: Story = {
  args: {
    id: "carousel-section",
    title: "Carousel Section",
    description: "Appears as a carousel on mobile.",
    useCarouselOnMobile: true,
    children: sampleChildren,
  },
};

export const NoFullHeight: Story = {
  args: {
    id: "minheight-section",
    title: "Min Height Section",
    children: sampleChildren,
  },
};

export const Casual: Story = {
  globals: { tone: "casual" },
  args: {
    id: "casual-section",
    title: "Sample Section",
    description: "Free-flowing layout with reveal animations.",
    children: sampleChildren,
  },
};
