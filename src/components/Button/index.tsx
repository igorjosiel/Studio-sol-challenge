import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

const Button = ({ text }: ButtonProps) => {
    return <StyledButton>{text}</StyledButton>;
};

export default Button;