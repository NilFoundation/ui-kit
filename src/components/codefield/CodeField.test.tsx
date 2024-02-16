import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CodeField from "./CodeField";

describe("CodeField", () => {
  it("renders without crashing", () => {
    render(<CodeField code="Test Code" />);

    const codeElement = screen.getByText(/Test Code/i);
    expect(codeElement).toBeInTheDocument();
  });

  it("handles onChange events", async () => {
    const handleChange = jest.fn();
    render(<CodeField code="Test Code" onChange={handleChange} editable={true} readOnly={false} />);

    const codeElement = screen.getByText(/Test Code/i);
    userEvent.type(codeElement, "New Code");

    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
  });

  // Add more tests as needed
});
