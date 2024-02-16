import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";

describe("Select", () => {
  it("renders without crashing", () => {
    render(<Select options={[{ id: "1", label: "Option 1" }]} />);

    const selectElement = screen.getByRole("button");
    expect(selectElement).toBeInTheDocument();
  });

  it("handles selection", () => {
    render(<Select options={[{ id: "1", label: "Option 1" }]} />);

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByText("Option 1"));

    expect(screen.getByRole("button")).toHaveTextContent("Option 1");
  });

  // Add more tests as needed
});
