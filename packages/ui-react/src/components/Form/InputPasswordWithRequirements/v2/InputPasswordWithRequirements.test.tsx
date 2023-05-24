import { fireEvent, render, screen } from "@testing-library/react";
import InputPasswordWithRequirements from "./InputPasswordWithRequirements";
import TestingWrapper from "../../../../utils/TestingWrapper";

describe("<InputPasswordWithRequirements />", () => {
  const MockChange = jest.fn();

  it("should render correctly", () => {
    render(
      <TestingWrapper translations={{ Hide: "Hide", Unhide: "Unhide" }}>
        <InputPasswordWithRequirements
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

  it("should render with min 8 requirement", () => {
    render(
      <TestingWrapper translations={{ Hide: "Hide", Unhide: "Unhide" }}>
        <InputPasswordWithRequirements
          id={"world"}
          label={"John Doe"}
          value={"a"}
          onChange={MockChange}
        />
      </TestingWrapper>
    );

    expect(
      screen.getByText("String must contain at least 8 character(s)")
    ).toBeInTheDocument();
  });

  it("should render with uppercase letter requirement", () => {
    render(
      <TestingWrapper translations={{ Hide: "Hide", Unhide: "Unhide" }}>
        <InputPasswordWithRequirements
          id={"world"}
          label={"John Doe"}
          value={"aaaaaaaa"}
          onChange={MockChange}
        />
      </TestingWrapper>
    );

    expect(screen.getByText("One uppercase letter")).toBeInTheDocument();
  });

  it("should render with number requirement", () => {
    render(
      <TestingWrapper translations={{ Hide: "Hide", Unhide: "Unhide" }}>
        <InputPasswordWithRequirements
          id={"world"}
          label={"John Doe"}
          value={"aaaaaaaaA"}
          onChange={MockChange}
        />
      </TestingWrapper>
    );

    expect(screen.getByText("One number")).toBeInTheDocument();
  });

  it("should render with special character requirement", () => {
    render(
      <TestingWrapper translations={{ Hide: "Hide", Unhide: "Unhide" }}>
        <InputPasswordWithRequirements
          id={"world"}
          label={"John Doe"}
          value={"aaaaaaaaA1"}
          onChange={MockChange}
        />
      </TestingWrapper>
    );

    expect(screen.getByText("One special character")).toBeInTheDocument();
  });

  it("should render with no requirements", () => {
    render(
      <TestingWrapper translations={{ Hide: "Hide", Unhide: "Unhide" }}>
        <InputPasswordWithRequirements
          id={"world"}
          label={"John Doe"}
          value={"aaaaaaaaA1!"}
          onChange={MockChange}
        />
      </TestingWrapper>
    );

    expect(screen.queryByText("Required")).not.toBeInTheDocument();
    expect(
      screen.queryByText("String must contain at least 8 character(s)")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("One uppercase letter")).not.toBeInTheDocument();
    expect(screen.queryByText("One number")).not.toBeInTheDocument();
    expect(screen.queryByText("One special character")).not.toBeInTheDocument();
  });
});
