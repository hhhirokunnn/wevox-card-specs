import { OpeningGameResponse } from "../interfaces/OpeningGame"
import { AxiosResponse } from "axios";


export type GameAction = ReturnType<
| typeof gameRequest
| typeof gameSuccess
| typeof gameFailure
>

export const gameRequest = () => ({
  type: "gameRequest" as const
})

export const gameSuccess = (response: AxiosResponse<OpeningGameResponse>) => ({
  type: "gameSuccess" as const,
  payload: { response }
})

export const gameFailure = (error: any) => ({
  type: "gameFailure" as const,
  error: error
})
