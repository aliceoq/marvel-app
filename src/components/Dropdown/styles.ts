import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const InnerContainer = styled.div`
  position: absolute;

  top: 100%;
  right: 0;
  z-index: 9999;

  width: max-content;

  display: flex;
  flex-direction: column;

  padding: 8px;
  gap: 8px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.border};

  background-color: ${(props) => props.theme.background};
`;

export { Container, InnerContainer };