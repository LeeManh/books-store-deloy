import axios from "./clientAxios";

const getAllBooks = async () => {
  const url = "products";
  return await axios.get(url);
};

const getBookById = async (idBook) => {
  const url = `products/${idBook}`;
  return await axios.get(url);
};

export const booksApi = {
  getAllBooks,
  getBookById,
};
