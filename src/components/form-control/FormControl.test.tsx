import { render, screen } from "@testing-library/react";
import FormControl from "./FormControl";
import { INPUT_SIZE, Input } from "../input";

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

  // Add more tests as needed
});
