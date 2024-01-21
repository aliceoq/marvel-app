import { StyledButton } from "./styles";
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
    <StyledButton
      fullWidth={fullWidth}
      {...buttonProps}
      spacing={spacing}
      appearance={appearance}
    >
      {Icon && <Icon width={16} height={15} />}
      {children}
    </StyledButton>
  );
};

export default Button;
