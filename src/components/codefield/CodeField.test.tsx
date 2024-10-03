import { screen } from "@testing-library/react";
import CodeField from "./CodeField";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";

describe("CodeField", () => {
  it("renders without crashing", () => {
    render(<CodeField code="Test Code" />);

    const codeElement = screen.getByText(/Test Code/i);
    expect(codeElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<CodeField code="Test Code" />);
  });

  // Add more tests as needed
});
