import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toggle, { LABEL_PLACEMENT } from "./Toggle";

describe("Toggle", () => {
  it("renders without crashing", async () => {
    render(
      <Toggle labelPlacement={LABEL_PLACEMENT.right} checked={false} onChange={() => {}}>
        Test Toggle
      </Toggle>
    );

    await waitFor(() => {
      const toggleElement = screen.getByRole("checkbox");
      expect(toggleElement).toBeInTheDocument();
    });
  });

  it("handles toggle events", async () => {
    const handleChange = jest.fn();
    render(
      <Toggle labelPlacement={LABEL_PLACEMENT.right} checked={false} onChange={handleChange}>
        Test Toggle
      </Toggle>
    );

    const toggleElement = screen.getByRole("checkbox");
    userEvent.click(toggleElement);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  // Add more tests as needed
});