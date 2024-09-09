import Spinner from "./Spinner";
import { SPINNER_SIZE } from "./types";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";

describe("Spinner", () => {
  it("renders without crashing", () => {
    render(<Spinner size={SPINNER_SIZE.medium} />);

    const spinnerElement = document.getElementsByTagName("i")[0];
    expect(spinnerElement).toBeInTheDocument();
  });

  it("handles custom size", () => {
    const { rerender } = render(<Spinner size={SPINNER_SIZE.medium} />);

    let spinnerElement = document.getElementsByTagName("i")[0];
    expect(spinnerElement).toBeInTheDocument();

    rerender(<Spinner size={SPINNER_SIZE.large} />);

    spinnerElement = document.getElementsByTagName("i")[0];
    expect(spinnerElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<Spinner size={SPINNER_SIZE.medium} />);
  });

  // Add more tests as needed
});
