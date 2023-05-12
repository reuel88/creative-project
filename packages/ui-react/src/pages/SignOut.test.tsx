import { render, screen } from "@testing-library/react";
import TestingWrapper from "../utils/TestingWrapper";
import SignOut from "./SignOut";

jest.mock("../components", () => {
  return {
    AuthLayout: ({ children }) => <>{children}</>,
    Header: () => <div>Header</div>,
  };
});

describe("<SignOut />", () => {
  it("should render Header", () => {
    render(
      <TestingWrapper>
        <SignOut />
      </TestingWrapper>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
  });
});
