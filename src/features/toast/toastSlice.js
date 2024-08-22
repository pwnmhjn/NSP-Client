import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: {
    visible: null,
    title: "",
    message: "",
  },
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    throwSuccess: {
      reducer(state, action) {
        state.toast = action.payload;
      },
      prepare(visible, title, message) {
        return {
          payload: {
            visible,
            title,
            message,
          },
        };
      },
    },
    throwFailed: {
      reducer(state, action) {
        state.toast = action.payload;
      },
      prepare(visible, title, message) {
        return {
          payload: {
            visible,
            title,
            message,
          },
        };
      },
    },
    remove: (state) => {
      state.toast.visible = false;
    },
  },
});
export const SelectToast = (state) => state.toastReducer.toast;
export const { throwFailed, throwSuccess, remove } = toastSlice.actions;
export default toastSlice.reducer;

// export const toastSlice = createSlice({
//   name: "toast",
//   initialState,
//   reducers: {
//     throwSuccess: (state, action) => {
//       state.toast.visible = action.payload.visible;
//       state.toast.title = action.payload.title;
//       state.toast.message = action.payload.message;
//     },
//     throwFailed: (state, action) => {
//       state.toast.visible = action.payload.visible;
//       state.toast.title = action.payload.title;
//       state.toast.message = action.payload.message;
//     },
//     remove: (state, action) => {
//       state.toast.visible = action.payload;
//     },
//   },
// });
