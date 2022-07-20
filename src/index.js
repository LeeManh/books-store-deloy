import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.min.css";
import { PersistGate } from "redux-persist/integration/react";

import configStore from "./app/store";
import App from "./App";
import { REQUEST_FETCH_ALL_BOOKS } from "./features/books/booksSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

const { store, persistor } = configStore();

store.dispatch({ type: REQUEST_FETCH_ALL_BOOKS });

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
