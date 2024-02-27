// test-utils.js
import { Queries, RenderOptions, render } from "@testing-library/react";
import { TestsLayout } from "./TestsLayout";
import { ReactNode } from "react";

const customRender = <
  Q extends Queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  ui: ReactNode,
  options?: RenderOptions<Q, Container, BaseElement>
) => render(ui, { wrapper: TestsLayout, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
