import styled from "styled-components";

const Title = styled.h1``;

const Flex = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

const FlexColumn = styled(Flex)`
  flex-direction: column;
  gap: 32px;
`;

const Form = styled.form`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export { Title, Flex, FlexColumn, Form };
