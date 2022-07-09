
import {BrowserRouter,  Routes, Route } from 'react-router-dom'
import {LoginPage} from '../pages/LoginPage';
import {AppRouter} from './AppRouter';

export const LoginRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/*' element={<AppRouter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

