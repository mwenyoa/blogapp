import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getPost } from "../../Services/Post";

interface State {
    userpost: Posts;
  error: string | undefined;
  isLoaded: "idle" | "pending" | "succeeded" | "failed";
}

interface Posts {
  title: string;
  text: string;
  comments_counter: number;
  likes_counter: number;
  user_id: number;
  id: number;
  user: {
    firstname: string;
    lastname: string;
    email: string;
    bio: string;
    posts_counter: number;
    id: number;
    photo: string;
  },
  comments: [
    {
    id: number,
    text: string,
    user_id: number,
    post_id: number
    }
  ]
}

const initialState = {
  userpost: {},
  error: "",
  isLoaded: "idle",
} as State;

const getPostReducer = createSlice({
  name: "Fetch Post",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state) => {
      state.isLoaded = "pending";
    });
    builder.addCase(getPost.fulfilled, (state, { payload }) => {
      state.userpost = payload;
      state.isLoaded = "succeeded";
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.isLoaded = "failed";
      state.error = action.error.message;
    });
  },
});

export default getPostReducer.reducer;
