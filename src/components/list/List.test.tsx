import { screen } from "@testing-library/react";
import ListItem from "./ListItem";
import ListItemLabel from "./ListItemLabel";
import { render } from "../../test-utils/render";

describe("List", () => {
  it("renders without crashing", () => {
    render(
      <ul>
        <ListItem>
          <ListItemLabel>Label One</ListItemLabel>
        </ListItem>
        <ListItem>
          <ListItemLabel>Label Two</ListItemLabel>
        </ListItem>
        <ListItem>
          <ListItemLabel description="description">Label Three</ListItemLabel>
        </ListItem>
        <ListItem>
          <ListItemLabel description="description">Label Four</ListItemLabel>
        </ListItem>
      </ul>
    );

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
