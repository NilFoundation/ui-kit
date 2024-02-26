import { render } from "@testing-library/react";
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbsItem from "./BreadcrumbsItem";

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

  // Add more tests as needed
});
