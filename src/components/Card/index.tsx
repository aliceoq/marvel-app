import { Container, Image, TextContainer } from "./styles";

interface CardProps {
  imageURL: string;
  title: string;
  onClick: () => void;
}

const Card = ({ imageURL, title, onClick }: CardProps) => {
  return (
    <Container onClick={onClick}>
      <Image src={imageURL} alt={title} />
      <TextContainer>
        <h3>{title}</h3>
      </TextContainer>
    </Container>
  );
};

export default Card;
