import styled from "styled-components";

const StyledPagination = styled.ul`
  color: ${(props) => props.theme.color};

  list-style-type: none;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;

  margin: 0;
  column-gap: 8px;
`;

const PageButton = styled.button`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.size.regular};

  background-color: transparent;
  color: ${(props) => props.theme.color};

  border: none;
  border-radius: 50%;

  height: 2.5rem;
  width: 2.5rem;
  padding: 0;
  
  transition: 0.3s;

  &:not(:disabled):hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.border};
  }

  .active & {
    background-color: ${(props) => props.theme.highlight};
  }
`;

export { StyledPagination, PageButton };
