import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: max-content;
  height: max-content;
`;

const InnerContainer = styled.div<{ direction: 'left' | 'right'}>`
  position: absolute;

  right: ${(props) => props.direction === 'left' ? 'auto' : '0'};
  left: ${(props) => props.direction === 'right' ? 'auto' : '0'};
  z-index: 9999;

  width: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px;
  gap: 8px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.border};

  background-color: ${(props) => props.theme.background};
`;

export { Container, InnerContainer };