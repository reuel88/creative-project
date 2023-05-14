import { forwardRef } from "react";
import InputTemplate, { IInputTemplateProps } from "../InputTemplate";

export type TInputTextProps = Omit<
  IInputTemplateProps,
  "containerTopClasses" | "type"
>;

const InputText = forwardRef<HTMLInputElement, TInputTextProps>(
  ({ ...rest }, ref) => {
    return (
      <>
        <InputTemplate type={"text"} ref={ref} {...rest} />
      </>
    );
  }
);

export default InputText;
