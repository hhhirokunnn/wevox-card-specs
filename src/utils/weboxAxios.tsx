import Axios from 'axios';

export const TOKEN_KEY = 'jwt_token'

let token = localStorage.getItem(TOKEN_KEY)

export const weboxAxios = Axios.create({
  baseURL: 'http://localhost:9292/api/v1/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token
  }
})
