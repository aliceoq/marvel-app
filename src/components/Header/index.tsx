import { useDispatch, useSelector } from "react-redux";
import {
  HeaderContainer,
  Links,
  Logo,
  MediumLinks,
  SmallLinks,
} from "./styles";
import { MenuIcon, MoonIcon, SunIcon } from "../Icon";
import { flipTheme } from "../../redux/themeSlice";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useSelector(
    (state: { theme: { name: string } }) => state.theme
  );

  const ThemeButton = (
    <Button
      Icon={name === "Light" ? MoonIcon : SunIcon}
      onClick={() => {
        dispatch(flipTheme());
      }}
    >
      Tema
    </Button>
  );

  const ComponentsButton = (
    <Button appearance={"secondary"} onClick={() => navigate("/components")}>
      Componentes
    </Button>
  );

  return (
    <HeaderContainer>
      <Logo
        onClick={() => navigate("/")}
        alt="Marvel APP"
        src="/public/Marvel_Logo.png"
      ></Logo>
      <Links>
        {children}
        {ComponentsButton}
        {ThemeButton}
      </Links>
      <MediumLinks>
        {ComponentsButton}
        {ThemeButton}
        <Dropdown Icon={MenuIcon}>{children}</Dropdown>
      </MediumLinks>
      <SmallLinks>
        <Dropdown Icon={MenuIcon}>
          {children}
          {ComponentsButton}
          {ThemeButton}
        </Dropdown>
      </SmallLinks>
    </HeaderContainer>
  );
};

export default Header;
