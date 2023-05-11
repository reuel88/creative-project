import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { IInputProps } from "./_InputContext";
import InputTemplate from "./InputTemplate";

const LeftComponent: FC = (props) => {
  return (
    <div {...props}>
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
};

const InputEmail: FC<IInputProps> = ({ ...rest }) => {
  return (
    <>
      <InputTemplate leftComponent={LeftComponent} type={"email"} {...rest} />
    </>
  );
};

export default InputEmail;
