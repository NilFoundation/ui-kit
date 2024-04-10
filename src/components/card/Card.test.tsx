import { screen } from "@testing-library/react";
import Card from "./Card";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";

describe("Card", () => {
  it("renders without crashing", () => {
    render(<Card>Test Card</Card>);

    const cardElement = screen.getByText(/Test Card/i);
    expect(cardElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(<Card>Test Card</Card>);
  });

  // Add more tests as needed
});
