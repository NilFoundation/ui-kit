import { screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";
import { MockViewport, mockViewport } from "jsdom-testing-mocks";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

let viewport: MockViewport;

beforeEach(() => {
  viewport = mockViewport({ width: "1320px", height: "568px" });
});

afterEach(() => {
  viewport.cleanup();
});

describe("ErrorPage", () => {
  it("renders without crashing", () => {
    render(<ErrorPage errorCode={404} errorDescription="Page not found" redirectTitle="Go back" redirectPath="/" />);

    const errorCodeElement = screen.getByText(/404/i);
    expect(errorCodeElement).toBeInTheDocument();

    const errorDescriptionElement = screen.getByText(/Page not found/i);
    expect(errorDescriptionElement).toBeInTheDocument();
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <ErrorPage errorCode={404} errorDescription="Page not found" redirectTitle="Go back" redirectPath="/" />
    );
  });

  // Add more tests as needed
});
