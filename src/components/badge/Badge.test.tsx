import { screen } from "@testing-library/react";
import Badge from "./Badge";
import { BADGE_COLOR } from "./types";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import { describe, expect, it } from "vitest";

const content = "Badge";

describe("Badge", () => {
  it("renders without crashing", () => {
    render(<Badge content={content} color={BADGE_COLOR.accent} />);

    const badgeElement = screen.getByText(content);
    expect(badgeElement).toBeInTheDocument();
  });

  it("handles color prop", () => {
    const { rerender } = render(<Badge content={content} color={BADGE_COLOR.accent} />);

    let badgeElement = screen.getByText(content);
    expect(badgeElement).toBeInTheDocument();

    rerender(<Badge content={content} color={BADGE_COLOR.positive} />);

    badgeElement = screen.getByText(content);
    expect(badgeElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<Badge content={content} color={BADGE_COLOR.accent} />);
  });

  // Add more tests as needed
});
