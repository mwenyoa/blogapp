import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../Services/Post";

interface Posts {
  title: string;
  text: string;
  comments_counter: number;
  likes_counter: number;
  user_id: number;
  id: number;
  created_at: string;


  user: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    bio: string;
    posts_counter: number;
  };
}

type State = {
  userposts: Posts;
  error: string | undefined;
  isLoaded: "idle" | "pending" | "succeeded" | "failed";
};

const initialState = {
  userposts: {},
  error: "",
  isLoaded: "idle",
} as State;

const getUserPostsReducer = createSlice({
  name: "Fetch User Posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoaded = "pending";
    });
    builder.addCase(getPosts.fulfilled, (state, { payload }:PayloadAction) => {
      console.log("Payload: ", payload);
      state.userposts = payload;
      state.isLoaded = "succeeded";
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoaded = "failed";
      state.error = action.error.message;
    });
  },
});

export default getUserPostsReducer.reducer;
