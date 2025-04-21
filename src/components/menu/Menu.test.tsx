import { screen } from "@testing-library/react";
import Menu from "./Menu";
import { MENU_SIZE } from "./types";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import { describe, expect, it } from "vitest";

const items = [{ label: "Item One" }, { label: "Item Two" }, { label: "Item Three" }, { label: "Item Four" }];

describe("Menu", () => {
  it("renders without crashing", () => {
    render(<Menu size={MENU_SIZE.medium} items={items} />);

    const menuElement = screen.getByText("Item One");
    expect(menuElement).toBeInTheDocument();
  });

  it("handles size prop", () => {
    const { rerender } = render(<Menu size={MENU_SIZE.medium} items={items} />);

    let menuElement = screen.getByText("Item One");
    expect(menuElement).toBeInTheDocument();

    rerender(<Menu size={MENU_SIZE.large} items={items} />);

    menuElement = screen.getByText("Item One");
    expect(menuElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<Menu size={MENU_SIZE.medium} items={items} />);
  });

  // Add more tests as needed
});
