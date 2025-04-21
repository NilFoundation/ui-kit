import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox, { LABEL_PLACEMENT } from "./Checkbox";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import { describe, expect, it, vi } from "vitest";

describe("Checkbox", () => {
  it("renders without crashing", () => {
    render(<Checkbox labelPlacement={LABEL_PLACEMENT.right}>Test Checkbox</Checkbox>);

    const checkboxElement = screen.getByText(/Test Checkbox/i);
    expect(checkboxElement).toBeInTheDocument();
  });

  it("handles check events", async () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange}>Check Me</Checkbox>);

    const checkboxElement = screen.getByText(/Check Me/i);
    userEvent.click(checkboxElement);

    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<Checkbox labelPlacement={LABEL_PLACEMENT.right}>Test Checkbox</Checkbox>);
  });

  // Add more tests as needed
});
