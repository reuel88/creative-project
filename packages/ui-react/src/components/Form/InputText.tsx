import { FC } from "react";
import InputTemplate, { IInputTemplateProps } from "./InputTemplate";

export type TInputTextProps = Omit<IInputTemplateProps, "type">;

const InputText: FC<TInputTextProps> = ({ ...rest }) => {
  return (
    <>
      <InputTemplate type={"text"} {...rest} />
    </>
  );
};

export default InputText;
