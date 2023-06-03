import { render, screen } from "@testing-library/react";
import Description from "./Description";

describe("<Description />", () => {
  it("should render correctly", () => {
    render(<Description description={"This is a description"} />);

    expect(screen.getByText("This is a description")).toBeInTheDocument();
  });

  it("should not render when description is undefined", () => {
    render(<Description description={undefined} />);

    expect(screen.queryByText("This is a description")).not.toBeInTheDocument();
  });
});
