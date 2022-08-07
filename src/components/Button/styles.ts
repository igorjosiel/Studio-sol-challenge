import styled from "styled-components";

export const StyledButton = styled.button`
    background: linear-gradient(180deg, #ef6c00 0%, #c0661c 100%);
    color: #fff;
    border: none;
    border-radius: 4px;
    width: 80px;
    height: 100%;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    
    &:disabled {
        background: #ddd;
    }

    &:hover {
        box-shadow: 1px 1px 4px 1px #888888;
    }
`;