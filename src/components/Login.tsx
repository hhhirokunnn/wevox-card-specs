import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { weboxAxios, TOKEN_KEY } from '../utils/weboxAxios';
import { AxiosResponse } from 'axios';
import { LoginResponse } from '../interfaces/login';
import { Redirect } from 'react-router';

const Login: React.FC = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const clickEvevent = (event: any) => {
    event.preventDefault()
    postLogin(userName, password)
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

        <button className="btn btn-primary" onClick={clickEvevent}> Login</button>
      </form>
    </div>
  );
}

const postLogin: (userName: string, password: string) => Promise<AxiosResponse<LoginResponse>> = async (userName: string, password: string) => {
  const response = await weboxAxios.post('login',
    {
      user_name: userName,
      password: password,
    })
    console.log(response)
    if (response.status === 200) {
      localStorage.setItem(TOKEN_KEY, response.data.preload.token);
    }
    else {
      alert('missed login information.')
    }
  return response
}

export default Login;
