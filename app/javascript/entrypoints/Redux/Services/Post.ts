import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { lsActions } from "../../helpers/lsActions";

type Props = {
  user_id: number;
  post_id: number;
};

type Paginanated = {
   id: number,
   current_page?: number | undefined;
}

export const newPost = createAsyncThunk("Posts/Create", async (post: any) => {
  try {
    const res = await axios.post(`/api/v1/users/${post.user_id}/posts`, post);
    const dt = await res.data;
    return dt;
  } catch (e: any) {
    console.log("Post error obj", e);
    if (e.toJSON().message === "Network Error") {
      throw new Error("No Internet Or Server is not running");
    } else {
      throw new Error(e.response.data.error);
    }
  }
});

export const getPost = createAsyncThunk("Posts/Get", async ({ user_id, post_id}: Props) => {
  console.log('entered');
  try {
    const res = await axios.get(`/api/v1/users/${user_id}/posts/${post_id}`);
    const dt = await res.data
    return dt;
  } catch (e) {
    console.log("Post error obj", e);
    if (e.toJSON().message === "Network Error") {
      throw new Error("No Internet Or Server is not running");
    } else {
      throw new Error(e.response.data.error);
    }
  }
});
export const getPosts = createAsyncThunk("Posts/Fetchall", async ({ id, currentPage }) => {
  try {
    const res = await axios.get(`/api/v1/users/${id}/posts?page=${currentPage}`);
    const dt = await res.data;
    console.log("user post data", dt);
    
    return dt;
  } catch (e) {
    console.log("Post error obj", e);
    if (e.toJSON().message === "Network Error") {
      throw new Error("No Internet Or Server is not running");
    } else {
      throw new Error(e.response.data.error);
    }
  }
});

export const deletePost = createAsyncThunk("Posts/Fetchall", async ({user_id, post_id}) => {
  try {
    const res = await axios.delete(`/api/v1/users/${user_id}/posts/${post_id}`);
    const dt = await res.data;
    console.log("user post data", dt);
    
    return dt;
  } catch (e) {
    console.log("Post error obj", e);
    if (e.toJSON().message === "Network Error") {
      throw new Error("No Internet Or Server is not running");
    } else {
      throw new Error(e.response.data.error);
    }
  }
});



