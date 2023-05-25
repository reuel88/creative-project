import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, memo } from "react";
import InputTemplate from "../../InputTemplate";
import { InputTemplateProps, SideComponentProps } from "../../InputTemplate/v2";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LeftComponent: FC<SideComponentProps> = ({ hasError, ...rest }) => {
  return (
    <div {...rest}>
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
};

const MemoLeftComponent = memo(LeftComponent);

const InputEmail: FC<InputTemplateProps> = (props) => {
  return (
    <>
      <InputTemplate.V2
        type={"email"}
        leftComponent={MemoLeftComponent}
        {...props}
      />
    </>
  );
};

export default InputEmail;
