import { screen } from "@testing-library/react";
import Radio from "./Radio";
import { render } from "../../test-utils/render";

describe("Radio", () => {
  it("renders without crashing", () => {
    render(<Radio value="test">Test Radio</Radio>);

    const radioElement = screen.getByRole("radio");
    expect(radioElement).toBeInTheDocument();
  });

  it("handles selection", async () => {
    render(
      <Radio checked value="test">
        Test Radio
      </Radio>
    );

    expect(screen.getByRole("radio")).toBeChecked();
  });

  // Add more tests as needed
});
