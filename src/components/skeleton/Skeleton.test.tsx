import { screen } from "@testing-library/react";
import Skeleton from "./Skeleton";
import { render } from "../../test-utils/render";

describe("Skeleton", () => {
  it("renders without crashing", () => {
    render(<Skeleton animation={true} />);

    const skeletonElement = screen.getByRole("progressbar");
    expect(skeletonElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
