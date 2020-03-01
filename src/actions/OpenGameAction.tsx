import { OpeningGameResponse } from "../interfaces/OpeningGame"
import { AxiosResponse } from "axios";

export type OpenGameAction = ReturnType<
| typeof openGameRequest
| typeof openGameSuccess
| typeof openGameFailure
>

export const openGameRequest = () => ({
  type: "openGameRequest" as const
})

export const openGameSuccess = (response: AxiosResponse<OpeningGameResponse>) => ({
  type: "openGameSuccess" as const,
  payload: { response }
})

export const openGameFailure = (error: any) => ({
  type: "openGameFailure" as const,
  error: error
})
