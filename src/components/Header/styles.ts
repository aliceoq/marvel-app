import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 999;

  height: 40px;
  width: 100%;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};

  border-bottom: 1px solid ${(props) => props.theme.border};

  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding: 16px;
`;

const Links = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 832px) {
    display: none;
  }
`;

const MediumLinks = styled.div`
  display: none;

  @media (max-width: 832px) {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const SmallLinks = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  height: 40px;
  width: auto;
`;

export { HeaderContainer, Links, MediumLinks, SmallLinks, Logo };
