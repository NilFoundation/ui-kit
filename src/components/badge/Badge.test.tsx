import { screen } from "@testing-library/react";
import Badge from "./Badge";
import { BADGE_COLOR } from "./types";
import { render } from "../../test-utils/render";

const content = "Badge";

describe("Badge", () => {
  it("renders without crashing", () => {
    render(<Badge content={content} color={BADGE_COLOR.accent} />);

    const badgeElement = screen.getByText(content);
    expect(badgeElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
