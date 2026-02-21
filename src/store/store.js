import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./apis/ProductsApi";
import cartReducer from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

