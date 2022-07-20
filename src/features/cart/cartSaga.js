import { call, takeLatest, put } from "redux-saga/effects";
import { REQUEST_ADD_TO_CART } from "./cartSlice";

import { succeededAddToCart, failedAddToCart } from "./cartSlice";
import { booksApi } from "../../api/booksApi";

function* addToCart(action) {
  try {
    const response = yield call(booksApi.getBookById, action.payload.id);

    if (response.status === 200) {
      yield put(
        succeededAddToCart({
          ...response.data,
          quantity: action.payload.quantity,
        })
      );
    } else {
      yield put(failedAddToCart(response));
    }
  } catch (error) {
    yield put(failedAddToCart(error));
  }
}

export function* watchAddToCart() {
  yield takeLatest(REQUEST_ADD_TO_CART, addToCart);
}
