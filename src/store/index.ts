import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reduсers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch