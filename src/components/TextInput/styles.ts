import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
`;

const Input = styled.input`
  font-size: ${(props) => props.theme.font.size.regular};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  border: 2px solid ${(props) => props.theme.border};
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.5s;
  outline: none;
  width: 100%;

  &:hover {
    border: 2px solid ${(props) => props.theme.highlight};
  }

  &:focus {
    border: 2px solid ${(props) => props.theme.highlight};
  }

  &:active {
    border: 2px solid ${(props) => props.theme.highlight};
  }
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 4px;
  color: ${(props) => props.theme.colors.textDetails};
`;

const HelpMessage = styled.label`
  display: block;
  font-size: 12px;
  margin-top: 4px;
  color: ${(props) => props.theme.colors.border};
`;

export { InputContainer, Input, Label, HelpMessage };
