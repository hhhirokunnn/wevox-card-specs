import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const App: React.FC = () => {
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

        <button className="btn btn-primary"> Login</button>
      </form>
    </div>
  );
}

export default App;
