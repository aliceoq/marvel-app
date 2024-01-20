import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;

  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  word-break: break-word;

  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;

  border-radius: 5px 5px 0 0;
  
  align-self: center;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;

const TextContainer = styled.div`
  padding: 16px;
`;

export { Container, Image, TextContainer };
