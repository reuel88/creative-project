import { useContainerDimensions } from "./useContainerDimensions";
import { useRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";

describe("useContainerDimensions", () => {
  it("should call the handleResize function", async () => {
    const originalMethod = window.addEventListener;
    const spy = jest.spyOn(window, "addEventListener");

    spy.mockImplementation((...args) => {
      // Because this custom implementation is created for the spy,
      // Jest will no longer automatically invoke the original.
      // It needs to be done manually:
      originalMethod(...args);
    });

    const MockComponent = () => {
      const ref = useRef();
      const dimensions = useContainerDimensions(ref);

      return (
        <div ref={ref}>
          <div>width: {dimensions.width}</div>
          <div>height: {dimensions.height}</div>
        </div>
      );
    };

    render(<MockComponent />);

    fireEvent.resize(window);

    expect(screen.getByText("width: 0")).toBeInTheDocument();
    expect(screen.getByText("height: 0")).toBeInTheDocument();
  });
});
