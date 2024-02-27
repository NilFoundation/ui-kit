import { screen } from "@testing-library/react";
import FileUploader from "./FileUploader";
import { render } from "../../test-utils/render";

describe("FileUploader", () => {
  it("renders without crashing", () => {
    render(<FileUploader />);

    const fileUploaderElement = screen.getByRole("button");
    expect(fileUploaderElement).toBeInTheDocument();
  });
  // Add more tests as needed
});
