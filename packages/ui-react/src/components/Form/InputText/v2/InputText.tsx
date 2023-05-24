import { FC } from "react";
import InputTemplate from "../../InputTemplate";
import { InputTemplateProps } from "../../InputTemplate/v2";

const InputText: FC<InputTemplateProps> = (props) => {
  return (
    <>
      <InputTemplate.V2 type={"text"} {...props} />
    </>
  );
};

export default InputText;
