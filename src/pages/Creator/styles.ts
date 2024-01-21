import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 900px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;

export { Container, CardContainer };
