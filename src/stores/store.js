import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favReducer from "./favSlice";


import { createSelector } from '@reduxjs/toolkit';

export const selectCartItemsCount = createSelector(
  (state) => state.cart.items,
  (items) => items.length
);

export const selectFavItemsCount = createSelector(
  (state) => state.favItem.items,
  (items) => items.length
)


const store = configureStore({
  reducer: {
    cart: cartReducer,
    favItem: favReducer,
  },
});

export default store;
