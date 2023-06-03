import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("<ErrorMessage />", () => {
  it("should render correctly", () => {
    render(<ErrorMessage errorMessage={"This is a message"} />);

    expect(screen.getByText("This is a message")).toBeInTheDocument();
  });

  it("should not render when errorMessage is undefined", () => {
    render(<ErrorMessage errorMessage={undefined} />);

    expect(screen.queryByText("This is a message")).not.toBeInTheDocument();
  });
});
