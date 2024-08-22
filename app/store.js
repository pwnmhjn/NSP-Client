import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "../features/toast/toastSlice";
import headerReducer from "../features/header/headerSlice";
import userReducer from "../features/user/userSlice";

export const nerdStore = configureStore({
  reducer: {
    toastReducer,
    headerReducer,
    userReducer,
  },
});
