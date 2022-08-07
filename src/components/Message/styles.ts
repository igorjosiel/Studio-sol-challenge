import styled from "styled-components";

export const StyledMessage = styled.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: -1px;
    color: ${(props) => props.color};
`;