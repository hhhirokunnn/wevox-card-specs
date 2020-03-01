import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OpeningGameResponse } from "../interfaces/OpeningGame"
import OpeningGameItem from "../components/OpeningGameItem"
import { weboxAxios } from '../utils/weboxAxios';
import { useReducer } from 'react';
import { openGameReducer, initialState as openGameInitState } from '../reducers/OpenGameReducer';
import { openGameRequest, openGameSuccess, openGameFailure } from "../actions/OpenGameAction";
import { useHistory } from "react-router-dom";
import { gameReducer, initialState as gameInitState, GameState } from '../reducers/GameReducer';
import { gameRequest, gameSuccess, gameFailure } from "../actions/GameAction";

const WaitingRoom = ( props: { gameList: OpeningGameResponse, gameStore: GameState } ) => {
  
  const [store, dispatch] = useReducer(openGameReducer, props.gameStore)
  const history = useHistory()

  const openGame = async () => {
    dispatch(openGameRequest())
    await weboxAxios.post('games')
    .then( response => {
      dispatch(openGameSuccess(response.data))
      history.push("/game_room");
    }).catch( error => {
      dispatch(openGameFailure(error))
      alert(`IS NOT OPENED. REASON: ${error}`)
    })
  }

  return (
    <>
      <div className= "container-fluid">
        <div className="container">
          <h1>待機室</h1>
          
          { props.gameList.preload ? props.gameList.preload.map(g =>
          (
            <>
              <OpeningGameItem key={g.id} openingGame={g}/>
            </>
          )):(
            <>
              <p>現在開催されているゲームがありません。</p>
              <form>
                <button className="btn btn-primary" onClick={openGame}>ゲーム開催</button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default WaitingRoom
