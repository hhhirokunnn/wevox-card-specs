import WeboxResponse from "../WeboxResponse";

export type JsonWebToken = string

export interface Login {
  token: JsonWebToken,
    exp: string
}

export interface LoginResponse extends WeboxResponse<Login>{}

export interface LoginRequest {
  user_name: string,
  password: string
}
