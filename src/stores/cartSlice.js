import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity, price } = action.payload;
      const existingProductIndex = state.items.findIndex((item) => item.id === id);
      if (existingProductIndex !== -1) {
        state.items[existingProductIndex].quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice += quantity * price;
    },
    removeFromCart: (state, action) => {
      const { id, quantity, price } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalPrice -= quantity * price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
