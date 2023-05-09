import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../Services/User";

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
    users: User[],
    error: string | undefined,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState = {
    users: [],
    error: "",
    loading: 'idle'
} as  slice

const fetchUsersSlice = createSlice({
    name: "Fetch Users",
    initialState,
    reducers:{},

    extraReducers: (builder)=> {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading ="pending"
        })
        builder.addCase(fetchUsers.fulfilled, (state, {payload}) => {
            state.users = payload;
            state.error = "";
            state.loading = "succeeded"
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = 'failed'
        })
    }
})

export default fetchUsersSlice.reducer;