import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";
import { INPUT_KIND, INPUT_SIZE } from "./types";
import { render } from "../../test-utils/render";

describe("Input", () => {
  it("renders without crashing", () => {
    render(<Input size={INPUT_SIZE.medium} kind={INPUT_KIND.primary}></Input>);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("handles input changes", async () => {
    const handleChange = jest.fn();
    render(<Input size={INPUT_SIZE.medium} kind={INPUT_KIND.primary} onChange={handleChange}></Input>);

    const inputElement = screen.getByRole("textbox");
    userEvent.type(inputElement, "New Value");

    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
  });

  // Add more tests as needed
});
