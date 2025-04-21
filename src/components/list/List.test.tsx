import { screen } from "@testing-library/react";
import ListItem from "./ListItem";
import ListItemLabel from "./ListItemLabel";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import { describe, expect, it } from "vitest";

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

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
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
  });

  // Add more tests as needed
});
