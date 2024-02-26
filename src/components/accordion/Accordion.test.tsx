import { screen } from "@testing-library/react";
import Accordion from "./Accordion";
import Panel from "./Panel";
import { render } from "../../test-utils/render";

const text = "Text";

describe("Accordion", () => {
  it("renders without crashing", () => {
    render(
      <Accordion renderAll>
        <Panel title="Panel 1">{text}</Panel>
      </Accordion>
    );

    const accordionContent = screen.getByText(text);
    expect(accordionContent).toBeInTheDocument();
  });

  // Add more tests as needed
});
