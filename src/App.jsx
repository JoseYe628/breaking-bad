
import {useReducer} from 'react';
import {AuthContext} from './auth/AuthContext';
import {authReducer} from './auth/authReducer';
import {LoginRouter} from './routers/LoginRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  return (
    <>
      <AuthContext.Provider value={{user, dispatch}}>
        <LoginRouter/>
      </AuthContext.Provider>
    </>
  );
}


export default App
