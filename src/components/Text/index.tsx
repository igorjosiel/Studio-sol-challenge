import TextProps from "./types";
import StyledText from "./styles";

const Text = ({ message, ...props }: TextProps) => {
    return <StyledText {...props}>{message}</StyledText>;
}

export default Text;