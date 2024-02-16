import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Radio from "./Radio";

describe("Radio", () => {
  it("renders without crashing", () => {
    render(<Radio value="test">Test Radio</Radio>);

    const radioElement = screen.getByRole("radio");
    expect(radioElement).toBeInTheDocument();
  });

  it("handles selection", () => {
    render(<Radio value="test">Test Radio</Radio>);

    userEvent.click(screen.getByRole("radio"));

    expect(screen.getByRole("radio")).toBeChecked();
  });

  // Add more tests as needed
});
