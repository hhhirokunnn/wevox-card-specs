export type JsonWebToken = string

export interface LoginResponse {
  status: BigInteger
  preload: {
    token: JsonWebToken,
    exp: String
  }
}

export interface LoginRequest {
  user_name: String,
  password: String
}
