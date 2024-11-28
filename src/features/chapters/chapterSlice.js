import { createSlice } from "@reduxjs/toolkit";
// import useAxiosPrivate from "../../hooks/useAxiosPrivate";
// import { selectAccessToken } from "../user/userSlice";
// import { useSelector } from "react-redux";
// import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    chapters: [],
    status: "idle",
    error: null
}

// export const fetchChapters = createAsyncThunk("chapters/fetchChapters", async () => {
//     const accessToken = useSelector(selectAccessToken)
//     const axiosPrivate = useAxiosPrivate()

//     try {

//         const response = await axiosPrivate("/chapters/get-chapters", {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`,
//             },
//             withCredentials: true,
//         });
//         return [...response.data.data]

//     } catch (error) {
//         console.log(error);

//         return error.message

//     }
// })

const chapterSlice = createSlice({
    name: "chapters",
    initialState,
    reducers: {
        setChapters: (state, action) => {
            state.chapters = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchChapters.pending, (state) => {

    //             state.status = "loading"
    //         })
    //         .addCase(fetchChapters.fulfilled, (state, action) => {
    //             state.status = "succeeded"
    //             state.chapters = state.chapters.concat(action.payload)
    //         })
    //         .addCase(fetchChapters.rejected, (state, action) => {
    //             state.status = "failed",
    //                 state.error = action.error.message
    //         })
    // }
})

export const selectChapters = (state) => state.chap.chapters
export const selectChapterById = (state, id) => state.chap.chapters.find(el => el._id == id)
export const { setChapters } = chapterSlice.actions
export default chapterSlice.reducer
