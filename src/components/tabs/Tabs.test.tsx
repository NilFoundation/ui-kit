import { screen } from "@testing-library/react";
import Tab from "./Tab";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../createComponentSSRTest";

describe("Tab", () => {
  it("renders without crashing", () => {
    render(<Tab>Test Tab</Tab>);

    const tabElement = screen.getByText(/Test Tab/i);
    expect(tabElement).toBeInTheDocument();
  });

  it("handles start and end enhancers", async () => {
    render(
      <Tab startEnhancer={<div>Start</div>} endEnhancer={<div>End</div>}>
        Test Tab
      </Tab>
    );

    const startEnhancerElement = screen.getByText(/Start/i);
    const endEnhancerElement = screen.getByText(/End/i);
    expect(startEnhancerElement).toBeInTheDocument();
    expect(endEnhancerElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<Tab>Test Tab</Tab>);
  });

  // Add more tests as needed
});
