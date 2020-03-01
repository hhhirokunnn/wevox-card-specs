import { weboxAxios } from '../utils/weboxAxios';
import { Dispatch, AnyAction } from "redux";
import { gameRequest, gameSuccess, gameFailure } from "../actions/GameAction";
import { OpeningGameResponse } from '../interfaces/OpeningGame'

export const fetchGameList = async (dispatch: Dispatch<AnyAction>) => {
  dispatch(gameRequest())
  await weboxAxios.get<OpeningGameResponse>('games')
  .then(response => dispatch(gameSuccess(response)))
  .catch(reason => dispatch(gameFailure(reason)))
}
