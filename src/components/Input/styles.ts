import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px solid #cfcfcf;
  outline: 0;
  border-radius: 4px;
  width: 217px;
  padding: 14px 12px;

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