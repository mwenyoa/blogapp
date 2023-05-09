import React, { lazy, Suspense} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import useStyles from './Styles'
import PostListing from './components/users/userPostListing'
import { CircularProgress } from '@material-ui/core'

const Register = lazy(() => import('./components/users/newuser'))
const UserShow = lazy(() => import('./components/users/user'))
const AddPost = lazy(() => import('./components/posts/Post'))
const UserLogin = lazy(() => import('./components/users/Login'))
const RequireAuth = lazy(() => import('./components/Auth/ProtectedRoutes'))
const UserPostDetails = lazy(() => import('./components/posts/userPostDetails'));

type Props = {}

const App = (props: Props) => {
  const classes = useStyles();
  return (
      <>

      <Nav />
      <main className={classes.contentArea}>
      <Suspense fallback={<div className={classes.loader}><CircularProgress /></div>}> 
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path='/Login' element={<UserLogin />} />
        <Route path="/" element={<Home />} />
        <Route element={<RequireAuth />}>
            <Route path='/Post' element={ <AddPost/>} />
            <Route path='/users/:id/' element={<UserShow />} />
            <Route path='/users/:id/posts/' element={ <PostListing />} />
            <Route path='/users/:id/posts/:pid/' element={<UserPostDetails />} />
        </Route>
      </Routes>
      </Suspense>
      </main>
      <Footer />
      </>
  )
}

export default App