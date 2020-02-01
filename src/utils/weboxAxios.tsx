import Axios from 'axios';

export const TOKEN_KEY = 'jwt_token'

export const weboxAxios = Axios.create({
  baseURL: 'http://localhost:9292/api/v1/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem(TOKEN_KEY)
  }
})
