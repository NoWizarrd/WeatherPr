import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { postApiSlice } from "./postsApi";

export default configureStore({
  reducer: {
    counter: counterReducer,
    [postApiSlice.reducerPath]: postApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApiSlice.middleware),
});
