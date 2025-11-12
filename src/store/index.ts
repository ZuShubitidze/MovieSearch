import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favouritesSlice";

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

// Define the RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
