import { ReactElement } from "react";
import userEvent from "@testing-library/user-event";
import { fireEvent, render } from "@testing-library/react";
import InputTemplate, { InputTemplateProps } from "./InputTemplate";
import TestingWrapper from "../../../../utils/TestingWrapper";

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

    const setup = (jsx: ReactElement<InputTemplateProps>) => {
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
            label={"world"}
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
            errorMessage={"Has Error"}
            label={"world"}
            type={"text"}
            value={"John Doe"}
            onChange={MockChange}
          />
        </TestingWrapper>
      );
      expect(getByText("Has Error")).toBeInTheDocument();
      const input = getByLabelText("world");
      expect(input).toHaveAttribute("aria-describedby");
    });

    it("should call onBlur", () => {
      const { getByLabelText } = setup(
        <TestingWrapper translations={{ Search: "Search" }}>
          <InputTemplate
            id={"hello"}
            label={"world"}
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

    it("should call onFocus", async () => {
      const { user, getByLabelText } = setup(
        <TestingWrapper translations={{ Search: "Search" }}>
          <InputTemplate
            id={"hello"}
            label={"world"}
            type={"text"}
            value={"John Doe"}
            onChange={MockChange}
            onFocus={MockFocus}
          />
        </TestingWrapper>
      );
      const input = getByLabelText("world");
      await user.type(input, "John Doe");
      expect(MockFocus).toBeCalled();
    });
  });
});
