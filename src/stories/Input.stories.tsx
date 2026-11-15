import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { placeholder: "Email", type: "email", className: "w-72" },
  argTypes: {
    type: { control: "select", options: ["text", "email", "password", "number", "file"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValue: Story = { args: { defaultValue: "hello@example.com" } };
export const Disabled: Story = { args: { disabled: true } };
export const Invalid: Story = { args: { "aria-invalid": true, defaultValue: "not-an-email" } };
export const Password: Story = { args: { type: "password", placeholder: "Password" } };
export const File: Story = { args: { type: "file" } };
