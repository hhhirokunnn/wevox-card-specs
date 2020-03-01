import React from "react";
import WaitingRoom from './WaitingRoom'
import { useReducer } from 'react';
import { gameReducer, initialState as gameInitState } from '../reducers/GameReducer';
import { gameRequest, gameSuccess, gameFailure } from "../actions/GameAction";
import { weboxAxios } from '../utils/weboxAxios';

const Home: React.FunctionComponent = () => {
  const [gameStore, dispatch] = useReducer(gameReducer, gameInitState)
  const fetchGameList = async () => {
    dispatch(gameRequest())
    await weboxAxios.get('games').then(response => dispatch(gameSuccess(response.data))).catch(error => dispatch(gameFailure(error)))
  }

  const gameList = gameStore.status === "success" ? gameStore.response : undefined
  const gameError = gameStore.status === "failure" ? gameStore.error : []

  return (
  <>
    {gameStore.status === "init" ? fetchGameList() : <WaitingRoom gameList={gameList || gameError} gameStore={gameStore}/> }
  </>
  );
}

export default Home
