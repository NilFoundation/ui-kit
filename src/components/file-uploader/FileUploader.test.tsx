import { screen } from "@testing-library/react";
import FileUploader from "./FileUploader";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import { describe, expect, it } from "vitest";

describe("FileUploader", () => {
  it("renders without crashing", () => {
    render(<FileUploader />);

    const fileUploaderElement = screen.getByRole("button");
    expect(fileUploaderElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<FileUploader />);
  });

  // Add more tests as needed
});
