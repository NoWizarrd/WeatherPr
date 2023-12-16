import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./weatherApi";
import citySlice from "./citySlice";
import coordSlice from "./coordSlice";

export const store = configureStore({
  reducer: {
    city: citySlice,
    coordinates: coordSlice,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch