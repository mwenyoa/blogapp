import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { newPost } from '../../Services/Post';


interface State  {
    newpost: {},
  isLoaded: 'idle' | 'pending' | 'succeeded' | 'failed'
error: undefined | string
}

const initialState = {
    newpost: {},
    isLoaded: 'idle',
    error: ''
} as State;

const newPostReducer = createSlice({
    name: "Create Post",
    initialState,
    reducers: {},
   extraReducers: (builder) => {
     builder.addCase(newPost.pending, (state) => {
        state.newpost = {};
        state.isLoaded = 'pending'
     })
     builder.addCase(newPost.fulfilled, (state, {payload}: PayloadAction) => {
        state.newpost = payload;
        state.isLoaded = 'succeeded';
     })
     builder.addCase(newPost.rejected, (state, action) => {
        state.newpost = {}
        state.isLoaded = 'failed'
        state.error = action.error.message;
     })
   }
})

export default newPostReducer.reducer