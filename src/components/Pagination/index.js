import React from "react";
import { Pagination as PaginationAntd } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectBooksFilter } from "../../features/books/booksSlice";

const Pagination = () => {
  const navigate = useNavigate();

  const listBooks = useSelector(selectBooksFilter);

  const handleChange = (value) => {
    // navigate()
    navigate(`?page=${value}`);
  };

  return (
    <PaginationAntd
      defaultCurrent={1}
      total={listBooks.length}
      pageSize={5}
      onChange={handleChange}
    />
  );
};

export default Pagination;
