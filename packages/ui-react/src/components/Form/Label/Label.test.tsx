import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("<Label />", () => {
  it("should render correctly", () => {
    render(<Label id="hello" active={false} label="world" />);
    const label = screen.getByText("world");

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "hello");
  });
});
