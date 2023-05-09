import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../Redux/Services/User";
import { RootState, AppDispatch } from "../Store";

type Props = {};
const useFetchUsers = (Props: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
 
  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  return users;
};

export default useFetchUsers;
