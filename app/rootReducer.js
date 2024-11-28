import { combineReducers } from "@reduxjs/toolkit";
import toastReducer from "../src/features/toast/toastSlice";
import headerReducer from "../src/features/header/headerSlice";
import userReducer from '../src/features/user/userSlice'
import chapterReducer from "../src/features/chapters/chapterSlice";

const rootReducer = combineReducers({
    toast: toastReducer,
    header: headerReducer,
    auth: userReducer,
    chap: chapterReducer
});

export default rootReducer;
