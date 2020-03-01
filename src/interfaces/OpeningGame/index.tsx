import WeboxResponse from "../WeboxResponse";

export interface OpeningGameResponse extends WeboxResponse<OpeningGame[]> {}
export interface OpeningGameErrorResponse extends WeboxResponse<ErrorResponse> {}

export interface ErrorResponse {
  errors: string
}

export interface OpeningGame {
  id: number,
  started: boolean,
  finished: boolean,
  players: OpeningGamePlayer[],
}

export interface OpeningGamePlayer {
  id: number,
  game_id: number,
  name: string,
}

export interface StartGameRequest {
  user_name: string,
  password: string
}
