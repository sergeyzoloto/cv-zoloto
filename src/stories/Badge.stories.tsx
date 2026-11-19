import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { children: "TypeScript" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Destructive: Story = { args: { variant: "destructive" } };
export const Outline: Story = { args: { variant: "outline" } };

export const SkillList: Story = {
  render: (args) => (
    <div className="flex max-w-sm flex-wrap gap-2">
      {[
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Storybook",
        "Vitest",
      ].map((skill) => (
        <Badge key={skill} {...args} variant="outline">
          {skill}
        </Badge>
      ))}
    </div>
  ),
};
