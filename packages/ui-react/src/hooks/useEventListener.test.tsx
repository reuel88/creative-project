import { render } from "@testing-library/react";
import useEventListener from "./useEventListener";

describe("useEventListener", () => {
  it("should call the callback function when the event is triggered", () => {
    const MockComponent = ({ callback }: { callback: () => void }) => {
      useEventListener("click", callback);

      return <div></div>;
    };

    const callback = jest.fn();

    render(<MockComponent callback={callback} />);

    const event = new Event("click");
    window.dispatchEvent(event);
    expect(callback).toHaveBeenCalled();
  });

  it(`doesn't call the callback function when the event is triggered`, () => {
    const MockComponent = ({ callback }: { callback: () => void }) => {
      useEventListener("click", callback, document.querySelector(".hello"));

      return <div></div>;
    };

    const callback = jest.fn();

    render(<MockComponent callback={callback} />);
    const event = new Event("click");
    window.dispatchEvent(event);
    expect(callback).not.toHaveBeenCalled();
  });
});
