import React from 'react'
import { Button } from '@material-ui/core'
import useFetchUsers from '../hooks/useUsers'
import Users from './users/Users'

type Props = {}

const Home = (props: Props) => {
  const users = useFetchUsers(props);
  return (
    <Users users={users} />
  )
}

export default Home;