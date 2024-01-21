import { Container, Image, TextContainer } from "./styles";

interface CardProps {
  imageURL: string;
  title: string;
  description: string
}

const LargeCard = ({ imageURL, title, description }: CardProps) => {
  return (
    <Container>
      <Image src={imageURL} alt={title} />
      <TextContainer>
        <h3>{title}</h3>
        <p>{description}</p>
      </TextContainer>
    </Container>
  );
};

export default LargeCard;
