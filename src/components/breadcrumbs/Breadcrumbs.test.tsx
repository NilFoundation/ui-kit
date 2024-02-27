import { render } from "../../test-utils/render";
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbsItem from "./BreadcrumbsItem";
import { createComponentSSRTest } from "../../createComponentSSRTest";

describe("Breadcrumbs", () => {
  it("renders without crashing", () => {
    render(
      <Breadcrumbs>
        <BreadcrumbsItem href="#">Parent Page</BreadcrumbsItem>
        <BreadcrumbsItem href="#">Sub-Parent Page</BreadcrumbsItem>
        <BreadcrumbsItem isActive>Current Page</BreadcrumbsItem>
      </Breadcrumbs>
    );
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <Breadcrumbs>
        <BreadcrumbsItem href="#">Parent Page</BreadcrumbsItem>
        <BreadcrumbsItem href="#">Sub-Parent Page</BreadcrumbsItem>
        <BreadcrumbsItem isActive>Current Page</BreadcrumbsItem>
      </Breadcrumbs>
    );
  });

  // Add more tests as needed
});
