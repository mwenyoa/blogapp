import { createSlice } from '@reduxjs/toolkit';
import { deletePost } from '../../Services/Post';

type postType = {
    post: {}, 
    isLoaded: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    post: {},
    isLoaded: 'idle'
} as postType

const deletePostReducer = createSlice({
    name: "Delete Post",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(deletePost.pending, (state) => {
            state.isLoaded = 'pending'
        })
        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.isLoaded = 'succeeded';
            state.post = { ...action.payload}
        })
        builder.addCase(deletePost.rejected, (state, action) => {
            state.isLoaded = 'failed';
            state.post = action.error.message;
        })
    }
})

export default deletePostReducer.reducer;