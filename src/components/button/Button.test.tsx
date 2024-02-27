import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { BUTTON_KIND } from "./types";

describe("Button", () => {
  it("renders without crashing", () => {
    render(<Button kind={BUTTON_KIND.secondary}>Test Button</Button>);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByText(/Click Me/i);

    userEvent.click(buttonElement);
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });

  // Add more tests as needed
});