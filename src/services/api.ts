import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
})
export const REST_SERVER_URL = 'http://localhost:8080'
export const esperar = (ms = 250) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms))
