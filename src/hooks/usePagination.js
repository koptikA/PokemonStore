import { useCallback, useState } from 'react';

export const usePagination = (paginationName) => {
  const [currentPage, setCurrentPage] = useState(
    +localStorage.getItem(paginationName) || 1,
  );

  const handleClick = useCallback(
    (selectedPage) => {
      localStorage.setItem(paginationName, selectedPage);
      setCurrentPage(selectedPage);
    },
    [paginationName],
  );

  return {
    onPaginationClick: handleClick,
    currentPage,
  };
};
