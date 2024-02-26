import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textarea from "./Textarea";
import { TEXTAREA_KIND } from "./types";
import { render } from "../../test-utils/render";

describe("Textarea", () => {
  it("renders without crashing", () => {
    render(<Textarea kind={TEXTAREA_KIND.primary} />);

    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement).toBeInTheDocument();
  });

  it("handles input events", async () => {
    const handleChange = jest.fn();
    render(<Textarea kind={TEXTAREA_KIND.primary} onChange={handleChange} />);

    const textareaElement = screen.getByRole("textbox");
    userEvent.type(textareaElement, "Hello, World!");

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledTimes(13); // "Hello, World!" is 13 characters long
    });
  });

  // Add more tests as needed
});
