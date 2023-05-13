import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, forwardRef } from "react";
import InputTemplate, {
  IComponentTypeProps,
  IInputTemplateProps,
} from "../InputTemplate";

export type TInputEmailProps = Omit<IInputTemplateProps, "type">;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LeftComponent: FC<IComponentTypeProps> = ({ error, ...rest }) => {
  return (
    <div {...rest}>
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
};

const InputEmail = forwardRef<HTMLInputElement, TInputEmailProps>(
  ({ ...rest }, ref) => {
    return (
      <>
        <InputTemplate
          type={"email"}
          leftComponent={LeftComponent}
          ref={ref}
          {...rest}
        />
      </>
    );
  }
);

export default InputEmail;
