import styled from "styled-components";

export const StyledMessage = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: -1px;
    color: ${(props) => props.color};
`;