import type { NuevaOpinion, Opinion, EdicionOpinion } from '@/dominio/opinion'
import type { OpinionDto } from './dto'
import { REST_SERVER_URL } from './api'
import axios from 'axios'

export const aOpinion = (o: OpinionDto, idLinea?: number):Opinion => ({
  idOpinion: o.id,
  idLinea: idLinea ?? o.idLinea,
  usuario: o.usuario,
  nota: o.nota,
  comentario: o.comentario,
  fecha: o.fecha,
})


export const OpinionService = {
  // GET /opiniones
  async getOpiniones(): Promise<Opinion[]> {
    const { data } = await axios.get<OpinionDto[]>(`${REST_SERVER_URL}/opiniones`)
    return data.map((o) => aOpinion(o))
  },

  // POST /lineas/{idLinea}/opinion  { usuario, nota, comentario }
  // La fecha la completa el backend (NOW()).
  async crearOpinion(nueva: NuevaOpinion): Promise<Opinion> {
    const { idLinea, ...body } = nueva
    const { data } = await axios.post<OpinionDto>(
      `${REST_SERVER_URL}/lineas/${idLinea}/opinion`,
      body
    )
    return aOpinion(data, idLinea)
  },

  async eliminarOpinion(idOpinion: number): Promise<void> {
    await axios.delete(`${REST_SERVER_URL}/opiniones/${idOpinion}`)
  },

  async editarOpinion(idOpinion: number, cambios: EdicionOpinion): Promise<Opinion> {
    const { data } = await axios.put<OpinionDto>(
      `${REST_SERVER_URL}/opiniones/${idOpinion}`,
      cambios
    )
    return aOpinion(data)
  },
}

export default OpinionService
