import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

type Props = {
    url: ""
}

const useRedirect = (Props) => {
    const {url} = Props;
    const navigate: NavigateFunction = useNavigate();
    let Redirect:any =  navigate(url)
  return Redirect;
  
}

export default useRedirect