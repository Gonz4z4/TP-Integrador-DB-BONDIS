import type { NuevaOpinion, Opinion } from '@/dominio/opinion'
import { REST_SERVER_URL } from './api'
import axios from 'axios'

export const OpinionService = {
  // GET /opiniones
  async getOpiniones(): Promise<Opinion[]> {
    const { data } = await axios.get<Opinion[]>(`${REST_SERVER_URL}/opiniones`)
    return data
  },

  // POST /lineas/{idLinea}/opinion  { usuario, nota, comentario }
  // La fecha la completa el backend (NOW()).
  async crearOpinion(nueva: NuevaOpinion): Promise<Opinion> {
    const { idLinea, ...body } = nueva
    const { data } = await axios.post<Opinion>(
      `${REST_SERVER_URL}/lineas/${idLinea}/opinion`,
      body
    )
    return data
  },
}

export default OpinionService
