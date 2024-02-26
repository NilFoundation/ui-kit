import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleGroup from "./ToggleGroup";
import { BUTTON_SIZE } from "../button";

describe("ToggleGroupInner", () => {
  it("renders without crashing", () => {
    const options = [
      { key: "1", label: "Option 1" },
      { key: "2", label: "Option 2" },
    ];
    render(<ToggleGroup options={options} value={["1"]} onChange={() => {}} size={BUTTON_SIZE.compact} />);

    options.forEach((option) => {
      const optionElement = screen.getByText(new RegExp(option.label, "i"));
      expect(optionElement).toBeInTheDocument();
    });
  });

  it("handles toggle events", async () => {
    const handleChange = jest.fn();
    const options = [
      { key: "1", label: "Option 1" },
      { key: "2", label: "Option 2" },
    ];
    render(<ToggleGroup options={options} value={["1"]} onChange={handleChange} size={BUTTON_SIZE.compact} />);

    const optionElement = screen.getByText(/Option 1/i);
    userEvent.click(optionElement);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  // Add more tests as needed
});
