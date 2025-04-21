import { isValidElement } from "react";
import * as Icons from ".";
import { render } from "../../test-utils/render";
import { describe, expect, it } from "vitest";

describe("Icons", () => {
  it("all icons render", () => {
    const keys = Object.keys(Icons);
    keys.forEach((key) => {
      const Icon = Icons[key as keyof typeof Icons];

      if (isValidElement(<Icon />)) {
        const { container } = render(<Icon />);
        expect(container.firstChild).toBeInTheDocument();
      }
    });
  });
});
