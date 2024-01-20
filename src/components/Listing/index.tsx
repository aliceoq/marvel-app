import { Item } from "../../types";
import Card from "../Card";
import Pagination from "../Pagination";
import { CardContainer, Container } from "./styles";

interface ListingProps {
  page: number;
  totalPages: number;
  items: Item[];
  onPageChange: (page: number) => void;
  onItemClick: (item: Item) => void;
}

const Listing = ({
  page,
  totalPages,
  items = [],
  onPageChange,
  onItemClick,
}: ListingProps) => {
  return (
    <Container>
      <CardContainer>
        {items.map((item: Item, index) => (
          <Card
            key={index}
            title={item.name}
            onClick={() => onItemClick(item)}
            imageURL={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          />
        ))}
      </CardContainer>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Container>
  );
};

export default Listing;
