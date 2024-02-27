import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleGroup from "./ToggleGroup";
import { BUTTON_SIZE } from "../button";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../createComponentSSRTest";

const options = [
  { key: "1", label: "Option 1" },
  { key: "2", label: "Option 2" },
];

describe("ToggleGroupInner", () => {
  it("renders without crashing", () => {
    render(<ToggleGroup options={options} value={["1"]} onChange={() => {}} size={BUTTON_SIZE.compact} />);

    options.forEach((option) => {
      const optionElement = screen.getByText(new RegExp(option.label, "i"));
      expect(optionElement).toBeInTheDocument();
    });
  });

  it("handles toggle events", async () => {
    const handleChange = jest.fn();
    render(<ToggleGroup options={options} value={["1"]} onChange={handleChange} size={BUTTON_SIZE.compact} />);

    const optionElement = screen.getByText(/Option 1/i);
    userEvent.click(optionElement);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <ToggleGroup options={options} value={["1"]} onChange={() => {}} size={BUTTON_SIZE.compact} />
    );
  });

  // Add more tests as needed
});
