import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonIcon from "./ButtonIcon";
import { BUTTON_SIZE } from "../button/types";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../createComponentSSRTest";

describe("ButtonIcon", () => {
  it("renders without crashing", () => {
    render(<ButtonIcon size={BUTTON_SIZE.default} data-testid="Test Button" icon={<span>Icon</span>}></ButtonIcon>);

    const buttonElement = screen.getByTestId(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    render(<ButtonIcon onClick={handleClick} data-testid="Click me" icon={<span>Icon</span>}></ButtonIcon>);

    const buttonElement = screen.getByTestId(/Click Me/i);
    userEvent.click(buttonElement);

    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <ButtonIcon size={BUTTON_SIZE.default} data-testid="Test Button" icon={<span>Icon</span>}></ButtonIcon>
    );
  });

  // Add more tests as needed
});
