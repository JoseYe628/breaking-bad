
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import {types} from '../types/types'


export const Navbar = () => {

  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContext)

  const handleLogOut = (e) => {
    e.preventDefault()
    dispatch({
      type: types.logout,
    })
    navigate('/login')
    localStorage.removeItem('user')
  }

  return (
    <div className="bg-breaking-200 h-18 p-5 pl-10 flex items-center justify-start">
      <div className="w-28 text-white font-kdam hover:font-bold text-center ">Breaking Bad</div>
      <span className="w-20"></span>
    
      <ul className='absolute left-[-400px]  md:static'>
        <NavLink 
          className={ ({isActive}) => 'text-white mx-4' + (isActive ? ' text-gray-900 font-bold' : '') } 
          to='/'>
          Home
        </NavLink>

        <NavLink 
          className={ ({isActive}) => 'text-white mx-4' + (isActive ? ' text-gray-900 font-bold' : '') } 
          to='/breaking'>
          Breaking Bad
        </NavLink>

        <NavLink 
          className={ ({isActive}) => 'text-white mx-4' + (isActive ? ' text-gray-900 font-bold' : '') } 
          to='/better'>
          Better Call
        </NavLink>
      </ul>

      <span className="flex-1"></span>
      <div className="text-white hover:text-slate-400">{user.username}</div>
      <button onClick={handleLogOut} className="p-2 ml-8 box-content text-white border border-white rounded hover:text-gray-300">Logout</button>
    </div>
  )
}

