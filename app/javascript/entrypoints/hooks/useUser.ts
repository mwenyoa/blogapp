
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../Redux/Services/User";
import { RootState, AppDispatch } from "../Store";


type Props = {};

const useFetchUser = (Props: any) => {
    const params = useParams()
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user.user);
    useEffect(() => {
        if(params.id !== undefined){
            dispatch(fetchUser());
        }
    }, [dispatch, params.id]);
    
    return user;
    }

export default useFetchUser;