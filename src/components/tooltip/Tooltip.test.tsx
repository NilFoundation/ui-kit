import { screen } from "@testing-library/react";
import Tooltip from "./Tooltip";
import { TOOLTIP_KIND } from "./types";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";

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

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <Tooltip kind={TOOLTIP_KIND.DEFAULT} isOpen content="Content">
        <div>Test Tooltip</div>
      </Tooltip>
    );
  });

  // Add more tests as needed
});
