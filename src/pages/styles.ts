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

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export { Container, CardContainer, SpinnerContainer };
