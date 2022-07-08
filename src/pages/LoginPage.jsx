
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'

import {useForm} from '../hooks/useForm'
import {AuthContext} from '../auth/AuthContext'
import { types } from '../types/types'

const initialValue = {
  username: '',
  password: '',
}

export const LoginPage = () => {

  const { dispatch } = useContext(AuthContext)
  const { value, handleChange } = useForm(initialValue)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = value;
    if(username == 'yaniez' && password == 'joseito'){
      dispatch({
        type: types.login,
        payload: value,
      })
      localStorage.setItem('user', JSON.stringify(value));
      navigate('/');
    }
  }

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="w-80 h-[190px] p-4 px-8 flex flex-wrap border-2 border-breaking-200">
        <p className="basis-full  text-center text-breaking-200 font-bold">Login</p>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <input onChange={handleChange} autoComplete='off' className="block basis-full my-2 pl-1 border-b-2 border-breaking-200 focus:outline-none focus:border-stone-800" type='text' placeholder="Nombre de usuario" name='username'/>
          <input onChange={handleChange} className="basis-full my-2 pl-1 border-b-2 border-breaking-200 focus:border-stone-800 focus:outline-none" type='password' placeholder="Contraseña" name='password'/>
          <button type="submit" className="w-full p-[.1rem] my-4 border-2 text-breaking-200 border-breaking-200 hover:bg-breaking-200 hover:text-white active:bg-breaking-400 transition duration-75">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

