import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { lsActions } from "../../helpers/lsActions";

type Props = {
  user: {};
};

export const postUser = createAsyncThunk("Post/User", async (userData) => {
  try {
    const res = await axios.post(`/api/v1/users/`, userData);
    const data = await res.data;
    lsActions.setToken(data.jwt);
    return data;
  } catch (e) {
    if (e.toJSON().message === 'Network Error') {
      throw new Error('No Internet Or Server is not running');
    }else{
      throw new Error(e.response.data.error);
    }
  }
});

export const fetchUsers = createAsyncThunk("Fetch/Users", async () => {
  try {
    const res = await axios.get("/api/v1/users/");
    const data = await res.data;
    console.log("User Data :", data);
    return data;
  } catch (e) {
    if (e.toJSON().message === 'Network Error') {
      throw new Error('No Internet Or Server is not running');
    }else{
      throw new Error(e.response.data.error);
    };
  }
});

export const fetchUser: any = createAsyncThunk("Fetch/User", async (user) => {
  try {
    const res = await axios.get(`/api/v1/users/${user}`);
    const data = await res.data;
    return data;
  } catch (e) {
    if (e.toJSON().message === 'Network Error') {
      throw new Error('No Internet Or Server is not running');
    }else{
      throw new Error(e.response.data.error);
    }
  }
});

export const EditAccount = createAsyncThunk(
  "Update/Users",
  async ({ user }: Props) => {
    try {
      const res = await axios.patch(`/api/v1/users/${user}`);
      const data = res.data;
      return data;
    } catch (e) {
      if (e.toJSON().message === 'Network Error') {
        throw new Error('No Internet Or Server is not running');
      }else{
        throw new Error(e.response.data.error);
      }
    }
  }
);

export const DeleteAccount = createAsyncThunk("User/Delete", async (user) => {
  try {
    const res = await axios.delete(`/api/v1/users/${user}`);
    const data = await res.data;
    return data;
  } catch (e) {
    if (e.toJSON().message === 'Network Error') {
      throw new Error('No Internet Or Server is not running');
    }else{
      throw new Error(e.response.data.error);
    }
  }
});

export const LoginUser = createAsyncThunk(
  "Users/Login",
  async (loginCredentials) => {
    try {
      const res: any = await axios.post(`/api/v1/login`, loginCredentials, {
        headers: {
          Authorization: lsActions.getToken(),
        },
      });
      const data = await res.data;
      lsActions.setToken(data.jwt);
      lsActions.setUser(data.user.id);
      console.log("logged in Data: ", data);
      return data;
    } catch (e) {
      if (e.toJSON().message === 'Network Error') {
        throw new Error('No Internet Or Server is not running');
      }else{
        throw new Error(e.response.data.error);
      }
      
    }
  }
);

export const LogoutUser =  () => {
  lsActions.removeToken();
  lsActions.removeUser();
  window.location.reload();
  window.history.pushState({}, "", "/");
}
