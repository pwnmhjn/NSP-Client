import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "Profile",
    initialState: {
        profile: null,
        accessToken: null
    },
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload
        },
        removeProfile: (state, action) => {
            state.profile = action.payload
            state.accessToken = action.payload

        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },

    }
})


export const selectProfile = (state) => state.auth.profile;
export const selectAccessToken = (state) => state.auth.accessToken
export const { setProfile, removeProfile, setAccessToken } = userSlice.actions;
export default userSlice.reducer;