import { render, screen } from "@testing-library/react";
import InputText from "./InputText";
import { IInputTemplateProps } from "./InputTemplate";

jest.mock("./InputTemplate", () => {
  return ({ type }: IInputTemplateProps) => {
    return (
      <>
        <label htmlFor="world">John Doe</label>
        <input type={type} name="hello" id="world" />
      </>
    );
  };
});

describe("<InputText />", () => {
  it("should render correctly", () => {
    render(
      <InputText
        id={""}
        value={""}
        label={""}
        onChange={() => {
          console.log("hello");
        }}
      />
    );

    const input = screen.getByLabelText("John Doe");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "hello");
    expect(input).toHaveAttribute("type", "text");
  });
});
