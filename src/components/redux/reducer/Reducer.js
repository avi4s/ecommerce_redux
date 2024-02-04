import { createSlice } from "@reduxjs/toolkit";

const addReducer = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { title, price, images } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.title === title
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items = [...state.items, { title, price, images, quantity: 1 }];
      }
    },
    removeFromCart: (state, action) => {
      const { title } = action.payload;
      state.items = state.items.filter((item) => item.title !== title);
    },
    updateQuantity: (state, action) => {
      const { title, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.title === title);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});
export const { addToCart, removeFromCart, updateQuantity } = addReducer.actions;
export default addReducer.reducer;
