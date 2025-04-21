import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { BUTTON_KIND } from "./types";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import { describe, expect, it, vi } from "vitest";

describe("Button", () => {
  it("renders without crashing", () => {
    render(<Button kind={BUTTON_KIND.secondary}>Test Button</Button>);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByText(/Click Me/i);

    userEvent.click(buttonElement);
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<Button kind={BUTTON_KIND.secondary}>Test Button</Button>);
  });

  // Add more tests as needed
});
