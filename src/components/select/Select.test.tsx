import { screen } from "@testing-library/react";
import Select from "./Select";
import { render } from "../../test-utils/render";
import { SELECT_SIZE } from "./types";
import { createComponentSSRTest } from "../../createComponentSSRTest";

describe("Select", () => {
  it("renders without crashing", () => {
    render(<Select startOpen options={[{ id: "1", label: "Option 1" }]} />);

    const comboboxes = screen.getAllByRole("combobox");
    expect(comboboxes.length).not.toBe(0);
  });

  it("handles custom size", () => {
    render(<Select size={SELECT_SIZE.small} options={[{ id: "1", label: "Option 1" }]} />);

    const comboboxes = screen.getAllByRole("combobox");
    expect(comboboxes.length).not.toBe(0);
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<Select startOpen options={[{ id: "1", label: "Option 1" }]} />);
  });

  // Add more tests as needed
});
