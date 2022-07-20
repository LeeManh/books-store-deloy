import { call, put, takeLatest } from "redux-saga/effects";

import {
  startFetchAllBooks,
  succeededFecthAllBooks,
  failedFetchAllBooks,
  REQUEST_FETCH_ALL_BOOKS,
} from "./booksSlice";
import { booksApi } from "../../api/booksApi";

function* fetchAllBooks() {
  try {
    yield put(startFetchAllBooks());
    const response = yield call(booksApi.getAllBooks);

    if (response.status === 200) {
      yield put(succeededFecthAllBooks(response?.data));
    } else {
      yield put(
        failedFetchAllBooks({
          cod: 404,
          error: "Not found books",
        })
      );
    }
  } catch (error) {
    yield put(failedFetchAllBooks(error));
  }
}

export function* watchFetchAllBooks() {
  yield takeLatest(REQUEST_FETCH_ALL_BOOKS, fetchAllBooks);
}
