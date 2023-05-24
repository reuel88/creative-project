import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import TestingWrapper from "../../utils/TestingWrapper";

describe("<Counter />", () => {
  it("should render correctly", () => {
    render(
      <TestingWrapper translations={{ "Count is": "Count is {{count}}" }}>
        <Counter />
      </TestingWrapper>
    );

    expect(screen.getByText("Count is 0")).toBeInTheDocument();
  });

  it("should increase count on click", () => {
    const { container } = render(
      <TestingWrapper translations={{ "Count is": "Count is {{count}}" }}>
        <Counter />
      </TestingWrapper>
    );

    expect(screen.getByText("Count is 0")).toBeInTheDocument();

    const button = container.querySelector("button");
    if (button) {
      fireEvent.click(button);
    }

    expect(screen.getByText("Count is 1")).toBeInTheDocument();
  });
});
