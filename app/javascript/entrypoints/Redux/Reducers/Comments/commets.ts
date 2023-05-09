import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "../../Services/Comment";

type commentsState = {
  comments: Comments[];
  error: undefined | string;
  isLoaded: "idle" | "pending" | "succeeded" | "failed";
}

interface Comments {
  text: string;
  likes_counter: number;
  user_id: number;
  post_id: number;
  id: number;
}

const initialState = {
  comments: [],
  error: "",
  isLoaded: "idle",
} as  commentsState;

const fetchCommentsReducer: any = createSlice({
  name: "Fetch Comments",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.isLoaded = "pending";
    });
    builder.addCase(
      fetchComments.fulfilled, (state, payload ) => {
        state.comments = payload;
        state.isLoaded = "succeeded";
      }
    );
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoaded = "failed";
    });
  },
});
export default fetchCommentsReducer;
