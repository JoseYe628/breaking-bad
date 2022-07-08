
import { Navbar } from '../components/Navbar'
import { Routes, Route } from 'react-router-dom'
import {HomePage, BreakingPage, BetterPage, CharacterInfoPage} from '../pages/pages';

export const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/breaking' element={<BreakingPage/>} />
        <Route path='/better' element={<BetterPage/>} />
        <Route path='/character/:id' element={<CharacterInfoPage/>} />
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </>
  );
}

