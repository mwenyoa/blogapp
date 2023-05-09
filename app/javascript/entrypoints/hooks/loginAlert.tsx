import React, {useState} from "react";
import useSweetAlert from "./sweetAlert";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

type Props = {};

const useLoginAlert = (props: Props) => {
  const location = useLocation()
    const { ShowAlert } = useSweetAlert(props);
    const alert = () => ShowAlert({
        title: "Access Denied",
        text: "You need to login to view this  page",
        icon: "error",
        time: 2500,
      })
  return (
    <>
      { 
      (alert()) ? <Navigate to={'/Login'}  replace/> : <Navigate to={'/Login'}  replace/>
    }
    </>
  );
};

export default useLoginAlert;
