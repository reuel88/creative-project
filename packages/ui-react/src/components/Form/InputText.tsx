import { FC } from "react";
import { IInputProps } from "./_InputContext";
import InputTemplate from "./InputTemplate";

const InputText: FC<IInputProps> = ({ ...rest }) => {
  return (
    <>
      <InputTemplate type={"text"} {...rest} />
    </>
  );
};

export default InputText;
