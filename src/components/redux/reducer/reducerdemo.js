import { createSlice } from "@reduxjs/toolkit";

const addReducer = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      //   state.items = [...state.items, action.payload];
      const { title, price, images } = action.payload;
      console.log("///", title);
      //   const existingItem = state.items.find((item) => item.title === title);

      //   if (!existingItem) {
      //     state.items = [...state.items, { title, price, images }];
      //   }
      const existingItemIndex = state.items.findIndex(
        (item) => item.title === title
      );
      console.log("???", existingItemIndex);
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
  },
});
export const { addToCart, removeFromCart } = addReducer.actions;
export default addReducer.reducer;
