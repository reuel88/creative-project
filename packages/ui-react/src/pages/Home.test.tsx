import { render, screen } from "@testing-library/react";
import TestingWrapper from "../utils/TestingWrapper";
import Home from "./Home";

jest.mock("../components", () => {
  return {
    Header: () => <div>Header</div>,
    Hero: () => <div>Hero</div>,
    Listing: ({ title }) => <div>{title}</div>,
  };
});

describe("<Home />", () => {
  it("should render the Header, Hero, List View", () => {
    render(
      <TestingWrapper translations={{ "List View": "List View" }}>
        <Home />
      </TestingWrapper>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Hero")).toBeInTheDocument();
    expect(screen.getByText("List View")).toBeInTheDocument();
  });
});
