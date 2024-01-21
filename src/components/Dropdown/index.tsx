import { useState } from "react";
import { IconProps } from "../../types";
import Button from "../Button";
import { Container, InnerContainer } from "./styles";
import { Appearance } from "../Button/types";

interface Props {
  Icon?: (props: IconProps) => JSX.Element;
  name?: string;
  children: React.ReactNode;
  direction?: "left" | "right";
  appearance?: Appearance;
}

const Dropdown = ({
  Icon,
  name,
  appearance = "secondary",
  direction = "right",
  children,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Button
        appearance={appearance}
        Icon={Icon}
        onClick={() => setIsOpen(!isOpen)}
      >
        {name}
      </Button>
      {isOpen && (
        <InnerContainer direction={direction}>{children}</InnerContainer>
      )}
    </Container>
  );
};

export default Dropdown;
