import { screen } from "@testing-library/react";
import Drawer from "./Drawer";
import { ANCHOR, SIZE } from "baseui/drawer";
import { render } from "../../test-utils/render";

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

  // Add more tests as needed
});
