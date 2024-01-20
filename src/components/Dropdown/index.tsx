import { useState } from "react";
import { IconProps } from "../../types";
import Button from "../Button";
import { Container, InnerContainer } from "./styles";

interface Props {
  Icon?: (props: IconProps) => JSX.Element;
  name?: string;
  children: React.ReactNode;
}

const Dropdown = ({ Icon, name, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Button
        appearance={"secondary"}
        Icon={Icon}
        onClick={() => setIsOpen(!isOpen)}
      >
        {name}
      </Button>
      {isOpen && <InnerContainer>{children}</InnerContainer>}
    </Container>
  );
};

export default Dropdown;
