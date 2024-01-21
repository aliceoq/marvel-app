import styled from "styled-components";

const Title = styled.h1``;

const Flex = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: 500px) {
    align-items: center;
    flex-direction: column;
  }
`;

const FlexColumn = styled(Flex)`
  flex-direction: column;
  gap: 32px;
`;

const Form = styled.form`
  display: flex;
  gap: 16px;
  width: 100%;
  
  @media (max-width: 400px) {
    align-items: center;
    flex-direction: column;
  }
`;

export { Title, Flex, FlexColumn, Form };
