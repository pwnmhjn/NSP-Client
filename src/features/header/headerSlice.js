import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "authForm",
  initialState: {
    boolean: null,
  },
  reducers: {
    setFalse: (state, action) => {
      state.boolean = action.payload;
    },
    setTrue: (state, action) => {
      state.boolean = action.payload;
    },
  },
});

export const { setFalse, setTrue } = headerSlice.actions;
export default headerSlice.reducer;
