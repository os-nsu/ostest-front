import { useState } from 'react';

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;

  const handleNextPage = (load: (page: number) => void) => {
    if (!isLastPage) {
      load(currentPage + 1);
    }
  };

  const handlePrevPage = (load: (page: number) => void) => {
    if (!isFirstPage) {
      load(currentPage - 1);
    }
  };

  const setPages = (last: boolean, first: boolean, totalPages: number) => {
    setIsLastPage(last);
    setIsFirstPage(first);
    setTotalPages(totalPages);
  };

  return {
    pageSize,
    currentPage,
    setPages,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
    isFirstPage,
    isLastPage,
  };
};
