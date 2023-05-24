import { render, screen } from "@testing-library/react";
import InputEmail from "./InputEmail";

describe("<InputPassword />", () => {
  it("should render correctly", () => {
    const MockChange = jest.fn();

    const { container } = render(
      <InputEmail
        id={"world"}
        label={"John Doe"}
        name="hello"
        value={"John"}
        onChange={MockChange}
      />
    );

    const input = screen.getByLabelText("John Doe");
    expect(input).toBeInTheDocument();

    expect(input).toHaveAttribute("name", "hello");
    expect(input).toHaveAttribute("value", "John");
    expect(input).toHaveAttribute("type", "email");

    expect(container.querySelector("[data-icon=envelope]")).toBeInTheDocument();
  });
});
