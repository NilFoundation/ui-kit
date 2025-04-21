import { screen } from "@testing-library/react";
import Drawer from "./Drawer";
import { ANCHOR, SIZE } from "baseui/drawer";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import { describe, expect, it } from "vitest";

describe("Drawer", () => {
  it("renders without crashing", () => {
    render(
      <Drawer isOpen anchor={ANCHOR.right} size={SIZE.default}>
        Test Drawer
      </Drawer>
    );

    const drawerElement = screen.getByText(/Test Drawer/i);
    expect(drawerElement).toBeInTheDocument();
  });

  it("handles custom anchor and size", async () => {
    const { rerender } = render(
      <Drawer isOpen anchor={ANCHOR.right} size={SIZE.default}>
        Test Drawer
      </Drawer>
    );

    let drawerElement = screen.getByText(/Test Drawer/i);
    expect(drawerElement).toBeInTheDocument();

    rerender(
      <Drawer isOpen anchor={ANCHOR.left} size={SIZE.full}>
        Test Drawer
      </Drawer>
    );

    drawerElement = screen.getByText(/Test Drawer/i);
    expect(drawerElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <Drawer isOpen anchor={ANCHOR.right} size={SIZE.default}>
        Test Drawer
      </Drawer>
    );
  });

  // Add more tests as needed
});
