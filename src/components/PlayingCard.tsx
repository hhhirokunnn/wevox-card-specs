import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface CardProp {
  card_id: number,
  title: string,
}

export const HandCards = (props: { cards: CardProp[], setter: any, testIndex: number } ) => {

  return (
    <div className="container">
      <div className="card-deck mb-3 text-center">
        {props.cards.map( card => <PlayingCard card={ card } state={{setter: props.setter, index: props.testIndex}}/>)}
      </div>
    </div>
  )
}

export const PlayingCard = (props: { card: CardProp, state: {setter: any, index: number }}) => {

  const updatePhase = () => {
    props.state.setter(props.state.index + 1)
  }

  return (
    <>
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h3 className="my-0 font-weight-normal">{props.card.title}</h3>
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-block btn-outline-danger" onClick={updatePhase}>捨てる</button>
        </div>
      </div>
    </>
  )
}
