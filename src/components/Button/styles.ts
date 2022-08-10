import styled from "styled-components";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => props.background};
  color: #fff;
  border: none;
  border-radius: 4px;
  width: ${(props) => (props.width ? props.width : "80px")};
  height: ${(props) => (props.height ? props.height : "100%")};
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  cursor: ${props => props.cursor};

  &:focus {
    border: 1px solid #ff6600;
  }
  &:hover {
    box-shadow: ${props => props.boxShadow};
  }
`;
