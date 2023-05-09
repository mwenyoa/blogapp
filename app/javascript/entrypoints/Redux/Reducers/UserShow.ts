import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../Services/User";

interface User {
    firstname: string;
    lastname: string;
    email: string;
    bio: string;
    posts_counter: number;
    id: number;
    photo: string;
    posts: [
        {
        title: string;
        text: string;
        comments_counter: number;
        likes_counter: number;
        user_id: number;
        id: number;
        created_at: string;
        comments: [];
        likes: [];
        }
    ];
}



type slice = {
  user: User;
  error: string | undefined | never;
  loading: "idle" | "pending" | "succeeded" | "failed";
};

const initialState = {
  user: {},
  error: "",
  loading: "idle",
} as slice;

const fetchUserSlice = createSlice({
  name: "Fetch User",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchUser.fulfilled, (state,{payload}) => {
      state.user = payload, 
      state.loading = "succeeded";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = "failed"; 
      state.error = action.error.message;
    });
  },
});

export default fetchUserSlice.reducer;
