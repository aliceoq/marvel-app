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
        <button onClick={() => onPageChange(1)}>1</button>
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
          ...
        </li>
      );

      startPage = Math.max(2, currentPage - 1); // Adjusted start page after ellipsis
      endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 3);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <button onClick={() => onPageChange(i)}>{i}</button>
        </li>
      );
    }

    if (
      totalPages - currentPage > Math.floor(maxVisiblePages / 2) &&
      totalPages > maxVisiblePages
    ) {
      pageNumbers.push(
        <li key="ellipsisEnd" className="ellipsis">
          ...
        </li>
      );
    }

    pageNumbers.push(
      <li
        key={totalPages}
        className={currentPage === totalPages ? "active" : ""}
      >
        <button onClick={() => onPageChange(totalPages)}>{totalPages}</button>
      </li>
    );

    return pageNumbers;
  };

  return (
    <ul className="pagination">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>
      {renderPageNumbers()}
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
