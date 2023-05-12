import { render, screen } from "@testing-library/react";
import TestingWrapper from "../utils/TestingWrapper";
import SignUp from "./SignUp";
import { FC, PropsWithChildren } from "react";

jest.mock("../components", () => {
  return {
    AuthLayout: ({ children }) => <>{children}</>,
    Header: () => <div>Header</div>,
    SignUpForm: () => <div>SignUpForm</div>,
  } as {
    AuthLayout: FC<PropsWithChildren>;
    Header: FC;
    SignUpForm: FC;
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
