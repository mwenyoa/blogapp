import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../Redux/Services/User";

type Props = {};

const useLogin = (props: Props) => {
  const loggedInUser = useSelector((state: any) => state.login.loggedin);
  const dispatch = useDispatch();
  console.log("loggedInUser :", loggedInUser);
  useEffect(() => {
    if (!loggedInUser) {
      dispatch(LoginUser());
    }
  }, [dispatch, loggedInUser]);

  return loggedInUser;
};

export default useLogin;
