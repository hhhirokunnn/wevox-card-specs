import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login'
import Home from './Home'
import { TOKEN_KEY } from '../utils/weboxAxios';
import GameRoom from "./GameRoom";


export default function App() {

  return (
    <Router>
      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/game_room">
          <GameRoom />
        </Route>
        <Route path="/">
          {localStorage.getItem(TOKEN_KEY) ? <Home /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}
