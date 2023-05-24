import { render, screen } from "@testing-library/react";
import InputEmail from "./InputEmail";
import TestingWrapper from "../../../utils/TestingWrapper";

describe("<InputPassword />", () => {
  const MockChange = jest.fn();

  it("should render correctly", () => {
    const { container } = render(
      <TestingWrapper>
        <InputEmail
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
    expect(input).toHaveAttribute("type", "email");

    expect(container.querySelector("[data-icon=envelope]")).toBeInTheDocument();
  });
});
