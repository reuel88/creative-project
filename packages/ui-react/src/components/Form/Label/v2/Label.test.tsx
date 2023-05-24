import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("<Label />", () => {
  it("should render correctly", () => {
    render(
      <Label htmlFor="hello" isActive={false} hasError={false}>
        world
      </Label>
    );
    const label = screen.getByText("world");

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "hello");
  });
});
