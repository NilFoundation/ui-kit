import { screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";
import { PROGRESS_BAR_SIZE } from "./types";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../createComponentSSRTest";

describe("ProgressBar", () => {
  it("renders without crashing", () => {
    render(<ProgressBar value={50} size={PROGRESS_BAR_SIZE.medium} infinite minValue={0} maxValue={100} />);

    const progressBarElement = screen.getByRole("progressbar");
    expect(progressBarElement).toBeInTheDocument();
  });

  it("handles size prop", () => {
    const { rerender } = render(
      <ProgressBar infinite minValue={0} maxValue={100} value={50} size={PROGRESS_BAR_SIZE.medium} />
    );

    let progressBarElement = screen.getByRole("progressbar");
    expect(progressBarElement).toBeInTheDocument();

    rerender(<ProgressBar infinite minValue={0} maxValue={100} value={50} size={PROGRESS_BAR_SIZE.large} />);

    progressBarElement = screen.getByRole("progressbar");
    expect(progressBarElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <ProgressBar infinite minValue={0} maxValue={100} value={50} size={PROGRESS_BAR_SIZE.medium} />
    );
  });

  // Add more tests as needed
});
