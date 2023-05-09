import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type commentprops = {};

export const postComment = createAsyncThunk(
  "Commentss/Create",
  async (commentData) => {
    const { post_id, user_id }: any = commentData;
    try {
      const res = await axios.post(
        `/api/v1/users/${user_id}/posts/${post_id}/comments`,
        commentData
      );
      const dt = await res.data;
      console.log(dt);
      return dt;
    } catch (e) {
      if (e.toJSON().message === "Network Error") {
        throw new Error("No Internet Or Server is not running");
      } else {
        throw new Error(e.response.data.error);
      }
    }
  }
);

export const fetchComment = createAsyncThunk(
  "Comments/Show",
  async (comment_info) => {
    const { comment_id, post_id } = comment_info;
    try {
      const res = await axios.get(
        `/api/v1/posts/${post_id}/comments/${comment_id}`
      );
      const dt = await res.data;
      console.log(dt);
      return dt;
    } catch (e) {
      if (e.toJSON().message === "Network Error") {
        throw new Error("No Internet Or Server is not running");
      } else {
        throw new Error(e.response.data.error);
      }
    }
  }
);

export const fetchComments = createAsyncThunk(
  "Comments/Get Comments",
  async (commentInfo) => {
    const { post_id } = commentInfo;
    try {
      const res = await axios.get(`/api/v1/posts/${post_id}/comments`);
    } catch (e) {
      if (e.toJSON().message === "Network Error") {
        throw new Error("No Internet Or Server is not running");
      } else {
        throw new Error(e.response.data.error);
      }
    }
  }
);

export const deleteComment: any = createAsyncThunk(
  "Comments/Delete",
  async (commentInfo) => {
    const { post_id, comment_id } = commentInfo;
    try {
      const res = await axios.delete(
        `/api/v1/posts/${post_id}/comments/${comment_id}`
      );
      const dt = await res.data;
      console.log(dt);
      return dt;
    } catch (e) {
      if (e.toJSON().message === "Network Error") {
        throw new Error("No Internet Or Server is not running");
      } else {
        throw new Error(e.response.data.error);
      }
    }
  }
);

export const updateComment: any = createAsyncThunk(
  "Comments/Delete",
  async (commentInfo) => {
    const { post_id, comment_id }: any = commentInfo;
    try {
      const res = await axios.delete(
        `/api/v1/posts/${post_id}/comments/${comment_id}`
      );
      const dt = await res.data;
      console.log(dt);
      return dt;
    } catch (e) {
      if (e.toJSON().message === "Network Error") {
        throw new Error("No Internet Or Server is not running");
      } else {
        throw new Error(e.response.data.error);
      }
    }
  }
);
