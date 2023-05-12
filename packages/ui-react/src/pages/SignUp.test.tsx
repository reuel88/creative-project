import { render, screen } from "@testing-library/react";
import TestingWrapper from "../utils/TestingWrapper";
import SignUp from "./SignUp";

jest.mock("../components", () => {
  return {
    AuthLayout: ({ children }) => <>{children}</>,
    Header: () => <div>Header</div>,
    SignUpForm: () => <div>SignUpForm</div>,
  };
});

describe("<SignUp />", () => {
  it("should render Header and SignUpForm", () => {
    render(
      <TestingWrapper>
        <SignUp />
      </TestingWrapper>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("SignUpForm")).toBeInTheDocument();
  });
});
