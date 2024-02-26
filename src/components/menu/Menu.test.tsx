import { render, screen } from "@testing-library/react";
import Menu from "./Menu";
import { MENU_SIZE } from "./types";

const items = [{ label: "Item One" }, { label: "Item Two" }, { label: "Item Three" }, { label: "Item Four" }];

describe("Menu", () => {
  it("renders without crashing", () => {
    render(<Menu size={MENU_SIZE.medium} items={items} />);

    const menuElement = screen.getByText("Item One");
    expect(menuElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
