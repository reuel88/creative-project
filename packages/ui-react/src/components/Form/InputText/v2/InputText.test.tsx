import { render, screen } from "@testing-library/react";
import InputText from "./InputText";

describe("<InputText />", () => {
  it("should render correctly", () => {
    const MockChange = jest.fn();

    render(
      <InputText
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
    expect(input).toHaveAttribute("type", "text");
  });
});
