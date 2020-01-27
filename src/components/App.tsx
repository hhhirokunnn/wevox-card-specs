import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App: React.FC = () => {

  const clickEvevent = (e: any) => {
    // ボタン押下時のsubmitを動作させない。
    // reloadを防ぐことができる。
    e.preventDefault()
    response(e)
  }
  

  return (
    <div className= "container-fluid">
      <h4>Welcome to Wevox Card!</h4>
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="formUserName">UserName</label>
          <input className="form-control" id="formUserName" />
        </div>

        <div className="form-group">
          <label htmlFor="formPassword">Password</label>
          <input type="password" id="formPassword" className="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
          <small id="passwordHelpInline" className="text-muted">
              Must be 8-20 characters long.
            </small>
        </div>

        <button className="btn btn-primary" onClick={clickEvevent}> Login</button>
      </form>
    </div>
  );
}

const response = async (e: any) => {
  console.log(e)
  await axios.post('http://localhost:9292/api/v1/login',
  {
    // params: {
      user_name: 'hirokun',
      password: '123456',
    // }
  }
  )
}

export default App;
