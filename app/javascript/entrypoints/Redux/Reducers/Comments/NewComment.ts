import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { postComment } from '../../Services/Comment';


interface State {
    newcomment: {}
    error: undefined | string | unknown
    isLoaded: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    newcomment: {},
    error: "",
    isLoaded: 'idle'
} as State;

const postCommentReducer = createSlice({
    name: "Post Comment",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(postComment.pending, (state) => {
            state.newcomment = {},
            state.error = ""
            state.isLoaded = 'pending'
        })
        builder.addCase(postComment.fulfilled, (state, {payload}: PayloadAction) => {
            state.newcomment = payload;
            state.error = ""
            state.isLoaded = 'succeeded'
        })
        builder.addCase(postComment.rejected, (state, action) => {
            state.newcomment = {},
            state.error = action.error.message
            state.isLoaded = 'failed'
        })
        
    }
})

export default postCommentReducer.reducer