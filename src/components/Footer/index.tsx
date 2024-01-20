import { StyledFooter } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Footer = ({ children }: Props) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;
