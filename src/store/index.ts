import { configureStore } from "@reduxjs/toolkit";

import cartReducer, { getTotals, populateCart } from "../slices/cartSlice";
import { productApi } from "../slices/productApi";
import { apiSlice } from "../slices/apiSlice";
import blogsReducer from "../slices/blogSlice";
import usersReducer from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
    blogs: blogsReducer,
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.dispatch(productApi.endpoints.getProducts.initiate());
store.dispatch(apiSlice.endpoints.getUsers.initiate());
store.dispatch(populateCart());
store.dispatch(getTotals());