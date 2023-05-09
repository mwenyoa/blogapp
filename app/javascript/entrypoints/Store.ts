import { configureStore } from "@reduxjs/toolkit";
import postUserSlice from './Redux/Reducers/User';
import fetchUsersSlice from './Redux/Reducers/userslist';
import fetchUserSlice from './Redux/Reducers/UserShow';
import userLoginSlice from './Redux/Reducers/loggedIn';
import newPostReducer from './Redux/Reducers/Posts/addPost';
import postCommentReducer from './Redux/Reducers/Comments/NewComment';
import fetchCommentsReducer from "./Redux/Reducers/Comments/commets";
import getPostReducer from './Redux/Reducers/Posts/getUserPost';
import getUserPostsReducer from './Redux/Reducers/Posts/getUserPosts';
import deletePostReducer from './Redux/Reducers/Posts/deletePost';

const store = configureStore({
  reducer: {
    newuser: postUserSlice,
    users: fetchUsersSlice,
    user: fetchUserSlice,
    login: userLoginSlice,
    newpost: newPostReducer,
    newcomment: postCommentReducer,
    comments: fetchCommentsReducer,
    posts: getUserPostsReducer,
    post: getPostReducer,
    deletepost: deletePostReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
