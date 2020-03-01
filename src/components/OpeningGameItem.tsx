import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OpeningGame } from "../interfaces/OpeningGame"
import history from "react-router"
import { useHistory } from "react-router-dom";

const OpeningGameItem = (props: { openingGame: OpeningGame }) => {
  
  const isDisabledJoin = (started: boolean) => started ? 'disabled' : ''

  const history = useHistory()

  const joinGame = () => {
    history.push("/game_room");
  }

  return (
    <>
      <div className="media text-muted pt-3">
        <p className="bd-placeholder-img mr-2 rounded">No.{props.openingGame.id}</p>
        <p className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
          <strong className="">[参加者] </strong>
          {props.openingGame.players.map(p=>p.name).join(' /')}
        </p>
        <button className={`btn btn-primary text-white ${isDisabledJoin(props.openingGame.started)}`} role="button" onClick={ e => {
          e.preventDefault()
          joinGame()
        }}>参加</button>
      </div>
    </>
  )
}

export default OpeningGameItem
