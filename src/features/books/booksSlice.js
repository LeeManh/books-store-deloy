import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

import {
  selectFilterCategory,
  selectFilterRate,
  selectFilterPrices,
} from "../filter/filterSlice";
import { stringToSlug } from "../../unity";

//action from UI to Saga middleware
export const REQUEST_FETCH_ALL_BOOKS = "REQUEST_FETCH_ALL_BOOKS";
export const REQUEST_FETCH_BOOK = "REQUEST_FETCH_BOOK";
export const requestFetchBook = (id) => {
  return {
    type: REQUEST_FETCH_BOOK,
    payload: {
      id,
    },
  };
};

const initialState = {
  listBooks: [],
  status: "idle", // "idle" || "loading" || "succeeded" || "failed",
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    startFetchAllBooks(state, action) {
      state.status = "loading";
    },
    succeededFecthAllBooks(state, action) {
      state.status = "succeeded";
      state.listBooks = action.payload;
    },
    failedFetchAllBooks(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

//actions
export const {
  startFetchAllBooks,
  succeededFecthAllBooks,
  failedFetchAllBooks,
} = booksSlice.actions;

//selector

export const selectBooks = (state) => state.books.listBooks;
export const selectStatusBooks = (state) => state.books.status;
export const selectErrorBooks = (state) => state.books.error;

export const selectBookById = createSelector(
  [selectBooks, (state, idBook) => idBook],
  (listBooks, idBook) => {
    return listBooks.find((book) => book.id === Number(idBook));
  }
);
export const selectBookByCategory = createSelector(
  [selectBooks, (state, category) => category],
  (listBooks, category) =>
    listBooks.filter((book) => book.category === category)
);

export const getSimilarBooks = createSelector(
  [selectBooks, (state, params) => params],
  (listBooks, params) => {
    const { category, id } = params;

    return listBooks.filter(
      (book) => book.category === category && book.id !== Number(id)
    );
  }
);

//filter
export const selectBooksFilter = createSelector(
  [selectBooks, selectFilterCategory, selectFilterRate, selectFilterPrices],
  (listBooks, category, rate, prices) => {
    return listBooks.filter(
      (book) =>
        (!category ? true : book.category === category) &&
        (!rate ? true : +book.rate >= rate) &&
        (!prices
          ? true
          : +book.price >= prices.min && +book.price <= prices.max)
    );
  }
);
//search
export const selectBookSearch = createSelector(
  [selectBooks, (state, text) => text],
  (books, text) =>
    books.filter((book) => {
      const titleConvert = stringToSlug(book.title.toLowerCase());
      const textConvert = stringToSlug(text.toLowerCase());

      return titleConvert.includes(textConvert);
    })
);

//reducer
export default booksSlice.reducer;
