import type { Meta, StoryObj } from "@storybook/react";
import { Reveal } from "../components/ui/reveal";
import { Card, CardContent } from "../components/ui/card";

const meta = {
  title: "Components/Reveal",
  component: Reveal,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Reveal>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Scroll the preview down to trigger the reveal. */
export const Default: Story = {
  globals: { tone: "casual" },
  args: {
    children: (
      <Card>
        <CardContent>I fade and lift in once, on entry.</CardContent>
      </Card>
    ),
  },
  render: (args) => (
    <div className="p-4">
      <div className="h-[120vh] flex items-center justify-center text-muted-foreground">
        Scroll down ↓
      </div>
      <Reveal {...args} />
      <div className="h-[60vh]" />
    </div>
  ),
};

export const Stagger: Story = {
  globals: { tone: "casual" },
  args: { children: null },
  render: () => (
    <div className="p-4">
      <div className="h-[120vh] flex items-center justify-center text-muted-foreground">
        Scroll down ↓
      </div>
      <div className="space-y-4">
        {[0, 1, 2].map((index) => (
          <Reveal key={`stagger-${index}`} delayMs={index * 120}>
            <Card>
              <CardContent>Item {index + 1}</CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
      <div className="h-[60vh]" />
    </div>
  ),
};

/** In formal tone Reveal is a pass-through: no observer, no animation. */
export const FormalPassThrough: Story = {
  args: {
    children: (
      <Card>
        <CardContent>Always visible in formal tone.</CardContent>
      </Card>
    ),
  },
  render: (args) => (
    <div className="p-4">
      <Reveal {...args} />
    </div>
  ),
};
