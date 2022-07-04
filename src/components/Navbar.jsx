
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
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
      <div className="text-white hover:text-slate-400">José Yaniez</div>
    </div>
  )
}

