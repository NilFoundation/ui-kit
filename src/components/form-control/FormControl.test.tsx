import { screen } from "@testing-library/react";
import FormControl from "./FormControl";
import { INPUT_SIZE, Input } from "../input";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import { describe, expect, it } from "vitest";

describe("FormControl", () => {
  it("renders without crashing", async () => {
    render(
      <FormControl size={INPUT_SIZE.medium}>
        <Input placeholder="Test FormControl" />
      </FormControl>
    );

    const formControlElement = screen.getByPlaceholderText(/Test FormControl/i);
    expect(formControlElement).toBeInTheDocument();
  });

  it("handles custom size", async () => {
    const { rerender } = render(
      <FormControl size={INPUT_SIZE.medium}>
        <Input placeholder="Test FormControl" />
      </FormControl>
    );

    let formControlElement = screen.getByPlaceholderText(/Test FormControl/i);
    expect(formControlElement).toBeInTheDocument();

    rerender(
      <FormControl size={INPUT_SIZE.small}>
        <Input placeholder="Test FormControl" />
      </FormControl>
    );

    formControlElement = screen.getByPlaceholderText(/Test FormControl/i);
    expect(formControlElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <FormControl size={INPUT_SIZE.medium}>
        <Input placeholder="Test FormControl" />
      </FormControl>
    );
  });

  // Add more tests as needed
});
