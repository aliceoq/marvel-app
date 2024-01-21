import styled from "styled-components";

const StyledLayout = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};

  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  margin: auto;
  padding: 64px;
  padding-top: 120px;

  max-width: 1280px;
  width: calc(100% - 128px);

  align-items: center;
  justify-content: flex-start;

  @media (max-width: 640px) {
    padding: 32px;
    padding-top: 120px;
    width: calc(100% - 64px);
  }
`;

export { StyledLayout, ContentLayout };
