import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("renders without crashing", () => {
    render(<Card>Test Card</Card>);

    const cardElement = screen.getByText(/Test Card/i);
    expect(cardElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
