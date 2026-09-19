import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { createElement } from "react";
import { HeroSection } from "../components/sections/hero-section";
import { StoryToneSwitch } from "./StoryToneSwitch";
import "../App.css";

const meta = {
  title: "Sections/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Formal: Story = {
  globals: { tone: "formal" },
};

export const Casual: Story = {
  globals: { tone: "casual" },
};

/** The boxes that must not move when the tone changes. */
function measureHero(canvasElement: HTMLElement) {
  const hero = canvasElement.querySelector<HTMLElement>("#hero");
  if (!hero) throw new Error("#hero not rendered");
  const parts = {
    section: hero,
    name: hero.querySelector(".title"),
    subtitle: hero.querySelector(".subtitle"),
    contact: hero.querySelector('a[href="#contact"]'),
    download: hero.querySelector("a[download]"),
    photo: hero.querySelector("img")?.parentElement,
  };
  return {
    hero,
    boxes: Object.fromEntries(
      Object.entries(parts).map(([key, el]) => {
        if (!el) throw new Error(`${key} not rendered`);
        const { x, y, width, height } = el.getBoundingClientRect();
        return [key, { x, y, width, height }];
      })
    ),
  };
}

/** Wait for the re-render and for any transition that could move a box. */
async function settled() {
  await new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve))
  );
  await Promise.all(document.getAnimations().map((a) => a.finished));
}

/**
 * Switches tone in place, like the header toggle, and asserts that the
 * section, name, subtitle, buttons and photo keep their boxes (±1px) and that
 * only the active copy is exposed to assistive technology.
 */
export const ToneSwitchKeepsGeometry: Story = {
  globals: { tone: "formal" },
  decorators: [(Story) => createElement(StoryToneSwitch, null, createElement(Story))],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("button", { name: /switch tone/i });
    await settled();
    const formal = measureHero(canvasElement);

    for (const tone of ["casual", "formal"] as const) {
      await step(`switch to ${tone}`, async () => {
        await userEvent.click(toggle);
        await waitFor(() =>
          expect(document.documentElement.dataset.tone).toBe(tone)
        );
        await settled();
        const current = measureHero(canvasElement);

        // The observers hold on to this node, so it must survive the switch
        expect(current.hero).toBe(formal.hero);
        for (const [key, box] of Object.entries(current.boxes)) {
          for (const side of ["x", "y", "width", "height"] as const) {
            const drift = Math.abs(box[side] - formal.boxes[key][side]);
            expect(drift, `${key}.${side} moved in ${tone}`).toBeLessThanOrEqual(1);
          }
        }

        // One set of links. The copies that only hold space are invisible,
        // unfocusable and left out of the links' names.
        const links = within(current.hero).getAllByRole("link");
        expect(links).toHaveLength(2);
        for (const copy of current.hero.querySelectorAll('[aria-hidden="true"]')) {
          expect(copy).toHaveClass("invisible");
          expect(copy.querySelector("a, button, [tabindex]")).toBeNull();
        }
        for (const link of links) {
          const shown = link.querySelector(".grid > :not([aria-hidden])");
          expect(link).toHaveAccessibleName(shown?.textContent ?? "");
        }
      });
    }
  },
};
