import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 64px;
  padding-top: 120px;
  margin: auto;

  max-width: 1280px;
  width: 100%;
  width: calc(100% - 128px);
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export { Container, Content, ContentSection, Flex };
