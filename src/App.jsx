
import {BrowserRouter,  Routes, Route } from 'react-router-dom'

import {Navbar} from './components/components';
import {HomePage, BreakingPage, BetterPage, CharacterInfoPage} from './pages/pages';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/breaking' element={<BreakingPage/>} />
          <Route path='/better' element={<BetterPage/>} />
          <Route path='/character/:id' element={<CharacterInfoPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App
