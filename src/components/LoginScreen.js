import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = props => {

  const {setUser} = useContext(UserContext);

  return (
    <div>
      <h2>Login Screen</h2>
      <hr />
      <button onClick={() => setUser(
        {id: 1234, name: 'Carlos'}
      )}>
        Ingresar
      </button>
    </div>
  )
}

export default LoginScreen
