import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity = 1, price } = action.payload;
      const existingProductIndex = state.items.findIndex((item) => item.id === id);
      if (existingProductIndex !== -1) {
        state.items[existingProductIndex].quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice += quantity * price;
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const { quantity, price } = state.items[itemIndex];
        state.items.splice(itemIndex, 1); // Remove the item from the array
        state.totalPrice -= quantity * price; // Update total price
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
