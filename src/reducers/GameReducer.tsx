import { Reducer } from 'redux';
import { GameAction } from '../actions/GameAction';

export type GameState = 
| { status: "init" }
| { status: "request" }
| { status: "success", response: any }
| { status: "failure", error: any }

export const initialState: GameState = { status: "init" }

export const gameReducer: Reducer<
  GameState,
  GameAction
> = (state = initialState, action) => {
  switch (action.type) {
    case "gameRequest":
      return { status: "request" };
    case "gameSuccess":
      return { status: "success", response: action.payload.response };
    case "gameFailure":
      return { status: "failure", error: action.error };
    default:
      return state
  }
}
