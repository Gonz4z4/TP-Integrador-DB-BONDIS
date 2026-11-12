import { Linea } from '@/dominio/linea'
import { REST_SERVER_URL } from './api'
import type { LineaDto } from './dto'
import axios from 'axios'

const aLinea = (dto: LineaDto) =>
  new Linea(dto.id, dto.numero, dto.jurisdiccion, dto.camara, [], [], {
    promedio: dto.promedio,
    cantidadOpiniones: dto.cantidadOpiniones,
  })

export const LineaService = {
  // GET /lineas
  async getLineas(): Promise<Linea[]> {
    const { data } = await axios.get<LineaDto[]>(`${REST_SERVER_URL}/lineas`)
    return data.map(aLinea)
  },
}

export default LineaService
