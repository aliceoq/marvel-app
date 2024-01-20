import { ButtonContainer, StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  fullWidth = false,
  Icon,
  appearance = "primary",
  spacing = "default",
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <ButtonContainer fullWidth={fullWidth}>
      <StyledButton {...buttonProps} spacing={spacing} appearance={appearance}>
        {Icon && <Icon width={16} height={15} />}
        {children}
      </StyledButton>
    </ButtonContainer>
  );
};

export default Button;
