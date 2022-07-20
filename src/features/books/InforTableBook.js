import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  max-width: 900px;
  color: rgb(36, 36, 36);
  display: inline-block;
  border-radius: 5px;
  overflow: hidden;
`;
const TableBody = styled.tbody`
  display: block;
`;

const TableRow = styled.tr`
  display: flex;

  &:nth-child(2n) {
    background-color: rgb(250, 250, 250);
  }
`;

const TableTd = styled.td`
  padding: 10px 20px;
  font-size: 13px;

  &:first-child {
    color: rgb(79, 79, 79);
    font-weight: 500;
    width: 200px;
    background-color: rgb(239, 239, 239);
  }

  &:nth-child(2) {
    padding-left: 20px;
    flex: 1;
  }
`;
const tableTitle = {
  company: "Công ty phát hành",
  size: "Kích thước",
  translator: "Dịch Giả",
  "cover-type": "Loại bìa",
  "number-page": "Số trang",
  "publishing-company": "Nhà xuất bản",
};

const DetailsTableBook = ({ book }) => {
  const renderTable = Object.entries(tableTitle).map(([key, val]) => {
    if (!book.infor[key]) return;

    return (
      <TableRow key={key}>
        <TableTd>{val}</TableTd>
        <TableTd>{book.infor[key]}</TableTd>
      </TableRow>
    );
  });

  return (
    <Table>
      <TableBody>{renderTable}</TableBody>
    </Table>
  );
};

export default DetailsTableBook;
