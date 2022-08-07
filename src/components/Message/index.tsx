import { MessageProps } from "./types";
import { StyledMessage } from "./styles";

function InfoMessage({ message, ...props }: MessageProps) {
    return (
        <>
            <StyledMessage {...props} data-testid="info_message">
                {message}
            </StyledMessage>
        </>
    );
}

export default InfoMessage;