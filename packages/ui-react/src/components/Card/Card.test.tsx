import { render, screen } from "@testing-library/react";
import Card from "./Card";

jest.mock("./CardCarousel", () => {
  return () => <div>hello</div>;
});

describe("<Card /> ", () => {
  it("should render correctly", () => {
    render(<Card />);

    expect(screen.getByText("From $100/hr")).toBeInTheDocument();
  });
});
