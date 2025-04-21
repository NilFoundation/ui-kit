import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import CurrencyInput from "./CurrencyInput";
import { INPUT_SIZE } from "../input";
import { describe, expect, it, vi } from "vitest";

describe("CurrencyInput", () => {
  it("renders without crashing", () => {
    render(<CurrencyInput size={INPUT_SIZE.medium} value={{ currency: "USDT", amount: "1" }} currencies={[]} />);

    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement).toBeInTheDocument();
  });

  it("handles input changes", async () => {
    const handleChange = vi.fn();
    render(
      <CurrencyInput
        size={INPUT_SIZE.medium}
        onChange={handleChange}
        value={{ currency: "USDT", amount: "1" }}
        currencies={[]}
      ></CurrencyInput>
    );

    const inputElement = screen.getByRole("spinbutton");
    userEvent.type(inputElement, "100");

    await waitFor(() => expect(handleChange).toHaveBeenCalled());
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <CurrencyInput size={INPUT_SIZE.medium} value={{ currency: "USDT", amount: "1" }} currencies={[]} />
    );
  });

  // Add more tests as needed
});
