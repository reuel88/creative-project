import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("<Input />", () => {
  describe("Renders correctly", () => {
    const MockBlur = jest.fn();
    const MockChange = jest.fn();
    const MockFocus = jest.fn();

    const MockComponent = () => {
      return (
        <>
          <label htmlFor="hello">World</label>
          <Input
            id="hello"
            type={"text"}
            value={"hello world"}
            onBlur={MockBlur}
            onChange={MockChange}
            onFocus={MockFocus}
          />
        </>
      );
    };

    beforeEach(() => {
      render(<MockComponent />);
    });

    it("should have the correct type and value", () => {
      const input = screen.getByLabelText("World");
      expect(input).toHaveAttribute("type", "text");
      expect(input).toHaveAttribute("value", "hello world");
    });

    it("should call onBlur", () => {
      const input = screen.getByLabelText("World");
      fireEvent.blur(input);
      expect(MockBlur).toBeCalled();
    });

    it("should call onChange", async () => {
      const input = screen.getByLabelText("World");
      const user = userEvent.setup();
      await user.type(input, "John Doe");
      expect(MockChange).toBeCalled();
    });

    it("should call onFocus", () => {
      const input = screen.getByLabelText("World");
      fireEvent.focus(input);
      expect(MockFocus).toBeCalled();
    });
  });
});
