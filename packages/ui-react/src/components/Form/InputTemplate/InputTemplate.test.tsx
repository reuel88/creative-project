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
            name={"hello"}
            leftComponent={MockLeft}
            rightComponent={MockRight}
            type={"text"}
            value={"John Doe"}
            onChange={MockChange}
          />
        </TestingWrapper>
      );
      expect(getByText("Left")).toBeInTheDocument();
      expect(getByText("Right")).toBeInTheDocument();
    });

    it("should have no error when undefined", () => {
      const { queryByText } = setup(
        <TestingWrapper translations={{ Search: "Search" }}>
          <InputTemplate
            id={"hello"}
            error={undefined}
            label={"world"}
            name={"hello"}
            type={"text"}
            value={"John Doe"}
            onChange={MockChange}
          />
        </TestingWrapper>
      );
      expect(queryByText("Has Error")).not.toBeInTheDocument();
    });

    // it("should have value equal to empty string", () => {
    //   const { getByLabelText } = setup(
    //     <TestingWrapper translations={{ Search: "Search" }}>
    //       <InputTemplate
    //         id={"hello"}
    //         label={"world"}
    //         name={"hello"}
    //         type={"text"}
    //         onChange={MockChange}
    //       />
    //     </TestingWrapper>
    //   );
    //
    //   const input = getByLabelText("world");
    //
    //   expect(input).toBeInTheDocument();
    //   expect(input.value).toBe("");
    // });

    it("should have no error when null", () => {
      const { queryByText } = setup(
        <TestingWrapper translations={{ Search: "Search" }}>
          <InputTemplate
            id={"hello"}
            error={null}
            label={"world"}
            name={"hello"}
            type={"text"}
            value={"John Doe"}
            onChange={MockChange}
          />
        </TestingWrapper>
      );
      expect(queryByText("Has Error")).not.toBeInTheDocument();
    });

    it("should have error", () => {
      const { getByLabelText, getByText } = setup(
        <TestingWrapper translations={{ "Has Error": "Has Error" }}>
          <InputTemplate
            id={"hello"}
            error={"Has Error"}
            label={"world"}
            name={"hello"}
            type={"text"}
            value={"John Doe"}
            onChange={MockChange}
          />
        </TestingWrapper>
      );
      expect(getByText("Has Error")).toBeInTheDocument();
      const input = getByLabelText("world");
      expect(input).toHaveAttribute("aria-describedby", "hello_error");
    });

    it("should call onBlur", () => {
      const { getByLabelText } = setup(
        <TestingWrapper translations={{ Search: "Search" }}>
          <InputTemplate
            id={"hello"}
            label={"world"}
            name={"hello"}
            type={"text"}
            value={"John Doe"}
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
            name={"hello"}
            type={"text"}
            value={"John Doe"}
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
            name={"hello"}
            type={"text"}
            value={"John Doe"}
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
