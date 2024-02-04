import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/Reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
