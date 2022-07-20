import { all } from "redux-saga/effects";

import { watchFetchAllBooks } from "../features/books/booksSaga";
import { watchAddToCart } from "../features/cart/cartSaga";

export default function* rootSaga() {
  yield all([watchFetchAllBooks(), watchAddToCart()]);
}
