import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Short supporting description.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Card body content goes here.</p>
      </CardContent>
    </Card>
  ),
};

export const WithActionAndFooter: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Senior Frontend Engineer</CardTitle>
        <CardDescription>Example Company</CardDescription>
        <CardAction>
          <Badge variant="outline">2022 – now</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Led the migration to a component-driven architecture.
        </p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Details</Button>
        <Button>Contact</Button>
      </CardFooter>
    </Card>
  ),
};

export const ContentOnly: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardContent>
        <p>A card with only content, as used for the brief intro.</p>
      </CardContent>
    </Card>
  ),
};
