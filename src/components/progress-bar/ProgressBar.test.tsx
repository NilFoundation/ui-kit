import { render, screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";
import { PROGRESS_BAR_SIZE } from "./types";

describe("ProgressBar", () => {
  it("renders without crashing", () => {
    render(<ProgressBar value={50} size={PROGRESS_BAR_SIZE.medium} />);

    const progressBarElement = screen.getByRole("progressbar");
    expect(progressBarElement).toBeInTheDocument();
    expect(progressBarElement).toHaveAttribute("value", "50");
  });

  it("handles size prop", () => {
    const { rerender } = render(<ProgressBar value={50} size={PROGRESS_BAR_SIZE.medium} />);

    let progressBarElement = screen.getByRole("progressbar");
    expect(progressBarElement).toBeInTheDocument();

    rerender(<ProgressBar value={50} size={PROGRESS_BAR_SIZE.large} />);

    progressBarElement = screen.getByRole("progressbar");
    expect(progressBarElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
