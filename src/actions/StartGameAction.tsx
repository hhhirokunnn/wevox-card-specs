import { OpeningGame } from "../interfaces/OpeningGame"
import { AxiosResponse } from "axios";

export type StartGameAction = ReturnType<
| typeof startGameRequest
| typeof startGameSuccess
| typeof startGameFailure
>

export const startGameRequest = () => ({
  type: "startGameRequest" as const
})

export const startGameSuccess = (response: AxiosResponse<OpeningGame>) => ({
  type: "startGameSuccess" as const,
  payload: { response }
})

export const startGameFailure = (error: any) => ({
  type: "startGameFailure" as const,
  error: error
})
