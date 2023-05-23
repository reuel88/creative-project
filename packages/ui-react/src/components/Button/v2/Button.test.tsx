import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  it("should render correctly", () => {
    render(<Button>Hello</Button>);

    const button = screen.getByText("Hello");
    expect(button).toBeInTheDocument();
  });

  it("should call OnPress", () => {
    const MockPress = jest.fn();

    render(<Button onPress={MockPress}>Hello</Button>);

    const button = screen.getByText("Hello");
    fireEvent.click(button);

    expect(MockPress).toBeCalled();
  });
});
