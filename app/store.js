import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
// import toastReducer from "../features/toast/toastSlice";
// import headerReducer from "../features/header/headerSlice";
// import userReducer from "../features/user/userSlice";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";




const persistConfig = {
  key: "root",
  storage,
  version: 1
}
const persistedState = persistReducer(persistConfig, rootReducer)

export const nerdStore = configureStore({
  reducer: persistedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});


export const persistor = persistStore(nerdStore)