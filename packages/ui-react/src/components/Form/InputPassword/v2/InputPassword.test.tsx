import { fireEvent, render, screen } from "@testing-library/react";
import InputPassword from "./InputPassword";
import TestingWrapper from "../../../../utils/TestingWrapper";

describe("<InputPassword />", () => {
  it("should render correctly", () => {
    const MockChange = jest.fn();

    render(
      <TestingWrapper translations={{ Hide: "Hide", Unhide: "Unhide" }}>
        <InputPassword
          id={"world"}
          label={"John Doe"}
          name="hello"
          value={"John"}
          onChange={MockChange}
        />
      </TestingWrapper>
    );

    const input = screen.getByLabelText("John Doe");
    expect(input).toBeInTheDocument();

    expect(input).toHaveAttribute("name", "hello");
    expect(input).toHaveAttribute("value", "John");
    expect(input).toHaveAttribute("type", "password");

    const unhideBtn = screen.getByText("Unhide");
    expect(unhideBtn).toBeInTheDocument();

    fireEvent.click(unhideBtn);

    expect(input).toHaveAttribute("type", "text");

    const hideBtn = screen.getByText("Hide");
    expect(hideBtn).toBeInTheDocument();
  });
});
