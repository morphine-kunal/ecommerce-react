import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


import { createSelector } from '@reduxjs/toolkit';

export const selectCartItemsCount = createSelector(
  (state) => state.cart.items,
  (items) => items.length
);


const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
