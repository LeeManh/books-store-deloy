import { combineReducers } from "redux";

import booksReducer from "../features/books/booksSlice";
import cartReducer from "../features/cart/cartSlice";
import filterReducer from "../features/filter/filterSlice";

const rootReducer = combineReducers({
  books: booksReducer,
  cart: cartReducer,
  filter: filterReducer,
});

export default rootReducer;
