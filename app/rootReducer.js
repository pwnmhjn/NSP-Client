import { combineReducers } from "@reduxjs/toolkit";
import toastReducer from "../features/toast/toastSlice";
import headerReducer from "../features/header/headerSlice";
import userReducer from '../features/user/userSlice'

const rootReducer = combineReducers({
    toast: toastReducer,
    header: headerReducer,
    user: userReducer
});

export default rootReducer;
