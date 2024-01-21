import styled from "styled-components";

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start; /* Align items at the start of the cross axis */

  word-break: break-word;

  transition: 0.3s;

  width: 100%;
`;

const Image = styled.img`
  width: 250px;
  max-height: 350px;

  flex: 1;

  border-radius: 5px 0 0 5px;

  align-self: center;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  min-width: 300px;
  gap: 16px;
  padding: 16px;
  box-sizing: border-box; /* Include padding in width calculation */
`;

export { Container, Image, TextContainer };
