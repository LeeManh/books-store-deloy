import React, { useMemo } from "react";
import { Pagination as PaginationAntd } from "antd";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { selectBooksFilter } from "../../features/books/booksSlice";

const Pagination = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const page = useMemo(
    () => Number(new URLSearchParams(search).get("page")) || 1,
    [search]
  );
  // console.log({ page });

  const listBooks = useSelector(selectBooksFilter);

  const handleChange = (value) => {
    // navigate()
    navigate(`?page=${value}`);
  };

  return (
    <PaginationAntd
      defaultCurrent={page}
      current={page}
      total={listBooks.length}
      pageSize={10}
      onChange={handleChange}
    />
  );
};

export default Pagination;
