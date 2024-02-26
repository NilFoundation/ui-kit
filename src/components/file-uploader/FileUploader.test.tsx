import { render, screen } from "@testing-library/react";
import FileUploader from "./FileUploader";

describe("FileUploader", () => {
  it("renders without crashing", () => {
    render(<FileUploader />);

    const fileUploaderElement = screen.getByRole("button");
    expect(fileUploaderElement).toBeInTheDocument();
  });
  // Add more tests as needed
});
