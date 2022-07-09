
import { Navbar } from '../components/Navbar'
import { Routes, Route } from 'react-router-dom'
import {HomePage, BreakingPage, BetterPage, CharacterInfoPage} from '../pages/pages';
import {PrivateRoute} from './PrivateRoute';
import {useContext} from 'react';
import {AuthContext} from '../auth/AuthContext';

export const AppRouter = () => {

  const { user } = useContext(AuthContext)

  return (
    <>
      {user.logged && <Navbar/>}
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path='/breaking' element={<BreakingPage/>} />
          <Route path='/better' element={<BetterPage/>} />
          <Route path='/character/:id' element={<CharacterInfoPage/>} />
          <Route path='/' element={<HomePage/>}/>
        </Route>
      </Routes>
    </>
  );
}

