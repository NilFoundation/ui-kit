import { render, screen } from "@testing-library/react";
import Select from "./Select";

describe("Select", () => {
  it("renders without crashing", () => {
    render(<Select startOpen options={[{ id: "1", label: "Option 1" }]} />);

    const comboboxes = screen.getAllByRole("combobox");
    expect(comboboxes.length).not.toBe(0);
  });

  // Add more tests as needed
});
