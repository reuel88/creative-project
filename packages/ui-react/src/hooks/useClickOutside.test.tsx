import { useRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import useClickOutside from "./useClickOutside";

describe("useClickOutside", () => {
  const MockComponent = ({ handler }: { handler: () => void }) => {
    const ref = useRef<null | HTMLDivElement>(null);
    useClickOutside(ref, handler);

    return <div ref={ref} data-testid="element-testid"></div>;
  };

  it("calls handler when click is outside element", () => {
    const handler = jest.fn();
    render(<MockComponent handler={handler} />);

    fireEvent.click(document);

    expect(handler).toBeCalledTimes(1);
  });

  it(`doesn't calls handler when click is within element`, () => {
    const handler = jest.fn();
    render(<MockComponent handler={handler} />);

    fireEvent.click(screen.getByTestId("element-testid"));

    expect(handler).not.toBeCalled();
  });
});
