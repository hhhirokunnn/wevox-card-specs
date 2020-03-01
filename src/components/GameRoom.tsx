import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { weboxAxios } from '../utils/weboxAxios';
import { OpeningGameResponse } from "../interfaces/OpeningGame"
import { HandCards } from "./PlayingCard"
import { useHistory } from "react-router-dom";
import { startGameReducer, initialState as startGameInitState } from '../reducers/StartGameReducer';
import { startGameRequest, startGameSuccess, startGameFailure } from "../actions/StartGameAction";

const GameRoom: React.FC = () => {

  // get game information from state
  const [game, setGameState] = useState({});
  const [test, setTest] = useState(false);
  const [testIndex, setTestIndex] = useState(1);

  const [store, dispatch] = useReducer(startGameReducer, startGameInitState)

  const postStartGame = async (gameId: number = 1, playerId: number)  => {
    dispatch(startGameRequest())
    await weboxAxios.put('start_game',
      {
        game_id: gameId,
        player_id: playerId,
      }).then( response => {
        dispatch(startGameSuccess(response.data))
      }).catch( error => {
        dispatch(startGameFailure(error))
        alert(`IS NOT STARTED. REASON: ${error}`)
      })
  }

  const fetchPlayingCards = async ()  => {
    const response = await weboxAxios.get(`games/${game}/cards`).then(
      (res) => {
        setGameState(res.data)
        return res
      }
    )
    return response
  }

  const isGameStarted = test

  const clickEvevent = (e: any) => {
    e.preventDefault()
    setTest(!test)
    postStartGame(1,1)
  }

  const history = useHistory()

  const cardList = [{ title: "気力", card_id: 1 }, {title: "体力", card_id: 2 },{ title: "根性", card_id: 3 }]

  const buttonOpenGame = (
    <form className="form-inline">
      <button className="btn btn-primary" onClick={clickEvevent}>ゲーム開始</button>
    </form>
  )

  const OpenGameButton = (
    <>
      {isGameStarted ? (
      <>
        <p>残ターン: {25 - testIndex}</p>
        <HandCards cards={cardList} setter={setTestIndex} testIndex={testIndex}/>
      </>
      ) : buttonOpenGame}
      {JSON.stringify(fetchPlayingCards())}
    </>
  )

  const LastHandCards = [1,2,3,4,5].map( i => 
    
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h5 className="my-0 font-weight-normal">要素{i}</h5>
      </div>
      <div className="card-body">
        <h5 className="card-title pricing-card-title">根性</h5>
      </div>
    </div> 
  )

  const PlayedPlayers = [1,2,3,4,5].map( i => 
    <>
      <h4>名前: プレイヤー{i}</h4>
      <div className="card-deck mb-3 text-center">{LastHandCards}</div>
    </>
  )

  const PlayingGame = () => {
    if(testIndex < 2) {
      return OpenGameButton;
    } else {
      return (
        <div className="jumbotron">
          <div className="alert alert-primary" role="alert">
            <h4 className="p-3 mb-2 text-center">ゲーム終了</h4>
          </div>
          <div>
            <h2 className="text-center">結果</h2>
            {PlayedPlayers}
          </div>
          <button className="btn btn-primary" onClick={() => history.push("/")}>待機室に戻る</button>
        </div>
      )
    }
  }

  return (
    <div className= "container-fluid">
      <div className="container">
        <h1>ゲーム部屋</h1>
        {PlayingGame()}
      </div>
    </div>
  )
}

export default GameRoom
