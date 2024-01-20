import { CaretLeftIcon, CaretRightIcon } from "../Icon";
import { PageButton, StyledPagination } from "./styles";

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: Props) => {
  const maxVisiblePages = 5;
  if (totalPages <= 1) {
    return <></>;
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(
      <li key={1} className={currentPage === 1 ? "active" : ""}>
        <PageButton onClick={() => onPageChange(1)}>1</PageButton>
      </li>
    );

    let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 3);

    if (
      currentPage > Math.floor(maxVisiblePages / 2) + 1 &&
      totalPages > maxVisiblePages
    ) {
      pageNumbers.push(
        <li key="ellipsisStart" className="ellipsis">
          <PageButton disabled={true}>...</PageButton>
        </li>
      );

      startPage = Math.max(2, currentPage - 1);
      endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 3);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <PageButton onClick={() => onPageChange(i)}>{i}</PageButton>
        </li>
      );
    }

    if (
      totalPages - currentPage > Math.floor(maxVisiblePages / 2) &&
      totalPages > maxVisiblePages
    ) {
      pageNumbers.push(
        <li key="ellipsisEnd" className="ellipsis">
          <PageButton disabled={true}>...</PageButton>
        </li>
      );
    }

    pageNumbers.push(
      <li
        key={totalPages}
        className={currentPage === totalPages ? "active" : ""}
      >
        <PageButton onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </PageButton>
      </li>
    );

    return pageNumbers;
  };

  return (
    <StyledPagination>
      <li>
        <PageButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <CaretRightIcon />
        </PageButton>
      </li>
      {renderPageNumbers()}
      <li>
        <PageButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <CaretLeftIcon />
        </PageButton>
      </li>
    </StyledPagination>
  );
};

export default Pagination;
