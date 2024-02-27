import { screen, waitFor } from "@testing-library/react";
import Tag from "./Tag";
import { TAG_KIND, TAG_SIZE } from "./types";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../createComponentSSRTest";

describe("Tag", () => {
  it("renders without crashing", () => {
    render(
      <Tag kind={TAG_KIND.gray} size={TAG_SIZE.s}>
        Test Tag
      </Tag>
    );

    const tagElement = screen.getByText(/Test Tag/i);
    expect(tagElement).toBeInTheDocument();
  });

  it("handles custom kind and size", async () => {
    const { rerender } = render(
      <Tag kind={TAG_KIND.gray} size={TAG_SIZE.s}>
        Test Tag
      </Tag>
    );

    let tagElement = screen.getByText(/Test Tag/i);
    expect(tagElement).toBeInTheDocument();

    rerender(
      <Tag kind={TAG_KIND.gray} size={TAG_SIZE.m}>
        Test Tag
      </Tag>
    );

    tagElement = screen.getByText(/Test Tag/i);
    await waitFor(() => {
      expect(tagElement).toBeInTheDocument();
    });
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <Tag kind={TAG_KIND.gray} size={TAG_SIZE.s}>
        Test Tag
      </Tag>
    );
  });

  // Add more tests as needed
});
