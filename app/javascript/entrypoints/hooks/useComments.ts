import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../Redux/Services/Comment";
import { RootState, AppDispatch } from "../Store";


const useFetchComments = () => {
    const {comments} = useSelector((state: RootState) => state.comments);
    const dispatch  = useDispatch<AppDispatch>()

    useEffect(() => {
      dispatch(fetchComments())
    }, [comments?.length, dispatch])

    return comments;
}

export default useFetchComments;