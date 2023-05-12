import { render, screen } from "@testing-library/react";
import TestingWrapper from "../utils/TestingWrapper";
import SignIn from "./SignIn";

jest.mock("../components", () => {
  return {
    AuthLayout: ({ children }) => <>{children}</>,
    Header: () => <div>Header</div>,
    SignInForm: () => <div>SignInForm</div>,
  };
});

describe("<SignIn />", () => {
  it("should render Header and SignInForm", () => {
    render(
      <TestingWrapper>
        <SignIn />
      </TestingWrapper>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("SignInForm")).toBeInTheDocument();
  });
});
