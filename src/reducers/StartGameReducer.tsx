import { Reducer } from 'redux';
import { StartGameAction } from '../actions/StartGameAction';

export type StartGameState = 
| { status: "init" }
| { status: "request" }
| { status: "success", response: any }
| { status: "failure", error: any }

export const initialState: StartGameState = { status: "init" }

export const startGameReducer: Reducer<
  StartGameState,
  StartGameAction
> = (state = initialState, action) => {
  switch (action.type) {
    case "startGameRequest":
      return { status: "request" };
    case "startGameSuccess":
      return { status: "success", response: action.payload.response };
    case "startGameFailure":
      return { status: "failure", error: action.error };
    default:
      return state
  }
}
