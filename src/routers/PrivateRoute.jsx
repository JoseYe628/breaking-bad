
import {useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {AuthContext} from '../auth/AuthContext'

export const PrivateRoute = () => {

  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    user.logged ? <Outlet/> : <Navigate to='/login'/>
  )
}


