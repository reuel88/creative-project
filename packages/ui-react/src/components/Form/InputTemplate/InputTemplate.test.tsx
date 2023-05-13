import { ReactElement } from "react";
import userEvent from "@testing-library/user-event";
import { fireEvent, render } from "@testing-library/react";
import InputTemplate, { IInputTemplateProps } from "./InputTemplate";
import TestingWrapper from "../../../utils/TestingWrapper";

describe("<InputTemplate />", () => {
  describe("Renders correctly", () => {
    const MockLeft = () => {
      return <div>Left</div>;
    };

    const MockRight = () => {
      return <div>Right</div>;
    };

    const MockBlur = jest.fn();
    const MockChange = jest.fn();
    const MockFocus = jest.fn();

    const setup = (jsx: ReactElement<IInputTemplateProps>) => {
      return {
        user: userEvent.setup(),
        ...render(jsx),
      };
    };

    it("should have a right and left component", () => {
      const { getByText } = setup(
        <TestingWrapper translations={{ Search: "Search" }}>
          <InputTemplate
            id={"hello"}
            label={"world"}
            type={"text"}
            leftComponent={MockLeft}
            rightComponent={MockRight}
            onChange={MockChange}
          />
        </TestingWrapper>
      );
      expect(getByText("Left")).toBeInTheDocument();
      expect(getByText("Right")).toBeInTheDocument();
    });

    it("should call onBlur", () => {
      const { getByLabelText } = setup(
        <TestingWrapper translations={{ Search: "Search" }}>
          <InputTemplate
            id={"hello"}
            label={"world"}
            type={"text"}
            onBlur={MockBlur}
            onChange={MockChange}
          />
        </TestingWrapper>
      );
      const input = getByLabelText("world");
      fireEvent.blur(input);
      expect(MockBlur).toBeCalled();
    });

    it("should call onChange", async () => {
      const { user, getByLabelText } = setup(
        <TestingWrapper translations={{ Search: "Search" }}>
          <InputTemplate
            id={"hello"}
            label={"world"}
            type={"text"}
            onChange={MockChange}
          />
        </TestingWrapper>
      );
      const input = getByLabelText("world");
      await user.type(input, "John Doe");
      expect(MockChange).toBeCalled();
    });

    it("should call onFocus", () => {
      const { getByLabelText } = setup(
        <TestingWrapper translations={{ Search: "Search" }}>
          <InputTemplate
            id={"hello"}
            label={"world"}
            type={"text"}
            onChange={MockChange}
            onFocus={MockFocus}
          />
        </TestingWrapper>
      );
      const input = getByLabelText("world");
      fireEvent.focus(input);
      expect(MockFocus).toBeCalled();
    });
  });
});
