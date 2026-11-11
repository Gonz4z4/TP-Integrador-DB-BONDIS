import { opinionesEnMemoria } from '@/data/mockApi'
import type { NuevaOpinion, Opinion } from '@/dominio/opinion'
import { api, esperar, USE_MOCK } from './api'

export const OpinionService = {
  // GET /opiniones
  async getOpiniones(): Promise<Opinion[]> {
    if (USE_MOCK) {
      await esperar()
      return [...opinionesEnMemoria]
    }
    const { data } = await api.get<Opinion[]>('/opiniones')
    return data
  },

  // POST /opiniones  { usuario, idLinea, nota, comentario }
  // La fecha la completa el backend (NOW()).
  async crearOpinion(nueva: NuevaOpinion): Promise<Opinion> {
    if (USE_MOCK) {
      await esperar()
      const opinion: Opinion = {
        ...nueva,
        idOpinion: Date.now(),
        fecha: new Date().toISOString(),
      }
      opinionesEnMemoria.unshift(opinion)
      return opinion
    }
    const { data } = await api.post<Opinion>('/opiniones', nueva)
    return data
  },
}

export default OpinionService
