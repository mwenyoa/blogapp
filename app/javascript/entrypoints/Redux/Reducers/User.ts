import { createSlice } from "@reduxjs/toolkit";
import { postUser } from "../Services/User";

type slice = {
    newuser: {},
    error: string | undefined,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState = {
    newuser: {},
    error: "",
    loading: 'idle'
} as slice

const postUserSlice = createSlice({
    name: "Register User", 
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(postUser.pending, (state) => {
            state.loading = "pending"
        })
        builder.addCase(postUser.fulfilled, (state, payload) => {
            state.newuser = payload;
            state.loading ="succeeded"
        })
        builder.addCase(postUser.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.error.message
        })
    }
})

export default postUserSlice.reducer;