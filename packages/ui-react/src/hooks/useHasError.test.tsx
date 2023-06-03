import { render, screen } from "@testing-library/react";
import { useHasError } from "./useHasError";
import { ReactNode } from "react";

describe("useHasError", () => {
  const MockComponent = (props: { errorMessage?: ReactNode }) => {
    const [hasError] = useHasError(props.errorMessage);

    return <div>{hasError ? "has error" : "no error"}</div>;
  };

  it("should render no error", () => {
    render(<MockComponent />);

    expect(screen.getByText("no error")).toBeInTheDocument();
  });

  describe("should render has error", () => {
    it("when errorMessage is a string", () => {
      render(<MockComponent errorMessage="error" />);

      expect(screen.getByText("has error")).toBeInTheDocument();
    });

    it("when errorMessage is an object", () => {
      render(<MockComponent errorMessage={<MockComponent />} />);

      expect(screen.getByText("has error")).toBeInTheDocument();
    });
  });
});
