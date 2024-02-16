import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FileUploader from "./FileUploader";

describe("FileUploader", () => {
  it("renders without crashing", () => {
    render(<FileUploader />);

    const fileUploaderElement = screen.getByRole("button");
    expect(fileUploaderElement).toBeInTheDocument();
  });

  it("handles file upload events", async () => {
    const handleFileUpload = jest.fn();
    render(<FileUploader onDrop={handleFileUpload} />);

    const fileUploaderElement = screen.getByRole("button");
    userEvent.upload(fileUploaderElement, new File(["hello"], "hello.png", { type: "image/png" }));

    expect(handleFileUpload).toHaveBeenCalledTimes(1);
  });

  // Add more tests as needed
});
