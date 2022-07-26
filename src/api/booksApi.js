import axios from "./clientAxios";

const getAllBooks = async () => {
  const url = "books";
  return await axios.get(url);
};

const getBookById = async (idBook) => {
  const url = `books/${idBook}`;
  return await axios.get(url);
};

export const booksApi = {
  getAllBooks,
  getBookById,
};
