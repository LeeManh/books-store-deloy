import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  rate: "",
  prices: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    categoryChange(state, action) {
      state.category = action.payload;
    },
    rateChange(state, action) {
      state.rate = action.payload;
    },
    pricesChange(state, action) {
      state.prices = action.payload;
    },
  },
});

export const { categoryChange, rateChange, pricesChange } = filterSlice.actions;

export const selectFilter = (state) => state.filter;

export const selectFilterCategory = (state) => state.filter.category;

export const selectFilterRate = (state) => state.filter.rate;

export const selectFilterPrices = (state) => state.filter.prices;

export const selectFilterSearch = (state) => state.filter.search;

export default filterSlice.reducer;
