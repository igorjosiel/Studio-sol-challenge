import styled from "styled-components";
import { InputProps } from "./types";

export const StyledInput = styled.input<InputProps>`
  border: 1px solid #cfcfcf;
  outline: 0;
  border-radius: 4px;
  padding: 14px 12px;
  width: ${props => props.width ? props.width : '250px'};
  height: ${props => props.height};

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:disabled {
    background-color: #f5f5f5;
  }
  &:focus {
    border: 1px solid #ff6600;
  }
  &.guess_input_error {
    border: 1px solid #cc3300;
  }
`;