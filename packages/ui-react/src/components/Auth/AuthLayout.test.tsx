import { render, screen } from "@testing-library/react";
import AuthLayout from "./AuthLayout";

describe("<AuthLayout />", () => {
  it("should render correctly", () => {
    render(
      <AuthLayout>
        <div>hello</div>
      </AuthLayout>
    );

    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});
