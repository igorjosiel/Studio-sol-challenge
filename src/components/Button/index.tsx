import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

const Button = ({ text, ...props }: ButtonProps) => {
    return <StyledButton {...props}>{text}</StyledButton>;
};

export default Button;