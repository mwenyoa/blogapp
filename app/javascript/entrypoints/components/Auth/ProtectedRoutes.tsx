import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import { lsActions } from '../../helpers/lsActions'
import useLoginAlert from '../../hooks/loginAlert'

type Props = {}

export const useAuth = () => {
  const  user = lsActions.getUser()
  
    return user
}

const RequireAuth = (props: Props) => {
  const alert = useLoginAlert(props)
  return (
    <>
        {useAuth() ? 
            <Outlet />
        : 
        alert }
      </>
  )
}

export default RequireAuth;