
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './Login'
import WaitingRoom from './WaitingRoom'
import { TOKEN_KEY } from '../utils/weboxAxios';

export default function App() {
  return (
    <Router>
      <>
        {localStorage.getItem(TOKEN_KEY) == undefined ? <Redirect to="/" /> : ''}
        <Switch>
          <Route path="/game_room">
            <GameRoom />
          </Route>
          <Route path="/waiting_room">
            <WaitingRoom />
          </Route>
          <Route path="/">
            {localStorage.getItem(TOKEN_KEY) ? <Redirect to="/waiting_room" /> : <Login />}
          </Route>
        </Switch>
      </>
    </Router>
  );
}

function GameRoom() {
  return <h2>GameRoom</h2>;
}
