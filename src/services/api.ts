import axios from 'axios'

export const USE_MOCK = import.meta.env.VITE_USE_MOCK !== 'false'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
})

export const esperar = (ms = 250) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms))
