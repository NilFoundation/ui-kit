import { screen, waitFor } from "@testing-library/react";
import CopyButton from "./CopyButton";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import userEvent from "@testing-library/user-event";

describe("CopyButton", () => {
  it("renders without crashing", () => {
    render(<CopyButton textToCopy="Text" data-testid="Button" />);

    const el = screen.getByTestId("Button");
    expect(el).toBeInTheDocument();
  });

  it("handles onCopy", async () => {
    const onCopy = jest.fn();
    render(<CopyButton textToCopy="Text" onCopy={onCopy} data-testid="Button" />);

    const el = screen.getByTestId("Button");
    userEvent.click(el);
    await waitFor(() => expect(onCopy).toHaveBeenCalledTimes(1));

    //jest.clearAllMocks();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<CopyButton textToCopy="Text" />);
  });

  // Add more tests as needed
});
