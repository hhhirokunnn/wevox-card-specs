import { Reducer } from 'redux';
import { OpenGameAction } from '../actions/OpenGameAction';

export type OpenGameState = 
| { status: "init" }
| { status: "request" }
| { status: "success", response: any }
| { status: "failure", error: any }

export const initialState: OpenGameState = { status: "init" }

export const openGameReducer: Reducer<
OpenGameState,
OpenGameAction
> = (state = initialState, action) => {
  switch (action.type) {
    case "openGameRequest":
      return { status: "request" };
    case "openGameSuccess":
      return { status: "success", response: action.payload.response };
    case "openGameFailure":
      return { status: "failure", error: action.error };
    default:
      return state
  }
}
