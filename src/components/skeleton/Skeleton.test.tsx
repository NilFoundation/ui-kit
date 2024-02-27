import { screen } from "@testing-library/react";
import Skeleton from "./Skeleton";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../createComponentSSRTest";

describe("Skeleton", () => {
  it("renders without crashing", () => {
    render(<Skeleton animation={true} />);

    const skeletonElement = screen.getByRole("progressbar");
    expect(skeletonElement).toBeInTheDocument();
  });

  it("handles custom animation", () => {
    const { rerender } = render(<Skeleton animation={true} />);

    let skeletonElement = screen.getByRole("progressbar");
    expect(skeletonElement).toBeInTheDocument();

    rerender(<Skeleton animation={false} />);

    skeletonElement = screen.getByRole("progressbar");
    expect(skeletonElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<Skeleton animation={true} />);
  });

  // Add more tests as needed
});
