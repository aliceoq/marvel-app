import { Outlet } from "react-router";
import Header from "../../components/Header";
import { ContentLayout, StyledLayout } from "./styles";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const Layout = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(
    (state: { user: { isAuthenticated: boolean } }) => state.user
  );

  return (
    <StyledLayout>
      <Header>
        {isAuthenticated ? (
          <>
            <Button
              appearance="secondary"
              onClick={() => navigate("/characters")}
            >
              Personagens
            </Button>
            <Button appearance="secondary" onClick={() => navigate("/comics")}>
              Quadrinhos
            </Button>
            <Button
              appearance="secondary"
              onClick={() => navigate("/criadores")}
            >
              Criadores
            </Button>
          </>
        ) : (
          <></>
        )}
      </Header>
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <Footer>Data provided by Marvel. © 2014 Marvel</Footer>
    </StyledLayout>
  );
};

export default Layout;
