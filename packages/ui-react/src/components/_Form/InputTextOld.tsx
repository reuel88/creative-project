import { FC } from "react";
import { IInputProps } from "./_InputContext";
import InputTemplate from "./InputTemplate";

const InputTextOld: FC<IInputProps> = ({ ...rest }) => {
  return (
    <>
      <InputTemplate type={"text"} {...rest} />
    </>
  );
};

export default InputTextOld;
