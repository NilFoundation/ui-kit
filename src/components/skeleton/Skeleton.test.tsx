import { render, screen } from "@testing-library/react";
import Skeleton from "./Skeleton";

describe("Skeleton", () => {
  it("renders without crashing", () => {
    render(<Skeleton animation={true} />);

    const skeletonElement = screen.getByRole("progressbar");
    expect(skeletonElement).toBeInTheDocument();
  });

  it("handles rows prop", () => {
    render(<Skeleton animation={true} rows={3} />);

    const skeletonElements = screen.getAllByRole("progressbar");
    expect(skeletonElements.length).toBe(3);
  });

  // Add more tests as needed
});
