import  { useEffect } from "react";
import useSweetAlert from "../../hooks/sweetAlert";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import { deletePost } from "../../Redux/Services/Post";
import { useAuth } from "../Auth/ProtectedRoutes";

const DeletePost = ({ post_id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { ShowAlert } = useSweetAlert({});
  const { user } = useAuth();
  if (post_id !== undefined) {
    dispatch(deletePost({ user, post_id })).then((res: any) => {
      if (res.payload !== undefined) {
      return  ShowAlert({
          title: "Success",
          text: "Post deleted successfully",
          icon: "success",
          time: 2000,
        });
      }
      if (res.payload === undefined) {
       return ShowAlert({
          title: "Success",
          text: res.error.message,
          icon: "success",
          time: 2000,
        });
      }
    });
  }
};

export default DeletePost; 
