import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";

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

  // Add more tests as needed
});