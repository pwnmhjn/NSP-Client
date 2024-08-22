import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload

        },
        removeUser: (state, action) => {
            state.user = action.payload

        }
    }
})


export const selectUser = (state) => state.userReducer.user;
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;