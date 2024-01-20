import styled from "styled-components";
import { ButtonStyleProps, padding } from "./types";

const ButtonContainer = styled.div<{ fullWidth: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "max-content")};
`;

const StyledButton = styled.button<ButtonStyleProps>`
  cursor: pointer;

  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.size.regular};
  font-weight: 500;

  background-color: ${(props) =>
    props.theme.colors.background[props.appearance]};
  color: ${(props) => props.theme.color};

  border-radius: 4px;
  border: none;
  outline: none;

  display: flex;
  text-wrap: nowrap;
  align-items: center;
  justify-content: center;

  gap: 10px;
  padding: ${(props) => padding[props.spacing]};

  &:hover {
    transition: 0.3s;
    background-color: ${(props) => props.theme.colors.hover[props.appearance]};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.active[props.appearance]};
  }
`;

export { ButtonContainer, StyledButton };
