import { screen } from "@testing-library/react";
import Tooltip from "./Tooltip";
import { TOOLTIP_KIND } from "./types";
import { render } from "../../test-utils/render";

describe("Tooltip", () => {
  it("renders without crashing", () => {
    render(
      <Tooltip kind={TOOLTIP_KIND.DEFAULT} isOpen content="Content">
        <div>Test Tooltip</div>
      </Tooltip>
    );

    const tooltipElement = screen.getByText(/Test Tooltip/i);
    expect(tooltipElement).toBeInTheDocument();

    const contentElement = screen.getByText(/Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
