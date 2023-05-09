import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../Redux/Services/Post";
import { RootState, AppDispatch } from "../Store";

type Props = {
    user_id: number;
    post_id: number;
};

const useFetchpost = ({user_id, post_id}:Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const post = useSelector((state: RootState) => state.post.userpost)

   useEffect(() => {
      if(post_id && user_id !== undefined){
        const data = {
            user_id,
            post_id
        } as Props;
        dispatch(getPost(data))
      }
   }, [dispatch, post_id, user_id])
   
   return post;
}


export default useFetchpost;