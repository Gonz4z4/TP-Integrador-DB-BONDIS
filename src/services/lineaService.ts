import { lineasDtoMock } from '@/data/mockApi'
import { Linea, Ramal, Recorrido } from '@/dominio/linea'
import { api, esperar, USE_MOCK } from './api'
import type { LineaDto } from './dto'

const aLinea = (dto: LineaDto) =>
  new Linea(
    dto.idLinea,
    dto.numero,
    dto.jurisdiccion,
    dto.camara,
    dto.ramales
      .map(
        (ramal) =>
          new Ramal(
            ramal.idRamal,
            ramal.letra,
            ramal.modalidad,
            ramal.recorridos.map(
              (r) =>
                new Recorrido(r.idRecorrido, r.sentido, r.origen, r.destino)
            )
          )
      )
      .sort((a, b) => a.letra.localeCompare(b.letra))
  )

export const LineaService = {
  // GET /lineas
  async getLineas(): Promise<Linea[]> {
    if (USE_MOCK) {
      await esperar()
      return lineasDtoMock().map(aLinea)
    }
    const { data } = await api.get<LineaDto[]>('/lineas')
    return data.map(aLinea)
  },
}

export default LineaService
