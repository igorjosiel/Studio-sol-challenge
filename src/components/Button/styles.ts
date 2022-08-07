import styled from "styled-components";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
    background: linear-gradient(180deg, #ef6c00 0%, #c0661c 100%);
    color: #fff;
    border: none;
    border-radius: 4px;
    width: ${props => props.width ? props.width : '80px'};
    height: ${props => props.height ? props.height : '100%'};;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    
    &:disabled {
        background: #ddd;
    }
    &:focus {
        border: 1px solid #ff6600;
    }
    &:hover {
        box-shadow: 1px 1px 4px 1px #888888;
    }
`;