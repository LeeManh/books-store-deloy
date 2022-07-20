import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

//action from UI
export const REQUEST_ADD_TO_CART = "REQUEST_ADD_TO_CART";
export const requestAddToCart = ({ id, quantity }) => {
  return {
    type: "REQUEST_ADD_TO_CART",
    payload: {
      id: Number(id),
      quantity,
    },
  };
};

const initialState = {
  dataCart: [],
  status: "idle", // "idle" || "loading" || "succeeded" || "failed"
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    succeededAddToCart(state, action) {
      state.status = "succeeded";
      const { id } = action.payload;

      const isAlreadyInCart = state.dataCart.some(
        (product) => product.id === id
      );

      if (isAlreadyInCart) {
        return;
      } else {
        state.dataCart.push(action.payload);
      }
    },
    failedAddToCart(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    changeQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingProduct = state.dataCart.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
    deleteProductInCart(state, action) {
      const { id } = action.payload;

      state.dataCart = state.dataCart.filter((product) => product.id !== id);
    },
    deleteAllProductInCart(state) {
      state.dataCart = [];
    },
  },
});
//actions
export const {
  succeededAddToCart,
  failedAddToCart,
  changeQuantity,
  deleteProductInCart,
  deleteAllProductInCart,
} = cartSlice.actions;

//seclectors
export const selectDataCart = (state) => state.cart.dataCart;

export const selectCartById = createSelector(
  [selectDataCart, (state, id) => id],
  (dataCart, id) => dataCart.find((product) => product.id === id)
);

export const selectCartByIds = createSelector(
  [selectDataCart, (state, Ids) => Ids],
  (dataCart, Ids) =>
    //Ids 1 mang chua danh sach cac id
    Ids.map((id) => dataCart.find((product) => product.id === id))
);

export const selectDataBill = (state) => state.bill;

//reducer
export default cartSlice.reducer;
