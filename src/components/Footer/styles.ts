import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.border};
  color: ${(props) => props.theme.color};

  padding: 32px;
  bottom: 0;

  display: flex;
  justify-content: space-evenly;
  text-align: center;
`;

export { StyledFooter }