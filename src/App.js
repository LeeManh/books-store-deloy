import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from "./globalStyles";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import DetailsBookPage from "./pages/DetailsBookPage";
import CartPage from "./pages/CartPage";
import SearchResultPage from "./pages/SearchResultPage";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="books">
            <Route path=":idBook" element={<DetailsBookPage />} />
          </Route>

          <Route path="search" element={<SearchResultPage />} />

          <Route path="cart" element={<CartPage />} />

          <Route path="*" element={<div>Missing..</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
