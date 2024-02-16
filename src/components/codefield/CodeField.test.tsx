import { render, screen } from "@testing-library/react";
import CodeField from "./CodeField";

describe("CodeField", () => {
  it("renders without crashing", () => {
    render(<CodeField code="Test Code" />);

    const codeElement = screen.getByText(/Test Code/i);
    expect(codeElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
