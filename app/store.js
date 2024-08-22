import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "../src/features/toast/toastSlice.js";
import headerReducer from "../src/features/header/headerSlice";
import userReducer from "../src/features/user/userSlice";

export const nerdStore = configureStore({
  reducer: {
    toastReducer,
    headerReducer,
    userReducer,
  },
});
