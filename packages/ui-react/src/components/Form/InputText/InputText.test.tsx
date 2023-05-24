import { render, screen } from "@testing-library/react";
import InputText from "./InputText";
import { IInputTemplateProps } from "../InputTemplate";

jest.mock("../InputTemplate", () => {
  return ({ id, type, label, ...rest }: IInputTemplateProps) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} {...rest} />
      </>
    );
  };
});

describe("<InputText />", () => {
  it("should render correctly", () => {
    const MockChange = jest.fn();

    render(
      <InputText
        id={"world"}
        label={"John Doe"}
        name={"hello"}
        value={"John"}
        onChange={MockChange}
      />
    );

    const input = screen.getByLabelText("John Doe");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "hello");
    expect(input).toHaveAttribute("type", "text");
  });
});
