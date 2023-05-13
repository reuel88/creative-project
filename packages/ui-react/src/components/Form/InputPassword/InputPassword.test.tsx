import { fireEvent, render, screen } from "@testing-library/react";
import InputPassword from "./InputPassword";
import TestingWrapper from "../../../utils/TestingWrapper";

describe("<InputPassword />", () => {
  const MockChange = jest.fn();

  it("default renders correctly", () => {
    render(
      <TestingWrapper translations={{ Hide: "Hide", Unhide: "Unhide" }}>
        <InputPassword
          id={"world"}
          label={"John Doe"}
          value={"Jane Doe"}
          onChange={MockChange}
        />
      </TestingWrapper>
    );

    const input = screen.getByLabelText("John Doe");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("value", "Jane Doe");
    expect(input).toHaveAttribute("type", "password");

    const unhideBtn = screen.getByText("Unhide");
    expect(unhideBtn).toBeInTheDocument();

    fireEvent.click(unhideBtn);

    expect(input).toHaveAttribute("type", "text");

    const hideBtn = screen.getByText("Hide");
    expect(hideBtn).toBeInTheDocument();
  });
});
