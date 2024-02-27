import { screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../createComponentSSRTest";

export const items = [
  {
    id: "1",
    label: "Menu item 1",
    isSelected: true,
  },
  {
    id: "2",
    label: "Menu item 2",
    children: [
      {
        id: "4",
        label: "Menu subitem 1",
      },
      {
        id: "5",
        label: "Menu subitem 2",
        disabled: true,
      },
      {
        id: "6",
        label: "Menu subitem 3",
      },
    ],
  },
  {
    id: "3",
    label: "Menu item 3",
    disabled: true,
  },
];

describe("NavigationBar", () => {
  it("renders without crashing", () => {
    render(<NavigationBar brand={<div>Brand</div>} items={items} />);

    const navigationBarElement = screen.getByRole("banner");
    expect(navigationBarElement).toBeInTheDocument();
  });

  it("handles custom brand", () => {
    render(<NavigationBar brand={<div>Brand</div>} items={items} />);

    const brandElement = screen.getByText("Brand");
    expect(brandElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<NavigationBar brand={<div>Brand</div>} items={items} />);
  });

  // Add more tests as needed
});
