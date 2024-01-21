import { ButtonHTMLAttributes } from "react";
import { IconProps } from "../../types";

export type Appearance = "primary" | "secondary" | "link";
type Spacing = "default" | "compact" | "none";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: Appearance;
  spacing?: Spacing;
  fullWidth?: boolean;
  Icon?: (props: IconProps) => JSX.Element;
}

export interface ButtonStyleProps {
  appearance: Appearance;
  spacing: Spacing;
  fullWidth: boolean;
}

export const padding: { [key in Spacing]: string } = {
  default: `8px 16px`,
  compact: `4px 8px`,
  none: "0",
};
