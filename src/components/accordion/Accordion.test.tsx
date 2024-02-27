import { screen } from "@testing-library/react";
import Accordion from "./Accordion";
import Panel from "./Panel";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../createComponentSSRTest";

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

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <Accordion renderAll>
        <Panel title="Panel 1">{text}</Panel>
      </Accordion>
    );
  });

  // Add more tests as needed
});
