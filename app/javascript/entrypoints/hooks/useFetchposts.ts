import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../Redux/Services/Post";
import { RootState, AppDispatch } from '../Store';



const useFetchposts = (id: number, page: number) => {
   const dispatch = useDispatch<AppDispatch>()
   const posts = useSelector((state: RootState) => state.posts.userposts)
   console.log("current page", posts.current_page);
  useEffect(() => {
     if(id !== undefined){
       dispatch(getPosts({ id, currentPage: page }))
     }
  }, [dispatch, id, page])
  
  return posts;
}


export default useFetchposts;

