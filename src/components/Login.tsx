import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { weboxAxios, TOKEN_KEY } from '../utils/weboxAxios';

import { useHistory } from "react-router-dom";

const Login: React.FC = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory()

  const postLogin = async (userName: string, password: string) => {
    await weboxAxios.post('login',
      {
        user_name: userName,
        password: password,
      }).then( response => {
        localStorage.setItem(TOKEN_KEY, response.data.preload.token)
        history.push("/");
      }).catch( () => alert('WRONG LOGIN INFO') )
  }
  
  return (
    <div className= "container-fluid">
      <h4>Welcome to Wevox Card!</h4>
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="formUserName">UserName</label>
          <input type="text" className="form-control" id="formUserName" onChange={e => setUserName(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formPassword">Password</label>
          <input type="password" id="formPassword" className="form-control mx-sm-3" aria-describedby="passwordHelpInline" onChange={e => setPassword(e.target.value)}/>
          <small id="passwordHelpInline" className="text-muted">
              Must be more than 6 characters long.
            </small>
        </div>

        <button className="btn btn-primary" onClick={ e => {
          e.preventDefault()
          postLogin(userName, password)
        }}> Login</button>
      </form>
    </div>
  );
}

export default Login;
