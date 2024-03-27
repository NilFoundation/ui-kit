import { screen } from "@testing-library/react";
import CopyButton from "./CopyButton";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";

describe("CopyButton", () => {
  it("renders without crashing", () => {
    render(<CopyButton textToCopy="Text" data-testid="Button" />);

    const el = screen.getByTestId("Button");
    expect(el).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<CopyButton textToCopy="Text" />);
  });

  // Add more tests as needed
});
