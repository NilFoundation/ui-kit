import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";
import { SPINNER_SIZE } from "./types";

describe("Spinner", () => {
  it("renders without crashing", () => {
    render(<Spinner size={SPINNER_SIZE.medium} animation={true} />);

    const spinnerElement = screen.getByRole("progressbar");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("handles custom size and animation", () => {
    const { rerender } = render(<Spinner size={SPINNER_SIZE.medium} animation={true} />);

    let spinnerElement = screen.getByRole("progressbar");
    expect(spinnerElement).toBeInTheDocument();

    rerender(<Spinner size={SPINNER_SIZE.large} animation={false} />);

    spinnerElement = screen.getByRole("progressbar");
    expect(spinnerElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
