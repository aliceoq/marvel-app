import { useDispatch, useSelector } from "react-redux";
import { HeaderContainer, Links, MediumLinks, SmallLinks } from "./styles";
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
      Theme
    </Button>
  );

  return (
    <HeaderContainer>
      <h1>
        <a onClick={() => navigate("/")}>Marvel APP</a>
      </h1>
      <Links>
        {children}
        {ThemeButton}
      </Links>
      <MediumLinks>
        <Dropdown Icon={MenuIcon}>{children}</Dropdown>
        {ThemeButton}
      </MediumLinks>
      <SmallLinks>
        <Dropdown Icon={MenuIcon}>
          {children}
          {ThemeButton}
        </Dropdown>
      </SmallLinks>
    </HeaderContainer>
  );
};

export default Header;
