import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { children: "Button", onClick: fn() },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Destructive: Story = { args: { variant: "destructive" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Link: Story = { args: { variant: "link" } };
export const Disabled: Story = { args: { disabled: true } };

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Download /> Download resume
      </>
    ),
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    variant: "outline",
    "aria-label": "Download",
    children: <Download />,
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      {(
        [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
        ] as const
      ).map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
};
