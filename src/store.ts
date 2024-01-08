import { configureStore } from "@reduxjs/toolkit";
import ccReducer from "./state/ccSlice";
import settingsReducer from "./state/settingsSlice";

export const store = configureStore({
  reducer: {
    cc: ccReducer,
    settings: settingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
