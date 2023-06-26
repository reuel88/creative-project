import { render, screen } from "@testing-library/react";
import Breadcrumbs from "./";

describe("<Breadcrumbs />", () => {
  it("should render correctly", () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">
          <span>Home</span>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <span>Listing</span>
        </Breadcrumbs.Item>
      </Breadcrumbs>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Listing")).toBeInTheDocument();
  });
});
