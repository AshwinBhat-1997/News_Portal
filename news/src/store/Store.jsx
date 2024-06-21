import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/CategorySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
