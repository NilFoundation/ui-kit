import { screen } from "@testing-library/react";
import Spinner from "./Spinner";
import { SPINNER_SIZE } from "./types";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../createComponentSSRTest";

describe("Spinner", () => {
  it("renders without crashing", () => {
    render(<Spinner size={SPINNER_SIZE.medium} animation={true} />);

    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("handles custom size and animation", () => {
    const { rerender } = render(<Spinner size={SPINNER_SIZE.medium} animation={true} />);

    let spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toBeInTheDocument();

    rerender(<Spinner size={SPINNER_SIZE.large} animation={false} />);

    spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<Spinner size={SPINNER_SIZE.medium} animation={true} />);
  });

  // Add more tests as needed
});
