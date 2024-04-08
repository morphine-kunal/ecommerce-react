import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favItem",
  initialState: {
    items: [],
  },
  reducers: {
    addToFav: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromFav: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFav, removeFromFav } = favSlice.actions;
const favReducer = favSlice.reducer;
export default favReducer;
