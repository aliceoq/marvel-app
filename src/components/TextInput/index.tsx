import { InputHTMLAttributes } from "react";
import { HelpMessage, Input, InputContainer, Label } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpMessage?: string;
}

const TextInput = ({ label, helpMessage, ...inputProps }: Props) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <Input {...inputProps} />
      {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
    </InputContainer>
  );
};

export default TextInput;
